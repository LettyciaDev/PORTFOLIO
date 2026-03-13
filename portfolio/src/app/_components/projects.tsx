export function Projects() {
    return (
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
    );
}