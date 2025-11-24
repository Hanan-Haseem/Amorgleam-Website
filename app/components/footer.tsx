"use client"
import Image from "next/image"
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react"

/* ---------- TikTok SVG (custom icon) ---------- */
const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.58 6.52c-.78-.78-1.28-1.84-1.28-3.02V2h-3.08v13.84c0 1.84-1.5 3.34-3.34 3.34s-3.34-1.5-3.34-3.34c0-1.84 1.5-3.34 3.34-3.34.38 0 .74.07 1.08.18V9.62c-.38-.07-.78-.12-1.2-.12-3.12 0-5.66 2.54-5.66 5.66s2.54 5.66 5.66 5.66 5.66-2.54 5.66-5.66V11.8c.96.78 2.08 1.22 3.24 1.22V9.94c-1.16 0-2.16-.44-2.94-1.22z" />
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Research", href: "#research" },
  ]

  const productLinks = [
    { name: "Niacinamide Serum", href: "#niacinamide-serum" },
    { name: "AHA + Lime Caviar", href: "#aha-serum" },
    { name: "All Products", href: "#products" },
  ]

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/amorgleam_?igsh=c3luajBxNms3MnQ5", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/share/1GfVEqJwpe/?mibextid=wwXIfr", label: "Facebook" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@amorgleam?_r=1&_t=ZS-91GA2VEViaY", label: "TikTok" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/amorgleam-amorgleam-65b03435b/", label: "LinkedIn" },
  ]

  const contactInfo = [
    { icon: Mail, text: "amorgleam@gmail.com", href: "mailto:amorgleam@gmail.com" },
    { icon: Phone, text: "+61 406 949 412", href: "tel:+61468673414" },
    { icon: MapPin, text: "Melbourne, Australia", href: "https://maps.google.com/?q=Melbourne+Australia" },
  ]

  return (
    <footer className="bg-gradient-to-b from-white to-slate-50 border-t border-slate-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-12
          text-center md:text-left"
        >
          {/* Brand Column */}
          <div className="lg:col-span-1 animate-slide-up">
            <div className="mb-6 lg:-ml-10 flex justify-center md:justify-start">
              <a href="#home" className="block">
                <div className="relative w-48 h-16 md:w-64 md:h-20 mx-auto md:mx-0">
                  <Image
                    src="/img/logo.png"
                    alt="Amorgleam"
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
              </a>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs mx-auto md:mx-0">
              Premium skincare formulations developed in Australia, blending science with nature.
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#991747] flex items-center justify-center transition-all duration-300 text-foreground hover:text-white"
                  >
                    <Icon size={18} className="transition-colors duration-300" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up stagger-1 md:pl-16">
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary-burgundy transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="animate-slide-up stagger-2 md:pl-16">
            <h4 className="font-heading font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary-teal transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up stagger-4 md:pl-16">
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon
                return (
                  <li key={index} className="flex flex-col items-center md:items-start">
                    <a
                      href={contact.href}
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary-burgundy transition-colors duration-300"
                      {...(contact.href.startsWith("http") ||
                      contact.href.startsWith("mailto:") ||
                      contact.href.startsWith("tel:")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {}
                      )}
                    >
                      <Icon size={16} className="flex-shrink-0" />
                      <span>{contact.text}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-sm text-muted-foreground text-center md:text-left">
          <p>&copy; {currentYear} Amorgleam. All rights reserved. Made with love in Australia.</p>
        </div>
      </div>
    </footer>
  )
}
