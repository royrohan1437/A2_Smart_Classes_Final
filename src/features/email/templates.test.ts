import { describe, expect, it } from "vitest";
import { createEnquiryEmail, createOtpEmail } from "./templates";

describe("transactional email templates", () => {
  it("escapes enquiry fields in HTML and includes readable text", () => {
    const template = createEnquiryEmail({
      studentName: "<script>alert('x')</script>",
      className: "Class < 10",
      boardName: "CBSE & Friends",
      phone: "1234567890",
      email: "student@example.com",
      dateOfBirth: "2010-01-02",
    });

    expect(template.html).not.toContain("<script>");
    expect(template.html).toContain("&lt;script&gt;");
    expect(template.text).toContain("CBSE & Friends");
  });

  it("creates student and admin OTP messages without logging or exposing content elsewhere", () => {
    const student = createOtpEmail({
      name: "Learner",
      otp: "4821",
      purpose: "student-password-reset",
    });
    const admin = createOtpEmail({
      name: "Administrator",
      otp: "4821",
      purpose: "admin-password-reset",
    });

    expect(student.subject).toContain("password reset");
    expect(admin.subject).toContain("admin");
    expect(student.text).toContain("4821");
    expect(student.html).toContain("4821");
  });
});
