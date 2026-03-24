"use client"

import {
  Shield,
  Clock,
  Users,
  MapPin,
  Heart,
} from "lucide-react"
import { motion } from "framer-motion"

const reasons = [
  {
    icon: Clock,
    title: "4 Years of Treating Every Patient Like Family",
    description:
      "For over four years, we have proudly cared for every passenger as if they were a member of our own family.",
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

        {/* HEADER */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Why Us
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Why Families Trust SHINE NEMT
          </h2>
        </motion.div>

        {/* CARDS */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              className="flex gap-4 rounded-lg bg-card p-6 border border-border transition hover:shadow-md"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              {/* ICON */}
              <motion.div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10"
                whileHover={{ scale: 1.05 }}
              >
                <reason.icon className="h-5 w-5 text-accent" />
              </motion.div>

              {/* TEXT */}
              <div>
                <h3 className="font-semibold text-card-foreground">
                  {reason.title}
                </h3>

                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}