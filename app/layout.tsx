import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Amorgleam – Premium Skincare & Radiant Skin Solutions",
  description:
    "Amorgleam offers premium skincare formulations developed in Australia, blending science and nature. Reveal your skin's true radiance with Niacinamide Serum and AHA + Lime Caviar products.",
  keywords:
    "Amorgleam, skincare, Niacinamide serum, AHA, Lime Caviar, radiant skin, luxury skincare, Australian skincare",
  generator: "v0.app",
  verification: {
    google: "p0v2OJ_VYpLomGK4hwhNfBDlRqdi5yWrYWYYtTH2Baw", // New verification code
  },
  openGraph: {
    title: "Amorgleam – Premium Skincare & Radiant Skin Solutions",
    description:
      "Discover Amorgleam's Australian-made skincare with Niacinamide Serum and AHA + Lime Caviar products for smoother, luminous skin.",
    url: "https://www.amorgleam.com",
    siteName: "Amorgleam",
    images: [
      {
        url: "https://www.amorgleam.com/img/logo.png", // Your actual logo path
        width: 800,
        height: 600,
        alt: "Amorgleam Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amorgleam – Premium Skincare & Radiant Skin Solutions",
    description:
      "Reveal your skin's true radiance with Amorgleam's Australian-made skincare products.",
    images: ["https://www.amorgleam.com/img/logo.png"], // Your actual logo path
    site: "@amorgleam", // Optional: Twitter handle
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
