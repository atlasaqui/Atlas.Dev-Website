import { PortraitComposition } from "@/components/editorial/SectionStories";
import { Braces, Server, Network, Database, Palette, Globe, ArrowDownToLine, DownloadCloud, Theater, ScanText, Workflow } from "lucide-react";
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiTailwindcss, SiFramer, SiGsap, SiFigma, SiSpringboot, SiPython, SiFastapi, SiPostgresql, SiSqlite, SiSupabase, SiGithub, SiGit, SiVercel, SiNotion } from "react-icons/si";
import { FaJava, FaCss3Alt } from "react-icons/fa";
import { Reveal } from "@/components/editorial/Studio";
import type { Metadata } from "next";
import Link from "next/link";
import { ProfilePage } from "@/components/editorial/ProfilePage";
import { GitHubActivity } from "@/components/editorial/GitHubActivity";

export const metadata: Metadata = { title: "Sobre — Victor Monteiro", description: "Minha trajetória e como este portfólio foi construído.", alternates: { canonical: "/sobre" } };
const toolColors: Record<string, string> = {
  "React": "#087ea4",
  "Next.js": "#111111",
  "TypeScript": "#3178c6",
  "JavaScript": "#f7df1e",
  "HTML": "#e34f26",
  "CSS": "#1572b6",
  "Tailwind CSS": "#0891b2",
  "Java": "#e76f00",
  "Spring Boot": "#6db33f",
  "Python": "#3776ab",
  "FastAPI": "#009688",
  "REST": "#475569",
  "Fetch": "#475569",
  "Requests": "#2b5b86",
  "Beautiful Soup": "#557047",
  "Playwright": "#2ead33",
  "PostgreSQL": "#4169e1",
  "SQLite": "#0f80cc",
  "Supabase": "#16845b",
  "Figma": "#f24e1e",
  "Framer Motion": "#a000e0",
  "GSAP": "#148600",
  "Git": "#f05032",
  "GitHub": "#181717",
  "Notion": "#111111",
  "Vercel": "#111111"
};

export default function SobrePage() {
  return <ProfilePage title="Prazer, Victor" intro="No digital, atlas. Gosto de pensar na interface e acompanhar o que acontece quando ela começa a funcionar.">
    <section className="profile-two-columns"><div className="profile-portrait"><PortraitComposition src="/ASSETS/Profile/perfil-sobre.jpeg" /></div><div className="profile-bio"><h2>Design e código no mesmo projeto.</h2>
      <p>Sou Victor Monteiro, desenvolvedor full stack em Recife. Estudo Sistemas para Internet na UNICAP e sou formado em Design de Animação pela UNIAESO. Essa formação aparece no meu cuidado com a composição, o movimento e a forma como as pessoas navegam por uma interface.</p>
      <p>Na Residência Tecnológica, trabalhei em equipe no ISAC Brechó. Colaborei no design, no front-end em React e na integração com a API. Também participei das reuniões de feedback e documentei testes e mudanças para ajudar a equipe a acompanhar as entregas.</p>
      <p>No Caderno Âmbar, explorei Python e automação para consultar e comparar movimentações de casos fictícios. Gosto de acompanhar o percurso inteiro, do primeiro esboço ao teste que confirma se a solução funciona.</p><Link href="/experiencia" className="text-link">Conhecer minha experiência</Link></div></section>
    <section className="profile-content-section"><h2>Ferramentas que uso no trabalho.</h2>
      <div className="skills-index">
        {[
          { icon: Braces, title: "Front-end", tools: [["React", SiReact], ["Next.js", SiNextdotjs], ["TypeScript", SiTypescript], ["JavaScript", SiJavascript], ["HTML", SiHtml5], ["CSS", FaCss3Alt], ["Tailwind CSS", SiTailwindcss]], text: "Crio componentes e interfaces responsivas." },
          { icon: Server, title: "Back-end", tools: [["Java", FaJava], ["Spring Boot", SiSpringboot], ["Python", SiPython], ["FastAPI", SiFastapi]], text: "Implemento rotas, validação de dados e regras de negócio." },
          { icon: Network, title: "APIs e automação", tools: [["REST", Globe], ["Fetch", ArrowDownToLine], ["Requests", DownloadCloud], ["Beautiful Soup", ScanText], ["Playwright", Theater]], text: "Integro serviços, extraio dados de páginas e automatizo fluxos no navegador." },
          { icon: Database, title: "Banco de dados", tools: [["PostgreSQL", SiPostgresql], ["SQLite", SiSqlite], ["Supabase", SiSupabase]], text: "Organizo e consulto dados de catálogos, pedidos e históricos." },
          { icon: Palette, title: "Design e movimento", tools: [["Figma", SiFigma], ["Framer Motion", SiFramer], ["GSAP", SiGsap]], text: "Desenho fluxos, prototipo interfaces e implemento animações." },
          { icon: Workflow, title: "Colaboração e publicação", tools: [["Git", SiGit], ["GitHub", SiGithub], ["Notion", SiNotion], ["Vercel", SiVercel]], text: "Organizo entregas, versiono o código e publico projetos web." },
        ].map(({ icon: Icon, title, tools, text }) => (
          <Reveal key={title}>
            <article className="skill-entry">
              <div className="skill-entry-copy">
                <h3><Icon size={19} aria-hidden="true" />{title}</h3>
                <p>{text}</p>
              </div>
              <ul className="skill-tools">
                {tools.map(([label, ToolIcon]) => typeof label === "string" && typeof ToolIcon !== "string" && (
                  <li key={label}><ToolIcon size={17} color={toolColors[label]} aria-hidden="true" className={label === "JavaScript" ? "skill-icon-js" : undefined} />{label}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
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
    <section className="profile-content-section profile-api"><h2>Integração com a API do GitHub.</h2><p>O portfólio consulta a API pública pelo endpoint <code>/api/github</code> e mostra até três repositórios com linguagem e data de atualização.</p><GitHubActivity /></section>
  </ProfilePage>;
}
