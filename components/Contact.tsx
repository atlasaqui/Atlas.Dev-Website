import Reveal from './Reveal';
import { CONTACT_COMPOSE_URL } from '@/lib/contact';

export default function Contact() {
  return (
    <section id="contato" className="py-28" aria-labelledby="contato-title">
      <div className="container mx-auto max-w-[1160px] px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="section-tag justify-center flex">{"// Contato"}</span>
          <h2 id="contato-title" className="font-heading text-4xl sm:text-5xl mb-5">
            Vamos <span className="text-grad">construir</span>
            <br />
            algo extraordinário?
          </h2>
          <p className="text-text2 mb-9">
            Aberto a oportunidades de Front-End, Web Design, Game UI e Design Systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={CONTACT_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-sm2 bg-red-grad text-white font-semibold shadow-glow hover:brightness-110 transition"
            >
              Enviar E-mail
            </a>
            <a
              href="https://github.com/atlasaqui"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-sm2 border border-border1 hover:border-cyan/60 transition"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/atlasaqui/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-sm2 border border-border1 hover:border-cyan/60 transition"
            >
              LinkedIn ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
