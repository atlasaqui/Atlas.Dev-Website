import { PROJECTS, type GalleryImage } from "./data";

export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  category: string;
  status: string;
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
    category: "UI MOBILE / FRONT-END",
    status: "Em desenvolvimento",
    color: "#00667A",
    summary:
      "Estilo acessível, identidade local e moda circular. Da marca à experiência mobile de um brechó solidário.",
    role: "Design da interface, front-end React/TypeScript e adaptação ao contrato de cadastro do backend existente.",
    stack: ["React", "TypeScript", "Vite", "Figma", "API REST"],
    challenge:
      "Apresentar uma proposta de moda circular em uma interface que funciona no celular, conectando descoberta de peças, sacola e informações sobre o projeto.",
    decisions: [
      {
        title: "Uma identidade próxima de quem usa",
        text: "A marca combina um cabide minimalista com a assinatura compacta ISAC BRECHÓ. Azul petróleo, laranja e turquesa dão presença à interface; superfícies claras preservam a leitura e o cabeçalho deixa mais espaço para o conteúdo.",
      },
      {
        title: "Detalhes que pertencem à marca",
        text: "Camiseta simétrica, acessório geométrico, tênis e coração simples compartilham a mesma linguagem de traço. As categorias e informações das peças usam cores vivas com contraste, preservando a navegação inferior aprovada. A documentação no Figma separa fundamentos, componentes, seções, telas e processo, conectando decisões visuais ao comportamento da interface.",
      },
      {
        title: "Navegação na mão",
        text: "Início, catálogo, favoritos, encontros e perfil ficam na navegação inferior. Busca, filtros e sacola acompanham os principais caminhos de exploração.",
      },
      {
        title: "Integração com o que já existe",
        text: "O cadastro envia nome, e-mail e senha ao endpoint de usuários do backend Spring Boot. O cliente verifica a resposta, trata falhas e descarta a senha recebida.",
      },
    ],
    result:
      "Front-end mobile com cadastro conectado ao contrato da API e testes do cliente. Catálogo, eventos e checkout são demonstrativos; login, pedidos e vendas reais ainda não estão implementados.",
    credits:
      "Projeto colaborativo no repositório de Mateus-F-Moura. Victor Monteiro contribui com design e front-end; o backend Spring Boot já existente é trabalho da colaboração.",
    images: [
      { src: "/ASSETS/Bazar/home-atual.png", caption: "Interface atual · cabide, marca compacta e categorias com cores vivas" },
      { src: "/ASSETS/Bazar/apresentacao-atual.png", caption: "Apresentação atualizada · identidade, decisões e processo no Figma", wide: true },
      { src: "/ASSETS/Bazar/componentes-atual.png", caption: "Componentes atualizados · marca, ícones minimalistas e estados", wide: true },
      {
        src: "/ASSETS/Bazar/fundamentos.png",
        caption: "Fundamentos · marca, paleta e tipografia documentadas no Figma",
        wide: true,
      },
      { src: "/ASSETS/Bazar/secoes.png", caption: "Anatomia da interface · seções e decisões de composição", wide: true },
      { src: "/ASSETS/Bazar/processo.png", caption: "Processo · do esboço às interações e aos estados da experiência", wide: true },
    ],
    links: [
      {
        label: "Repositório colaborativo",
        href: "https://github.com/Mateus-F-Moura/bazar-solidario",
      },
      {
        label: "Processo e design no Figma",
        href: "https://www.figma.com/design/UNlqj03qJ6BsaAX9sUwxiL?node-id=93-1437",
      },
    ],
  },
  {
    slug: "bode-do-no",
    number: "04",
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
];

export const complementary = PROJECTS.filter((project) =>
  ["correcton", "contratas", "jsr"].includes(project.key),
);
export const getCase = (slug: string) =>
  cases.find((project) => project.slug === slug);
