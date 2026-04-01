import { Github, Linkedin, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer 
      style={{ background: "var(--container-color)" }} 
      className="w-full relative pt-16 pb-8 overflow-hidden text-white"
    >
      {/* Detalhe Decorativo */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-[80px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Coluna 1: Branding e Social */}
          <div className="flex flex-col space-y-4 text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight">
              Lettycia<span className="text-white/70">.dev</span>
            </h2>
            <p className="text-white/80 text-sm max-w-xs mx-auto md:mx-0 leading-relaxed">
              Transformando código em soluções digitais de alto impacto. 
              Vamos construir algo incrível juntos?
            </p>
            
            {/* Redes Sociais e CV unificados */}
            <div className="flex justify-center md:justify-start gap-4 pt-2">
              <a 
                href="https://github.com/LettyciaDev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-all border border-white/10 hover:scale-110 active:scale-95"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/lettycia-vitoria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-all border border-white/10 hover:scale-110 active:scale-95"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="/curriculo.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-all border border-white/10 hover:scale-110 active:scale-95"
                title="Download CV"
              >
                <FileText size={20} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Navegação</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors underline-offset-4">Sobre mim</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors underline-offset-4">Projetos</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-[10px] md:text-xs tracking-wide uppercase">
            © {new Date().getFullYear()} — Lettycia Vitória. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-[10px] mt-2 italic">
            Desenvolvido com Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}