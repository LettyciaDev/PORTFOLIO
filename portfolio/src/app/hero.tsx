import Image from "next/image";

export function Hero() {
     return (
        <div className="relative flex flex-col items-center mb-[10vh]">

          <div className="absolute w-40 h-15 bottom-8 left-[5%] shadow-md rounded-lg flex flex-col justify-center ">
            <div className="w-25 h-2 ml-3 mb-2 bg-blue-600 shadow-md rounded-[5px]"></div>
            <div className="w-15 h-2 ml-3 bg-cyan-400 shadow-md rounded-[5px]"></div>
          </div>

           <div className="absolute w-40 h-15 top-0 left-[10%] shadow-md rounded-lg flex flex-col justify-center">
            <div className="w-25 h-2 ml-3 mb-2 bg-fuchsia-950 rounded-[5px]"></div>
            <div className="w-10 h-2 ml-3 mb-2 bg-indigo-400 rounded-[5px]"></div>
            <div className="w-10 h-2 ml-3 mb-2 bg-fuchsia-400 rounded-[5px]"></div>
          </div>

           <div className="absolute w-24 h-15 bottom-2 right-[10%] shadow-md rounded-lg flex flex-col justify-center">
            <div className="w-15 h-2 ml-3 mb-2 bg-amber-600 rounded-[5px]"></div>
            <div className="w-10 h-2 ml-3 mb-2 bg-amber-300 rounded-[5px]"></div>
          </div>

          <div className="w-2/3 rounded-[10px] shadow-md md:w-1/2 h-[40vh]">

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

            <div className="w-full flex flex-col items-center justify-center mt-10 mb-10 text-sm text-cyan-500 md:text-[22px]">
              <p className="w-3/4">
                 <span className="text-amber-400">&lt;h1&gt;</span> Olá, sou Lettycia Vitória  Sou <span className="text-fuchsia-700"> &lt; span &gt; </span> <span className="text-lime-500">Desenvolvedora Full-stack!</span><span className="text-fuchsia-700"> &lt; span &gt; </span> <span className="text-amber-400">&lt;h1&gt;</span>
              </p>
              <p className="w-3/4">
                <span className="text-amber-400">&lt;h2&gt;</span> Te convido à conhecer um pouco sobre mim e minha jornada no mundo da  <span className="text-fuchsia-700"> &lt; span &gt; </span> <span className="text-lime-500">programação</span> <span className="text-fuchsia-700"> &lt; span &gt; </span> <span className="text-amber-400">&lt;h2&gt;</span>
              </p>
            </div>

          </div>

        </div>
     );

}