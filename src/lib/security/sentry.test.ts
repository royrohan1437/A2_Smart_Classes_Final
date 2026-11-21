import { describe, expect, it } from "vitest";
import { getSentryPrivacyOptions, sanitizeSentryEvent } from "./sentry";

describe("privacy-safe Sentry configuration", () => {
  it("disables automatic collection of identity, request payloads, cookies, headers and query values", () => {
    expect(getSentryPrivacyOptions().dataCollection).toEqual({
      userInfo: false,
      cookies: false,
      httpHeaders: false,
      httpBodies: [],
      urlQueryParams: false,
      databaseQueryData: false,
      stackFrameVariables: false,
    });
  });

  it("strips potentially sensitive request context and user data from captured events", () => {
    const event = sanitizeSentryEvent({
      message: "password=secret",
      exception: { values: [{ type: "Error", value: "token=secret" }] },
      request: {
        url: "https://example.test/reset?otp=1234",
        data: { password: "secret" },
        headers: { cookie: "session" },
      },
      user: { email: "student@example.com", ip_address: "127.0.0.1" },
      breadcrumbs: [{ message: "request payload" }],
      extra: { accessToken: "secret" },
    });
    expect(event).toEqual({ exception: { values: [{ type: "Error", value: "[redacted]" }] } });
  });
});
