"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type IconName = "home" | "grid" | "calendar" | "user" | "mail";

function Icon({ name }: { name: IconName }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-6 w-6",
    "aria-hidden": true,
  };
  switch (name) {
    case "home":
      return (
        <svg {...common}>
          <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
        </svg>
      );
    case "grid":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </svg>
      );
    case "user":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
  }
}

const links = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "/treatments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Contact", href: "/contact" },
];

function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M5 11c1.5 3.5 4 5.5 7 5.5s5.5-2 7-5.5" />
        </svg>
      </span>
      <span className="font-display text-xl font-semibold leading-none">
        Everwell
        <span className="block text-[10px] font-medium tracking-[0.2em] text-slate">
          DENTAL STUDIO
        </span>
      </span>
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();

  const tab = (href: string, label: string, icon: IconName) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        aria-current={active ? "page" : undefined}
        className={`flex flex-col items-center gap-1 pb-1 pt-2 text-[11px] font-semibold ${
          active ? "text-teal" : "text-slate"
        }`}
      >
        <Icon name={icon} />
        {label}
      </Link>
    );
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
          <Link href="/" aria-label="Everwell home">
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`text-sm font-semibold transition hover:text-teal ${
                  pathname === link.href ? "text-teal" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/appointment"
              className="rounded-full bg-deep px-6 py-3 text-sm font-bold text-white transition hover:bg-teal"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile bottom tab bar */}
      <nav
        aria-label="Mobile"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 backdrop-blur md:hidden"
      >
        <div className="mx-auto grid max-w-md grid-cols-5 items-end px-2">
          {tab("/", "Home", "home")}
          {tab("/treatments", "Treatments", "grid")}

          <Link
            href="/appointment"
            aria-label="Book appointment"
            className="-mt-6 flex flex-col items-center gap-1 pb-1 text-[11px] font-bold text-deep"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-deep text-white shadow-lg ring-4 ring-white">
              <Icon name="calendar" />
            </span>
            Book
          </Link>

          {tab("/doctors", "Doctors", "user")}
          {tab("/contact", "Contact", "mail")}
        </div>
      </nav>
    </>
  );
}
