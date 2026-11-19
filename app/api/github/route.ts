import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/** Somente dados públicos: nenhum token é necessário ou enviado ao navegador. */
export async function GET() {
  try {
    const response = await fetch("https://api.github.com/users/atlasaqui/repos?per_page=30&sort=updated", {
      headers: { Accept: "application/vnd.github+json", "User-Agent": "Atlas-Dev-Portfolio" },
      next: { revalidate: 1800 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error("GitHub indisponível");
    const repos: unknown = await response.json();
    if (!Array.isArray(repos)) throw new Error("Resposta inválida");
    const projects = repos.filter(repo => typeof repo.name === "string" && typeof repo.html_url === "string" && repo.html_url.startsWith("https://github.com/atlasaqui/") && !repo.fork)
      .slice(0, 3).map(repo => ({ name: repo.name, url: repo.html_url, description: typeof repo.description === "string" ? repo.description : null, language: typeof repo.language === "string" ? repo.language : null, updatedAt: repo.updated_at }));
    return NextResponse.json({ projects, source: "GitHub API", fetchedAt: new Date().toISOString() });
  } catch {
    return NextResponse.json({ error: "Não consegui consultar o GitHub agora. Você pode tentar novamente ou abrir o perfil." }, { status: 503 });
  }
}
