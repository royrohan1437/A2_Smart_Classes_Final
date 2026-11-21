import {
  cleanupExpiredSecurityRecords,
  createSecurityCleanupHandler,
} from "@/lib/security/cleanup";
import { getPrismaClient } from "@/lib/prisma";

export const GET = createSecurityCleanupHandler(process.env.CRON_SECRET, async () => {
  const client = getPrismaClient();
  return cleanupExpiredSecurityRecords(
    client as unknown as Parameters<typeof cleanupExpiredSecurityRecords>[0],
  );
});
