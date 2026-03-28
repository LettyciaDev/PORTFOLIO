import { Carousel } from './sub_components/carousel'
export function Projects() {
    return (
         <div className="w-full h-auto flex flex-col justify-center items-center mb-[10vh]">

          <div>
            <h1 className="font-bold text-4xl drop-shadow-md">PROJETOS</h1>
          </div>

         <Carousel/> 

        </div>
    );
}