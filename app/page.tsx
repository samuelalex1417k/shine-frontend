"use client"

import { HeroSection } from "@/components/home/hero-section"
import { ExperienceSection } from "@/components/home/experience-section"
import { ServicesSection } from "@/components/home/services-section"
import { FleetSection } from "@/components/home/fleet-section"
import { AreasSection } from "@/components/home/areas-section"
import { WhyChooseSection } from "@/components/home/why-choose-section"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <ServicesSection />
      <FleetSection />
      <AreasSection />
      <WhyChooseSection />
      <CtaSection />
    </>
  )
}