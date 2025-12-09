import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { OrganizationJsonLd, WebsiteJsonLd, SoftwareApplicationJsonLd } from "@/components/json-ld"
import { GoogleAnalytics } from "@/components/analytics"

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: {
    default: "NEXOVA Tech - AI-Powered Workflow Automation",
    template: "%s | NEXOVA Tech",
  },
  description:
    "NEXOVA Tech helps small & mid-size companies automate customer workflows, reduce manual work, and scale faster with AI-powered automation.",
  keywords: [
    "AI automation",
    "workflow automation",
    "business automation",
    "customer workflows",
    "AI platform",
    "process automation",
    "enterprise automation",
    "no-code automation",
  ],
  authors: [{ name: "NEXOVA Tech" }],
  creator: "NEXOVA Tech",
  publisher: "NEXOVA Tech",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nexova.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "NEXOVA Tech",
    title: "NEXOVA Tech - AI-Powered Workflow Automation",
    description:
      "NEXOVA Tech helps small & mid-size companies automate customer workflows, reduce manual work, and scale faster with AI-powered automation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXOVA Tech - AI-Powered Workflow Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXOVA Tech - AI-Powered Workflow Automation",
    description:
      "NEXOVA Tech helps small & mid-size companies automate customer workflows, reduce manual work, and scale faster with AI-powered automation.",
    images: ["/og-image.png"],
    creator: "@nexovatech",
    site: "@nexovatech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0F4C81" },
    { media: "(prefers-color-scheme: dark)", color: "#1ECAD3" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <SoftwareApplicationJsonLd />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
