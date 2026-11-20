import { z } from "zod";

export const enquiryInputSchema = z.object({
  name: z.string().trim().min(2, "Enter a valid name.").max(100),
  className: z.string().trim().min(1, "Select a class."),
  board: z.string().trim().min(1, "Select a board."),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Enter a valid date of birth."),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[0-9\s-]{7,15}$/, "Enter a valid phone number."),
  email: z.string().trim().email("Enter a valid email address."),
});

export type EnquiryInput = z.infer<typeof enquiryInputSchema>;

export type EnquirySubmissionResult =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: Partial<Record<keyof EnquiryInput, string>> };
