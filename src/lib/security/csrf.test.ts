import { describe, expect, it } from "vitest";
import { validateSameOriginRequest } from "./csrf";

function request(method: string, headers: Record<string, string> = {}) {
  return new Request("https://classes.example/api/change", { method, headers });
}

describe("CSRF origin policy", () => {
  it("allows safe methods without an Origin header", () => {
    expect(
      validateSameOriginRequest(request("GET"), {
        appUrl: "https://classes.example",
        production: true,
      }).allowed,
    ).toBe(true);
  });

  it("allows same-origin mutations using Origin or Referer", () => {
    expect(
      validateSameOriginRequest(request("POST", { origin: "https://classes.example" }), {
        appUrl: "https://classes.example",
        production: true,
      }).allowed,
    ).toBe(true);
    expect(
      validateSameOriginRequest(request("DELETE", { referer: "https://classes.example/admin" }), {
        appUrl: "https://classes.example",
        production: true,
      }).allowed,
    ).toBe(true);
  });

  it("rejects cross-origin, malformed and origin-less unsafe requests", () => {
    const options = { appUrl: "https://classes.example", production: true };
    expect(
      validateSameOriginRequest(request("POST", { origin: "https://attacker.example" }), options)
        .allowed,
    ).toBe(false);
    expect(validateSameOriginRequest(request("POST", { origin: "null" }), options).allowed).toBe(
      false,
    );
    expect(validateSameOriginRequest(request("POST"), options).allowed).toBe(false);
    expect(
      validateSameOriginRequest(
        request("POST", { origin: "https://classes.example.evil" }),
        options,
      ).allowed,
    ).toBe(false);
  });

  it("fails closed in production without a configured application origin", () => {
    expect(
      validateSameOriginRequest(request("POST", { origin: "https://classes.example" }), {
        production: true,
      }).allowed,
    ).toBe(false);
  });
});
