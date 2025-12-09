"use client"

import { motion } from "framer-motion"

export function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background pt-32 pb-12 lg:pt-40 lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Blog
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Insights, best practices, and industry trends from the NEXOVA team. Stay ahead with our latest thinking on
            automation and AI.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
