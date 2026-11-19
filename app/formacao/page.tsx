import type { Metadata } from "next";
import { ProfilePage } from "@/components/editorial/ProfilePage";
export const metadata: Metadata = { title: "Formação acadêmica — Victor Monteiro", description: "Sistemas para Internet na UNICAP e Design de Animação na UNIAESO.", alternates: { canonical: "/formacao" } };
export default function FormacaoPage() {
  return <ProfilePage title="O que venho aprendendo" intro="A composição veio do design. Hoje, aproximo esse olhar da lógica e da construção de aplicações." current="/formacao">
    <section className="profile-content-section"><h2>Formação acadêmica.</h2><div className="profile-timeline">
      <article><span className="small-label">EM ANDAMENTO</span><h3>Sistemas para Internet</h3><p className="institution">Universidade Católica de Pernambuco · Recife</p><p>Formação voltada ao desenvolvimento de aplicações e sistemas para a web. Os projetos conectam interface, programação, banco de dados, integração e trabalho em equipe.</p><p>Aplico esses conhecimentos em projetos de residência, estudos de desenvolvimento e na construção deste portfólio em Next.js.</p></article>
      <article><span className="small-label">CONCLUÍDO</span><h3>Design de Animação</h3><p className="institution">UNIAESO</p><p>Base em composição, narrativa visual e movimento. Esse repertório aparece na hierarquia das interfaces, no cuidado com os estados de interação e nas experiências para jogos.</p><a className="text-link" href="/ASSETS/Diploma/victor_william_monteiro_da_rocha_curso_tecnologico_em_design_de_animacao%20(1).pdf" target="_blank" rel="noopener noreferrer">Consultar diploma</a></article>
    </div></section>
    <section className="profile-two-columns"><h2>Aprender também é colocar em prática.</h2><div><p>Nos estudos próprios, exploro Python e automação com o Caderno Âmbar, desenvolvimento de interfaces e integração entre aplicações. Os projetos publicados apresentam o que foi construído, minha participação e os limites da entrega.</p><p>Também documento testes, decisões e alterações. Isso me ajuda a entender o código e permite que outras pessoas acompanhem o trabalho.</p></div></section>
  </ProfilePage>;
}
