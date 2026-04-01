"use client"

import Image from "next/image";
import { useState, useEffect } from "react"

const slides = [
  {
    title: "Musicap",
    description: "Aplicação Java destinada ao gerenciamento de músicas e playlist",
    image: "/musicap.png",
    git: "https://github.com/LettyciaDev/Projeto-Musicap",
  },
  {
    title: "CardapIA",
    description: "Site que gera receitas saudáveis com IA",
    image: "/cardapia.png",
    git: "https://github.com/LettyciaDev/PROJETO-WEB-MOBILE",
  },

  {
    title: "Projeto Coliceu",
    description: "Aplicativo mobile desenvolvido em Kotlin e Java que permite mapear sítios arqueológicos diretamente a partir de imagens",
    image: "/coliceu.png",
    git: "https://github.com/LettyciaDev/PROJETO-COLICEU",
  },
  {
    title: "Patas na Rua",
    description: "Plataforma que gerencia cuidados aos animais não abrigados",
    image: "/patas.png",
    git: "https://github.com/LettyciaDev/PATAS-NA-RUA",
  },
  {
    title: "Modo Control",
    description: "Sistema de gerenciamento de pedidos, desenvolvido para manipular, controlar e analisar dados de vendas",
    image: "/modocontrol.png",
    git: "https://github.com/LettyciaDev/GPCLASS",
  },
  {
    title: "GPCLASS",
    description: "Sistema web estático organizado para servir como um portal educacional",
    image: "/gpclass.png",
    git: "https://github.com/LettyciaDev/GPCLASS",
  },
]

export function Carousel() {
  const [current, setCurrent] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(1)

  // Ajusta quantos itens mostrar baseado na largura da tela
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1024) setItemsToShow(3)
      else if (window.innerWidth >= 768) setItemsToShow(2)
      else setItemsToShow(1)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1 >= slides.length - (itemsToShow - 1) ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - itemsToShow : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [itemsToShow])

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ 
          transform: `translateX(-${current * (100 / itemsToShow)}%)` 
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{ minWidth: `${100 / itemsToShow}%` }}
            className="flex items-center justify-center p-2 sm:transition-all duration-500"
          >
            {/* Container do Card (Efeito Pasta) */}
            <div className="relative w-full max-w-lg h-100 flex flex-col items-center justify-end group sm:max-w-sm">
              
              <div className="absolute top-0 right-10 w-[70%] h-12 bg-[#E2D3CA] dark:bg-slate-700 rounded-t-[30px] -z-20 opacity-60 transition-transform group-hover:-translate-y-2"></div>
              <div className="absolute top-6 right-5 w-[85%] h-10 bg-[#CAC5C2] dark:bg-slate-800 rounded-t-[25px] -z-10 opacity-80 transition-transform group-hover:-translate-y-1"></div>

              {/* Corpo do Card */}
              <div className="relative h-[85%] w-full rounded-[25px] shadow-2xl flex flex-col justify-end text-white border border-white/10 overflow-hidden backdrop-blur-md"> 
                    
                    <Image 
                      src={slide.image} 
                      alt={slide.title}
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="absolute inset-0 w-full h-full object-contain object-center z-0 p-4" 
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-gray-500 via-black/20 to-transparent z-10 pointer-events-none"></div>

              
                    <div className="p-6 sm:p-8 z-20 relative">
                      <h2 className="text-xl font-bold uppercase drop-shadow-lg text-white">
                        {slide.title}
                      </h2>
                      <p className="mt-2 text-xs opacity-90 line-clamp-2 drop-shadow-sm text-gray-100">
                        {slide.description}
                      </p>
                      
                      <div className="mt-4 flex items-center gap-3">
                        <a 
                          href={slide.git} 
                          className="bg-white/20 hover:bg-white/40 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border border-white/10"
                        >
                          GitHub
                        </a>
                        <div className="w-8 h-8 bg-black/40 rounded-full flex items-center justify-center text-sm border border-white/5">
                          🚀
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navegação */}
      <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/30 backdrop-blur-md p-3 rounded-full text-white">←</button>
      <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/30 backdrop-blur-md p-3 rounded-full text-white">→</button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: slides.length - (itemsToShow - 1) }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              current === i ? "w-8" : "w-2 bg-gray-400"
            }`}
            style={current === i ? { background: "var(--container-color)" } : {}}
          />
        ))}
      </div>
    </div>
  )
}