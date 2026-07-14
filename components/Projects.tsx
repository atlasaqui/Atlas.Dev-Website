'use client';

import { useState } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import Modal from './Modal';
import Lightbox from './Lightbox';
import { PROJECTS, Project } from '@/lib/data';

const FILTERS = [
  { key: 'all', label: 'Todos' },
  { key: 'ui-ux', label: 'UI/UX' },
  { key: 'frontend', label: 'Front-End' },
  { key: 'game', label: 'Game / Arte' },
  { key: 'edtech', label: 'EdTech' }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [active, setActive] = useState<Project | null>(null);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const visible = PROJECTS.filter((p) => filter === 'all' || p.filterTags.includes(filter));

  return (
    <section id="projetos" className="py-24" aria-labelledby="projetos-title">
      <div className="container mx-auto max-w-[1160px] px-6">
        <Reveal className="mb-8">
          <span className="section-tag">{"// Projetos"}</span>
          <h2 id="projetos-title" className="font-heading text-4xl">
            O que eu <span className="text-grad">construí</span>
          </h2>
        </Reveal>

        <Reveal className="flex flex-wrap gap-2 mb-10" delay={0.05}>
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                filter === f.key
                  ? 'bg-red border-red text-white'
                  : 'border-border1 text-text2 hover:border-red/50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p, i) => (
            <Reveal key={p.key} delay={(i % 3) * 0.06}>
              <article className="glass-card overflow-hidden group h-full flex flex-col">
                <button
                  onClick={() => setActive(p)}
                  aria-label={`Abrir galeria ${p.title}`}
                  className="relative w-full aspect-[16/10] overflow-hidden"
                  style={{ background: p.gradient }}
                >
                  {p.thumbVideo ? (
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                    >
                      <source src={p.thumbVideo} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={p.thumb}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/50 text-transparent group-hover:text-white text-sm font-semibold transition-all">
                    Ver Frames
                  </span>
                </button>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2 py-1 rounded-full border border-border1 text-text2"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-text2 leading-relaxed mb-4 flex-1">{p.description}</p>
                  <div className="flex gap-1.5 mb-4" aria-hidden="true">
                    {p.palette.map((c) => (
                      <span
                        key={c}
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ background: c }}
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <button
                      onClick={() => setActive(p)}
                      className="text-xs px-3 py-2 rounded-sm2 border border-border1 hover:border-red/60 transition"
                    >
                      Ver Frames
                    </button>
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target={l.href.startsWith('#') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-2 rounded-sm2 border border-border1 hover:border-cyan/60 transition"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title={active?.title ?? ''}
        subtitle={active?.subtitle}
      >
        <div className="grid sm:grid-cols-2 gap-4">
          {active?.images.map((img) =>
            img.video ? (
              <div key={img.src} className={img.wide ? 'sm:col-span-2' : ''}>
                <video src={img.src} controls preload="metadata" className="w-full rounded-md2" />
                <p className="text-xs text-text2 mt-2">{img.caption}</p>
              </div>
            ) : (
              <button
                key={img.src}
                onClick={() => setLightbox({ src: img.src, alt: img.caption })}
                className={`text-left ${img.wide ? 'sm:col-span-2' : ''}`}
              >
                <div className="relative w-full aspect-video rounded-md2 overflow-hidden bg-bg">
                  <Image src={img.src} alt={img.caption} fill className="object-cover" />
                </div>
                <p className="text-xs text-text2 mt-2">{img.caption}</p>
              </button>
            )
          )}
        </div>
      </Modal>

      <Lightbox
        src={lightbox?.src ?? null}
        alt={lightbox?.alt ?? ''}
        onClose={() => setLightbox(null)}
      />
    </section>
  );
}
