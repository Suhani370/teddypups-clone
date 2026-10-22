"use client";

import { useState, useTransition, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { puppies } from "@/data/puppies";
import { siteConfig } from "@/data/siteConfig";
import { PawIcon } from "@/components/shared/PawIcon";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  area: string;
  puppy: string;
  message: string;
  website_hp: string; // Honeypot field
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialPuppy = searchParams.get("puppy") || "";

  const [values, setValues] = useState<FormValues>({
    name: "",
    phone: "",
    email: "",
    area: "",
    puppy: initialPuppy,
    message: "",
    website_hp: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Full name is required.";
    }

    if (!values.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!/^[+0-9\s-]{7,18}$/.test(values.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number (e.g. +971 50 123 4567).";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Please include a message or inquiry details.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot for bot spam
    if (values.website_hp) {
      // Bot detected, silently pretend success
      setIsSubmitted(true);
      return;
    }

    if (!validate()) {
      return;
    }

    startTransition(async () => {
      // Simulate submission network delay
      await new Promise((resolve) => setTimeout(resolve, 600));
      setIsSubmitted(true);
    });
  };

  const handleReset = () => {
    setValues({
      name: "",
      phone: "",
      email: "",
      area: "",
      puppy: "",
      message: "",
      website_hp: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-3xl border-2 border-whatsapp/30 bg-honey/30 p-8 text-center sm:p-12 shadow-sm animate-fade-in-up">
        <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-whatsapp text-white text-3xl shadow-md">
          ✓
        </div>
        <h3 className="font-plush text-2xl text-cocoa sm:text-3xl mb-2">
          Thank you, {values.name || "friend"}!
        </h3>
        <p className="mx-auto max-w-md text-cocoa/80 text-sm sm:text-base leading-relaxed mb-6">
          Your enquiry has been received by our Dubai team. A puppy care specialist will reach out to you on WhatsApp or phone within 2 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={siteConfig.whatsappLink(
              `Hi TeddyPups! I just submitted an inquiry on your website under the name ${values.name}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp text-sm w-full sm:w-auto"
          >
            Open WhatsApp for Instant Response
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="btn btn-ghost text-sm w-full sm:w-auto"
          >
            Send Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="tp-form" noValidate>
      {/* Honeypot field for anti-spam (hidden from real users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_hp">Do not fill this</label>
        <input
          type="text"
          id="website_hp"
          name="website_hp"
          value={values.website_hp}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name Field */}
        <div className="tp-field">
          <label htmlFor="name">
            Full Name <span className="text-caramel">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="e.g. Sarah Mansoor"
            value={values.name}
            onChange={handleChange}
            className={errors.name ? "!border-caramel !bg-rose-50/50" : ""}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <span className="text-xs font-semibold text-caramel">
              {errors.name}
            </span>
          )}
        </div>

        {/* Phone Field */}
        <div className="tp-field">
          <label htmlFor="phone">
            Phone / WhatsApp <span className="text-caramel">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="e.g. +971 50 123 4567"
            value={values.phone}
            onChange={handleChange}
            className={errors.phone ? "!border-caramel !bg-rose-50/50" : ""}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <span className="text-xs font-semibold text-caramel">
              {errors.phone}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Email Field */}
        <div className="tp-field">
          <label htmlFor="email">
            Email Address <span className="text-caramel">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="e.g. sarah@example.com"
            value={values.email}
            onChange={handleChange}
            className={errors.email ? "!border-caramel !bg-rose-50/50" : ""}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <span className="text-xs font-semibold text-caramel">
              {errors.email}
            </span>
          )}
        </div>

        {/* Area / Emirate Field */}
        <div className="tp-field">
          <label htmlFor="area">Location / Area</label>
          <select
            id="area"
            name="area"
            value={values.area}
            onChange={handleChange}
          >
            <option value="">Select your area / city</option>
            <option value="Downtown Dubai">Downtown Dubai</option>
            <option value="Dubai Marina / JBR">Dubai Marina / JBR</option>
            <option value="Palm Jumeirah">Palm Jumeirah</option>
            <option value="Dubai Hills / Arabian Ranches">Dubai Hills / Arabian Ranches</option>
            <option value="Jumeirah / Al Wasl">Jumeirah / Al Wasl</option>
            <option value="Business Bay / DIFC">Business Bay / DIFC</option>
            <option value="Abu Dhabi">Abu Dhabi</option>
            <option value="Sharjah / Ajman">Sharjah / Ajman</option>
            <option value="Other UAE / International">Other UAE / International</option>
          </select>
        </div>
      </div>

      {/* Puppy Select Dropdown */}
      <div className="tp-field">
        <label htmlFor="puppy">Interested Puppy</label>
        <select
          id="puppy"
          name="puppy"
          value={values.puppy}
          onChange={handleChange}
        >
          <option value="">General Inquiry / Undecided</option>
          <optgroup label="Available in Dubai">
            {puppies
              .filter((p) => p.status === "available")
              .map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name} ({p.breed} &bull; {p.sex} &bull; {p.age})
                </option>
              ))}
          </optgroup>
          <optgroup label="Custom Import / Request">
            <option value="korean-teacup-poodle-request">Korean Teacup Poodle (Import)</option>
            <option value="korean-teacup-maltipoo-request">Korean Teacup Maltipoo (Import)</option>
            <option value="korean-teacup-pomeranian-request">Korean Teacup Pomeranian (Import)</option>
            <option value="bichon-frise-request">Teacup Bichon Frise (Import)</option>
            <option value="other-breed-request">Other Rare Breed</option>
          </optgroup>
        </select>
      </div>

      {/* Message Field */}
      <div className="tp-field">
        <label htmlFor="message">
          Message & Showroom Preferences <span className="text-caramel">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your home, preferred visit date/time, or questions regarding our puppies..."
          value={values.message}
          onChange={handleChange}
          className={errors.message ? "!border-caramel !bg-rose-50/50" : ""}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <span className="text-xs font-semibold text-caramel">
            {errors.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="btn btn-primary w-full py-4 text-base shadow-md disabled:opacity-60"
      >
        {isPending ? "Sending Inquiry..." : "Submit Showroom Inquiry"}
      </button>

      <p className="text-center text-xs text-cocoa/60">
        🔒 We respect your privacy. Your information is strictly used for puppy adoption consultations.
      </p>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-milk">
      <title>Visit & Contact Us | TeddyPups U.A.E.</title>
      <meta
        name="description"
        content="Visit our Downtown Dubai showroom to meet our adorable teacup puppies in person. Contact us via WhatsApp or book a private appointment."
      />

      {/* Page Header */}
      <header className="tp-page-header">
        <div className="gutter">
          <div className="mx-auto flex items-center justify-center gap-2 text-caramel mb-2">
            <PawIcon className="size-5" />
            <span className="text-sm font-semibold tracking-wider uppercase">
              Downtown Dubai Showroom
            </span>
            <PawIcon className="size-5" />
          </div>
          <h1 className="tp-page-header__title text-cocoa">
            Visit & Contact Us
          </h1>
          <p className="tp-page-header__desc">
            We invite you to experience the affection and charm of our puppies in person.
            Reach out by phone, WhatsApp, or schedule a private cuddle appointment.
          </p>
        </div>
      </header>

      {/* Main Split Layout */}
      <main className="tp-section">
        <div className="gutter">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-start">
            {/* Left Side: Contact Form (7 cols) */}
            <div className="lg:col-span-7 rounded-3xl border-2 border-cocoa/10 bg-honey/15 p-6 sm:p-10 shadow-sm">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-caramel">
                  Get in Touch
                </span>
                <h2 className="font-plush text-3xl text-cocoa mt-1">
                  Send an Inquiry
                </h2>
                <p className="text-sm text-cocoa/75 mt-1">
                  Fill out the form below and our puppy concierge will get back to you immediately.
                </p>
              </div>

              <Suspense
                fallback={
                  <div className="py-12 text-center text-cocoa/60">
                    Loading enquiry form...
                  </div>
                }
              >
                <ContactFormInner />
              </Suspense>
            </div>

            {/* Right Side: Showroom Info + WhatsApp CTA + Maps Link (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Quick Connect Card */}
              <div className="rounded-3xl border-2 border-whatsapp/30 bg-honey/30 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-whatsapp text-white text-xl">
                    💬
                  </span>
                  <div>
                    <h3 className="font-plush text-xl text-cocoa">Instant WhatsApp Chat</h3>
                    <p className="text-xs font-semibold text-whatsapp">
                      Typically replies in under 5 minutes
                    </p>
                  </div>
                </div>

                <p className="text-sm text-cocoa/75 leading-relaxed mb-5">
                  Have a quick question about puppy availability or want immediate live video clips of a puppy? Chat directly with our puppy specialists.
                </p>

                <a
                  href={siteConfig.whatsappLink(siteConfig.showroomWhatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full text-center text-sm shadow-md"
                >
                  Chat with Us on WhatsApp
                </a>
              </div>

              {/* Showroom Location & Hours */}
              <div className="rounded-3xl border-2 border-cocoa/10 bg-milk p-6 sm:p-8 shadow-sm">
                <h3 className="font-plush text-2xl text-cocoa mb-4 flex items-center gap-2">
                  <span>📍</span>
                  <span>Showroom Information</span>
                </h3>

                <div className="space-y-4 text-sm text-cocoa/80">
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-cocoa shrink-0 w-20">Address:</span>
                    <span>{siteConfig.address}</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-bold text-cocoa shrink-0 w-20">Hours:</span>
                    <div>
                      <p>Monday &ndash; Sunday</p>
                      <p className="text-xs text-cocoa/60 font-medium">
                        10:00 AM &ndash; 10:00 PM (By Appointment)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-bold text-cocoa shrink-0 w-20">Phone:</span>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                      className="text-caramel font-semibold hover:underline"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-bold text-cocoa shrink-0 w-20">Email:</span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-caramel font-semibold hover:underline break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {/* Google Maps Card & Link */}
                <div className="mt-6 border-t border-cocoa/10 pt-6">
                  <div className="mb-4 overflow-hidden rounded-2xl border border-cocoa/15 bg-honey/40 p-4 text-center">
                    <span className="text-2xl mb-1 block">🗺️</span>
                    <p className="font-plush text-base text-cocoa">Downtown Dubai</p>
                    <p className="text-xs text-cocoa/60">
                      Complimentary valet parking available on arrival
                    </p>
                  </div>

                  <a
                    href={siteConfig.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost w-full text-center text-sm flex items-center justify-center gap-2"
                  >
                    <span>Open in Google Maps</span>
                    <span aria-hidden="true">&nearr;</span>
                  </a>
                </div>
              </div>

              {/* Showroom Visit Tips */}
              <div className="rounded-2xl border border-cocoa/10 bg-honey/20 p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cocoa/70 mb-2">
                  Visit Guidelines
                </h4>
                <ul className="space-y-1.5 text-xs text-cocoa/70">
                  <li className="flex items-center gap-2">
                    <span className="text-caramel font-bold">&bull;</span>
                    Appointments ensure private, unhurried time with each puppy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-caramel font-bold">&bull;</span>
                    Sanitization protocols in place for puppy safety
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-caramel font-bold">&bull;</span>
                    Children and families warmly welcomed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
