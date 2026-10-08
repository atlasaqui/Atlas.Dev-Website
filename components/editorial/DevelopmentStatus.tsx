/** An open lock marks a chapter still being built, without hiding the work. */
export function DevelopmentStatus({ expanded = false }: { expanded?: boolean }) {
  return (
    <details className={`development-note${expanded ? " development-note-large" : ""}`}>
      <summary>
        <svg className="development-lock" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path className="development-shackle" d="M11 14V9a6 6 0 0 1 12 0" />
          <rect x="7" y="14" width="18" height="14" rx="3" />
          <path d="M16 19v4" />
          <path className="development-spark" d="M26 11h4M27 5l3-2" />
        </svg>
        <span className="development-label"><span className="development-project-name">ISAC BRECHÓ / PROJETO EM ANDAMENTO</span><strong>Em desenvolvimento</strong><small>A interface já tem forma. As próximas integrações estão em construção.</small><span className="development-invitation">Conheça as etapas do projeto</span></span>
        <span className="development-toggle" aria-hidden="true">+</span>
      </summary>
      <div className="development-chapters">
        <p>Uma experiência que evolui por etapas. Explore o que já existe e conheça as próximas integrações.</p>
        <ol>
          <li><span>01 / DESENHAR</span><strong>Identidade e sistema visual</strong><small>Marca, paleta, ícones próprios e documentação no Figma.</small></li>
          <li><span>02 / CONSTRUIR</span><strong>Interface e cadastro</strong><small>Front-end mobile e cadastro adaptado ao contrato da API. Catálogo e checkout demonstrativos.</small></li>
          <li className="development-next"><span>03 / CONECTAR · PRÓXIMA ETAPA</span><strong>Login e pedidos reais</strong><small>Integrações ainda por implementar. Novas atualizações vão dar continuidade a este trabalho.</small></li>
        </ol>
        <p className="development-footnote">Este estudo de caso acompanha a evolução do projeto: novas decisões, telas e integrações serão apresentadas aqui.</p>
      </div>
    </details>
  );
}
