import type { Metadata } from "next";
import Link from "next/link";
import { ProfilePage } from "@/components/editorial/ProfilePage";
import { GitHubActivity } from "@/components/editorial/GitHubActivity";

export const metadata: Metadata = { title: "Sobre — Victor Monteiro", description: "Minha trajetória e como este portfólio foi construído.", alternates: { canonical: "/sobre" } };
export default function SobrePage() {
  return <ProfilePage title="Prazer, Victor" intro="No digital, atlas. Gosto de pensar na interface e acompanhar o que acontece quando ela começa a funcionar." current="/sobre">
    <section className="profile-two-columns"><h2>Design e código fazem parte do mesmo trabalho.</h2><div><p>Sou estudante de Sistemas para Internet na Universidade Católica de Pernambuco e formado em Design de Animação pela UNIAESO. A formação em design trouxe composição, linguagem visual e movimento; a programação me permite transformar essas ideias em experiências que outras pessoas usam.</p><p>Atuo com UI/UX e desenvolvimento web. Na Residência Tecnológica, participo do ISAC Brechó em equipe, colaborando com design, front-end, integração e documentação. Também desenvolvo estudos próprios de automação, jogos e interfaces.</p><p>Procuro entender o problema antes de programar, dividir o trabalho e conferir o resultado. Registro decisões, alterações e testes para facilitar a continuidade do projeto.</p><Link href="/experiencia" className="text-link">Conhecer minha experiência</Link></div></section>
    <section className="profile-content-section"><p className="eyebrow">POR DENTRO DESTE SITE</p><h2>Como construí o portfólio.</h2><p>O site usa Next.js com React e TypeScript. As páginas são organizadas pelo App Router; conteúdo e créditos dos projetos ficam em um módulo compartilhado. A identidade editorial conecta tipografia, imagens reais e interações.</p><dl className="technology-list">{[
      ["Next.js + React", "Componentes reutilizáveis, páginas e navegação pelo App Router. A rota /api/github faz a consulta à API pública do GitHub."],
      ["TypeScript", "Tipos para os estudos de caso, imagens e dados apresentados pela interface."],
      ["CSS + Tailwind CSS", "Tokens visuais, grids, composição responsiva, estados de foco e adaptações para diferentes tamanhos de tela."],
      ["Framer Motion + Web Animations API", "Movimento nas seções e animação por letras na abertura, com respeito à preferência de movimento reduzido."],
      ["Lucide React + React Icons", "Bibliotecas de ícones usadas na interface e no acervo de componentes."],
      ["Next Image + fontes locais", "Imagens responsivas e tipografia armazenada com o projeto, sem depender de fontes remotas."],
      ["Fetch + API do GitHub", "Dados públicos de repositórios, com carregamento, indisponibilidade, nova tentativa e estado sem resultados. Nenhum token é exposto."],
      ["GitHub + Vercel", "Versionamento do código e publicação do portfólio com rotas próprias para cada página e projeto."],
    ].map(([name, text]) => <div key={name}><dt>{name}</dt><dd>{text}</dd></div>)}</dl><a className="text-link" href="https://github.com/atlasaqui/Atlas.Dev-Website" target="_blank" rel="noopener noreferrer">Consultar o código deste portfólio</a></section>
    <GitHubActivity />
  </ProfilePage>;
}
