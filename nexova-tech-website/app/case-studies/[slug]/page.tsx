import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CaseStudyDetail } from "@/components/case-studies/case-study-detail"
import { caseStudies, getCaseStudy } from "@/lib/case-studies-data"
import { CTASection } from "@/components/cta-section"

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) {
    return {
      title: "Case Study Not Found",
    }
  }

  return {
    title: `${study.company} Case Study`,
    description: study.excerpt,
    openGraph: {
      title: `${study.title} | NEXOVA Tech`,
      description: study.excerpt,
      images: [study.image],
    },
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main id="main-content">
        <CaseStudyDetail study={study} />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
