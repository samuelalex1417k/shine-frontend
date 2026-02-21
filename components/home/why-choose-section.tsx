import {
  Shield,
  Clock,
  Users,
  MapPin,
  Heart,
} from "lucide-react"

const reasons = [
  {
    icon: Clock,
    title: "4+ Years of Service",
    description:
      "Established track record of providing safe and reliable medical transportation since 2020.",
  },
  {
    icon: Shield,
    title: "Professional & Background-Checked Drivers",
    description:
      "Every driver undergoes thorough background checks and professional training for patient safety.",
  },
  {
    icon: Users,
    title: "Clean & Sanitized Vehicles",
    description:
      "All vehicles are regularly cleaned and sanitized following strict healthcare standards.",
  },
  {
    icon: MapPin,
    title: "Multi-State Coverage",
    description:
      "Serving patients across Illinois, Indiana, Wisconsin, and Michigan with growing coverage.",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "Our team is dedicated to treating every patient with dignity, respect, and genuine compassion.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="bg-secondary/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Why Us
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Why Choose Shine LLC
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-4 rounded-lg bg-card p-6 border border-border"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <reason.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">
                  {reason.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
