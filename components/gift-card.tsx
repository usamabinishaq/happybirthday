"use client"

import { useState } from "react"

export default function GiftCard() {
  const [page, setPage] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const pages = [
    {
      type: "cover",
      background: "linear-gradient(135deg, #a8d8d8 0%, #8eccc8 100%)",
      content: (
        <div className="flex flex-col justify-center items-center h-full text-center relative">
          <div className="absolute top-8 left-8 text-3xl opacity-60">🌼</div>
          <div className="absolute top-12 right-12 text-2xl opacity-50">🌿</div>
          <div className="absolute bottom-12 left-10 text-2xl opacity-50">🌸</div>
          <div className="absolute bottom-8 right-8 text-3xl opacity-60">🌹</div>

          <div className="relative z-10">
            <div className="mb-8 text-8xl">💐</div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-amber-900 mb-4">Happy Birthday</h1>
            <p className="text-amber-800 text-2xl mb-2 font-serif italic">My Love</p>
            <p className="text-amber-700 text-sm mt-8 font-serif">Click to open</p>
          </div>
        </div>
      ),
    },
    {
      type: "content",
      background: "linear-gradient(135deg, #fff9f5 0%, #fff0e8 100%)",
      content: (
        <div className="flex flex-col justify-between h-full">
          <div className="text-center text-2xl opacity-40 mb-4">❀ ✦ ❀</div>
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-8 text-center">
              You are my greatest gift
            </h2>
            <p className="text-amber-800 text-lg leading-relaxed text-center max-w-xl mx-auto font-serif">
              Every day with you is a celebration. Your smile lights up my world, and your love makes every moment
              precious. Thank you for being my everything.
            </p>
          </div>
          <div className="flex justify-center gap-2 mt-8 text-3xl">
            <span>💕</span>
            <span>💕</span>
            <span>💕</span>
          </div>
        </div>
      ),
    },
    {
      type: "content",
      background: "linear-gradient(135deg, #fed4d4 0%, #f9b9b9 100%)",
      content: (
        <div className="flex flex-col justify-center items-center h-full text-center">
          <div className="text-3xl opacity-40 mb-6">✦ ❀ ✦</div>
          <h2 className="text-4xl md:text-5xl font-serif text-amber-950 mb-8">Make a Wish...</h2>
          <p className="text-amber-900 text-lg mb-8 leading-relaxed max-w-lg font-serif">
            I wish for a lifetime of moments like these, where we celebrate not just your birthday, but every day we get
            to spend together. I love you more each day.
          </p>
          <div className="text-6xl">🎉</div>
        </div>
      ),
    },
    {
      type: "content",
      background: "linear-gradient(135deg, #fff9f5 0%, #fff0e8 100%)",
      content: (
        <div className="flex flex-col justify-between h-full py-8">
          <div className="text-center text-2xl opacity-40">❀ ✦ ❀</div>
          <div className="flex justify-center mb-6">
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center border-4 border-amber-200">
              <span className="text-8xl">🧁</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-amber-900 text-lg text-center font-serif italic">
              Sweet like you, this cake is a symbol of the sweetness you bring to my life.
            </p>
          </div>
        </div>
      ),
    },
    {
      type: "content",
      background: "linear-gradient(135deg, #ffd9d9 0%, #ffcccc 100%)",
      content: (
        <div className="flex flex-col justify-center items-center h-full">
          <div className="text-2xl opacity-40 mb-6">❀ ✦ ❀</div>
          <h2 className="text-3xl md:text-4xl font-serif text-amber-950 mb-8 text-center">Forever Yours</h2>
          <div className="flex justify-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-200 to-rose-300 opacity-70 shadow-md"></div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-300 to-rose-400 opacity-70 shadow-md"></div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 opacity-70 shadow-md"></div>
          </div>
          <p className="text-amber-900 text-lg text-center max-w-md leading-relaxed font-serif">
            With all my love, on this special day and every day after.
          </p>
          <p className="text-amber-950 font-serif text-2xl mt-6">All my love ❤️</p>
        </div>
      ),
    },
  ]

  const currentPage = pages[page]

  return (
    <div className="relative w-full py-12 px-4 md:px-8 flex justify-center items-center min-h-screen bg-gradient-to-br from-rose-50 to-amber-50">
      <style>{`
        @keyframes cardFlip {
          0% {
            transform: perspective(1200px) rotateX(0deg);
          }
          50% {
            transform: perspective(1200px) rotateX(90deg);
          }
          100% {
            transform: perspective(1200px) rotateX(0deg);
          }
        }

        .card-container {
          perspective: 1200px;
        }

        .card-inner {
          position: relative;
          width: 100%;
          max-width: 600px;
          height: 600px;
          background: ${currentPage.background};
          border-radius: 20px;
          box-shadow: 0 30px 80px rgba(180, 83, 9, 0.2), 0 0 40px rgba(180, 83, 9, 0.1);
          padding: 60px 40px;
          cursor: pointer;
          transition: box-shadow 0.3s ease;
          border: 2px solid rgba(180, 83, 9, 0.15);
          overflow: hidden;
        }

        .card-inner:hover {
          box-shadow: 0 40px 100px rgba(180, 83, 9, 0.25), 0 0 50px rgba(180, 83, 9, 0.15);
        }

        .card-content {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 768px) {
          .card-inner {
            height: 500px;
            padding: 40px 30px;
          }
        }
      `}</style>

      <div className="card-container w-full">
        <div className="card-inner" onClick={() => isOpen && (page < pages.length - 1 ? setPage(page + 1) : null)}>
          <div className="card-content">{currentPage.content}</div>
        </div>

        {/* Navigation and Open/Close */}
        <div className="flex justify-center items-center gap-6 mt-12">
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-500 text-white font-semibold rounded-full hover:from-amber-700 hover:to-orange-600 transition-all shadow-lg text-lg font-serif"
            >
              Open Card
            </button>
          ) : (
            <>
              <button
                onClick={() => page > 0 && setPage(page - 1)}
                disabled={page === 0}
                className="px-6 py-2 bg-amber-300 text-amber-900 font-semibold rounded-full hover:bg-amber-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-serif"
              >
                Previous
              </button>

              <div className="flex gap-2">
                {pages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === page ? "bg-amber-700 w-8" : "bg-amber-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => page < pages.length - 1 && setPage(page + 1)}
                disabled={page === pages.length - 1}
                className="px-6 py-2 bg-amber-300 text-amber-900 font-semibold rounded-full hover:bg-amber-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-serif"
              >
                Next
              </button>
            </>
          )}
        </div>

        {/* Page indicator */}
        {isOpen && (
          <div className="text-center mt-6 text-amber-700 font-semibold font-serif">
            Page {page + 1} of {pages.length}
          </div>
        )}
      </div>
    </div>
  )
}
