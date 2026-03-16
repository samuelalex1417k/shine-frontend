"use client"
import { motion } from "framer-motion"

export function ExperienceSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <motion.div
        className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
          Trusted by Families
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Over 40,000 Trips Safely Performed
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-relaxed">
          Families across Virginia trust SHINE NEMT to transport their loved
          ones safely, comfortably, and with dignity. Every trip is handled
          with compassion, professionalism, and the highest level of care.
        </p>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {[
            { number: "40,000+", label: "Successful Patient Trips" },
            { number: "4+", label: "Years Serving Our Community" },
            { number: "100%", label: "Commitment to Patient Care" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className=""
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <p className="text-4xl font-bold text-green-600">{item.number}</p>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}