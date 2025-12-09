"use client"

import { motion } from "framer-motion"

export function AboutMission() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that every business deserves access to powerful automation tools. Our mission is to democratize
              workflow automation, making it accessible, affordable, and easy to use for companies of all sizes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By combining cutting-edge AI with an intuitive interface, we're eliminating the technical barriers that
              have traditionally kept small and mid-size businesses from benefiting from automation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We envision a world where teams spend their time on creative, strategic work—not repetitive tasks. Where
              AI handles the mundane so humans can focus on what matters most.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our goal is to be the automation platform of choice for the next generation of businesses, helping
              millions of teams work smarter and achieve more with less effort.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
