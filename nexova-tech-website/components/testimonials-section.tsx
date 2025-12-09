"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "NEXOVA has transformed how we handle customer onboarding. What used to take 3 days now happens in minutes.",
    author: "Sarah Chen",
    role: "VP of Operations",
    company: "TechFlow Inc.",
    avatar: "/professional-woman-headshot.png",
    rating: 5,
  },
  {
    quote:
      "The AI-powered suggestions have helped us identify bottlenecks we didn't even know existed. Our efficiency improved by 40%.",
    author: "Michael Rodriguez",
    role: "CTO",
    company: "DataStream Labs",
    avatar: "/professional-man-headshot.png",
    rating: 5,
  },
  {
    quote:
      "Best decision we made this year. The ROI was visible within the first month, and the support team is exceptional.",
    author: "Emily Watson",
    role: "Head of Growth",
    company: "ScaleUp Ventures",
    avatar: "/professional-woman-executive-headshot.png",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            className="text-sm font-medium text-accent uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Testimonials
          </motion.span>
          <motion.h2
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Loved by teams everywhere
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-card p-8 rounded-xl border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-foreground mb-6 leading-relaxed">&quot;{testimonial.quote}&quot;</blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={`${testimonial.author} headshot`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
