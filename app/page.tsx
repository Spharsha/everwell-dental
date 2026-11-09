import Header from "./components/Header";
import ContactForm from "./components/ContactForm";

const treatments = [
  {
    number: "01",
    title: "General Dentistry",
    description:
      "Complete dental care, regular checkups and preventive treatments for healthy smiles.",
  },
  {
    number: "02",
    title: "Cosmetic Dentistry",
    description:
      "Thoughtful smile enhancements designed around your individual needs.",
  },
  {
    number: "03",
    title: "Dental Implants",
    description:
      "Modern tooth replacement options with personalised treatment planning.",
  },
  {
    number: "04",
    title: "Teeth Whitening",
    description:
      "Professional whitening consultations for a brighter-looking smile.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfcf9] text-[#243c35]">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-[650px] items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=2000&q=90')",
          }}
        />
        <div className="absolute inset-0 bg-[#172c25]/55" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-28 text-white">
          <p className="text-xs tracking-[0.35em] text-[#d7e4d4]">
            A NEW APPROACH TO DENTAL CARE
          </p>

          <h1 className="mt-7 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
            A Healthier Smile.
            <br />A Happier You.
          </h1>

          <p className="mt-7 max-w-lg text-sm leading-8 text-white/80">
            Thoughtful dental care in a calm, welcoming space. Discover a more
            comfortable approach to looking after your smile.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#appointment"
              className="bg-[#e3ebdf] px-8 py-4 text-xs tracking-widest text-[#29483c] transition hover:bg-white"
            >
              BOOK AN APPOINTMENT
            </a>

            <a
              href="#treatments"
              className="border border-white/60 px-8 py-4 text-xs tracking-widest text-white transition hover:bg-white hover:text-[#29483c]"
            >
              EXPLORE TREATMENTS
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:items-center md:py-32"
      >
        <div>
          <p className="text-xs tracking-[0.3em] text-[#829983]">
            WELCOME TO EVERWELL
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
            Care that puts
            <br />
            you at ease.
          </h2>

          <p className="mt-7 text-sm leading-8 text-[#718078]">
            We believe visiting the dentist should feel reassuring. Our approach
            combines attentive care, modern dental technology and a welcoming
            environment.
          </p>

          <a
            href="#contact"
            className="mt-9 inline-block border-b border-[#829983] pb-2 text-xs tracking-widest"
          >
            GET TO KNOW US →
          </a>
        </div>

        <div
          className="min-h-[390px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85')",
          }}
        />
      </section>

      {/* Treatments */}
      <section id="treatments" className="bg-[#eef2eb] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.3em] text-[#829983]">
              OUR SERVICES
            </p>

            <h2 className="mt-5 font-serif text-4xl md:text-5xl">
              Complete care for every smile.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#718078]">
              Explore our dental services and find the right starting point for
              your oral health needs.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map((item) => (
              <div
                key={item.number}
                className="border border-[#dce5d9] bg-[#fbfcf9] p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-xs tracking-widest text-[#91a591]">
                  {item.number}
                </span>

                <h3 className="mt-9 font-serif text-2xl">{item.title}</h3>

                <p className="mt-5 text-sm leading-7 text-[#718078]">
                  {item.description}
                </p>

                <a
                  href="#appointment"
                  className="mt-8 inline-block text-xs tracking-widest text-[#496b58]"
                >
                  ENQUIRE →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dentist */}
      <section
        id="dentist"
        className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:items-center md:py-32"
      >
        <div
          className="min-h-[440px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=85')",
          }}
        />

        <div>
          <p className="text-xs tracking-[0.3em] text-[#829983]">
            PERSONALIZED ATTENTION
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
            Your comfort
            <br />
            comes first.
          </h2>

          <p className="mt-7 text-sm leading-8 text-[#718078]">
            Every smile is different. We take time to understand your concerns,
            explain available options and help you make informed decisions about
            your dental care.
          </p>

          <a
            href="#appointment"
            className="mt-9 inline-block bg-[#29483c] px-8 py-4 text-xs tracking-widest text-white transition hover:bg-[#496b58]"
          >
            PLAN YOUR VISIT
          </a>
        </div>
      </section>

      {/* Appointment */}
      <section
        id="appointment"
        className="bg-[#29483c] px-6 py-24 text-center text-white md:py-28"
      >
        <p className="text-xs tracking-[0.3em] text-[#c7d6c4]">
          WE WOULD LOVE TO HEAR FROM YOU
        </p>

        <h2 className="mx-auto mt-6 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
          Take the first step towards a healthier smile.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/70">
          Get in touch with our team to enquire about an appointment.
        </p>

        <a
          href="#contact"
          className="mt-9 inline-block bg-[#e3ebdf] px-9 py-4 text-xs tracking-widest text-[#29483c] transition hover:bg-white"
        >
          REQUEST AN APPOINTMENT
        </a>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2"
      >
        <div>
          <p className="text-xs tracking-[0.3em] text-[#829983]">
            CONTACT EVERWELL
          </p>

          <h2 className="mt-5 font-serif text-4xl md:text-5xl">
            We are here for you.
          </h2>

          <p className="mt-6 max-w-md text-sm leading-8 text-[#718078]">
            Have a question about our services? Reach out to our team and we
            will be happy to help.
          </p>

          <div className="mt-10 space-y-7">
            <div>
              <p className="text-xs tracking-widest text-[#829983]">ADDRESS</p>
              <p className="mt-2 text-sm">
                Demo Clinic Address, Hyderabad, India
              </p>
            </div>

            <div>
              <p className="text-xs tracking-widest text-[#829983]">PHONE</p>
              <p className="mt-2 text-sm">+91 90000 00000</p>
            </div>

            <div>
              <p className="text-xs tracking-widest text-[#829983]">EMAIL</p>
              <p className="mt-2 text-sm">hello@example.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border border-[#e2e9df] bg-white p-6 md:p-8">
          <p className="mb-6 font-serif text-2xl">Send an Enquiry</p>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1d352c] px-6 py-9 text-center text-white">
        <p className="font-serif text-xl tracking-widest">EVERWELL.</p>

        <p className="mt-3 text-[10px] tracking-[0.2em] text-white/60">
          DENTAL STUDIO · A WEBSITE DEMO BY VEBNORA
        </p>

        <p className="mt-5 text-xs text-white/50">
          © 2026 Everwell Dental Studio. Demo website.
        </p>
      </footer>
    </main>
  );
}
