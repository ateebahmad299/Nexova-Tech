import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"
import { blogPosts } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, best practices, and industry trends from the NEXOVA Tech team. Learn how to optimize your workflows with AI-powered automation.",
  openGraph: {
    title: "Blog | NEXOVA Tech",
    description:
      "Insights, best practices, and industry trends from the NEXOVA Tech team. Learn how to optimize your workflows with AI-powered automation.",
  },
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <BlogHero />
        <BlogGrid posts={blogPosts} />
      </main>
      <Footer />
    </>
  )
}
