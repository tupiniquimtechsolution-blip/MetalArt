import { useCallback, useEffect, useState } from "react";
import { HashRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initSmoothScroll, jumpToTop, refreshTriggers, scrollToEl } from "./lib/motion";
import { Cursor } from "./components/ui";
import {
  Footer,
  Header,
  MobileCtaBar,
  Preloader,
  consumePendingAnchor,
} from "./components/chrome";
import { Home } from "./pages/Home";
import { ServiceDetail, ServicesList } from "./pages/ServicesPage";
import { ProjectDetail, ProjectsList } from "./pages/ProjectsPage";
import { AboutPage, ContactPage, PrivacyPage, QuotePage } from "./pages/StaticPages";

function NotFound() {
  return (
    <section className="bg-coal-950 px-5 pt-44 pb-24 text-center md:px-8">
      <p className="font-mono text-[0.7rem] tracking-[0.3em] text-ember-500 uppercase">Erro 404</p>
      <h1 className="font-display mt-4 text-5xl text-paper-100 uppercase">
        Página fora <em className="text-ember-500 not-italic">de esquadro</em>.
      </h1>
      <Link
        to="/"
        className="underline-weld font-mono mt-6 inline-block pb-1 text-[0.7rem] tracking-[0.22em] text-steel-300 uppercase"
      >
        ← Voltar para o início
      </Link>
    </section>
  );
}

function RouteManager() {
  const loc = useLocation();
  useEffect(() => {
    // topo imediato — nunca deixar a página nova "nascer" no meio do scroll
    jumpToTop();
    const stateAnchor = (loc.state as { anchor?: string } | null)?.anchor ?? null;
    const anchor = stateAnchor || consumePendingAnchor();
    // tenta rolar até a âncora em várias janelas (espera imagens/renders)
    const timers = [220, 700, 1400].map((delay) =>
      window.setTimeout(() => {
        if (anchor && document.getElementById(anchor)) {
          scrollToEl(`#${anchor}`, -72);
        }
        ScrollTrigger.refresh();
      }, delay)
    );
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [loc.pathname, loc.state]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const onPreloaderDone = useCallback(() => setLoading(false), []);

  useEffect(() => {
    const cleanup = initSmoothScroll();
    window.addEventListener("load", () => ScrollTrigger.refresh());
    return cleanup;
  }, []);

  useEffect(() => {
    if (!loading) refreshTriggers(250);
  }, [loading]);

  return (
    <HashRouter>
      {loading && <Preloader onDone={onPreloaderDone} />}
      <div className={loading ? "h-svh overflow-hidden" : undefined} aria-hidden={loading || undefined}>
        <RouteManager />
        <Cursor />
        <Header />
        <main id="conteudo">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<ServicesList />} />
            <Route path="/servicos/:slug" element={<ServiceDetail />} />
            <Route path="/projetos" element={<ProjectsList />} />
            <Route path="/projetos/:slug" element={<ProjectDetail />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/orcamento" element={<QuotePage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/privacidade" element={<PrivacyPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <MobileCtaBar />
        <div className="noise-overlay" aria-hidden="true" />
      </div>
    </HashRouter>
  );
}
