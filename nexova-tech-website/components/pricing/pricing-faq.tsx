"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Can I change plans at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the remaining balance will be credited to your account.",
  },
  {
    question: "What happens if I exceed my workflow execution limit?",
    answer:
      "If you exceed your monthly execution limit, we'll notify you and you can either upgrade to a higher tier or purchase additional executions as needed. We won't stop your workflows without warning.",
  },
  {
    question: "Is there a free trial for paid plans?",
    answer:
      "Yes! All paid plans come with a 14-day free trial. No credit card required to start. You'll have full access to all features during the trial period.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), ACH bank transfers for annual plans, and wire transfers for Enterprise customers.",
  },
  {
    question: "Do you offer discounts for nonprofits or education?",
    answer:
      "Yes, we offer 50% off for verified nonprofits and educational institutions. Contact our sales team with your organization details to apply.",
  },
  {
    question: "What's included in Enterprise support?",
    answer:
      "Enterprise support includes 24/7 phone and chat support, a dedicated account manager, custom onboarding, quarterly business reviews, and guaranteed response times backed by SLA.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer:
      "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied for any reason, contact us within 30 days for a full refund.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We're SOC 2 Type II certified, use end-to-end encryption, and comply with GDPR and CCPA. All data is stored in secure, redundant data centers with regular security audits.",
  },
]

export function PricingFAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently asked questions
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Everything you need to know about our pricing
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
