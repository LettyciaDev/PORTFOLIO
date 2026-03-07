import "./globals.css"

import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex justify-around m-10">
          <div>modo</div>
          <nav>
            <ul className="flex gap-5 drop-shadow-md">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>PROJECTS</li>
              <li>GAME</li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-center mb-[10vh]">

          <div className="w-2/3 rounded-[10px] shadow-md">

            <div className="w-full border-b-2 border-b-gray-300">
              <div className="flex justify-between mt-5 ml-5">
                <ul className="flex gap-1">
                    <li className="w-2 h-2 bg-[#20FF3A] rounded-full"></li>
                    <li className="w-2 h-2 bg-[#FF0000] rounded-full"></li>
                    <li className="w-2 h-2 bg-[#FFF600] rounded-full"></li>
                </ul>
              
               <Image src="/play.png" alt="run" width={15} height={15} className="mb-2 mr-2"/>
              </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center mt-10 mb-10 text-cyan-500">
              <p className="w-3/4">
                 <span className="text-amber-400">&lt;h1&gt;</span> Olá, sou Lettycia Vitória  Sou <span className="text-fuchsia-700"> &lt; span &gt; </span> <span className="text-lime-500">Desenvolvedora Full-stack!</span><span className="text-fuchsia-700"> &lt; span &gt; </span> <span className="text-amber-400">&lt;h1&gt;</span>
              </p>
              <p className="w-3/4">
                <span className="text-amber-400">&lt;h2&gt;</span> Te convido à conhecer um pouco sobre mim e minha jornada no mundo da  <span className="text-fuchsia-700"> &lt; span &gt; </span> <span className="text-lime-500">programação</span> <span className="text-fuchsia-700"> &lt; span &gt; </span> <span className="text-amber-400">&lt;h2&gt;</span>
              </p>
            </div>

          </div>

        </div>

          {/* sobre mim */}
        <div className="w-full h-auto flex flex-col items-center mb-[10vh] drop-shadow-md">

            <div className="font-bold text-4xl mb-4">
              <h1>SOBRE MIM</h1>
            </div>

            <div className="text-black font-semibold text-sm text-center mb-4">
              <p>Através desses diagramas, você pode conhecer melhor minhas versões:</p>
              <p> pessoa, estudante e profissional </p>
            </div>

            <div className="w-full h-full bg-[linear-gradient(to_bottom,#FF7D20_20%,#FFAE00_50%,#FF883D_100%)]">

                <div className="grid gap-2 justify-center items-center mt-20 mb-20 text-amber-50">

                  <div className="w-[25vh] h-[28vh] bg-[#F8F8F875] rounded-4xl shadow-md">

                    <div className="h-[3vh] border-b-2 border-be-amber-50 text-center">
                       <h1 className="mt-2.5 font-bold text-sm">Pessoa</h1>
                    </div>

                    <div className="m-5 flex flex-col gap-3">
                      <ul>
                        <li>Criativa</li>
                        <li>Dedicada</li>
                        <li>Proativa</li>
                        <li>Motivadora</li>
                      </ul>
                    </div>

                  </div>

                  <div className="w-[25vh] h-[28vh] bg-[#F8F8F875] rounded-4xl shadow-md">
                      <div className="">
                       <h1>Pessoa</h1>
                    </div>
                    <div>
                      <ul>
                        <li>Criativa</li>
                        <li>Dedicada</li>
                        <li>Proativa</li>
                        <li>Motivadora</li>
                      </ul>
                    </div>
                  </div>

                  <div className="w-[25vh] h-[28vh] bg-[#F8F8F875] rounded-4xl shadow-md">
                      <div className="">
                       <h1>Pessoa</h1>
                    </div>
                    <div>
                      <ul>
                        <li>Criativa</li>
                        <li>Dedicada</li>
                        <li>Proativa</li>
                        <li>Motivadora</li>
                      </ul>
                    </div>
                  </div>

                </div>
            </div>


        </div>


        {/* Habilidades */}
        <div className="w-full h-auto flex flex-col mb-[10vh] drop-shadow-md">

            <div className="font-bold text-4xl text-center">
              <h1>HABILIDADES</h1>
            </div>

            <div className="flex flex-col mt-20">

              <div className="ml-5">
                <ul className="flex gap-4 mb-5">
                  <li>
                    <Image className="w-[5vh] h-[5vh] rounded-full object-cover shadow-md bg-[linear-gradient(to_bottom,#D0EEF0_0%,#D0EEF0_50%,#DADADA_100%)]" src="/react.png" alt="react" width={50} height={50}/>
                  </li>
                  <li>
                    <Image className="w-[5vh] h-[5vh] rounded-full object-cover shadow-md bg-[linear-gradient(to_bottom,#D0EEF0_0%,#D0EEF0_50%,#DADADA_100%)]" src="/javascript.png" alt="javascript" width={50} height={50}/>
                  </li>
                  <li>
                    <Image className="w-[5vh] h-[5vh] rounded-full object-cover shadow-md bg-[linear-gradient(to_bottom,#D0EEF0_0%,#D0EEF0_50%,#DADADA_100%)]" src="/css.png" alt="java" width={50} height={50}/>
                  </li>
                  <li>
                    <Image className="w-[5vh] h-[5vh] rounded-full object-cover shadow-md bg-[linear-gradient(to_bottom,#D0EEF0_0%,#D0EEF0_50%,#DADADA_100%)]" src="/java.png" alt="java" width={50} height={50}/>
                  </li>
                </ul>

                <h1 className="font-bold">Front-end</h1>
              </div>

              <div className="flex justify-center">
                <Image src="/frontend.png" alt="frontend" width={270} height={270}/>
              </div>

            </div>

            <div className="flex flex-col mt-20">
              
              <div className="ml-5">

                  <ul className="flex gap-4 mb-5">
                    <li>
                      <Image className="w-[5vh] h-[5vh] rounded-full object-cover shadow-md bg-[linear-gradient(to_bottom,#D0EEF0_0%,#D0EEF0_50%,#DADADA_100%)]" src="/java.png" alt="java" width={50} height={50}/>
                    </li>
                    <li>
                      <Image className="w-[5vh] h-[5vh] rounded-full object-cover shadow-md bg-[linear-gradient(to_bottom,#D0EEF0_0%,#D0EEF0_50%,#DADADA_100%)]" src="/python.png" alt="python" width={50} height={50}/>
                    </li>
                    <li>
                      <Image className="w-[5vh] h-[5vh] rounded-full object-cover shadow-md bg-[linear-gradient(to_bottom,#D0EEF0_0%,#D0EEF0_50%,#DADADA_100%)]" src="/sql.png" alt="sql" width={25} height={25}/>
                    </li>
                    <li>
                      <Image className="w-[5vh] h-[5vh] rounded-full object-cover shadow-md bg-[linear-gradient(to_bottom,#D0EEF0_0%,#D0EEF0_50%,#DADADA_100%)]" src="/docker.png" alt="docker" width={50} height={50}/>
                    </li>
                  </ul>

                  <h1 className="font-bold">Back-end</h1>

              </div>

              <div className="flex justify-center">
                  <Image src="/backend.png" alt="backend" width={270} height={270}/>
              </div>

           </div>
          

        </div>

        {/* Projetos */}
        <div className="w-full h-auto flex flex-col justify-center items-center mb-[10vh]">

          <div>
            <h1 className="font-bold text-4xl drop-shadow-md">PROJETOS</h1>
          </div>

          <div className="w-full h-[60vh] bg-[#F2F2F2] flex flex-col justify-center items-center">

                <div className="relative w-3/4 h-[25vh] max-w-md">
                      
                      {/* Aba mais profunda (menor e mais escura) */}
                      <div className="absolute top-0 right-14 w-[70%] h-10 bg-[#E2D3CA] rounded-[25px] opacity-80"></div>
                      
                      {/* Aba intermediária (um pouco maior e mais clara) */}
                      <div className="absolute top-3 right-8 w-[85%] h-10 bg-[#CAC5C2] rounded-[25px] opacity-85"></div>

                      <div className="absolute mt-8 w-full h-full bg-orange-600 rounded-[25px] shadow-md">
                        <h1>MUSICAP</h1>
                      </div>
                </div>

                <div>
                  <h1>slide</h1> 
                </div>

          </div>

        </div>

        <div className="w-full h-auto relative pt-20 pb-10 overflow-hidden bg-linear-to-t from-orange-600 to-orange-400 text-amber-50">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px opacity-50" />
            
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                
                {/* Coluna 1: Branding & Slogan */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <h2 className="text-3xl font-bold bg-linear-to-r from-white to-amber-100 bg-clip-text text-transparent drop-shadow-sm">
                    Lettycia.Portfólio
                  </h2>
                  <p className="text-sm max-w-xs mx-auto md:mx-0">
                    Transformando código em soluções digitais de alto impacto. 
                    Vamos construir algo incrível juntos?
                  </p>
                </div>

                {/* Coluna 2: Redes Sociais com Efeito Hover */}
                <div className="flex justify-center space-x-6">
                </div>

                {/* Coluna 3: Links Rápidos ou Newsletter */}
                <div className="text-center md:text-right">
                  <h3 className="font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" >Sobre mim</a></li>
                    <li><a href="#" >Projetos</a></li>
                    <li><a href="#" >Contato</a></li>
                  </ul>
                </div>
              </div>

              {/* Linha de Copyright */}
              <div className="mt-16 pt-8 border-t border-zinc-800 text-center">
                <p className="text-zinc-600 text-xs">
                  © {new Date().getFullYear()} - Desenvolvido com <span className="text-amber-50">Next.js</span> e <span className="text-amber-50">Tailwind</span>.
                </p>
              </div>
            </div>

          
        </div>
    </div>
     
        

  );
}
