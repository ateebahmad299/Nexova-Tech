import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero"
import { CaseStudiesGrid } from "@/components/case-studies/case-studies-grid"
import { CTASection } from "@/components/cta-section"
import { caseStudies } from "@/lib/case-studies-data"

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how companies like yours have transformed their operations with NEXOVA Tech. Real results, real stories.",
  openGraph: {
    title: "Case Studies | NEXOVA Tech",
    description:
      "See how companies like yours have transformed their operations with NEXOVA Tech. Real results, real stories.",
  },
}

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <CaseStudiesHero />
        <CaseStudiesGrid caseStudies={caseStudies} />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
