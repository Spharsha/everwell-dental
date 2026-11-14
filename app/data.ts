export const photo = (id: string, width: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=70`;

export const treatments = [
  {
    id: "checkup",
    name: "Check-up & Cleaning",
    price: "₹800",
    text: "A full oral check and professional cleaning to keep gums and teeth healthy.",
    emoji: "🪥",
  },
  {
    id: "whitening",
    name: "Teeth Whitening",
    price: "₹6,000",
    text: "Safe professional whitening for a brighter, more confident smile.",
    emoji: "✨",
  },
  {
    id: "filling",
    name: "Tooth Filling",
    price: "₹1,200",
    text: "Tooth-coloured fillings that restore shape and look natural.",
    emoji: "🦷",
  },
  {
    id: "rct",
    name: "Root Canal (RCT)",
    price: "₹4,500",
    text: "Gentle treatment to save a badly decayed or infected tooth.",
    emoji: "💙",
  },
  {
    id: "implants",
    name: "Dental Implants",
    price: "₹28,000",
    text: "Long-lasting replacement for missing teeth, planned carefully for you.",
    emoji: "🔩",
  },
  {
    id: "braces",
    name: "Braces & Aligners",
    price: "₹35,000",
    text: "Straighter teeth with traditional braces or clear aligners.",
    emoji: "😁",
  },
  {
    id: "crowns",
    name: "Crowns & Bridges",
    price: "₹6,500",
    text: "Strong, natural-looking caps and bridges. Price is per tooth.",
    emoji: "👑",
  },
  {
    id: "kids",
    name: "Kids Dentistry",
    price: "₹700",
    text: "Friendly, patient care for children, from first visit to fluoride.",
    emoji: "🧒",
  },
];

export const doctors = [
  {
    initials: "MR",
    name: "Dr. Meera Reddy",
    role: "Chief Dentist · Implants",
    langs: "Telugu, Hindi, English",
    text: "Focuses on gentle, long-lasting restorations and clear explanations at every step.",
  },
  {
    initials: "AR",
    name: "Dr. Arvind Rao",
    role: "Root Canal Specialist",
    langs: "Telugu, English",
    text: "Known for calm, comfortable root canal care and saving natural teeth wherever possible.",
  },
  {
    id: "sana",
    initials: "SK",
    name: "Dr. Sana Khan",
    role: "Braces & Aligners",
    langs: "Hindi, Urdu, English",
    text: "Plans smile corrections for teens and adults, from braces to clear aligners.",
  },
];

export const steps = [
  {
    number: "1",
    title: "Choose treatment",
    text: "Pick what you need, or choose a check-up if you are unsure.",
  },
  {
    number: "2",
    title: "Pick date and time",
    text: "See free slots for the next two weeks and choose one.",
  },
  {
    number: "3",
    title: "We confirm",
    text: "Our team contacts you to confirm your visit.",
  },
];

export const faqs = [
  {
    q: "Will the treatment hurt?",
    a: "We use gentle techniques and local anaesthesia where needed. Tell us if you feel anxious, and we will go at your pace.",
  },
  {
    q: "Do you treat children?",
    a: "Yes. Our kids dentistry visits are short, friendly and patient.",
  },
  {
    q: "Which languages do your doctors speak?",
    a: "Telugu, Hindi, Urdu and English.",
  },
  {
    q: "How long does a check-up take?",
    a: "A check-up with cleaning usually takes about 30 to 45 minutes.",
  },
  {
    q: "How can I pay?",
    a: "Cash, UPI and cards are accepted. We explain the cost before any treatment begins.",
  },
  {
    q: "Do I need an appointment?",
    a: "Appointments are recommended so you do not wait. You can book online in a minute.",
  },
];

export function classify(value: string): "email" | "phone" | null {
  const v = value.trim();
  if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "email";
  const digits = v.replace(/[\s\-()+]/g, "");
  if (/^(91)?[6-9]\d{9}$/.test(digits)) return "phone";
  return null;
}
