"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Import the Google Font in your CSS file
// Add to your CSS file:
// @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

export default function FeaturesSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }

    // Cursor effect logic
    const links = document.querySelectorAll('.hover-this')
    const cursor = document.querySelector('.cursor')

    const animateit = function (e) {
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

    const editCursor = e => {
      const { clientX: x, clientY: y } = e
      cursor.style.left = x + 'px'
      cursor.style.top = y + 'px'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
    <section className="py-16 md:py-24 bg-[#0a0a14] relative">
      <div className="cursor"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.span variants={itemVariants} className="text-neon-pink font-medium hover-this">
                <span>Innovate</span>
              </motion.span>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-serif text-white neon-text hover-this">
                <span>Experience the Future of Technology Today</span>
              </motion.h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-300 text-lg hover-this">
              <span>Our cutting-edge technology redefines possibilities. Discover innovative solutions that elevate your experience.</span>
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={itemVariants} className="space-y-3">
                <h3 className="text-xl font-serif text-neon-pink hover-this">
                  <span>Next-Gen</span>
                </h3>
                <p className="text-gray-400 hover-this">
                  <span>Harness the power of advanced technology for unparalleled efficiency and creativity.</span>
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-3">
                <h3 className="text-xl font-serif text-neon-blue hover-this">
                  <span>Seamless Integration</span>
                </h3>
                <p className="text-gray-400 hover-this">
                  <span>Integrate our solutions effortlessly into your existing systems for maximum impact.</span>
                </p>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <Button asChild className="bg-neon-pink hover:bg-neon-pink/80 text-white rounded-full px-6 hover-this">
                <Link href="/explore">
                  <span>Explore</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" className="text-neon-blue hover:text-neon-blue/80 group hover-this">
                <Link href="/learn-more" className="flex items-center">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 p-8 h-[500px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-200/30 via-transparent to-transparent"></div>
            <div className="relative z-10 text-center space-y-6">
              <motion.div
                variants={iconVariants}
                className="w-20 h-20 mx-auto rounded-full bg-amber-700 flex items-center justify-center animate-neon-border hover-this"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </span>
              </motion.div>
              <h3 className="text-2xl font-serif text-amber-900 hover-this">
                <span>Cutting-Edge Security</span>
              </h3>
              <p className="text-amber-800 max-w-xs mx-auto hover-this">
                <span>Our technology ensures your data is protected with the latest security protocols and encryption methods.</span>
              </p>
              <div className="pt-4">
                <span className="inline-block px-4 py-2 rounded-full bg-amber-700/10 text-amber-800 text-sm hover-this">
                  <span>Industry Leading Protection</span>
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-950 to-transparent"></div>
    </section>
  )
}