"use client"

import Navbar from "@/components/navbar"
import HeroCarousel from "@/components/hero-carousel"
import AboutSection from "@/components/about-section"
import ProductSection from "@/components/product-section"
import ResearchSection from "@/components/research-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <ProductSection />
      <ResearchSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
