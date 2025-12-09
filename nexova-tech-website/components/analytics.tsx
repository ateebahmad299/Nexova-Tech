"use client"

import type React from "react"

import Script from "next/script"
import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

// Google Analytics
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  if (!gaId) return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}

// Page view tracking hook
export function usePageTracking() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParams.toString()

    // Google Analytics
    if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      })
    }
  }, [pathname, searchParams])
}

// Analytics wrapper component
export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  usePageTracking()
  return <>{children}</>
}

// Event tracking utility
export function trackEvent(eventName: string, eventParams?: Record<string, unknown>) {
  if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
    ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", eventName, eventParams)
  }
}
