"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F4C81_1px,transparent_1px),linear-gradient(to_bottom,#0F4C81_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.02]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent border border-accent/20">
              <span className="mr-2 h-2 w-2 rounded-full bg-accent animate-pulse" />
              Now with AI-powered insights
            </span>
          </motion.div>

          <motion.h1
            className="mt-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Build smarter workflows with <span className="text-primary">AI-powered automation</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            NEXOVA Tech helps small & mid-size companies automate customer workflows, reduce manual work, and scale
            faster. Transform your operations with intelligent automation that learns and adapts.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/contact">
                Get a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
              <Link href="/pricing">Try Free for 14 Days</Link>
            </Button>
            <Button size="lg" variant="ghost" asChild className="w-full sm:w-auto">
              <Link href="#demo-video" className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                Watch Demo
              </Link>
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-sm text-muted-foreground mb-6">Trusted by 500+ companies worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {["Acme Corp", "Globex", "Initech", "Umbrella", "Stark Industries", "Wayne Ent"].map((company) => (
                <div key={company} className="text-lg font-semibold text-muted-foreground">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Hero Image/Dashboard Preview */}
        <motion.div
          className="mt-16 lg:mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-2xl opacity-50" />
            <div className="relative rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-full bg-background text-xs text-muted-foreground">
                    app.nexova.tech/dashboard
                  </div>
                </div>
              </div>
              <div className="aspect-[16/9] bg-gradient-to-br from-muted/30 to-muted/50 flex items-center justify-center">
                <img
                  src="/modern-dashboard-interface-with-workflow-automatio.jpg"
                  alt="NEXOVA Tech Dashboard showing workflow automation and analytics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
