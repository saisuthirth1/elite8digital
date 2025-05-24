"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight } from "lucide-react"
import { Roboto } from "next/font/google"
// Import the Google Font in your CSS file
// Add to your CSS file:
// @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
})

export default function SolutionsSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })
  const [activeOption, setActiveOption] = useState(0)

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

  const options = [
    {
      background: "/images/pic1.jpg",
      icon: "walking",
      main: "Empowering Your Business",
      sub: "Streamlined processes for maximum efficiency",
      iconComponent: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-6 w-6">
          <path
            d="M208 96c26.5 0 48-21.5 48-48S234.5 0 208 0s-48 21.5-48 48 21.5 48 48 48zm94.5 149.1l-23.3-11.8-9.7-29.4c-14.7-44.6-55.7-75.8-102.2-75.9-36-.1-55.9 10.1-93.3 25.2-21.6 8.7-39.3 25.2-49.7 46.2L17.6 213c-7.8 15.8-1.5 35 14.2 42.9 15.6 7.9 34.6 1.5 42.5-14.3L81 228c3.5-7 9.3-12.5 16.5-15.4l26.8-10.8-15.2 60.7c-5.2 20.8.4 42.9 14.9 58.8l59.9 65.4c7.2 7.9 12.3 17.4 14.9 27.7l18.3 73.3c4.3 17.1 21.7 27.6 38.8 23.3 17.1-4.3 27.6-21.7 23.3-38.8l-22.2-89c-2.6-10.3-7.7-19.9-14.9-27.7l-45.5-49.7 17.2-68.7 5.5 16.5c5.3 16.1 16.7 29.4 31.7 37l23.3 11.8c15.6 7.9 34.6 1.5 42.5-14.3 7.7-15.7 1.4-35.1-14.3-43zM73.6 385.8c-3.2 8.1-8 15.4-14.2 21.5l-50 50.1c-12.5 12.5-12.5 32.8 0 45.3s32.7 12.5 45.2 0l59.4-59.4c6.1-6.1 10.9-13.4 14.2-21.5l13.5-33.8c-55.3-60.3-38.7-41.8-47.4-53.7l-20.7 51.5z"
          />
        </svg>
      ),
    },
    {
      background: "/images/pic2.jpeg",
      icon: "snowflake",
      main: "Future-Ready Solutions",
      sub: "Seamless integration for all your needs",
      iconComponent: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6">
          <path
            d="M440.3 345.2l-33.8-19.5 26-7c8.2-2.2 13.1-10.7 10.9-18.9l-4-14.9c-2.2-8.2-10.7-13.1-18.9-10.9l-70.8 19-63.9-37 63.8-36.9 70.8 19c8.2 2.2 16.7-2.7 18.9-10.9l4-14.9c2.2-8.2-2.7-16.7-10.9-18.9l-26-7 33.8-19.5c7.4-4.3 9.9-13.7 5.7-21.1L430.4 119c-4.3-7.4-13.7-9.9-21.1-5.7l-33.8 19.5 7-26c2.2-8.2-2.7-16.7-10.9-18.9l-14.9-4c-8.2-2.2-16.7 2.7-18.9 10.9l-19 70.8-62.8 36.2v-77.5l53.7-53.7c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0L224 56.9V16c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v40.9l-42.7-42.7c-6.2-6.2-16.4-6.2-22.6 0L99.5 25.5c-6.2 6.2-6.2 16.4 0 22.6l53.7 53.7v77.5l-62.8-36.2-19-70.8c-2.2-8.2-10.7-13.1-18.9-10.9l-14.9 4c-8.2 2.2-13.1 10.7-10.9 18.9l7 26-33.8-19.5c-7.4-4.3-16.8-1.7-21.1 5.7L2.1 145.7c-4.3 7.4-1.7 16.8 5.7 21.1l33.8 19.5-26 7c-8.3 2.2-13.2 10.7-11 19l4 14.9c2.2 8.2 10.7 13.1 18.9 10.9l70.8-19 63.8 36.9-63.8 36.9-70.8-19c-8.2-2.2-16.7 2.7-18.9 10.9l-4 14.9c-2.2 8.2 2.7 16.7 10.9 18.9l26 7-33.8 19.6c-7.4 4.3-9.9 13.7-5.7 21.1l15.5 26.8c4.3 7.4 13.7 9.9 21.1 5.7l33.8-19.5-7 26c-2.2 8.2 2.7 16.7 10.9 18.9l14.9 4c8.2-2.2 13.1-10.7 10.9-18.9l-7-26 33.8 19.5c7.4 4.3 16.8 1.7 21.1-5.7l15.5-26.8c4.3-7.3 1.8-16.8-5.6-21z"
          />
        </svg>
      ),
    },
    {
      background: "/images/pic3.png",
      icon: "tree",
      main: "Smart Technology",
      sub: "Maximize productivity with our smart solutions",
      iconComponent: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-6 w-6">
          <path
            d="M378.31 378.49L298.42 288h30.63c9.01 0 16.98-5 20.78-13.06 3.8-8.04 2.55-17.26-3.28-24.05L268.42 160h28.89c9.1 0 17.3-5.35 20.86-13.61 3.52-8.13 1.86-17.59-4.24-24.08L203.66 4.83c-6.03-6.45-17.28-6.45-23.32 0L70.06 122.31c-6.1 6.49-7.75 15.95-4.24 24.08C69.38 154.65 77.59 160 86.69 160h28.89l-78.14 90.91c-5.81 6.78-7.06 15.99-3.27 24.04C37.97 283 45.93 288 54.95 288h30.63L5.69 378.49c-6 6.79-7.36 16.09-3.56 24.26 3.75 8.05 12 13.25 21.01 13.25H160v24.45l-30.29 48.4c-5.32 10.64 2.42 23.16 14.31 23.16h95.96c11.89 0 19.63-12.52 14.31-23.16L224 440.45V416h136.86c9.01 0 17.26-5.2 21.01-13.25 3.8-8.17 2.44-17.47-3.56-24.26z"
          />
        </svg>
      ),
    },
    {
      background: "https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg",
      icon: "tint",
      main: "Innovative Design",
      sub: "Creative solutions that stand out",
      iconComponent: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" className="h-6 w-6">
          <path
            d="M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448c-61.75 0-112-50.25-112-112 0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80 8.84 0 16 7.16 16 16s-7.16 16-16 16z"
          />
        </svg>
      ),
    },
    {
      background: "https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg",
      icon: "sun",
      main: "Sustainable Solutions",
      sub: "Eco-friendly technology for a better future",
      iconComponent: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-6 w-6">
          <path
            d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
          />
        </svg>
      ),
    },
  ]

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
          className="text-center mb-12"
        >
          <motion.span variants={itemVariants} className="text-amber-700 font-medium hover-this">
            <span>Innovate</span>
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-serif text-white neon-text hover-this">
            <span>Transforming Your Digital Experience</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 mt-4 max-w-2xl mx-auto hover-this">
            <span>Cutting-edge solutions for a connected world.</span>
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className={`${roboto.className} mb-16`}>
          <div className="options">
            {options.map((option, index) => (
              <div
                key={index}
                className={`option ${index === activeOption ? "active" : ""}`}
                style={{ "--optionBackground": `url(${option.background})` } as React.CSSProperties}
                onClick={() => setActiveOption(index)}
              >
                <div className="shadow"></div>
                <div className="label">
                  <motion.div
                    variants={iconVariants}
                    className="icon bg-white rounded-full flex items-center justify-center h-10 w-10"
                  >
                    <span>{option.iconComponent}</span>
                  </motion.div>
                  <div className="info">
                    <div className="main font-bold text-lg">
                      <span>{option.main}</span>
                    </div>
                    <div className="sub text-sm">
                      <span>{option.sub}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <Link
            href="/solutions"
            className="inline-flex items-center text-amber-700 font-medium hover:text-amber-800 transition-colors hover-this"
          >
            <span>View All Solutions</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .options {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          min-height: 300px;
          max-height: 80vh;
          margin: 0;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .option {
          position: relative;
          overflow: hidden;
          min-width: 60px;
          margin: 0;
          background-size: cover;
          background-position: center;
          cursor: pointer;
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          flex-grow: 1;
          background-image: var(--optionBackground);
        }

        .option.active {
          flex-grow: 10000;
          transform: scale(1);
          max-width: 600px;
          margin: 0;
          border-radius: 12px;
          background-size: cover;
          background-position: center;
        }

        .option.active .shadow {
          box-shadow: inset 0 -120px 120px -120px black, inset 0 -120px 120px -100px black;
        }

        .option.active .label {
          bottom: 20px;
          left: 20px;
        }

        .option.active .label .info > div {
          left: 0;
          opacity: 1;
        }

        .option:not(.active) {
          flex-grow: 1;
          border-radius: 12px;
        }

        .option:not(.active) .shadow {
          bottom: -40px;
          box-shadow: inset 0 -120px 0px -120px black, inset 0 -120px 0px -100px black;
        }

        .option:not(.active) .label {
          bottom: 10px;
          left: 10px;
        }

        .option:not(.active) .label .info > div {
          left: 20px;
          opacity: 0;
        }

        .option .shadow {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 120px;
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .option .label {
          display: flex;
          position: absolute;
          right: 0;
          height: 40px;
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .option .label .icon {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          min-width: 40px;
          max-width: 40px;
          height: 40px;
          border-radius: 100%;
          background-color: white;
          color: #222222;
        }

        .option .label .info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 10px;
          color: white;
          white-space: pre;
        }

        .option .label .info > div {
          position: relative;
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease-out;
        }

        .option .label .info .main {
          font-weight: bold;
          font-size: 1.2rem;
        }

        .option .label .info .sub {
          transition-delay: 0.1s;
          font-size: 0.8rem;
        }

        .credit {
          color: #777;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .credit:hover {
          color: #444;
        }

        @media (max-width: 768px) {
          .options {
            flex-direction: column;
            min-height: 600px;
          }

          .option {
            min-height: 60px;
          }

          .option.active {
            flex-grow: 10000;
            max-height: 500px;
          }
        }
      `}</style>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-950 to-transparent"></div>
    </section>
  )
}