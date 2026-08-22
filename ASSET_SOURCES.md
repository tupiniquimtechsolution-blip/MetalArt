# ASSET_SOURCES.md — Registro de Origem dos Assets

Site: **Metal & Art Serralheria** — protótipo premium.
Todo asset relevante está centralizado em `src/config/assets.ts`.

> **Regra geral:** as imagens deste protótipo são **assets temporários gerados
> para demonstração** (Prioridade 5 do briefing). Antes da publicação, devem
> ser substituídas por materiais oficiais da empresa (Prioridades 1–4),
> validando direitos de uso. **Nenhum conteúdo do Instagram foi baixado ou
> reutilizado** — apenas há links para o perfil oficial.

---

## Imagens

| Arquivo (chave em assets.ts) | URL atual | Origem | Categoria | Uso | Situação |
|---|---|---|---|---|---|
| `hero.main` | image.qwenlm.ai/.../6525dc2f | Asset temporário gerado | Soldagem/faíscas | Home > Hero; Processo (etapa SOLDA) | **Substituir por vídeo/foto real de fabricação** (solicitar em HD) |
| `gates.sliding` | image.qwenlm.ai/.../7860c4b9 | Asset temporário gerado | Portão deslizante | Projetos, Serviços, Processo (instalação), Espaços (condomínios) | Substituir por foto real de portão entregue |
| `gates.social` | image.qwenlm.ai/.../a257dded | Asset temporário gerado | Portão social | Projetos, Serviços (portões/fechaduras) | Substituir por foto real |
| `automation.motor` | image.qwenlm.ai/.../7fa87b1e | Asset temporário gerado | Motor/cremalheira | Projetos, Serviços (automação), Sobre | Substituir por foto real de automação instalada |
| `railings.handrail` | image.qwenlm.ai/.../7d0f3676 | Asset temporário gerado | Corrimão/guarda-corpo | Projetos, Serviços (corrimãos) | Substituir por foto real |
| `grids.window` | image.qwenlm.ai/.../cd60231b | Asset temporário gerado | Grade de proteção | Projetos, Serviços (grades), capítulos | Substituir por foto real |
| `rollingDoors.storefront` | image.qwenlm.ai/.../82af2131 | Asset temporário gerado | Porta de enrolar | Projetos, Serviços, Espaços (comércios) | Substituir por foto real |
| `beforeAfter.before` | image.qwenlm.ai/.../0d766918 | Asset temporário gerado | Portão antigo (antes) | Home > Antes/Depois, case de reforma | **Substituir por par ANTES real** (solicitar original) |
| `beforeAfter.after` | image.qwenlm.ai/.../884774a0 | Asset temporário gerado | Portão reformado (depois) | Home > Antes/Depois, projetos p3/p9, Espaços (residências) | **Substituir por par DEPOIS real** (mesma obra do "antes") |
| `workshop.fabrication` | image.qwenlm.ai/.../011a3085 | Asset temporário gerado | Oficina/corte | Processo, Sobre, Projetos (estruturas), Espaços (empresas) | Substituir por foto real da oficina/equipe |

## Logo

| Item | Situação |
|---|---|
| `logo.original` | **SOLICITAR LOGOTIPO VETORIAL/ORIGINAL AO CLIENTE.** Não foi possível obter arquivo oficial em resolução adequada. O site usa marca tipográfica SVG própria ("METAL & ART", em `src/components/ui.tsx`) como fallback — não é a marca oficial. |

## Vídeos

| Item | Situação |
|---|---|
| `video.hero` | **SOLICITAR VÍDEOS REAIS** (fabricação, faíscas, portão funcionando, automação) para o hero e para cases. O protótipo usa fotografia estática. |

## Avaliações (Google)

- Nota/quantidade: **não exibidas como dado congelado** — campo `business.google.rating`
  está `null` até coleta validada na ficha oficial (ver `src/config/business.ts`,
  chave `google` com `lastUpdated`).
- Textos exibidos: **ilustrativos**, marcados com `provisional: true` e com nota
  visível na seção. Substituir por avaliações públicas reais antes de publicar.

## Mapa / Google Business

- Embed: `https://www.google.com/maps?q=…&output=embed` com o endereço oficial
  validado no site (Rua Serra do Ouro, 267 — São Paulo/SP, CEP 08270-330).
- Botão de rota e link de avaliações apontam para a busca da ficha no Google.

## Instagram

- Nenhum asset baixado. Todos os botões/cards da seção "Metal & Art em Ação"
  linkam para `https://www.instagram.com/serralheriametaleart/`.
- Antes de publicar usando fotos do perfil: **registrar autorização de uso** e
  baixar os originais em alta pela própria empresa.

## Dados comerciais validados

- WhatsApp/telefone: **(11) 94937-1578** (site oficial + Facebook oficial).
- E-mail: **serralheria.metaleart@gmail.com** (site oficial).
- Endereço: **Rua Serra do Ouro, 267 — São Paulo/SP, CEP 08270-330** (site oficial).
  Nota: alguns materiais citam "Rua Serra do Ouro Branco" — confirmar o nome
  completo do logradouro com o cliente.
