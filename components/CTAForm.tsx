"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, LockKeyhole, MessageCircle } from "lucide-react";

type FormValues = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  website: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  website: "",
  message: ""
};

function validate(values: FormValues) {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your active email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.whatsapp.trim()) {
    errors.whatsapp = "Please enter your WhatsApp number.";
  }

  if (!values.businessName.trim()) {
    errors.businessName = "Please enter your business name.";
  }

  return errors;
}

export function CTAForm() {
  const router = useRouter();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const visibleErrors = useMemo(() => {
    return Object.fromEntries(Object.entries(errors).filter(([key]) => touched[key as keyof FormValues])) as FormErrors;
  }, [errors, touched]);

  function updateField(name: keyof FormValues, value: string) {
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);
    setErrors(validate(nextValues));
  }

  function markTouched(name: keyof FormValues) {
    setTouched((current) => ({ ...current, [name]: true }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({
      fullName: true,
      email: true,
      whatsapp: true,
      businessName: true,
      website: true,
      message: true
    });

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      router.push("/thank-you");
    }, 500);
  }

  return (
    <section id="booking" className="section-pad scroll-mt-8 bg-booking px-5 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">Book the call</p>
          <h2 className="mt-3 text-balance text-3xl font-black text-ink md:text-5xl">One-to-One Consultation</h2>
          <p className="mt-5 text-base leading-8 text-muted">
            Get dedicated time to discuss your business challenges, marketing efforts, and growth opportunities.
          </p>
          <div className="mt-6 rounded-card border border-line bg-white p-5 shadow-sm">
            <div className="flex gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary/12 text-secondary">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-black text-ink">Customized Strategy for Your Business</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Receive an AI-powered marketing plan tailored to your business so you know exactly what to improve next.
                </p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-card border border-line bg-white p-5 shadow-form sm:p-7" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              error={visibleErrors.fullName}
              label="Full Name"
              name="fullName"
              onBlur={() => markTouched("fullName")}
              onChange={(value) => updateField("fullName", value)}
              placeholder="Enter your full name"
              required
              value={values.fullName}
            />
            <Field
              error={visibleErrors.email}
              label="Active Email"
              name="email"
              onBlur={() => markTouched("email")}
              onChange={(value) => updateField("email", value)}
              placeholder="you@example.com"
              required
              type="email"
              value={values.email}
            />
            <Field
              error={visibleErrors.whatsapp}
              label="WhatsApp Number"
              name="whatsapp"
              onBlur={() => markTouched("whatsapp")}
              onChange={(value) => updateField("whatsapp", value)}
              placeholder="+977 98XXXXXXXX"
              required
              type="tel"
              value={values.whatsapp}
            />
            <Field
              error={visibleErrors.businessName}
              label="Business Name"
              name="businessName"
              onBlur={() => markTouched("businessName")}
              onChange={(value) => updateField("businessName", value)}
              placeholder="Enter your business name"
              required
              value={values.businessName}
            />
            <Field
              className="sm:col-span-2"
              error={visibleErrors.website}
              label="Website or Facebook URL"
              name="website"
              onBlur={() => markTouched("website")}
              onChange={(value) => updateField("website", value)}
              placeholder="https://example.com or Facebook page URL"
              type="url"
              value={values.website}
            />
            <TextareaField
              className="sm:col-span-2"
              error={visibleErrors.message}
              label="Anything You Want to Say"
              name="message"
              onBlur={() => markTouched("message")}
              onChange={(value) => updateField("message", value)}
              placeholder="Tell us about your business, goals, or current marketing challenges."
              value={values.message}
            />
          </div>

          <button className="button-primary mt-6 w-full" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Booking..." : "Book Free Consultation"}
            <ArrowRight className="h-5 w-5" />
          </button>
          <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm font-medium text-muted">
            <LockKeyhole className="h-4 w-4 text-secondary" />
            We respect your privacy. No spam.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  className = "",
  error,
  label,
  name,
  onBlur,
  onChange,
  placeholder,
  required,
  type = "text",
  value
}: {
  className?: string;
  error?: string;
  label: string;
  name: keyof FormValues;
  onBlur: () => void;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  type?: string;
  value: string;
}) {
  return (
    <label className={className}>
      <span className="text-sm font-bold text-ink">
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </span>
      <input
        aria-describedby={error ? `${name}-error` : undefined}
        aria-invalid={Boolean(error)}
        className="form-field mt-2"
        name={name}
        onBlur={onBlur}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {error ? (
        <span className="mt-2 block text-sm font-semibold text-red-600" id={`${name}-error`}>
          {error}
        </span>
      ) : null}
    </label>
  );
}

function TextareaField({
  className = "",
  error,
  label,
  name,
  onBlur,
  onChange,
  placeholder,
  value
}: {
  className?: string;
  error?: string;
  label: string;
  name: keyof FormValues;
  onBlur: () => void;
  onChange: (value: string) => void;
  placeholder: string;
  value: string;
}) {
  return (
    <label className={className}>
      <span className="text-sm font-bold text-ink">{label}</span>
      <textarea
        aria-describedby={error ? `${name}-error` : undefined}
        aria-invalid={Boolean(error)}
        className="form-field mt-2 min-h-32 resize-y"
        name={name}
        onBlur={onBlur}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        value={value}
      />
      {error ? (
        <span className="mt-2 block text-sm font-semibold text-red-600" id={`${name}-error`}>
          {error}
        </span>
      ) : null}
    </label>
  );
}
