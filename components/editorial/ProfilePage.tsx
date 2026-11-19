import Link from "next/link";
import type { ReactNode } from "react";
import { Header, Footer } from "./Studio";

export function ProfilePage({ title, intro, current, children }: { title: string; intro: string; current: string; children: ReactNode }) {
  return <><Header casePage /><main id="main" tabIndex={-1} className="wrap profile-page">
    <Link className="text-link" href="/">Voltar ao início</Link>
    <header className="profile-page-heading"><p className="eyebrow">VICTOR MONTEIRO / DESIGN & DESENVOLVIMENTO</p><h1>{title}<span className="accent-text">.</span></h1><p>{intro}</p></header>
    <nav className="profile-tabs" aria-label="Conheça meu trabalho">{[["/sobre", "Sobre"], ["/formacao", "Formação acadêmica"], ["/experiencia", "Experiência"], ["/projetos", "Projetos"]].map(([href, label]) => <Link key={href} href={href} aria-current={current === href ? "page" : undefined}>{label}</Link>)}</nav>
    {children}
    <div className="profile-contact"><p>Quer conversar sobre um projeto?</p><Link className="button button-dark" href="/#contato">Vamos conversar</Link></div>
  </main><Footer /></>;
}
