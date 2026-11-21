"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm({ role }: { role: "student" | "admin" }) {
  const [message, setMessage] = useState("");
  const isStudent = role === "student";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Sign-in will be available when account services are connected.");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" aria-describedby="login-status">
      <Input
        label={isStudent ? "Phone number or student ID" : "Admin email"}
        name="identity"
        autoComplete={isStudent ? "username" : "email"}
        required
      />
      <Input
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
      />
      {isStudent ? (
        <Link
          href="/student/forgot-password"
          className="justify-self-end text-sm font-semibold text-gold-700 underline underline-offset-4"
        >
          Forgot password?
        </Link>
      ) : null}
      <Button type="submit" variant="secondary" className="w-full rounded-md">
        Sign in
      </Button>
      <p
        id="login-status"
        role="status"
        aria-live="polite"
        className="min-h-5 text-sm text-charcoal-soft"
      >
        {message}
      </p>
      <Link
        href={isStudent ? "/admin/login" : "/student/login"}
        className="text-center text-sm text-gold-700 underline underline-offset-4"
      >
        {isStudent ? "Administrator access" : "Student access"}
      </Link>
    </form>
  );
}
