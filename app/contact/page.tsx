import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { faqs } from "../data";

export const metadata: Metadata = {
  title: "Contact | Everwell Dental Studio (Demo)",
  description:
    "Contact the clinic and read answers to common questions. Demo website with sample content.",
};

const details = [
  {
    label: "CLINIC",
    lines: ["Sample Clinic Address, Banjara Hills", "Hyderabad, Telangana"],
  },
  {
    label: "HOURS",
    lines: ["Monday – Saturday: 10 AM – 8 PM", "Sunday: Closed"],
  },
  { label: "REPLY TIME", lines: ["Within one working day"] },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-teal">
                CONTACT US
              </p>
              <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl">
                We are here to help
              </h1>
              <p className="mt-6 max-w-md text-base leading-8 text-slate">
                Have a question about a treatment or a visit? Send us a message
                and our team will reply soon.
              </p>

              <div className="mt-10 space-y-7">
                {details.map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-bold tracking-[0.2em] text-teal">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm leading-7">
                      {item.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-xs text-slate">
                Address and timings on this demo are placeholders.
              </p>
            </div>

            <div className="rounded-[2rem] bg-mist p-6 sm:p-10">
              <h2 className="font-display text-2xl font-semibold">
                Send a message
              </h2>
              <p className="mb-8 mt-2 text-sm text-slate">
                Share your email or phone number, and a short message.
              </p>
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="bg-mint px-5 py-16 sm:px-8 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Common questions
            </h2>

            <div className="mt-8 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl bg-white p-5 open:shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span
                      aria-hidden="true"
                      className="text-xl text-teal group-open:hidden"
                    >
                      +
                    </span>
                    <span
                      aria-hidden="true"
                      className="hidden text-xl text-teal group-open:inline"
                    >
                      −
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
