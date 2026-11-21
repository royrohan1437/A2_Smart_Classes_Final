export type EnquiryEmailInput = {
  studentName: string;
  className: string;
  boardName: string;
  dateOfBirth: string;
  phone: string;
  email: string;
};

export type OtpEmailInput = {
  name: string;
  otp: string;
  purpose: "student-password-reset" | "admin-password-reset";
};

export type EmailTemplate = { subject: string; html: string; text: string };

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const replacements: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return replacements[character] ?? character;
  });
}

export function createEnquiryEmail(input: EnquiryEmailInput): EmailTemplate {
  const fields: Array<[string, string]> = [
    ["Student", input.studentName],
    ["Class", input.className],
    ["Board", input.boardName],
    ["Date of birth", input.dateOfBirth],
    ["Phone", input.phone],
    ["Email", input.email],
  ];
  const text = [
    "A new admission enquiry was submitted.",
    "",
    ...fields.map(([label, value]) => `${label}: ${value}`),
  ].join("\n");
  const rows = fields
    .map(
      ([label, value]) =>
        `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`,
    )
    .join("");
  return {
    subject: "New admission enquiry",
    text,
    html: `<h1>New admission enquiry</h1><table>${rows}</table>`,
  };
}

export function createOtpEmail(input: OtpEmailInput): EmailTemplate {
  const audience = input.purpose === "admin-password-reset" ? "admin" : "student";
  const subject = `A2Smart Classes ${audience} password reset code`;
  const safeName = escapeHtml(input.name);
  const safeOtp = escapeHtml(input.otp);
  const text = `Hello ${input.name},\n\nYour password reset code is ${input.otp}. It expires in five minutes. If you did not request this code, you can ignore this email.`;
  const html = `<p>Hello ${safeName},</p><p>Your password reset code is <strong>${safeOtp}</strong>.</p><p>It expires in five minutes. If you did not request this code, you can ignore this email.</p>`;
  return { subject, text, html };
}
