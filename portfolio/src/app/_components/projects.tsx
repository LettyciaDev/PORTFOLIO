import { Carousel } from './sub_components/carousel'
export function Projects() {
    return (
         <div className="w-full h-auto flex flex-col justify-center items-center mb-[10vh]">

          <div>
            <h1 className="font-bold text-4xl drop-shadow-md">PROJETOS</h1>
          </div>

          <div style={{ background: "var(--bg-second )" }} className="w-full h-[60vh] flex flex-col justify-center items-center">

              <Carousel/> 

          </div>

        </div>
    );
}