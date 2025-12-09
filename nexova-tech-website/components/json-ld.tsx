export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NEXOVA Tech",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://nexova.tech",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://nexova.tech"}/logo.png`,
    description:
      "NEXOVA Tech helps small & mid-size companies automate customer workflows, reduce manual work, and scale faster with AI-powered automation.",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      streetAddress: "548 Market St, Suite 12345",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94104",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      email: "hello@nexova.tech",
      availableLanguage: "English",
    },
    sameAs: [
      "https://twitter.com/nexovatech",
      "https://linkedin.com/company/nexovatech",
      "https://github.com/nexovatech",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NEXOVA Tech",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://nexova.tech",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || "https://nexova.tech"}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

interface BreadcrumbItem {
  name: string
  href: string
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nexova.tech"

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.href}`,
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

interface ArticleJsonLdProps {
  title: string
  description: string
  publishedTime: string
  author: string
  image: string
  url: string
}

export function ArticleJsonLd({ title, description, publishedTime, author, image, url }: ArticleJsonLdProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nexova.tech"

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image.startsWith("http") ? image : `${baseUrl}${image}`,
    datePublished: publishedTime,
    dateModified: publishedTime,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "NEXOVA Tech",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export function SoftwareApplicationJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nexova.tech"

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NEXOVA Tech",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      priceValidUntil: "2025-12-31",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "523",
    },
    url: baseUrl,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}
