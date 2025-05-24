'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    let end = 100
    let duration = 4200
    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const newPercentage = Math.min(
        Math.floor((progress / duration) * end),
        end
      )
      setPercentage(newPercentage)
      if (newPercentage < end) {
        requestAnimationFrame(animate)
      } else {
        setTimeout(() => setIsLoading(false), 500)
      }
    }

    requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animate as unknown as number)
  }, [])

  if (!isLoading) return null

  const radius = 140
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#171717]">
      <div
        className="relative"
        style={{
          width: '350px',
          height: '350px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff9966" />
              <stop offset="100%" stopColor="#cc66ff" />
            </linearGradient>
          </defs>
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="#2d2d2d"
            strokeWidth="12"
            fill="none"
          />
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="12"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500">
          {percentage}%
        </div>
      </div>
    </div>
  )
}
