import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victor Monteiro — Design & Front-end | atlas.dev",
  description:
    "Victor Monteiro: UI/UX, front-end e interfaces para jogos. Conheça projetos, decisões de design e implementação — do Figma ao componente.",
  metadataBase: new URL("https://atlasaquidev.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Victor Monteiro — Design & Front-end",
    description:
      "Olhar de designer. Mão no código. Interfaces para web e jogos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="overflow-x-hidden">
      <body>
        <a href="#main" className="skip-link">
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
