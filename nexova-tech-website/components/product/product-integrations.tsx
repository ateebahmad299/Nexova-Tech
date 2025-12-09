"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const integrations = [
  { name: "Salesforce", category: "CRM" },
  { name: "HubSpot", category: "CRM" },
  { name: "Slack", category: "Communication" },
  { name: "Microsoft Teams", category: "Communication" },
  { name: "Google Workspace", category: "Productivity" },
  { name: "Notion", category: "Productivity" },
  { name: "Jira", category: "Project Management" },
  { name: "Asana", category: "Project Management" },
  { name: "Stripe", category: "Payments" },
  { name: "QuickBooks", category: "Finance" },
  { name: "Zendesk", category: "Support" },
  { name: "Intercom", category: "Support" },
  { name: "Mailchimp", category: "Marketing" },
  { name: "Twilio", category: "Communication" },
  { name: "AWS", category: "Cloud" },
  { name: "PostgreSQL", category: "Database" },
]

export function ProductIntegrations() {
  return (
    <section className="py-24 bg-background" id="integrations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Connect with 200+ tools
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Seamlessly integrate with all your favorite tools and services
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-2 group-hover:bg-primary/10 transition-colors">
                <span className="text-lg font-bold text-muted-foreground group-hover:text-primary">
                  {integration.name[0]}
                </span>
              </div>
              <span className="text-xs font-medium text-foreground text-center">{integration.name}</span>
              <span className="text-xs text-muted-foreground">{integration.category}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button variant="outline" asChild className="bg-transparent">
            <Link href="/integrations">View All Integrations</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
