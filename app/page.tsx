'use client'

import { useState, useEffect } from 'react'
import HeroSection from "../components/hero-section"
import FeaturesSection from "../components/features-section"
import SolutionsSection from "../components/solutions-section"
import ProcessSection from "../components/process-section"
import TestimonialsSection from "../components/testimonials-section"
import TeamSection from "../components/team-section"
import ConnectSection from "../components/connect-section"
import Footer from "../components/footer"
import LoadingScreen from "../components/loading-screen"

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <HeroSection />
      <FeaturesSection />
      <SolutionsSection />
      <ProcessSection />
      <TestimonialsSection />
      <TeamSection />
      <ConnectSection />
      <Footer />
    </main>
  )
}
