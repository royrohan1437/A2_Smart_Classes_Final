export type SessionExpiryState = {
  createdAt: Date;
  expiresAt: Date;
  revokedAt: Date | null;
};

export type OtpExpiryState = {
  expiresAt: Date;
  consumedAt: Date | null;
  invalidatedAt: Date | null;
};

export function isSessionUsable(
  session: SessionExpiryState,
  now: Date,
  absoluteMaxAgeMs: number,
): boolean {
  if (!Number.isSafeInteger(absoluteMaxAgeMs) || absoluteMaxAgeMs <= 0) return false;
  return (
    session.revokedAt === null &&
    session.expiresAt.getTime() > now.getTime() &&
    session.createdAt.getTime() + absoluteMaxAgeMs > now.getTime()
  );
}

export function isOtpUsable(otp: OtpExpiryState, now: Date): boolean {
  return (
    otp.expiresAt.getTime() > now.getTime() && otp.consumedAt === null && otp.invalidatedAt === null
  );
}
