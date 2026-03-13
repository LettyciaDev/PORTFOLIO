"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  {
    title: "Desenvolvimento Frontend",
    description: "Interfaces modernas com React e Next.js",
    image: "/frontend.jpg",
  },
  {
    title: "Backend",
    description: "APIs escaláveis com Python e Node",
    image: "/backend.jpg",
  },
  {
    title: "Cybersecurity",
    description: "Segurança e monitoramento de sistemas",
    image: "/cyber.jpg",
  },
]

export function Carousel() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // autoplay
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-xl">

      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full relative h-[400px] flex items-center justify-center"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-6">
              <h2 className="text-3xl font-bold">{slide.title}</h2>
              <p className="mt-2">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botão esquerda */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full"
      >
        ←
      </button>

      {/* Botão direita */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full"
      >
        →
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}