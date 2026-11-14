import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SoftImage from "./components/SoftImage";
import { doctors, photo, steps, treatments } from "./data";

const comfortPoints = [
  "Gentle, pain-free techniques",
  "Clear cost explained before treatment",
  "Sterilised instruments, every visit",
  "Friendly for kids and nervous patients",
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 sm:px-8 md:grid-cols-2 md:gap-14 md:pb-24 md:pt-16">
          <div>
            <p className="inline-flex rounded-full bg-mint px-4 py-2 text-xs font-bold tracking-wide text-deep">
              New patients welcome · Hyderabad
            </p>

            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              Healthy smiles,
              <span className="text-teal"> gentle care.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate">
              Modern dental care for the whole family, in a calm and friendly
              clinic. Book online in a minute and choose a time that suits you.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/appointment"
                className="rounded-full bg-deep px-8 py-4 text-center text-sm font-bold text-white transition hover:bg-teal"
              >
                Book Appointment
              </Link>
              <Link
                href="/treatments"
                className="rounded-full border border-deep px-8 py-4 text-center text-sm font-bold text-deep transition hover:bg-deep hover:text-white"
              >
                View Treatments
              </Link>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate">
              <li>✓ Kids friendly</li>
              <li>✓ Telugu · Hindi · English</li>
              <li>✓ Open Mon – Sat</li>
            </ul>
          </div>

          <div className="group">
            <SoftImage
              src="/images/dental/clinic-optimized.webp"
              fallbackSrc={photo("photo-1606811971618-4486d14f3f99", 1000)}
              alt="Bright, modern dental clinic"
              emoji="🦷"
              width={1000}
              height={1100}
              priority
              className="aspect-[5/5.5] w-full rounded-[2.5rem]"
            />
          </div>
        </section>

        {/* How booking works */}
        <section className="bg-mist px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-display text-3xl font-semibold sm:text-4xl">
              Book in three easy steps
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-3xl bg-white p-7 shadow-sm"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal font-display text-lg font-semibold text-white">
                    {step.number}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatments */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-teal">
                OUR TREATMENTS
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
                Care for every smile
              </h2>
            </div>
            <Link
              href="/treatments"
              className="text-sm font-bold text-teal underline underline-offset-4"
            >
              All treatments →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                href={`/appointment?treatment=${encodeURIComponent(item.name)}`}
                className="group rounded-3xl border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-teal hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint text-2xl">
                  {item.emoji}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate">{item.text}</p>
                <p className="mt-4 text-sm font-bold text-deep">
                  From {item.price}
                </p>
              </Link>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate">
            Sample prices for this demo.
          </p>
        </section>

        {/* Comfort */}
        <section className="bg-mint px-5 py-20 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            <div className="group order-2 md:order-1">
              <SoftImage
                src="/images/dental/treatment-optimized.webp"
                fallbackSrc={photo("photo-1622253692010-333f2da6031d", 1000)}
                alt="Dentist caring for a patient"
                emoji="😁"
                width={1000}
                height={800}
                className="aspect-[5/4] w-full rounded-[2rem]"
              />
            </div>

            <div className="order-1 md:order-2">
              <p className="text-xs font-bold tracking-[0.25em] text-deep">
                YOUR COMFORT FIRST
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                A dental visit that feels calm
              </h2>
              <ul className="mt-7 space-y-4">
                {comfortPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-base">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-deep text-xs font-bold text-white">
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Doctors */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <p className="text-xs font-bold tracking-[0.25em] text-teal">
            MEET THE DOCTORS
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            People you can trust
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {doctors.map((doctor) => (
              <div
                key={doctor.name}
                className="rounded-3xl border border-line bg-white p-7"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-mint font-display text-xl font-semibold text-deep">
                  {doctor.initials}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {doctor.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-teal">
                  {doctor.role}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate">
                  Speaks {doctor.langs}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/doctors"
            className="mt-8 inline-block text-sm font-bold text-teal underline underline-offset-4"
          >
            About our doctors →
          </Link>
        </section>

        {/* CTA */}
        <section className="bg-deep px-5 py-16 text-center text-white sm:px-8">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Take the first step to a healthier smile
          </h2>
          <Link
            href="/appointment"
            className="mt-8 inline-block rounded-full bg-white px-9 py-4 text-sm font-bold text-deep transition hover:bg-mint"
          >
            Book Appointment
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
