"use client"

import { motion } from "framer-motion"

const milestones = [
  {
    year: "2020",
    title: "Founded",
    description: "NEXOVA Tech was founded with a vision to democratize workflow automation.",
  },
  {
    year: "2021",
    title: "Seed Funding",
    description: "Raised $5M seed round to build our core platform and grow the team.",
  },
  {
    year: "2022",
    title: "Product Launch",
    description: "Launched our first public version with 50+ integrations.",
  },
  {
    year: "2023",
    title: "Series A",
    description: "Raised $25M Series A. Reached 100+ enterprise customers.",
  },
  {
    year: "2024",
    title: "AI Integration",
    description: "Launched AI-powered automation features. Crossed 500+ customers.",
  },
  {
    year: "2025",
    title: "Global Expansion",
    description: "Expanded to Europe and Asia. 200+ integrations now available.",
  },
]

export function AboutTimeline() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            From startup to industry leader in just a few years
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden lg:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`flex items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className="p-6 bg-card rounded-xl border border-border inline-block max-w-md">
                    <span className="text-sm font-medium text-accent">{milestone.year}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-1">{milestone.title}</h3>
                    <p className="text-muted-foreground mt-2">{milestone.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
