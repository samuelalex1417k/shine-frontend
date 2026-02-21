import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Shield, Heart, Eye, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Shine LLC - a trusted non-emergency medical transportation provider with 4+ years of experience serving patients across multiple states.",
}

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Patient safety is our top priority in every ride we provide. Our vehicles are regularly inspected and our drivers follow strict safety protocols.",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "We treat every patient with dignity, respect, and genuine compassion. Our team understands the importance of empathy in healthcare.",
  },
  {
    icon: Eye,
    title: "Reliability",
    description:
      "We are committed to being on time, every time. Our patients and healthcare partners count on us for dependable transportation.",
  },
  {
    icon: Clock,
    title: "Professionalism",
    description:
      "From our drivers to our dispatch team, professionalism is at the core of everything we do. We maintain the highest standards of service.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="Trusted Medical Transportation Since 2020"
        subtitle="Shine LLC has been providing safe, reliable non-emergency medical transportation for over 4 years, serving thousands of patients across multiple states."
      />

      {/* Company Overview */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Who We Are
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                Shine LLC is a professionally managed non-emergency medical
                transportation (NEMT) company headquartered in the United States.
                For over four years, we have been dedicated to providing safe,
                reliable, and compassionate transportation services for patients
                who need to travel to and from medical appointments, dialysis
                centers, hospitals, and other healthcare facilities.
              </p>
              <p>
                Our team of experienced, background-checked drivers operates a
                modern fleet of wheelchair-accessible and stretcher-equipped
                vehicles, ensuring that every patient receives the highest level
                of care and comfort during their journey. We currently serve
                communities across Illinois, Indiana, Wisconsin, and Michigan,
                with plans to continue expanding our coverage area.
              </p>
              <p>
                At Shine LLC, we understand that medical transportation is more
                than just a ride. It is a critical link in the healthcare chain
                that helps patients access the care they need. That is why we
                approach every trip with professionalism, punctuality, and
                genuine compassion for the people we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary/40 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Our Mission
              </p>
              <h3 className="mt-3 text-xl font-bold text-card-foreground">
                Bridging the Gap in Healthcare Access
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our mission is to provide safe, reliable, and compassionate
                non-emergency medical transportation that empowers patients to
                access the healthcare services they need. We are committed to
                treating every passenger with dignity and respect while
                maintaining the highest standards of safety and professionalism.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Our Vision
              </p>
              <h3 className="mt-3 text-xl font-bold text-card-foreground">
                Leading the Future of Medical Transport
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our vision is to become the most trusted name in non-emergency
                medical transportation across the Midwest and beyond. We strive
                to set the industry standard for quality, reliability, and
                patient care through continuous improvement, innovation, and
                expansion of our service offerings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Our Values
            </p>
            <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl text-balance">
              What Drives Us Every Day
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 rounded-lg border border-border bg-card p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Banner */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {[
              { value: "4+", label: "Years of Service" },
              { value: "4", label: "States Served" },
              { value: "1000+", label: "Patients Transported" },
              { value: "24/7", label: "Scheduling Available" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-primary-foreground sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-primary-foreground/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
