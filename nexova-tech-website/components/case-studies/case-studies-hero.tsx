"use client"

import { motion } from "framer-motion"

export function CaseStudiesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background pt-32 pb-12 lg:pt-40 lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent border border-accent/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Customer Success
          </motion.span>

          <motion.h1
            className="mt-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Real results from real customers
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            See how companies across industries have transformed their operations with NEXOVA. Measurable outcomes,
            compelling stories.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
