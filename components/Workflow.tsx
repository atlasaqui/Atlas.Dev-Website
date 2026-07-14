'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, Target, Puzzle, Accessibility, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import { WORKFLOW } from '@/lib/data';

const ICONS = [Search, Target, Puzzle, Accessibility];
const EASE = [0.25, 0.8, 0.25, 1] as const;

export default function Workflow() {
  const [active, setActive] = useState(0);
  const phase = WORKFLOW.phases[active];
  const Icon = ICONS[active] ?? Search;

  return (
    <section id="processo" className="py-24 bg-bg-2/40" aria-labelledby="processo-title">
      <div className="container mx-auto max-w-[1160px] px-6">
        <Reveal className="mb-10">
          <span className="section-tag">{'// Como eu trabalho'}</span>
          <h2 id="processo-title" className="font-heading text-4xl mb-3">
            Meu <span className="text-grad">Processo</span>
          </h2>
          <p className="text-text2 max-w-2xl">{WORKFLOW.intro}</p>
        </Reveal>

        <Reveal>
          <div
            className="glass-card p-2 sm:p-3 flex flex-wrap gap-2 mb-8"
            role="tablist"
            aria-label="Fases do processo"
          >
            {WORKFLOW.phases.map((p, i) => (
              <button
                key={p.title}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className="relative px-4 sm:px-5 py-2.5 rounded-sm2 text-sm font-medium transition-colors"
              >
                {active === i && (
                  <motion.span
                    layoutId="phase-pill"
                    className="absolute inset-0 rounded-sm2 bg-red-grad"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 flex items-center gap-2 ${
                    active === i ? 'text-white' : 'text-text2'
                  }`}
                >
                  <span className="font-mono text-xs opacity-70">0{i + 1}</span>
                  {p.title}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
          <div
            className="hidden md:flex w-14 h-14 rounded-full items-center justify-center bg-red/10 border border-red/30 shrink-0"
            aria-hidden="true"
          >
            <Icon size={22} className="text-red" />
          </div>

          <div className="glass-card p-7 sm:p-9 min-h-[280px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <div className="flex items-center gap-3 mb-4 md:hidden">
                  <Icon size={20} className="text-red" aria-hidden="true" />
                  <h3 className="font-heading text-2xl">{phase.title}</h3>
                </div>
                <h3 className="hidden md:block font-heading text-2xl mb-3">{phase.title}</h3>
                <p className="text-sm text-text2 leading-relaxed mb-6 max-w-2xl">{phase.desc}</p>

                <ul className="grid sm:grid-cols-2 gap-3">
                  {phase.bullets.map((b, i) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.08 + i * 0.06 }}
                      className="flex items-start gap-2.5 text-sm text-text1/85 p-3 rounded-md2 border border-border1 bg-white/[0.02]"
                    >
                      <CheckCircle2 size={16} className="text-red mt-0.5 shrink-0" aria-hidden="true" />
                      {b}
                    </motion.li>
                  ))}
                </ul>

                {'tags' in phase && phase.tags && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border1"
                    role="list"
                  >
                    {phase.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-full border border-border1 text-text1/80"
                      >
                        {tag}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
