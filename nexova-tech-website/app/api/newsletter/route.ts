import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // In production, add to Mailchimp
    // const mailchimpApiKey = process.env.MAILCHIMP_API_KEY
    // if (mailchimpApiKey) {
    //   const dc = mailchimpApiKey.split('-')[1]
    //   await fetch(`https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`, {
    //     method: 'POST',
    //     headers: {
    //       'Authorization': `apikey ${mailchimpApiKey}`,
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email_address: email,
    //       status: 'pending', // Double opt-in
    //     })
    //   })
    // }

    console.log("Newsletter subscription:", { email, timestamp: new Date().toISOString() })

    return NextResponse.json({
      success: true,
      message: "Thanks for subscribing! Check your email to confirm.",
    })
  } catch (error) {
    console.error("Newsletter error:", error)
    return NextResponse.json({ error: "An error occurred. Please try again." }, { status: 500 })
  }
}
