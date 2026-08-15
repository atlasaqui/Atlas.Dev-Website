<div align="center">

# [atlas.dev]

**Victor William (@atlasaqui)**
Full-Stack Dev · UI/UX Designer · Game Art Director

*Eu transformo visão criativa em produto real.*

[Ver o site ↗](https://atlasaquidev.vercel.app/) · [Ver no Figma / Projetos ↗](https://github.com/atlasaqui) · [LinkedIn ↗](https://www.linkedin.com/in/atlasaqui/)

</div>

---

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js%2014-000000?style=for-the-badge&logo=next.js&logoColor=FF7A1A" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-000000?style=for-the-badge&logo=typescript&logoColor=FF3B30" />
  <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind%20CSS-000000?style=for-the-badge&logo=tailwindcss&logoColor=FF7A1A" />
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer%20Motion-000000?style=for-the-badge&logo=framer&logoColor=FF3B30" />
</p>

---

## // Sobre

Este repositório é o código-fonte do meu portfólio pessoal: **atlas.dev**. Não é um template genérico — é a versão em produto do meu processo real como desenvolvedor front-end e designer de UI/UX, migrada de HTML/CSS/JS vanilla para uma stack moderna sem perder a identidade visual punk/cyberpunk que sempre esteve na base.

O portfólio reúne três frentes do meu trabalho:

- **Front-End** — Next.js, TypeScript, Tailwind e Framer Motion aplicados com atenção a performance, responsividade e microinterações.
- **UI/UX** — sistemas de design, wireframes, arquitetura de informação e testes de usabilidade, documentados caso a caso no Figma.
- **Tech UI/UX (Games)** — UI/UX de jogos ponta a ponta em estúdio: do design no Figma à implementação e animação em Unity (Unity).

Formado em **Design de Animação** e atualmente cursando **Sistemas para Internet (UNICAP)**, meu diferencial é justamente esse: penso em composição, motion e sistemas visuais antes de pensar em componente. O código é a segunda etapa, não a primeira.

---

## // Stack

| Camada | Tecnologias |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Linguagem** | TypeScript |
| **Estilo** | Tailwind CSS, Design Tokens próprios |
| **Animação** | Framer Motion |
| **Componentes** | shadcn/ui · Radix UI |
| **Deploy** | Vercel |
| **Produto & Processo** | User Research, Testes de Usabilidade, PostHog · Mixpanel · Amplitude |

---

## // Sistema de design

A identidade visual segue a linguagem **punk/cyberpunk** que dá nome ao site — tipografia agressiva (Liber-Struct, Grave), fundo escuro e um gradiente de destaque usado em CTAs, links ativos e elementos de ênfase:

```
--atlas-gradient: linear-gradient(90deg, #FF3B30 0%, #FF7A1A 100%);
```

| Token | Uso |
|---|---|
| `#FF3B30` → `#FF7A1A` | Gradiente primário — CTAs, hover states, destaques |
| Base escura | Fundo padrão do site (dark mode nativo, sem toggle) |
| Liber-Struct / Grave | Tipografia de identidade (headings e elementos de marca) |

Todo texto solto (parágrafos, corpo) roda em fonte de leitura padrão para manter legibilidade — a tipografia de identidade fica reservada para headings e pontos de impacto visual, seguindo a mesma lógica de hierarquia que aplico em projetos client-facing como o Bode do Nô.

---

## // Estrutura

```
app/
  layout.tsx          → metadata, fontes e providers globais
  page.tsx             → composição da página
  globals.css          → tokens de cor, tipografia, base do design system

components/
  Header.tsx           → navegação + menu mobile animado
  Hero.tsx              → apresentação, headline e CTAs principais
  Sobre.tsx             → bio, formação, citação e card do Vinland Saga
  Skills.tsx             → stack organizada por categoria (clique para detalhe)
  FeaturedProjects.tsx    → destaques: Bode do Nô + Big Fight Small Robots
  Projects.tsx             → grid completo com filtro por categoria + galeria
  Workflow.tsx              → "Meu Processo": Estudo do Projeto → Estudo do Cliente
  Contact.tsx                → contato e canais
  Footer.tsx
  Modal.tsx / Lightbox.tsx / Reveal.tsx → utilitários de UI e animação

lib/
  data.ts               → conteúdo do site (projetos, skills, textos do processo)

public/ASSETS/           → imagens, vídeos, fontes, diploma
```

Toda edição de conteúdo — textos, projetos, skills — acontece em `lib/data.ts`. Os componentes só consomem os dados; não é necessário mexer em JSX para atualizar informação.

---

## // Rodando localmente

```bash
git clone https://github.com/atlasaqui/Atlas.Dev-Website.git
cd Atlas.Dev-Website
npm install
npm run dev
```

Acesse em `http://localhost:3000`.

## // Deploy

Deploy contínuo via Vercel, conectado diretamente ao branch principal do repositório — sem configuração adicional além do `next.config.mjs` já presente no projeto.

---

## // Seções do site

| Seção | Conteúdo |
|---|---|
| **Hero** | Headline, posicionamento (Full-Stack Dev · UI/UX Designer · Game Art Director) e CTAs para projetos, GitHub e LinkedIn |
| **Sobre** | Trajetória híbrida (Design de Animação → Sistemas para Internet), interesses pessoais e identidade de marca |
| **Certificados** | Formação complementar com contexto de atuação (ex: Residência Tecnológica — Porto Digital) |
| **Skills** | Stack dividida em Frontend & Web, Produto & Processo, Backend & Banco de Dados, Design & Edição, Game Dev & Infra |
| **Projetos em Destaque** | Bode do Nô (case de outreach institucional) e Big Fight Small Robots (direção de arte punk/cyberpunk) |
| **Projetos** | Grid completo com filtro por categoria — UI/UX, Front-End, Game/Arte, EdTech |
| **Meu Processo** | Metodologia de trabalho: Estudo do Projeto, Estudo do Cliente, Prototipagem & Construção, Acessibilidade & Portabilidade |
| **Contato** | Canais diretos para oportunidades de Front-End, Web Design, Game UI e Design Systems |

---

<div align="center">

**[atlas.dev]** · Victor William · Next.js · TypeScript · Tailwind

[github.com/atlasaqui](https://github.com/atlasaqui) · [linkedin.com/in/atlasaqui](https://www.linkedin.com/in/atlasaqui/) · [victor@atlasaqui.dev](mailto:victor@atlasaqui.dev)

</div>
