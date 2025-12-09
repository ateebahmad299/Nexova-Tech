import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Linkedin, Twitter, Github, Youtube } from "lucide-react"

const footerLinks = {
  product: [
    { name: "Features", href: "/product#features" },
    { name: "Integrations", href: "/product#integrations" },
    { name: "Pricing", href: "/pricing" },
    { name: "Changelog", href: "/changelog" },
    { name: "Documentation", href: "/docs" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Press", href: "/press" },
  ],
  resources: [
    { name: "Help Center", href: "/help" },
    { name: "Community", href: "/community" },
    { name: "Status", href: "/status" },
    { name: "API Reference", href: "/docs/api" },
    { name: "Partners", href: "/partners" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Security", href: "/security" },
  ],
}

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/nexovatech", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/company/nexovatech", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/nexovatech", icon: Github },
  { name: "YouTube", href: "https://youtube.com/@nexovatech", icon: Youtube },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="grid lg:grid-cols-2 gap-8 pb-12 border-b border-primary-foreground/20">
          <div>
            <h3 className="text-2xl font-bold mb-2">Stay in the loop</h3>
            <p className="text-primary-foreground/80">
              Get the latest updates on product features, industry insights, and company news.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center lg:justify-end">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 w-full sm:w-72"
              aria-label="Email for newsletter"
            />
            <Button variant="secondary" className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary-foreground/20 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold">NEXOVA</span>
          </div>
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} NEXOVA Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label={`Follow us on ${social.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
