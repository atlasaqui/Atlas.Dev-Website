"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  X,
  Plus,
  Minus,
  Code2,
  Layers,
} from "lucide-react";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import { cases, complementary, type CaseStudy } from "@/lib/cases";
import { CONTACT_EMAIL, CONTACT_MAILTO, CONTACT_COMPOSE_URL } from "@/lib/contact";
import { Gallery } from "./Gallery";
import { DevelopmentStatus } from "./DevelopmentStatus";
import { KineticTitle } from "./KineticTitle";
import {
  SectionHeading,
  ProcessSketch,
  PortraitComposition,
  ComponentLab,
  CopyContact,
} from "./SectionStories";

export function Signature({ light = false }: { light?: boolean }) {
  return (
    <span className={`signature ${light ? "signature-light" : ""}`}>
      <svg width="34" height="27" viewBox="0 0 80 64" aria-hidden="true">
        <path
          d="M41 15C26 9 11 18 11 34C11 50 25 58 39 52L43 50V54H54V12H43V18L41 15ZM42 34C42 43 37 46 31 46C24 46 21 41 21 34C21 27 25 22 31 22C38 22 42 27 42 34Z"
          fill="currentColor"
          fillRule="evenodd"
        />
        <rect x="59" y="43" width="11" height="11" fill={light ? "#E26750" : "#C23725"} />
      </svg>
      atlas<span className="signature-dot">.</span>
      <span className="signature-dev">dev</span>
    </span>
  );
}

export function Header({ casePage = false }: { casePage?: boolean }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    if (casePage) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    ["projetos", "processo", "sobre", "contato"].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [casePage]);
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, []);
  return (
    <header className="studio-header">
      <div className="wrap header-inner">
        <Link href="/" aria-label="Atlas.dev — início">
          <Signature />
        </Link>
        <span className="header-note">DESIGN & DESENVOLVIMENTO</span>
        <button
          className="menu-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="studio-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav
          id="studio-navigation"
          className={open ? "is-open" : ""}
          aria-label="Navegação principal"
        >
          {[
            ["projetos", "Projetos"],
            ["processo", "Processo"],
            ["sobre", "Sobre"],
            ["contato", "Contato"],
          ].map(([id, label]) => (
            <Link
              key={id}
              href={`${casePage ? "/" : ""}#${id}`}
              className={active === id ? "active" : ""}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
              {id === "contato" && <ArrowUpRight size={15} />}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduced ? {} : { y: [16, 0] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function External({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
    >
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}

function Workbench() {
  const [selected, setSelected] = useState(0);
  const [spread, setSpread] = useState(6);
  const [view, setView] = useState<"design" | "code">("design");
  const previews = [
    {
      name: "Game UI",
      project: cases[0],
      images: [
        "/ASSETS/BigFightSmallRobots/2.png",
        "/ASSETS/BigFightSmallRobots/3.png",
      ],
    },
    {
      name: "Web / narrativa",
      project: cases[1],
      images: ["/ASSETS/Rastros/iwakura-os.png"],
    },
    {
      name: "UI mobile",
      project: cases[2],
      images: ["/ASSETS/Bazar/home-atual.jpg"],
    },
  ];
  const current = previews[selected];
  return (
    <div className="workbench">
      <div className="workbench-top">
        <span className="small-label">NA MINHA MESA</span>
        <span className="workbench-index">0{selected + 1} / 03</span>
      </div>
      <div
        className={`workbench-canvas preview-${selected} ${view === "code" ? "code-view" : ""}`}
      >
        <span className="canvas-cross cross-a" aria-hidden="true">
          +
        </span>
        <span className="canvas-cross cross-b" aria-hidden="true">
          +
        </span>
        {view === "design" ? (
          <div
            className="workbench-images"
            style={{ "--spread": `${spread}deg` } as React.CSSProperties}
          >
            {current.images.map((src, index) => (
              <div key={src} className={`bench-frame frame-${index}`}>
                <Image
                  src={src}
                  alt={`Detalhe real de ${current.project.title}${index ? " · segunda tela" : ""}`}
                  fill
                  sizes="(max-width: 600px) 55vw, 260px"
                  priority={selected === 0}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="code-note">
            <Code2 size={24} />
            <p>Decisão de interface</p>
            <h3>{current.project.title}</h3>
            <p>
              {selected === 0
                ? "Uma ação principal em destaque. Navegação e recursos em regiões distintas da tela."
                : selected === 1
                  ? "JavaFX para o desktop. React para a interface. Documentos como parte da investigação."
                  : "Interface em React. Cadastro adaptado ao contrato existente da API."}
            </p>
            <Link href={`/projetos/${current.project.slug}`}>
              Conhecer as decisões <ArrowUpRight size={16} />
            </Link>
          </div>
        )}
        <span className="bench-sticker">
          TRAÇO, FORMA
          <br />E INTENÇÃO.
        </span>
      </div>
      <div className="workbench-controls">
        <div
          className="bench-tabs"
          role="tablist"
          aria-label="Prévia de trabalhos"
        >
          {previews.map((preview, index) => (
            <button
              key={preview.name}
              role="tab"
              aria-selected={selected === index}
              aria-controls="bench-description"
              id={`bench-tab-${index}`}
              tabIndex={selected === index ? 0 : -1}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => {
                if (
                  ["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)
                ) {
                  event.preventDefault();
                  const next =
                    event.key === "Home"
                      ? 0
                      : event.key === "End"
                        ? 2
                        : (selected +
                            (event.key === "ArrowRight" ? 1 : -1) +
                            3) %
                          3;
                  setSelected(next);
                  document.getElementById(`bench-tab-${next}`)?.focus();
                }
              }}
            >
              {preview.name}
            </button>
          ))}
        </div>
        <button
          className="bench-mode"
          onClick={() => setView(view === "design" ? "code" : "design")}
          aria-pressed={view === "code"}
          aria-label={
            view === "design"
              ? "Ver decisões de interface"
              : "Ver imagens do projeto"
          }
        >
          {view === "design" ? <Code2 size={18} /> : <Layers size={18} />}
        </button>
      </div>
      <div
        className="bench-description"
        id="bench-description"
        role="tabpanel"
        aria-labelledby={`bench-tab-${selected}`}
      >
        <span>{current.project.title}</span>
        <label>
          Composição
          <input
            aria-label="Ajustar composição das prévias"
            type="range"
            min="0"
            max="12"
            value={spread}
            disabled={selected !== 0 || view === "code"}
            onChange={(event) => setSpread(Number(event.target.value))}
          />
        </label>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="accent-mark" /> VICTOR MONTEIRO / RECIFE, BRASIL
        </p>
        <KineticTitle />
        <p className="hero-intro">
          Crio interfaces para web e jogos.
          <br />
          Da composição visual à experiência que você usa.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#projetos">
            Explorar projetos <ArrowDown size={18} />
          </a>
          <a className="text-link" href="#contato">
            Vamos conversar <ArrowUpRight size={18} />
          </a>
        </div>
        <p className="hero-footnote">UI/UX · FRONT-END · GAME UI</p>
      </div>
      <Workbench />
    </section>
  );
}

function RobotTitle() {
  return (
    <div className="robot-word" aria-hidden="true">
      <span className="robot-type robot-type-blue">SMALL<br />ROBOTS.</span>
      <span className="robot-type robot-type-pink">SMALL<br />ROBOTS.</span>
    </div>
  );
}

export function ProjectArt({
  project,
  compact = false,
}: {
  project: CaseStudy;
  compact?: boolean;
}) {
  if (project.slug === "big-fight-small-robots")
    return (
      <div className={`project-art art-bfr ${compact ? "compact" : ""}`} tabIndex={compact ? 0 : undefined} aria-label={compact ? "Big Fight Small Robots: composição de Game UI" : undefined}>
        <svg className="robot-cutouts" viewBox="0 0 600 400" preserveAspectRatio="none" aria-hidden="true">
          <path className="robot-cut-blue" d="M0 88 304 41 270 68 24 147 0 135Z" />
          <path className="robot-cut-paper" d="M0 283 259 244 293 264 0 339Z" />
        </svg>
        <span className="art-caption">PUNK / GAME UI / MOBILE</span>
        <RobotTitle />
        <div className="art-phone phone-back">
          <Image
            src="/ASSETS/BigFightSmallRobots/3.png"
            alt="Segunda tela do Big Fight Small Robots"
            fill
            sizes="(max-width: 600px) 34vw, 210px"
          />
        </div>
        <div className="art-phone phone-front">
          <Image
            src="/ASSETS/BigFightSmallRobots/2.png"
            alt="Menu principal do Big Fight Small Robots"
            fill
            sizes="(max-width: 600px) 40vw, 230px"
          />
        </div>
        <span className="art-corner" aria-hidden="true">
          ↗
        </span>
      </div>
    );
  if (project.slug === "rastros")
    return (
      <div className="project-art art-rastros">
        <Image
          src="/ASSETS/Rastros/banner.png"
          alt="Banner de Rastros: uma viagem sem recomeço"
          fill
          sizes="(max-width: 700px) 100vw, 55vw"
        />
        <span className="art-caption">INVESTIGAÇÃO / TERROR PSICOLÓGICO</span>
      </div>
    );
  if (project.slug === "bazar-solidario")
    return (
      <div className="project-art art-bazar">
        <span className="art-caption">MODA CIRCULAR / IDENTIDADE LOCAL</span>
        <div className="bazar-word" aria-hidden="true">
          <Image className="isac-case-logo" src="/ASSETS/Bazar/isac-logo.svg" alt="" width={300} height={170} />
          <p>Estilo de perto.<br /><em>Histórias que continuam.</em></p>
        </div>
        <div className="bazar-phone">
          <Image
            src="/ASSETS/Bazar/home-atual.jpg"
            alt="Tela inicial mobile do ISAC Brechó"
            fill
            sizes="(max-width: 600px) 36vw, 220px"
          />
        </div>
        <span className="art-corner" aria-hidden="true">
          ✳
        </span>
      </div>
    );
  return (
    <div className="project-art art-bode">
      <Image
        src="/ASSETS/BodeDoNo/cover.png"
        alt="Interface final do estudo Bode do Nô"
        fill
        sizes="(max-width: 700px) 100vw, 55vw"
      />
      <span className="art-caption">GASTRONOMIA / WEB DESIGN</span>
    </div>
  );
}

function ProjectCard({ project }: { project: CaseStudy }) {
  return (
    <Reveal className={`project-card project-${project.slug}`}>
      {project.slug === "bazar-solidario" && <DevelopmentStatus />}
      <Link
        href={`/projetos/${project.slug}`}
        className="project-cover-link"
        aria-label={`Explorar estudo de caso: ${project.title}`}
      >
        <ProjectArt project={project} />
        <span className="cover-cta">
          Explorar projeto <ArrowUpRight size={18} />
        </span>
      </Link>
      <div className="project-heading">
        <span className="project-number">{project.number}</span>
        <div>
          <p className="small-label">{project.category}</p>
          <h3>
            <Link href={`/projetos/${project.slug}`}>{project.title}</Link>
          </h3>
        </div>
        <Link
          href={`/projetos/${project.slug}`}
          className="round-link"
          aria-label={`Abrir ${project.title}`}
        >
          <ArrowUpRight size={22} />
        </Link>
      </div>
      <p className="project-summary">{project.summary}</p>
      <div className="project-meta">
        <span>{project.slug === "bazar-solidario" ? "Projeto colaborativo" : project.status}</span>
        <span>{project.stack.slice(0, 2).join(" / ")}</span>
      </div>
    </Reveal>
  );
}

function Process() {
  const [open, setOpen] = useState(0);
  const steps = [
    {
      name: "Entender o que precisa funcionar.",
      text: "Começo pelo objetivo e pelos caminhos principais. No Bazar, a descoberta de peças e o cadastro definem a organização da experiência mobile.",
      example: "BAZAR SOLIDÁRIO / FLUXOS",
      slug: "bazar-solidario",
    },
    {
      name: "Dar forma e hierarquia.",
      text: "Composição e interação caminham juntas. No Big Fight, a ação PLAY ganha destaque enquanto recursos e navegação ocupam regiões distintas da tela.",
      example: "BIG FIGHT / HIERARQUIA",
      slug: "big-fight-small-robots",
    },
    {
      name: "Construir a experiência.",
      text: "Escolho a implementação a partir da experiência. No Rastros, JavaFX e React têm responsabilidades diferentes para conectar o desktop à interface investigativa.",
      example: "RASTROS / IMPLEMENTAÇÃO",
      slug: "rastros",
    },
    {
      name: "Revisar os detalhes.",
      text: "Confiro leitura, navegação e estados da interface. No Bazar, o cliente do cadastro tem testes para resposta válida, falha de rede e erros do servidor.",
      example: "BAZAR / ESTADOS & INTEGRAÇÃO",
      slug: "bazar-solidario",
    },
  ];
  return (
    <section id="processo" className="process-section">
      <div className="wrap process-grid">
        <div>
          <p className="eyebrow">02 / PROCESSO</p>
          <SectionHeading
            lead="O detalhe"
            accent="tem um porquê."
            theme="flow"
          />
          <p className="section-intro">
            Do primeiro esboço à interação.
            <br />
            Decisões que você pode ver no trabalho.
          </p>
          <div className="process-note">
            <span className="hand-arrow" aria-hidden="true">
              ↳
            </span>
            <span>
              Design e código
              <br />
              na mesma conversa.
            </span>
          </div>
          <ProcessSketch step={open} />
        </div>
        <div className="process-list">
          {steps.map((step, index) => (
            <div className="process-step" key={step.name}>
              <h3>
                <button
                  aria-expanded={open === index}
                  aria-controls={`process-${index}`}
                  onClick={() => setOpen(open === index ? -1 : index)}
                >
                  <span className="step-number">0{index + 1}</span>
                  <span>{step.name}</span>
                  {open === index ? <Minus size={20} /> : <Plus size={20} />}
                </button>
              </h3>
              <div id={`process-${index}`} hidden={open !== index}>
                <p>{step.text}</p>
                <Link
                  href={`/projetos/${step.slug}`}
                  className="process-example"
                >
                  {step.example}
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OtherWork() {
  const [selected, setSelected] = useState<string | null>(null);
  const project = complementary.find((item) => item.key === selected);
  return (
    <section className="wrap other-section">
      <div className="section-top">
        <div>
          <p className="eyebrow">OUTROS TERRITÓRIOS</p>
          <SectionHeading
            lead="Ideias em"
            accent="movimento."
            theme="motion"
            inline
          />
        </div>
        <p>
          Protótipos, interfaces e<br />
          experimentos de front-end.
        </p>
      </div>
      <div className="other-grid">
        {complementary.map((item, index) => (
          <article className="other-card" key={item.key}>
            <button
              className={`other-image other-${item.key}`}
              onClick={() => setSelected(item.key)}
              aria-label={`Abrir galeria de ${item.title}`}
            >
              {item.thumb ? (
                <Image
                  src={item.thumb}
                  alt={`Interface do projeto ${item.title}`}
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
              ) : (
                <div className="motion-poster">
                  <span>JSR</span>
                  <small>ESTUDO DE MOTION</small>
                  <ArrowUpRight size={25} />
                </div>
              )}
              <span className="other-open">
                <Plus size={18} />
              </span>
            </button>
            <div className="other-title">
              <span>0{index + 5}</span>
              <h3>{item.title}</h3>
            </div>
            <p>
              {item.key === "jsr"
                ? "Estudo independente de front-end com React, GSAP e referências à estética da SEGA."
                : item.key === "correcton"
                  ? "Protótipo de interface para correção de atividades e feedback."
                  : "Protótipo de aprendizagem com personagem, missões e gamificação."}
            </p>
            <External href={item.links[0].href} className="text-link">
              {item.key === "jsr" ? "Explorar o código" : "Abrir no Figma"}
            </External>
          </article>
        ))}
      </div>
      <div className="more-experiments">
        <span>MAIS EXPLORAÇÕES</span>
        <External href="https://github.com/atlasaqui/solaris">
          Solaris · fluxos de produto & integração
        </External>
        <External href="https://github.com/atlasaqui/Ashen-Brew-Ecommerce-Project">
          Ashen Brew · estudo visual
        </External>
      </div>
      {project && (
        <Gallery
          images={project.images}
          title={project.title}
          initialIndex={0}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="about-section wrap">
      <PortraitComposition />
      <div className="about-copy">
        <p className="eyebrow">03 / QUEM ESTÁ POR TRÁS</p>
        <SectionHeading
          lead="Aprendi a compor."
          accent="Escolhi construir."
          theme="signature"
        />
        <p className="about-lead">
          Sou Victor, ou atlas no digital. Design e desenvolvimento são partes
          do mesmo trabalho para mim.
        </p>
        <p>
          Minha formação em Design de Animação trouxe composição, linguagem
          visual e movimento. Hoje, em Sistemas para Internet na UNICAP,
          aproximo esse olhar da lógica e da implementação.
        </p>
        <p>
          Crio interfaces para web e jogos, com atenção ao que se vê e ao que
          acontece quando alguém interage.
        </p>
        <div className="education">
          <div>
            <span>FORMAÇÃO</span>
            <strong>Design de Animação</strong>
            <p>UNIAESO · concluído</p>
          </div>
          <div>
            <span>EM CURSO</span>
            <strong>Sistemas para Internet</strong>
            <p>UNICAP · Recife</p>
          </div>
        </div>
        <a
          className="text-link"
          href="/ASSETS/Diploma/victor_william_monteiro_da_rocha_curso_tecnologico_em_design_de_animacao%20(1).pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar diploma <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}

function ToolsAndLearning() {
  return (
    <section className="wrap learning-section">
      <div className="tools">
        <p className="eyebrow">FERRAMENTAS NO TRABALHO</p>
        <SectionHeading
          lead="Do Figma"
          accent="ao componente."
          theme="assemble"
        />
        <ComponentLab />
        <dl>
          {[
            ["Interface", "React, Next.js, TypeScript, HTML, CSS e Tailwind"],
            ["Interação", "Framer Motion, GSAP e JavaScript"],
            ["Design", "Figma, prototipagem, composição e design tokens"],
            ["Integração", "APIs REST, Java, JavaFX, PostgreSQL e Supabase"],
          ].map(([label, text]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="learning">
        <p className="eyebrow">APRENDIZADO EM CONTEXTO</p>
        <h3>
          Residência Tecnológica
          <br />
          do Porto Digital.
        </h3>
        <p>
          Participação como Designer de Produto em um projeto de educação,
          finalista do Demoday Kick Off 2025.2, conforme o certificado
          apresentado.
        </p>
        <a
          className="certificate-link"
          href="/ASSETS/Certificates/residencia-porto-digital.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/ASSETS/Certificates/residencia-porto-digital.jpg"
            alt="Certificado da Residência Tecnológica do Porto Digital"
            width={480}
            height={300}
            sizes="(max-width: 700px) 90vw, 400px"
          />
          <span>
            Ver certificado <ArrowUpRight size={16} />
          </span>
        </a>
        <a
          className="text-link"
          href="/ASSETS/Certificates/rocketseat.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          Certificado Rocketseat <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contato" className="contact-section">
      <div className="wrap">
        <div className="contact-top">
          <p className="eyebrow">04 / PRÓXIMA CONVERSA</p>
          <span>FRONT-END · UI/UX · GAME UI</span>
        </div>
        <SectionHeading
          lead="Vamos construir"
          accent="a próxima interface?"
          theme="invite"
        />
        <div className="contact-bottom">
          <p>
            Tem um projeto ou uma oportunidade?
            <br />
            Quero conhecer o que você está pensando.
          </p>
          <External
            href={CONTACT_COMPOSE_URL}
            className="button button-paper"
          >
            Enviar e-mail <span className="sr-only">para Victor Monteiro</span>
          </External>
        </div>
        <CopyContact />
        <div className="contact-links">
          <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>
          <External href="https://www.linkedin.com/in/atlasaqui/">
            LinkedIn
          </External>
          <External href="https://github.com/atlasaqui">GitHub</External>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="studio-footer">
      <div className="wrap">
        <Link href="/" aria-label="Atlas.dev — início">
          <Signature />
        </Link>
        <p>
          Victor Monteiro © {new Date().getFullYear()}
          <br />
          <span>Design, código e atenção ao detalhe.</span>
        </p>
        <a href="#main" className="text-link">
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}

export default function Studio() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <div className="discipline-strip">
          <div className="wrap">
            <span>UM OLHAR. DIFERENTES INTERFACES.</span>
            <span>
              WEB <span aria-hidden="true">↗</span> PRODUTO{" "}
              <span aria-hidden="true">↗</span> JOGOS
            </span>
          </div>
        </div>
        <section id="projetos" className="wrap projects-section">
          <div className="section-top">
            <div>
              <p className="eyebrow">01 / TRABALHOS SELECIONADOS</p>
              <SectionHeading
                lead="Projetos com"
                accent="algo a dizer."
                theme="curate"
              />
            </div>
            <p>
              Interface, intenção e implementação.
              <br />
              Conheça o trabalho e as decisões.
            </p>
          </div>
          <div className="projects-grid">
            {cases.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
        <Process />
        <OtherWork />
        <About />
        <ToolsAndLearning />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
