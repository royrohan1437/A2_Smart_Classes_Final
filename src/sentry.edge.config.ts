import * as Sentry from "@sentry/nextjs";
import { getSentryPrivacyOptions } from "@/lib/security/sentry";

Sentry.init(getSentryPrivacyOptions());
