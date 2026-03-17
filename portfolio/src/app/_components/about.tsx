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

            <div   style={{ background: "var(--container-color" }} className="w-full h-full flex justify-center">
                    <Diagram/>
            </div>


        </div>
    );
}