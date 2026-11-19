"use client";

import { useEffect, useState } from "react";
type Repository = { name: string; url: string; description: string | null; language: string | null; updatedAt: string };

export function GitHubActivity() {
  const [projects, setProjects] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true); setError("");
    fetch("/api/github", { signal: controller.signal }).then(async response => {
      const data = await response.json();
      if (!response.ok || !Array.isArray(data.projects)) throw new Error("GitHub indisponível");
      setProjects(data.projects);
    }).catch(() => { if (!controller.signal.aborted) setError("Não consegui consultar o GitHub agora. Tente novamente ou visite o perfil."); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [attempt]);
  return <section className="wrap github-section" aria-labelledby="github-title">
    <div className="section-top"><div><p className="eyebrow">CÓDIGO EM MOVIMENTO</p><h2 id="github-title">No GitHub, <em>agora.</em></h2></div><p>Repositórios públicos consultados pela API do GitHub.<br />Um pouco do que venho construindo.</p></div>
    {loading && <p role="status" className="github-notice">Consultando os projetos públicos…</p>}
    {!loading && error && <div className="github-notice" role="alert"><p>{error}</p><button className="button button-outline" onClick={() => setAttempt(value => value + 1)}>Tentar novamente</button></div>}
    {!loading && !error && projects.length === 0 && <p className="github-notice">Nenhum repositório público disponível nesta consulta.</p>}
    {!loading && !error && <div className="github-grid">{projects.map(project => <article key={project.url}><span className="small-label">{project.language || "REPOSITÓRIO PÚBLICO"}</span><h3><a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a></h3><p>{project.description || "Código e documentação disponíveis no repositório."}</p><time dateTime={project.updatedAt}>Atualizado em {new Date(project.updatedAt).toLocaleDateString("pt-BR", { timeZone: "America/Fortaleza" })}</time></article>)}</div>}
    <a className="text-link" href="https://github.com/atlasaqui" target="_blank" rel="noopener noreferrer">Ver perfil no GitHub</a>
  </section>;
}
