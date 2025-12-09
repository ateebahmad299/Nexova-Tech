"use client"

import { motion } from "framer-motion"
import { Zap, BarChart3, Lock, Workflow, Bot, Globe, Clock, Layers } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description: "Intelligent workflows that learn from your data and automatically optimize over time.",
  },
  {
    icon: Workflow,
    title: "Visual Workflow Builder",
    description: "Drag-and-drop interface to create complex automations without any coding required.",
  },
  {
    icon: Zap,
    title: "Instant Triggers",
    description: "Real-time event processing with sub-second response times for critical workflows.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive insights into your automation performance with actionable recommendations.",
  },
  {
    icon: Globe,
    title: "200+ Integrations",
    description: "Connect with all your favorite tools including Salesforce, Slack, HubSpot, and more.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with end-to-end encryption and role-based access controls.",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Always-on monitoring with instant alerts and automatic failover for mission-critical processes.",
  },
  {
    icon: Layers,
    title: "Scalable Infrastructure",
    description: "Built to handle millions of workflow executions per day without breaking a sweat.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            className="text-sm font-medium text-accent uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Features
          </motion.span>
          <motion.h2
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Everything you need to automate at scale
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our platform provides all the tools you need to streamline operations, reduce costs, and accelerate growth.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
