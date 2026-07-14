'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';
import Modal from './Modal';
import Lightbox from './Lightbox';
import { BODE_DO_NO, PROJECTS } from '@/lib/data';

const bfr = PROJECTS.find((p) => p.key === 'bfr')!;
const EASE = [0.16, 1, 0.3, 1] as const;

export default function FeaturedProjects() {
  const [bodeOpen, setBodeOpen] = useState(false);
  const [bfrOpen, setBfrOpen] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="destaque" className="py-24 relative overflow-hidden" aria-labelledby="destaque-title">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(224,16,32,.16), transparent 60%)' }}
        aria-hidden="true"
      />
      <div className="container mx-auto max-w-[1160px] px-6">
        <Reveal className="mb-14">
          <span className="section-tag">{'// Projetos em Destaque'}</span>
          <h2 id="destaque-title" className="font-heading text-4xl">
            Os que eu <span className="text-grad">mais defendo</span>
          </h2>
        </Reveal>

        <div className="space-y-8">
          {/* ============ BODE DO NÔ ============ */}
          <Reveal direction="left">
            <div
              className="relative overflow-hidden rounded-lg2 border border-bode-gold/30"
              style={{
                background:
                  'linear-gradient(120deg, rgba(71,92,27,.28), rgba(10,6,8,0) 55%), #12130c'
              }}
            >
              <div className="faixa bg-bode-gold text-bode-green-dark font-bold" aria-hidden="true">
                Portfólio Institucional
              </div>

              <div className="grid md:grid-cols-[1.05fr_.95fr] gap-0">
                {/* text side */}
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <span className="text-xs font-mono text-bode-gold mb-4 tracking-widest">
                    {'// CASE DE OUTREACH · NEXT.JS 14'}
                  </span>
                  <h3 className="font-fraunces italic font-semibold text-4xl sm:text-5xl leading-[1.05] mb-5 text-text1">
                    Bode do <span className="text-bode-gold not-italic">Nô</span>
                  </h3>
                  <p className="text-sm sm:text-[15px] text-text2 leading-relaxed mb-6 max-w-md">
                    {BODE_DO_NO.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {BODE_DO_NO.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-bode-gold/40 text-bode-gold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <motion.button
                      onClick={() => setBodeOpen(true)}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm2 bg-bode-gold text-bode-green-dark text-sm font-semibold shadow-[0_0_30px_rgba(251,176,59,.3)] hover:shadow-[0_0_40px_rgba(251,176,59,.45)] transition-shadow"
                    >
                      Ver Projeto & Processo
                      <ArrowUpRight size={15} />
                    </motion.button>
                    {BODE_DO_NO.liveUrl && (
                      <a
                        href={BODE_DO_NO.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm2 border border-border1 text-sm hover:border-bode-gold/60 transition-colors"
                      >
                        Visitar site <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* visual side — tilted stack */}
                <div className="relative min-h-[280px] sm:min-h-[360px] p-8 sm:p-10 flex items-center justify-center">
                  <motion.button
                    type="button"
                    onClick={() =>
                      setLightbox({ src: BODE_DO_NO.wireframeImage, alt: 'Bode do Nô — wireframe' })
                    }
                    initial={{ opacity: 0, rotate: -8, x: -20 }}
                    whileInView={{ opacity: 1, rotate: -6, x: 0 }}
                    whileHover={{ rotate: -2, scale: 1.04, zIndex: 10 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="absolute w-[58%] aspect-video rounded-md2 overflow-hidden border border-border1 bg-bg shadow-2xl left-4 sm:left-8 top-1/2 -translate-y-1/2 focus-visible:ring-2 focus-visible:ring-bode-gold"
                    aria-label="Ampliar wireframe do Bode do Nô"
                  >
                    <Image
                      src={BODE_DO_NO.wireframeImage}
                      alt="Bode do Nô — wireframe"
                      fill
                      className="object-cover"
                    />
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={() =>
                      setLightbox({ src: BODE_DO_NO.coverImage, alt: 'Bode do Nô — projeto final' })
                    }
                    initial={{ opacity: 0, rotate: 6, x: 20 }}
                    whileInView={{ opacity: 1, rotate: 4, x: 0, y: [0, -8, 0] }}
                    whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.08,
                      ease: EASE,
                      y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }
                    }}
                    className="relative w-[64%] aspect-video rounded-md2 overflow-hidden border border-bode-gold/40 bg-bg shadow-[0_20px_60px_rgba(251,176,59,.2)] right-4 sm:right-8 focus-visible:ring-2 focus-visible:ring-bode-gold"
                    aria-label="Ampliar imagem do projeto Bode do Nô"
                  >
                    <Image
                      src={BODE_DO_NO.coverImage}
                      alt="Bode do Nô — projeto final"
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-2 right-2 text-[10px] font-mono px-2 py-1 rounded-full bg-bg/80 border border-bode-gold/40 text-bode-gold">
                      projeto final
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ============ BIG FIGHT SMALL ROBOTS ============ */}
          <Reveal direction="right">
            <div className="relative overflow-hidden rounded-lg2 border border-pink/25 bg-[#120610]">
              <div className="grain-overlay" aria-hidden="true" />
              <div
                className="absolute inset-0 -z-10"
                style={{
                  background:
                    'radial-gradient(ellipse at 80% 30%, rgba(255,0,110,.22), transparent 55%), radial-gradient(ellipse at 10% 80%, rgba(123,0,255,.18), transparent 50%)'
                }}
                aria-hidden="true"
              />
              <div
                className="faixa bg-gradient-to-r from-pink to-purple text-white font-bold"
                aria-hidden="true"
              >
                ★ Destaque
              </div>

              <div className="grid md:grid-cols-[1fr_1.1fr] gap-0">
                {/* text side */}
                <div className="p-8 sm:p-12 flex flex-col justify-center order-2 md:order-1">
                  <span className="text-xs font-mono text-pink mb-4 tracking-widest">
                    {'// DIREÇÃO DE ARTE · PUNK/CYBERPUNK'}
                  </span>
                  <h3 className="font-grave text-4xl sm:text-5xl leading-[0.95] mb-5 text-white [text-shadow:0_0_18px_rgba(255,0,110,.55),0_0_40px_rgba(123,0,255,.35)]">
                    BIG FIGHT
                    <br />
                    <span className="text-pink">SMALL ROBOTS</span>
                  </h3>
                  <p className="text-sm sm:text-[15px] text-text2 leading-relaxed mb-6 max-w-md">
                    {bfr.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {bfr.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-pink/30 text-pink/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    onClick={() => setBfrOpen(true)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 w-fit px-5 py-2.5 rounded-sm2 bg-red-grad text-white text-sm font-medium shadow-glow hover:brightness-110 transition-[filter]"
                  >
                    Ver Frames Completos
                    <ArrowUpRight size={15} />
                  </motion.button>
                </div>

                {/* visual side — neon tilted trio */}
                <div className="relative min-h-[320px] sm:min-h-[420px] order-1 md:order-2 flex items-center justify-center py-10">
                  {bfr.images.slice(0, 3).map((img, i) => {
                    const layout = [
                      { rot: -10, x: -70, scale: 0.86, z: 1 },
                      { rot: 0, x: 0, scale: 1, z: 3 },
                      { rot: 10, x: 70, scale: 0.86, z: 2 }
                    ][i];
                    return (
                      <motion.button
                        type="button"
                        key={img.src}
                        onClick={() => setLightbox({ src: img.src, alt: img.caption })}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ rotate: 0, scale: layout.scale * 1.06, zIndex: 10 }}
                        transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                        style={{
                          rotate: layout.rot,
                          x: layout.x,
                          zIndex: layout.z
                        }}
                        className="absolute w-[150px] sm:w-[190px] aspect-[9/16] rounded-md2 overflow-hidden border-2 border-pink/50 shadow-[0_0_30px_rgba(255,0,110,.35)] focus-visible:ring-2 focus-visible:ring-pink"
                        aria-label={`Ampliar ${img.caption}`}
                      >
                        <Image src={img.src} alt={img.caption} fill className="object-cover" />
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* BODE DO NÔ MODAL */}
      <Modal
        open={bodeOpen}
        onClose={() => setBodeOpen(false)}
        title={BODE_DO_NO.title}
        subtitle={BODE_DO_NO.subtitle}
      >
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <button onClick={() => setLightbox({ src: BODE_DO_NO.coverImage, alt: 'Bode do Nô — projeto' })}>
            <div className="relative w-full aspect-video rounded-md2 overflow-hidden bg-bg border border-border1">
              <Image src={BODE_DO_NO.coverImage} alt="Bode do Nô — projeto" fill className="object-cover" />
            </div>
            <p className="text-xs text-text2 mt-2">Projeto final</p>
          </button>
          <button onClick={() => setLightbox({ src: BODE_DO_NO.wireframeImage, alt: 'Bode do Nô — wireframe' })}>
            <div className="relative w-full aspect-video rounded-md2 overflow-hidden bg-bg border border-border1">
              <Image src={BODE_DO_NO.wireframeImage} alt="Bode do Nô — wireframe" fill className="object-cover" />
            </div>
            <p className="text-xs text-text2 mt-2">Wireframe</p>
          </button>
        </div>

        <p className="text-xs font-mono text-red uppercase tracking-wider mb-4">Como funciona meu fluxo de trabalho</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {BODE_DO_NO.process.map((step, i) => (
            <div key={step.title} className="p-4 rounded-md2 border border-border1">
              <span className="text-xs font-mono text-text2">0{i + 1}</span>
              <h4 className="font-semibold mt-1 mb-1.5">{step.title}</h4>
              <p className="text-sm text-text2 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {BODE_DO_NO.liveUrl && (
          <a
            href={BODE_DO_NO.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-5 py-2.5 rounded-sm2 bg-red-grad text-white text-sm font-medium"
          >
            Visitar o site ↗
          </a>
        )}
      </Modal>

      {/* BIG FIGHT SMALL ROBOTS MODAL */}
      <Modal open={bfrOpen} onClose={() => setBfrOpen(false)} title={bfr.title} subtitle={bfr.subtitle}>
        <div className="grid sm:grid-cols-2 gap-4">
          {bfr.images.map((img) => (
            <button key={img.src} onClick={() => setLightbox({ src: img.src, alt: img.caption })}>
              <div className="relative w-full aspect-video rounded-md2 overflow-hidden bg-bg">
                <Image src={img.src} alt={img.caption} fill className="object-cover" />
              </div>
              <p className="text-xs text-text2 mt-2">{img.caption}</p>
            </button>
          ))}
        </div>
      </Modal>

      <Lightbox src={lightbox?.src ?? null} alt={lightbox?.alt ?? ''} onClose={() => setLightbox(null)} />
    </section>
  );
}
