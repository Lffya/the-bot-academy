import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Bot Academy – Learn Business-Centric Marketing That Works",
  description:
    "Bot Academy trains future-ready marketers in rural India to think like entrepreneurs. Learn strategy, not just software. Build a revenue-focused marketing career today.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
