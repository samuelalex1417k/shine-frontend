"use client"

import { motion } from "framer-motion"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "703-298-8700",
    href: "tel:+17032988700",
    description: "Call us to schedule safe and reliable transportation",
  },
  {
    icon: Mail,
    title: "Email",
    value: "shinenemt@gmail.com",
    href: "mailto:shinenemt@gmail.com",
    description: "Email us with questions or scheduling requests",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "1390 Southside Dr, Suite 111B, Salem, VA",
    href: "https://maps.google.com/?q=1390+Southside+Dr+Salem+VA",
    description: "Our office location",
  },
  {
    icon: Clock,
    title: "Scheduling",
    value: "24/7 Availability",
    href: null,
    description: "Transportation available whenever you need us",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Get in Touch"
        title="Contact Us"
        subtitle="Have questions about transportation for a loved one? Our caring team is here to help you schedule safe, comfortable, and reliable medical transportation."
      />

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUp}
            >
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
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={stagger}
            >
              <h2 className="text-xl font-bold text-foreground">
                Contact Information
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Reach out to us directly through any of these channels.
              </p>

              <div className="mt-6 flex flex-col gap-4">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.title}
                    className="flex gap-4 rounded-lg border border-border bg-card p-4"
                    variants={item}
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
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-xl font-bold text-foreground">
              Our Service Area
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We proudly provide non-emergency medical transportation services
              throughout Virginia and neighboring states.
            </p>
            <div className="mt-6 overflow-hidden rounded-lg border border-border">
              <iframe
                title="Shine LLC Location"
                src="https://maps.google.com/maps?q=1390%20Southside%20Dr%20Salem%20VA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}