'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* background fx */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }}
        />
        <motion.div
          className="absolute -top-32 -left-24 w-64 h-64 sm:w-[420px] sm:h-[420px] rounded-full blur-[80px] sm:blur-[110px]"
          style={{ background: 'rgba(224,16,32,.28)' }}
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-40 -right-24 w-64 h-64 sm:w-[380px] sm:h-[380px] rounded-full blur-[80px] sm:blur-[110px]"
          style={{ background: 'rgba(0,212,255,.16)' }}
          animate={{ y: [0, -24, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto max-w-[1160px] px-6 grid md:grid-cols-[1.15fr_.85fr] gap-14 items-center">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 font-mono text-xs text-text2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
              Full-Stack Dev · UI/UX Designer · Game Art Director
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-red/60 shrink-0">
                <Image src="/ASSETS/Profile/eu.png" alt="Victor William" width={56} height={56} className="object-cover w-full h-full" />
              </div>
              <div>
                <p className="font-semibold leading-tight">Victor William</p>
                <p className="text-sm text-text2">@atlasaqui</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 id="hero-title" className="text-[2.6rem] leading-[1.05] sm:text-6xl font-heading mb-6">
              Eu transformo
              <br />
              <span className="text-grad">visão criativa</span>
              <br />
              em <span className="text-stroke">produto real.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-text2 max-w-xl mb-8 leading-relaxed">
              Desenvolvedor front-end e designer híbrido — formação em Design de Animação e
              fundamentado em Sistemas para Internet. Construo interfaces com Next.js, TypeScript
              e Tailwind que unem lógica de código com direção de arte.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-3 mb-9">
              <a
                href="#projetos"
                className="px-6 py-3 rounded-sm2 bg-red-grad font-semibold text-white text-sm shadow-glow hover:brightness-110 transition"
              >
                Ver Projetos
              </a>
              <a
                href="https://github.com/atlasaqui"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-sm2 border border-border1 text-sm hover:border-cyan/60 transition flex items-center gap-2"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/atlasaqui/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-sm2 border border-border1 text-sm hover:border-cyan/60 transition flex items-center gap-2"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <Stat num="3 anos" label="em Design" />
              <div className="w-px h-9 bg-border1" />
              <Stat num="1 ano" label="em Web Dev" />
              <div className="w-px h-9 bg-border1" />
              <Stat num="Full" label="Stack + Design" />
            </div>
          </Reveal>
        </div>

        <Reveal direction="right" delay={0.1}>
          <div className="glass-card p-7 relative overflow-hidden">
            <div
              className="absolute -top-16 -right-16 w-52 h-52 rounded-full blur-[70px] -z-10"
              style={{ background: 'rgba(224,16,32,.35)' }}
              aria-hidden="true"
            />
            <span className="text-2xl" aria-hidden="true">🎓</span>
            <p className="text-xs font-mono text-text2 mt-3 mb-2">Formação Acadêmica</p>
            <h2 className="font-heading text-2xl mb-3 leading-snug">
              Tecnólogo em
              <br />
              <span className="text-grad">Design de Animação</span>
            </h2>
            <p className="text-sm text-text2 mb-4">UNIAESO — Centro Universitário AESO-Barros Melo</p>
            <p className="text-sm text-text1/85 mb-3 leading-relaxed">
              Foi no Design de Animação que aprendi a <strong>pensar em sistemas visuais</strong> —
              motion, composição, linguagem de arte. Essa é uma parte da história que torna meu front-end
              diferente.
            </p>
            <p className="text-sm text-text1/85 mb-6 leading-relaxed">
              Hoje curso <strong>Sistemas para Internet na UNICAP</strong> — então apesar de ter um foco maior no front eu também trabalho com a lógica do back-end.
            </p>
            <a
              href="/ASSETS/Diploma/victor_william_monteiro_da_rocha_curso_tecnologico_em_design_de_animacao (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-red hover:text-red-2 font-medium transition-colors"
            >
              Ver Diploma (PDF) →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div>
      <strong className="block font-heading text-xl text-grad">{num}</strong>
      <span className="text-xs text-text2">{label}</span>
    </div>
  );
}
