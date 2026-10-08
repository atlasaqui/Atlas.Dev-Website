import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cases, getCase } from "@/lib/cases";
import CaseView from "@/components/editorial/CaseView";

export function generateStaticParams() {
  return cases.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getCase(params.slug);
  if (!project) return { title: "Projeto não encontrado" };
  return {
    title: `${project.title} — atlas.dev`,
    description: project.summary,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: {
      title: `${project.title} — Victor Monteiro`,
      description: project.summary,
    },
  };
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const project = getCase(params.slug);
  if (!project) notFound();
  return <CaseView project={project} />;
}
