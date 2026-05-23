'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from 'lucide-react';
import { Sun, Moon } from 'lucide-react'; // Biblioteca de ícones (npm install lucide-react)

export function Nav(){
     const [isOpen, setIsOpen] = useState(false);
     const [theme, setTheme] = useState('light');

     useEffect(() => {
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
     }, []);

    // Alterna o tema
    const toggleTheme = () => {
     const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
       <div className="flex justify-between items-center m-10 relative">
      <button 
        onClick={toggleTheme}
        className="p-2 rounded-full border-2 transition-colors duration-300 z-50"
        
      >
        {theme === 'light' ? (
          <Moon size={24} color="#333" />
        ) : (
          <Sun size={24} color="#f1f1f1" />
        )}
      </button>

      {/* Botão Hambúrguer (Aparece apenas no Mobile) */}
      <button 
        className="md:hidden z-50 text-(--text-color)"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Navegação */}
      <nav className={`
        /* Estilos Mobile: Lista vira um menu suspenso */
        ${isOpen ? 'flex' : 'hidden'} 
        absolute top-16 left-0 w-full flex-col items-center gap-6 p-6 bg-(--bg-color) backdrop-blur-md z-40 shadow-xl rounded-b-3xl
        
        /* Estilos Desktop: Volta a ser uma linha horizontal */
        md:flex md:static md:flex-row md:w-auto md:p-0 md:bg-transparent md:shadow-none md:dark:bg-transparent
      `}>
        <ul className="flex flex-col md:flex-row items-center gap-5 drop-shadow-md">
          <li className="cursor-pointer hover:text-green-500 transition-colors">HOME</li>
          <li className="cursor-pointer hover:text-green-500 transition-colors">ABOUT</li>
          <li className="cursor-pointer hover:text-green-500 transition-colors">PROJECTS</li>
          
          {/* Botão GAME */}
          <li style={{ background: "var(--text-color)" }} className="flex items-center gap-1 font-bold text-amber-50 py-2 px-4 rounded-2xl hover:scale-105 transition-transform">
            <Image src="/game.png" alt="controle remoto" width={20} height={20} />
            <Link href="/hangman">GAME</Link>
          </li>
        </ul>
      </nav>
    </div>
    );
}