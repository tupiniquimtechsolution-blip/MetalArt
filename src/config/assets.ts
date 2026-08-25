/**
 * ============================================================
 *  ARQUIVO CENTRAL DE ASSETS — METAL & ART SERRALHERIA
 * ============================================================
 *  Nenhum asset importante deve ficar espalhado pelos componentes.
 *
 *  SITUAÇÃO ATUAL (protótipo):
 *  As imagens abaixo são ASSETS DE REFERÊNCIA gerados para o
 *  protótipo (banco de imagens do ambiente). Elas representam o
 *  TIPO de trabalho publicado no Instagram @serralheriametaleart,
 *  mas NÃO são fotos reais da empresa.
 *
 *  >> ANTES DA PUBLICAÇÃO: substituir cada URL pela foto/vídeo
 *  real correspondente (Instagram oficial, ficha do Google ou
 *  arquivos HD solicitados ao cliente). Ver ASSET_SOURCES.md,
 *  ASSET_AUDIT.md e CLIENT_REPLACEMENT_GUIDE.md.
 * ============================================================
 */

const IMG = "https://image.qwenlm.ai/generated-images";

export const assets = {
  hero: {
    // Soldagem com faíscas na oficina — imagem principal do hero
    main: `${IMG}/fb164cb3-f703-430e-9983-de28a38d4b81/_result.png`,
  },
  gates: {
    sliding: `${IMG}/0f4ef4e4-20f9-4c76-989b-a8fd08492ca9/_result.png`,
    social: `${IMG}/3c1834e0-8f9d-455e-aa64-7f164801a3a3/_result.png`,
  },
  automation: {
    motor: `${IMG}/13d1e4b9-04f2-46c1-a3fa-9811652dfa13/_result.png`,
  },
  railings: {
    handrail: `${IMG}/b69877c7-3081-4454-9a3d-565a2d39a5fc/_result.png`,
  },
  grids: {
    window: `${IMG}/a2c46e0b-6030-477f-b971-820fc6ddb6df/_result.png`,
  },
  rollingDoors: {
    storefront: `${IMG}/ed4ca758-8f33-429f-acc0-8c1f12d5cea4/_result.png`,
  },
  beforeAfter: {
    before: `${IMG}/35f5a934-1f72-422f-9853-f54ce1b46d36/_result.png`,
    after: `${IMG}/352da9f7-728a-494c-b986-b200b532fdaf/_result.png`,
  },
  workshop: {
    fabrication: `${IMG}/d42aa287-8460-4111-acd4-be7eda686a3a/_result.png`,
  },

  /**
   * Mapeamento ilustrativo usado pelos cards "Metal & Art em ação".
   * Cada card aponta para a publicação REAL no perfil oficial;
   * a imagem exibida é apenas referência do tipo de conteúdo.
   */
  instagram: {
    reelAluminio: `${IMG}/0f4ef4e4-20f9-4c76-989b-a8fd08492ca9/_result.png`,
    reforma: `${IMG}/35f5a934-1f72-422f-9853-f54ce1b46d36/_result.png`,
    gradesCentro: `${IMG}/a2c46e0b-6030-477f-b971-820fc6ddb6df/_result.png`,
    servicoConcluido: `${IMG}/d42aa287-8460-4111-acd4-be7eda686a3a/_result.png`,
    heroSolda: `${IMG}/fb164cb3-f703-430e-9983-de28a38d4b81/_result.png`,
  },

  // LOGO: não há arquivo vetorial oficial disponível publicamente
  // em resolução adequada para reprodução direta.
  // >> SOLICITAR LOGOTIPO VETORIAL/ORIGINAL AO CLIENTE <<
  // O site usa uma marca tipográfica fiel ao estilo da identidade
  // (condensada, caixa alta, "&" em laranja de solda) desenhada em
  // código — ver src/components/ui.tsx (Logo/SparkMark). Ao receber
  // o arquivo oficial, salvar em public/client-assets/logo/ nas
  // variações logo-original / logo-light / logo-dark / logo-symbol.
  logo: {
    original: null as string | null,
    note: "SOLICITAR LOGOTIPO VETORIAL/ORIGINAL AO CLIENTE",
  },
  video: {
    hero: null as string | null,
    note: "SOLICITAR VÍDEOS REAIS (fabricação, faíscas, automação, instalação) PARA O HERO E CASES",
  },
} as const;
