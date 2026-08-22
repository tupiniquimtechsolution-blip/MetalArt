/**
 * ============================================================
 *  METAL & ART SERRALHERIA — CONFIGURAÇÃO CENTRAL DA EMPRESA
 * ============================================================
 *  Fontes: site oficial (metaleartserralheria.com.br),
 *  página oficial no Facebook e ficha pública do Google.
 *
 *  Campos marcados com `// CONFIRMAR` precisam de validação
 *  direta com o cliente antes da publicação definitiva.
 * ============================================================
 */

export type Review = {
  name: string;
  rating: number;
  text: string;
  source: string;
  provisional?: boolean;
};

export const business = {
  name: "Metal & Art Serralheria",
  shortName: "Metal & Art",
  slogan: "Do metal à solução.",
  description:
    "Serralheria sob medida em São Paulo: reformas e reparos em portões, automação, travas eletromagnéticas, fechaduras, grades, corrimãos, guarda-corpos, portas de enrolar e estruturas metálicas para residências, condomínios e empresas.",

  // ---- Contato (confirmado no site oficial + Facebook) ----
  phoneDisplay: "(11) 94937-1578",
  whatsappDigits: "5511949371578",
  email: "serralheria.metaleart@gmail.com",
  website: "https://metaleartserralheria.com.br/",

  // ---- Redes sociais (confirmadas) ----
  instagram: {
    handle: "@serralheriametaleart",
    url: "https://www.instagram.com/serralheriametaleart/",
  },
  facebook: {
    url: "https://www.facebook.com/serralheriametaleart/",
  },

  // ---- Endereço (confirmado no site oficial) ----
  // NOTA: em alguns materiais o logradouro aparece como
  // "Rua Serra do Ouro Branco". Confirmar nome completo com o cliente.
  address: {
    street: "Rua Serra do Ouro, 267",
    city: "São Paulo",
    state: "SP",
    zip: "08270-330",
    region: "Zona Leste",
  },

  get mapsEmbedUrl() {
    const q = encodeURIComponent(
      "Metal Art Serralheria — Rua Serra do Ouro, 267, São Paulo"
    );
    return `https://www.google.com/maps?q=${q}&output=embed`;
  },
  get mapsDirectionsUrl() {
    const q = encodeURIComponent(
      "Rua Serra do Ouro, 267, São Paulo - SP, 08270-330"
    );
    return `https://www.google.com/maps/dir/?api=1&destination=${q}`;
  },
  get mapsReviewsUrl() {
    const q = encodeURIComponent("Metal Art Serralheria São Paulo");
    return `https://www.google.com/maps/search/?api=1&query=${q}`;
  },

  // ---- Horários ---- // CONFIRMAR horários oficiais com o cliente
  hours: [
    { days: "Segunda a sexta", time: "consulte pelo WhatsApp" },
    { days: "Sábado", time: "consulte pelo WhatsApp" },
    { days: "Domingo", time: "fechado" },
  ],
  hoursNote:
    "Atendimento e visitas técnicas com hora marcada. Fale com a gente antes de ir até a oficina.",

  // ---- Áreas atendidas ---- // CONFIRMAR raio real de atendimento
  serviceAreas: ["Zona Leste de São Paulo", "Grande São Paulo (sob consulta)"],
  serviceAreasNote:
    "Demais regiões da capital e Grande SP: consulte disponibilidade pelo WhatsApp.",

  // ---- Prova social (Google) ----
  // Regra: nota e quantidade NUNCA ficam congeladas sem data de coleta.
  google: {
    rating: null as string | null, // CONFIRMAR na ficha do Google
    reviewCount: null as number | null, // CONFIRMAR na ficha do Google
    lastUpdated: "pendente de coleta",
    note: "Exiba aqui a nota real da ficha do Google após validação.",
  },

  // Avaliações de demonstração para o protótipo.
  // ANTES DE PUBLICAR: substituir pelos textos reais das avaliações
  // públicas da ficha do Google (ver ASSET_AUDIT.md).
  provisionalReviews: [
    {
      name: "Carlos A.",
      rating: 5,
      text: "Portão reformado e automatizado. Trabalho caprichado e combinado cumprido.",
      source: "Google (texto ilustrativo)",
      provisional: true,
    },
    {
      name: "Fernanda R.",
      rating: 5,
      text: "Fizeram o corrimão da escada do jeito que eu queria. Acabamento muito bom.",
      source: "Google (texto ilustrativo)",
      provisional: true,
    },
    {
      name: "Roberto S.",
      rating: 5,
      text: "A porta de enrolar travava toda semana. Trocaram a mola e resolveu na hora.",
      source: "Google (texto ilustrativo)",
      provisional: true,
    },
  ] as Review[],

  // ---- Dados que NÃO inventamos ----
  founded: null as string | null, // CONFIRMAR ano de fundação
  teamSize: null as string | null, // CONFIRMAR
  projectsDelivered: null as string | null, // CONFIRMAR
} as const;

export type Business = typeof business;
