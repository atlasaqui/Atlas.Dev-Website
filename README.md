# atlas.dev — Victor Monteiro

Portfólio de design de interface e front-end. A identidade editorial combina tons de papel, tipografia Instrument Sans/Fraunces e um acento vermelho. Os projetos preservam suas próprias linguagens visuais.

## Trabalhos principais

- **Big Fight Small Robots:** telas e estudos de Game UI, com galeria de 17 imagens.
- **Rastros:** jogo publicado, programação e UX, com créditos da equipe e links para código e itch.io.
- **Bazar Solidário:** experiência mobile em React/TypeScript em desenvolvimento. O case distingue o cadastro integrado dos fluxos demonstrativos.
- **Bode do Nô:** estudo independente de redesign, com wireframe, interface e comparador interativo.

Correct-on, Contratas e Jet Set Radio aparecem como trabalhos complementares. Solaris e Ashen Brew têm links para os repositórios.

## Executar

Requisitos: Node.js 20 ou superior e npm.

```bash
npm ci
npm run dev
```

Acesse http://localhost:3000. Para escolher outra porta diretamente:

```bash
node node_modules/next/dist/bin/next dev -p 3001
```

```bash
npm run lint
npm run build
npm run start
```

## Estrutura

- `app/page.tsx`: página inicial.
- `app/projetos/[slug]/page.tsx`: quatro estudos de caso gerados estaticamente.
- `components/editorial/`: interface, cases e galeria acessível.
- `lib/cases.ts`: conteúdo, contribuição, status, créditos e links dos cases.
- `app/editorial.css`: tokens, estilos e adaptações de layout.
- `public/ASSETS/`: materiais reais dos projetos e da formação.
- `public/fonts/`: fontes locais e suas licenças.

Stack: Next.js 14, React 18, TypeScript, Tailwind CSS e Framer Motion. Os componentes anteriores e `lib/data.ts` permanecem como acervo; a nova interface usa `components/editorial`.

## Interações e acessibilidade

A abertura permite trocar prévias e ajustar a composição de Game UI. Os estudos apresentam galerias com diálogo nativo, navegação por setas, fechamento por Escape e retorno do foco. O comparador do Bode do Nô aceita teclado. Há menu mobile, link para pular conteúdo, foco visível, respeito a movimento reduzido e conteúdo visível sem animações.

As imagens usam o otimizador do Next.js com tamanhos responsivos. Vídeos complementares só são carregados na galeria, com controles e sem reprodução automática. As fontes são locais.

## Conteúdo e publicação

Atualize informações profissionais e links em `Studio.tsx` e `lib/cases.ts`. Não inclua métricas, participação de clientes ou funcionalidades sem evidência. Certificados e diploma já estavam no acervo público do projeto.

A branch de redesign é `feat/editorial-portfolio`. O domínio configurado nos metadados é https://atlasaquidev.vercel.app/. A publicação da nova interface depende da integração dessa branch ou de um deploy de preview; o commit da branch não substitui a versão de produção.

### Tipografia interativa da abertura

`KineticTitle.tsx` aplica Space Grotesk, Bodoni Moda e texto monoespaçado exclusivamente ao título inicial. A sequência Explorar → Compor → Construir conecta direção visual e implementação: as letras de designer abrem uma composição, se alinham com uma guia e então código ganha definição em uma construção progressiva. Os caracteres permanecem legíveis e não são substituídos aleatoriamente. Células de largura estável evitam deslocamentos de layout. Um botão oferece a mesma experiência por teclado ou toque. O título mantém um nome acessível fixo e desativa a animação com movimento reduzido. Timers e animações são cancelados ao desmontar o componente.

### Identidade e interação por seção

Os títulos usam gestos distintos: marcas de curadoria nos trabalhos, uma rota no processo, movimento nos experimentos, um traço autoral na apresentação, montagem na seção de componentes e um convite no contato. Animam ao entrar na tela e podem reagir novamente ao cursor, respeitando movimento reduzido.

O diagrama de processo acompanha a etapa aberta. O retrato oferece guias de composição. O laboratório de interface permite alterar cor e raio dos cantos de um link funcional. O contato oferece cópia de e-mail com retorno acessível. Os estudos de caso compartilham a linguagem de seus respectivos conteúdos. O selo da mesa agora diz “Traço, forma e intenção”, abrangendo desenho no Procreate e composição no Figma.
