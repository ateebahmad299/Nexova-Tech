import { NextResponse } from "next/server"

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; timestamp: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 60 * 1000 // 1 minute window
  const maxRequests = 5

  const record = rateLimitStore.get(ip)

  if (!record || now - record.timestamp > windowMs) {
    rateLimitStore.set(ip, { count: 1, timestamp: now })
    return true
  }

  if (record.count >= maxRequests) {
    return false
  }

  record.count++
  return true
}

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const forwardedFor = request.headers.get("x-forwarded-for")
    const ip = forwardedFor?.split(",")[0] || "unknown"

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
    }

    const body = await request.json()
    const { firstName, lastName, email, company, interest, message, website } = body

    // Honeypot check - if website field is filled, it's likely a bot
    if (website) {
      // Pretend success but don't process
      return NextResponse.json({ success: true })
    }

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // In production, send email via SendGrid
    // const sendgridApiKey = process.env.SENDGRID_API_KEY
    // if (sendgridApiKey) {
    //   await fetch('https://api.sendgrid.com/v3/mail/send', {
    //     method: 'POST',
    //     headers: {
    //       'Authorization': `Bearer ${sendgridApiKey}`,
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       personalizations: [{ to: [{ email: 'hello@nexova.tech' }] }],
    //       from: { email: 'noreply@nexova.tech', name: 'NEXOVA Contact Form' },
    //       subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    //       content: [{
    //         type: 'text/plain',
    //         value: `Name: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company}\nInterest: ${interest}\n\nMessage:\n${message}`
    //       }]
    //     })
    //   })
    // }

    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      company,
      interest,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We'll get back to you shortly.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "An error occurred. Please try again." }, { status: 500 })
  }
}
