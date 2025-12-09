import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "NEXOVA Tech Privacy Policy - How we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-32 pb-24">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 1, 2024</p>

          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                {`NEXOVA Tech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website and
                use our services.`}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Personal Information</h3>
              <p className="text-muted-foreground mb-4">
                We may collect personal information that you voluntarily provide, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Company name and job title</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Communications with our support team</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Automatically Collected Information</h3>
              <p className="text-muted-foreground mb-4">When you access our services, we may automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Device information (browser type, operating system)</li>
                <li>IP address and location data</li>
                <li>Usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Provide and maintain our services</li>
                <li>Process transactions and send related information</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Monitor and analyze usage trends</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Service providers who assist in our operations</li>
                <li>Business partners with your consent</li>
                <li>Legal authorities when required by law</li>
                <li>Successors in the event of a merger or acquisition</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your personal information,
                including encryption, access controls, and regular security assessments. We are SOC 2 Type II certified
                and comply with industry best practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to collect information about your browsing activities.
                You can control cookies through your browser settings. For more information, see our Cookie Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. International Transfers</h2>
              <p className="text-muted-foreground mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure
                appropriate safeguards are in place for such transfers, including standard contractual clauses approved
                by relevant authorities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the date at the top.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or our practices, please contact us at:
              </p>
              <p className="text-muted-foreground">
                NEXOVA Tech
                <br />
                548 Market St, Suite 12345
                <br />
                San Francisco, CA 94104
                <br />
                Email: privacy@nexova.tech
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
