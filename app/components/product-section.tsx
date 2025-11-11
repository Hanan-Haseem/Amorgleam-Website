"use client"
import Image from "next/image"
import { Sparkles, Droplets, Leaf, Heart, Sun, Zap } from "lucide-react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { useRef } from "react"

// Floating Orbs (luxury ambient motion)
const FloatingOrbs = ({ color }: { color: string }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${color}40, transparent 70%)`,
          width: 140 + i * 60,
          height: 140 + i * 60,
          top: `${20 + i * 15}%`,
          left: `${10 + i * 18}%`,
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 1.2,
        }}
      />
    ))}
  </div>
)

// Shimmering Gradient Wave
const LuxuryWave = ({ color }: { color: string }) => (
  <motion.div
    className="absolute inset-0 pointer-events-none opacity-30"
    style={{
      background: `linear-gradient(120deg, ${color}10, transparent 40%, ${color}10)`,
      backgroundSize: "300% 300%",
    }}
    animate={{
      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "linear",
    }}
  />
)

// 3D Parallax Image
const ParallaxImage = ({ image, accentColor }: { image: string; accentColor: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])

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
        perspective: 1000,
      }}
      className="relative h-full w-full"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-50"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${accentColor}40, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <Image
        src={image}
        alt="Product"
        fill
        className="object-contain"
        priority
      />
    </motion.div>
  )
}

// Premium Product Card
const ProductCard = ({
  id,
  title,
  subtitle,
  description,
  features,
  image,
  imagePosition = "right",
  accentColor,
  journalRef,
}: {
  id?: string
  title: string
  subtitle: string
  description: string
  features: string[]
  image: string
  imagePosition?: "left" | "right"
  accentColor: string
  journalRef: string
}) => {
  const icons = [Sparkles, Droplets, Leaf, Heart, Sun, Zap]

  return (
    <section
      id="products"
      className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-white to-slate-50/20"
    >
      <LuxuryWave color={accentColor} />
      <FloatingOrbs color={accentColor} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            imagePosition === "left" ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* Text Content */}
          <motion.div
            className={`space-y-8 ${imagePosition === "left" ? "lg:order-2" : ""}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="space-y-3">
              <motion.h2
                className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight bg-clip-text text-transparent"
                style={{
                  lineHeight: 1.1,
                  backgroundImage: `linear-gradient(to right, ${accentColor}, ${accentColor}cc, #1a1a1a)`,
                }}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {title}
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl italic text-muted-foreground font-light"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {subtitle}
              </motion.p>
            </div>

            <motion.p
              className="text-lg leading-relaxed text-foreground/80 max-w-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>

            <ul className="space-y-5 mt-10">
              {features.map((feature, i) => {
                const Icon = icons[i % icons.length]
                return (
                  <motion.li
                    key={i}
                    className="flex items-center gap-4 text-foreground"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.12, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{
                        backgroundColor: `${accentColor}15`,
                        border: `1px solid ${accentColor}40`,
                      }}
                    >
                      <Icon size={22} style={{ color: accentColor }} />
                    </div>
                    <span className="text-base md:text-lg font-medium">{feature}</span>
                  </motion.li>
                )
              })}
            </ul>

            {/* CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                className="flex items-center gap-3 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider border backdrop-blur-xl"
                style={{
                  borderColor: accentColor,
                  color: accentColor,
                  backgroundColor: `${accentColor}08`,
                }}
              >
                <Sparkles className="w-4 h-4" />
                <span>CLINICALLY PROVEN</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => (window.location.href = "/checkout")}
                className="group px-9 py-4 rounded-full font-semibold text-white relative overflow-hidden shadow-2xl"
                style={{
                  backgroundColor: accentColor,
                  boxShadow: `0 15px 40px ${accentColor}70`,
                }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Buy Now
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/40"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                  style={{ skewX: -20 }}
                />
              </motion.button>
            </motion.div>

            <motion.p
              className="text-xs text-muted-foreground/70 mt-10 italic max-w-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {journalRef}
            </motion.p>
          </motion.div>

          {/* 3D Parallax Image */}
          <motion.div
            className={`relative h-96 md:h-[520px] lg:h-[680px] ${
              imagePosition === "left" ? "lg:order-1" : ""
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ParallaxImage image={image} accentColor={accentColor} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Section Wrapper
export default function ProductSection() {
  const niacinamideFeatures = [
    "Tightens pores & balances pH",
    "Improves hydration & barrier function",
    "Reduces inflammation & redness",
    "Brightens and evens skin tone",
    "Boosts collagen production",
    "Accelerates wound healing",
  ]

  const ahaFeatures = [
    "Gently exfoliates dead skin",
    "Boosts hydration & plumpness",
    "Fades dark spots & sun damage",
    "Soothes sunburn & irritation",
    "Brightens dull complexion",
    "Promotes cellular renewal",
  ]

  return (
    <>
      <ProductCard
        id="niacinamide-serum"
        title="Niacinamide Serum"
        subtitle="Brighten. Balance. Glow."
        description="A biomedically advanced 10% niacinamide complex that strengthens the skin barrier, reduces pore appearance, and delivers a radiant, even tone. Dermatologically tested in Australia with proven efficacy in clinical trials."
        features={niacinamideFeatures}
        image="/img/p1.png"
        imagePosition="right"
        accentColor="#991747"
        journalRef="Chen AC, Damian DL. Nicotinamide and the skin. Australas J Dermatol. 2014;55(3):169-175. doi:10.1111/ajd.12165"
      />

      <ProductCard
        id="aha-serum"
        title="AHA + Lime Caviar"
        subtitle="Renew. Smooth. Illuminate."
        description="A gentle 8% AHA blend with native Australian lime caviar and beta-glucan. Exfoliates, hydrates, and revitalizes dull skin. Biomedically approved and suitable for sensitive skin types."
        features={ahaFeatures}
        image="/img/b1.png"
        imagePosition="left"
        accentColor="#1B7895"
        journalRef="Townley DT, et al. An antiaging skin care system containing alpha hydroxy acids and vitamins improves the biomechanical parameters of facial skin. Clin Cosmet Investig Dermatol. 2015;8:9-17. doi:10.2147/CCID.S72031"
      />
    </>
  )
}
