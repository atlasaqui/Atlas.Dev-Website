'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import Reveal from './Reveal';
import Lightbox from './Lightbox';

export default function Sobre() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="sobre" className="py-24" aria-labelledby="sobre-title">
      <div className="container mx-auto max-w-[1160px] px-6 grid md:grid-cols-[1.2fr_.8fr] gap-14">
        <Reveal direction="left">
          <span className="section-tag">{'// Sobre mim'}</span>
          <h2 id="sobre-title" className="font-heading text-4xl mb-7">
            Além do <span className="text-grad">código</span>
          </h2>

          <div className="space-y-4 text-text1/85 leading-relaxed">
            <p>
              Oi! Sou <strong>Victor Monteiro</strong>, mas no universo digital me chamo{' '}
              <strong>atlas</strong>. Formado em <strong>Design de Animação</strong> e cursando{' '}
              <strong>Sistemas para Internet na UNICAP</strong>, minha trajetória é
              híbrida — aprendi a compor imagens antes de aprender a compilar código.
            </p>
            <p>
              Sou genuinamente apaixonado pelo que faço. Tecnologia e arte não são disciplinas
              separadas pra mim — são a mesma coisa vista de ângulos diferentes. Sou uma pessoa
              bastante sociável e empática, apesar de parecer calado no primeiro contato.
            </p>
            <p>
              No meu tempo livre você me encontra na academia treinando, jogando, maratonando anime
              ou assistindo terror. Tenho uma
              cachorrinha chamada <strong>Kaori</strong> — homenagem direta a{' '}
              <em>Your Lie in April</em>, que me partiu emocionalmente do melhor jeito possível.
            </p>
          </div>

          <blockquote className="mt-8 pl-5 py-3 border-l-2 border-red bg-red/[0.06] rounded-r-sm2 italic text-text2 text-sm">
            &ldquo;Escute com atenção, Thorfinn. Você não tem inimigos. Ninguém neste mundo tem
            inimigos. Não existe ninguém que mereça ser machucado.&rdquo;
          </blockquote>

          <Reveal className="mt-5">
            <motion.button
              type="button"
              onClick={() =>
                setLightbox({ src: '/ASSETS/VinlandSaga/vinland.jpg', alt: 'Vinland Saga — arte oficial' })
              }
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="glass-card overflow-hidden text-left w-full group relative focus-visible:ring-2 focus-visible:ring-red"
              aria-label="Ampliar imagem de Vinland Saga"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
                >
                  <Image
                    src="/ASSETS/VinlandSaga/vinland.jpg"
                    alt="Vinland Saga — arte oficial"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg/70 backdrop-blur border border-border1 text-xs text-text1 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <Maximize2 size={12} aria-hidden="true" />
                  Ampliar
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs font-mono text-text2 mb-2">Anime Favorito</p>
                <p className="text-sm text-text1/80 leading-relaxed">
                  Vinland Saga — é sobre liberdade. A liberdade de se soltar das amarras que você
                  carrega em sua vida, de acreditar que todo ser humano merece o direito de ser
                  feliz, e de entender que ninguém precisa se prender às amarras do passado.
                </p>
              </div>
            </motion.button>
          </Reveal>
        </Reveal>

        <Reveal direction="right">
          <div className="glass-card p-7 text-center lg:sticky lg:top-24">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image
                src="/ASSETS/Profile/eu.png"
                alt="Victor William"
                fill
                className="rounded-full object-cover ring-2 ring-red/50"
              />
            </div>
            <p className="font-semibold">Victor William</p>
            <p className="text-xs text-text2 mb-5">@atlasaqui · atlas.dev</p>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {['Designer', 'Dev', 'Game Art', 'Animação'].map((b) => (
                <span
                  key={b}
                  className="text-xs px-3 py-1.5 rounded-full border border-border1 text-text1/80"
                >
                  {b}
                </span>
              ))}
            </div>

            <p className="text-sm italic text-text1/85 mb-6 leading-relaxed">
              &ldquo;Primeiro aprendi a ver. Depois aprendi a construir. Agora faço as duas coisas
              ao mesmo tempo.&rdquo;
            </p>

            <div className="flex justify-center gap-5 text-sm">
              <a
                href="https://github.com/atlasaqui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text2 hover:text-cyan transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/atlasaqui/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text2 hover:text-cyan transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <Lightbox src={lightbox?.src ?? null} alt={lightbox?.alt ?? ''} onClose={() => setLightbox(null)} />
    </section>
  );
}
