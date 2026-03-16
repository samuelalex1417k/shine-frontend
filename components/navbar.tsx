"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet" },
  { href: "/areas", label: "Areas We Serve" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="Shine LLC Logo"
              width={260}
              height={70}
              priority
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-semibold rounded-md transition-all",
                  pathname === link.href
                    ? "text-green-700 border-b-2 border-green-600"
                    : "text-gray-700 hover:text-green-700"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">

            <a
              href="tel:7032988700"
              className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-green-700 transition"
            >
              <Phone className="h-4 w-4" />
              <span>703-298-8700</span>
            </a>

            <Link
              href="/become-a-driver"
              className="inline-flex items-center justify-center rounded-md bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              Become a Driver
            </Link>

          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white">
          <nav className="px-4 py-4 flex flex-col gap-2">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md",
                  pathname === link.href
                    ? "text-green-700 font-semibold"
                    : "text-gray-700 hover:text-green-700"
                )}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 pt-4 border-t flex flex-col gap-3">

              <a
                href="tel:7032988700"
                className="flex items-center gap-2 text-sm font-medium text-gray-700"
              >
                <Phone className="h-4 w-4" />
                <span>703-298-8700</span>
              </a>

              <Link
                href="/become-a-driver"
                onClick={() => setIsOpen(false)}
                className="bg-green-600 text-white text-center py-2 rounded-md font-semibold"
              >
                Become a Driver
              </Link>

            </div>

          </nav>
        </div>
      )}
    </header>
  )
}