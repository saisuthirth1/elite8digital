"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Import the Google Font in your CSS file
// Add to your CSS file:
// @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

export default function ConnectSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })
  const [email, setEmail] = useState("")

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Subscribed with email:", email)
    setEmail("")
    // Show success message or toast notification
  }

  return (
    <section className="py-16 md:py-24 bg-[#0a0a14] relative">
      <div className="cursor"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls} className="space-y-16">
          <motion.div variants={itemVariants} className="bg-gray-50 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif mb-4 text-gray-800 hover-this">
                  <span>Connect with Us Today!</span>
                </motion.h2>
                <motion.p variants={itemVariants} className="text-gray-600 mb-8 hover-this">
                  <span>Discover how we can elevate your digital presence with our innovative web solutions.</span>
                </motion.p>
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-[#e1e6d0] text-gray-800 hover:bg-[#d1d8b8] rounded-full px-8 hover-this">
                    <Link href="/learn-more">
                      <span>Learn More</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="border-gray-300 text-gray-800 hover:bg-gray-100 rounded-full px-8 hover-this"
                  >
                    <Link href="/sign-up">
                      <span>Sign Up</span>
                    </Link>
                  </Button>
                </motion.div>
              </div>
              <div className="relative h-64 md:h-auto bg-gradient-to-br from-green-700 to-green-900 flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent"></div>
                <div className="relative z-10 text-center p-8">
                  <motion.div
                    variants={iconVariants}
                    className="w-20 h-20 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 border border-green hover-this"
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
                        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                      </svg>
                    </span>
                  </motion.div>
                  <motion.h3 variants={itemVariants} className="text-xl font-serif text-white mb-2 hover-this">
                    <span>Let's Start a Conversation</span>
                  </motion.h3>
                  <motion.p variants={itemVariants} className="text-white/80 hover-this">
                    <span>Our team is ready to help you achieve your digital goals.</span>
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <motion.h3 variants={itemVariants} className="font-medium text-white hover-this">
                  <span>Subscribe to updates</span>
                </motion.h3>
                <motion.p variants={itemVariants} className="text-gray-400 text-sm hover-this">
                  <span>Stay informed about our latest projects and news.</span>
                </motion.p>
              </div>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email here"
                  className="rounded-full bg-[#0c0c1d] border-neon-blue/30 text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="rounded-full bg-amber-700 hover:bg-amber-800 text-white hover-this">
                  <span>Join</span>
                </Button>
              </form>
            </div>
            <motion.p variants={itemVariants} className="text-xs text-gray-500 text-center md:text-left hover-this">
              <span>By subscribing you agree to our Privacy Policy.</span>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-950 to-transparent"></div>
    </section>
  )
}