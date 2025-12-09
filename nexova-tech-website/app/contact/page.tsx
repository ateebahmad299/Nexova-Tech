import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the NEXOVA Tech team. Schedule a demo, request a quote, or ask us anything about workflow automation.",
  openGraph: {
    title: "Contact | NEXOVA Tech",
    description:
      "Get in touch with the NEXOVA Tech team. Schedule a demo, request a quote, or ask us anything about workflow automation.",
  },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ContactHero />
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
