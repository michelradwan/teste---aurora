# Projeto Aurora — Protótipo navegável

Protótipo de alta fidelidade em Next.js + TypeScript + Tailwind + Framer Motion.
100% front-end — sem backend, sem banco de dados, sem autenticação real.
Feito para testar interesse e conversão via anúncios (fake door / smoke test).

## Como rodar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Fluxo

```
/                    → Landing page
/onboarding          → Perguntas, uma por tela, com barra de progresso
/analise              → Tela de carregamento emocional (mensagens sequenciais)
/resultado            → Plano inicial "personalizado" a partir das respostas
/plataforma           → Simulação de home da plataforma (Tela 5)
/kit-rotina-visual    → Página de vendas do infoproduto (funil de ticket baixo)
```

O estado das respostas do onboarding fica em `sessionStorage` via
`lib/onboarding-context.tsx` — some ao fechar a aba, sem persistência real.

## Decisões éticas tomadas no protótipo

Como esse fluxo vai rodar com tráfego pago real, direcionado a um público
vulnerável (pais de crianças com TEA), alguns ajustes foram feitos em
relação ao briefing original:

- **Nome da criança é opcional** ("como prefere chamar"), não obrigatório.
- **A tela de resultado não promete personalização 100% sob medida** — deixa
  claro que é um plano inicial baseado em categorias amplas indicadas pela
  própria pessoa.
- **Nenhuma tela simula checkout/pagamento.** O CTA final é sempre
  "entrar na lista de acesso antecipado", que é uma validação de interesse
  honesta — sem fingir uma transação que não existe.
- **Rodapés com aviso claro**: não é diagnóstico, não substitui
  acompanhamento profissional.

Se for rodar isso com anúncios reais, recomendo manter esse tom de
"em fase de validação" em qualquer peça de mídia paga também — protege a
marca a longo prazo e evita problema com política de anúncios sensíveis
(saúde/deficiência) no Meta e Google Ads.

## Identidade visual

- **Paleta**: paper (#F6F5F3), sky (#5B7FA6), sage (#8FA888), ink (#20242C)
- **Tipografia**: Fraunces (display) + Inter (corpo/UI)
- **Assinatura**: `AuroraGlow` — blobs de luz lentos no fundo, evocando o
  nome da marca, com `prefers-reduced-motion` respeitado globalmente.

## Kit de Rotina Visual (`/kit-rotina-visual`)

Infoproduto de ticket baixo (R$ 67) pensado como funil de entrada antes do
Aurora — qualifica interesse real e serve de lista quente para quando o
produto principal abrir. CTA aponta pra WhatsApp (edite o número em
`app/kit-rotina-visual/page.tsx`).
