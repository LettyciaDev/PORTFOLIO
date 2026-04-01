export function Diagram() {
    const classes = [
      {
        class: "Pessoa",
        atr1: "+ nome: Lettycia Vitória",
        atr2: "+ idade: 19",
        atr3: "+ apelido: Letty",
        method: "+ descricao(): Entusiasta da tecnologia movida por curiosidade intelectual e resiliente na resolução de problemas."
      },

      {
        class: "Estudante",
        atr1: "+ curso: Ciência da Computação",
        atr2: "+ período: 5º",
        atr3: "+ instituição: Unicap",
        method: "+ descricao(): Focada em Análise de Algoritmos e Redes de Computadores, explorando a integração de IA e práticas modernas de Desenvolvimento Web."
      },

      {
        class: "Dev-backend",
        atr1: "+ linguagens: Java, C, Python",
        atr2: "+ cargo: Estagiária",
        atr3: "+ empresa: Lunio",
        method: "+ descricao(): Atuando no ciclo de vida de APIs, focada em otimização de performance e integridade de dados no ecossistema backend."
      }
    ]
    
    

    return (
        <div className="w-full max-w-6xl mx-auto px-4 mt-20 mb-20">
      <div className="grid gap-12 justify-items-center items-start text-amber-50 md:grid-cols-3">
        
        {classes.map((clas, index) => (
          <div 
            key={clas.atr1} 
            className={`
              relative w-full max-w-sm h-auto pb-5 bg-[#b3b0b075]  backdrop-blur-md rounded-[14px] shadow-2xl border border-white/20
              ${index === 2 ? '' : 'after:content-["→"] after:absolute after:font-black after:text-amber-50 after:drop-shadow-lg'}
              after:-bottom-11.25 after:left-1/2 after:-translate-x-1/2 after:rotate-90 after:text-4xl
              
              md:after:top-1/2 md:after:-right-11.25 md:after:bottom-auto md:after:left-auto md:after:translate-x-0 md:after:-translate-y-1/2 md:after:rotate-0 md:after:text-5xl
            `}
          >
              <div className="h-[5vh] border-b border-amber-50/20 flex justify-center items-center bg-black/10 rounded-t-[14px]">
                <h1 className="font-bold text-lg tracking-wider uppercase">{clas.class}</h1>
              </div>

              <div className="m-5 flex flex-col gap-1">
                <ul className="text-sm font-light space-y-1">
                  <li>{clas.atr1}</li>
                  <li>{clas.atr2}</li>
                  <li>{clas.atr3}</li>
                </ul>
                
                <div className="mt-4 border-t border-amber-50/20 pt-3">
                  <p className="text-sm font-mono text-amber-100/80 italic">{clas.method}</p>
                </div>
              </div>

          </div>
        ))}

      </div>
    </div>
    );
}