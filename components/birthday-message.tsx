"use client"

import { useEffect, useRef } from "react"

export default function BirthdayMessage() {
  const messageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      },
      { threshold: 0.1 },
    )

    if (messageRef.current) {
      observer.observe(messageRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-10 px-4 md:px-8">
      <div ref={messageRef} className="max-w-3xl mx-auto opacity-0">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-rose-100/50">
          <p className="text-xl md:text-2xl font-serif text-rose-900/80 leading-relaxed mb-6">
            Today is a celebration of you—the most beautiful, kind, and inspiring person in my life. Every moment with
            you is a gift I treasure, and every day I fall in love with you all over again.
          </p>

          <p className="text-lg md:text-xl font-serif text-rose-900/70 leading-relaxed">
            Here's to a year filled with laughter, adventure, and endless love. Happy Birthday to my forever. 💕
          </p>

          <div className="mt-8 flex justify-center gap-3">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-3xl">
                💝
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
