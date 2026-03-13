import Image from "next/image";

export function SkillSection() {
  // 1. Centralizamos os dados para facilitar mudanças futuras
  const skills = {
    frontend: [
      { src: "/react.png", alt: "React" },
      { src: "/javascript.png", alt: "JavaScript" },
      { src: "/css.png", alt: "CSS" },
      { src: "/java.png", alt: "Java" },
    ],
    backend: [
      { src: "/java.png", alt: "Java" },
      { src: "/python.png", alt: "Python" },
      { src: "/sql.png", alt: "SQL" },
      { src: "/docker.png", alt: "Docker" },
    ],
  };

  // 2. Criamos uma classe base para os círculos para não repetir o gradiente gigante
  const circleClass = "w-[5vh] h-[5vh] rounded-full shadow-md flex items-center justify-center transition-transform hover:scale-110";
  const frontGradient = "bg-[linear-gradient(to_bottom,#D0EEF0_0%,#D0EEF0_50%,#DADADA_100%)]";
  const backBg = "bg-[#F8F8F875]";

  return (
    <div className="grid md:grid-cols-2 w-3/4">
      {/* SEÇÃO FRONT-END */}
      <div className="flex flex-col mt-20">

        <div className="ml-5">
          
          <ul className="flex gap-4 mb-5">
            {skills.frontend.map((skill) => (
              <li key={skill.alt} className={`${circleClass} ${frontGradient}`}>
                <Image 
                  src={skill.src} 
                  alt={skill.alt} 
                  width={50} 
                  height={50} 
                  className="w-3/4 h-3/4 object-contain"
                />
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-bold">Front-end</h2>

        </div>

        <div className="flex justify-center mt-4">
          <Image src="/frontend.png" alt="Ilustração Frontend" width={320} height={320} className="w-full h-auto md:w-2/3" priority />
        </div>
        
      </div>

      {/* SEÇÃO BACK-END */}
      <div className="flex flex-col mt-20">

        <div className="ml-5">

          <ul className="flex gap-4 mb-5">
            {skills.backend.map((skill) => (
              <li key={skill.alt} className={`${circleClass} ${backBg}`}>
                <Image 
                  src={skill.src} 
                  alt={skill.alt} 
                  width={50} 
                  height={50} 
                  className="w-3/4 h-3/4 object-contain"
                />
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-bold">Back-end</h2>

        </div>

        <div className="flex justify-center mt-4">
          <Image src="/backend.png" alt="Ilustração Backend" width={350} height={350} className="w-full h-auto md:w-2/3" priority />
        </div>

      </div>

    </div>
  );
}