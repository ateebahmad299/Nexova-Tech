import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CareersHero } from "@/components/careers/careers-hero"
import { CareersBenefits } from "@/components/careers/careers-benefits"
import { CareersOpenings } from "@/components/careers/careers-openings"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Careers",
  description: "Join NEXOVA Tech and help build the future of workflow automation. View open positions and benefits.",
  openGraph: {
    title: "Careers | NEXOVA Tech",
    description: "Join NEXOVA Tech and help build the future of workflow automation. View open positions and benefits.",
  },
}

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <CareersHero />
        <CareersBenefits />
        <CareersOpenings />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
