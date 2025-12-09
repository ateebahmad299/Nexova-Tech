"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "500+", label: "Companies" },
  { value: "10M+", label: "Workflows automated" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "40%", label: "Avg. time saved" },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-4xl lg:text-5xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
