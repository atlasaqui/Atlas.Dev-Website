import type { Metadata } from "next";
import { ProfilePage } from "@/components/editorial/ProfilePage";
import { ProjectCard } from "@/components/editorial/Studio";
import { cases } from "@/lib/cases";
export const metadata: Metadata = { title: "Projetos desenvolvidos — Victor Monteiro", description: "Design, aplicações web, Android e jogos: entregas, estudos e processos.", alternates: { canonical: "/projetos" } };
export default function ProjetosPage() {
  return <ProfilePage title="Projetos, de perto" intro="O que construí, as decisões que tomei e o que aprendi no caminho. Cada projeto apresenta seu estágio e minha participação." current="/projetos"><div className="projects-grid projects-page-grid">{cases.map(project => <ProjectCard key={project.slug} project={project} />)}</div></ProfilePage>;
}
