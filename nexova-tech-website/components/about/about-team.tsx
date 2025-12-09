"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Linkedin } from "lucide-react"

const team = [
  {
    name: "Alex Rivera",
    role: "CEO & Co-Founder",
    bio: "Former VP of Engineering at Stripe. Stanford CS grad.",
    image: "/alex-rivera-ceo-headshot.png",
    linkedin: "https://linkedin.com/in/alexrivera",
  },
  {
    name: "Jordan Chen",
    role: "CTO & Co-Founder",
    bio: "Ex-Google AI researcher. MIT PhD in Machine Learning.",
    image: "/jordan-chen-cto-headshot.png",
    linkedin: "https://linkedin.com/in/jordanchen",
  },
  {
    name: "Maya Patel",
    role: "Chief Product Officer",
    bio: "Former Product Lead at Figma. 10+ years in SaaS.",
    image: "/maya-patel-cpo-headshot.png",
    linkedin: "https://linkedin.com/in/mayapatel",
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    bio: "Built infrastructure at AWS. Distributed systems expert.",
    image: "/david-kim-vp-engineering-headshot.png",
    linkedin: "https://linkedin.com/in/davidkim",
  },
  {
    name: "Sarah Johnson",
    role: "VP of Sales",
    bio: "Grew Salesforce enterprise sales team 5x. Revenue leader.",
    image: "/sarah-johnson-vp-sales-headshot.png",
    linkedin: "https://linkedin.com/in/sarahjohnson",
  },
  {
    name: "Marcus Williams",
    role: "VP of Customer Success",
    bio: "Former CS Director at HubSpot. Customer obsessed.",
    image: "/marcus-williams-vp-cs-headshot.png",
    linkedin: "https://linkedin.com/in/marcuswilliams",
  },
]

export function AboutTeam() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            The people building the future of automation
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name}, ${member.role}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-accent font-medium">{member.role}</p>
                  </div>
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground mt-3">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
