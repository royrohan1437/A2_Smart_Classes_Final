export type SecurityHeader = { key: string; value: string };

export function getSecurityHeaders(productionHttps: boolean): SecurityHeader[] {
  const headers: SecurityHeader[] = [
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    {
      key: "Permissions-Policy",
      value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
    },
  ];
  if (productionHttps) {
    headers.push({ key: "Strict-Transport-Security", value: "max-age=31536000" });
  }
  return headers;
}
