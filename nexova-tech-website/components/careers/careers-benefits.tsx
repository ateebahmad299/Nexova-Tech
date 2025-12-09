"use client"

import { motion } from "framer-motion"
import { DollarSign, Heart, Plane, GraduationCap, Home, Dumbbell, Coffee, Baby } from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description: "Top-of-market compensation with equity packages for all employees.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Premium health, dental, and vision insurance. 100% covered for you and dependents.",
  },
  {
    icon: Plane,
    title: "Unlimited PTO",
    description: "Take the time you need. We trust you to manage your schedule.",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "$5,000 annual budget for courses, conferences, and professional development.",
  },
  {
    icon: Home,
    title: "Remote First",
    description: "Work from anywhere. We have team members across 15+ countries.",
  },
  {
    icon: Dumbbell,
    title: "Gym Membership",
    description: "$100/month wellness stipend for gym, fitness classes, or mental health apps.",
  },
  {
    icon: Coffee,
    title: "Home Office Setup",
    description: "$2,000 one-time stipend to create your perfect home workspace.",
  },
  {
    icon: Baby,
    title: "Parental Leave",
    description: "16 weeks fully paid leave for all new parents, plus flexible return options.",
  },
]

export function CareersBenefits() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Benefits & Perks
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We take care of our team so they can focus on doing their best work
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
