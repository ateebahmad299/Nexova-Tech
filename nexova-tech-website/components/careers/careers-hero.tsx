"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background pt-32 pb-20 lg:pt-40 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent border border-accent/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            We're Hiring
          </motion.span>

          <motion.h1
            className="mt-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Build the future with us
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Join a team of passionate builders working on challenging problems in automation and AI. We're growing fast
            and looking for talented people who want to make an impact.
          </motion.p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button size="lg" asChild>
              <a href="#openings">View Open Positions</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
