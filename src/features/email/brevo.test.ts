import { describe, expect, it, vi } from "vitest";
import { createBrevoEmailService } from "./brevo";

const config = {
  apiKey: "brevo-secret-key",
  senderEmail: "academy@example.com",
  adminEmail: "admin@example.com",
};

describe("Brevo email service", () => {
  it("sends an enquiry notification to the admin using the transactional email envelope", async () => {
    const fetcher = vi.fn(async () => new Response(null, { status: 201 }));
    const service = createBrevoEmailService(config, fetcher);

    const result = await service.sendEnquiryNotification({
      studentName: "Asha",
      className: "Class 10",
      boardName: "CBSE",
      phone: "1234567890",
      email: "asha@example.com",
      dateOfBirth: "2010-01-02",
    });

    expect(result).toEqual({ success: true });
    expect(fetcher).toHaveBeenCalledOnce();
    const [url, init] = fetcher.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("https://api.brevo.com/v3/smtp/email");
    expect(new Headers(init.headers).get("api-key")).toBe(config.apiKey);
    expect(JSON.parse(String(init.body))).toMatchObject({
      sender: { email: config.senderEmail },
      to: [{ email: config.adminEmail }],
    });
  });

  it("does not call Brevo when configuration is incomplete", async () => {
    const fetcher = vi.fn(async () => new Response(null, { status: 201 }));
    const service = createBrevoEmailService(
      { apiKey: "", senderEmail: "", adminEmail: "" },
      fetcher,
    );

    await expect(
      service.sendOtp({
        recipientEmail: "student@example.com",
        recipientName: "Student",
        otp: "1234",
        purpose: "student-password-reset",
      }),
    ).resolves.toEqual({ success: false, code: "NOT_CONFIGURED" });
    expect(fetcher).not.toHaveBeenCalled();
  });

  it("returns a safe delivery failure and logs no OTP or API key", async () => {
    const log = vi.spyOn(console, "warn").mockImplementation(() => undefined);
    const fetcher = vi.fn(async () => new Response("sensitive upstream response", { status: 503 }));
    const service = createBrevoEmailService(config, fetcher);

    await expect(
      service.sendOtp({
        recipientEmail: "admin@example.com",
        recipientName: "Admin",
        otp: "2468",
        purpose: "admin-password-reset",
      }),
    ).resolves.toEqual({ success: false, code: "DELIVERY_FAILED" });
    const logContent = String(log.mock.calls[0]?.[0]);
    expect(logContent).toContain("503");
    expect(logContent).not.toContain("2468");
    expect(logContent).not.toContain(config.apiKey);
    log.mockRestore();
  });

  it("rejects malformed OTP values before making a request", async () => {
    const fetcher = vi.fn(async () => new Response(null, { status: 201 }));
    const service = createBrevoEmailService(config, fetcher);

    await expect(
      service.sendOtp({
        recipientEmail: "student@example.com",
        recipientName: "Student",
        otp: "12345",
        purpose: "student-password-reset",
      }),
    ).resolves.toEqual({ success: false, code: "INVALID_REQUEST" });
    expect(fetcher).not.toHaveBeenCalled();
  });
});
