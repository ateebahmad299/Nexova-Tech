"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

const screenshots = [
  {
    id: "dashboard",
    title: "Dashboard",
    description: "Get a complete overview of your automation performance",
    image: "/analytics-dashboard.png",
  },
  {
    id: "workflow-builder",
    title: "Workflow Builder",
    description: "Create powerful automations with drag-and-drop",
    image: "/visual-workflow-builder.png",
  },
  {
    id: "integrations",
    title: "Integrations",
    description: "Connect with 200+ tools and services",
    image: "/app-integrations-grid-with-logos.jpg",
  },
  {
    id: "analytics",
    title: "Analytics",
    description: "Deep insights into your workflow performance",
    image: "/detailed-analytics-charts-and-graphs.jpg",
  },
]

export function ProductScreenshots() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const activeScreenshot = screenshots.find((s) => s.id === activeTab)

  return (
    <section className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            See NEXOVA in action
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Explore our intuitive interface designed for productivity
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {screenshots.map((screenshot) => (
            <button
              key={screenshot.id}
              onClick={() => setActiveTab(screenshot.id)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                activeTab === screenshot.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border",
              )}
            >
              {screenshot.title}
            </button>
          ))}
        </div>

        {/* Screenshot Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl blur-xl" />
            <div className="relative rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
              </div>
              <div className="aspect-[16/10]">
                <img
                  src={activeScreenshot?.image || "/placeholder.svg"}
                  alt={activeScreenshot?.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <p className="text-center mt-6 text-muted-foreground">{activeScreenshot?.description}</p>
        </motion.div>
      </div>
    </section>
  )
}
