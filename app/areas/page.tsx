import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { MapPin, CheckCircle2 } from "lucide-react"

/*
  Page Metadata
  --------------------------------------------------
  SEO metadata for the service coverage page.
*/
export const metadata: Metadata = {
  title: "Areas We Serve | Shine LLC Medical Transportation",
  description:
    "Shine LLC provides professional non-emergency medical transportation services throughout Virginia and neighboring states.",
}

/*
  Service Coverage Data
  --------------------------------------------------
  Regions within Virginia and surrounding areas
  where Shine LLC operates. This keeps the same
  UI layout while reflecting the correct coverage.
*/
const regions = [
  {
    name: "Northern Virginia",
    description:
      "Serving patients throughout Northern Virginia with dependable non-emergency medical transportation to hospitals, clinics, dialysis centers, and rehabilitation facilities.",
    cities: [
      "Arlington",
      "Alexandria",
      "Fairfax",
      "Reston",
      "Herndon",
      "Manassas",
      "Leesburg",
      "McLean",
    ],
  },
  {
    name: "Central Virginia",
    description:
      "Providing safe and reliable transportation for medical appointments and healthcare visits across Central Virginia communities.",
    cities: [
      "Richmond",
      "Charlottesville",
      "Petersburg",
      "Hopewell",
      "Colonial Heights",
      "Ashland",
      "Mechanicsville",
      "Midlothian",
    ],
  },
  {
    name: "Hampton Roads",
    description:
      "Supporting patients in the Hampton Roads region with comfortable and punctual non-emergency medical transport services.",
    cities: [
      "Virginia Beach",
      "Norfolk",
      "Chesapeake",
      "Hampton",
      "Newport News",
      "Suffolk",
      "Portsmouth",
      "Poquoson",
    ],
  },
  {
    name: "Neighboring State Coverage",
    description:
      "Shine LLC also provides transportation to medical facilities located in neighboring states when required for specialized treatment or long-distance medical appointments.",
    cities: [
      "Washington DC",
      "Baltimore",
      "Frederick",
      "Hagerstown",
      "Durham",
      "Raleigh",
      "Greensboro",
      "Charlotte",
    ],
  },
]

/*
  Areas Page
  --------------------------------------------------
  Displays regions served by Shine LLC.
*/
export default function AreasPage() {
  return (
    <>
      <PageHeader
        label="Service Coverage"
        title="Areas We Serve"
        subtitle="Shine LLC provides dependable non-emergency medical transportation services throughout Virginia and neighboring states."
      />

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Coverage Cards */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {regions.map((region) => (
              <div
                key={region.name}
                className="rounded-lg border border-border bg-card p-6 lg:p-8"
              >
                {/* Region Header */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-card-foreground">
                    {region.name}
                  </h2>
                </div>

                {/* Description */}
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {region.description}
                </p>

                {/* Cities */}
                <div className="mt-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-card-foreground">
                    Key Areas
                  </h3>

                  <ul className="mt-3 grid grid-cols-2 gap-2">
                    {region.cities.map((city) => (
                      <li
                        key={city}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent" />
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-lg border border-border bg-secondary/30 p-6 text-center lg:p-8">
            <h3 className="text-lg font-semibold text-foreground">
              Don't see your area?
            </h3>

            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              Shine LLC continues to expand its service coverage across Virginia
              and neighboring states. Contact our team to confirm transportation
              availability in your area.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}