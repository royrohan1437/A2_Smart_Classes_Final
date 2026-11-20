import { z } from "zod";

const serverEnvironmentSchema = z.object({
  DATABASE_URL: z.string().min(1).optional(),
  DIRECT_URL: z.string().min(1).optional(),
  R2_ACCOUNT_ID: z.string().min(1).optional(),
  R2_ACCESS_KEY_ID: z.string().min(1).optional(),
  R2_SECRET_ACCESS_KEY: z.string().min(1).optional(),
  R2_BUCKET_NAME: z.string().min(1).optional(),
  R2_PRIVATE_BUCKET_NAME: z.string().min(1).optional(),
  R2_PUBLIC_BUCKET_NAME: z.string().min(1).optional(),
  BREVO_API_KEY: z.string().min(1).optional(),
  BREVO_SENDER_EMAIL: z.string().email().optional().or(z.literal("")),
  BREVO_ADMIN_EMAIL: z.string().email().optional().or(z.literal("")),
  SESSION_SECRET: z.string().min(32).optional(),
  ADMIN_BOOTSTRAP_TOKEN: z.string().min(16).optional(),
  NEXT_PUBLIC_APP_URL: z.string().url().optional().or(z.literal("")),
  SENTRY_DSN: z.string().url().optional().or(z.literal("")),
});

export type ServerEnvironment = z.infer<typeof serverEnvironmentSchema>;

export function getServerEnvironment(): ServerEnvironment {
  return serverEnvironmentSchema.parse(process.env);
}
