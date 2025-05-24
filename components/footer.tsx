"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Import the Google Font in your CSS file
// Add to your CSS file:
// @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

export default function Footer() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#080814] py-12 md:py-16 border-t border-neon-blue/20 relative">
      <div className="cursor"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls} className="space-y-8">
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <motion.h3 variants={itemVariants} className="font-medium text-white neon-text hover-this">
                <span>Subscribe to updates</span>
              </motion.h3>
              <motion.p variants={itemVariants} className="text-gray-400 text-sm hover-this">
                <span>Stay informed about our latest projects and news.</span>
              </motion.p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email here"
                className="rounded-full bg-[#0c0c1d] border border-neon-blue/30 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neon-blue text-white"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 text-sm font-medium transition-colors hover-this"
              >
                <span>Join</span>
              </button>
            </form>
          </motion.div>

          <hr className="border-neon-blue/20" />

          <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-6 gap-8">
            <motion.div variants={itemVariants} className="col-span-2 md:col-span-1">
              <h4 className="font-medium mb-4 text-white neon-text hover-this">
                <span>Quick Links</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <motion.li variants={itemVariants}>
                  <Link href="/" className="text-gray-400 hover:text-neon-pink hover-this">
                    <span>Home Page</span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link href="/our-work" className="text-gray-400 hover:text-neon-pink hover-this">
                    <span>Our Work</span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link href="/about-us" className="text-gray-400 hover:text-neon-pink hover-this">
                    <span>About Us</span>
                  </Link>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="col-span-2 md:col-span-1">
              <h4 className="font-medium mb-4 text-white neon-text hover-this">
                <span>Resources</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <motion.li variants={itemVariants}>
                  <Link href="/help" className="text-gray-400 hover:text-neon-blue hover-this">
                    <span>Help Center</span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link href="/faqs" className="text-gray-400 hover:text-neon-blue hover-this">
                    <span>FAQs</span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link href="/support" className="text-gray-400 hover:text-neon-blue hover-this">
                    <span>Support</span>
                  </Link>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="col-span-2 md:col-span-1">
              <h4 className="font- medium mb-4 text-white neon-text hover-this">
                <span>Follow Us</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <motion.li variants={itemVariants}>
                  <Link href="#" className="text-gray-400 hover:text-neon-purple hover-this">
                    <span>Twitter Feed</span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link href="#" className="text-gray-400 hover:text-neon-purple hover-this">
                    <span>LinkedIn Page</span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link href="#" className="text-gray-400 hover:text-neon-purple hover-this">
                    <span>Instagram Gallery</span>
                  </Link>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="col-span-2 md:col-span-1">
              <h4 className="font-medium mb-4 text-white neon-text hover-this">
                <span>Company Info</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <motion.li variants={itemVariants}>
                  <Link href="/careers" className="text-gray-400 hover:text-neon-teal hover-this">
                    <span>Careers</span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link href="/press" className="text-gray-400 hover:text-neon-teal hover-this">
                    <span>Press Releases</span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link href="/partnerships" className="text-gray-400 hover:text-neon-teal hover-this">
                    <span>Partnerships</span>
                  </Link>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="col-span-2 md:col-span-1">
              <h4 className="font-medium mb-4 text-white neon-text hover-this">
                <span>Get In Touch</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <motion.li variants={itemVariants}>
                  <Link href="/contact" className="text-gray-400 hover:text-neon-pink hover-this">
                    <span>Contact Support Team</span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link href="/demo" className="text-gray-400 hover:text-neon-pink hover-this">
                    <span>Request a Demo</span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link href="/newsletter" className="text-gray-400 hover:text-neon-pink hover-this">
                    <span>Join Our Newsletter</span>
                  </Link>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="col-span-2 md:col-span-1">
              <h4 className="font-medium mb-4 text-white neon-text hover-this">
                <span>Stay Connected</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <motion.li variants={itemVariants}>
                  <Link href="/resources" className="text-gray-400 hover:text-neon-blue hover-this">
                    <span>Link to Resources</span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link href="/blog" className="text-gray-400 hover:text-neon-blue hover-this">
                    <span>Link to Blog</span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link href="/events" className="text-gray-400 hover:text-neon-blue hover-this">
                    <span>Link to Events</span>
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>

          <hr className="border-neon-blue/20" />

        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-950 to-transparent"></div>
    </footer>
  )
}