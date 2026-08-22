# ASSET_AUDIT.md — Auditoria de Assets e Informações

Projeto: website premium **Metal & Art Serralheria** (protótipo).

## Quantidades

| Fonte | Encontrado | Utilizado |
|---|---|---|
| Instagram (@serralheriametaleart) | perfil oficial localizado | **0 assets baixados** — apenas links para o perfil (direitos/autorização pendentes) |
| Google Business/Maps | ficha correspondente (endereço/telefone batem com o site oficial) | mapa embed + links de rota/avaliações |
| Site oficial (metaleartserralheria.com.br) | telefone, e-mail, endereço, serviços citados | dados comerciais validados |
| Facebook oficial | confirmação de WhatsApp e serviços | validação cruzada |
| Placeholders/gerados | — | **10 imagens temporárias** (hero, portões, automação, corrimão, grades, porta de enrolar, antes/depois ×2, oficina, portão social) |

## Materiais que devem ser solicitados em HD (antes de publicar)

1. **Vídeo real de fabricação/soldagem com faíscas** — para o hero (substitui foto).
2. **Vídeos de portão funcionando / automação** — para cases e seção "Em ação".
3. **Pares ANTES × DEPOIS reais da mesma obra** — a seção de transformação só
   deve usar pares verdadeiros (jamais fabricar falso antes/depois).
4. **Fotos reais por categoria**: portões (deslizante, basculante, social),
   automação/motores, grades, corrimãos, guarda-corpos, portas de enrolar,
   estruturas e oficina/equipe.
5. **Logotipo vetorial/original** — atualmente usando marca tipográfica de fallback.
6. **Fachada/oficina** para a seção de localização (foto pública da ficha do
   Google pode ser usada somente após confirmar autoria/direito).

## Informações que precisam ser confirmadas com o cliente

- [ ] Nome completo do logradouro: "Rua Serra do Ouro" × "Rua Serra do Ouro Branco".
- [ ] Horários oficiais de atendimento (hoje: "consulte pelo WhatsApp").
- [ ] Raio real de atendimento (hoje: Zona Leste + Grande SP sob consulta).
- [ ] Nota e quantidade de avaliações na ficha do Google (com data de coleta) —
      campos prontos em `business.google` com `lastUpdated`.
- [ ] Avaliações reais para substituir os 3 textos ilustrativos (marcados
      `provisional: true` e sinalizados na interface).
- [ ] Ano de fundação / equipe / números da empresa — **não inventados**; os
      campos existem em `business.ts` como `null` até confirmação.
- [ ] Autorização formal para reutilizar fotos publicadas no Instagram e na
      ficha do Google (fotos de terceiros no Maps não são automaticamente liberadas).

## Imagens de baixa resolução / atenção

- As imagens geradas do protótipo têm qualidade suficiente para layout, mas
  não representam obras reais — **não publicar sem substituição**.
- Registro de origem de cada asset: `ASSET_SOURCES.md`.
- Guia de troca caminho a caminho: `CLIENT_REPLACEMENT_GUIDE.md`.

## Conformidade

- Nenhum nome de cliente foi inventado nos projetos.
- Nenhum depoimento apresentado como real sem sinalização.
- Nenhuma nota/quantidade do Google hardcoded sem data de coleta.
- Schema.org sem `AggregateRating` (sem dado validado).
- Conteúdo de terceiros: apenas links externos; nada embutido sem origem.
