"use client"

import { useState, useEffect } from "react"
import Link from "next/link";

const palavras: string[] = [
"REACT","JAVASCRIPT","PYTHON","ALGORITMO","COMPUTADOR",
"PROGRAMACAO","DESENVOLVEDOR","SERVIDOR","CLIENTE",
"FRAMEWORK","COMPILADOR","VARIAVEL","FUNCAO","CLASSE",
"OBJETO","ARRAY","STRING","BOOLEAN","DATABASE","API",
"NEXTJS","NODEJS","FRONTEND","BACKEND","FULLSTACK",
"CODIGO","SISTEMA","INTERNET","SOFTWARE","HARDWARE"
]

const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

export default function HangmanGame(){

    const [palavra,setPalavra] = useState<string>("")
    const [letrasUsadas,setLetrasUsadas] = useState<string[]>([])
    const [tentativas,setTentativas] = useState<number>(6)
    const [status,setStatus] = useState<"jogando"|"ganhou"|"perdeu">("jogando")

    useEffect(()=>{
    iniciarJogo()
    },[])

    function iniciarJogo(){

        const random = palavras[Math.floor(Math.random()*palavras.length)]

        setPalavra(random)
        setLetrasUsadas([])
        setTentativas(6)
        setStatus("jogando")

    }

    function tentarLetra(letra:string){

        if(status !== "jogando") return
        if(letrasUsadas.includes(letra)) return

        const novas=[...letrasUsadas,letra]
        setLetrasUsadas(novas)

        if(!palavra.includes(letra)){

        const novasTentativas = tentativas-1
        setTentativas(novasTentativas)

        if(novasTentativas === 0){
        setStatus("perdeu")
        }

        }else{

        const venceu = palavra
        .split("")
        .every(l => novas.includes(l))

        if(venceu){
        setStatus("ganhou")
        }

        }

    }

    function renderPalavra(){

        return palavra.split("").map((l,i)=>(

        <span key={i}
        className="text-4xl md:text-5xl text-amber-800 tracking-widest"
        >
        {letrasUsadas.includes(l) ? l : "_"}
        </span>

    ))

    }

    function erros(){
        return 6 - tentativas
    }

    return(

        <div className="min-h-screen bg-linear-to-t from-orange-600 to-orange-400 text-white p-8 font-[Press_Start_2P]">
            <Link href="/">Voltar</Link>
            <div className="flex flex-col items-center justify-center">
                    <h1 className="text-xl font-extrabold md:text-2xl mb-8">
                         JOGO DA FORCA
                    </h1>

                <div className="flex flex-col gap-10 items-center">

                        {/* FORCA SVG */}

                        <svg height="230" width="200" className="stroke-white stroke-4">

                        {/* base */}
                        <line x1="10" y1="230" x2="190" y2="230"/>

                        {/* poste */}
                        <line x1="40" y1="240" x2="40" y2="20"/>

                        {/* topo */}
                        <line x1="40" y1="20" x2="140" y2="20"/>

                        {/* corda */}
                        <line x1="140" y1="20" x2="140" y2="50"/>

                        {/* cabeça */}
                        {erros() > 0 && <circle cx="140" cy="70" r="20" fill="none"/>}

                        {/* corpo */}
                        {erros() > 1 && <line x1="140" y1="90" x2="140" y2="150"/>}

                        {/* braço esquerdo */}
                        {erros() > 2 && <line x1="140" y1="110" x2="110" y2="130"/>}

                        {/* braço direito */}
                        {erros() > 3 && <line x1="140" y1="110" x2="170" y2="130"/>}

                        {/* perna esquerda */}
                        {erros() > 4 && <line x1="140" y1="150" x2="115" y2="190"/>}

                        {/* perna direita */}
                        {erros() > 5 && <line x1="140" y1="150" x2="165" y2="190"/>}

                        </svg>

                        {/* JOGO */}

                        <div className="w-full h-1/2 bg-[#F8F8F875] p-2 rounded-xl border-4 border-white shadow-md md:w-[50vh]">

                        <div className="flex justify-center mb-8">
                        {renderPalavra()}
                        </div>

                        <p className="text-green-400 mb-6 text-center">
                        Tentativas restantes: {tentativas}
                        </p>

                        {/* TECLADO */}

                        <div className="grid grid-cols-7 gap-2 max-w-md mx-auto">

                        {letras.map((l)=>{

                            const usada = letrasUsadas.includes(l)
                            const correta = palavra.includes(l)

                            return(

                                <button
                                    key={l}
                                    onClick={()=>tentarLetra(l)}
                                    disabled={usada || status !== "jogando"}
                                    className={`
                                    px-3 py-2 rounded text-sm
                                    transition
                                    ${usada
                                    ? correta
                                    ? "bg-green-500"
                                    : "bg-red-500"
                                    : "bg-orange-400 hover:bg-orange-500"}
                                    `}
                                >
                                    {l}
                                </button>

                            )

                        })}

                        </div>

                        {/* LETRAS USADAS */}

                        <div className="mt-6 text-center">

                        <p className="text-amber-700 text-sm mb-2">
                        Letras usadas
                        </p>

                        <p className="text-xs text-gray-800">
                        {letrasUsadas.join(", ")}
                        </p>

                        </div>

                        {/* RESULTADO */}

                        {status === "ganhou" &&(
                            <p className="mt-6 text-green-400 text-center">
                             VOCÊ VENCEU!
                            </p>
                        )}

                        {status === "perdeu" &&(
                        <p className="mt-6 text-red-400 text-center">
                         VOCÊ PERDEU! Palavra: {palavra}
                        </p>
                        )}

                        <button onClick={iniciarJogo}
                        className="mt-8 w-full bg-white font-bold text-amber-700 py-3 rounded-lg hover:bg-yellow-300"
                        >
                            REINICIAR
                        </button>

                        </div>

                </div>

            </div>
            
        </div>

    )
}