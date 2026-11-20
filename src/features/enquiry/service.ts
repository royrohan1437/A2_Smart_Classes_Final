import type { EnquiryInput, EnquirySubmissionResult } from "./types";

export async function submitEnquiry(_input: EnquiryInput): Promise<EnquirySubmissionResult> {
  void _input;
  return {
    ok: false,
    message:
      "Enquiry submission is not available until the database enquiry service is configured.",
  };
}
