export function Diagram() {
    const classes = [
            {
              class: "Pessoa", 
              atr1: "+ nome: Lettycia Vitória", 
              atr2: "+ idade: 19",
              atr3: "+ apelido: Lele",
              method: "+ descricao(): Me chamo Lettycia Vitória, entusiata da tecnologia e sempre disponível a aprender algo novo",
            }, 

            {
              class: "Estudante", 
              atr1: "+ curso: Ciência da Computação", 
              atr2: "+ período: 5º",
              atr3: "+ instituição: Unicap",
              method: "+ descricao():  Atualmente, aprendendo conceitos mais completos para o desenvolvimento de uma aplicação."
            },

            {
              class: "Dev-backend", 
              atr1: "+ linguagens: Java, C, Python", 
              atr2: "+ cargo: Estagiária",
              atr3: "+ empresa: Lunio",
              method: "+ descricao(): Atualmente atuo como estagiária na área de desenvolvimento backend"
            }
       ]
    
    const boxAtr = "w-[25vh] h-[28vh] bg-[#F8F8F875] rounded-4xl shadow-md";
    const boxTitle = "h-[3vh] border-b-2 border-be-amber-50 text-center";

    return (
        <div className="w-2/3 grid gap-2 justify-items-center mt-20 mb-20 text-amber-50 md:grid-cols-3">
            {
                classes.map((clas) => (
                    <div className="w-auto h-auto pb-5 bg-[#F8F8F875] rounded-4xl shadow-md mb-10">

                    <div className="h-[4vh] border-b-2 border-be-amber-50 flex justify-center items-center">
                       <h1 className="mt-3 font-bold text-[16px]">{clas.class}</h1>
                    </div>

                    <div className="m-5 flex flex-col gap-1">
                      <ul className="text-[12px]">
                        <li>{clas.atr1}</li>
                        <li>{clas.atr2}</li>
                        <li>{clas.atr3}</li>
                        <li className="mt-2 border-t-2">{clas.method}</li>
                      </ul>
                    </div>

                  </div>

                ))}

        </div>
    );
}