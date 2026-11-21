import { z } from "zod";
import { getServerEnvironment } from "../../lib/env";
import { logEvent } from "../../lib/logger";
import {
  createEnquiryEmail,
  createOtpEmail,
  type EnquiryEmailInput,
  type OtpEmailInput,
} from "./templates";

const BREVO_EMAIL_ENDPOINT = "https://api.brevo.com/v3/smtp/email";
const emailSchema = z.string().email();
const otpSchema = z.string().regex(/^\d{4}$/);

export type BrevoConfig = {
  apiKey?: string;
  senderEmail?: string;
  adminEmail?: string;
};

export type EmailSendResult =
  | { success: true }
  | { success: false; code: "NOT_CONFIGURED" | "INVALID_REQUEST" | "DELIVERY_FAILED" };

type FetchImplementation = typeof fetch;

export function createBrevoEmailService(
  config: BrevoConfig,
  fetchImplementation: FetchImplementation = fetch,
) {
  async function send(
    operation: string,
    recipient: string,
    template: ReturnType<typeof createOtpEmail>,
  ): Promise<EmailSendResult> {
    if (!config.apiKey || !config.senderEmail) return { success: false, code: "NOT_CONFIGURED" };
    if (
      !emailSchema.safeParse(recipient).success ||
      !emailSchema.safeParse(config.senderEmail).success
    ) {
      return { success: false, code: "INVALID_REQUEST" };
    }

    let response: Response;
    try {
      response = await fetchImplementation(BREVO_EMAIL_ENDPOINT, {
        method: "POST",
        headers: { "content-type": "application/json", "api-key": config.apiKey },
        body: JSON.stringify({
          sender: { email: config.senderEmail },
          to: [{ email: recipient }],
          subject: template.subject,
          htmlContent: template.html,
          textContent: template.text,
        }),
      });
    } catch {
      logEvent("email.brevo.failed", { operation, reason: "network_error" }, "warn");
      return { success: false, code: "DELIVERY_FAILED" };
    }

    if (!response.ok) {
      logEvent("email.brevo.failed", { operation, status: response.status }, "warn");
      return { success: false, code: "DELIVERY_FAILED" };
    }
    logEvent("email.brevo.sent", { operation, status: response.status });
    return { success: true };
  }

  return {
    async sendEnquiryNotification(input: EnquiryEmailInput): Promise<EmailSendResult> {
      if (!config.adminEmail || !emailSchema.safeParse(config.adminEmail).success) {
        return { success: false, code: "NOT_CONFIGURED" };
      }
      return send("enquiry_notification", config.adminEmail, createEnquiryEmail(input));
    },

    async sendOtp(
      input: Omit<OtpEmailInput, "name"> & { recipientEmail: string; recipientName: string },
    ): Promise<EmailSendResult> {
      if (
        !otpSchema.safeParse(input.otp).success ||
        !emailSchema.safeParse(input.recipientEmail).success
      ) {
        return { success: false, code: "INVALID_REQUEST" };
      }
      return send(
        "password_reset_otp",
        input.recipientEmail,
        createOtpEmail({
          name: input.recipientName,
          otp: input.otp,
          purpose: input.purpose,
        }),
      );
    },
  };
}

export function createBrevoEmailServiceFromEnvironment() {
  const env = getServerEnvironment();
  return createBrevoEmailService({
    apiKey: env.BREVO_API_KEY,
    senderEmail: env.BREVO_SENDER_EMAIL,
    adminEmail: env.BREVO_ADMIN_EMAIL,
  });
}
