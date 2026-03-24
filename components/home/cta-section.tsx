"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function CtaSection() {
  return (
    <section className="bg-accent-foreground py-16 sm:py-20">
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        {/* TITLE */}
        <motion.h2
          className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
        >
          Join Our Growing Team of Professional Drivers
        </motion.h2>

        {/* TEXT */}
        <motion.p
          className="mt-4 text-lg text-secondary/80 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
        >
          We are always looking for professional, compassionate drivers to join
          our team. Competitive pay, flexible schedules, and the opportunity to
          make a difference.
        </motion.p>

        {/* BUTTON */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/become-a-driver"
            className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-sm font-semibold text-primary transition hover:bg-accent/90 hover:scale-[1.05]"
          >
            Apply Now
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}