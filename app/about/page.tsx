"use client"

import { PageHeader } from "@/components/page-header"
import { Shield, Heart, Eye, Clock } from "lucide-react"
import { motion } from "framer-motion"

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Patient safety is our top priority in every ride we provide. Our vehicles are regularly inspected and our drivers follow strict safety protocols.",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "We treat every patient with dignity, respect, and genuine compassion. Our team understands the importance of empathy in healthcare.",
  },
  {
    icon: Eye,
    title: "Reliability",
    description:
      "We are committed to being on time, every time. Our patients and healthcare partners count on us for dependable transportation.",
  },
  {
    icon: Clock,
    title: "Professionalism",
    description:
      "From our drivers to our dispatch team, professionalism is at the core of everything we do. We maintain the highest standards of service.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="Trusted Medical Transportation Since 2020"
        subtitle="Shine LLC has been providing safe, reliable non-emergency medical transportation for over 4 years, serving thousands of patients across multiple states."
      />

      {/* Company Overview */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <motion.div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Who We Are
            </h2>

            <div className="mt-6 flex flex-col gap-4 text-muted-foreground leading-relaxed">
              {[...Array(3)].map((_, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.2 }}
                >
                  {[
                    "Shine LLC is a professionally managed non-emergency medical transportation (NEMT) company headquartered in the United States. For over four years, we have been dedicated to providing safe, reliable, and compassionate transportation services for patients who need to travel to and from medical appointments, dialysis centers, hospitals, and other healthcare facilities.",
                    "Our team of experienced, background-checked drivers operates a modern fleet of wheelchair-accessible and stretcher-equipped vehicles, ensuring that every patient receives the highest level of care and comfort during their journey. We currently serve communities across Illinois, Indiana, Wisconsin, and Michigan, with plans to continue expanding our coverage area.",
                    "At Shine LLC, we understand that medical transportation is more than just a ride. It is a critical link in the healthcare chain that helps patients access the care they need. That is why we approach every trip with professionalism, punctuality, and genuine compassion for the people we serve.",
                  ][i]}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary/40 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 gap-8 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {[
              {
                title: "Our Mission",
                heading: "Bridging the Gap in Healthcare Access",
                text: "Our mission is to provide safe, reliable, and compassionate non-emergency medical transportation that empowers patients to access the healthcare services they need.",
              },
              {
                title: "Our Vision",
                heading: "Leading the Future of Medical Transport",
                text: "Our vision is to become the most trusted name in non-emergency medical transportation across the Midwest and beyond.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="rounded-lg border border-border bg-card p-8"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                  {item.title}
                </p>
                <h3 className="mt-3 text-xl font-bold text-card-foreground">
                  {item.heading}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Our Values
            </p>
            <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
              What Drives Us Every Day
            </h2>
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                className="flex gap-4 rounded-lg border border-border bg-card p-6 transition hover:shadow-md"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -4 }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <h3 className="font-semibold text-card-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-primary py-14 sm:py-16">
        <motion.div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {[
              { value: "4+", label: "Years of Service" },
              { value: "4", label: "States Served" },
              { value: "1000+", label: "Patients Transported" },
              { value: "24/7", label: "Scheduling Available" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <p className="text-3xl font-bold text-primary-foreground sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-primary-foreground/70">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  )
}