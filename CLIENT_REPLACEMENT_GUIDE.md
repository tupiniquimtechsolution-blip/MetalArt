# CLIENT_REPLACEMENT_GUIDE.md — Guia de Substituição para Publicação

Guia direto para trocar tudo que é provisório pelos materiais oficiais da
**Metal & Art Serralheria** antes da publicação.

---

## 1. LOGO

- Status: **SOLICITAR LOGOTIPO VETORIAL/ORIGINAL AO CLIENTE**.
- Onde trocar: salvar os arquivos em `public/client-assets/logo/`
  (`logo-original.svg`, `logo-light.svg`, `logo-dark.svg`, `logo-symbol.svg`),
  registrar os caminhos em `src/config/assets.ts` (`assets.logo`) e substituir
  o componente `Logo` em `src/components/ui.tsx` por uma `<img>`.

## 2. INSTAGRAM

- Perfil oficial: `https://www.instagram.com/serralheriametaleart/`
  (já configurado em `src/config/business.ts` → `instagram`).
- Para exibir posts reais: baixar os originais com autorização, salvar em
  `public/client-assets/social/` e apontar as URLs em `REEL_CARDS`
  (`src/components/Social.tsx`).

## 3. GOOGLE MAPS / FICHA DO GOOGLE

- Endereço, rota e embed: `src/config/business.ts` → `address`,
  `mapsEmbedUrl`, `mapsDirectionsUrl`, `mapsReviewsUrl`.
- Nota/avaliações: preencher `business.google.rating`,
  `business.google.reviewCount` e `business.google.lastUpdated` com os dados
  coletados na ficha — **nunca publicar sem data de coleta**.
- Textos das avaliações: trocar `business.provisionalReviews` por avaliações
  reais (mantendo a fonte "Google").

## 4. FOTOS

- Todas as imagens estão em **um único lugar**: `src/config/assets.ts`.
- Fluxo: salvar fotos reais (WebP/JPG, 1600–2000px no lado maior) em
  `public/client-assets/<pasta>/` e trocar a URL pela string
  `"/client-assets/<pasta>/<arquivo>"`. Nada mais precisa mudar.

## 5. VÍDEOS

- Solicitar à empresa: soldagem com faíscas, portão em funcionamento,
  automação e instalação. Salvar em `public/client-assets/video/` (MP4 H.264,
  até ~8 MB para o hero) + poster JPG em `public/client-assets/posters/`.
- Integrar no `Hero` (`src/components/Hero.tsx`) com `<video autoPlay muted
  loop playsInline poster=…>`.

## 6. PORTFÓLIO

- Dados: `src/data/projects.ts`. Adicionar um objeto por obra real:
  título (sem inventar nome de cliente), categoria, descrição, escopo,
  imagens, `beforeImage`/`afterImage` quando houver par real, `source`
  (origem da foto), `location`.
- Categorias disponíveis: `portoes`, `automacao`, `reformas`, `protecao`,
  `corrimaos`, `enrolar`, `estruturas` (editar `filters` se necessário).

## 7. CONTATOS

- `src/config/business.ts`: `phoneDisplay`, `whatsappDigits`, `email`,
  `address`, `hours` (confirmar horários oficiais), `serviceAreas`
  (confirmar raio real de atendimento).

## 8. SERVIÇOS

- `src/data/services.ts`: textos, benefícios, aplicações e mensagem de
  WhatsApp de cada serviço. Novos serviços = novo objeto + página automática
  em `/servicos/[slug]`.

## 9. SEO

- Metadata base: `index.html` (title, description, OG, JSON-LD
  `HomeAndConstructionBusiness`).
- Ao migrar para SSR/Next.js: gerar `sitemap.xml` com as rotas reais e
  metadata dinâmica por página. Manter o JSON-LD sem `AggregateRating` até
  haver nota real coletada.
- Keywords locais já trabalhadas no conteúdo: serralheria/serralheiro Zona
  Leste, reforma e conserto de portão, automação de portão, grades,
  corrimãos, guarda-corpos, porta de enrolar (Itaquera/São Paulo).

## 10. ANALYTICS

- Eventos já instrumentados via `track()` (`src/lib/motion.tsx`): cliques de
  WhatsApp, orçamento, abertura de projetos, filtros, diagnóstico, rota,
  Instagram e telefone. Basta conectar um provider que leia `window.dataLayer`
  (ex.: GTM) — nenhum dado é enviado hoje.

## 11. TEXTOS

- Slogan/institucional: `business.ts` + `src/pages/StaticPages.tsx` (Sobre) +
  `src/components/AboutSection.tsx`.
- **Não inventar**: anos de empresa, número de clientes/obras, garantias,
  certificações, marcas parceiras, bairros atendidos além do confirmado,
  depoimentos, preços ou prazos.

## 12. ASSETS TEMPORÁRIOS (checklist de troca)

| Temporário | Substituir por |
|---|---|
| 10 imagens geradas (`assets.ts`) | Fotos reais da oficina/obras |
| Marca tipográfica SVG (`ui.tsx`) | Logo vetorial oficial |
| Avaliações ilustrativas (`business.ts`) | Avaliações reais do Google |
| Horários "consulte" | Horários oficiais |
| Par antes/depois genérico | Par real da mesma obra |
