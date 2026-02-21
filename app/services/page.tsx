import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import Link from "next/link"
import {
  Accessibility,
  BedDouble,
  HeartPulse,
  Building2,
  Route,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive non-emergency medical transportation services including wheelchair transport, stretcher transport, dialysis appointments, and more.",
}

const services = [
  {
    icon: Accessibility,
    title: "Wheelchair Transportation",
    description:
      "Our wheelchair transportation service provides safe, comfortable, and accessible rides for individuals who use wheelchairs. Our vehicles are specially equipped with wheelchair ramps, securement systems, and ample space to ensure a smooth and secure journey.",
    features: [
      "ADA-compliant wheelchair-accessible vehicles",
      "Professionally trained drivers for wheelchair assistance",
      "Secure wheelchair tie-down and occupant restraint systems",
      "Door-to-door service with personal assistance",
      "Available for one-time or recurring appointments",
    ],
  },
  {
    icon: BedDouble,
    title: "Stretcher Transportation",
    description:
      "For patients who need to travel in a lying-down position, our stretcher transportation service offers fully equipped vehicles with medical-grade stretchers. This service is ideal for patients recovering from surgery, those with limited mobility, or individuals who require a reclined position during transport.",
    features: [
      "Medical-grade stretcher equipment",
      "Trained attendants for safe patient transfer",
      "Climate-controlled vehicles for patient comfort",
      "Smooth ride suspension for minimal movement",
      "Coordination with hospital and facility staff",
    ],
  },
  {
    icon: HeartPulse,
    title: "Dialysis Appointments",
    description:
      "We understand the critical nature of dialysis treatments and the need for consistent, reliable transportation. Our dialysis transport service ensures patients arrive on time for their scheduled treatments and are safely returned home afterward.",
    features: [
      "Reliable recurring schedule management",
      "On-time pickup and drop-off guarantee",
      "Direct coordination with dialysis centers",
      "Comfortable vehicles for post-treatment transport",
      "Flexible scheduling for changing treatment plans",
    ],
  },
  {
    icon: Building2,
    title: "Hospital Discharge Transport",
    description:
      "Leaving the hospital should be a smooth, stress-free experience. Our hospital discharge transport service provides timely and comfortable transportation for patients being released from medical facilities, ensuring a safe journey home or to a rehabilitation center.",
    features: [
      "Quick response to discharge notifications",
      "Comfortable vehicles for recovering patients",
      "Assistance with mobility and personal belongings",
      "Coordination with hospital discharge teams",
      "Transport to home, rehab, or nursing facilities",
    ],
  },
  {
    icon: Route,
    title: "Long Distance Medical Transport",
    description:
      "When patients need to travel between cities or states for specialized medical care, our long-distance transport service provides a safe and comfortable solution. We handle all the logistics so patients and their families can focus on what matters most: their health.",
    features: [
      "Inter-city and inter-state medical transport",
      "Comfortable long-distance vehicle amenities",
      "Multiple rest stops for patient comfort",
      "Detailed trip planning and coordination",
      "Experienced drivers for extended journeys",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Our Services"
        title="Comprehensive Medical Transportation"
        subtitle="We offer a full range of non-emergency medical transportation services designed to meet the unique needs of every patient we serve."
      />

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                <div className="lg:w-1/2">
                  <div className="rounded-lg border border-border bg-card p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-card-foreground">
                      Service Features
                    </h3>
                    <ul className="mt-4 flex flex-col gap-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl text-balance">
            Need Transportation for Your Next Appointment?
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
            Contact us today to schedule your non-emergency medical
            transportation. We are here to help.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Schedule a Ride
          </Link>
        </div>
      </section>
    </>
  )
}
