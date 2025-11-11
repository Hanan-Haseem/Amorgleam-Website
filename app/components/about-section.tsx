"use client"
import Image from "next/image"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { useRef } from "react"

// Floating Scientific Orbs — NO PINK
const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, #e5e7eb30, transparent 70%)`, // NEUTRAL GRAY
          width: 120 + i * 80,
          height: 120 + i * 80,
          top: `${15 + i * 12}%`,
          left: `${5 + i * 15}%`,
        }}
        animate={{
          y: [0, -50, 0],
          x: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 1.5,
        }}
      />
    ))}
  </div>
)

// Shimmering Gradient Wave — NO PINK
const LuxuryWave = () => (
  <motion.div
    className="absolute inset-0 pointer-events-none opacity-15"
    style={{
      background: `linear-gradient(120deg, #f3f4f610, transparent 40%, #f3f4f610)`, // SUBTLE GRAY
      backgroundSize: "300% 300%",
    }}
    animate={{
      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "linear",
    }}
  />
)

// 3D Parallax Image — NO PINK GLOW
const ParallaxImage = ({ src }: { src: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [8, -8])
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
      className="relative w-full h-full"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
        style={{
          background: `radial-gradient(circle at 40% 50%, #e5e7eb40, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <Image
        src={src}
        alt="Amorgleam Products"
        width={2938}
        height={2310}
        className="w-full h-auto object-contain drop-shadow-2xl"
        priority
      />
    </motion.div>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-white py-20 md:py-32 overflow-hidden">
      <LuxuryWave />
      <FloatingOrbs />

      {/* Ribbon SVG */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute -top-40 -left-40 w-[800px] h-[800px] md:w-[1000px] md:h-[1000px]"
          style={{
            opacity: 0.18,
            filter: "drop-shadow(0 0 12px rgba(0, 0, 0, 0.08))",
          }}
          viewBox="0 0 600 600"
          preserveAspectRatio="xMinYMin meet"
        >
          <defs>
            <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#991747" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#c7155e" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#1B7895" stopOpacity="0.7" />
            </linearGradient>
            <mask id="fadeRight">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              <rect x="70%" y="0" width="30%" height="100%" fill="url(#fadeGradient)" />
              <defs>
                <linearGradient id="fadeGradient" x1="0%" x2="100%">
                  <stop offset="0%" stopColor="white" />
                  <stop offset="100%" stopColor="black" />
                </linearGradient>
              </defs>
            </mask>
          </defs>
          <g mask="url(#fadeRight)">
            {Array.from({ length: 38 }).map((_, i) => {
              const progress = i / 38
              const xStart = 50 + progress * 500
              const yStart = 100
              const control1x = xStart - 80 + Math.sin(progress * 3) * 60
              const control1y = yStart + 150 + Math.cos(progress * 2) * 80
              const control2x = xStart + 120 + Math.sin(progress * 4) * 70
              const control2y = yStart + 300 + Math.cos(progress * 3) * 100
              const endX = xStart + 200 + Math.sin(progress * 5) * 50
              const endY = yStart + 500

              const d = `M ${xStart} ${yStart} 
                         C ${control1x} ${control1y}, ${control2x} ${control2y}, ${endX} ${endY}`

              return (
                <motion.path
                  key={i}
                  d={d}
                  stroke="url(#ribbonGradient)"
                  strokeWidth={2 + progress * 3}
                  fill="none"
                  strokeLinecap="round"
                  opacity={0.9 - progress * 0.7}
                  style={{ transformOrigin: `${xStart}px ${yStart}px` }}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: i * 0.05 }}
                  viewport={{ once: true }}
                />
              )
            })}
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Parallax Image */}
          <motion.div
            className="flex justify-center lg:justify-start order-2 lg:order-1 -ml-4 md:-ml-8 lg:-ml-12"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <ParallaxImage src="/img/about.png" />
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            className="flex flex-col justify-center order-1 lg:order-2 text-center lg:text-left"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-heading text-4xl md:text-5xl lg:text-6xl italic bg-clip-text text-transparent bg-gradient-to-r from-[#991747] via-[#c7155e] to-[#1B7895] mb-8"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              viewport={{ once: true }}
            >
              The Glow Origin
            </motion.h2>

            <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                viewport={{ once: true }}
              >
                Amorgleam Skincare was born in the heart of Australia, where science and nature unite to create skincare
                that truly transforms.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                viewport={{ once: true }}
              >
                Every formula is manufactured and dermatologically tested in Australia, blending advanced biotechnology
                with natural extracts like Niacinamide, Lime Caviar, and botanical oils. We believe that radiant skin
                begins with purity — which is why our products are free from harsh additives, cruelty-free, and crafted
                with care to bring out your skin's healthiest glow.
              </motion.p>
            </div>

            {/* Learn More Button */}
            <motion.div
              className="mt-10 flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => {
                  const researchSection = document.getElementById("research")
                  if (researchSection)
                    researchSection.scrollIntoView({ behavior: "smooth" })
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group relative px-8 py-3 border-2 border-[#991747] text-[#991747] font-semibold rounded-full overflow-hidden transition-all duration-500"
                style={{ boxShadow: "0 8px 25px rgba(153, 23, 71, 0.3)" }}
              >
                <span className="absolute inset-0 bg-[#991747] -z-10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-[-20deg]" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  Learn More
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
