"use client"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setSubmitSuccess(false), 5000)
    }, 1000)
  }

  return (
    <section
      id="contact" // Added ID for navbar scrolling
      className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      {/* Subtle floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#991747]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#1b7895]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-foreground">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-body">
            We’d love to hear from you. Whether it’s a question, feedback, or collaboration — we’re here.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center md:text-left place-items-center md:place-items-stretch">
          <ContactInfoCard
            icon={Mail}
            title="Email"
            value="amorgleam@gmail.com"
            description="We'll respond within 24 hours"
            color="burgundy"
            delay={0}
          />
          <ContactInfoCard
            icon={Phone}
            title="Phone"
            value="+61 406 949 412"
            description="Mon–Fri, 9AM–5PM AEST"
            color="teal"
            delay={1}
          />
          <ContactInfoCard
            icon={MapPin}
            title="Location"
            value="Melbourne, Australia"
            description="Proudly Australian-made"
            color="burgundy"
            delay={2}
          />
        </div>

        {/* Modern Contact Form */}
        <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 overflow-hidden">
          {/* Inner glow border */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#991747]/5 to-[#1b7895]/5 rounded-3xl -z-10"></div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FloatingLabelInput
                label="Your Name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <FloatingLabelInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <FloatingLabelInput
              label="Subject"
              name="subject"
              type="text"
              placeholder="How can we help?"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <div className="relative group">
              <label className="block text-sm font-semibold text-foreground mb-3 opacity-0 animate-fade-in">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/70
                  focus:outline-none focus:ring-2 focus:ring-[#991747] focus:border-transparent
                  transition-all duration-300 resize-none
                  group-hover:border-slate-300
                  peer"
                placeholder="Tell us more about your inquiry..."
              />
              <span className="absolute left-5 -top-3 px-2 bg-white text-sm font-medium text-foreground/80
                transition-all duration-300 peer-focus:-top-3 peer-focus:text-[#991747]
                peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-[#991747]">
                Message
              </span>
            </div>

            {/* Success Message */}
            {submitSuccess && (
              <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl flex items-center gap-3 animate-slide-up">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-green-700">Thank you! We'll be in touch shortly.</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full bg-gradient-to-r from-[#991747] to-[#b91f56] text-white font-bold py-4 px-8 rounded-2xl
                hover:shadow-xl hover:shadow-[#991747]/25 transform hover:-translate-y-1
                transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </form>
        </div>

        {/* Privacy Note */}
        <p className="text-center text-sm text-foreground/60 mt-10 font-light">
          We respect your privacy. Your information is secure and never shared.
        </p>
      </div>
    </section>
  )
}

// Floating Label Input Component
function FloatingLabelInput({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string
  name: string
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required: boolean
}) {
  return (
    <div className="relative group">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="peer w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-sm text-foreground
          placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#991747] focus:border-transparent
          transition-all duration-300 group-hover:border-slate-300"
        placeholder={placeholder}
      />
      <label
        htmlFor={name}
        className="absolute left-5 -top-3 px-2 bg-white text-sm font-medium text-foreground/80
          transition-all duration-300 pointer-events-none
          peer-focus:-top-3 peer-focus:text-[#991747]
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-foreground/60"
      >
        {label}
      </label>
    </div>
  )
}

// Contact Info Card
function ContactInfoCard({
  icon: Icon,
  title,
  value,
  description,
  color,
  delay,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  value: string
  description: string
  color: "burgundy" | "teal"
  delay: number
}) {
  const colorClass = color === "burgundy" ? "from-[#991747]" : "from-[#1b7895]"
  const ringColor = color === "burgundy" ? "ring-[#991747]/10" : "ring-[#1b7895]/10"

  return (
    <div
      className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/30 hover:shadow-xl transition-all duration-300 w-full max-w-xs md:max-w-none"
      style={{ animation: `fadeInUp 0.6s ease-out ${delay * 0.15}s both` }}
    >
      <div
        className={`w-14 h-14 bg-gradient-to-br ${colorClass} to-slate-600 rounded-xl flex items-center justify-center mb-5 ring-8 ${ringColor} shadow-lg mx-auto md:mx-0`}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="font-bold text-lg text-foreground mb-1">{title}</h3>
      <p className="text-sm font-semibold mb-1" style={{ color: color === "burgundy" ? "#991747" : "#1b7895" }}>
        {value}
      </p>
      <p className="text-sm text-foreground/60">{description}</p>
    </div>
  )
}
