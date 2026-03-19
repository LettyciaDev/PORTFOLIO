import Image from "next/image";

export function Hero() {
     return (
      <div className="relative flex flex-col items-center mb-[10vh]">


  <div className="absolute w-40 h-16 bottom-8 left-[5%] shadow-lg rounded-lg flex flex-col justify-center
    bg-white/10 backdrop-blur-md animate-float">
    <div className="w-24 h-2 ml-3 mb-2 bg-blue-500 rounded-md"></div>
    <div className="w-16 h-2 ml-3 bg-cyan-400 rounded-md"></div>
  </div>

 
  <div className="absolute w-40 h-16 top-0 left-[10%] shadow-lg rounded-lg flex flex-col justify-center
    bg-white/10 backdrop-blur-md animate-float delay-200">
    <div className="w-24 h-2 ml-3 mb-2 bg-fuchsia-700 rounded-md"></div>
    <div className="w-10 h-2 ml-3 mb-2 bg-indigo-400 rounded-md"></div>
    <div className="w-10 h-2 ml-3 bg-fuchsia-400 rounded-md"></div>
  </div>


  <div className="absolute w-24 h-16 bottom-2 right-[10%] shadow-lg rounded-lg flex flex-col justify-center
    bg-white/10 backdrop-blur-md animate-float delay-500">
    <div className="w-16 h-2 ml-3 mb-2 bg-amber-500 rounded-md"></div>
    <div className="w-10 h-2 ml-3 bg-amber-300 rounded-md"></div>
  </div>

  
  <div className="w-2/3 md:w-1/2 h-[40vh] rounded-xl shadow-2xl 
     backdrop-blur-md border border-white/10
    hover:scale-[1.01] transition-all duration-300">

    {/* HEADER */}
    <div className="w-full border-b border-gray-700">
      <div className="flex justify-between items-center mt-3 ml-4 mr-3">
        <ul className="flex gap-2">
          <li className="w-3 h-3 bg-green-400 rounded-full"></li>
          <li className="w-3 h-3 bg-red-500 rounded-full"></li>
          <li className="w-3 h-3 bg-yellow-400 rounded-full"></li>
        </ul>

        <Image src="/play.png" alt="run" width={14} height={14}/>
      </div>
    </div>

    {/* CONTEÚDO */}
    <div className="w-full flex flex-col items-center justify-center mt-10 mb-10 text-sm md:text-lg font-mono text-green-400">

      <p className="w-3/4 leading-relaxed">
        <span className="text-orange-400">&lt;h1&gt;</span> 
        Olá, sou Lettycia Vitória, sou 
        <span className="text-pink-500"> &lt;span&gt; </span> 
        <span className="text-lime-400">Desenvolvedora Full-stack!</span>
        <span className="text-pink-500"> &lt;/span&gt; </span> 
        <span className="text-orange-400">&lt;/h1&gt;</span>
      </p>

      <p className="w-3/4 leading-relaxed mt-4">
        <span className="text-orange-400">&lt;h2&gt;</span> 
        Te convido a conhecer minha jornada na 
        <span className="text-pink-500"> &lt;span&gt; </span> 
        <span className="text-lime-400">programação</span> 
        <span className="text-pink-500"> &lt;/span&gt; </span> 
        <span className="text-orange-400">&lt;/h2&gt;</span>
      </p>

      {/* Cursor piscando */}
      <span className="mt-2 w-2 h-5 bg-green-400 animate-pulse"></span>

    </div>
  </div>
</div>
     );

}