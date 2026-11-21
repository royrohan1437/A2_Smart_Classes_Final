"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AccountForm({ mode }: { mode: "recovery" | "change" }) {
  const [message, setMessage] = useState("");
  const recovery = mode === "recovery";
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Password services are not connected yet. Your information was not sent.");
  }
  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      {recovery ? (
        <>
          <Input
            label="Phone number or student ID"
            name="identity"
            autoComplete="username"
            required
          />
          <Input label="Email address" name="email" type="email" autoComplete="email" required />
          <p className="text-sm leading-6 text-muted">
            The academy will verify these details before sending a one-time code.
          </p>
        </>
      ) : (
        <>
          <Input
            label="Current password"
            name="currentPassword"
            type="password"
            autoComplete="current-password"
            required
          />
          <Input
            label="New password"
            name="newPassword"
            type="password"
            autoComplete="new-password"
            required
          />
          <Input
            label="Confirm new password"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
          />
        </>
      )}
      <Button type="submit" variant="secondary" className="w-full rounded-md">
        {recovery ? "Continue" : "Save new password"}
      </Button>
      <p role="status" aria-live="polite" className="min-h-5 text-sm text-charcoal-soft">
        {message}
      </p>
      <Link
        href="/student/login"
        className="text-center text-sm text-gold-700 underline underline-offset-4"
      >
        Back to student sign in
      </Link>
    </form>
  );
}
