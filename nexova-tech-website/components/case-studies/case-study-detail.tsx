"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { CaseStudy } from "@/lib/case-studies-data"
import { ArrowLeft, Quote } from "lucide-react"

interface CaseStudyDetailProps {
  study: CaseStudy
}

export function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  return (
    <article className="pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
              {study.industry}
            </span>
            <span className="text-sm text-muted-foreground">{study.company}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">{study.title}</h1>
        </motion.header>

        {/* Hero Image */}
        <motion.div
          className="mt-10 aspect-[16/9] rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <img src={study.image || "/placeholder.svg"} alt={study.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Results Summary */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {study.results.map((result) => (
            <div key={result.metric} className="bg-primary/5 rounded-xl p-6 text-center">
              <p className="text-3xl lg:text-4xl font-bold text-primary">{result.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{result.metric}</p>
            </div>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          className="mt-16 space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">The Solution</h2>
            <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">The Results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {study.results.map((result) => (
                <div key={result.metric} className="bg-card rounded-xl p-6 border border-border">
                  <p className="text-3xl font-bold text-primary mb-2">{result.value}</p>
                  <p className="font-semibold text-foreground">{result.metric}</p>
                  <p className="text-sm text-muted-foreground mt-1">{result.description}</p>
                </div>
              ))}
            </div>
          </section>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Quote className="h-10 w-10 text-primary/30 mb-4" />
          <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-6">
            &quot;{study.testimonial.quote}&quot;
          </blockquote>
          <div className="flex items-center gap-4">
            <img
              src={study.testimonial.avatar || "/placeholder.svg"}
              alt={study.testimonial.author}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-foreground">{study.testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{study.testimonial.role}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  )
}
