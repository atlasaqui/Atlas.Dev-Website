'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Award, CheckCircle2, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';

const EASE = [0.25, 0.8, 0.25, 1] as const;

// Same accent language as the rest of the site (hero gradient, CTA button, tags)
const ACCENT_FROM = '#FF3B30';
const ACCENT_TO = '#FF7A1A';

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  tags: string[];
  image: string;
  imageAlt: string;
  summary: string;
  learned: string[];
  verifyUrl?: string;
};

const CERTIFICATES: Certificate[] = [
  {
    id: 'residencia-porto-digital',
    title: 'Residência Tecnológica — Kick Off',
    issuer: 'Porto Digital',
    date: 'Dezembro de 2025',
    tags: ['Design de Produto', 'Figma', 'EdTech'],
    image: '/ASSETS/Certificates/residencia-porto-digital.jpg',
    imageAlt: 'Certificado de finalista do Demoday — Residência Tecnológica do Porto Digital',
    summary:
        'Atuei como Designer de Produto no desenvolvimento de um aplicativo voltado à inovação no setor de Educação, finalista do Demoday do Kick Off 2025.2.',
    learned: [
      'Conduzi todo o ciclo de design no Figma — da concepção visual aos protótipos de alta fidelidade',
      'Estruturei fluxos de navegação completos pensando na jornada real do usuário',
      'Participei ativamente das decisões estratégicas de produto junto ao time',
      'Traduzi um problema real de EdTech em uma solução funcional e centrada no usuário'
    ]
  },
  {
    id: 'rocketseat',
    title: 'Certificado Rocketseat',
    issuer: 'Rocketseat',
    date: '2025',
    tags: ['Desenvolvimento', 'Front-end'],
    image: '/ASSETS/Certificates/rocketseat.png',
    imageAlt: 'Certificado de conclusão — Rocketseat',
    summary:
        'Formação prática com foco em construir aplicações reais, aplicando fundamentos sólidos de front-end e boas práticas de desenvolvimento.',
    learned: [
      '// TODO: troque pelos tópicos reais do curso, ex:',
      'Fundamentos de React e componentização de interfaces',
      'Boas práticas de versionamento e fluxo de trabalho com Git',
      'Consumo de APIs e gerenciamento de estado em aplicações modernas'
    ],
    verifyUrl: 'https://app.rocketseat.com.br/certificates/beb5cb3a-c4f1-4b29-acfc-f998c2683977'
  }
];

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60, scale: 0.97 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60, scale: 0.97 })
};

export default function CertificatesCarousel() {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = CERTIFICATES.length;
  const current = CERTIFICATES[index];

  const go = (newDir: number) => {
    setSlide(([i]) => {
      const next = (i + newDir + total) % total;
      return [next, newDir];
    });
  };

  const goTo = (i: number) => {
    setSlide(([current]) => [i, i > current ? 1 : -1]);
  };

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => go(1), 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, index]);

  return (
      <section id="certificados" className="py-24 relative overflow-hidden" aria-labelledby="certificados-title">
        {/* same quiet red glow used across the rest of the page — no per-item hue swaps */}
        <div
            className="absolute inset-0 -z-10 opacity-40"
            style={{ background: `radial-gradient(ellipse at 70% 20%, ${ACCENT_FROM}29, transparent 60%)` }}
            aria-hidden="true"
        />
        <div className="container mx-auto max-w-[1160px] px-6">
          <Reveal className="mb-14">
            <span className="section-tag">{'// Certificados'}</span>
            <h2 id="certificados-title" className="font-heading text-4xl">
              Aprendizado <span className="text-grad">com resultado</span>
            </h2>
          </Reveal>

          <Reveal>
            <div
                className="relative glass-card rounded-lg2 overflow-hidden border border-border1"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
              <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-0 min-h-[420px]">
                {/* image side — matches the dark project-card thumbnail treatment */}
                <div className="relative flex items-center justify-center p-8 sm:p-10 bg-black/30 overflow-hidden border-b md:border-b-0 md:border-r border-border1">
                  <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={current.id}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5, ease: EASE }}
                        className="relative w-full max-w-sm aspect-[4/3] rounded-sm2 overflow-hidden border border-border1 shadow-[0_20px_60px_-20px_rgba(0,0,0,.7)]"
                    >
                      <Image
                          src={current.image}
                          alt={current.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 90vw, 420px"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg/80 backdrop-blur border border-border1 text-xs text-text1/80">
                        <Award size={12} className="text-[#FF5A2E]" aria-hidden="true" />
                        Certificado
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* text side */}
                <div className="relative p-8 sm:p-12 flex flex-col justify-center">
                  <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={current.id + '-text'}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
                    >
                    <span className="text-xs font-mono mb-4 tracking-widest block text-[#FF5A2E]">
                      {`// ${current.issuer.toUpperCase()} · ${current.date}`}
                    </span>
                      <h3 className="font-heading text-3xl sm:text-4xl leading-[1.1] mb-4 text-white">
                        {current.title}
                      </h3>
                      <p className="text-sm sm:text-[15px] text-text2 leading-relaxed mb-6 max-w-lg">
                        {current.summary}
                      </p>

                      {/* tags styled exactly like the project card pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {current.tags.map((t) => (
                            <span
                                key={t}
                                className="text-[11px] px-2.5 py-1 rounded-full border border-border1 text-text1/70 bg-white/[0.03]"
                            >
                          {t}
                        </span>
                        ))}
                      </div>

                      <ul className="space-y-2.5 mb-8">
                        {current.learned.map((item, i) => (
                            <motion.li
                                key={item}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.35, delay: 0.15 + i * 0.07, ease: EASE }}
                                className="flex items-start gap-2.5 text-sm text-text1/85"
                            >
                              <CheckCircle2
                                  size={16}
                                  className="shrink-0 mt-0.5 text-[#FF5A2E]"
                                  aria-hidden="true"
                              />
                              <span>{item}</span>
                            </motion.li>
                        ))}
                      </ul>

                      {current.verifyUrl && (
                          <motion.a
                              href={current.verifyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.97 }}
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm2 text-white text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(255,59,48,.6)]"
                              style={{ background: `linear-gradient(90deg, ${ACCENT_FROM}, ${ACCENT_TO})` }}
                          >
                            Verificar certificado
                            <ExternalLink size={15} />
                          </motion.a>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* controls */}
              <div className="flex items-center justify-between px-8 sm:px-12 py-6 border-t border-border1">
                <div className="flex gap-2">
                  {CERTIFICATES.map((c, i) => (
                      <button
                          key={c.id}
                          onClick={() => goTo(i)}
                          aria-label={`Ver certificado: ${c.title}`}
                          className="relative h-1.5 rounded-full transition-all duration-300"
                          style={{
                            width: i === index ? 28 : 8,
                            background:
                                i === index
                                    ? `linear-gradient(90deg, ${ACCENT_FROM}, ${ACCENT_TO})`
                                    : 'rgba(255,255,255,.16)'
                          }}
                      />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                      onClick={() => go(-1)}
                      aria-label="Certificado anterior"
                      className="p-2.5 rounded-full border border-border1 hover:bg-white/10 hover:border-[#FF5A2E]/50 transition-colors"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                      onClick={() => go(1)}
                      aria-label="Próximo certificado"
                      className="p-2.5 rounded-full border border-border1 hover:bg-white/10 hover:border-[#FF5A2E]/50 transition-colors"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
  );
}
