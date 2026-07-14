'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Reveal from './Reveal';
import { SKILLS } from '@/lib/data';
import { SKILL_ICONS, SKILL_DESCRIPTIONS } from '@/lib/skillIcons';

const CATEGORIES: { label: string; items: { name: string; color: string }[] }[] = [
  { label: 'Frontend & Web', items: SKILLS.frontend },
  { label: 'Produto & Processo', items: SKILLS.product },
  { label: 'Backend & Banco de Dados', items: SKILLS.backend },
  { label: 'Design & Edição', items: SKILLS.design },
  { label: 'Game Dev & Infra', items: SKILLS.game }
];

const EASE = [0.25, 0.8, 0.25, 1] as const;

export default function Skills() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedItem = CATEGORIES.flatMap((c) => c.items).find((i) => i.name === selected);

  return (
    <section id="skills" className="py-24 bg-bg-2/40" aria-labelledby="skills-title">
      <div className="container mx-auto max-w-[1160px] px-6">
        <Reveal className="mb-12 text-center md:text-left">
          <span className="section-tag">{'// Stack Completa'}</span>
          <h2 id="skills-title" className="font-heading text-4xl mb-3">
            Ferramentas & <span className="text-grad">Tecnologias</span>
          </h2>
          <p className="text-text2 max-w-xl md:mx-0 mx-auto">
            Perfil híbrido — do wireframe ao servidor, do pixel ao banco de dados. Clique numa
            ferramenta pra ver pra que ela serve.
          </p>
        </Reveal>

        <div className="space-y-12">
          {CATEGORIES.map((cat, ci) => (
            <Reveal key={cat.label} delay={ci * 0.05}>
              <p className="font-mono text-xs text-red uppercase tracking-wider mb-5 pb-2 border-b border-border1">
                {cat.label}
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
                {cat.items.map((item, i) => {
                  const Icon = SKILL_ICONS[item.name];
                  return (
                    <motion.button
                      key={item.name}
                      layoutId={`skill-card-${item.name}`}
                      onClick={() => setSelected(item.name)}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.35, delay: i * 0.025 }}
                      whileHover={{ y: -4, scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="group flex flex-col items-center justify-center gap-2.5 aspect-square rounded-md2 border border-border1 hover:border-red/50 transition-colors p-3 text-center"
                      style={{ background: item.color }}
                      aria-haspopup="dialog"
                    >
                      {Icon && (
                        <motion.span layoutId={`skill-icon-${item.name}`}>
                          <Icon
                            size={30}
                            className="shrink-0 text-text1/85 group-hover:text-red transition-colors sm:w-9 sm:h-9"
                            aria-hidden="true"
                          />
                        </motion.span>
                      )}
                      <motion.span
                        layoutId={`skill-label-${item.name}`}
                        className="text-[11px] sm:text-xs text-text2 group-hover:text-text1 transition-colors leading-tight"
                      >
                        {item.name}
                      </motion.span>
                    </motion.button>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              layoutId={`skill-card-${selectedItem.name}`}
              transition={{ duration: 0.4, ease: EASE }}
              className="relative z-10 w-full max-w-sm rounded-lg2 border border-red/30 p-8 text-center bg-bg-2"
              role="dialog"
              aria-modal="true"
              aria-label={selectedItem.name}
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Fechar"
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/10 text-text2 hover:text-text1 transition"
              >
                <X size={18} />
              </button>

              <motion.span
                layoutId={`skill-icon-${selectedItem.name}`}
                className="flex items-center justify-center mx-auto mb-5"
              >
                {(() => {
                  const Icon = SKILL_ICONS[selectedItem.name];
                  return Icon ? <Icon size={56} className="text-red" aria-hidden="true" /> : null;
                })()}
              </motion.span>

              <motion.h3
                layoutId={`skill-label-${selectedItem.name}`}
                className="font-heading text-2xl mb-4"
              >
                {selectedItem.name}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className="text-sm text-text2 leading-relaxed"
              >
                {SKILL_DESCRIPTIONS[selectedItem.name] ?? 'Ferramenta do meu dia a dia de trabalho.'}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
