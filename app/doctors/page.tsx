import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { doctors } from "../data";

export const metadata: Metadata = {
  title: "Doctors | Everwell Dental Studio (Demo)",
  description:
    "Meet the dentists at Everwell Dental Studio. Demo website with sample profiles.",
};

export default function DoctorsPage() {
  return (
    <>
      <Header />

      <main>
        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
          <p className="text-xs font-bold tracking-[0.25em] text-teal">
            OUR DOCTORS
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] sm:text-6xl">
            Experienced hands, gentle approach
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate">
            Our team speaks your language and takes time to explain every option
            before treatment begins.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {doctors.map((doctor) => (
              <article
                key={doctor.name}
                className="rounded-3xl border border-line bg-white p-8"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-mint font-display text-2xl font-semibold text-deep">
                  {doctor.initials}
                </span>
                <h2 className="mt-6 font-display text-2xl font-semibold">
                  {doctor.name}
                </h2>
                <p className="mt-1 text-sm font-bold text-teal">
                  {doctor.role}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate">
                  {doctor.text}
                </p>
                <p className="mt-4 text-sm">
                  <span className="font-bold">Languages: </span>
                  {doctor.langs}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate">
            Sample doctor profiles for portfolio presentation only.
          </p>

          <div className="mt-14 rounded-3xl bg-mint p-8 text-center sm:p-12">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Ready to meet us?
            </h2>
            <Link
              href="/appointment"
              className="mt-6 inline-block rounded-full bg-deep px-9 py-4 text-sm font-bold text-white transition hover:bg-teal"
            >
              Book Appointment
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
