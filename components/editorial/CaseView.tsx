"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Plus } from "lucide-react";
import { MotionConfig } from "framer-motion";
import { cases, type CaseStudy } from "@/lib/cases";
import {
  Header,
  Footer,
  Contact,
  External,
  ProjectArt,
  Reveal,
} from "./Studio";
import { Gallery } from "./Gallery";
import { SectionHeading } from "./SectionStories";

function Comparison() {
  const [position, setPosition] = useState(50);
  return (
    <section className="comparison-section">
      <div className="section-top">
        <div>
          <p className="eyebrow">ESTRUTURA → COMPOSIÇÃO</p>
          <SectionHeading
            lead="Do wireframe"
            accent="à interface."
            theme="assemble"
          />
        </div>
        <p>
          Dois materiais do projeto.
          <br />
          Arraste para explorar a composição.
        </p>
      </div>
      <div className="comparison">
        <Image
          src="/ASSETS/BodeDoNo/cover.png"
          alt="Composição final do estudo Bode do Nô"
          fill
          sizes="100vw"
        />
        <div
          className="comparison-wire"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src="/ASSETS/BodeDoNo/wireframe.png"
            alt="Wireframe do estudo Bode do Nô"
            fill
            sizes="100vw"
          />
        </div>
        <span className="compare-label compare-left">WIREFRAME</span>
        <span className="compare-label compare-right">INTERFACE FINAL</span>
        <div
          className="compare-divider"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <span>↔</span>
        </div>
      </div>
      <label className="comparison-control">
        Quanto do wireframe você quer ver?
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Porcentagem visível do wireframe"
        />
        <output>{position}%</output>
      </label>
      <p className="image-note">
        Os materiais têm enquadramentos próprios; o comparador apresenta
        estrutura e composição.
      </p>
    </section>
  );
}

export default function CaseView({ project }: { project: CaseStudy }) {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const next =
    cases[
      (cases.findIndex((item) => item.slug === project.slug) + 1) % cases.length
    ];
  return (
    <MotionConfig reducedMotion="user">
      <Header casePage />
      <main id="main" tabIndex={-1}>
        <section className="wrap case-intro">
          <Link href="/#projetos" className="text-link">
            <ArrowLeft size={16} /> Todos os projetos
          </Link>
          <div className="case-heading">
            <p className="eyebrow">
              {project.number} / {project.category}
            </p>
            <h1>
              {project.title}
              <span className="accent-text">.</span>
            </h1>
            <p className="case-summary">{project.summary}</p>
            <div className="case-status">
              <span className="status-dot" />
              {project.status}
            </div>
          </div>
          <div className="case-hero-art">
            <ProjectArt project={project} compact />
          </div>
          <div className="case-facts">
            <div>
              <span>MINHA CONTRIBUIÇÃO</span>
              <p>{project.role}</p>
            </div>
            <div>
              <span>FERRAMENTAS & PRÁTICA</span>
              <p>{project.stack.join(" · ")}</p>
            </div>
            <div>
              <span>EXPLORE O PROJETO</span>
              {project.links.length ? (
                project.links.map((link) => (
                  <External
                    href={link.href}
                    key={link.href}
                    className="text-link"
                  >
                    {link.label}
                  </External>
                ))
              ) : (
                <button
                  className="text-link"
                  onClick={() => setGalleryIndex(1)}
                >
                  Explorar telas <ArrowUpRight size={16} />
                </button>
              )}
            </div>
          </div>
        </section>
        <section className="wrap case-story">
          <div className="case-story-title">
            <p className="eyebrow">CONTEXTO & INTENÇÃO</p>
            <SectionHeading
              lead="O que precisava"
              accent="ganhar forma."
              theme="flow"
            />
          </div>
          <div>
            <p className="case-challenge">{project.challenge}</p>
            <div className="decisions">
              {project.decisions.map((decision, index) => (
                <Reveal key={decision.title}>
                  <article>
                    <span>0{index + 1}</span>
                    <div>
                      <h3>{decision.title}</h3>
                      <p>{decision.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="case-gallery-section">
          <div className="wrap">
            <div className="section-top">
              <div>
                <p className="eyebrow">TELAS & DETALHES</p>
                <SectionHeading
                  lead="O trabalho,"
                  accent="de perto."
                  theme="curate"
                />
              </div>
              <p>
                Abra uma imagem para ampliar.
                <br />
                Na galeria, use as setas ou o teclado.
              </p>
            </div>
            <div
              className={`case-image-grid ${project.slug === "big-fight-small-robots" ? "portrait-grid" : ""}`}
            >
              {project.images
                .slice(0, expanded ? undefined : 6)
                .map((image, index) => (
                  <figure key={image.src}>
                    <button
                      className={`case-image ${image.wide ? "wide-image" : ""}`}
                      onClick={() => setGalleryIndex(index)}
                      aria-label={`Ampliar: ${image.caption}`}
                    >
                      {image.video ? (
                        <span>Vídeo · {image.caption}</span>
                      ) : (
                        <Image
                          src={image.src}
                          alt={image.caption}
                          fill
                          sizes="(max-width: 700px) 90vw, 45vw"
                        />
                      )}
                      <span className="image-expand">
                        <Plus size={20} />
                      </span>
                    </button>
                    <figcaption>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
            </div>
            {project.images.length > 6 && (
              <button
                className="button button-outline gallery-more"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {expanded
                  ? "Mostrar seleção"
                  : `Ver todas as ${project.images.length} imagens`}
                <Plus size={18} />
              </button>
            )}
          </div>
        </section>
        {project.slug === "bode-do-no" && (
          <div className="wrap">
            <Comparison />
          </div>
        )}
        <section className="wrap case-result">
          <p className="eyebrow">ENTREGA & CONTINUIDADE</p>
          <SectionHeading
            lead="O que fica"
            accent="desse trabalho."
            theme="signature"
          />
          <p className="result-copy">{project.result}</p>
          <div className="case-credits">
            <span>CRÉDITOS & CONTEXTO</span>
            <p>{project.credits}</p>
          </div>
        </section>
        <Link href={`/projetos/${next.slug}`} className="next-project">
          <div className="wrap">
            <span>PRÓXIMO PROJETO / {next.number}</span>
            <h2>
              {next.title}
              <ArrowUpRight />
            </h2>
          </div>
        </Link>
        <Contact />
      </main>
      <Footer />
      {galleryIndex !== null && (
        <Gallery
          images={project.images}
          title={project.title}
          initialIndex={galleryIndex}
          onClose={() => setGalleryIndex(null)}
        />
      )}
    </MotionConfig>
  );
}
