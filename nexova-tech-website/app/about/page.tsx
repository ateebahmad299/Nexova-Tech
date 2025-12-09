import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutTimeline } from "@/components/about/about-timeline"
import { AboutTeam } from "@/components/about/about-team"
import { AboutValues } from "@/components/about/about-values"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NEXOVA Tech's mission to democratize workflow automation. Meet our team and discover our values.",
  openGraph: {
    title: "About | NEXOVA Tech",
    description:
      "Learn about NEXOVA Tech's mission to democratize workflow automation. Meet our team and discover our values.",
  },
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <AboutHero />
        <AboutMission />
        <AboutValues />
        <AboutTimeline />
        <AboutTeam />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
