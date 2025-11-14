"use client"

import { Heart } from "lucide-react"
import { useEffect, useState } from "react"

interface BirthdayHeroProps {
  isLoaded: boolean
}

export default function BirthdayHero({ isLoaded }: BirthdayHeroProps) {
  const [showSparkles, setShowSparkles] = useState(false)

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => setShowSparkles(true), 500)
    }
  }, [isLoaded])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        {/* Main Heading */}
        <div
          className={`mb-8 transform transition-all duration-1000 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-4">
            <span className="text-rose-600">Happy</span>
            <br />
            <span className="text-pink-500">Birthday</span>
          </h1>
        </div>

        {/* Decorative line with heart */}
        <div
          className={`flex items-center justify-center gap-4 mb-8 transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-rose-300" />
          <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-rose-300" />
        </div>

        {/* Subtitle */}
        <p
          className={`text-2xl md:text-3xl font-serif text-rose-900/70 mb-12 transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          To my beautiful SAMAN
        </p>

        {/* Sparkles */}
          <div className="flex justify-center gap-8 text-4xl">
            <span>✨</span>
            <span>💫</span>
            <span>✨</span>
          </div>
      </div>
    </section>
  )
}
