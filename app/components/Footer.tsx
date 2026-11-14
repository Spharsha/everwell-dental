import Link from "next/link";

const socialClass =
  "flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/75 transition hover:border-white hover:text-white";

export default function Footer() {
  return (
    <footer className="bg-deep px-5 py-14 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold">Everwell</p>
            <p className="mt-1 text-[10px] tracking-[0.25em] text-mint/70">
              DENTAL STUDIO · HYDERABAD
            </p>
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/65">
              Gentle, modern dental care for the whole family.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-[0.2em] text-mint">
              EXPLORE
            </h3>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <Link href="/treatments" className="transition hover:text-white">
                Treatments
              </Link>
              <Link href="/doctors" className="transition hover:text-white">
                Our Doctors
              </Link>
              <Link href="/appointment" className="transition hover:text-white">
                Book Appointment
              </Link>
              <Link href="/contact" className="transition hover:text-white">
                Contact and FAQ
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-[0.2em] text-mint">
              FOLLOW
            </h3>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className={socialClass}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.6V13h2.8v8h3.1z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className={socialClass}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp" className={socialClass}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M12 2a9.9 9.9 0 0 0-8.5 15l-1 4 4.1-1.1A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.4.6.6-2.3-.2-.4A8 8 0 1 1 12 20Zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.8 3.4.5.2.9.4 1.2.4.5.2 1 .2 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 pt-8 text-xs text-white/50 md:flex-row">
          <p>© 2026 Everwell Dental Studio. All rights reserved.</p>
          <p className="text-mint">
            Demo website · Sample content · A website demo by Vebnora
          </p>
        </div>
      </div>
    </footer>
  );
}
