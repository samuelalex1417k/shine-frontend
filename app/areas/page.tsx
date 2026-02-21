import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { MapPin, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "Shine LLC provides non-emergency medical transportation across Illinois, Indiana, Wisconsin, and Michigan. View our full service area coverage.",
}

const states = [
  {
    name: "Illinois",
    description:
      "Comprehensive medical transport coverage across the state of Illinois, including the greater Chicago metropolitan area and surrounding suburbs.",
    cities: [
      "Chicago",
      "Springfield",
      "Rockford",
      "Naperville",
      "Aurora",
      "Joliet",
      "Elgin",
      "Peoria",
    ],
  },
  {
    name: "Indiana",
    description:
      "Serving patients throughout Indiana with reliable non-emergency medical transportation to healthcare facilities and appointments.",
    cities: [
      "Indianapolis",
      "Fort Wayne",
      "Evansville",
      "South Bend",
      "Gary",
      "Hammond",
      "Bloomington",
      "Muncie",
    ],
  },
  {
    name: "Wisconsin",
    description:
      "Providing dependable medical transport services across Wisconsin communities, ensuring patients reach their healthcare providers on time.",
    cities: [
      "Milwaukee",
      "Madison",
      "Green Bay",
      "Kenosha",
      "Racine",
      "Appleton",
      "Waukesha",
      "Oshkosh",
    ],
  },
  {
    name: "Michigan",
    description:
      "Expanding our trusted medical transportation services across Michigan to serve an increasing number of patients in need of reliable transport.",
    cities: [
      "Detroit",
      "Grand Rapids",
      "Ann Arbor",
      "Lansing",
      "Flint",
      "Kalamazoo",
      "Sterling Heights",
      "Warren",
    ],
  },
]

export default function AreasPage() {
  return (
    <>
      <PageHeader
        label="Service Coverage"
        title="Areas We Serve"
        subtitle="Shine LLC provides non-emergency medical transportation services across multiple states in the Midwest, connecting patients with the healthcare they need."
      />

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {states.map((state) => (
              <div
                key={state.name}
                className="rounded-lg border border-border bg-card p-6 lg:p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-card-foreground">
                    {state.name}
                  </h2>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {state.description}
                </p>
                <div className="mt-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-card-foreground">
                    Key Cities
                  </h3>
                  <ul className="mt-3 grid grid-cols-2 gap-2">
                    {state.cities.map((city) => (
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

          <div className="mt-12 rounded-lg border border-border bg-secondary/30 p-6 text-center lg:p-8">
            <h3 className="text-lg font-semibold text-foreground">
              {"Don't see your area?"}
            </h3>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              We are continuously expanding our service coverage. Contact us to
              inquire about transportation availability in your area.
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
