import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppointmentBooking from "../components/AppointmentBooking";

export const metadata: Metadata = {
  title: "Book Appointment | Everwell Dental Studio (Demo)",
  description:
    "Choose a treatment, pick a date and time, and request your dental appointment online.",
};

export default function AppointmentPage() {
  return (
    <>
      <Header />

      <main>
        <section className="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
          <p className="text-xs font-bold tracking-[0.25em] text-teal">
            BOOK ONLINE
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Book your appointment
          </h1>
          <p className="mt-4 text-base leading-8 text-slate">
            Four quick steps. Our team will contact you to confirm your visit.
          </p>

          <div className="mt-10">
            <AppointmentBooking />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
