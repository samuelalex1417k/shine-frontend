import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { DriverApplicationForm } from "@/components/driver-application-form"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Become a Driver",
  description:
    "Join the Shine LLC team as a professional medical transport driver. Apply today and help patients access the healthcare they need.",
}

const benefits = [
  "Competitive pay and consistent work",
  "Flexible scheduling options",
  "Professional training provided",
  "Modern, well-maintained vehicles",
  "Supportive team environment",
  "Make a meaningful difference in patients' lives",
]

export default function BecomeADriverPage() {
  return (
    <>
      <PageHeader
        label="Join Our Team"
        title="Become a Driver"
        subtitle="Join our growing team of professional medical transport drivers and help patients access the healthcare they need."
      />

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Application Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold text-foreground">
                Driver Application
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Complete the application below. All fields marked with * are
                required.
              </p>
              <div className="mt-6">
                <DriverApplicationForm />
              </div>
            </div>

            {/* Benefits Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    Why Drive with Shine LLC?
                  </h3>
                  <ul className="mt-4 flex flex-col gap-3">
                    {benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-lg border border-border bg-secondary/30 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    Requirements
                  </h3>
                  <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                    <li>Valid US driver license</li>
                    <li>Clean driving record</li>
                    <li>Pass background check</li>
                    <li>Reliable vehicle (2010 or newer)</li>
                    <li>Valid auto insurance</li>
                    <li>Excellent communication skills</li>
                  </ul>
                </div>

                <div className="mt-6 rounded-lg bg-primary p-6">
                  <h3 className="text-sm font-semibold text-primary-foreground">
                    Questions?
                  </h3>
                  <p className="mt-2 text-sm text-primary-foreground/80">
                    If you have questions about the application process, contact
                    our recruiting team.
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="mt-3 inline-block text-sm font-medium text-accent hover:underline"
                  >
                    (123) 456-7890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
