"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "./ui/button"
import Navbar from "./navbar"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      <Navbar />
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image.png"
          alt="Technology background"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 hover-this">
            <span>Unleash the Future of Technology Today</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto hover-this">
            <span>
              Experience innovation like never before with our cutting-edge solutions. Join us on a journey to redefine
              the digital landscape.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="rounded-full px-8 py-6 bg-amber-700 hover:bg-amber-800 text-white hover-this">
              <Link href="/explore">
                <span>Explore</span>
              </Link>
            </Button>
            <Button
              asChild
              className="rounded-full px-8 py-6 bg-amber-700 hover:bg-amber-800 text-white hover-this"
            >
              <Link href="/contact">
                <span>Contact</span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-950 to-transparent"></div>
    </section>
  )
}