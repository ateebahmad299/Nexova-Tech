"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Free",
    description: "For individuals and small projects",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Up to 100 workflow executions/month",
      "5 active workflows",
      "10 integrations",
      "Basic analytics",
      "Community support",
      "7-day execution history",
    ],
    cta: "Get Started Free",
    href: "/signup",
    popular: false,
  },
  {
    name: "Starter",
    description: "For growing teams and businesses",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      "Up to 5,000 workflow executions/month",
      "25 active workflows",
      "50 integrations",
      "Advanced analytics",
      "Email support",
      "30-day execution history",
      "Custom webhooks",
      "API access",
    ],
    cta: "Start Free Trial",
    href: "/signup?plan=starter",
    popular: false,
  },
  {
    name: "Pro",
    description: "For scaling operations",
    monthlyPrice: 149,
    yearlyPrice: 119,
    features: [
      "Up to 50,000 workflow executions/month",
      "Unlimited active workflows",
      "200+ integrations",
      "AI-powered suggestions",
      "Priority support",
      "90-day execution history",
      "Advanced security controls",
      "Team collaboration",
      "Custom branding",
    ],
    cta: "Start Free Trial",
    href: "/signup?plan=pro",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Unlimited workflow executions",
      "Unlimited everything",
      "All integrations + custom",
      "Dedicated AI model training",
      "24/7 phone & chat support",
      "Unlimited execution history",
      "SSO & SAML",
      "SLA guarantee",
      "Dedicated account manager",
      "On-premise deployment option",
    ],
    cta: "Contact Sales",
    href: "/contact?plan=enterprise",
    popular: false,
  },
]

export function PricingCards() {
  const [isYearly, setIsYearly] = useState(true)

  return (
    <section className="py-12 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={cn("text-sm font-medium", !isYearly ? "text-foreground" : "text-muted-foreground")}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={cn(
              "relative w-14 h-7 rounded-full transition-colors",
              isYearly ? "bg-primary" : "bg-muted-foreground/30",
            )}
            aria-label="Toggle yearly billing"
          >
            <span
              className={cn(
                "absolute top-1 w-5 h-5 rounded-full bg-white transition-transform",
                isYearly ? "translate-x-8" : "translate-x-1",
              )}
            />
          </button>
          <span className={cn("text-sm font-medium", isYearly ? "text-foreground" : "text-muted-foreground")}>
            Yearly
            <span className="ml-1.5 text-xs text-accent font-semibold">Save 20%</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={cn(
                "relative flex flex-col p-6 rounded-xl border",
                plan.popular
                  ? "border-primary bg-primary/5 shadow-lg"
                  : "border-border bg-card hover:border-primary/50 transition-colors",
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              </div>

              <div className="mb-6">
                {plan.monthlyPrice !== null ? (
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-foreground">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                ) : (
                  <div className="text-4xl font-bold text-foreground">Custom</div>
                )}
                {isYearly && plan.yearlyPrice !== null && plan.yearlyPrice > 0 && (
                  <p className="text-sm text-muted-foreground mt-1">Billed annually</p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "default" : "outline"}
                asChild
                className={cn("w-full", !plan.popular && "bg-transparent")}
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
