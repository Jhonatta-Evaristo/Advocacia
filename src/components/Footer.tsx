import { Scale } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-onyx border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-gold" />
          <span className="font-cinzel text-white text-xs tracking-[0.2em] uppercase">Wagner & Associados</span>
        </div>
        <p className="text-white/30 font-outfit text-xs tracking-wider text-center">
          OAB/SP 000.000 · © {year} Wagner & Associados Advogados. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          {["Política de Privacidade", "Termos de Uso"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-white/30 hover:text-gold text-xs font-outfit tracking-wider transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
