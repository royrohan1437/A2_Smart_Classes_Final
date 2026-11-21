import * as Sentry from "@sentry/nextjs";
import { getSentryPrivacyOptions } from "@/lib/security/sentry";

Sentry.init(getSentryPrivacyOptions());

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
