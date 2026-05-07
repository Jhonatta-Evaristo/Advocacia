import { useEffect, useRef } from "react";
import { Briefcase, Users, Building2, FileText, Shield, Landmark } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Direito Empresarial",
    desc: "Contratos, sociedades, fusões e aquisições. Protegemos e estruturamos seu negócio juridicamente.",
  },
  {
    icon: Users,
    title: "Direito Trabalhista",
    desc: "Defesa de empresas e empregados em demandas trabalhistas, rescisões e auditorias preventivas.",
  },
  {
    icon: Building2,
    title: "Direito Imobiliário",
    desc: "Compra, venda, locação e regularização de imóveis residenciais e comerciais em todo o Brasil.",
  },
  {
    icon: Shield,
    title: "Direito do Consumidor",
    desc: "Proteção dos seus direitos frente a fornecedores, planos de saúde e instituições financeiras.",
  },
  {
    icon: FileText,
    title: "Direito Civil",
    desc: "Inventários, divórcios, pensão alimentícia, guarda de filhos e responsabilidade civil.",
  },
  {
    icon: Landmark,
    title: "Direito Tributário",
    desc: "Planejamento fiscal, defesa em autuações fiscais e recuperação de tributos pagos indevidamente.",
  },
];

function useReveal() {
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
            }, i * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export function Services() {
  const ref = useReveal();

  return (
    <section id="servicos" className="bg-parchment py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="mb-16" data-reveal>
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-outfit mb-3">Expertise Jurídica</p>
          <h2 className="font-cinzel text-onyx text-3xl md:text-5xl leading-tight max-w-lg">
            Áreas de Atuação
          </h2>
          <div className="w-12 h-px bg-gold mt-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-onyx/10">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                data-reveal
                className="bg-parchment p-8 group hover:bg-onyx transition-colors duration-500 opacity-0 translate-y-6 transition-all"
                style={{ transitionDuration: "600ms" }}
              >
                <Icon className="w-6 h-6 text-gold mb-5 group-hover:text-gold transition-colors" />
                <h3 className="font-cinzel text-onyx group-hover:text-white text-base mb-3 transition-colors duration-500">
                  {s.title}
                </h3>
                <p className="text-onyx/60 group-hover:text-white/60 font-outfit text-sm leading-relaxed transition-colors duration-500">
                  {s.desc}
                </p>
                <div className="mt-6 w-0 group-hover:w-8 h-px bg-gold transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
