import { ProfileMotion } from "./ProfileMotion";
import Link from "next/link";
import type { ReactNode } from "react";
import { Header, Footer } from "./Studio";

export function ProfilePage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return <><Header /><main id="main" tabIndex={-1} className="wrap profile-page">
    <header className="profile-page-heading"><p className="eyebrow">VICTOR MONTEIRO / DESIGN & DESENVOLVIMENTO</p><h1>{title}<span className="accent-text">.</span></h1><p>{intro}</p></header>
    <ProfileMotion>{children}</ProfileMotion>
    <div className="profile-contact"><p>Quer conversar sobre um projeto?</p><Link className="button button-dark" href="/#contato">Vamos conversar</Link></div>
  </main><Footer /></>;
}
