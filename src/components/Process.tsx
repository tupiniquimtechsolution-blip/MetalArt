import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { business } from "../config/business";
import { MaskLines, Reveal, cn, track, waLink } from "../lib/motion";
import { IconArrowRight, SectionTag, WeldDivider } from "./ui";

/* ================= COMO TRABALHAMOS — linha de solda ================= */

const STEPS = [
  {
    n: "01",
    title: "Contato",
    text: "Você chama no WhatsApp ou pelo site e conta o que precisa — pode mandar foto, medida ou só a ideia.",
  },
  {
    n: "02",
    title: "Entendimento da necessidade",
    text: "A gente faz as perguntas certas: uso, vão, peso, segurança e o resultado que você espera.",
  },
  {
    n: "03",
    title: "Avaliação e medição",
    text: "Visita técnica com medição do vão, conferência de nível, prumo e rota de funcionamento.",
  },
  {
    n: "04",
    title: "Orçamento",
    text: "Proposta clara com material, prazo de fabricação e instalação — sem letra miúda.",
  },
  {
    n: "05",
    title: "Fabricação ou reparo",
    text: "Corte, solda e montagem na oficina — ou o reparo no local, quando é o caso.",
  },
  {
    n: "06",
    title: "Acabamento",
    text: "Tratamento antiferrugem, massa, fundo e pintura na cor combinada.",
  },
  {
    n: "07",
    title: "Instalação",
    text: "Peça instalada, nivelada e testada: abertura, travamento e regulagem fina antes da entrega.",
  },
];

export function HowWeWork() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = (vh * 0.7 - r.top) / r.height;
        setP(Math.min(1, Math.max(0, progress)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const activeIdx = Math.min(STEPS.length - 1, Math.floor(p * STEPS.length * 1.15));

  return (
    <section id="como-trabalhamos" className="blueprint-grid-light bg-paper-100 py-24 text-ink-900 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <SectionTag light index="09" label="Método" />
        <h2 className="font-display mt-6 max-w-[18ch] text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[0.96] uppercase">
          <MaskLines
            lines={[
              <span key="1">Como a gente</span>,
              <span key="2">
                trabalha<em className="text-ember-600 not-italic">.</em>
              </span>,
            ]}
          />
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <p className="font-display text-7xl tracking-[0.02em] text-ink-900">
                {String(activeIdx + 1).padStart(2, "0")}
                <span className="text-ember-600">/07</span>
              </p>
              <p className="font-mono mt-3 text-[0.68rem] tracking-[0.25em] text-ink-700/70 uppercase">
                Etapa atual do scroll
              </p>
              <WeldDivider className="mt-8" />
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-700">
                O mesmo caminho para portão novo, reforma ou estrutura: você
                acompanha cada etapa do pedido à entrega.
              </p>
            </div>
          </div>

          <div ref={trackRef} className="relative pl-10 md:pl-16">
            {/* linha metálica + solda */}
            <div className="bg-ink-900/15 absolute top-2 bottom-2 left-2 w-px md:left-4" aria-hidden="true">
              <div
                className="absolute top-0 left-0 w-px bg-gradient-to-b from-ember-600 to-ember-500 transition-[height] duration-200"
                style={{ height: `${p * 100}%` }}
              />
              <div
                className="weld-dot bg-ember-500 absolute h-2.5 w-2.5 -translate-x-1/2 rounded-full transition-[top] duration-200"
                style={{ top: `${p * 100}%` }}
              />
            </div>

            <ol className="flex flex-col gap-10 md:gap-12">
              {STEPS.map((s, i) => (
                <li key={s.n} className="relative">
                  <span
                    className={cn(
                      "absolute top-1.5 -left-8 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border transition-colors duration-300 md:-left-12",
                      i <= activeIdx ? "border-ember-600 bg-ember-500" : "border-ink-900/30 bg-paper-100"
                    )}
                    aria-hidden="true"
                  />
                  <Reveal delay={0.05}>
                    <p className={cn("font-mono text-[0.65rem] tracking-[0.3em] uppercase", i <= activeIdx ? "text-ember-600" : "text-ink-700/50")}>
                      Etapa {s.n}
                    </p>
                    <h3 className="font-display mt-2 text-2xl tracking-[0.02em] uppercase md:text-3xl">{s.title}</h3>
                    <p className="mt-2 max-w-xl leading-relaxed text-ink-700">{s.text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= ANATOMIA DE UM PORTÃO ================= */

const HOTSPOTS = [
  {
    id: "motor",
    x: 84,
    y: 74,
    title: "Motor",
    text: "O coração da automação: dimensionado para o peso do portão, com fim de curso regulado para parar no ponto certo.",
    service: { slug: "automacao-de-portoes", label: "Automação de portões" },
  },
  {
    id: "trilho",
    x: 48,
    y: 90,
    title: "Trilho",
    text: "Guia o caminho da folha. Trilho nivelado e limpo é metade do deslizamento leve — e da vida útil do motor.",
    service: { slug: "reforma-de-portoes", label: "Reformas e reparos" },
  },
  {
    id: "roldanas",
    x: 18,
    y: 82,
    title: "Roldanas",
    text: "São elas que carregam o peso. Roldana gasta deixa o portão pesado, barulhento e forçando a automação.",
    service: { slug: "reforma-de-portoes", label: "Reformas e reparos" },
  },
  {
    id: "fechadura",
    x: 6,
    y: 44,
    title: "Fechadura / trava",
    text: "Travamento mecânico ou eletromagnético: a última barreira de segurança — regulada para pegar sempre.",
    service: { slug: "fechaduras-e-travas", label: "Fechaduras e travas" },
  },
  {
    id: "estrutura",
    x: 44,
    y: 18,
    title: "Estrutura",
    text: "Quadro e travessas soldadas: a rigidez que impede o portão de empenar com o tempo e com o vento.",
    service: { slug: "estruturas-metalicas", label: "Estruturas metálicas" },
  },
  {
    id: "acabamento",
    x: 72,
    y: 36,
    title: "Acabamento",
    text: "Fundo antiferrugem e pintura: a camada que segura a corrosão e mantém a aparência por anos.",
    service: { slug: "reforma-de-portoes", label: "Reformas e reparos" },
  },
];

export function Anatomy() {
  const [active, setActive] = useState(0);
  const h = HOTSPOTS[active];

  return (
    <section id="anatomia" className="blueprint-grid bg-coal-950 py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <SectionTag index="10" label="Conhecimento técnico" />
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display max-w-[18ch] text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.96] uppercase">
            <MaskLines
              lines={[
                <span key="1" className="text-paper-100">Anatomia de</span>,
                <span key="2" className="text-paper-100">
                  um <em className="text-ember-500 not-italic">portão</em>.
                </span>,
              ]}
            />
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-steel-400 md:text-right">
            Toque nos pontos do esquema e entenda o papel de cada componente.
            Ilustração esquemática — cada projeto tem especificação própria.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          {/* esquema */}
          <div className="border-coal-600 relative border bg-coal-900/70 p-4 md:p-8">
            <svg viewBox="0 0 640 400" className="h-auto w-full" role="img" aria-label="Esquema técnico de um portão deslizante com componentes destacados">
              <g stroke="#7fa9d4" strokeWidth="1.2" fill="none" opacity="0.9">
                <rect x="90" y="60" width="460" height="260" />
                {[150, 210, 270, 330, 390, 450, 510].map((x) => (
                  <line key={x} x1={x} y1="74" x2={x} y2="306" strokeWidth="0.8" />
                ))}
                <line x1="90" y1="110" x2="550" y2="110" strokeWidth="0.8" />
                <line x1="90" y1="270" x2="550" y2="270" strokeWidth="0.8" />
                <line x1="40" y1="330" x2="610" y2="330" strokeWidth="2" />
                {/* cremalheira */}
                {Array.from({ length: 26 }).map((_, i) => (
                  <line key={i} x1={100 + i * 17} y1="322" x2={100 + i * 17} y2="330" strokeWidth="0.8" />
                ))}
                <circle cx="160" cy="342" r="10" />
                <circle cx="160" cy="342" r="3" />
                <circle cx="470" cy="342" r="10" />
                <circle cx="470" cy="342" r="3" />
                {/* motor */}
                <rect x="520" y="284" width="86" height="38" />
                <line x1="520" y1="296" x2="606" y2="296" strokeWidth="0.8" />
                <circle cx="541" cy="310" r="6" strokeWidth="0.8" />
                {/* fechadura */}
                <rect x="96" y="160" width="26" height="44" />
                <circle cx="109" cy="182" r="5" strokeWidth="0.8" />
              </g>
              <text x="90" y="46" fill="#6b7480" fontSize="12" fontFamily="IBM Plex Mono, monospace" letterSpacing="2">
                PORTÃO DESLIZANTE — ESQUEMA MA-01
              </text>
            </svg>

            {/* hotspots */}
            {HOTSPOTS.map((hs, i) => (
              <button
                key={hs.id}
                onClick={() => {
                  setActive(i);
                  track("anatomia_hotspot", { id: hs.id });
                }}
                aria-label={`Componente: ${hs.title}`}
                aria-pressed={i === active}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
              >
                <span
                  className={cn(
                    "relative flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300",
                    i === active
                      ? "border-ember-400 bg-ember-500"
                      : "border-steel-400 bg-coal-950/70 group-hover:border-ember-400"
                  )}
                >
                  <span className={cn("h-1.5 w-1.5 rounded-full", i === active ? "weld-dot bg-weld-300" : "bg-steel-400")} />
                </span>
                <span
                  className={cn(
                    "font-mono absolute top-1/2 left-4 -translate-y-1/2 border px-2 py-1 text-[0.58rem] tracking-[0.18em] whitespace-nowrap uppercase transition-all duration-300",
                    i === active
                      ? "border-ember-500 bg-ember-500 text-coal-950 opacity-100"
                      : "border-coal-600 bg-coal-950/85 text-steel-300 opacity-0 group-hover:opacity-100"
                  )}
                >
                  {hs.title}
                </span>
              </button>
            ))}
          </div>

          {/* detalhe do componente */}
          <div className="flex flex-col">
            <div key={h.id} className="border-coal-700 border bg-coal-900/70 p-7 md:p-9" style={{ animation: "hotspot-in .4s cubic-bezier(.2,.8,.2,1)" }}>
              <p className="font-mono text-[0.65rem] tracking-[0.3em] text-ember-500 uppercase">
                Componente {String(active + 1).padStart(2, "0")}/0{HOTSPOTS.length}
              </p>
              <h3 className="font-display mt-3 text-4xl tracking-[0.02em] text-paper-100 uppercase">{h.title}</h3>
              <p className="mt-4 leading-relaxed text-steel-400">{h.text}</p>
              <Link
                to={`/servicos/${h.service.slug}`}
                className="underline-weld font-mono mt-6 inline-block pb-1 text-[0.68rem] tracking-[0.25em] text-steel-300 uppercase hover:text-ember-400"
              >
                Serviço relacionado: {h.service.label} →
              </Link>
            </div>

            <div className="border-coal-700 mt-6 flex flex-wrap items-center gap-2 border p-5">
              <span className="font-mono mr-2 text-[0.6rem] tracking-[0.22em] text-steel-500 uppercase">Ver também:</span>
              {HOTSPOTS.filter((x) => x.id !== h.id).slice(0, 4).map((x) => (
                <button
                  key={x.id}
                  onClick={() => setActive(HOTSPOTS.indexOf(x))}
                  className="btn-press border-coal-600 hover:border-ember-500 hover:text-ember-400 border px-3 py-1.5 font-mono text-[0.6rem] tracking-[0.18em] text-steel-300 uppercase"
                >
                  {x.title}
                </button>
              ))}
            </div>

            <a
              href={waLink(business.whatsappDigits, `Olá, Metal & Art! Tenho dúvidas sobre ${h.title.toLowerCase()} no meu portão.`)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp_anatomia", { id: h.id })}
              className="btn-press bg-ember-500 hover:bg-weld-400 font-display mt-6 inline-flex items-center justify-center gap-3 px-6 py-3.5 text-base tracking-[0.06em] text-coal-950 uppercase"
            >
              Tirar dúvida com a oficina <IconArrowRight className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>
      </div>
      <style>{`@keyframes hotspot-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  );
}
