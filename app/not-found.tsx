import Link from "next/link";
import { Header, Footer } from "@/components/editorial/Studio";

export default function NotFound() {
  return (
    <>
      <Header casePage />
      <main id="main" className="wrap not-found">
        <p className="eyebrow">404 / FORA DO CADERNO</p>
        <h1>
          Esta página
          <br />
          ainda não existe.
        </h1>
        <p>Você pode voltar e conhecer os trabalhos selecionados.</p>
        <Link href="/#projetos" className="button button-dark">
          Explorar projetos ↗
        </Link>
      </main>
      <Footer />
    </>
  );
}
