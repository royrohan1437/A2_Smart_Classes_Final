type LogLevel = "info" | "warn" | "error";
type LogMetadata = Record<string, unknown>;

const SENSITIVE_KEY =
  /(password|passwd|otp|token|secret|authorization|api[-_]?key|cookie|signed.?url)/i;

function redact(value: unknown, key?: string): unknown {
  if (key && SENSITIVE_KEY.test(key)) return "[REDACTED]";
  if (Array.isArray(value)) return value.map((entry) => redact(entry));
  if (value && typeof value === "object") {
    if (value instanceof Error) return { name: value.name };
    if (value instanceof Date) return value.toISOString();
    return Object.fromEntries(
      Object.entries(value).map(([childKey, childValue]) => [
        childKey,
        redact(childValue, childKey),
      ]),
    );
  }
  if (typeof value === "bigint") return value.toString();
  return value;
}

export function logEvent(
  event: string,
  metadata: LogMetadata = {},
  level: LogLevel = "info",
): void {
  const record = {
    timestamp: new Date().toISOString(),
    level,
    event,
    ...((redact(metadata) as LogMetadata) ?? {}),
  };
  console[level](JSON.stringify(record));
}
