import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faJava, faReact, faJs, faGitAlt, faGithub, faFigma, faPython, faDocker 
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faPalette, faTasks } from '@fortawesome/free-solid-svg-icons';

export function SkillSection() {
  const skills = {
    frontend: [
      { icon: faReact, label: "React" },
      { icon: faJs, label: "JavaScript" },
      { icon: faFigma, label: "Figma" },
      { icon: faGitAlt, label: "Git" },
    ],
    backend: [
      { icon: faJava, label: "Java" },
      { icon: faPython, label: "Python" },
      { icon: faDatabase, label: "SQL" },
      { icon: faDocker, label: "Docker" },
      { icon: faCode, label: "C" },
      { icon: faGithub, label: "GitHub" },
    ],
  };

  const circleClass = `
    w-[5.5vh] h-[5.5vh] 
    rounded-xl 
    flex items-center justify-center 
    transition-all duration-300 
    hover:scale-110 hover:rotate-3
    backdrop-blur-sm
    border border-white/10
    bg-slate-800/50
    shadow-lg
  `;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto p-6 text-gray-500">
      
      <div className="flex flex-col space-y-4">
        <ul className="flex flex-wrap gap-3 px-2">
          {skills.frontend.map((skill) => (
            <li key={skill.label} className={circleClass} title={skill.label}>
              <FontAwesomeIcon icon={skill.icon} className="w-1/2 h-1/2 text-cyan-400" />
            </li>
          ))}
        </ul>
        <div className="group relative flex flex-col items-center p-8 shadow-2xl backdrop-blur-md border rounded-2xl border-cyan-400  hover: transition-all duration-500 overflow-hidden ">
          <div className="absolute -right-8 -top-8 w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl group-hover:bg-cyan-400/20 transition-all" />
          <div className="text-cyan-400 mb-4 transform group-hover:scale-110 transition-transform duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 className="text-xl font-mono font-bold border-r-4 border-cyan-400 pr-2 animate-pulse group-hover:animate-none">Front-end</h3>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <ul className="flex flex-wrap gap-3 px-2">
          {skills.backend.map((skill) => (
            <li key={skill.label} className={circleClass} title={skill.label}>
              <FontAwesomeIcon icon={skill.icon} className="w-1/2 h-1/2 text-emerald-400" />
            </li>
          ))}
        </ul>
        <div className="group relative flex flex-col items-center p-8 shadow-2xl backdrop-blur-md border rounded-2xl border-emerald-500 hover: transition-all duration-500 overflow-hidden">
          <div className="absolute -right-8 -top-8 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all" />
          <div className="relative w-14 h-14 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-10 h-10 text-emerald-500 animate-[spin_5s_linear_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <circle cx="12" cy="12" r="2" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 w-7 h-7 text-emerald-300 animate-[spin_3s_linear_infinite_reverse]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Back-end</h3>
        </div>
      </div>

      <div className="flex flex-col space-y-4 mt-0">
        <div className="h-[5.5vh] mb-5 flex items-center px-2">
            <li className={circleClass}>
              <FontAwesomeIcon icon={faPalette} className="w-1/2 h-1/2 text-fuchsia-700"/>
            </li>
        </div>
        <div className="group relative flex flex-col items-center p-8 shadow-2xl backdrop-blur-md border rounded-2xl border-pink-500 hover:transition-all duration-500 overflow-hidden">
          <div className="absolute -right-8 -top-8 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 transition-all" />
          <div className="flex space-x-[-15px] mb-6 group-hover:space-x-3 transition-all duration-500">
            <div className="w-10 h-10 rounded-full bg-pink-500 shadow-lg ring-4 ring-slate-900"></div>
            <div className="w-10 h-10 rounded-full bg-purple-500 shadow-lg ring-4 ring-slate-900"></div>
            <div className="w-10 h-10 rounded-full bg-indigo-500 shadow-lg ring-4 ring-slate-900"></div>
          </div>
          <h3 className="text-xl font-bold">Design</h3>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="h-[5.5vh] mb-5 flex items-center px-2">
              <li className={circleClass}>
              <FontAwesomeIcon icon={faTasks} className="w-1/2 h-1/2 text-amber-300" />
            </li>
        </div>
        <div className="group relative flex flex-col items-center p-8 shadow-2xl backdrop-blur-md border rounded-2xl border-amber-400 hover:border-amber-400 transition-all duration-500 overflow-hidden">
          <div className="absolute -right-8 -top-8 w-24 h-24 bg-amber-400/10 rounded-full blur-2xl group-hover:bg-amber-400/20 transition-all" />
          <div className="flex flex-col space-y-2 mb-6 w-12 items-center">
            <div className="w-full h-2 bg-slate-700 rounded-full group-hover:bg-amber-400 group-hover:translate-x-3 transition-all duration-300 delay-75"></div>
            <div className="w-full h-2 bg-slate-700 rounded-full group-hover:bg-amber-400 group-hover:translate-x-5 transition-all duration-300 delay-150"></div>
            <div className="w-full h-2 bg-slate-700 rounded-full group-hover:bg-amber-400 group-hover:translate-x-1 transition-all duration-300 delay-300"></div>
          </div>
          <h3 className="text-xl font-bold">Projetos</h3>
        </div>
      </div>
    </div>
  );
}