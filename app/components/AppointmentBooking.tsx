"use client";

import { useEffect, useState, type FormEvent } from "react";
import { classify, treatments } from "../data";

const slotGroups = [
  {
    label: "Morning",
    slots: [
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 PM",
      "12:30 PM",
    ],
  },
  {
    label: "Afternoon",
    slots: ["2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"],
  },
  {
    label: "Evening",
    slots: ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"],
  },
];

type Day = {
  key: string;
  weekday: string;
  day: string;
  month: string;
  full: string;
};

function isBooked(dateKey: string, slot: string) {
  let hash = 0;
  const text = `${dateKey}-${slot}`;
  for (let i = 0; i < text.length; i++) {
    hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  }
  return hash % 4 === 0;
}

function buildDays(): Day[] {
  const days: Day[] = [];
  const cursor = new Date();
  cursor.setHours(12, 0, 0, 0);

  while (days.length < 14) {
    cursor.setDate(cursor.getDate() + 1);
    if (cursor.getDay() === 0) continue;
    const y = cursor.getFullYear();
    const m = String(cursor.getMonth() + 1).padStart(2, "0");
    const d = String(cursor.getDate()).padStart(2, "0");
    days.push({
      key: `${y}-${m}-${d}`,
      weekday: cursor.toLocaleDateString("en-IN", { weekday: "short" }),
      day: String(cursor.getDate()),
      month: cursor.toLocaleDateString("en-IN", { month: "short" }),
      full: cursor.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    });
  }
  return days;
}

export default function AppointmentBooking() {
  const [days, setDays] = useState<Day[]>([]);
  const [treatment, setTreatment] = useState("");
  const [dateKey, setDateKey] = useState("");
  const [slot, setSlot] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setDays(buildDays());
    const wanted = new URLSearchParams(window.location.search).get("treatment");
    if (wanted && treatments.some((t) => t.name === wanted)) {
      setTreatment(wanted);
    }
  }, []);

  const selectedDay = days.find((d) => d.key === dateKey);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setError("");

    if (!treatment) return setError("Please choose a treatment.");
    if (!selectedDay) return setError("Please choose a date.");
    if (!slot) return setError("Please choose a time slot.");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const contact = String(formData.get("contact") || "");
    const kind = classify(contact);

    if (!kind) {
      return setError(
        "Please enter a valid email address or a 10-digit mobile number.",
      );
    }

    setLoading(true);

    const payload: Record<string, unknown> = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      subject: "New Appointment Request - Everwell Dental Studio (Demo)",
      name: formData.get("name"),
      contact,
      treatment,
      preferred_date: selectedDay.full,
      preferred_time: slot,
      note: formData.get("note"),
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
          `Thank you! We have received your request for ${treatment} on ${selectedDay.full} at ${slot}. Our team will contact you to confirm.`,
        );
        form.reset();
        setTreatment("");
        setDateKey("");
        setSlot("");
      } else {
        setError(
          result.message || "Unable to send your request. Please try again.",
        );
      }
    } catch {
      setError("Unable to send your request. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const fieldClass =
    "w-full rounded-2xl border border-line bg-white px-4 py-3.5 text-base text-ink outline-none transition placeholder:text-ink/40 focus:border-teal focus:ring-2 focus:ring-teal/20";
  const stepTitle =
    "flex items-center gap-3 font-display text-xl font-semibold";
  const stepNumber =
    "flex h-8 w-8 items-center justify-center rounded-full bg-deep text-sm font-bold text-white";

  return (
    <form onSubmit={handleSubmit} className="space-y-10" noValidate>
      {/* Step 1 */}
      <section>
        <h2 className={stepTitle}>
          <span className={stepNumber}>1</span> Choose a treatment
        </h2>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {treatments.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={treatment === item.name}
              onClick={() => setTreatment(item.name)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                treatment === item.name
                  ? "border-deep bg-deep text-white"
                  : "border-line bg-white hover:border-teal"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </section>

      {/* Step 2 */}
      <section>
        <h2 className={stepTitle}>
          <span className={stepNumber}>2</span> Pick a date
        </h2>
        <p className="mt-2 text-sm text-slate">Sundays are closed.</p>
        <div className="mt-5 grid grid-cols-4 gap-2.5 sm:grid-cols-7">
          {days.map((day) => (
            <button
              key={day.key}
              type="button"
              aria-pressed={dateKey === day.key}
              onClick={() => {
                setDateKey(day.key);
                setSlot("");
              }}
              className={`rounded-2xl border px-2 py-3 text-center transition ${
                dateKey === day.key
                  ? "border-deep bg-deep text-white"
                  : "border-line bg-white hover:border-teal"
              }`}
            >
              <span className="block text-xs font-semibold opacity-80">
                {day.weekday}
              </span>
              <span className="block font-display text-2xl font-semibold">
                {day.day}
              </span>
              <span className="block text-xs opacity-80">{day.month}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Step 3 */}
      <section>
        <h2 className={stepTitle}>
          <span className={stepNumber}>3</span> Choose a time
        </h2>

        {!selectedDay ? (
          <p className="mt-4 rounded-2xl bg-mist p-4 text-sm text-slate">
            Please pick a date first to see the available times.
          </p>
        ) : (
          <div className="mt-5 space-y-6">
            {slotGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-3 text-xs font-bold tracking-[0.2em] text-slate">
                  {group.label.toUpperCase()}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {group.slots.map((time) => {
                    const booked = isBooked(selectedDay.key, time);
                    return (
                      <button
                        key={time}
                        type="button"
                        disabled={booked}
                        aria-pressed={slot === time}
                        onClick={() => setSlot(time)}
                        className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                          booked
                            ? "cursor-not-allowed border-line bg-mist text-slate/50 line-through"
                            : slot === time
                              ? "border-deep bg-deep text-white"
                              : "border-line bg-white hover:border-teal"
                        }`}
                      >
                        {time}
                        {booked && <span className="sr-only"> (booked)</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
            <p className="text-xs text-slate">
              Crossed-out times are already booked (sample data for this demo).
            </p>
          </div>
        )}
      </section>

      {/* Step 4 */}
      <section>
        <h2 className={stepTitle}>
          <span className={stepNumber}>4</span> Your details
        </h2>

        <div className="mt-5 space-y-5">
          <div>
            <label
              htmlFor="a-name"
              className="mb-2 block text-sm font-semibold"
            >
              Your Name
            </label>
            <input
              id="a-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Enter your name"
              className={fieldClass}
            />
          </div>
          <div>
            <label
              htmlFor="a-contact"
              className="mb-2 block text-sm font-semibold"
            >
              Email or Phone Number
            </label>
            <input
              id="a-contact"
              name="contact"
              type="text"
              required
              autoComplete="email"
              placeholder="Email address or 10-digit mobile number"
              className={fieldClass}
            />
          </div>
          <div>
            <label
              htmlFor="a-note"
              className="mb-2 block text-sm font-semibold"
            >
              Anything we should know? (optional)
            </label>
            <textarea
              id="a-note"
              name="note"
              rows={3}
              placeholder="For example: tooth pain on the right side"
              className={`${fieldClass} resize-y`}
            />
          </div>
        </div>
      </section>

      {treatment && selectedDay && slot && (
        <div
          className="rounded-3xl bg-mint p-5 text-sm leading-7"
          aria-live="polite"
        >
          <p className="font-bold text-deep">Your request</p>
          <p>
            {treatment}, {selectedDay.full}, {slot}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-deep px-8 py-4 text-base font-bold text-white transition hover:bg-teal disabled:opacity-50"
      >
        {loading ? "Sending..." : "Request Appointment"}
      </button>

      {error && (
        <p role="alert" className="text-sm font-semibold text-red-700">
          {error}
        </p>
      )}
      {status && (
        <p
          role="status"
          className="rounded-2xl bg-mint p-4 text-sm font-semibold text-deep"
        >
          {status}
        </p>
      )}
    </form>
  );
}
