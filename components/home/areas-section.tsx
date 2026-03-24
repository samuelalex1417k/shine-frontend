"use client"

import { MapPin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const areas = [
  {
    state: "Virginia",
    description:
      "Serving communities across Virginia with reliable and compassionate non-emergency medical transportation.",
  },
  {
    state: "West Virginia",
    description:
      "Providing dependable medical transportation services for patients traveling to and from medical appointments.",
  },
  {
    state: "North Carolina",
    description:
      "Supporting patients and families with safe long-distance medical transport services.",
  },
  {
    state: "Neighboring States",
    description:
      "SHINE NEMT also provides long-distance transportation to surrounding states when specialized care is needed.",
  },
]

export function AreasSection() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
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
        </motion.div>

        {/* CARDS */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {areas.map((area) => (
            <motion.div
              key={area.state}
              className="rounded-lg border border-border bg-card p-6 text-center transition hover:shadow-md"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-5 w-5 text-accent" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                {area.state}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* BUTTON */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/areas"
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary hover:scale-[1.03]"
          >
            View All Service Areas
          </Link>
        </motion.div>

      </div>
    </section>
  )
}