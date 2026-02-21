import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-transport.jpg"
          alt="Professional medical transport vehicle outside hospital"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Trusted NEMT Provider
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
            Safe. Reliable. Compassionate Medical Transportation.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 max-w-xl">
            Serving patients across multiple states with professional
            non-emergency medical transport services. Over 4 years of trusted
            service.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Contact Us
            </Link>
            <Link
              href="/become-a-driver"
              className="inline-flex items-center justify-center rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/20"
            >
              Become a Driver
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
