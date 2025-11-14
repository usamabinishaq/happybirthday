"use client"

import { useState } from "react"

export default function PhotoGallery() {
  const photos = [
    { id: 1, emoji: "📸" },
    { id: 2, emoji: "💑" },
    { id: 3, emoji: "🌹" },
    { id: 4, emoji: "💫" },
    { id: 5, emoji: "👑" },
    { id: 6, emoji: "💎" },
  ]

  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-rose-600 text-center mb-4">Your Special Moments</h2>
        <p className="text-center text-rose-900/60 mb-12 font-serif text-lg">
          Replace these with your favorite photos together
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
              onMouseEnter={() => setHoveredPhoto(photo.id)}
              onMouseLeave={() => setHoveredPhoto(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-300 to-pink-300 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <span className="text-8xl">{photo.emoji}</span>
              </div>

              {hoveredPhoto === photo.id && (
                <div className="absolute inset-0 bg-rose-500/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="text-sm font-semibold">Add Photo</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
