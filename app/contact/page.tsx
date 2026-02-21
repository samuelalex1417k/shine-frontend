import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Shine LLC for non-emergency medical transportation services. Call, email, or fill out our contact form.",
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "(123) 456-7890",
    href: "tel:+1234567890",
    description: "Call us for immediate assistance",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@shinellc.com",
    href: "mailto:info@shinellc.com",
    description: "Send us an email anytime",
  },
  {
    icon: MapPin,
    title: "Service Area",
    value: "IL, IN, WI & MI",
    href: "/areas",
    description: "Multi-state coverage",
  },
  {
    icon: Clock,
    title: "Scheduling",
    value: "24/7 Available",
    href: null,
    description: "Round-the-clock scheduling",
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Get in Touch"
        title="Contact Us"
        subtitle="Have questions about our medical transportation services? We are here to help. Reach out to us and our team will respond promptly."
      />

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold text-foreground">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-foreground">
                Contact Information
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Reach out to us directly through any of these channels.
              </p>

              <div className="mt-6 flex flex-col gap-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="flex gap-4 rounded-lg border border-border bg-card p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-card-foreground">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm font-medium text-accent hover:underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-accent">
                          {info.value}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-16">
            <h2 className="text-xl font-bold text-foreground">
              Our Service Area
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We provide medical transportation services across the Midwest
              region.
            </p>
            <div className="mt-6 overflow-hidden rounded-lg border border-border">
              <iframe
                title="Shine LLC Service Area"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022978.2!2d-89.5!3d41.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sIllinois!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
