"use client"

import { useEffect, useState } from "react"
import BirthdayHero from "@/components/birthday-hero"
import BirthdayMessage from "@/components/birthday-message"
import PhotoGallery from "@/components/photo-gallery"
import MusicPlayer from "@/components/music-player"
import GiftCard from "@/components/gift-card"
import WelcomePopup from "@/components/welcome-popup"

export default function BirthdayPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showPopup, setShowPopup] = useState(true)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-rose-50 overflow-hidden">
 <div className="absolute inset-0 ">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationName: "float",
              animationDuration: `${4 + Math.random() * 3}s`,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationDelay: `${i * 0.3}s`,
              color: i % 2 === 0 ? "#ec4899" : "#f472b6",
              textShadow: "0 0 12px currentColor, 0 0 20px currentColor",
            }}
          >
            ♡
          </div>
        ))}
      </div>
      <main className="relative z-10">
        <BirthdayHero isLoaded={isLoaded} />
        <BirthdayMessage />
        <GiftCard />
      </main>
    </div>
  )
}
