import { useState, useEffect } from "react";
import { Scale } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-onyx/95 backdrop-blur-sm border-b border-gold/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <Scale className="w-5 h-5 text-gold transition-transform group-hover:rotate-12" />
          <span className="font-cinzel text-white text-sm md:text-base tracking-[0.25em] uppercase">
            Wagner & Associados
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/60 hover:text-gold text-[11px] tracking-[0.2em] uppercase font-outfit transition-all duration-300 hover:tracking-[0.25em]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="border border-gold/50 text-gold px-8 py-2.5 text-[11px] tracking-[0.2em] uppercase font-outfit hover:bg-gold hover:text-onyx transition-all duration-300"
          >
            Consulta Gratuita
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-onyx border-t border-gold/20 overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-gold text-xs tracking-widest uppercase font-outfit transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
