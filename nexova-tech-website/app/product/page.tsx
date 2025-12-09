import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductHero } from "@/components/product/product-hero"
import { ProductFeatures } from "@/components/product/product-features"
import { ProductIntegrations } from "@/components/product/product-integrations"
import { ProductScreenshots } from "@/components/product/product-screenshots"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Product",
  description:
    "Discover NEXOVA Tech's AI-powered workflow automation platform. Visual workflow builder, 200+ integrations, and advanced analytics.",
  openGraph: {
    title: "Product | NEXOVA Tech",
    description:
      "Discover NEXOVA Tech's AI-powered workflow automation platform. Visual workflow builder, 200+ integrations, and advanced analytics.",
  },
}

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ProductHero />
        <ProductFeatures />
        <ProductScreenshots />
        <ProductIntegrations />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
