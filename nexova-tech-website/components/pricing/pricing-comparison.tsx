"use client"

import { motion } from "framer-motion"
import { Check, Minus } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const features = [
  { name: "Workflow executions/month", free: "100", starter: "5,000", pro: "50,000", enterprise: "Unlimited" },
  { name: "Active workflows", free: "5", starter: "25", pro: "Unlimited", enterprise: "Unlimited" },
  { name: "Integrations", free: "10", starter: "50", pro: "200+", enterprise: "All + Custom" },
  { name: "Execution history", free: "7 days", starter: "30 days", pro: "90 days", enterprise: "Unlimited" },
  { name: "Team members", free: "1", starter: "5", pro: "25", enterprise: "Unlimited" },
  { name: "API access", free: false, starter: true, pro: true, enterprise: true },
  { name: "Custom webhooks", free: false, starter: true, pro: true, enterprise: true },
  { name: "AI-powered suggestions", free: false, starter: false, pro: true, enterprise: true },
  { name: "Advanced analytics", free: false, starter: true, pro: true, enterprise: true },
  { name: "Priority support", free: false, starter: false, pro: true, enterprise: true },
  { name: "SSO & SAML", free: false, starter: false, pro: false, enterprise: true },
  { name: "SLA guarantee", free: false, starter: false, pro: false, enterprise: true },
  { name: "Dedicated account manager", free: false, starter: false, pro: false, enterprise: true },
]

export function PricingComparison() {
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
            Compare plans
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Find the perfect plan for your team's needs
          </motion.p>
        </div>

        <motion.div
          className="overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Feature</TableHead>
                <TableHead className="text-center">Free</TableHead>
                <TableHead className="text-center">Starter</TableHead>
                <TableHead className="text-center bg-primary/5">Pro</TableHead>
                <TableHead className="text-center">Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature) => (
                <TableRow key={feature.name}>
                  <TableCell className="font-medium">{feature.name}</TableCell>
                  <TableCell className="text-center">
                    {typeof feature.free === "boolean" ? (
                      feature.free ? (
                        <Check className="h-5 w-5 text-accent mx-auto" />
                      ) : (
                        <Minus className="h-5 w-5 text-muted-foreground mx-auto" />
                      )
                    ) : (
                      feature.free
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {typeof feature.starter === "boolean" ? (
                      feature.starter ? (
                        <Check className="h-5 w-5 text-accent mx-auto" />
                      ) : (
                        <Minus className="h-5 w-5 text-muted-foreground mx-auto" />
                      )
                    ) : (
                      feature.starter
                    )}
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    {typeof feature.pro === "boolean" ? (
                      feature.pro ? (
                        <Check className="h-5 w-5 text-accent mx-auto" />
                      ) : (
                        <Minus className="h-5 w-5 text-muted-foreground mx-auto" />
                      )
                    ) : (
                      feature.pro
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {typeof feature.enterprise === "boolean" ? (
                      feature.enterprise ? (
                        <Check className="h-5 w-5 text-accent mx-auto" />
                      ) : (
                        <Minus className="h-5 w-5 text-muted-foreground mx-auto" />
                      )
                    ) : (
                      feature.enterprise
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  )
}
