"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "For general inquiries",
    value: "hello@nexova.tech",
    href: "mailto:hello@nexova.tech",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Mon-Fri 9am-6pm ET",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Office",
    description: "Visit us in person",
    value: "548 Market St, Suite 12345, San Francisco, CA 94104",
    href: "https://maps.google.com/?q=548+Market+St+San+Francisco+CA",
  },
]

export function ContactInfo() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
      <h2 className="text-2xl font-bold text-foreground mb-6">Other ways to reach us</h2>

      <div className="space-y-6">
        {contactMethods.map((method) => (
          <a
            key={method.title}
            href={method.href}
            target={method.title === "Office" ? "_blank" : undefined}
            rel={method.title === "Office" ? "noopener noreferrer" : undefined}
            className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <method.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {method.title}
              </h3>
              <p className="text-sm text-muted-foreground">{method.description}</p>
              <p className="text-sm font-medium text-foreground mt-1">{method.value}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Schedule a call CTA */}
      <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Calendar className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground">Schedule a call</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Book a 30-minute call with our sales team to discuss your needs.
            </p>
            <Button className="mt-4" asChild>
              <a
                href={process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/nexova/demo"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Meeting
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Support */}
      <div className="mt-8 p-6 rounded-xl bg-card border border-border">
        <h3 className="font-semibold text-foreground mb-2">Need support?</h3>
        <p className="text-sm text-muted-foreground mb-4">Existing customers can reach our support team directly.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" asChild className="bg-transparent">
            <a href="mailto:support@nexova.tech">Email Support</a>
          </Button>
          <Button variant="outline" asChild className="bg-transparent">
            <a href="/docs">Documentation</a>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
