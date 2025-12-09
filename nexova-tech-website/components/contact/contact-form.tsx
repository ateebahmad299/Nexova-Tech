"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center text-center p-12 bg-card rounded-xl border border-border"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Thank you!</h3>
        <p className="text-muted-foreground max-w-sm">
          {"We've received your message and will get back to you within 24 hours. Check your email for a confirmation."}
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First name *</Label>
            <Input id="firstName" name="firstName" required placeholder="John" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last name *</Label>
            <Input id="lastName" name="lastName" required placeholder="Doe" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Work email *</Label>
          <Input id="email" name="email" type="email" required placeholder="john@company.com" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company name *</Label>
          <Input id="company" name="company" required placeholder="Acme Inc." />
        </div>

        <div className="space-y-2">
          <Label htmlFor="interest">What are you interested in?</Label>
          <Select name="interest">
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="demo">Request a demo</SelectItem>
              <SelectItem value="pricing">Pricing information</SelectItem>
              <SelectItem value="support">Technical support</SelectItem>
              <SelectItem value="partnership">Partnership opportunities</SelectItem>
              <SelectItem value="other">Something else</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Tell us about your automation needs..."
            rows={5}
          />
        </div>

        {/* Honeypot field for spam protection */}
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>

        <p className="text-xs text-muted-foreground">
          By submitting this form, you agree to our{" "}
          <a href="/privacy-policy" className="underline hover:text-foreground">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </motion.div>
  )
}
