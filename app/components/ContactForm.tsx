"use client";

import { useState, type FormEvent } from "react";
import { classify } from "../data";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const contact = String(formData.get("contact") || "");
    const kind = classify(contact);

    if (!kind) {
      setError(
        "Please enter a valid email address or a 10-digit mobile number.",
      );
      return;
    }

    setLoading(true);

    const payload: Record<string, unknown> = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      subject: "New Enquiry - Everwell Dental Studio (Demo)",
      name: formData.get("name"),
      contact,
      message: formData.get("message"),
    };
    if (kind === "email") payload.email = contact.trim();
    if (kind === "phone") payload.phone = contact.trim();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (result.success) {
        setStatus(
          "Thank you! Your message has been sent. We will get back to you soon.",
        );
        form.reset();
      } else {
        setError(
          result.message || "Unable to send your message. Please try again.",
        );
      }
    } catch {
      setError("Unable to send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const fieldClass =
    "w-full rounded-2xl border border-line bg-white px-4 py-3.5 text-base text-ink outline-none transition placeholder:text-ink/40 focus:border-teal focus:ring-2 focus:ring-teal/20";
  const labelClass = "mb-2 block text-sm font-semibold";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="c-name" className={labelClass}>
          Your Name
        </label>
        <input
          id="c-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Enter your name"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="c-contact" className={labelClass}>
          Email or Phone Number
        </label>
        <input
          id="c-contact"
          name="contact"
          type="text"
          required
          autoComplete="email"
          placeholder="Email address or 10-digit mobile number"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="c-message" className={labelClass}>
          Your Message
        </label>
        <textarea
          id="c-message"
          name="message"
          required
          rows={5}
          placeholder="How can we help you?"
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-deep px-8 py-4 text-sm font-bold text-white transition hover:bg-teal disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {error && (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}
      {status && (
        <p role="status" className="text-sm font-semibold text-teal">
          {status}
        </p>
      )}
    </form>
  );
}
