"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
    );

    formData.append(
      "subject",
      "New Appointment Enquiry - Everwell Dental Studio",
    );

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setMessage("Thank you! Your enquiry has been submitted successfully.");
        form.reset();
      } else {
        setMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setMessage("Unable to submit your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full border border-[#dce5dc] bg-white px-4 py-4 text-sm outline-none focus:border-[#8ca58c]"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="w-full border border-[#dce5dc] bg-white px-4 py-4 text-sm outline-none focus:border-[#8ca58c]"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        className="w-full border border-[#dce5dc] bg-white px-4 py-4 text-sm outline-none focus:border-[#8ca58c]"
      />

      <select
        name="treatment"
        required
        defaultValue=""
        className="w-full border border-[#dce5dc] bg-white px-4 py-4 text-sm outline-none focus:border-[#8ca58c]"
      >
        <option value="" disabled>
          Select Treatment
        </option>
        <option>General Dentistry</option>
        <option>Cosmetic Dentistry</option>
        <option>Dental Implants</option>
        <option>Teeth Whitening</option>
        <option>Other</option>
      </select>

      <textarea
        name="message"
        placeholder="Tell us how we can help..."
        rows={4}
        className="w-full border border-[#dce5dc] bg-white px-4 py-4 text-sm outline-none focus:border-[#8ca58c]"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#29483c] px-6 py-4 text-xs tracking-[0.2em] text-white transition hover:bg-[#8ca58c] disabled:opacity-60"
      >
        {loading ? "SENDING..." : "SEND ENQUIRY"}
      </button>

      {message && (
        <p role="status" className="text-sm text-[#29483c]">
          {message}
        </p>
      )}
    </form>
  );
}
