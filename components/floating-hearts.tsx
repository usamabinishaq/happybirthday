"use client"

import { useEffect, useState } from "react"

interface Heart {
  id: number
  left: number
  delay: number
  duration: number
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const generatedHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 4 + Math.random() * 3,
    }))
    setHearts(generatedHearts)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float opacity-60"
          style={{
            left: `${heart.left}%`,
            bottom: "-20px",
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${20 + Math.random() * 20}px`,
            color: "#ec4899",
            textShadow: "0 0 12px #ec4899, 0 0 20px #ec4899, inset 0 0 10px rgba(236, 72, 153, 0.3)",
            fontWeight: "300",
            letterSpacing: "2px",
          }}
        >
          ♡
        </div>
      ))}
    </div>
  )
}
