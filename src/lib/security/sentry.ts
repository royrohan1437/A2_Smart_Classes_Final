import type { DataCollection } from "@sentry/core";

const PRIVATE_DATA_COLLECTION: DataCollection = {
  userInfo: false,
  cookies: false,
  httpHeaders: false,
  httpBodies: [],
  urlQueryParams: false,
  databaseQueryData: false,
  stackFrameVariables: false,
};

export function sanitizeSentryEvent<T extends object>(event: T): T {
  const safeEvent = { ...event } as Record<string, unknown>;
  for (const key of ["request", "user", "breadcrumbs", "extra", "message", "logentry"]) {
    delete safeEvent[key];
  }

  const exception = safeEvent.exception;
  if (exception && typeof exception === "object" && "values" in exception) {
    const values = (exception as { values?: unknown }).values;
    if (Array.isArray(values)) {
      safeEvent.exception = {
        ...exception,
        values: values.map((value) =>
          value && typeof value === "object" ? { ...value, value: "[redacted]" } : value,
        ),
      };
    }
  }

  return safeEvent as T;
}

export function getSentryPrivacyOptions(dsn = process.env.SENTRY_DSN) {
  return {
    dsn: dsn || undefined,
    enabled: Boolean(dsn),
    dataCollection: PRIVATE_DATA_COLLECTION,
    beforeSend: sanitizeSentryEvent,
    sendDefaultPii: false,
  };
}
