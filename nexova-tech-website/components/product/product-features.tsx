"use client"

import { motion } from "framer-motion"
import { Bot, Workflow, Zap, BarChart3, Shield, Users } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI-Powered Intelligence",
    description:
      "Our machine learning models analyze your workflows in real-time, identifying optimization opportunities and automating decision-making processes. The AI continuously learns from your data to provide smarter suggestions over time.",
    highlights: [
      "Smart workflow suggestions",
      "Anomaly detection",
      "Predictive analytics",
      "Natural language processing",
    ],
  },
  {
    icon: Workflow,
    title: "Visual Workflow Builder",
    description:
      "Design complex automation flows with our intuitive drag-and-drop interface. No coding required. Connect triggers, actions, and conditions to create powerful workflows in minutes.",
    highlights: ["Drag-and-drop interface", "Pre-built templates", "Conditional logic", "Loop and branching support"],
  },
  {
    icon: Zap,
    title: "Real-Time Execution",
    description:
      "Execute workflows instantly with sub-second response times. Our distributed architecture ensures your automations run reliably at any scale, handling millions of executions per day.",
    highlights: ["Sub-second triggers", "Parallel processing", "Queue management", "Retry mechanisms"],
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Gain deep insights into your automation performance with comprehensive dashboards. Track execution times, success rates, and resource utilization to optimize your workflows.",
    highlights: ["Real-time dashboards", "Custom reports", "Performance metrics", "ROI tracking"],
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Built with security at its core. SOC 2 Type II certified with end-to-end encryption, role-based access controls, and comprehensive audit logging for complete compliance.",
    highlights: ["SOC 2 Type II certified", "End-to-end encryption", "SSO & SAML support", "Audit logging"],
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work together seamlessly with built-in collaboration features. Share workflows, leave comments, track changes, and manage permissions across your entire organization.",
    highlights: ["Shared workspaces", "Version control", "Comments & mentions", "Role-based permissions"],
  },
]

export function ProductFeatures() {
  return (
    <section className="py-24 bg-background" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Powerful features for modern teams
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Everything you need to automate, optimize, and scale your business operations
          </motion.p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{feature.description}</p>
                <ul className="grid grid-cols-2 gap-3">
                  {feature.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-muted/50 to-muted border border-border overflow-hidden">
                  <img
                    src={`/.jpg?height=400&width=533&query=${encodeURIComponent(feature.title + " software interface")}`}
                    alt={`${feature.title} interface`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
