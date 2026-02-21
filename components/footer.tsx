import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Our Fleet" },
  { href: "/areas", label: "Areas We Serve" },
  { href: "/contact", label: "Contact Us" },
  { href: "/become-a-driver", label: "Become a Driver" },
]

const services = [
  "Wheelchair Transportation",
  "Stretcher Transportation",
  "Dialysis Appointments",
  "Hospital Discharge",
  "Long Distance Transport",
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground">
                <span className="text-lg font-bold text-primary">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight leading-tight">
                  Shine LLC
                </span>
                <span className="text-[10px] uppercase tracking-widest opacity-70 leading-tight">
                  Medical Transport
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-80 max-w-xs">
              Providing safe, reliable, and compassionate non-emergency medical
              transportation services across multiple states for over 4 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service} className="text-sm opacity-80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2.5 text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@shinellc.com"
                  className="flex items-center gap-2.5 text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  info@shinellc.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm opacity-80">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>Serving IL, IN, WI & MI</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p className="text-sm opacity-70">
            &copy; {new Date().getFullYear()} Shine LLC. All rights reserved.
          </p>
          <p className="text-sm opacity-70">
            Non-Emergency Medical Transportation Services
          </p>
        </div>
      </div>
    </footer>
  )
}
