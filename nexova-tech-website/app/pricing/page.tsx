import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingCards } from "@/components/pricing/pricing-cards"
import { PricingComparison } from "@/components/pricing/pricing-comparison"
import { PricingFAQ } from "@/components/pricing/pricing-faq"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for NEXOVA Tech. Choose the plan that fits your needs. Free tier available.",
  openGraph: {
    title: "Pricing | NEXOVA Tech",
    description:
      "Simple, transparent pricing for NEXOVA Tech. Choose the plan that fits your needs. Free tier available.",
  },
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PricingHero />
        <PricingCards />
        <PricingComparison />
        <PricingFAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
