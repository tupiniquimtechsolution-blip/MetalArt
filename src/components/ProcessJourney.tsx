import { useEffect, useRef, useState, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { assets } from "../config/assets";
import {
  MaskLines,
  cn,
  prefersReduced,
  track,
  useParallax,
} from "../lib/motion";
import { IconArrowRight, SectionTag } from "./ui";

gsap.registerPlugin(ScrollTrigger);

const PHASES = [
  { n: "01", key: "METAL", title: "Matéria-prima" },
  { n: "02", key: "MEDIÇÃO", title: "Medição em campo" },
  { n: "03", key: "PROJETO", title: "Desenho técnico" },
  { n: "04", key: "CORTE", title: "Corte dos perfis" },
  { n: "05", key: "SOLDA", title: "Solda e montagem" },
  { n: "06", key: "ACABAMENTO", title: "Tratamento e pintura" },
  { n: "07", key: "INSTALAÇÃO", title: "Instalação no local" },
  { n: "08", key: "SOLUÇÃO", title: "Projeto concluído" },
];

/* Desenho técnico de um portão deslizante (SVG com pathLength=1) */
function TechDrawing({ className }: { className?: string }) {
  const d = { fill: "none", pathLength: 1 };
  return (
    <svg viewBox="0 0 640 420" className={cn("draw-svg h-full w-full", className)} aria-hidden="true">
      {/* quadro */}
      <rect x="70" y="60" width="500" height="280" stroke="currentColor" strokeWidth="1.6" {...d} />
      {/* barras verticais */}
      {[130, 190, 250, 310, 370, 430, 490].map((x) => (
        <line key={x} x1={x} y1="76" x2={x} y2="324" stroke="currentColor" strokeWidth="1" {...d} />
      ))}
      {/* travessas */}
      <line x1="70" y1="120" x2="570" y2="120" stroke="currentColor" strokeWidth="1" {...d} />
      <line x1="70" y1="280" x2="570" y2="280" stroke="currentColor" strokeWidth="1" {...d} />
      {/* diagonal estrutural */}
      <line x1="70" y1="340" x2="570" y2="60" stroke="currentColor" strokeWidth="0.8" strokeDasharray="0.02 0.02" {...d} />
      {/* trilho + roldanas */}
      <line x1="40" y1="352" x2="600" y2="352" stroke="currentColor" strokeWidth="2" {...d} />
      <circle cx="150" cy="362" r="9" stroke="currentColor" strokeWidth="1.2" {...d} />
      <circle cx="490" cy="362" r="9" stroke="currentColor" strokeWidth="1.2" {...d} />
      <circle cx="150" cy="362" r="2.5" stroke="currentColor" strokeWidth="1" {...d} />
      <circle cx="490" cy="362" r="2.5" stroke="currentColor" strokeWidth="1" {...d} />
      {/* cota horizontal */}
      <line x1="70" y1="395" x2="570" y2="395" stroke="currentColor" strokeWidth="0.8" {...d} />
      <line x1="70" y1="388" x2="70" y2="402" stroke="currentColor" strokeWidth="0.8" {...d} />
      <line x1="570" y1="388" x2="570" y2="402" stroke="currentColor" strokeWidth="0.8" {...d} />
      <text x="320" y="412" textAnchor="middle" fontSize="13" fill="currentColor" fontFamily="IBM Plex Mono, monospace">
        VÃO 3.200 mm
      </text>
      {/* cota vertical */}
      <line x1="40" y1="60" x2="40" y2="340" stroke="currentColor" strokeWidth="0.8" {...d} />
      <line x1="33" y1="60" x2="47" y2="60" stroke="currentColor" strokeWidth="0.8" {...d} />
      <line x1="33" y1="340" x2="47" y2="340" stroke="currentColor" strokeWidth="0.8" {...d} />
      <text x="26" y="205" textAnchor="middle" fontSize="13" fill="currentColor" fontFamily="IBM Plex Mono, monospace" transform="rotate(-90 26 205)">
        ALTURA 2.100 mm
      </text>
      {/* ângulo */}
      <path d="M 570 100 A 40 40 0 0 0 530 60" stroke="currentColor" strokeWidth="0.8" {...d} />
      <text x="545" y="88" fontSize="11" fill="currentColor" fontFamily="IBM Plex Mono, monospace">
        90°
      </text>
      {/* selo */}
      <rect x="470" y="16" width="150" height="30" stroke="currentColor" strokeWidth="0.8" {...d} />
      <text x="545" y="36" textAnchor="middle" fontSize="11" fill="currentColor" fontFamily="IBM Plex Mono, monospace">
        METAL &amp; ART — PR-01
      </text>
    </svg>
  );
}

function Frame({
  children,
  caption,
  className,
}: {
  children: ReactNode;
  caption?: string;
  className?: string;
}) {
  const par = useParallax<HTMLDivElement>(24);
  return (
    <figure className={cn("relative", className)}>
      <div className="img-zoom border-coal-600 relative overflow-hidden border">
        <div ref={par} className="h-[112%] w-full will-change-transform">{children}</div>
      </div>
      {caption && (
        <figcaption className="font-mono mt-2 text-[0.62rem] tracking-[0.22em] text-steel-500 uppercase">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function ProcessJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const blocksRef = useRef<Array<HTMLDivElement | null>>([]);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      blocksRef.current.forEach((block, i) => {
        if (!block) return;
        ScrollTrigger.create({
          trigger: block,
          start: "top 62%",
          end: "bottom 62%",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });

      // desenho técnico: traçado dos traços conforme o scroll
      const draws = document.querySelectorAll<SVGSVGElement>(".draw-svg");
      draws.forEach((svg) => {
        const paths = svg.querySelectorAll("[stroke]");
        gsap.set(paths, { strokeDasharray: 1, strokeDashoffset: 1 });
        gsap.to(paths, {
          strokeDashoffset: 0,
          duration: 1,
          stagger: 0.045,
          ease: "none",
          scrollTrigger: { trigger: svg, start: "top 82%", end: "center 45%", scrub: 0.5 },
        });
      });

      // transição desenho -> fotografia real
      const photo = document.querySelector("#reveal-photo");
      if (photo) {
        gsap.fromTo(
          photo,
          { opacity: 0, scale: 1.06 },
          {
            opacity: 1,
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: photo, start: "top 75%", end: "top 30%", scrub: 0.6 },
          }
        );
      }
    }, sectionRef);

    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / total));
      setProgress(p);
    };
    if (!prefersReduced()) {
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    return () => {
      ctx.revert();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const phase = PHASES[active];

  return (
    <section id="processo" ref={sectionRef} className="blueprint-grid relative bg-coal-950 py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <SectionTag index="01" label="Do metal à solução" />
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display max-w-[18ch] text-[clamp(2.4rem,6vw,5rem)] leading-[0.96] uppercase">
            <MaskLines
              lines={[
                <span key="1" className="text-paper-100">O processo mora</span>,
                <span key="2" className="text-paper-100">
                  dentro do <em className="text-ember-500 not-italic">scroll</em>.
                </span>,
              ]}
            />
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-steel-400 md:text-right">
            Cada obra segue o mesmo caminho: matéria-prima, medição, projeto,
            corte, solda, acabamento e instalação. Acompanhe cada etapa.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-20">
          {/* ---- trilho lateral fixo ---- */}
          <aside className="sticky top-28 hidden h-[calc(100vh-9rem)] flex-col justify-between self-start lg:flex">
            <div>
              <p className="font-mono text-[0.65rem] tracking-[0.3em] text-steel-500 uppercase">
                Etapa {phase.n} / 08
              </p>
              <p
                key={phase.key}
                className="font-display mt-3 text-6xl tracking-[0.02em] text-paper-100 uppercase"
                style={{ animation: prefersReduced() ? undefined : "phase-in .45s cubic-bezier(.2,.8,.2,1)" }}
              >
                {phase.key}
              </p>
              <p className="font-mono mt-2 text-[0.7rem] tracking-[0.2em] text-ember-400 uppercase">
                {phase.title}
              </p>
            </div>

            <div className="flex gap-6">
              <div className="bg-coal-700 relative h-56 w-px">
                <div
                  className="bg-ember-500 absolute top-0 left-0 w-px transition-[height] duration-300"
                  style={{ height: `${progress * 100}%` }}
                />
                <div
                  className="weld-dot bg-weld-400 absolute h-2 w-2 -translate-x-1/2 rounded-full transition-[top] duration-300"
                  style={{ top: `${progress * 100}%` }}
                />
              </div>
              <ol className="flex flex-col justify-between py-1">
                {PHASES.map((p, i) => (
                  <li
                    key={p.n}
                    className={cn(
                      "font-mono text-[0.62rem] tracking-[0.22em] uppercase transition-colors duration-300",
                      i === active ? "text-ember-400" : i < active ? "text-steel-400" : "text-coal-600"
                    )}
                  >
                    {p.n} — {p.key}
                  </li>
                ))}
              </ol>
            </div>
            <style>{`@keyframes phase-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }`}</style>
          </aside>

          {/* ---- blocos do processo ---- */}
          <div className="flex flex-col gap-24 md:gap-32">
            {/* 01 METAL */}
            <div ref={(el) => void (blocksRef.current[0] = el)} className="scroll-mt-28">
              <p className="font-mono text-[0.65rem] tracking-[0.3em] text-ember-500 uppercase">01 — Metal</p>
              <h3 className="font-display mt-3 text-3xl tracking-[0.02em] text-paper-100 uppercase md:text-4xl">Tudo começa no perfil de aço</h3>
              <p className="mt-4 max-w-xl leading-relaxed text-steel-400">
                Tubos, chapas e perfis são selecionados de acordo com a carga e o
                uso de cada peça. Metal bom, dimensionado certo, é metade da
                durabilidade de qualquer portão ou estrutura.
              </p>
              <Frame caption="[ FIG. 01 — PERFIL DE AÇO CARBONO ]" className="mt-8 max-w-xl">
                <img src={assets.workshop.fabrication} alt="Perfil de aço sendo cortado na oficina da Metal & Art" className="h-full w-full object-cover" loading="lazy" />
              </Frame>
            </div>

            {/* 02 MEDIÇÃO + 03 PROJETO (desenho técnico) */}
            <div ref={(el) => void (blocksRef.current[1] = el)} className="scroll-mt-28">
              <p className="font-mono text-[0.65rem] tracking-[0.3em] text-ember-500 uppercase">02 — Medição</p>
              <h3 className="font-display mt-3 text-3xl tracking-[0.02em] text-paper-100 uppercase md:text-4xl">O vão manda. A trena confirma.</h3>
              <p className="mt-4 max-w-xl leading-relaxed text-steel-400">
                Vão, recuo, prumo, nível e rota de abertura são conferidos no
                local. Nada vai para a oficina no "olhômetro": portão sob medida
                começa com medida certa.
              </p>
            </div>

            <div ref={(el) => void (blocksRef.current[2] = el)} className="scroll-mt-28">
              <p className="font-mono text-[0.65rem] tracking-[0.3em] text-ember-500 uppercase">03 — Projeto</p>
              <h3 className="font-display mt-3 text-3xl tracking-[0.02em] text-paper-100 uppercase md:text-4xl">Do risco ao desenho técnico</h3>
              <div className="border-arc-700/60 relative mt-8 overflow-hidden border bg-coal-900/80">
                <div className="text-arc-400 p-4 md:p-8">
                  <TechDrawing />
                </div>
              </div>
              <p className="font-mono mt-2 text-[0.62rem] tracking-[0.22em] text-steel-500 uppercase">
                [ FIG. 02 — DESENHO DE FABRICAÇÃO · ESC. S/E ]
              </p>
            </div>

            {/* 04 CORTE */}
            <div ref={(el) => void (blocksRef.current[3] = el)} className="scroll-mt-28">
              <p className="font-mono text-[0.65rem] tracking-[0.3em] text-ember-500 uppercase">04 — Corte</p>
              <h3 className="font-display mt-3 text-3xl tracking-[0.02em] text-paper-100 uppercase md:text-4xl">Corte no esquadro, peça por peça</h3>
              <p className="mt-4 max-w-xl leading-relaxed text-steel-400">
                Cada perfil é cortado e marcado conforme o desenho. Esquadro
                conferido duas vezes — uma peça fora de esquadro empurra o
                defeito para a instalação, e isso não sai da oficina.
              </p>
            </div>

            {/* 05 SOLDA */}
            <div ref={(el) => void (blocksRef.current[4] = el)} className="scroll-mt-28">
              <p className="font-mono text-[0.65rem] tracking-[0.3em] text-ember-500 uppercase">05 — Solda</p>
              <h3 className="font-display mt-3 text-3xl tracking-[0.02em] text-paper-100 uppercase md:text-4xl">Onde o projeto vira peça única</h3>
              <Frame caption="[ FIG. 03 — SOLDA ESTRUTURAL NA OFICINA ]" className="mt-8">
                <img src={assets.hero.main} alt="Solda estrutural com faíscas na oficina Metal & Art" className="h-full w-full object-cover object-right" loading="lazy" />
              </Frame>
              <p className="mt-4 max-w-xl leading-relaxed text-steel-400">
                Solda contínua nos pontos de esforço, limpeza de escória e
                conferência de alinhamento antes do acabamento. É aqui que a
                estrutura ganha rigidez para durar anos.
              </p>
            </div>

            {/* 06 ACABAMENTO */}
            <div ref={(el) => void (blocksRef.current[5] = el)} className="scroll-mt-28">
              <p className="font-mono text-[0.65rem] tracking-[0.3em] text-ember-500 uppercase">06 — Acabamento</p>
              <h3 className="font-display mt-3 text-3xl tracking-[0.02em] text-paper-100 uppercase md:text-4xl">Lixamento, fundo e pintura</h3>
              <p className="mt-4 max-w-xl leading-relaxed text-steel-400">
                Tratamento antiferrugem, massa onde precisa, fundo e pintura na
                cor do projeto. Acabamento não é vaidade: é a camada que segura
                a corrosão no clima de São Paulo.
              </p>
              <Frame caption="[ FIG. 04 — PEÇA PINTADA E CONFERIDA ]" className="mt-8 max-w-xl">
                <img src={assets.beforeAfter.after} alt="Portão com pintura nova após acabamento completo" className="h-full w-full object-cover" loading="lazy" />
              </Frame>
            </div>

            {/* 07 INSTALAÇÃO + 08 SOLUÇÃO (transição desenho -> foto) */}
            <div ref={(el) => void (blocksRef.current[6] = el)} className="scroll-mt-28">
              <p className="font-mono text-[0.65rem] tracking-[0.3em] text-ember-500 uppercase">07 — Instalação</p>
              <h3 className="font-display mt-3 text-3xl tracking-[0.02em] text-paper-100 uppercase md:text-4xl">Nível, prumo e funcionamento testado</h3>
              <div className="border-coal-600 relative mt-8 overflow-hidden border bg-coal-900">
                <div className="text-arc-400 p-4 md:p-8">
                  <TechDrawing />
                </div>
                <div id="reveal-photo" className="absolute inset-0 opacity-0">
                  <img src={assets.gates.sliding} alt="Portão deslizante instalado e nivelado em residência" className="h-full w-full object-cover" loading="lazy" />
                  <p className="font-mono absolute right-3 bottom-3 bg-coal-950/80 px-2 py-1 text-[0.6rem] tracking-[0.2em] text-weld-400 uppercase">
                    [ OBRA REAL — INSTALADO ]
                  </p>
                </div>
              </div>
              <p className="font-mono mt-2 text-[0.62rem] tracking-[0.22em] text-steel-500 uppercase">
                [ FIG. 05 — O DESENHO VIRA OBRA ]
              </p>
            </div>

            <div ref={(el) => void (blocksRef.current[7] = el)} className="scroll-mt-28">
              <p className="font-mono text-[0.65rem] tracking-[0.3em] text-ember-500 uppercase">08 — Solução</p>
              <h3 className="font-display mt-3 text-3xl tracking-[0.02em] text-paper-100 uppercase md:text-4xl">Projeto concluído. Portão operando.</h3>
              <p className="mt-4 max-w-xl leading-relaxed text-steel-400">
                Teste de abertura e travamento, regulagem fina e entrega com
                orientação de uso. Se precisar de automação, ela entra aqui —
                com o portão leve e alinhado do jeito certo.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/orcamento"
                  onClick={() => track("cta_orcamento_processo")}
                  className="btn-press bg-ember-500 hover:bg-weld-400 font-display inline-flex items-center gap-3 px-6 py-3.5 text-base tracking-[0.06em] text-coal-950 uppercase"
                >
                  Começar meu projeto <IconArrowRight className="h-4.5 w-4.5" />
                </Link>
                <Link
                  to="/projetos"
                  className="btn-press border-coal-600 hover:border-ember-500 hover:text-ember-400 font-display inline-flex items-center gap-3 border px-6 py-3.5 text-base tracking-[0.06em] text-paper-100 uppercase"
                >
                  Ver projetos reais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
