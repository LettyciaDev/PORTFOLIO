"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  {
    title: "Musicap",
    description: "Aplicação Java destinada ao gerenciamento de músicas e playlist",
    image: "/frontend.jpg",
    git: "https://github.com/LettyciaDev/Projeto-Musicap",
  },
  {
    title: "Projeto Coliceu",
    description: "Aplicativo mobile desenvolvido em Kotlin e Java que permite mapear sítios arqueológicos diretamente a partir de imagens",
    image: "/backend.jpg",
    git: "https://github.com/LettyciaDev/PROJETO-COLICEU",
  },
  {
    title: "Patas na Rua",
    description: "Plataforma que gerencia cuidados aos animais não abrigados",
    image: "/cyber.jpg",
    git: "https://github.com/LettyciaDev/PATAS-NA-RUA",
  },
  {
    title: "Modo Control",
    description: "Sistema de gerenciamento de pedidos, desenvolvido para manipular, controlar e analisar dados de vendas",
    image: "/cyber.jpg",
    git: "https://github.com/LettyciaDev/GPCLASS",
  },
   {
    title: "GPCLASS",
    description: "Sistema web estático organizado para servir como um portal educacional",
    image: "/cyber.jpg",
    git: "https://github.com/LettyciaDev/GPCLASS",
  },
   {
    title: "Patas na Rua",
    description: "Plataforma que gerencia cuidados aos animais não abrigados",
    image: "/cyber.jpg",
    git: "https://github.com/LettyciaDev/PATAS-NA-RUA",
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
    <div className="relative w-full max-w-5xl mx-auto px-4 py-10">
  {/* Container de Transbordamento */}
  <div className="overflow-hidden rounded-3xl">
    <div
      className="flex transition-transform duration-700 ease-in-out"
      style={{ transform: `translateX(-${current * 100}%)` }}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="min-w-full flex items-center justify-center p-4"
        >
          {/* Container do Card com Proporção Responsiva */}
          <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-video flex flex-col justify-end">
            
            {/* Aba mais profunda (Efeito de Pasta) */}
            <div className="absolute top-0 right-10 w-[60%] h-12 bg-[#E2D3CA] dark:bg-slate-700 rounded-t-[25px] -z-20 opacity-60"></div>
            
            {/* Aba intermediária */}
            <div className="absolute top-4 right-5 w-[80%] h-12 bg-[#CAC5C2] dark:bg-slate-800 rounded-t-[25px] -z-10 opacity-80"></div>

            {/* Corpo Principal do Card */}
            <div className="relative h-[80%] w-full bg-orange-600 dark:bg-green-700 p-6 sm:p-8 rounded-[25px] shadow-2xl flex flex-col justify-center text-white transition-colors duration-500">
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tighter">
                {slide.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base opacity-90 line-clamp-3">
                {slide.description}
              </p>
              
              <div className="mt-6 flex items-center gap-4">
                <a 
                  href={slide.git} 
                  className="bg-white/20 hover:bg-white/40 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                >
                  GitHub
                </a>
                {/* Ícone decorativo ou link extra */}
                <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                   🚀
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Controles de Navegação (Escondidos em telas muito pequenas) */}
  <button
    onClick={prevSlide}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white transition-all hidden sm:block"
  >
    ←
  </button>

  <button
    onClick={nextSlide}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white transition-all hidden sm:block"
  >
    →
  </button>

  {/* Indicadores (Dots) */}
  <div className="absolute -bottom-2 w-full flex justify-center gap-3">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrent(index)}
        className={`transition-all duration-300 rounded-full ${
          current === index ? "w-8 h-2 bg-orange-600 dark:bg-green-500" : "w-2 h-2 bg-gray-400 opacity-50"
        }`}
      />
    ))}
  </div>
</div>
  )
}