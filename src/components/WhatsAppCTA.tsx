import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20gratuita.";

export function WhatsAppCTA() {
  return (
    <>
      {/* Section CTA */}
      <section id="contato" className="bg-onyx py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-outfit mb-6">
            Pronto para Resolver?
          </p>
          <h2 className="font-cinzel text-white text-3xl md:text-5xl leading-tight mb-6">
            Fale conosco agora
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="text-white/60 font-outfit text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-12">
            Resposta em até 2 horas úteis. Atendimento personalizado, direto com um advogado.
            Sem burocracia, sem promessas vazias.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1eb556] text-white px-10 py-5 font-outfit font-semibold text-sm tracking-widest uppercase transition-colors duration-300 group"
          >
            <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Falar pelo WhatsApp
          </a>

          <p className="text-white/30 font-outfit text-xs mt-6 tracking-wider">
            Ou ligue: (11) 9999-9999 · atendimento@wagnerassociados.com.br
          </p>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1eb556] text-white flex items-center justify-center shadow-lg shadow-black/30 hover:scale-110 transition-all duration-300"
        style={{ borderRadius: "50%" }}
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </>
  );
}
