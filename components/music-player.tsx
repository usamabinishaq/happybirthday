"use client"

import { useState } from "react"
import { Music, Play, Pause } from "lucide-react"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleMusic = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-rose-500 to-pink-500 rounded-3xl shadow-2xl p-8 md:p-12 text-white text-center">
          <div className="flex items-center justify-center mb-6">
            <Music className="w-8 h-8 mr-3" />
            <h2 className="text-3xl font-serif">Your Birthday Song</h2>
          </div>

          <p className="mb-8 font-serif opacity-90">Click play to celebrate with music</p>

          <button
            onClick={toggleMusic}
            className="inline-flex items-center justify-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            {isPlaying ? (
              <>
                <Pause className="w-6 h-6" />
                <span className="font-semibold">Pause</span>
              </>
            ) : (
              <>
                <Play className="w-6 h-6" />
                <span className="font-semibold">Play</span>
              </>
            )}
          </button>

          <p className="mt-8 text-sm opacity-75 font-serif">Add your favorite birthday song in the settings</p>
        </div>
      </div>
    </section>
  )
}
