import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "NEXOVA Tech Terms of Service - The terms and conditions for using our platform and services.",
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-32 pb-24">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 1, 2024</p>

          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground mb-4">
                {`By accessing or using NEXOVA Tech's services, you agree to be bound by these Terms of Service and all
                applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from
                using our services.`}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
              <p className="text-muted-foreground mb-4">
                {`Subject to these Terms, NEXOVA Tech grants you a limited, non-exclusive, non-transferable license to
                access and use our services for your internal business purposes. This license does not include:`}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Modifying or copying our materials except as expressly permitted</li>
                <li>Using our services for any commercial purpose not authorized</li>
                <li>Attempting to decompile or reverse engineer our software</li>
                <li>Removing any copyright or proprietary notations</li>
                <li>Transferring your account to another person or entity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Account Registration</h2>
              <p className="text-muted-foreground mb-4">
                {`To use certain features of our services, you must register for an account. You agree to:`}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly update any changes to your information</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Subscription and Payment</h2>
              <p className="text-muted-foreground mb-4">
                {`Paid subscriptions are billed in advance on a monthly or annual basis. All fees are non-refundable
                except as required by law or as expressly stated in these Terms. We reserve the right to change our
                prices with 30 days' notice.`}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. User Content</h2>
              <p className="text-muted-foreground mb-4">
                {`You retain ownership of any content you submit to our services. By submitting content, you grant us a
                worldwide, non-exclusive license to use, reproduce, and display such content solely for operating and
                improving our services.`}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Prohibited Uses</h2>
              <p className="text-muted-foreground mb-4">You agree not to use our services to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit harmful code or malware</li>
                <li>Attempt to gain unauthorized access</li>
                <li>Interfere with or disrupt our services</li>
                <li>Engage in any fraudulent or deceptive practices</li>
                <li>Send unsolicited communications or spam</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                {`Our services and all related content, features, and functionality are owned by NEXOVA Tech and are
                protected by copyright, trademark, and other intellectual property laws. Our trademarks may not be used
                without our prior written consent.`}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground mb-4">
                {`OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                IMPLIED. WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.`}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                {`IN NO EVENT SHALL NEXOVA TECH BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF OUR SERVICES. OUR TOTAL LIABILITY SHALL NOT
                EXCEED THE AMOUNT PAID BY YOU IN THE TWELVE MONTHS PRECEDING THE CLAIM.`}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Indemnification</h2>
              <p className="text-muted-foreground mb-4">
                {`You agree to indemnify and hold harmless NEXOVA Tech and its officers, directors, employees, and agents
                from any claims, damages, or expenses arising from your use of our services or violation of these Terms.`}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Termination</h2>
              <p className="text-muted-foreground mb-4">
                {`We may terminate or suspend your account and access to our services at our sole discretion, without
                notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third
                parties, or for any other reason.`}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                {`These Terms shall be governed by and construed in accordance with the laws of the State of California,
                without regard to its conflict of law provisions. Any disputes shall be resolved in the courts located
                in San Francisco, California.`}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                {`We reserve the right to modify these Terms at any time. We will provide notice of significant changes
                by posting the updated Terms on our website with a new effective date. Your continued use of our
                services after changes constitutes acceptance of the modified Terms.`}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Contact Information</h2>
              <p className="text-muted-foreground mb-4">For questions about these Terms, please contact us at:</p>
              <p className="text-muted-foreground">
                NEXOVA Tech
                <br />
                548 Market St, Suite 12345
                <br />
                San Francisco, CA 94104
                <br />
                Email: legal@nexova.tech
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
