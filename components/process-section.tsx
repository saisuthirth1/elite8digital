"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, Box, Lightbulb, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

// Import the Google Font in your CSS file
// Add to your CSS file:
// @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

export default function ProcessSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }

    // Cursor effect logic
    const links = document.querySelectorAll<HTMLElement>('.hover-this')
    const cursor = document.querySelector<HTMLElement>('.cursor')

    const animateit = function (this: HTMLElement, e: MouseEvent) {
      const span = this.querySelector('span')
      const { offsetX: x, offsetY: y } = e
      const { offsetWidth: width, offsetHeight: height } = this

      const move = 25
      const xMove = x / width * (move * 2) - move
      const yMove = y / height * (move * 2) - move

      if (span) {
        span.style.transform = `translate(${xMove}px, ${yMove}px)`
      }

      if (e.type === 'mouseleave') {
        if (span) span.style.transform = ''
      }
    }

    const editCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e
      if (cursor) {
        cursor.style.left = x + 'px'
        cursor.style.top = y + 'px'
      }
    }

    links.forEach(b => b.addEventListener('mousemove', animateit))
    links.forEach(b => b.addEventListener('mouseleave', animateit))
    window.addEventListener('mousemove', editCursor)

    // Cleanup event listeners
    return () => {
      links.forEach(b => b.removeEventListener('mousemove', animateit))
      links.forEach(b => b.removeEventListener('mouseleave', animateit))
      window.removeEventListener('mousemove', editCursor)
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-[#0c0c1d] relative">
      <div className="cursor"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.span variants={itemVariants} className="text-neon-pink font-medium hover-this">
            <span>Innovate</span>
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-serif mt-2 text-white neon-text hover-this"
          >
            <span>Experience Our Cutting-Edge Process</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 mt-4 max-w-2xl mx-auto hover-this">
            <span>Our process is designed to be seamless and intuitive. We prioritize user experience at every step.</span>
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-3 gap-12 mb-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              variants={iconVariants}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-neon-pink/20 flex items-center justify-center border border-neon-pink animate-neon-border hover-this"
            >
              <span>
                <Box className="w-10 h-10 text-neon-pink" />
              </span>
            </motion.div>
            <h3 className="text-xl font-serif text-white mb-3 neon-text hover-this">
              <span>Step 1: Discovery and Ideation</span>
            </h3>
            <p className="text-gray-400 hover-this">
              <span>We begin by understanding your unique needs.</span>
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              variants={iconVariants}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-neon-blue/20 flex items-center justify-center border border-neon-blue animate-neon-border hover-this"
            >
              <span>
                <Lightbulb className="w-10 h-10 text-neon-blue" />
              </span>
            </motion.div>
            <h3 className="text-xl font-serif text-white mb-3 neon-text-blue hover-this">
              <span>Step 2: Design and Prototyping</span>
            </h3>
            <p className="text-gray-400 hover-this">
              <span>Our team creates interactive prototypes for feedback.</span>
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              variants={iconVariants}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-neon-purple/20 flex items-center justify-center border border-neon-purple animate-neon-border hover-this"
            >
              <span>
                <Rocket className="w-10 h-10 text-neon-purple" />
              </span>
            </motion.div>
            <h3 className="text-xl font-serif text-white mb-3 neon-text-purple hover-this">
              <span>Step 3: Development and Implementation</span>
            </h3>
            <p className="text-gray-400 hover-this">
              <span>We bring your vision to life with precision.</span>
            </p>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild className="bg-amber-700 hover:bg-amber-800 text-white rounded-full px-8 hover-this">
            <Link href="/learn-more">
              <span>Learn More</span>
            </Link>
          </Button>
          <Button
            asChild
            className="bg-amber-700 hover:bg-amber-800 text-white rounded-full px-8 hover-this"
          >
            <Link href="/sign-up" className="flex items-center">
              <span>
                Sign Up
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-950 to-transparent"></div>
    </section>
  )
}
