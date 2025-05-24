"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Import the Google Font in your CSS file
// Add to your CSS file:
// @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
    <nav className="absolute top-0 left-0 right-0 z-50 px-4 md:px-6 py-4">
      <div className="cursor"></div>
      <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls} className="flex items-center justify-between">
        <motion.div variants={itemVariants} className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-white/80 transition-colors hover-this">
            <span>Home</span>
          </Link>
          <Link href="/our-work" className="text-white hover:text-white/80 transition-colors hover-this">
            <span>Our Work</span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center text-white hover:text-white/80 transition-colors hover-this">
                <span>More Info</span>
                <motion.div variants={iconVariants}>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </motion.div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link href="/about" className="hover-this">
                  <span>About Us</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services" className="hover-this">
                  <span>Services</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/contact" className="hover-this">
                  <span>Contact</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>

        <motion.div variants={itemVariants} className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)} className="text-white hover-this">
            <motion.div variants={iconVariants}>
              <Menu className="h-6 w-6" />
            </motion.div>
          </Button>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button asChild className="rounded-full bg-amber-700 hover:bg-amber-800 text-white px-6 hover-this">
            <Link href="/join">
              <span>Join</span>
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Mobile menu */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        className={cn(
          "fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-white hover-this"
        >
          <motion.div variants={iconVariants}>
            <X className="h-6 w-6" />
          </motion.div>
        </Button>
        <Link href="/" className="text-white text-xl hover-this" onClick={() => setIsMenuOpen(false)}>
          <span>Home</span>
        </Link>
        <Link href="/our-work" className="text-white text-xl hover-this" onClick={() => setIsMenuOpen(false)}>
          <span>Our Work</span>
        </Link>
        <Link href="/about" className="text-white text-xl hover-this" onClick={() => setIsMenuOpen(false)}>
          <span>About Us</span>
        </Link>
        <Link href="/services" className="text-white text-xl hover-this" onClick={() => setIsMenuOpen(false)}>
          <span>Services</span>
        </Link>
        <Link href="/contact" className="text-white text-xl hover-this" onClick={() => setIsMenuOpen(false)}>
          <span>Contact</span>
        </Link>
      </motion.div>
    </nav>
  )
}