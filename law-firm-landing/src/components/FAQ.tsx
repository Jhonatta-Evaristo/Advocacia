import { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Como funciona a consulta gratuita?",
    a: "A consulta gratuita dura até 30 minutos e pode ser realizada presencialmente, por telefone ou videoconferência. Analisamos seu caso, tiramos dúvidas e apresentamos as melhores estratégias jurídicas disponíveis para a sua situação.",
  },
  {
    q: "Quais são os honorários do escritório?",
    a: "Os honorários variam conforme a complexidade e a área do caso. Trabalhamos com tabela OAB e também com honorários de êxito em casos específicos. Apresentamos todos os valores com total transparência durante a consulta.",
  },
  {
    q: "O escritório atende em todo o Brasil?",
    a: "Sim. Temos estrutura para atender clientes de todo o território nacional, com parcerias em todos os estados. O atendimento pode ser feito de forma remota, facilitando o acesso independente da sua localização.",
  },
  {
    q: "Quanto tempo dura um processo judicial?",
    a: "O prazo depende da complexidade do caso e da instância em que tramita. Processos simples podem ser resolvidos em meses, enquanto casos complexos podem levar anos. Antes de qualquer ação, analisamos as chances reais e os prazos estimados.",
  },
  {
    q: "O escritório atua em acordos extrajudiciais?",
    a: "Sim, e muitas vezes essa é a solução mais eficiente. Temos expertise em negociações e mediações que resolvem conflitos com muito mais rapidez e custo reduzido comparados a processos judiciais.",
  },
  {
    q: "Como acompanho meu processo?",
    a: "Oferecemos acesso a um portal do cliente onde você pode acompanhar todas as movimentações em tempo real, além de relatórios periódicos por e-mail e contato direto com o advogado responsável pelo seu caso.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
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
            }, i * 80);
          });
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" className="bg-parchment py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="mb-16" data-reveal>
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-outfit mb-3">Dúvidas Frequentes</p>
          <h2 className="font-cinzel text-onyx text-3xl md:text-5xl leading-tight">FAQ</h2>
          <div className="w-12 h-px bg-gold mt-6" />
        </div>

        {/* Items */}
        <div className="divide-y divide-onyx/10">
          {faqs.map((item, i) => (
            <div
              key={i}
              data-reveal
              className="opacity-0 translate-y-4"
              style={{ transitionDuration: "500ms" }}
            >
              <button
                className="w-full flex items-start justify-between gap-4 py-6 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-cinzel text-onyx text-sm md:text-base group-hover:text-gold transition-colors duration-300">
                  {item.q}
                </span>
                <span className="shrink-0 mt-0.5 text-gold">
                  {open === i ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  open === i ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-onyx/60 font-outfit text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
