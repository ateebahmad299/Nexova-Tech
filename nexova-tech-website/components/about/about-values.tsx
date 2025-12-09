"use client"

import { motion } from "framer-motion"
import { Heart, Lightbulb, Users, Shield, Rocket, Sparkles } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make starts with our customers. Their success is our success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We push boundaries and embrace new ideas to stay ahead of the curve.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best solutions come from diverse perspectives working together.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "We earn trust through transparency, reliability, and unwavering commitment to security.",
  },
  {
    icon: Rocket,
    title: "Speed & Quality",
    description: "We move fast without compromising on the quality our customers deserve.",
  },
  {
    icon: Sparkles,
    title: "Simplicity",
    description: "We make complex things simple. If it's not easy to use, it's not done.",
  },
]

export function AboutValues() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            The principles that guide everything we do
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="p-6 bg-card rounded-xl border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
