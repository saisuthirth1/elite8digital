"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Globe, User, Plus } from "lucide-react"

// Import the Google Font in your CSS file
// Add to your CSS file:
// @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

export default function TeamSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
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
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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

  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "Project Manager",
      description: "Leading projects with a vision for excellence and innovation.",
      color: "bg-neon-pink/20",
      borderColor: "border-neon-pink",
      textColor: "text-neon-pink",
    },
    {
      name: "Bob Smith",
      role: "Lead Developer",
      description: "Crafting cutting-edge solutions with a focus on user experience.",
      color: "bg-neon-blue/20",
      borderColor: "border-neon-blue",
      textColor: "text-neon-blue",
    },
    {
      name: "Cathy Lee",
      role: "UX Designer",
      description: "Designing intuitive interfaces that engage and inspire users.",
      color: "bg-neon-teal/20",
      borderColor: "border-neon-teal",
      textColor: "text-neon-teal",
    },
    {
      name: "David Kim",
      role: "Marketing Specialist",
      description: "Driving brand awareness through innovative marketing strategies.",
      color: "bg-neon-purple/20",
      borderColor: "border-neon-purple",
      textColor: "text-neon-purple",
    },
    {
      name: "Eva Chen",
      role: "Data Analyst",
      description: "Transforming data into actionable insights for informed decision-making.",
      color: "bg-neon-pink/20",
      borderColor: "border-neon-pink",
      textColor: "text-neon-pink",
    },
    {
      name: "Frank White",
      role: "Content Creator",
      description: "Crafting compelling narratives that resonate with our audience.",
      color: "bg-neon-blue/20",
      borderColor: "border-neon-blue",
      textColor: "text-neon-blue",
    },
    {
      name: "Grace Taylor",
      role: "Graphic Designer",
      description: "Bringing ideas to life through stunning visual designs.",
      color: "bg-neon-teal/20",
      borderColor: "border-neon-teal",
      textColor: "text-neon-teal",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#0a0a14] relative">
      <div className="cursor"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls} className="space-y-12">
          <motion.div variants={itemVariants} className="space-y-2 text-center">
            <motion.span variants={itemVariants} className="text-neon-pink font-medium hover-this">
              <span>Innovate</span>
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif text-white neon-text hover-this">
              <span>Our Team</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 hover-this">
              <span>Meet the brilliant minds behind our success.</span>
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center">
                <motion.div
                  variants={iconVariants}
                  className={`w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 ${member.color} flex items-center justify-center border ${member.borderColor} animate-neon-border hover-this`}
                >
                  <span>
                    <User className={`w-12 h-12 ${member.textColor}`} />
                  </span>
                </motion.div>
                <h3 className="font-medium text-lg text-white mb-2 neon-text hover-this">
                  <span>{member.name}</span>
                </h3>
                <p className={`${member.textColor} text-sm mb-2 hover-this`}>
                  <span>{member.role}</span>
                </p>
                <p className="text-gray-400 text-sm mb-3 hidden md:block hover-this">
                  <span>{member.description}</span>
                </p>
                <div className="flex space-x-2">
                  <Link href="#" className="text-gray-400 hover:text-neon-pink hover-this">
                    <span>
                      <Linkedin className="w-4 h-4" />
                    </span>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-neon-blue hover-this">
                    <span>
                      <Twitter className="w-4 h-4" />
                    </span>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-neon-purple hover-this">
                    <span>
                      <Globe className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
              <motion.div
                variants={iconVariants}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 bg-neon-purple/20 flex items-center justify-center border border-neon-purple animate-neon-border hover-this"
              >
                <span>
                  <Plus className="w-12 h-12 text-neon-purple" />
                </span>
              </motion.div>
              <h3 className="font-medium text-lg text-white mb-2 neon-text hover-this">
                <span>We're hiring!</span>
              </h3>
              <p className="text-neon-purple text-sm mb-2 hover-this">
                <span>Join us</span>
              </p>
              <p className="text-gray-400 text-sm mb-3 hidden md:block hover-this">
                <span>Be part of a dynamic team shaping the future.</span>
              </p>
              <div className="flex space-x-2">
                <Link href="#" className="text-gray-400 hover:text-neon-pink hover-this">
                  <span>
                    <Linkedin className="w-4 h-4" />
                  </span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-neon-blue hover-this">
                  <span>
                    <Twitter className="w-4 h-4" />
                  </span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-neon-purple hover-this">
                  <span>
                    <Globe className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <motion.h3 variants={itemVariants} className="text-2xl font-serif mb-2 text-white neon-text hover-this">
              <span>We're hiring!</span>
            </motion.h3>
            <motion.p variants={itemVariants} className="text-gray-400 mb-6 hover-this">
              <span>Explore exciting career opportunities with us today!</span>
            </motion.p>
            <Button asChild className="bg-amber-700 hover:bg-amber-800 text-white rounded-full px-8 hover-this">
              <Link href="/careers">
                <span>Open positions</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-950 to-transparent"></div>
    </section>
  )
}