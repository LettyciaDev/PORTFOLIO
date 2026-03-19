export function Footer() {
    return (
        <div style={{ background: "var(--container-color" }} className="w-full h-auto relative pt-20 pb-10 overflow-hidden text-amber-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                        
                        {/* Coluna 1: Branding & Slogan */}
                        <div className="flex flex-col space-y-4 text-center md:text-left">
                            <h2 className="text-3xl font-bold bg-linear-to-r from-white to-amber-100 bg-clip-text text-transparent drop-shadow-sm">
                                Lettycia.Portfólio
                            </h2>
                            <p className="text-sm max-w-xs mx-auto md:mx-0">
                                Transformando código em soluções digitais de alto impacto. 
                                Vamos construir algo incrível juntos?
                            </p>
                        </div>

                        
                        {/* Coluna 3: Links Rápidos ou Newsletter */}
                        <div className="text-center md:text-right">
                            <h3 className="font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" >Sobre mim</a></li>
                                <li><a href="#" >Projetos</a></li>
                                <li><a href="#" >Contato</a></li>
                            </ul>
                        </div>
                        
                    </div>

                    {/* Linha de Copyright */}
                    <div className="mt-16 pt-8 border-t border-zinc-800 text-center">
                        <p className="text-zinc-600 text-xs">
                        © {new Date().getFullYear()} - Desenvolvido com <span className="text-amber-50">Next.js</span> e <span className="text-amber-50">Tailwind</span>.
                        </p>
                    </div>

                </div>
    
        </div>
    );
}