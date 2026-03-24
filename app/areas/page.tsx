"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { MapPin, CheckCircle2 } from "lucide-react"

const regions = [
  {
    name: "Northern Virginia",
    description:
      "Serving patients throughout Northern Virginia with dependable non-emergency medical transportation to hospitals, clinics, dialysis centers, and rehabilitation facilities.",
    cities: ["Arlington","Alexandria","Fairfax","Reston","Herndon","Manassas","Leesburg","McLean"],
  },
  {
    name: "Central Virginia",
    description:
      "Providing safe and reliable transportation for medical appointments and healthcare visits across Central Virginia communities.",
    cities: ["Richmond","Charlottesville","Petersburg","Hopewell","Colonial Heights","Ashland","Mechanicsville","Midlothian"],
  },
  {
    name: "Hampton Roads",
    description:
      "Supporting patients in the Hampton Roads region with comfortable and punctual non-emergency medical transport services.",
    cities: ["Virginia Beach","Norfolk","Chesapeake","Hampton","Newport News","Suffolk","Portsmouth","Poquoson"],
  },
  {
    name: "Neighboring State Coverage",
    description:
      "Shine LLC also provides transportation to medical facilities located in neighboring states when required for specialized treatment or long-distance medical appointments.",
    cities: ["Washington DC","Baltimore","Frederick","Hagerstown","Durham","Raleigh","Greensboro","Charlotte"],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

export default function AreasPage() {
  return (
    <>
      <PageHeader
        label="Service Coverage"
        title="Areas We Serve"
        subtitle="Shine LLC provides dependable non-emergency medical transportation services throughout Virginia and neighboring states."
      />

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 gap-8 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {regions.map((region) => (
              <motion.div
                key={region.name}
                className="rounded-lg border border-border bg-card p-6 lg:p-8"
                variants={cardVariants}
              >
                {/* Region Header */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-card-foreground">
                    {region.name}
                  </h2>
                </div>

                {/* Description */}
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {region.description}
                </p>

                {/* Cities */}
                <motion.div
                  className="mt-5"
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-card-foreground">
                    Key Areas
                  </h3>
                  <ul className="mt-3 grid grid-cols-2 gap-2">
                    {region.cities.map((city) => (
                      <motion.li
                        key={city}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                        variants={listItemVariants}
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent" />
                        {city}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-12 rounded-lg border border-border bg-secondary/30 p-6 text-center lg:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-foreground">
              Don't see your area?
            </h3>

            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              Shine LLC continues to expand its service coverage across Virginia
              and neighboring states. Contact our team to confirm transportation
              availability in your area.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}