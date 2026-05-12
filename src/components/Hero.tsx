import { useEffect, useRef } from "react";

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("opacity-100", "translate-y-0");
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-onyx">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#c5a880 1px, transparent 1px), linear-gradient(90deg, #c5a880 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_80%,rgba(197,168,128,0.12),transparent)]" />

      {/* Vertical gold lines */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block" />
      <div className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p
          className="text-gold text-xs tracking-[0.4em] uppercase font-outfit mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >

        </p>

        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="font-cinzel text-white text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-8 opacity-0 translate-y-6 transition-all duration-1000"
        >
          Defendemos o que{" "}
          <span className="relative inline-block">
            <span className="text-gold">mais importa</span>
            <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold/50" />
          </span>{" "}
          para você
        </h1>

        {/* Sub */}
        <p
          className="text-white/60 font-outfit text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          Soluções jurídicas estratégicas para pessoas físicas e empresas em todo o Brasil.
          Atendimento humanizado, resultados concretos.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          <a
            href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-onyx px-8 py-4 font-outfit font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300 w-full sm:w-auto"
          >
            Consulta Gratuita
          </a>
          <a
            href="#servicos"
            className="border border-white/30 text-white px-8 py-4 font-outfit text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300 w-full sm:w-auto"
          >
            Nossas Áreas
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-white/10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.9s" }}
        >
          {[
            { num: "20+", label: "Anos de Experiência" },
            { num: "4.800+", label: "Casos Resolvidos" },
            { num: "98%", label: "Clientes Satisfeitos" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-cinzel text-gold text-3xl md:text-4xl font-bold">{s.num}</p>
              <p className="text-white/50 text-xs tracking-widest uppercase font-outfit mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
}
