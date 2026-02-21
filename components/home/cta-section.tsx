import Link from "next/link"

export function CtaSection() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
          Join Our Growing Team of Professional Drivers
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
          We are always looking for professional, compassionate drivers to join
          our team. Competitive pay, flexible schedules, and the opportunity to
          make a difference.
        </p>
        <Link
          href="/become-a-driver"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
        >
          Apply Now
        </Link>
      </div>
    </section>
  )
}
