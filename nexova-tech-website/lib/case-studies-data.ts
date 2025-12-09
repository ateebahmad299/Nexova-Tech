export interface CaseStudy {
  slug: string
  company: string
  industry: string
  logo: string
  title: string
  excerpt: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    description: string
  }[]
  testimonial: {
    quote: string
    author: string
    role: string
    avatar: string
  }
  image: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "techflow-customer-onboarding",
    company: "TechFlow Inc.",
    industry: "SaaS",
    logo: "/techflow-logo.png",
    title: "How TechFlow Reduced Customer Onboarding Time by 75%",
    excerpt:
      "TechFlow used NEXOVA to automate their entire customer onboarding process, dramatically improving time-to-value and customer satisfaction.",
    challenge:
      "TechFlow was struggling with a manual onboarding process that took an average of 12 days to complete. New customers were getting frustrated, and the support team was overwhelmed with repetitive tasks. The company was growing fast, but the onboarding bottleneck was causing churn.",
    solution:
      "Working with NEXOVA, TechFlow implemented an automated onboarding workflow that included: automated welcome sequences, smart task assignment based on customer profile, progress tracking with automated follow-ups, and integration with their CRM and support tools. The visual workflow builder allowed them to design complex conditional logic without engineering resources.",
    results: [
      {
        metric: "Time to First Value",
        value: "75%",
        description: "Reduction in onboarding time from 12 days to 3 days",
      },
      {
        metric: "Customer Satisfaction",
        value: "92%",
        description: "NPS score for newly onboarded customers",
      },
      {
        metric: "Support Tickets",
        value: "60%",
        description: "Reduction in onboarding-related support requests",
      },
      {
        metric: "Team Capacity",
        value: "3x",
        description: "Increase in customers onboarded per rep per month",
      },
    ],
    testimonial: {
      quote:
        "NEXOVA transformed how we onboard customers. What used to take our team hours of manual work now happens automatically. Our customers are happier, and our team can focus on high-value interactions.",
      author: "Sarah Chen",
      role: "VP of Operations, TechFlow Inc.",
      avatar: "/professional-woman-headshot.png",
    },
    image: "/techflow-case-study-hero.jpg",
  },
  {
    slug: "datastream-workflow-efficiency",
    company: "DataStream Labs",
    industry: "Data Analytics",
    logo: "/datastream-logo.png",
    title: "DataStream Saves 40 Hours Per Week with Automated Reporting",
    excerpt:
      "DataStream Labs automated their client reporting workflows, freeing up valuable analyst time and improving report accuracy.",
    challenge:
      "DataStream's analysts were spending over 40 hours per week manually compiling reports for clients. The process was error-prone, reports were often delayed, and the team couldn't scale to take on new clients without hiring more analysts.",
    solution:
      "NEXOVA helped DataStream build automated reporting pipelines that pulled data from multiple sources, applied standardized calculations, generated formatted reports, and delivered them to clients on schedule. Custom integrations connected their data warehouse, visualization tools, and email systems.",
    results: [
      {
        metric: "Time Saved",
        value: "40hrs",
        description: "Weekly time saved on manual reporting tasks",
      },
      {
        metric: "Report Accuracy",
        value: "99.9%",
        description: "Accuracy rate with automated calculations",
      },
      {
        metric: "Client Capacity",
        value: "2x",
        description: "Increase in clients served without adding headcount",
      },
      {
        metric: "Delivery Time",
        value: "50%",
        description: "Faster report delivery to clients",
      },
    ],
    testimonial: {
      quote:
        "The ROI was immediate. Our analysts went from data entry to actually analyzing and providing insights. That's a fundamental shift in the value we deliver.",
      author: "Michael Rodriguez",
      role: "CTO, DataStream Labs",
      avatar: "/professional-man-headshot.png",
    },
    image: "/datastream-case-study-hero.jpg",
  },
  {
    slug: "scaleup-sales-automation",
    company: "ScaleUp Ventures",
    industry: "Financial Services",
    logo: "/scaleup-logo.png",
    title: "ScaleUp Ventures Increases Sales Pipeline by 150% with AI Automation",
    excerpt:
      "ScaleUp Ventures leveraged NEXOVA's AI-powered automation to transform their sales process and dramatically increase qualified leads.",
    challenge:
      "ScaleUp's sales team was drowning in manual tasks: qualifying leads, scheduling meetings, following up on proposals, and updating CRM records. Sales reps were spending less than 30% of their time actually selling.",
    solution:
      "NEXOVA's AI-powered automation handled lead scoring, intelligent meeting scheduling with Calendly integration, automated follow-up sequences based on engagement signals, and real-time CRM updates. The AI continuously learned from successful deals to improve lead prioritization.",
    results: [
      {
        metric: "Pipeline Growth",
        value: "150%",
        description: "Increase in qualified sales pipeline",
      },
      {
        metric: "Selling Time",
        value: "65%",
        description: "Of rep time now spent on active selling",
      },
      {
        metric: "Lead Response",
        value: "5min",
        description: "Average response time to new leads (down from 24hrs)",
      },
      {
        metric: "Close Rate",
        value: "25%",
        description: "Improvement in deal close rate",
      },
    ],
    testimonial: {
      quote:
        "Best decision we made this year. The AI-powered lead scoring alone has transformed how we prioritize our pipeline. We're closing more deals with less effort.",
      author: "Emily Watson",
      role: "Head of Growth, ScaleUp Ventures",
      avatar: "/professional-woman-executive-headshot.png",
    },
    image: "/scaleup-case-study-hero.jpg",
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug)
}
