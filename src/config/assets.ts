/**
 * ============================================================
 *  ARQUIVO CENTRAL DE ASSETS — METAL & ART SERRALHERIA
 * ============================================================
 *  Nenhum asset importante deve ficar espalhado pelos componentes.
 *
 *  SITUAÇÃO ATUAL (protótipo):
 *  As imagens abaixo são ASSETS TEMPORÁRIOS gerados para o
 *  protótipo. Antes da publicação, substituir pelas fotos reais
 *  da empresa (Instagram @serralheriametaleart, ficha do Google,
 *  site oficial). Ver ASSET_SOURCES.md e CLIENT_REPLACEMENT_GUIDE.md.
 *
 *  Para usar arquivos locais, basta salvar em public/client-assets/
 *  e trocar a URL pelo caminho "/client-assets/...".
 * ============================================================
 */

export const assets = {
  hero: {
    // Soldagem com faíscas — imagem principal do hero
    main: "https://image.qwenlm.ai/generated-images/6525dc2f-17a2-44e6-a217-e68e933fdbf0/_result.png",
  },
  gates: {
    sliding: "https://image.qwenlm.ai/generated-images/7860c4b9-b3d0-4f04-80de-7aafeb8ce224/_result.png",
    social: "https://image.qwenlm.ai/generated-images/a257dded-fe94-4985-934b-66635daaca37/_result.png",
  },
  automation: {
    motor: "https://image.qwenlm.ai/generated-images/7fa87b1e-c3b5-498b-a2e7-d11490d8a4fd/_result.png",
  },
  railings: {
    handrail: "https://image.qwenlm.ai/generated-images/7d0f3676-8f97-46c9-bb4f-f38a6062b200/_result.png",
  },
  grids: {
    window: "https://image.qwenlm.ai/generated-images/cd60231b-e48e-448c-81df-8ed3f63ed117/_result.png",
  },
  rollingDoors: {
    storefront: "https://image.qwenlm.ai/generated-images/82af2131-a250-4bd5-91dd-48a7423c59bf/_result.png",
  },
  beforeAfter: {
    before: "https://image.qwenlm.ai/generated-images/0d766918-9ff0-489e-b65b-64ac669dc240/_result.png",
    after: "https://image.qwenlm.ai/generated-images/884774a0-592e-4082-a99f-a6492c15d0c5/_result.png",
  },
  workshop: {
    fabrication: "https://image.qwenlm.ai/generated-images/011a3085-3a53-4581-a230-589880197f1a/_result.png",
  },
  // LOGO: não há arquivo vetorial oficial disponível publicamente
  // em resolução adequada.
  // >> SOLICITAR LOGOTIPO VETORIAL/ORIGINAL AO CLIENTE <<
  // Enquanto isso, o site usa a marca tipográfica "METAL & ART"
  // desenhada em SVG (ver src/components/ui.tsx).
  logo: {
    original: null,
    note: "SOLICITAR LOGOTIPO VETORIAL/ORIGINAL AO CLIENTE",
  },
  video: {
    hero: null, // >> SOLICITAR VÍDEO REAL DE FABRICAÇÃO/INSTALAÇÃO <<
    note: "SOLICITAR VÍDEOS REAIS (fabricação, faíscas, automação) PARA O HERO E CASES",
  },
} as const;
