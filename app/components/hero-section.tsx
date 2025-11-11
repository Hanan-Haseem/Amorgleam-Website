"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  bgColor: string
  textColor: string
  accentColor: string
  productImage: string
  backgroundImage: string
  isActive: boolean
}

export default function HeroSection({
  title,
  subtitle,
  description,
  textColor,
  productImage,
  backgroundImage,
  isActive,
}: HeroSectionProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  // Smooth scroll to About section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden pt-36 md:pt-40"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-transparent" />

      {/* === DESKTOP VIEW === */}
      <div className="hidden lg:flex relative h-full items-start justify-between px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full pt-10 md:pt-14">
        {/* Text */}
        <div
          className={`w-1/2 space-y-6 ${
            isActive ? "animate-in fade-in slide-in-from-left duration-1000" : "opacity-0"
          }`}
        >
          <h1
            className="text-[5.5rem] font-bold tracking-tight leading-tight"
            style={{ color: textColor }}
          >
            {title}
          </h1>
          <h2 className="text-2xl text-gray-800 font-serif">{subtitle}</h2>
          <p className="text-lg text-gray-600 max-w-md leading-relaxed font-serif italic">
            {description}
          </p>

          {/* Button - Go to About */}
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 border-2 rounded-full font-medium transition-all duration-300 hover:text-white cursor-pointer"
            style={{ borderColor: textColor, color: textColor }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = textColor
              e.currentTarget.style.color = "#ffffff"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
              e.currentTarget.style.color = textColor
            }}
          >
            Get Started
          </button>
        </div>

        {/* Product Image */}
        <div className="w-1/2 h-full flex items-end justify-end -mr-32">
          <div
            className={`relative w-full max-w-1200 h-full ${
              isActive ? "animate-slide-up-product scale-150" : "opacity-0 translate-y-20"
            }`}
          >
            <Image
              src={productImage}
              alt="Amorgleam Product"
              fill
              className="object-contain object-bottom"
              priority
              sizes="90vw"
            />
          </div>
        </div>
      </div>

      {/* === MOBILE & TABLET VIEW === */}
      <div className="lg:hidden relative h-full flex flex-col items-center justify-center px-6 pt-16 md:pt-20">
        {/* Text */}
        <div
          className={`w-full max-w-lg mx-auto text-center space-y-5 ${
            isActive ? "animate-in fade-in slide-in-from-top duration-1000" : "opacity-0"
          }`}
        >
          <h1
            className="text-5xl md:text-6xl font-bold tracking-tight leading-tight"
            style={{ color: textColor }}
          >
            {title}
          </h1>
          <h2 className="text-lg md:text-xl text-gray-800 font-serif">{subtitle}</h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed font-serif italic">
            {description}
          </p>

          {/* Button - Go to About */}
          <button
            onClick={scrollToAbout}
            className="mx-auto px-8 py-3 border-2 rounded-full font-medium transition-all duration-300 hover:text-white cursor-pointer"
            style={{ borderColor: textColor, color: textColor }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = textColor
              e.currentTarget.style.color = "#ffffff"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
              e.currentTarget.style.color = textColor
            }}
          >
            Get Started
          </button>
        </div>

        {/* Product Image */}
        <div className="w-full max-w-md mx-auto mt-8">
          <div
            className={`relative w-full h-80 md:h-96 ${
              isActive ? "animate-slide-up-product" : "opacity-0 translate-y-20"
            }`}
          >
            <Image
              src={productImage}
              alt="Amorgleam Product"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 90vw, 70vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
