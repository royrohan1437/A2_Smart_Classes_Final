import type { Metadata } from "next";
import { EnquirySection } from "@/components/home/enquiry-section";

export const metadata: Metadata = {
  title: "Admissions Enquiry | A2Smart Classes",
  description: "Send an admissions enquiry to A2Smart Classes.",
};

export default function EnquiryPage() {
  return (
    <main className="bg-ivory py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
        <h1 className="font-serif text-4xl text-navy-950 sm:text-5xl">Admissions Enquiry</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-charcoal-soft">
          Share your details using the form below. The form validates entries and will report when
          the submission service is unavailable.
        </p>
      </div>
      <EnquirySection />
    </main>
  );
}
