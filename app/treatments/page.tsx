import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { treatments } from "../data";

export const metadata: Metadata = {
  title: "Treatments | Everwell Dental Studio (Demo)",
  description:
    "Dental treatments with sample starting prices: check-ups, whitening, fillings, root canal, implants, braces and more.",
};

export default function TreatmentsPage() {
  return (
    <>
      <Header />

      <main>
        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
          <p className="text-xs font-bold tracking-[0.25em] text-teal">
            OUR TREATMENTS
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] sm:text-6xl">
            Everything your smile needs
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate">
            Starting prices are shown for each treatment. The final cost is
            explained clearly before we begin.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map((item) => (
              <article
                key={item.id}
                className="flex flex-col rounded-3xl border border-line bg-white p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint text-2xl">
                  {item.emoji}
                </span>
                <h2 className="mt-5 font-display text-xl font-semibold">
                  {item.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate">
                  {item.text}
                </p>
                <p className="mt-5 text-sm font-bold text-deep">
                  From {item.price}
                </p>
                <Link
                  href={`/appointment?treatment=${encodeURIComponent(item.name)}`}
                  className="mt-4 rounded-full border border-deep px-5 py-3 text-center text-sm font-bold text-deep transition hover:bg-deep hover:text-white"
                >
                  Book this
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate">
            Sample prices for this demo. Actual prices depend on the case.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
