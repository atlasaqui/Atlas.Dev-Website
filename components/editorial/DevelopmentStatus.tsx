/** O capítulo em construção mantém o trabalho disponível para explorar. */
export function DevelopmentStatus({ expanded = false }: { expanded?: boolean }) {
  return <details className={`development-note development-translate${expanded ? " development-note-large" : ""}`}>
    <summary>
      <svg className="development-lock" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path className="development-shackle" d="M11 14V9a6 6 0 0 1 12 0" /><rect x="7" y="14" width="18" height="14" rx="3" /><path d="M16 19v4" /></svg>
      <span className="development-label"><span className="development-project-name">ATLANSLATE / PRÓXIMO CAPÍTULO</span><strong>Em desenvolvimento</strong><small>Protótipo visual e Android experimental. Conheça o que já existe e o que vem depois.</small><span className="development-invitation">Ver as etapas do estudo</span></span><span className="development-toggle" aria-hidden="true">+</span>
    </summary>
    <div className="development-chapters"><ol>
      <li><span>EXPERIMENTAR</span><strong>Tradução de tela</strong><small>Base Android experimental, biblioteca e painel de sessão integrados ao motor existente.</small></li>
      <li><span>DESENHAR</span><strong>Uma identidade mais próxima</strong><small>Direção visual azul e amarela no Figma, mascote, componentes e transições.</small></li>
      <li className="development-next"><span>PRÓXIMA ETAPA</span><strong>Aproximar design e aplicativo</strong><small>Implementar a direção mais recente e ampliar os testes de uso e tradução.</small></li>
    </ol><p className="development-footnote">As imagens diferenciam protótipo e implementação. A versão final ainda não está disponível.</p></div>
  </details>;
}
