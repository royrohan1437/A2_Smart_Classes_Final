export type SessionCookieRole = "student" | "admin";

export type SessionCookieOptions = {
  httpOnly: true;
  secure: boolean;
  sameSite: "lax";
  path: "/";
  maxAge: number;
};

export function getSessionCookieConfig(input: {
  role: SessionCookieRole;
  maxAgeSeconds: number;
  production?: boolean;
}): { name: string; options: SessionCookieOptions } {
  if (!Number.isSafeInteger(input.maxAgeSeconds) || input.maxAgeSeconds <= 0) {
    throw new Error("Session cookie lifetime must be a positive integer.");
  }

  const production = input.production ?? process.env.NODE_ENV === "production";
  const baseName = `a2-${input.role}-session`;
  return {
    name: production ? `__Host-${baseName}` : baseName,
    options: {
      httpOnly: true,
      secure: production,
      sameSite: "lax",
      path: "/",
      maxAge: input.maxAgeSeconds,
    },
  };
}
