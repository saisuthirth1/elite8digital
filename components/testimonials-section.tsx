"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Star, User } from "lucide-react"

// Import the Google Font in your CSS file
// Add to your CSS file:
// @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

export default function TestimonialsSection() {
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
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls} className="space-y-12">
          <motion.div variants={itemVariants} className="text-center">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif text-white neon-text hover-this">
              <span>Customer Testimonials</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 mt-4 hover-this">
              <span>Hear what our clients have to say about us.</span>
            </motion.p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div key={i} variants={iconVariants}>
                    <Star className="w-5 h-5 text-neon-pink fill-neon-pink" />
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 hover-this">
                <span>"This service transformed our workflow and boosted productivity!"</span>
              </p>
              <div className="flex items-center">
                <motion.div
                  variants={iconVariants}
                  className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-neon-pink/20 flex items-center justify-center border border-neon-pink animate-neon-border hover-this"
                >
                  <span>
                    <User className="h-6 w-6 text-neon-pink" />
                  </span>
                </motion.div>
                <div>
                  <p className="font-medium text-white hover-this">
                    <span>Jane Doe</span>
                  </p>
                  <p className="text-sm text-gray-400 hover-this">
                    <span>CEO</span>
                  </p>
                </div>
                <div className="ml-auto">
                  <div className="h-6 w-24 bg-neon-pink/20 rounded border border-neon-pink/30"></div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-xl">
            <div className="flex mb-4">
                {[...Array(3)].map((_, i) => (
                  <motion.div key={i} variants={iconVariants}>
                    <Star className="w-5 h-5 text-neon-pink fill-neon-pink" />
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 hover-this">
                <span>"An exceptional experience that exceeded our expectations!"</span>
              </p>
              <div className="flex items-center">
                <motion.div
                  variants={iconVariants}
                  className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-neon-blue/20 flex items-center justify-center border border-neon-blue animate-neon-border hover-this"
                >
                  <span>
                    <User className="h-6 w-6 text-neon-blue" />
                  </span>
                </motion.div>
                <div>
                  <p className="font-medium text-white hover-this">
                    <span>John Smith</span>
                  </p>
                  <p className="text-sm text-gray-400 hover-this">
                    <span>Manager</span>
                  </p>
                </div>
                <div className="ml-auto">
                  <div className="h-6 w-24 bg-neon-blue/20 rounded border border-neon-blue/30"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-950 to-transparent"></div>
    </section>
  )
}