"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const fleetImages = [
  {
    src: "/images/fleet-1.jpg",
    alt: "Wheelchair accessible medical transport van",
  },
  {
    src: "/images/fleet-2.jpg",
    alt: "Stretcher-equipped medical transport vehicle",
  },
  {
    src: "/images/fleet-3.png",
    alt: "Fleet of medical transport vans",
  },
  {
    src: "/images/fleet-4.jpg",
    alt: "Clean interior of medical transport van",
  },
]

export function FleetSection() {
  return (
    <section className="bg-secondary/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">

          {/* LEFT CONTENT */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Our Fleet
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Modern, Safe & Well-Maintained Vehicles
            </h2>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our fleet consists of modern, professionally maintained
              wheelchair-accessible vehicles equipped with the latest safety
              features. Every vehicle undergoes regular inspections and
              sanitization to ensure the highest standards of cleanliness and
              patient comfort.
            </p>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/fleet"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 hover:scale-[1.03]"
              >
                View Our Fleet
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGES */}
          <div className="lg:w-3/5">
            <motion.div
              className="grid grid-cols-2 gap-4"
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
              {fleetImages.map((image) => (
                <motion.div
                  key={image.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}