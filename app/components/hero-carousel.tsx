"use client"
import { useState, useEffect } from "react"
import HeroSection from "./hero-section"

const heroData = [
  {
    id: "blue",
    title: "AMORGLEAM",
    subtitle: "Refresh. Renew. Radiate.",
    description: "Powered by AHA and Lime Caviar, Amorgleam renews and restores your skin for a visibly smoother, luminous complexion.",
    buttonText: "Get Started",
    bgColor: "#1B7895",
    textColor: "#1B7895",
    accentColor: "#1B7895",
    productImage: "/img/b1.png",     // ← REAL product
    backgroundImage: "/img/bg1.jpg",
  },
  {
    id: "pink",
    title: "AMORGLEAM",
    subtitle: "Glow Begins with Amorgleam",
    description: "Reveal your skin's true radiance with our Niacinamide Serum, infused with vitamins and minerals that brighten, smooth, and rejuvenate.",
    buttonText: "Discover the Glow",
    bgColor: "#991747",
    textColor: "#991747",
    accentColor: "#991747",
    productImage: "/img/p1.png",     // ← REAL product
    backgroundImage: "/img/bg2.png",
  },
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroData.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [autoplay])

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index)
    setAutoplay(false)
    setTimeout(() => setAutoplay(true), 5000)
  }

  return (
    <div className="relative overflow-hidden">
      {/* Carousel */}
      <div className="relative h-screen">
        {heroData.map((hero, index) => (
          <div
            key={hero.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <HeroSection {...hero} isActive={index === currentIndex} />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {heroData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 h-2 bg-gray-800"
                : "w-2 h-2 bg-gray-400 hover:bg-gray-600"
            }`}
            aria-label={`Go to to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}