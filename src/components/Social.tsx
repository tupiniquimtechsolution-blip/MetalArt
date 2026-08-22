import { Link } from "react-router-dom";
import { assets } from "../config/assets";
import { business } from "../config/business";
import { MaskLines, Reveal, SparkField, track, waLink } from "../lib/motion";
import {
  IconArrowUpRight,
  IconClock,
  IconGoogle,
  IconInstagram,
  IconPin,
  IconStar,
  IconWhatsApp,
  SectionTag,
} from "./ui";

/* ================= AVALIAÇÕES (GOOGLE) ================= */

export function Reviews() {
  return (
    <section id="avaliacoes" className="blueprint-grid-light bg-paper-100 py-24 text-ink-900 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <SectionTag light index="11" label="Prova social" />
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display max-w-[18ch] text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[0.96] uppercase">
            <MaskLines
              lines={[
                <span key="1">Quem contrata,</span>,
                <span key="2">
                  <em className="text-ember-600 not-italic">recomenda</em>.
                </span>,
              ]}
            />
          </h2>
          <div className="border-ink-900/15 flex items-center gap-5 border bg-paper-200/60 px-6 py-4">
            <IconGoogle className="h-8 w-8 text-arc-700" />
            <div>
              <p className="font-display text-xl tracking-[0.02em] uppercase">
                {business.google.rating ?? "Nota em coleta"}
              </p>
              <p className="font-mono text-[0.6rem] tracking-[0.18em] text-ink-700/70 uppercase">
                Ficha do Google · atualizado: {business.google.lastUpdated}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {business.provisionalReviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col border border-ink-900/15 bg-paper-200/50 p-7 transition-colors hover:bg-paper-200">
                <div className="flex gap-1" aria-label={`${r.rating} de 5 estrelas`}>
                  {Array.from({ length: r.rating }).map((_, s) => (
                    <IconStar key={s} className="h-4 w-4 text-ember-600" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink-700">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-5 flex items-baseline justify-between gap-3">
                  <span className="font-display text-lg tracking-[0.03em] uppercase">{r.name}</span>
                  <span className="font-mono text-[0.58rem] tracking-[0.15em] text-ink-700/60 uppercase">{r.source}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-mono max-w-2xl text-[0.62rem] leading-relaxed tracking-[0.12em] text-ink-700/60 uppercase">
            * Textos ilustrativos do protótipo — serão substituídos pelas avaliações públicas da
            ficha oficial do Google antes da publicação (ver ASSET_AUDIT.md).
          </p>
          <a
            href={business.mapsReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("google_avaliacoes_cta")}
            className="btn-press border-ink-900/30 hover:border-ember-600 hover:text-ember-600 font-display inline-flex shrink-0 items-center gap-3 border px-6 py-3.5 text-base tracking-[0.06em] text-ink-900 uppercase"
          >
            <IconGoogle className="h-4.5 w-4.5" /> Ver avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================= INSTAGRAM — EM AÇÃO ================= */

const REEL_CARDS = [
  { img: assets.hero.main, label: "Solda estrutural", tag: "Oficina" },
  { img: assets.gates.sliding, label: "Portão entregue", tag: "Instalação" },
  { img: assets.automation.motor, label: "Automação nova", tag: "Automação" },
  { img: assets.workshop.fabrication, label: "Corte de perfis", tag: "Bastidores" },
  { img: assets.beforeAfter.after, label: "Reforma concluída", tag: "Antes × Depois" },
  { img: assets.gates.social, label: "Portão social", tag: "Entrega" },
];

export function InstaStrip() {
  return (
    <section id="em-acao" className="overflow-hidden bg-coal-950 py-24 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionTag index="12" label="Bastidores" />
            <h2 className="font-display mt-6 text-[clamp(2.2rem,5vw,4rem)] leading-[0.96] uppercase">
              <MaskLines
                lines={[
                  <span key="1" className="text-paper-100">Metal &amp; Art</span>,
                  <span key="2" className="text-paper-100">
                    em <em className="text-ember-500 not-italic">ação</em>.
                  </span>,
                ]}
              />
            </h2>
          </div>
          <a
            href={business.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("instagram_em_acao")}
            className="btn-press border-coal-600 hover:border-ember-500 hover:text-ember-400 font-display inline-flex w-fit items-center gap-3 border px-6 py-3.5 text-base tracking-[0.06em] text-paper-100 uppercase"
          >
            <IconInstagram className="h-4.5 w-4.5" /> {business.instagram.handle}
          </a>
        </div>
      </div>

      <div className="no-scrollbar mt-12 flex snap-x gap-5 overflow-x-auto px-5 pb-2 md:px-8">
        {REEL_CARDS.map((c, i) => (
          <a
            key={i}
            href={business.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="VER"
            onClick={() => track("instagram_card")}
            className="group relative w-60 shrink-0 snap-start sm:w-72"
            aria-label={`${c.label} — ver no Instagram`}
          >
            <div className="img-zoom border-coal-600 relative aspect-[3/4] overflow-hidden border">
              <img src={c.img} alt={c.label} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-coal-950/95 via-transparent to-transparent" />
              <div className="absolute right-4 bottom-4 left-4">
                <p className="font-mono text-[0.58rem] tracking-[0.25em] text-ember-400 uppercase">{c.tag}</p>
                <p className="font-display mt-1 text-xl tracking-[0.03em] text-paper-100 uppercase">{c.label}</p>
              </div>
              <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center border border-paper-100/25 bg-coal-950/70 text-paper-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <IconInstagram className="h-4 w-4" />
              </span>
            </div>
          </a>
        ))}
      </div>

      <p className="font-mono mt-6 px-5 text-[0.6rem] tracking-[0.18em] text-steel-500 uppercase md:px-8">
        Conteúdo original publicado em instagram.com/serralheriametaleart — os cards levam ao perfil oficial.
      </p>
    </section>
  );
}

/* ================= LOCALIZAÇÃO ================= */

export function Location() {
  return (
    <section id="localizacao" className="blueprint-grid-light border-t border-ink-900/10 bg-paper-100 py-24 text-ink-900 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <SectionTag light index="13" label="Localização" />
        <h2 className="font-display mt-6 max-w-[20ch] text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[0.96] uppercase">
          <MaskLines
            lines={[
              <span key="1">Atendimento na</span>,
              <span key="2">
                Zona Leste <em className="text-ember-600 not-italic">e região</em>.
              </span>,
            ]}
          />
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <div className="flex flex-col gap-5">
              <div className="border border-ink-900/15 bg-paper-200/50 p-6">
                <p className="font-mono text-[0.62rem] tracking-[0.25em] text-ink-700/60 uppercase">Oficina</p>
                <p className="mt-2 flex items-start gap-3 text-lg font-medium">
                  <IconPin className="mt-1 h-5 w-5 shrink-0 text-ember-600" />
                  {business.address.street} — {business.address.region},{" "}
                  {business.address.city}/{business.address.state} · CEP {business.address.zip}
                </p>
              </div>
              <div className="border border-ink-900/15 bg-paper-200/50 p-6">
                <p className="font-mono text-[0.62rem] tracking-[0.25em] text-ink-700/60 uppercase">Horários</p>
                <ul className="mt-3 space-y-1.5">
                  {business.hours.map((h) => (
                    <li key={h.days} className="flex items-center justify-between gap-4 text-sm">
                      <span className="flex items-center gap-2.5 text-ink-700">
                        <IconClock className="h-4 w-4 text-ember-600" /> {h.days}
                      </span>
                      <span className="font-mono text-[0.68rem] tracking-[0.12em] uppercase">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs leading-relaxed text-ink-700/70">{business.hoursNote}</p>
              </div>
              <div className="border border-ink-900/15 bg-paper-200/50 p-6">
                <p className="font-mono text-[0.62rem] tracking-[0.25em] text-ink-700/60 uppercase">Regiões atendidas</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {business.serviceAreas.map((a) => (
                    <span key={a} className="border border-ink-900/20 px-3 py-1.5 font-mono text-[0.62rem] tracking-[0.15em] uppercase">
                      {a}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-ink-700/70">{business.serviceAreasNote}</p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href={business.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("rota_maps")}
                className="btn-press bg-ink-900 hover:bg-ember-600 font-display inline-flex items-center gap-3 px-6 py-3.5 text-base tracking-[0.06em] text-paper-100 uppercase"
              >
                <IconPin className="h-4.5 w-4.5" /> Traçar rota
              </a>
              <a
                href={waLink(business.whatsappDigits, "Olá, Metal & Art! Quero saber sobre atendimento na minha região.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_localizacao")}
                className="btn-press border-ink-900/30 hover:border-ember-600 hover:text-ember-600 font-display inline-flex items-center gap-3 border px-6 py-3.5 text-base tracking-[0.06em] uppercase"
              >
                <IconWhatsApp className="h-4.5 w-4.5" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="border border-ink-900/20 relative min-h-[24rem] overflow-hidden bg-paper-200">
            <iframe
              title="Mapa — Metal & Art Serralheria, Rua Serra do Ouro, 267, São Paulo"
              src={business.mapsEmbedUrl}
              className="absolute inset-0 h-full w-full border-0 grayscale-[35%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <span className="font-mono absolute bottom-3 left-3 bg-ink-900/90 px-2.5 py-1 text-[0.6rem] tracking-[0.2em] text-paper-100 uppercase">
              Rua Serra do Ouro, 267 — SP
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= CTA FINAL ================= */

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-coal-950 py-24 md:py-36">
      <div className="blueprint-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-coal-950 via-transparent to-coal-950" />
      <SparkField density={30} />
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8">
        <p className="font-mono text-[0.68rem] tracking-[0.3em] text-weld-400 uppercase">Última etapa — a sua</p>
        <h2 className="font-display mt-6 max-w-[16ch] text-[clamp(2.8rem,8vw,6.5rem)] leading-[0.94] uppercase">
          <MaskLines
            lines={[
              <span key="1" className="text-paper-100">Tire o projeto</span>,
              <span key="2" className="text-stroke">do papel.</span>,
              <span key="3" className="text-paper-100">
                A solda é <em className="text-ember-500 not-italic">nossa</em>.
              </span>,
            ]}
          />
        </h2>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/orcamento"
            onClick={() => track("cta_orcamento_final")}
            className="btn-press bg-ember-500 hover:bg-weld-400 font-display inline-flex items-center gap-3 px-8 py-4 text-lg tracking-[0.06em] text-coal-950 uppercase"
          >
            Montar meu orçamento <IconArrowUpRight className="h-5 w-5" />
          </Link>
          <a
            href={waLink(business.whatsappDigits, "Olá, Metal & Art! Quero conversar sobre um projeto.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("whatsapp_final")}
            className="btn-press border-paper-100/35 hover:border-ember-500 hover:text-ember-400 font-display inline-flex items-center gap-3 border px-8 py-4 text-lg tracking-[0.06em] text-paper-100 uppercase"
          >
            <IconWhatsApp className="h-5 w-5" /> {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
