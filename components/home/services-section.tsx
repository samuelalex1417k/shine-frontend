import {
  Accessibility,
  BedDouble,
  HeartPulse,
  Building2,
  Route,
} from "lucide-react"

const services = [
  {
    icon: Accessibility,
    title: "Wheelchair Transportation",
    description:
      "Safe, comfortable wheelchair-accessible vehicles with professional drivers trained in secure wheelchair transport.",
  },
  {
    icon: BedDouble,
    title: "Stretcher Transportation",
    description:
      "Fully equipped stretcher transport for patients who require a lying-down position during their medical transport.",
  },
  {
    icon: HeartPulse,
    title: "Dialysis Appointments",
    description:
      "Reliable recurring transport to and from dialysis centers, ensuring patients never miss critical treatment sessions.",
  },
  {
    icon: Building2,
    title: "Hospital Discharge Transport",
    description:
      "Timely and comfortable transportation for patients being discharged from hospitals and medical facilities.",
  },
  {
    icon: Route,
    title: "Long Distance Medical Transport",
    description:
      "Professional long-distance medical transport between cities and states for specialized medical care needs.",
  },
]

export function ServicesSection() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            What We Offer
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Our Transportation Services
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive non-emergency medical transportation
            solutions tailored to meet the unique needs of every patient.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/40 hover:bg-secondary/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                <service.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
