"use client";

import { useState, type FormEvent } from "react";
import { enquiryInputSchema, type EnquiryInput } from "@/features/enquiry/types";
import { submitEnquiry } from "@/features/enquiry/service";

const initialValues: EnquiryInput = {
  name: "",
  className: "",
  board: "",
  dateOfBirth: "",
  phone: "",
  email: "",
};

export function EnquirySection() {
  const [values, setValues] = useState(initialValues);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof EnquiryInput, string>>>({});
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const update = (field: keyof EnquiryInput, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => ({ ...current, [field]: undefined }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    const parsed = enquiryInputSchema.safeParse(values);
    if (!parsed.success) {
      const errors: Partial<Record<keyof EnquiryInput, string>> = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof EnquiryInput;
        errors[key] = issue.message;
      });
      setFieldErrors(errors);
      return;
    }

    setSubmitting(true);
    const result = await submitEnquiry(parsed.data);
    setSubmitting(false);

    if (result.ok) setMessage(result.message);
    else {
      setFieldErrors(result.fieldErrors ?? {});
      setMessage(result.message);
    }
  };

  const field = (key: keyof EnquiryInput, label: string, type = "text", options?: string[]) => (
    <div className="grid gap-1.5">
      <label htmlFor={key} className="text-sm font-semibold text-navy-950">
        {label}
      </label>
      {options ? (
        <select
          id={key}
          name={key}
          value={values[key]}
          onChange={(event) => update(key, event.target.value)}
          aria-invalid={fieldErrors[key] ? true : undefined}
          className="min-h-12 w-full rounded-md border border-[#cbd1dc] bg-white px-3.5 text-charcoal"
        >
          <option value="">Select {label.toLowerCase()}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={key}
          name={key}
          type={type}
          value={values[key]}
          onChange={(event) => update(key, event.target.value)}
          aria-invalid={fieldErrors[key] ? true : undefined}
          className="min-h-12 w-full rounded-md border border-[#cbd1dc] bg-white px-3.5 text-charcoal"
        />
      )}
      {fieldErrors[key] ? (
        <p role="alert" className="text-xs font-semibold text-danger">
          {fieldErrors[key]}
        </p>
      ) : null}
    </div>
  );

  return (
    <section className="grid lg:grid-cols-2" aria-labelledby="enquiry-heading">
      <div className="bg-navy-950 px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-xl lg:ml-auto lg:mr-10">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-300">
            Admissions enquiry
          </p>
          <h2
            id="enquiry-heading"
            className="mt-4 text-4xl leading-[1.02] text-white sm:text-5xl lg:text-6xl"
          >
            Begin the next step of your academic journey.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-ivory/75">
            Share your interest and our admission team can guide you through the available classes,
            academic pathways and next steps.
          </p>
        </div>
      </div>

      <div className="bg-ivory px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <form className="mx-auto max-w-xl lg:mx-10" onSubmit={submit} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            {field("name", "Student name")}
            {field("className", "Class", "text", ["6", "7", "8", "9", "10", "11", "12"])}
            {field("board", "Board", "text", ["CBSE", "ICSE", "WB Board", "Other"])}
            {field("dateOfBirth", "Date of birth", "date")}
            {field("phone", "Phone number", "tel")}
            {field("email", "Email address", "email")}
          </div>

          {message ? (
            <p role="status" className="mt-5 text-sm font-semibold text-navy-950">
              {message}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className="mt-7 min-h-12 w-full rounded-full border border-gold-700 bg-gold-300 px-6 text-sm font-bold text-navy-950 shadow-[4px_4px_10px_rgba(7,20,43,.12),-2px_-2px_8px_white] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {submitting ? "Submitting…" : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}
