import { Diagram } from "./sub_components/about_section";

export function About() {
    return (
        <div className="w-full h-auto flex flex-col items-center mb-[10vh] drop-shadow-md">

            <div className="font-bold text-4xl mb-4">
              <h1>SOBRE MIM</h1>
            </div>

            <div className="text-gray-500 font-semibold text-sm text-center mb-4">
              <p>Através desses diagramas, você pode conhecer melhor minhas versões:</p>
              <p> pessoa, estudante e profissional </p>
            </div>

            <div className="w-full h-full bg-[linear-gradient(to_bottom,#FF7D20_20%,#FFAE00_50%,#FF883D_100%)] flex justify-center">
                    <Diagram/>
            </div>


        </div>
    );
}