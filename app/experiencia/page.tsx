import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { getCase } from "@/lib/cases";
import { ProjectArt } from "@/components/editorial/Studio";
import { ProfilePage } from "@/components/editorial/ProfilePage";
export const metadata: Metadata = { title: "Experiência — Victor Monteiro", description: "Residência Tecnológica, colaboração e projetos de design e desenvolvimento.", alternates: { canonical: "/experiencia" } };
export default function ExperienciaPage() {
  return <ProfilePage title="Trabalho que se constrói junto" intro="Minha experiência reúne projetos de residência, desenvolvimento em equipe e estudos independentes. Cada contexto tem seu próprio desafio.">
    <section className="profile-content-section"><h2>Experiência profissional e prática.</h2><div className="profile-timeline experience-grid">
      <article><Link className="experience-art experience-art-isac" href="/projetos/bazar-solidario"><ProjectArt project={getCase("bazar-solidario")!} /><span className="experience-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span></Link><div><span className="small-label">RESIDÊNCIA TECNOLÓGICA / PROJETO COLABORATIVO</span><h3>ISAC Brechó</h3><p className="institution">Residência em parceria com o Porto Digital</p><p>Atuação em UI/UX e front-end com React e TypeScript, organização de fluxos e colaboração na integração com a API existente. A entrega evoluiu para catálogo, pedidos, testes de pagamento e um aplicativo Android de homologação.</p><details><summary>Como trabalhei com a equipe</summary><p>A equipe divide o trabalho entre design, front-end e back-end. Organizamos tarefas e responsáveis no Notion, acompanhamos entregas e participamos de reuniões para apresentar avanços, receber feedback e ajustar o projeto.</p><p>Também elaboro e atualizo documentação sobre testes, resultados, mudanças e continuidade do desenvolvimento. O back-end e a identidade são parte do trabalho coletivo.</p></details><Link className="text-link" href="/projetos/bazar-solidario">Conhecer a entrega e minha participação</Link></div></article>
      <article><Link className="experience-art experience-art-rastros" href="/projetos/rastros"><span className="experience-preview"><Image src="/ASSETS/Rastros/banner.png" alt="Arte de apresentação do jogo Rastros" fill sizes="(max-width: 700px) 90vw, 360px" /></span><span className="experience-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span></Link><div><span className="small-label">PROJETO COLABORATIVO / PROGRAMAÇÃO E UX</span><h3>Rastros</h3><p>Programação e UX em colaboração com a equipe do Jogo Coletivo. O trabalho conecta JavaFX, React e uma interface de investigação narrativa, com documentos e conversas como parte da experiência.</p><Link className="text-link" href="/projetos/rastros">Explorar o estudo de caso</Link></div></article>
      <article>
        <Link className="experience-art experience-art-ambar" href="/projetos/caderno-ambar">
          <ProjectArt project={getCase("caderno-ambar")!} /><span className="experience-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
        </Link>
        <div>
          <span className="small-label">ESTUDO INDEPENDENTE / AUTOMAÇÃO</span>
          <h3>Caderno Âmbar</h3>
          <p>Estudo em Python sobre consulta e comparação de movimentações processuais. A demonstração usa casos fictícios para apresentar o fluxo de acompanhamento.</p>
          <Link className="text-link" href="/projetos/caderno-ambar">Ver Caderno Âmbar</Link>
        </div>
      </article>
      <article>
        <Link className="experience-art experience-art-atlanslate" href="/projetos/atlanslate">
          <ProjectArt project={getCase("atlanslate")!} /><span className="experience-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
        </Link>
        <div>
          <span className="small-label">ESTUDO INDEPENDENTE / EM DESENVOLVIMENTO</span>
          <h3>Atlanslate</h3>
          <p>Aplicativo Android experimental para traduzir o que aparece na tela. Trabalho no protótipo da interface e na evolução do aplicativo.</p>
          <Link className="text-link" href="/projetos/atlanslate">Ver Atlanslate</Link>
        </div>
      </article>
    </div></section>
  </ProfilePage>;
}
