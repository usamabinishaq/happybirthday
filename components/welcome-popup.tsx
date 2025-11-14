"use client"

import { useEffect, useState } from "react"

export default function WelcomePopup({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0)
  const [showText, setShowText] = useState(true)

  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => {
        setShowText(false)
      }, 2500)
      return () => clearTimeout(timer)
    }

    if (step === 1) {
      const timer = setTimeout(() => {
        setShowText(false)
      }, 3500)
      return () => clearTimeout(timer)
    }

    if (step === 2) {
      setShowText(true)
    }
  }, [step])

  useEffect(() => {
    if (!showText && step < 2) {
        setStep(step + 1)
        setShowText(true)
    }
  }, [showText, step])

  if (step > 2) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
     

      <div className="relative w-full mx-4 h-80 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center overflow-hidden">
        {step === 0 && (
          <div
            className={`text-center transition-all duration-500 ${
              showText ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
            }`}
          >
            <div className="text-6xl mb-4">✨</div>
            <h1
              className="text-6xl mb-4 tracking-wide"
              style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, color: "#c084fc" }}
            >
              It's Your Special Day
            </h1>
            <div className="flex justify-center gap-4 text-4xl">
              <span>💖</span>
              <span>🎂</span>
              <span>🌹</span>
            </div>
          </div>
        )}

        {step === 1 && (
          <div
            className={`text-center px-8 transition-all duration-500 ${
              showText ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
            }`}
          >
            <p
              className="text-2xl leading-relaxed"
              style={{ fontFamily: "Playfair Display, serif", color: "#d946a6", fontWeight: 500 }}
            >
              To make something special for you, let's celebrate your birthday in a different style
            </p>
          </div>
        )}

        {step === 2 && (
          <div
            className={`text-center transition-all duration-500 ${
              showText ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
            }`}
          >
            <p
              className="text-3xl mb-8"
              style={{ fontFamily: "Playfair Display, serif", color: "#c084fc", fontWeight: 600 }}
            >
              Do you want to see it?
            </p>
            <button
              onClick={onComplete}
              className="px-10 py-3 bg-gradient-to-r from-violet-400 to-pink-400 text-white rounded-full font-light text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Let's Go
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
