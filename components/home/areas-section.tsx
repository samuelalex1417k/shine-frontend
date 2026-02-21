import { MapPin } from "lucide-react"
import Link from "next/link"

const areas = [
  {
    state: "Illinois",
    description:
      "Comprehensive coverage across the state including Chicago and surrounding metro areas.",
  },
  {
    state: "Indiana",
    description:
      "Serving major cities and rural communities throughout Indiana for your medical transport needs.",
  },
  {
    state: "Wisconsin",
    description:
      "Reliable medical transportation services available across Wisconsin communities.",
  },
  {
    state: "Michigan",
    description:
      "Expanding our trusted services across Michigan to serve more patients every day.",
  },
]

export function AreasSection() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Coverage
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Areas We Serve
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Shine LLC provides non-emergency medical transportation services
            across multiple states, ensuring patients have access to reliable
            transport wherever they are.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <div
              key={area.state}
              className="rounded-lg border border-border bg-card p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                {area.state}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/areas"
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            View All Service Areas
          </Link>
        </div>
      </div>
    </section>
  )
}
