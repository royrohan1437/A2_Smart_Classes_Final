export type CsrfCheckOptions = {
  appUrl?: string;
  production?: boolean;
};

export type CsrfCheckResult =
  | { allowed: true }
  | {
      allowed: false;
      reason:
        | "origin_not_configured"
        | "origin_missing"
        | "origin_invalid"
        | "origin_mismatch"
        | "cross_site";
    };

const SAFE_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);

export function validateSameOriginRequest(
  request: Pick<Request, "method" | "headers" | "url">,
  options: CsrfCheckOptions = {},
): CsrfCheckResult {
  const method = request.method.toUpperCase();
  if (SAFE_METHODS.has(method)) return { allowed: true };

  if (request.headers.get("sec-fetch-site")?.toLowerCase() === "cross-site") {
    return { allowed: false, reason: "cross_site" };
  }

  const production = options.production ?? process.env.NODE_ENV === "production";
  let expectedOrigin: string;
  try {
    if (options.appUrl) {
      expectedOrigin = new URL(options.appUrl).origin;
    } else if (!production) {
      expectedOrigin = new URL(request.url).origin;
    } else {
      return { allowed: false, reason: "origin_not_configured" };
    }
  } catch {
    return { allowed: false, reason: "origin_not_configured" };
  }

  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const source = origin ?? referer;
  if (!source) return { allowed: false, reason: "origin_missing" };

  let sourceOrigin: string;
  try {
    if (origin && origin !== "null") {
      sourceOrigin = new URL(origin).origin;
    } else if (!origin && referer) {
      sourceOrigin = new URL(referer).origin;
    } else {
      return { allowed: false, reason: "origin_invalid" };
    }
  } catch {
    return { allowed: false, reason: "origin_invalid" };
  }

  return sourceOrigin === expectedOrigin
    ? { allowed: true }
    : { allowed: false, reason: "origin_mismatch" };
}
