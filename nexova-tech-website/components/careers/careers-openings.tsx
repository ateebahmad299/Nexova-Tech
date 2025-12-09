"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Clock, ArrowRight } from "lucide-react"

const openings = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    slug: "senior-software-engineer",
  },
  {
    title: "Staff Machine Learning Engineer",
    department: "AI/ML",
    location: "Remote (Global)",
    type: "Full-time",
    slug: "staff-ml-engineer",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote (US/EU)",
    type: "Full-time",
    slug: "product-designer",
  },
  {
    title: "Senior Product Manager",
    department: "Product",
    location: "San Francisco, CA",
    type: "Full-time",
    slug: "senior-product-manager",
  },
  {
    title: "Enterprise Account Executive",
    department: "Sales",
    location: "New York, NY",
    type: "Full-time",
    slug: "enterprise-ae",
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote (US)",
    type: "Full-time",
    slug: "customer-success-manager",
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
    slug: "devops-engineer",
  },
  {
    title: "Technical Writer",
    department: "Documentation",
    location: "Remote (Global)",
    type: "Full-time",
    slug: "technical-writer",
  },
]

const departments = [...new Set(openings.map((o) => o.department))]

export function CareersOpenings() {
  return (
    <section className="py-24 bg-secondary/30" id="openings">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Open Positions
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Find your perfect role and join our growing team
          </motion.p>
        </div>

        {/* Filter Tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button variant="secondary" size="sm" className="bg-primary text-primary-foreground">
            All ({openings.length})
          </Button>
          {departments.map((dept) => (
            <Button key={dept} variant="outline" size="sm" className="bg-transparent">
              {dept} ({openings.filter((o) => o.department === dept).length})
            </Button>
          ))}
        </motion.div>

        {/* Job Listings */}
        <motion.div
          className="space-y-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {openings.map((job, index) => (
            <Link
              key={job.slug}
              href={`/careers/${job.slug}`}
              className="block p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded">
                      {job.department}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </motion.div>

        {/* Can't find a role */}
        <motion.div
          className="mt-12 text-center p-8 bg-card rounded-xl border border-border max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-2">{"Don't see your role?"}</h3>
          <p className="text-muted-foreground mb-4">
            {
              "We're always looking for talented people. Send us your resume and let us know how you'd like to contribute."
            }
          </p>
          <Button variant="outline" asChild className="bg-transparent">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
