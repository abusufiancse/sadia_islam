import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sadia Islam - Data Analyst & ML Researcher",
  description:
    "Professional portfolio of Sadia Islam, Data Analyst specializing in machine learning, healthcare AI, and data visualization. Currently interning at Dream 71 Bangladesh Limited.",
  keywords: "data analyst, machine learning, AI researcher, python, healthcare AI, data visualization, Sadia Islam",
  authors: [{ name: "Sadia Islam" }],
  creator: "Sadia Islam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sadiaislamcse.github.io",
    title: "Sadia Islam - Data Analyst & ML Researcher",
    description:
      "Professional portfolio showcasing expertise in data analysis, machine learning, and research publications.",
    siteName: "Sadia Islam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadia Islam - Data Analyst & ML Researcher",
    description:
      "Professional portfolio showcasing expertise in data analysis, machine learning, and research publications.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
