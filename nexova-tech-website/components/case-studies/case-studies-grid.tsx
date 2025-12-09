"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { CaseStudy } from "@/lib/case-studies-data"
import { ArrowRight } from "lucide-react"

interface CaseStudiesGridProps {
  caseStudies: CaseStudy[]
}

export function CaseStudiesGrid({ caseStudies }: CaseStudiesGridProps) {
  return (
    <section className="py-12 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/case-studies/${study.slug}`} className="group block">
                <div
                  className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="aspect-[16/10] rounded-xl overflow-hidden bg-muted">
                      <img
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-sm text-muted-foreground">{study.company}</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-4 text-balance">
                      {study.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">{study.excerpt}</p>

                    {/* Key Results */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.results.slice(0, 4).map((result) => (
                        <div key={result.metric} className="bg-secondary/50 rounded-lg p-4">
                          <p className="text-2xl font-bold text-primary">{result.value}</p>
                          <p className="text-xs text-muted-foreground">{result.metric}</p>
                        </div>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      Read Case Study
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
