import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../config/assets";
import { business } from "../config/business";
import {
  MaskLines,
  SparkField,
  prefersReduced,
  scrollToEl,
  track,
  useParallax,
  useScramble,
  waLink,
} from "../lib/motion";
import { IconArrowRight, IconArrowUpRight, IconWhatsApp, Magnetic, Marquee } from "./ui";

/** Slideshow com as mídias reais do site oficial (fade + zoom lento) */
const HERO_SLIDES = [
  {
    src: assets.official.heroSparks,
    alt: "Produção Metal & Art — corte de metal com esmerilhadeira e faíscas",
  },
  {
    src: assets.official.heroWorkshop,
    alt: "Oficina Metal & Art — estrutura metálica em fabricação",
  },
];

function HeroSlideshow() {
  const reduced = prefersReduced();
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (reduced || HERO_SLIDES.length < 2) return;
    const t = window.setInterval(
      () => setIdx((i) => (i + 1) % HERO_SLIDES.length),
      5000
    );
    return () => window.clearInterval(t);
  }, [reduced]);
  return (
    <div className="absolute inset-0">
      {HERO_SLIDES.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={i === idx ? s.alt : ""}
          aria-hidden={i !== idx}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === idx ? "kenburns opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const imgRef = useParallax<HTMLDivElement>(55);
  const label = useScramble("SERRALHERIA SOB MEDIDA EM SÃO PAULO", 300);
  const [showCtas, setShowCtas] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setShowCtas(true), 900);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <section
        id="topo"
        className="relative flex min-h-svh flex-col overflow-hidden bg-coal-950"
        aria-label="Apresentação"
      >
        {/* camadas de fundo com parallax + slideshow oficial do site
            (mídias reais do cliente — fade + ken burns como no original) */}
        <div ref={imgRef} className="absolute inset-[-12%] will-change-transform">
          <HeroSlideshow />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-coal-950 via-coal-950/72 to-coal-950/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-coal-950 via-transparent to-coal-950/70" />
        <div className="blueprint-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_right,black,transparent_70%)]" />
        <SparkField density={26} />

        {/* conteúdo */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end px-5 pt-32 pb-16 md:px-8 md:pb-20">
          <p className="font-mono mb-6 min-h-[1.2em] text-[0.68rem] tracking-[0.3em] text-weld-400 uppercase">
            {label || "\u00A0"}
          </p>

          <h1 className="font-display max-w-[16ch] text-[clamp(3.1rem,9.5vw,8.75rem)] font-bold leading-[0.94] tracking-[0.005em] uppercase">
            <MaskLines
              delay={0.15}
              lines={[
                <span key="1" className="text-paper-100">
                  Metal <em className="text-ember-500 not-italic">sob medida.</em>
                </span>,
                <span key="2" className="text-stroke">
                  Segurança
                </span>,
                <span key="3" className="text-paper-100">
                  que <span className="text-weld-400">dura.</span>
                </span>,
              ]}
            />
          </h1>

          <div
            className="mt-8 flex flex-col gap-8 transition-all duration-700 md:flex-row md:items-end md:justify-between"
            style={{
              opacity: showCtas ? 1 : 0,
              transform: showCtas ? "translateY(0)" : "translateY(18px)",
            }}
          >
            <p className="max-w-xl text-base leading-relaxed text-steel-300 md:text-lg">
              Portões, grades, corrimãos, automação e estruturas metálicas com
              execução profissional para{" "}
              <strong className="font-medium text-paper-100">residências, condomínios e empresas</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Magnetic>
                <a
                  href={waLink(
                    business.whatsappDigits,
                    "Olá, Metal & Art! Vim pelo site e gostaria de solicitar um orçamento."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("cta_whatsapp_hero")}
                  className="btn-press bg-ember-500 hover:bg-weld-400 font-display group inline-flex items-center gap-3 px-7 py-4 text-lg font-bold tracking-[0.06em] text-coal-950 uppercase"
                >
                  <IconWhatsApp className="h-5 w-5" />
                  Solicitar orçamento no WhatsApp
                  <IconArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#projetos"
                  onClick={(e) => {
                    e.preventDefault();
                    track("cta_projetos_hero");
                    scrollToEl("#projetos", -72);
                  }}
                  className="btn-press font-display border-paper-100/35 hover:border-ember-500 hover:text-ember-400 inline-flex items-center gap-3 border px-7 py-4 text-lg tracking-[0.06em] text-paper-100 uppercase"
                >
                  Ver projetos realizados
                  <IconArrowRight className="h-5 w-5" />
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* rodapé do hero */}
        <div className="relative z-10 border-t border-paper-100/10">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-8">
            <p className="font-mono flex items-center gap-3 text-[0.62rem] tracking-[0.3em] text-steel-400 uppercase">
              <span className="relative inline-block h-8 w-px overflow-hidden bg-coal-600">
                <span className="absolute top-0 left-0 h-3 w-px animate-[marquee-y_1.6s_ease-in-out_infinite] bg-ember-500" />
              </span>
              Role para conhecer
            </p>
            <a
              href={waLink(business.whatsappDigits, "Olá, Metal & Art! Vim pelo site.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp_hero")}
              className="font-mono text-[0.68rem] tracking-[0.18em] text-steel-300 transition-colors hover:text-ember-400"
            >
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* letreiro de serviços */}
      <div className="border-y border-coal-700/70 bg-coal-900 py-3.5" aria-hidden="true">
        <Marquee
          className="font-display text-xl tracking-[0.06em] text-steel-300 uppercase"
          items={[
            "Portões sob medida",
            "Automação",
            "Reformas e reparos",
            "Grades de proteção",
            "Corrimãos",
            "Guarda-corpos",
            "Portas de enrolar",
            "Travas eletromagnéticas",
            "Estruturas metálicas",
          ]}
        />
      </div>

      <style>{`
        @keyframes marquee-y {
          0% { transform: translateY(-100%); }
          60%,100% { transform: translateY(400%); }
        }
      `}</style>
    </>
  );
}
