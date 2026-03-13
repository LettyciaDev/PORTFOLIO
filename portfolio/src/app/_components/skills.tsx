import { SkillSection } from "./sub_components/skills_section";

export function Skills() {
    return (
         <div className="w-full h-auto mb-[10vh] drop-shadow-md">

            <div className="font-bold text-4xl text-center">
              <h1>HABILIDADES</h1>
            </div>

            <div className="w-full flex justify-center">
                <SkillSection />
            </div>
            

        </div>
    );
}