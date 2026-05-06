import { useEffect, useRef, useState } from "react";
import { Award, Users, Clock, Target, Camera } from "lucide-react";

const highlights = [
  { icon: Award, label: "Excelência Reconhecida", desc: "Premiados pelo IBDP e IAB/SP como referência em advocacia empresarial." },
  { icon: Users, label: "Equipe Especializada", desc: "15 advogados dedicados, cada um com mestrado ou especialização na sua área." },
  { icon: Clock, label: "Resposta Ágil", desc: "Retorno garantido em até 2 horas úteis. Seu caso não pode esperar." },
  { icon: Target, label: "Estratégia Personalizada", desc: "Desenvolvemos soluções jurídicas sob medida para cada cliente." },
];

// Change this to the actual lawyer photo path once available
const LAWYER_PHOTO = "/lawyer.png";

function LawyerPhoto() {
  const [src, setSrc] = useState(LAWYER_PHOTO);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full aspect-[3/4] max-w-sm mx-auto lg:mx-0">
      {/* Gold border frame */}
      <div className="absolute inset-0 border border-gold/30" />
      <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold/15 -z-10" />

      {/* Photo or placeholder */}
      {!error ? (
        <img
          src={src}
          alt="Dr. Pedro Wagner — Advogado"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover object-top transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      ) : null}

      {/* Placeholder shown while loading or on error */}
      {(!loaded || error) && (
        <div className="absolute inset-0 bg-white/5 flex flex-col items-center justify-center gap-4">
          <div className="w-20 h-20 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center">
            <Camera className="w-8 h-8 text-gold/60" />
          </div>
          <p className="text-white/30 font-outfit text-xs tracking-widest uppercase text-center px-4">
            {error ? "Adicione a foto do advogado em public/lawyer.png" : "Carregando..."}
          </p>
        </div>
      )}

      {/* Name card overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-onyx/90 via-onyx/40 to-transparent px-6 py-5">
        <p className="font-cinzel text-white text-base">Dr. Pedro Wagner</p>
        <p className="text-gold font-outfit text-xs tracking-widest uppercase mt-1">
          Fundador & Sócio-Diretor · OAB/SP 000.000
        </p>
      </div>
    </div>
  );
}

export function Sobre() {
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
            }, i * 120);
          });
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="bg-onyx py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section label */}
        <div data-reveal className="opacity-0 translate-y-6 mb-16" style={{ transition: "all 0.7s ease" }}>
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-outfit mb-3">Quem Somos</p>
          <h2 className="font-cinzel text-white text-3xl md:text-5xl leading-tight max-w-xl">
            Mais de duas décadas defendendo o que é seu
          </h2>
          <div className="w-12 h-px bg-gold mt-6" />
        </div>

        {/* Main content: photo + bio */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 mb-20 items-start">
          {/* Photo column */}
          <div data-reveal className="opacity-0 translate-y-6" style={{ transition: "all 0.8s ease" }}>
            <LawyerPhoto />
            <p className="text-white/30 font-outfit text-xs mt-5 text-center lg:text-left leading-relaxed">
              Para substituir a foto, coloque o arquivo em{" "}
              <code className="text-gold/60 bg-white/5 px-1">public/lawyer.png</code>
            </p>
          </div>

          {/* Bio column */}
          <div
            data-reveal
            className="opacity-0 translate-y-6 flex flex-col justify-center"
            style={{ transition: "all 0.8s ease 0.1s" }}
          >
            <p className="text-white/70 font-outfit text-base leading-relaxed mb-6">
              Fundado em 2003 pelo Dr. Pedro Wagner, o escritório Wagner & Associados nasceu com um 
              propósito claro: oferecer advocacia de alto nível com acesso real às pessoas. Ao longo 
              dos anos, construímos uma reputação sólida baseada em resultados concretos, ética 
              inabalável e comprometimento genuíno com cada cliente.
            </p>
            <p className="text-white/60 font-outfit text-base leading-relaxed mb-10">
              Com formação pela Universidade de São Paulo e especialização em Direito Empresarial pela 
              FGV, o Dr. Wagner lidera uma equipe de 15 advogados altamente qualificados, atendendo 
              clientes em todo o território nacional.
            </p>

            {/* Signature quote */}
            <blockquote className="border-l-2 border-gold pl-6">
              <p className="font-cinzel text-white/80 text-lg md:text-xl leading-relaxed italic">
                "A justiça não é apenas um direito — é uma conquista que exige estratégia, 
                dedicação e um parceiro jurídico de confiança."
              </p>
              <cite className="text-gold font-outfit text-xs tracking-widest uppercase mt-4 block not-italic">
                — Dr. Pedro Wagner, Fundador
              </cite>
            </blockquote>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div
                key={h.label}
                data-reveal
                className="bg-onyx p-8 opacity-0 translate-y-6 hover:bg-white/5 transition-colors duration-500"
                style={{ transition: "opacity 0.6s ease, transform 0.6s ease, background-color 0.5s ease" }}
              >
                <Icon className="w-5 h-5 text-gold mb-5" />
                <h3 className="font-cinzel text-white text-sm mb-3">{h.label}</h3>
                <p className="text-white/50 font-outfit text-xs leading-relaxed">{h.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
