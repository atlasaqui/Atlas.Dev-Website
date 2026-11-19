import { PROJECTS, type GalleryImage } from "./data";

export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  category: string;
  status: string;
  phase?: "complete" | "progress";
  summary: string;
  role: string;
  stack: string[];
  color: string;
  challenge: string;
  decisions: { title: string; text: string }[];
  result: string;
  credits: string;
  images: GalleryImage[];
  links: { label: string; href: string }[];
};

const original = (key: string) =>
  PROJECTS.find((project) => project.key === key)!;

export const cases: CaseStudy[] = [
  {
    slug: "big-fight-small-robots",
    number: "01",
    title: "Big Fight Small Robots",
    category: "GAME UI / DIREÇÃO VISUAL",
    status: "Design de interface",
    color: "#FF006E",
    summary:
      "Uma arena mobile com energia punk. Interfaces que fazem parte do universo do jogo.",
    role: "Criação e desenvolvimento visual da UI: composição, linguagem gráfica e telas para uma experiência mobile.",
    stack: ["Game UI", "Composição visual", "Design de interface"],
    challenge:
      "Organizar ações de jogo em uma interface expressiva: manter a energia da arte sem perder a hierarquia entre jogar, navegar e consultar informações.",
    decisions: [
      {
        title: "O universo começa no menu",
        text: "A arte ocupa o centro da tela. Magenta, ciano e verde ácido, recortes e texturas constroem uma linguagem punk que acompanha a interface.",
      },
      {
        title: "Uma ação para começar",
        text: "No menu apresentado, PLAY ganha escala, contraste e um recorte próprio. Recursos e configurações ficam no topo; Store e Deck ocupam a navegação inferior.",
      },
      {
        title: "Consistência sem perder expressão",
        text: "Molduras irregulares, ícones e tipografia expressiva aproximam os elementos de UI da direção visual. A galeria reúne as telas e os estudos disponíveis.",
      },
    ],
    result:
      "Conjunto de telas e estudos visuais para Game UI, com destaque para o menu principal, a navegação e a linguagem gráfica da experiência mobile.",
    credits:
      "Criação de UI e direção visual por Victor Monteiro. Telas e estudos do acervo de Big Fight Small Robots.",
    images: original("bfr").images.map((image, index) => ({
      ...image,
      caption:
        index === 0
          ? "Estudo de linguagem visual"
          : index === 1
            ? "Menu principal · ação PLAY, Store e Deck"
            : image.caption,
    })),
    links: [],
  },
  {
    slug: "rastros",
    number: "02",
    title: "Rastros",
    category: "PROGRAMAÇÃO / UX / JOGO",
    status: "Jogo publicado",
    color: "#A42E35",
    summary:
      "Uma viagem sem recomeço. Investigação, terror psicológico e um computador cheio de pistas.",
    role: "Programação e UX Design, em colaboração com a equipe do Jogo Coletivo.",
    stack: ["Java / JavaFX", "React", "JavaScript"],
    challenge:
      "Conectar exploração, diálogos e documentos em uma investigação narrativa. O computador fictício precisa funcionar como espaço de interação e como parte da história.",
    decisions: [
      {
        title: "Uma interface dentro da narrativa",
        text: "O Iwakura OS apresenta arquivos e históricos de mensagens como pistas. A linguagem de computadores dos anos 2000 dá contexto à investigação.",
      },
      {
        title: "Tecnologias com papéis diferentes",
        text: "JavaFX oferece a janela desktop e integra recursos nativos. React apresenta a interface; JavaScript organiza regras, puzzles e progressão.",
      },
      {
        title: "Observar é uma forma de jogar",
        text: "Exploração, conversas e consulta de registros compõem o percurso. O caderno reúne anotações e objetivos para acompanhar a investigação.",
      },
    ],
    result:
      "Versão Windows publicada no itch.io, com código e documentação de arquitetura disponíveis. A arte original e as interfaces podem ser exploradas abaixo.",
    credits:
      "Victor Monteiro: programação e UX. Amanda Queiroz: narrativa. Luana Meneghini: arte 2D. Matheus Medeiros: Game Design e Sound Design. Inspirado em O Perseguido, de Osman Lins.",
    images: [
      {
        src: "/ASSETS/Rastros/banner.png",
        caption: "Rastros · apresentação do jogo",
        wide: true,
      },
      {
        src: "/ASSETS/Rastros/iwakura-os.png",
        caption: "Iwakura OS · interface investigativa",
        wide: true,
      },
      {
        src: "/ASSETS/Rastros/dialogo.png",
        caption: "Diálogos e exploração",
        wide: true,
      },
      {
        src: "/ASSETS/Rastros/vagao.jpg",
        caption: "Arte do vagão · Luana Meneghini",
        wide: true,
      },
    ],
    links: [
      { label: "Baixar e jogar", href: "https://atlasaqui.itch.io/rastros" },
      {
        label: "Código e documentação",
        href: "https://github.com/atlasaqui/rastros",
      },
    ],
  },
  {
    slug: "bazar-solidario",
    number: "03",
    title: "ISAC Brechó",
    category: "PRODUTO DIGITAL / WEB + ANDROID",
    status: "Concluído · entrega acadêmica",
    phase: "complete",
    color: "#0B6676",
    summary: "Um brechó que aproxima escolhas e comunidade. Interface, catálogo, pedidos e um aplicativo Android para experimentar o percurso completo.",
    role: "UI/UX, front-end React e TypeScript, integração com a API e colaboração nos ajustes de back-end, implantação, testes e documentação da entrega. Trabalho em equipe na Residência Tecnológica, com apoio de IA nas implementações e verificações.",
    stack: ["React", "TypeScript", "Java / Spring Boot", "PostgreSQL", "Capacitor", "Figma", "Asaas Sandbox"],
    challenge: "Conectar quem procura uma peça aos brechós participantes. O percurso precisava continuar depois da interface: reservar estoque, acompanhar o pedido e distinguir o aceite da loja da confirmação do pagamento.",
    decisions: [
      { title: "Identidade que acompanha o uso", text: "A marca oficial da equipe, os ícones originais do Figma e a paleta azul-esverdeada e laranja orientam o aplicativo. A apresentação usa fotografias e pequenos exercícios para ensinar favoritos, sacola e acompanhamento." },
      { title: "Cliente e brechó, cada um no seu espaço", text: "O cliente explora, salva, monta a sacola e registra pedidos. O vendedor publica fotos, informa preço e estoque, edita anúncios e acompanha as solicitações. A API verifica permissões e vincula cada anúncio ao seu brechó." },
      { title: "Reserva e pagamento são coisas diferentes", text: "Registrar um pedido reserva estoque no servidor. O Asaas Sandbox cria a cobrança de teste e solicita o split de 10% para a ISAC. Webhook e consulta ao provedor atualizam o pagamento, sem tratar o aceite comercial como comprovante." },
      { title: "Da aplicação web ao celular", text: "O front-end React conversa com Spring Boot e PostgreSQL. O Capacitor embarca a interface no Android e usa a mesma API HTTPS. A entrega inclui testes automatizados, documentação técnica, publicação na Vercel e APK de homologação." },
    ],
    result: "Entrega acadêmica concluída, com site publicado, catálogo persistente e APK 0.1.1-sandbox. O fluxo foi exercitado com contas fictícias, anúncios, reserva/cancelamento de estoque e cobrança simulada. O aplicativo também foi testado em aparelho Android. Pagamentos são exclusivamente de teste; Mercado Livre e a operação comercial permanecem fora da homologação concluída.",
    credits: "Projeto colaborativo ISAC Brechó, desenvolvido na Residência Tecnológica em parceria com o Porto Digital. Marca oficial e trabalho de design, front-end e back-end construídos em equipe. Esta página descreve a participação de Victor e a entrega demonstrativa, sem atribuir a ele toda a autoria do sistema.",
    images: [
      { src: "/ASSETS/Atualizacoes/isac-inicio.jpg", caption: "Aplicação publicada · início mobile e marca oficial" },
      { src: "/ASSETS/Atualizacoes/isac-catalogo.jpg", caption: "Catálogo conectado à API · peças e preços de demonstração" },
      { src: "/ASSETS/Atualizacoes/isac-apresentacao.jpg", caption: "Apresentação interativa · fotografias e explicação do primeiro uso" },
      { src: "/ASSETS/Bazar/componentes-outubro.png", caption: "Processo de design · documentação de componentes no Figma", wide: true },
    ],
    links: [
      { label: "Abrir aplicativo web", href: "https://isac-brecho.vercel.app/" },
      { label: "Baixar APK de teste · Android", href: "/downloads/ISAC-Brecho-0.1.1-sandbox.apk" },
      { label: "Código e documentação da equipe", href: "https://github.com/Residencia-Tecnologica-2026-2/bazar-solidario" },
      { label: "Processo no Figma", href: "https://www.figma.com/design/UNlqj03qJ6BsaAX9sUwxiL?node-id=123-907" },
    ],
  },
  {
    slug: "caderno-ambar",
    number: "04",
    title: "Caderno Âmbar",
    category: "PYTHON / AUTOMAÇÃO / PRODUTO WEB",
    status: "Concluído · versão de estudo",
    phase: "complete",
    color: "#AD875B",
    summary: "Entender o que mudou e organizar o próximo passo. Um estudo de acompanhamento, comparação de informações e trabalho em equipe.",
    role: "Concepção, identidade, interface e desenvolvimento do estudo com apoio de IA. Documentação do fluxo, das responsabilidades das ferramentas, dos testes e das limitações de cada etapa.",
    stack: ["Python", "FastAPI", "Requests", "Beautiful Soup", "Playwright", "SQLite", "JavaScript"],
    challenge: "Uma consulta só é útil quando alguém entende a diferença e sabe o que fazer depois. O projeto organiza esse caminho com treino guiado, referência anterior, comparação e providências com responsável e revisão.",
    decisions: [
      { title: "Aprender usando um caso fictício", text: "A apresentação explica a proposta e leva a um treino sem conta. O guia acompanha ações reais: adicionar um caso, selecionar, consultar a fonte, comparar, conferir e exportar. O exemplo é identificado como fictício." },
      { title: "Cada biblioteca com uma responsabilidade", text: "No laboratório, Requests busca o HTML da fonte de treino e Beautiful Soup extrai os campos. Python compara as informações. Playwright opera e verifica a interface no navegador; ele não é o transporte da consulta externa." },
      { title: "Do laboratório à organização da equipe", text: "O código evoluiu para FastAPI e SQLite, com sessões, escritórios, carteira, versões e providências. Essa implementação de back-end é documentada separadamente da demonstração estática publicada e da versão acadêmica de equipe." },
      { title: "Falhas também fazem parte do trabalho", text: "O piloto DataJud usa JSON e Requests, não Beautiful Soup. A documentação registra consultas e indisponibilidade externa: a aplicação preserva a referência válida e controla tentativas. Uma consulta bem-sucedida não garante disponibilidade contínua." },
    ],
    result: "Versão de estudo publicada com apresentação e treino interativo, acompanhada de código, documentação e laboratório Python. A evolução local inclui persistência e organização de equipe; permanece um piloto em desenvolvimento, sem homologação para operação jurídica empresarial. A conferência humana continua necessária e o sistema não calcula prazos processuais automaticamente.",
    credits: "Estudo independente de Victor Monteiro, desenvolvido com apoio de IA. Capturas de treino usam casos fictícios. A demonstração, o back-end local e o projeto acadêmico em equipe têm escopos diferentes, descritos na documentação.",
    images: [
      { src: "/ASSETS/Atualizacoes/ambar-inicio.jpg", caption: "Apresentação atual · proposta, percurso e entrada para o treino", wide: true },
      { src: "/ASSETS/Atualizacoes/ambar-treino.jpg", caption: "Treino ativo · o guia acompanha as ações no laboratório", wide: true },
      { src: "/ASSETS/Atualizacoes/ambar-comparacao.png", caption: "Comparação de informação · registro anterior e resultado da fonte fictícia", wide: true },
    ],
    links: [
      { label: "Abrir Caderno Âmbar", href: "https://caderno-ambar.vercel.app/" },
      { label: "Código e documentação", href: "https://github.com/atlasaqui/caderno-ambar" },
    ],
  },
  {
    slug: "bode-do-no",
    number: "05",
    title: "Bode do Nô",
    category: "WEB DESIGN / FRONT-END",
    status: "Estudo independente",
    color: "#475C1B",
    summary:
      "Uma presença digital com sabor local. Identidade, conteúdo e navegação em uma experiência web.",
    role: "Design e desenvolvimento do estudo de redesign, com wireframe e interface final apresentados no portfólio.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    challenge:
      "Organizar a apresentação institucional de uma marca de gastronomia: dar lugar à identidade, às unidades, aos eventos e ao contato em um percurso legível.",
    decisions: [
      {
        title: "Conteúdo com ordem",
        text: "A proposta distribui apresentação, promoções, unidades, eventos e contato em seções que podem ser identificadas e acessadas pela navegação.",
      },
      {
        title: "Uma linguagem que acompanha a marca",
        text: "Verde, creme e dourado sustentam a composição apresentada. Fotografia e tipografia dão destaque à experiência de gastronomia.",
      },
      {
        title: "Da estrutura à interface",
        text: "O wireframe e a imagem final permitem observar a passagem da organização inicial para a composição visual. Use o comparador para explorar os dois materiais.",
      },
    ],
    result:
      "Estudo de redesign com site público e protótipo no Figma. Não representa contratação, parceria ou aprovação oficial da marca.",
    credits:
      "Estudo independente de Victor Monteiro. Nome e identidade da marca são referências do projeto.",
    images: [
      { src: "/ASSETS/BodeDoNo/inicio-site.png", caption: "Site publicado · abertura com vídeo de gastronomia e chamadas principais", wide: true },
      { src: "/ASSETS/BodeDoNo/cardapio-site.png", caption: "Cardápio completo · categorias, fotografia dos pratos e apresentação dos itens" },
      { src: "/ASSETS/BodeDoNo/unidades-site.png", caption: "Unidades · fotografias dos espaços e organização dos locais" },
      { src: "/ASSETS/BodeDoNo/delivery-site.png", caption: "Delivery · opções de pedido e sequência de funcionamento" },
      { src: "/ASSETS/BodeDoNo/eventos-site.png", caption: "Eventos · serviços apresentados em uma composição de texto e cards" },
      { src: "/ASSETS/BodeDoNo/contato-site.png", caption: "Contato · ilustração da marca e organização do formulário" },
      ...original("bodedono").images,
    ],
    links: original("bodedono").links,
  },

  {
    slug: "atlanslate",
    number: "06",
    title: "Atlanslate",
    category: "DESIGN DE PRODUTO / ANDROID / TRADUÇÃO",
    status: "Em desenvolvimento",
    phase: "progress",
    color: "#3478FF",
    summary: "Seu jogo e suas histórias, no seu idioma. Um aplicativo Android experimental para traduzir o que aparece na tela.",
    role: "Estudo de experiência, prototipagem no Figma e integração incremental de telas e controles Android em Kotlin, com apoio de IA. Evolução da apresentação sobre uma base de tradução preexistente.",
    stack: ["Kotlin / Android", "Figma", "OCR", "Prototipagem", "Motion design"],
    challenge: "Tornar uma ferramenta de tradução de tela mais simples de encontrar, configurar e interromper. O ponto de partida foi acompanhar a história de One Piece Ambition; a interface precisa deixar claro o que está ativo e o que depende de preparação.",
    decisions: [
      { title: "Começar sem atravessar as configurações", text: "Início, Biblioteca, perfil do jogo e ajustes organizam o percurso. O APK experimental já tem integração de telas com o motor existente e um painel de sessão com comandos de iniciar, parar e ajustar." },
      { title: "Uma identidade que convida a explorar", text: "Os estudos mais recentes do Figma combinam azul, amarelo, superfícies claras e um mascote expressivo. Estados dos botões, transições e reações são documentados como parte da experiência." },
      { title: "Design e implementação têm etapas próprias", text: "As capturas identificam o que é protótipo Figma e o que é uma tela executada no Android. A direção visual mais recente ainda não está integralmente implementada no APK experimental." },
      { title: "Testar no contexto em que se joga", text: "O painel de sessão foi exercitado no aparelho, com consentimento de captura solicitado pelo Android. O estado ativo do serviço não comprova precisão ou latência da tradução em todas as cenas. Voz e recursos de assistente permanecem como etapas futuras." },
    ],
    result: "Projeto em andamento, com protótipo visual e base Android experimental. A próxima etapa é aproximar a implementação da direção de design mais recente e ampliar a avaliação de uso, estabilidade e qualidade da tradução. Ainda não há uma versão pública final para download.",
    credits: "Projeto independente de Victor Monteiro, com apoio de IA e motor de tradução preexistente. Imagens de One Piece aparecem no contexto do protótipo de estudo; não há afiliação ao jogo. Nome e identidade continuam em evolução.",
    images: [
      { src: "/ASSETS/Atlanslate/inicio-design.png", caption: "Protótipo Figma · início com a direção visual mais recente" },
      { src: "/ASSETS/Atlanslate/biblioteca-design.png", caption: "Protótipo Figma · biblioteca e perfil de jogo" },
      { src: "/ASSETS/Atlanslate/sessao-android.png", caption: "Implementação Android experimental · painel de sessão executado no aparelho" },
      { src: "/ASSETS/Atlanslate/mascote-estudos.png", caption: "Estudos Figma · movimento e reações do mascote", wide: true },
    ],
    links: [{ label: "Explorar protótipo no Figma", href: "https://www.figma.com/proto/ZlRRRWq4gDLspG7viCvJtA/A-Translate?page-id=113%3A2&node-id=114-19&starting-point-node-id=114%3A19" }],
  },
];

export const complementary = PROJECTS.filter((project) =>
  ["correcton", "contratas", "jsr"].includes(project.key),
);
export const getCase = (slug: string) =>
  cases.find((project) => project.slug === slug);
