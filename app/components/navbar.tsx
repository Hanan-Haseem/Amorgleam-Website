"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#research", label: "Research" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="#home" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/img/logo.png"
              alt="Amorgleam Logo"
              width={96}
              height={96}
              className="w-30 h-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium text-lg scroll-smooth ${
                  hasScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Contact */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className={`px-6 py-2 border-2 rounded-full font-medium text-base transition-all duration-300 scroll-smooth ${
                hasScrolled
                  ? "border-black text-black hover:bg-black hover:text-white"
                  : "border-black text-black hover:bg-black hover:text-white"
              }`}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-3 rounded-xl transition-all duration-200 ${
              hasScrolled ? "text-gray-900" : "text-gray-700"
            } hover:bg-gray-100 active:scale-95`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <>
            {/* Overlay */}
            <div
              className="md:hidden fixed inset-0 bg-black/70 z-[60]"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Panel */}
            <div
              className="md:hidden fixed right-0 top-0 h-screen w-80 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-out"
              style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <Image
                    src="/img/logo.png"
                    alt="Amorgleam Logo"
                    width={80}
                    height={80}
                    className="w-20 h-auto"
                    priority
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all"
                  >
                    <X size={24} className="text-gray-700" />
                  </button>
                </div>

                {/* Links */}
                <nav className="flex-1 px-6 py-8 space-y-6 overflow-y-auto">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-2xl font-medium text-gray-800 hover:text-black transition-all hover:translate-x-1 scroll-smooth"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                {/* Contact Button */}
                <div className="p-6 border-t border-gray-200">
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full block text-center py-4 rounded-full bg-black text-white font-medium text-lg hover:bg-gray-800 transition-all active:scale-95 scroll-smooth"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
