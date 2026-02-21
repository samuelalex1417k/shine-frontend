import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Fleet",
  description:
    "Explore our modern fleet of wheelchair-accessible and stretcher-equipped medical transport vehicles. Clean, safe, and professionally maintained.",
}

const vehicles = [
  {
    src: "/images/fleet-1.jpg",
    alt: "Wheelchair accessible medical transport van",
    title: "Wheelchair-Accessible Van",
    description:
      "Equipped with side-entry ramps and wheelchair securement systems for safe, comfortable rides.",
  },
  {
    src: "/images/fleet-2.jpg",
    alt: "Stretcher-equipped medical transport vehicle",
    title: "Stretcher Transport Vehicle",
    description:
      "Fully equipped with medical-grade stretchers and climate-controlled interiors for patient comfort.",
  },
  {
    src: "/images/fleet-3.jpg",
    alt: "Fleet of medical transport vans",
    title: "Standard Transport Fleet",
    description:
      "Multiple vehicles available for standard patient transport to medical appointments and facilities.",
  },
  {
    src: "/images/fleet-4.jpg",
    alt: "Interior of medical transport vehicle",
    title: "Clean & Sanitized Interiors",
    description:
      "Every vehicle interior is thoroughly cleaned and sanitized between each patient for maximum hygiene.",
  },
]

const features = [
  "ADA-compliant wheelchair accessibility",
  "Medical-grade stretcher equipment",
  "GPS tracking and real-time monitoring",
  "Climate-controlled interiors",
  "Regular safety inspections and maintenance",
  "Professional sanitization between patients",
  "Modern communication systems",
  "Emergency response equipment",
]

export default function FleetPage() {
  return (
    <>
      <PageHeader
        label="Our Fleet"
        title="Professional Medical Transport Vehicles"
        subtitle="Our modern fleet is designed for safety, comfort, and accessibility. Every vehicle is meticulously maintained and regularly sanitized."
      />

      {/* Vehicle Gallery */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.title}
                className="group overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={vehicle.src}
                    alt={vehicle.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {vehicle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {vehicle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Features */}
      <section className="bg-secondary/40 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
            <div className="lg:w-1/2">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Safety & Comfort
              </p>
              <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl text-balance">
                Built for Patient Safety and Comfort
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Every vehicle in our fleet is carefully selected and outfitted to
                meet the highest standards of patient safety, comfort, and
                accessibility. We invest in regular maintenance, state-of-the-art
                safety features, and professional sanitization to ensure every
                ride meets our rigorous quality standards.
              </p>
            </div>

            <div className="lg:w-1/2">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-card-foreground">
                  Fleet Features
                </h3>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl text-balance">
            Ready to Experience Our Service?
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Book your next medical transport with Shine LLC and ride with
            confidence.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
