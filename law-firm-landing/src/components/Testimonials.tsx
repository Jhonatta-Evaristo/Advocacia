import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendonça",
    role: "CEO, Grupo Mendonça",
    text: "A equipe Wagner & Associados foi fundamental na reestruturação jurídica do nosso grupo. Profissionalismo e resultados excepcionais em cada etapa do processo.",
    rating: 5,
  },
  {
    name: "Ana Beatriz Souza",
    role: "Empresária",
    text: "Após anos lutando por meus direitos trabalhistas, finalmente encontrei um escritório que me ouviu e lutou de verdade pelo meu caso. Ganhamos em todas as instâncias.",
    rating: 5,
  },
  {
    name: "Roberto Pinheiro",
    role: "Construtor Civil",
    text: "Regularizamos 12 imóveis com a assessoria do escritório. Processo rápido, transparente e com custo muito justo. Indico para todos.",
    rating: 5,
  },
  {
    name: "Márcia Lima",
    role: "Médica Autônoma",
    text: "Recuperei mais de R$ 80 mil em tributos pagos indevidamente. A expertise tributária da equipe é impressionante. Atendimento humanizado e resultados reais.",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll("[data-reveal]").forEach((child, i) => {
            setTimeout(() => {
              (child as HTMLElement).classList.add("opacity-100", "translate-y-0");
            }, i * 150);
          });
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="depoimentos" className="bg-onyx py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="mb-16" data-reveal>
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-outfit mb-3">Histórias Reais</p>
          <h2 className="font-cinzel text-white text-3xl md:text-5xl leading-tight max-w-lg">
            O que dizem nossos clientes
          </h2>
          <div className="w-12 h-px bg-gold mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              data-reveal
              className="border border-white/10 p-8 hover:border-gold/40 transition-colors duration-500 opacity-0 translate-y-6"
              style={{ transitionDuration: "600ms" }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="w-3 h-3 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/70 font-outfit text-sm leading-relaxed mb-8 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gold/20 border border-gold/30 flex items-center justify-center">
                  <span className="font-cinzel text-gold text-sm font-bold">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-cinzel text-white text-sm">{t.name}</p>
                  <p className="text-white/40 font-outfit text-xs tracking-widest uppercase mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
