/**
 * ============================================================
 *  ARQUIVO CENTRAL DE ASSETS — METAL & ART SERRALHERIA
 * ============================================================
 *  Nenhum asset importante deve ficar espalhado pelos componentes.
 *
 *  FONTES (ver ASSET_SOURCES.md e ASSET_AUDIT.md):
 *  — `official.*`: mídias reais coletadas do site oficial do cliente
 *    (metaleartserralheria.com.br). Hotlink direto do servidor do
 *    cliente — antes de publicar, baixar e salvar em
 *    public/client-assets/ e trocar as URLs.
 *  — demais chaves: referências ilustrativas do protótipo.
 *    >> SOLICITAR ARQUIVOS ORIGINAIS EM HD AO CLIENTE <<
 * ============================================================
 */

const SITE = "https://metaleartserralheria.com.br/wp-content/uploads/2026/02";

export const assets = {
  /** Mídias REAIS do site oficial do cliente (coletadas em 22/08/2026) */
  official: {
    /** Slide 1 do slideshow oficial — esmerilhadeira/faíscas na produção */
    heroSparks: `${SITE}/locksmith-in-special-clothes-and-goggles-works-in-production-metal-processing-with-angle-grinder-scaled-1.jpeg`,
    /** Slide 2 do slideshow oficial — imagem da oficina/equipe */
    heroWorkshop: `${SITE}/WhatsApp-Image-2026-02-22-at-21.05.02.jpeg`,
    /** Imagem institucional da seção "Sobre Nós" do site oficial */
    aboutImage: `${SITE}/ChatGPT-Image-22-de-fev.-de-2026-21_44_59-683x1024.png`,
    /**
     * LOGO: o arquivo original está no servidor do cliente (site e
     * Instagram). >> SOLICITAR LOGOTIPO VETORIAL/ORIGINAL AO CLIENTE <<
     * Assim que enviado, salvar em public/client-assets/logo/ e apontar
     * `logo.original` abaixo — o componente Logo já suporta a troca.
     */
    logoUrl: null as string | null,
  },

  hero: {
    // Faíscas de solda — referência ilustrativa (protótipo)
    main: "https://image.qwenlm.ai/generated-images/fb164cb3-f703-430e-9983-de28a38d4b81/_result.png",
  },
  gates: {
    sliding: "https://image.qwenlm.ai/generated-images/0f4ef4e4-20f9-4c76-989b-a8fd08492ca9/_result.png",
    social: "https://image.qwenlm.ai/generated-images/3c1834e0-8f9d-455e-aa64-7f164801a3a3/_result.png",
  },
  automation: {
    motor: "https://image.qwenlm.ai/generated-images/13d1e4b9-04f2-46c1-a3fa-9811652dfa13/_result.png",
  },
  railings: {
    handrail: "https://image.qwenlm.ai/generated-images/b69877c7-3081-4454-9a3d-565a2d39a5fc/_result.png",
  },
  grids: {
    window: "https://image.qwenlm.ai/generated-images/a2c46e0b-6030-477f-b971-820fc6ddb6df/_result.png",
  },
  rollingDoors: {
    storefront: "https://image.qwenlm.ai/generated-images/ed4ca758-8f33-429f-acc0-8c1f12d5cea4/_result.png",
  },
  beforeAfter: {
    // Par ilustrativo (mesmo enquadramento) — substituir por
    // antes/depois REAL do mesmo ângulo (ex.: publicação de 25/07/2026)
    before: "https://image.qwenlm.ai/generated-images/35f5a934-1f72-422f-9853-f54ce1b46d36/_result.png",
    after: "https://image.qwenlm.ai/generated-images/352da9f7-728a-494c-b986-b200b532fdaf/_result.png",
  },
  workshop: {
    fabrication: "https://image.qwenlm.ai/generated-images/d42aa287-8460-4111-acd4-be7eda686a3a/_result.png",
  },

  /** Imagens de referência para os cards que linkam posts reais do Instagram */
  instagram: {
    reelAluminio: "https://image.qwenlm.ai/generated-images/3c1834e0-8f9d-455e-aa64-7f164801a3a3/_result.png",
    reforma: "https://image.qwenlm.ai/generated-images/35f5a934-1f72-422f-9853-f54ce1b46d36/_result.png",
    gradesCentro: "https://image.qwenlm.ai/generated-images/a2c46e0b-6030-477f-b971-820fc6ddb6df/_result.png",
    servicoConcluido: "https://image.qwenlm.ai/generated-images/ed4ca758-8f33-429f-acc0-8c1f12d5cea4/_result.png",
    // Imagem REAL do site oficial (produção com faíscas)
    heroSolda: `${SITE}/locksmith-in-special-clothes-and-goggles-works-in-production-metal-processing-with-angle-grinder-scaled-1.jpeg`,
  },

  logo: {
    // Trocar pelo arquivo oficial quando recebido do cliente
    original: null as string | null,
    note: "SOLICITAR LOGOTIPO VETORIAL/ORIGINAL AO CLIENTE",
  },
  video: {
    hero: null as string | null, // >> SOLICITAR VÍDEO REAL DE FABRICAÇÃO/INSTALAÇÃO <<
    note: "SOLICITAR VÍDEOS REAIS (fabricação, faíscas, automação) PARA O HERO E CASES",
  },
} as const;
