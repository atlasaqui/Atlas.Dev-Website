import type { IconType } from 'react-icons';
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiRadixui,
  SiShadcnui,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
  SiDavinciresolve,
  SiUnity,
  SiGodotengine
} from 'react-icons/si';
import { FaCss3Alt, FaJava } from 'react-icons/fa6';
import {
  Database,
  Triangle,
  Cloud,
  PenTool,
  Layers,
  Code2,
  BarChart3,
  Component,
  LayoutGrid,
  Search,
  ClipboardCheck,
  Smartphone
} from 'lucide-react';

// Nome exato usado em lib/data.ts -> componente de ícone
export const SKILL_ICONS: Record<string, IconType> = {
  // Frontend & Web
  HTML5: SiHtml5,
  CSS3: FaCss3Alt,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  'Next.js': SiNextdotjs,
  Tailwind: SiTailwindcss,
  'Framer Motion': SiFramer,
  'shadcn/ui · Radix UI': SiRadixui,

  // Produto & Processo (sem marca -> lucide)
  'Design Tokens': Component,
  'Design Systems': LayoutGrid,
  'User Research': Search,
  'Testes de Usabilidade': ClipboardCheck,
  'PostHog · Mixpanel · Amplitude': BarChart3,
  'Porte Mobile / Responsivo': Smartphone,

  // Backend & Banco de Dados
  'Node.js': SiNodedotjs,
  Java: FaJava,
  PostgreSQL: SiPostgresql,
  SQL: Database,
  Back4App: Cloud,
  Vercel: Triangle,

  // Design & Edição
  Figma: SiFigma,
  Illustrator: PenTool,
  Canva: Layers,
  'DaVinci Resolve': SiDavinciresolve,

  // Game Dev & Infra
  Unity: SiUnity,
  Godot: SiGodotengine,
  Git: SiGit,
  GitHub: SiGithub,
  'VS Code': Code2
};

// ícones de marca que ficam melhor sem "encolher" a cor original
export const BRAND_ICONS = new Set([
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind',
  'Framer Motion',
  'shadcn/ui · Radix UI',
  'Node.js',
  'Java',
  'PostgreSQL',
  'Figma',
  'DaVinci Resolve',
  'Unity',
  'Godot',
  'Git',
  'GitHub',
  'PostHog · Mixpanel · Amplitude'
]);

// nome exato usado em lib/data.ts -> texto curto de "pra que serve"
export const SKILL_DESCRIPTIONS: Record<string, string> = {
  HTML5: 'Estrutura semântica de páginas web — a base de tudo que roda no navegador.',
  CSS3: 'Estilização visual: layout, cores, animações e responsividade.',
  JavaScript: 'Linguagem que dá interatividade e lógica ao front-end.',
  TypeScript: 'JavaScript com tipagem estática — menos bug, mais confiança pra escalar.',
  React: 'Biblioteca pra construir interfaces em componentes reutilizáveis.',
  'Next.js': 'Framework React com rotas, SSR e otimizações prontas pra produção.',
  Tailwind: 'CSS utilitário — estilizo direto no componente, sem sair do JSX.',
  'Framer Motion': 'Animações declarativas pra React — as transições fluidas que você vê aqui no site.',
  'shadcn/ui · Radix UI': 'Componentes acessíveis e sem estilo prévio — a base de design systems modernos.',
  'Design Tokens': 'Variáveis de design (cor, espaçamento, tipografia) centralizadas e reutilizáveis.',
  'Design Systems': 'Bibliotecas de componentes e regras consistentes pra escalar produtos com várias telas.',
  'User Research': 'Entrevistas e conversas com usuários reais antes de desenhar qualquer tela.',
  'Testes de Usabilidade': 'Validação de fluxos com usuários reais pra achar fricção antes do lançamento.',
  'PostHog · Mixpanel · Amplitude': 'Analytics de produto — entendo como as pessoas realmente usam o que eu construo.',
  'Porte Mobile / Responsivo': 'Adaptação completa de layout pra qualquer tamanho de tela, mobile-first.',
  'Node.js': 'JavaScript no back-end — APIs, servidores e scripts.',
  Java: 'Linguagem robusta orientada a objetos, usada em sistemas corporativos e Android.',
  PostgreSQL: 'Banco de dados relacional — onde os dados dos projetos vivem de verdade.',
  SQL: 'Linguagem pra consultar e manipular dados em bancos relacionais.',
  Back4App: 'Backend-as-a-Service sobre Parse — API e banco prontos sem montar servidor do zero.',
  Vercel: 'Plataforma de deploy — onde a maioria dos meus projetos front-end vai ao ar.',
  Figma: 'Onde nasce cada interface: wireframe, protótipo de alta fidelidade e handoff.',
  Illustrator: 'Vetores, ícones e ilustrações — quando o pixel não é suficiente.',
  Canva: 'Peças rápidas de social media e apresentações, sem fricção.',
  'DaVinci Resolve': 'Edição e color grading de vídeo, usado nos meus projetos de motion.',
  Unity: 'Engine de jogos — onde implemento a UI que desenho no Figma dentro do jogo de verdade.',
  Godot: 'Engine de jogos open-source — usada nos meus projetos pessoais.',
  Git: 'Controle de versão — histórico e branches de todo projeto sério.',
  GitHub: 'Hospedagem dos repositórios, colaboração e portfólio de código aberto.',
  'VS Code': 'Editor de código do dia a dia — onde tudo isso vira produto.'
};
