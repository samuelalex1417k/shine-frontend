"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const images = [
  "/images/hero-care.jpg",
  "/images/hero-care-2.jpg",
  "/images/shine-van-1.jpg",
]

export function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {/* Rotating Images */}
      <AnimatePresence>
        {images.map((img, i) =>
          i === index ? (
            <motion.div
              key={i}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={img}
                alt="Shine NEMT transportation service"
                fill
                className="object-cover"
              />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        className="relative mx-auto max-w-7xl px-4 h-full flex items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-2xl text-white">
          <motion.p
            className="text-sm font-semibold uppercase tracking-widest text-green-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Trusted Non-Emergency Medical Transport
          </motion.p>

          <motion.h1
            className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Caring transportation for the people who matter most.
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-white/85 max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Rest easy knowing your loved ones travel safely, comfortably,
            and with dignity. For over 4 years, SHINE NEMT has treated every
            passenger like a member of our own family.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              href="/contact"
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md text-sm font-semibold text-white transition"
            >
              Schedule Transportation
            </Link>

            <Link
              href="/services"
              className="border border-white/40 px-6 py-3 rounded-md text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              View Our Services
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}