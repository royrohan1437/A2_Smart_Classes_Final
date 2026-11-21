import { describe, expect, it } from "vitest";
import { getSessionCookieConfig } from "./cookies";

describe("session cookie policy", () => {
  it("uses host-only secure cookies in production", () => {
    const cookie = getSessionCookieConfig({
      role: "student",
      maxAgeSeconds: 3600,
      production: true,
    });
    expect(cookie).toEqual({
      name: "__Host-a2-student-session",
      options: { httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: 3600 },
    });
  });

  it("keeps local HTTP development usable without the production prefix", () => {
    const cookie = getSessionCookieConfig({
      role: "admin",
      maxAgeSeconds: 3600,
      production: false,
    });
    expect(cookie.name).toBe("a2-admin-session");
    expect(cookie.options.secure).toBe(false);
    expect(cookie.options.httpOnly).toBe(true);
  });

  it("rejects an invalid lifetime rather than creating a session cookie without expiry", () => {
    expect(() =>
      getSessionCookieConfig({ role: "student", maxAgeSeconds: 0, production: true }),
    ).toThrow();
  });
});
