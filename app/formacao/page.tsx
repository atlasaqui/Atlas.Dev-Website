import { FileBadge, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { ProfilePage } from "@/components/editorial/ProfilePage";
import { Reveal } from "@/components/editorial/Studio";

export const metadata: Metadata = {
  title: "Formação acadêmica — Victor Monteiro",
  description: "Sistemas para Internet na UNICAP e Design de Animação na UNIAESO.",
  alternates: { canonical: "/formacao" },
};

export default function FormacaoPage() {
  return (
    <ProfilePage title="Formação acadêmica" intro="Estudei como dar forma e movimento a uma ideia. Hoje, na UNICAP, aprofundo como construir as aplicações que colocam essas ideias em uso.">
      <section className="education-record" aria-label="Cursos e diploma">
        <Reveal>
          <article className="education-entry">
            <div className="education-institution">
              <span className="education-status">Em andamento</span>
              <p className="education-name">UNICAP</p>
              <p>Universidade Católica de Pernambuco · Recife</p>
            </div>
            <div className="education-course">
              <h2>Sistemas para Internet</h2>
              <p>Desenvolvo aplicações web que conectam interface, APIs e banco de dados. Aplico o que aprendo na residência, em estudos próprios e neste portfólio.</p>
            </div>
          </article>
        </Reveal>
        <Reveal>
          <article className="education-entry">
            <div className="education-institution">
              <span className="education-status">Concluído</span>
              <p className="education-name">UNIAESO</p>
              <p>Centro Universitário AESO Barros Melo</p>
            </div>
            <div className="education-course">
              <h2>Design de Animação</h2>
              <p>Aprendi composição, narrativa visual e movimento. Uso esse repertório para organizar informações na tela, desenhar interações e criar interfaces para jogos.</p>
              <a className="education-diploma" href="/ASSETS/Diploma/victor_william_monteiro_da_rocha_curso_tecnologico_em_design_de_animacao%20(1).pdf" target="_blank" rel="noopener noreferrer">
                <FileBadge size={20} aria-hidden="true" />
                <span><strong>Diploma de conclusão</strong><small>Design de Animação · PDF</small></span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </article>
        </Reveal>
      </section>
      <div className="education-next">
        <Link className="text-link" href="/projetos">Ver o que construí com essa formação <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </div>
    </ProfilePage>
  );
}
