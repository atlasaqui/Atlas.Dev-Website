export type GalleryImage = {
  src: string;
  caption: string;
  wide?: boolean;
  video?: boolean;
};

export type Project = {
  key: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  filterTags: string[];
  thumb: string;
  thumbVideo?: string;
  palette: string[];
  gradient: string;
  links: { label: string; href: string; kind: 'figma' | 'github' | 'view' }[];
  images: GalleryImage[];
};

export const PROJECTS: Project[] = [
  {
    key: 'bodedono',
    title: 'Bode do Nô',
    subtitle: 'Front-End · Next.js 14 · TypeScript · Tailwind · Framer Motion',
    description:
      'Site institucional construído do zero como centerpiece de portfólio — header com scroll detection, hero com efeito de grain em canvas e seções de Promo, Unidades, Eventos e Contato.',
    tags: ['Front-End', 'Next.js', 'Institucional'],
    filterTags: ['frontend', 'ui-ux'],
    thumb: '/ASSETS/BodeDoNo/cover.png',
    palette: ['#475C1B', '#F7EEDA', '#FBB03B', '#2E3C11'],
    gradient: 'linear-gradient(135deg,#1c2308,#3d4f17)',
    links: [
      { label: 'Visitar site ↗', href: 'https://bode-do-no.vercel.app/', kind: 'view' },
      {
        label: 'Figma ↗',
        href: 'https://www.figma.com/design/3vubJydc4JRA7WVw9IeIf7/Bode-do-N%C3%B4---Website-Reimagination?node-id=3-1514&t=oP4NWtUcfqbnlJhd-1',
        kind: 'figma'
      }
    ],
    images: [
      { src: '/ASSETS/BodeDoNo/cover.png', caption: 'Projeto final' },
      { src: '/ASSETS/BodeDoNo/wireframe.png', caption: 'Wireframe' }
    ]
  },
  {
    key: 'correcton',
    title: 'Correct-on',
    subtitle: 'EdTech · Correção de Redações · WCAG AA · Figma Prototype',
    description:
      'Plataforma de correção de atividades e redações com feedback inline, tipografia otimizada e acessibilidade para professores e alunos.',
    tags: ['EdTech', 'WCAG AA', 'Figma'],
    filterTags: ['edtech', 'ui-ux'],
    thumb: '/ASSETS/Correct-on/2.png',
    palette: ['#7b2d8b', '#e85d04', '#E63946', '#FAFAFA'],
    gradient: 'linear-gradient(135deg,#3a0064,#7c2d00)',
    links: [
      {
        label: 'Figma ↗',
        href: 'https://www.figma.com/design/nvS9tl1DSwGTM7D8VkuTSX/Correct-on?node-id=0-1',
        kind: 'figma'
      }
    ],
    images: [
      { src: '/ASSETS/Correct-on/1.png', caption: 'Tela 01' },
      { src: '/ASSETS/Correct-on/2.png', caption: 'Tela 02' },
      { src: '/ASSETS/Correct-on/3.png', caption: 'Tela 03' },
      { src: '/ASSETS/Correct-on/4.png', caption: 'Tela 04' },
      { src: '/ASSETS/Correct-on/5.png', caption: 'Tela 05' },
      { src: '/ASSETS/Correct-on/6.png', caption: 'Tela 06' },
      { src: '/ASSETS/Correct-on/8.png', caption: 'Tela 08' },
      { src: '/ASSETS/Correct-on/9.png', caption: 'Tela 09' },
      { src: '/ASSETS/Correct-on/10.png', caption: 'Tela 10' },
      { src: '/ASSETS/Correct-on/11.png', caption: 'Tela 11' }
    ]
  },
  {
    key: 'contratas',
    title: 'Contratas',
    subtitle: 'EdTech · Gamificação · UI/UX · Figma Prototype',
    description:
      'Plataforma gamificada de aprendizado — criação de personagem, streaks e missões. UI vibrante focada em engajamento contínuo.',
    tags: ['EdTech', 'Gamificação', 'UI/UX'],
    filterTags: ['edtech', 'ui-ux'],
    thumb: '/ASSETS/Contratas/card-logo.png',
    palette: ['#7B2FBE', '#FF6B35', '#FFD93D', '#0D0D1A'],
    gradient: 'linear-gradient(135deg,#0d001a,#2a0057)',
    links: [
      {
        label: 'Figma ↗',
        href: 'https://www.figma.com/design/hSr45dNn8729POKBppWPbU/HireUp?node-id=77-2653&t=bKZ7NBJac0adfbl9-1',
        kind: 'figma'
      }
    ],
    images: [
      { src: '/ASSETS/Contratas/1.png', caption: 'Tela 01' },
      { src: '/ASSETS/Contratas/2.png', caption: 'Tela 02' },
      { src: '/ASSETS/Contratas/3.png', caption: 'Tela 03' },
      { src: '/ASSETS/Contratas/4.png', caption: 'Tela 04' },
      { src: '/ASSETS/Contratas/5.png', caption: 'Tela 05' },
      { src: '/ASSETS/Contratas/6.png', caption: 'Tela 06' },
      { src: '/ASSETS/Contratas/7.png', caption: 'Tela 07' },
      { src: '/ASSETS/Contratas/8.png', caption: 'Tela 08' },
      { src: '/ASSETS/Contratas/9.png', caption: 'Tela 09' },
      { src: '/ASSETS/Contratas/10.png', caption: 'Tela 10' },
      { src: '/ASSETS/Contratas/15.png', caption: 'Tela 15', wide: true }
    ]
  },
  {
    key: 'jsr',
    title: 'Jet Set Radio — Redesign',
    subtitle: 'Front-End · Redesign · SEGA · JavaScript',
    description:
      'Landing page reimaginada de Jet Set Radio, o clássico jogo da SEGA. Um estudo independente de design e front-end inspirado na estética graffiti e na energia urbana do jogo original.',
    tags: ['SEGA', 'Redesign', 'Front-End'],
    filterTags: ['frontend', 'ui-ux'],
    thumb: '/ASSETS/jet-set-radio-card-v2.png',
    thumbVideo: '/ASSETS/JetSetRadio/1.mp4',
    palette: ['#003fb4', '#e8b800', '#ff2800', '#00c850'],
    gradient: 'linear-gradient(135deg,#003fb4,#e8b800)',
    links: [
      {
        label: 'GitHub ↗',
        href: 'https://github.com/atlasaqui/MY-SEGA-GAME-WEBSITE',
        kind: 'github'
      }
    ],
    images: [
      { src: '/ASSETS/JetSetRadio/1.mp4', caption: 'Apresentação 01', video: true, wide: true },
      { src: '/ASSETS/JetSetRadio/2.mp4', caption: 'Apresentação 02', video: true, wide: true }
    ]
  },
  {
    key: 'cogrunner',
    title: 'COG-RUNNER',
    subtitle: 'Game UI · Projeto Empresarial (NDA) · Assets de autoria própria',
    description:
      'Interface de jogo de corrida — HUD, garage, loja e upgrades. Projeto empresarial confidencial; assets exibidos são de minha autoria.',
    tags: ['Game UI', 'NDA'],
    filterTags: ['game', 'frontend'],
    thumb: '/ASSETS/Cogrunner/1.png',
    palette: ['#FF2222', '#FFD700', '#A0A0A0', '#0D0D0D'],
    gradient: 'linear-gradient(135deg,#1a0000,#3a0000,#600000)',
    links: [
      {
        label: 'Figma ↗',
        href: 'https://www.figma.com/design/j8iWelH2RNL7cE89IPw8CO/COG-RUNNER?node-id=0-1',
        kind: 'figma'
      }
    ],
    images: [
      { src: '/ASSETS/Cogrunner/1.png', caption: 'Tela 01' },
      { src: '/ASSETS/Cogrunner/2.png', caption: 'Tela 02' },
      { src: '/ASSETS/Cogrunner/3.png', caption: 'Tela 03' },
      { src: '/ASSETS/Cogrunner/4.png', caption: 'Tela 04' },
      { src: '/ASSETS/Cogrunner/5.png', caption: 'Tela 05' },
      { src: '/ASSETS/Cogrunner/6.png', caption: 'Tela 06' },
      { src: '/ASSETS/Cogrunner/7.png', caption: 'Tela 07' },
      { src: '/ASSETS/Cogrunner/8.png', caption: 'Tela 08' },
      { src: '/ASSETS/Cogrunner/9.png', caption: 'Tela 09' }
    ]
  },
  {
    key: 'bfr',
    title: 'Big Fight Small Robots',
    subtitle: 'Direção de Arte · Punk/Cyberpunk · Game UI Mobile',
    description:
      'Direção de arte punk/cyberpunk para arena mobile — batalha, HUD, loadout, quests. Estética grunge com tipografia agressiva.',
    tags: ['Punk Art', 'Game UI', '★ Destaque'],
    filterTags: ['game', 'frontend'],
    thumb: '/ASSETS/BigFightSmallRobots/1.png',
    palette: ['#FF006E', '#00CFFF', '#C8FF00', '#7B00FF'],
    gradient: 'linear-gradient(135deg,#07000f,#2a0030,#3d0000)',
    links: [{ label: 'Ver Destaque ↑', href: '#destaque', kind: 'view' }],
    images: [
      { src: '/ASSETS/BigFightSmallRobots/1.png', caption: 'Main Menu' },
      { src: '/ASSETS/BigFightSmallRobots/2.png', caption: 'Tela 02' },
      { src: '/ASSETS/BigFightSmallRobots/3.png', caption: 'Tela 03' },
      { src: '/ASSETS/BigFightSmallRobots/4.png', caption: 'Tela 04' },
      { src: '/ASSETS/BigFightSmallRobots/5.png', caption: 'Tela 05' },
      { src: '/ASSETS/BigFightSmallRobots/6.png', caption: 'Tela 06' },
      { src: '/ASSETS/BigFightSmallRobots/7.png', caption: 'Tela 07' },
      { src: '/ASSETS/BigFightSmallRobots/8.png', caption: 'Tela 08' },
      { src: '/ASSETS/BigFightSmallRobots/9.png', caption: 'Tela 09' },
      { src: '/ASSETS/BigFightSmallRobots/10.png', caption: 'Tela 10' },
      { src: '/ASSETS/BigFightSmallRobots/11.png', caption: 'Concept Art 01' },
      { src: '/ASSETS/BigFightSmallRobots/12.png', caption: 'Concept Art 02' },
      { src: '/ASSETS/BigFightSmallRobots/13.png', caption: 'Concept Art 03' },
      { src: '/ASSETS/BigFightSmallRobots/14.png', caption: 'Concept Art 04' },
      { src: '/ASSETS/BigFightSmallRobots/15.png', caption: 'Concept Art 05' },
      { src: '/ASSETS/BigFightSmallRobots/16.png', caption: 'Concept Art 06' },
      { src: '/ASSETS/BigFightSmallRobots/17.png', caption: 'Concept Art 07' }
    ]
  }
];

export const BODE_DO_NO = {
  title: 'Bode do Nô',
  subtitle: 'Front-End · Next.js · TypeScript · Tailwind · Framer Motion',
  description:
    'Site institucional construído do zero como centerpiece de portfólio — Header com scroll detection, Hero com efeito de grain em canvas, seções de Promo, Unidades, Eventos e Contato, headers de segurança HTTP e middleware.',
  tags: ['Next.js 14', 'TypeScript', 'Tailwind'],
  liveUrl: 'https://bode-do-no.vercel.app/',
  figmaUrl:
    'https://www.figma.com/design/3vubJydc4JRA7WVw9IeIf7/Bode-do-N%C3%B4---Website-Reimagination?node-id=3-1514&t=oP4NWtUcfqbnlJhd-1',
  // Coloque aqui a imagem do projeto e o wireframe em /public/ASSETS/BodeDoNo/
  coverImage: '/ASSETS/BodeDoNo/cover.png',
  wireframeImage: '/ASSETS/BodeDoNo/wireframe.png',
  process: [
    {
      title: 'Estudo do Projeto',
      desc: 'Levantamento de requisitos, wireframes de baixa fidelidade e arquitetura de componentes antes de qualquer linha de código.'
    },
    {
      title: 'Estudo do Cliente',
      desc: 'Entendimento do público-alvo, identidade da marca e objetivo de conversão para guiar decisões visuais e de copy.'
    },
    {
      title: 'Prototipagem',
      desc: 'Figma → componentes reais em React, com auto layout e variants mapeados 1:1 para props e states.'
    },
    {
      title: 'Deploy & Performance',
      desc: 'Headers de segurança, middleware, otimização de imagens e deploy contínuo na Vercel.'
    }
  ]
};

export const SKILLS = {
  frontend: [
    { name: 'HTML5', color: 'rgba(228,77,38,.12)' },
    { name: 'CSS3', color: 'rgba(38,77,228,.12)' },
    { name: 'JavaScript', color: 'rgba(247,223,30,.12)' },
    { name: 'TypeScript', color: 'rgba(49,120,198,.12)' },
    { name: 'React', color: 'rgba(97,218,251,.12)' },
    { name: 'Next.js', color: 'rgba(255,255,255,.10)' },
    { name: 'Tailwind', color: 'rgba(6,182,212,.12)' },
    { name: 'Framer Motion', color: 'rgba(155,45,229,.12)' },
    { name: 'shadcn/ui · Radix UI', color: 'rgba(255,255,255,.10)' }
  ],
  product: [
    { name: 'Design Tokens', color: 'rgba(224,16,32,.12)' },
    { name: 'Design Systems', color: 'rgba(255,96,32,.12)' },
    { name: 'User Research', color: 'rgba(0,224,96,.12)' },
    { name: 'Testes de Usabilidade', color: 'rgba(0,212,255,.12)' },
    { name: 'PostHog · Mixpanel · Amplitude', color: 'rgba(255,215,0,.12)' },
    { name: 'Porte Mobile / Responsivo', color: 'rgba(255,64,96,.12)' }
  ],
  backend: [
    { name: 'Node.js', color: 'rgba(104,160,99,.12)' },
    { name: 'Java', color: 'rgba(234,103,28,.12)' },
    { name: 'PostgreSQL', color: 'rgba(51,103,145,.12)' },
    { name: 'SQL', color: 'rgba(0,114,240,.12)' },
    { name: 'Back4App', color: 'rgba(99,102,241,.12)' },
    { name: 'Vercel', color: 'rgba(255,255,255,.10)' }
  ],
  design: [
    { name: 'Figma', color: 'rgba(242,78,30,.12)' },
    { name: 'Illustrator', color: 'rgba(255,122,0,.12)' },
    { name: 'Canva', color: 'rgba(0,196,179,.12)' },
    { name: 'DaVinci Resolve', color: 'rgba(255,200,0,.12)' }
  ],
  game: [
    { name: 'Unity', color: 'rgba(255,255,255,.10)' },
    { name: 'Godot', color: 'rgba(68,170,255,.12)' },
    { name: 'Git', color: 'rgba(240,80,51,.12)' },
    { name: 'GitHub', color: 'rgba(255,255,255,.10)' },
    { name: 'VS Code', color: 'rgba(0,122,204,.12)' }
  ]
};

export const WORKFLOW = {
  intro:
    'Todo projeto que eu assumo passa pelas mesmas duas fases antes de eu abrir o editor de código — é isso que separa uma interface bonita de uma interface que resolve o problema certo.',
  phases: [
    {
      icon: '🔍',
      title: 'Estudo do Projeto',
      desc: 'Mapeio o problema real por trás do pedido: fluxos existentes, dores dos usuários, restrições técnicas e o que já funciona (para não reinventar). Saída: wireframes, arquitetura de informação e lista de componentes reutilizáveis.',
      bullets: ['Levantamento de requisitos', 'Wireframes de baixa fidelidade', 'Arquitetura de componentes', 'Design tokens definidos cedo']
    },
    {
      icon: '🎯',
      title: 'Estudo do Cliente',
      desc: 'Entendo quem vai usar e quem vai decidir: público-alvo, tom de voz da marca, referências visuais que já funcionam pra eles e metas de conversão/engajamento. Saída: moodboard validado e critérios de sucesso mensuráveis.',
      bullets: ['Público-alvo e personas', 'Identidade visual e tom de voz', 'Benchmarks e referências', 'Métricas de sucesso definidas']
    },
    {
      icon: '🧩',
      title: 'Prototipagem & Construção',
      desc: 'Com o projeto e o cliente mapeados, vou pro Figma fazer o protótipo fiel: gero os assets, organizo o atlas e os componentes, e a partir daí construo o projeto inteiro — distribuindo tudo em seções com base no mapeamento feito lá atrás.',
      bullets: ['Protótipo de alta fidelidade no Figma', 'Criação e organização dos assets', 'Atlas e componentes distribuídos', 'Construção do projeto em seções mapeadas']
    },
    {
      icon: '♿',
      title: 'Acessibilidade & Portabilidade',
      desc: 'Com o projeto construído, garanto que funcione pra todo mundo e em qualquer lugar: ARIA roles, navegação por teclado, contraste adequado e adaptação completa pra celular e outros dispositivos.',
      bullets: ['ARIA roles e labels semânticos', 'Navegação por teclado e focus visível', 'Contraste WCAG AA verificado', 'Responsivo mobile-first em todos os breakpoints'],
      tags: ['ARIA Roles & Labels', 'Focus Ring Visível', 'Skip Links', 'Keyboard Navigation', 'Contraste 4.5:1+', 'Screen Reader OK', 'prefers-reduced-motion', 'Mobile-first / Responsivo']
    }
  ]
};
