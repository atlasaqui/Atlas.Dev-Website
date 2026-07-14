# atlas.dev — Portfolio v2 (Next.js)

Migração completa do portfólio de HTML/CSS/JS vanilla pra **Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion**, mantendo a identidade visual punk/cyberpunk original.

## Rodar local

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Deploy

Sobe pro GitHub e conecta na Vercel (mesmo fluxo do Bode do Nô). Zero config necessária, o `next.config.mjs` já tá pronto.

## O que mudou

- **Stack**: vanilla → Next.js 14 + TypeScript + Tailwind + Framer Motion.
- **Sobre mim**: tirei aqueles blocos de chip com emoji ("🎓 Design de Animação...", "🏋️ Nerd bombado..." etc). Ficaram só os parágrafos corridos, a citação do Thorfinn e o card do Vinland Saga.
- **Projetos removidos**: Koaly, Solaris e Ashen Brew saíram do grid (os assets continuam no zip antigo caso queira reaproveitar em outro lugar).
- **Novo bloco em destaque** (`components/FeaturedProjects.tsx`): Bode do Nô + Big Fight Small Robots lado a lado. Bode do Nô abre um popup com imagem do projeto, wireframe e o "como funciona meu fluxo de trabalho".
- **Big Fight Robots → Big Fight Small Robots**: renomeado em todo o site (pasta de assets também: `public/ASSETS/BigFightSmallRobots`).
- **Seção Power Pages → "Meu Processo"** (`components/Workflow.tsx`): troquei o pitch técnico de Power Pages por como você trabalha de fato — Estudo do Projeto + Estudo do Cliente. Edita o texto em `lib/data.ts` no objeto `WORKFLOW`.
- **Skills atualizadas** pra bater com a vaga do LinkedIn que você mandou: entrou Next.js, shadcn/ui · Radix UI, Design Tokens, Design Systems, User Research, Testes de Usabilidade, PostHog · Mixpanel · Amplitude e Porte Mobile / Responsivo.
- **100% responsivo**: menu mobile com hamburger animado, grid de projetos e skills quebram pra 1 coluna, hero empilha no mobile.

## ⚠️ Pendências pra você

1. **Assets do Bode do Nô**: coloquei placeholders em `public/ASSETS/BodeDoNo/cover.png` e `wireframe.png`. Troca pelos prints reais do projeto (mesmo nome de arquivo, ou ajusta o caminho em `lib/data.ts` → `BODE_DO_NO`).
2. **Link do site**: `BODE_DO_NO.liveUrl` em `lib/data.ts` está vazio — coloca a URL do Bode do Nô lá que o botão "Visitar Site" aparece sozinho.
3. **E-mail de contato**: confere se `victor@atlasaqui.dev` (em `components/Contact.tsx`) é o e-mail certo.

## Estrutura

```
app/
  layout.tsx        → metadata + fonte
  page.tsx           → monta a página inteira
  globals.css         → tokens de cor, fontes (Liber-Struct, Grave)
components/
  Header.tsx          → nav + menu mobile
  Hero.tsx
  Sobre.tsx
  Skills.tsx
  FeaturedProjects.tsx→ Bode do Nô + Big Fight Small Robots
  Projects.tsx        → grid com filtro + modal galeria
  Workflow.tsx        → "Meu Processo" (era Power Pages)
  Contact.tsx
  Footer.tsx
  Modal.tsx / Lightbox.tsx / Reveal.tsx → utilitários de UI/animação
lib/
  data.ts             → TODO o conteúdo (projetos, skills, texto do processo)
public/ASSETS/         → imagens, vídeos, fontes, diploma
```

Pra editar qualquer texto ou trocar um projeto, é praticamente tudo em `lib/data.ts` — não precisa mexer nos componentes.
