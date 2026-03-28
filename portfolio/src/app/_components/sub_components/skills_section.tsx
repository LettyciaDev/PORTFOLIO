import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faJava, 
  faReact, 
  faJs, 
  faGitAlt, 
  faGithub,  
  faFigma, 
  faPython, 
  faDocker 
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';

export function SkillSection() {
  // 1. Mapeamos os ícones importados para facilitar o uso no loop
  const skills = {
    frontend: [
      { icon: faReact, label: "React"},
      { icon: faJs, label: "JavaScript"},
      { icon: faFigma, label: "Figma"},
      { icon: faGitAlt, label: "Git"},
    ],
    backend: [
      { icon: faJava, label: "Java"},
      { icon: faPython, label: "Python"},
      { icon: faDatabase, label: "SQL"},
      { icon: faDocker, label: "Docker"},
      { icon: faCode, label: "C"},
      { icon: faGithub, label: "GitHub"},
    ],
  };

 const circleClass = `
    w-[5.5vh] h-[5.5vh] 
    rounded-xl 
    flex items-center justify-center 
    transition-all duration-300 
    hover:scale-110 hover:rotate-3
    backdrop-blur-sm
    border border-white/20
    shadow-[0_4px_10px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.5)]
  `;

  const bg = "bg-gray-500"; 
  

  return (
    <div className="grid md:grid-cols-2 w-3/4">
      {/* SEÇÃO FRONT-END */}
      <div className="flex flex-col mt-20">
        <div className="ml-5">
          <ul className="flex flex-wrap gap-4 mb-5">
            {skills.frontend.map((skill) => (
              <li key={skill.label} className={`${circleClass} ${bg}`} title={skill.label}>
                <FontAwesomeIcon 
                  icon={skill.icon} 
                  className="w-3/5 h-3/5 text-white" 
                />
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-bold">Front-end</h2>
        </div>

        <div className="flex justify-center mt-4">
          <Image src="/front.png" alt="Ilustração Frontend" width={320} height={320} className="w-full h-auto md:w-2/3" priority />
        </div>
      </div>

      {/* SEÇÃO BACK-END */}
      <div className="flex flex-col mt-20">
        <div className="ml-5">
          <ul className="flex flex-wrap gap-4 mb-5">
            {skills.backend.map((skill) => (
              <li key={skill.label} className={`${circleClass} ${bg}`} title={skill.label}>
                <FontAwesomeIcon 
                  icon={skill.icon} 
                  className="w-3/5 h-3/5 text-white" 
                />
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-bold">Back-end</h2>
        </div>

        <div className="flex justify-center mt-4">
          <Image src="/back.png" alt="Ilustração Backend" width={350} height={350} className="w-full h-auto md:w-2/3" priority />
        </div>
      </div>
    </div>
  );
}