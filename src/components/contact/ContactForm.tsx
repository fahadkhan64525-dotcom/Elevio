"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { buildWhatsAppMessage } from "@/lib/utils";

const projectTypes = [
  "Residential Interior",
  "Living Room",
  "Bedroom",
  "Modular Kitchen",
  "Commercial Interior",
  "Renovation",
  "3D Visualization",
] as const;

const budgetRanges = [
  "Under ₹5 Lakhs",
  "₹5L – ₹10L",
  "₹10L – ₹20L",
  "₹20L+",
  "Let's Discuss",
] as const;

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{7,15}$/, "Please enter a valid phone number."),
  projectType: z.enum(projectTypes, {
    errorMap: () => ({ message: "Please select a project type." }),
  }),
  budget: z.enum(budgetRanges).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Tell us a little about your project."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  function onSubmit(data: ContactFormValues) {
    // Wire this up to your backend / email provider (e.g. Resend, Formspree,
    // an API route) as needed — this currently just shows the success state
    // and generates a pre-filled WhatsApp message with the inquiry details.
    setWaLink(buildWhatsAppMessage(data));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <h3 className="text-3xl mb-4">Thank you!</h3>
        <p className="text-muted mb-8">
          We&apos;ve received your inquiry. Our team will get in touch with you soon.
        </p>
        {waLink && (
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-semibold bg-cream text-dark rounded-[2px]"
          >
            Send Details on WhatsApp Too
          </a>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Full Name" htmlFor="f-name" error={errors.name?.message}>
          <input id="f-name" autoComplete="name" {...register("name")} className="field-input" />
        </Field>
        <Field label="Email Address" htmlFor="f-email" error={errors.email?.message}>
          <input
            id="f-email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className="field-input"
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mt-6">
        <Field label="Phone Number" htmlFor="f-phone" error={errors.phone?.message}>
          <input
            id="f-phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            className="field-input"
          />
        </Field>
        <Field label="Project Type" htmlFor="f-type" error={errors.projectType?.message}>
          <select id="f-type" {...register("projectType")} defaultValue="" className="field-input">
            <option value="" disabled>
              Select project type
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-6">
        <Field label="Estimated Budget" htmlFor="f-budget">
          <select id="f-budget" {...register("budget")} defaultValue="" className="field-input">
            <option value="">Select budget range</option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-6">
        <Field label="Message" htmlFor="f-message" error={errors.message?.message}>
          <textarea id="f-message" rows={4} {...register("message")} className="field-input" />
        </Field>
      </div>

      <div className="mt-3">
        <button
          type="submit"
          className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-semibold tracking-wide rounded-[2px] min-h-[48px] bg-cream text-dark hover:bg-gold-light transition-colors duration-300"
        >
          Send Inquiry
        </button>
      </div>

      <style>{`
        .field-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--tw-border-opacity, rgba(245,239,230,0.15));
          border-color: rgba(245,239,230,0.15);
          padding: 12px 0;
          font-size: 16px;
          color: #F5F1EA;
        }
        .field-input:focus { outline: none; border-color: #C6A56A; }
        .field-input option { background: #111; }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-xs uppercase tracking-[0.06em] text-muted mb-2.5">
        {label}
      </label>
      {children}
      <div className="text-[#e08b6a] text-xs mt-1.5 min-h-[14px]">{error}</div>
    </div>
  );
}
