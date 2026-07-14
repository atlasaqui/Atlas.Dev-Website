'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#skills', label: 'Skills' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#processo', label: 'Meu Processo' },
  { href: '#contato', label: 'Contato', cta: true }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border1' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto max-w-[1160px] px-6 flex items-center justify-between h-[68px]">
        <a href="#hero" className="font-heading text-lg tracking-wide">
          <span className="text-red">[</span>atlas<span className="text-red">.</span>dev
          <span className="text-red">]</span>
        </a>

        <nav className="hidden md:flex items-center gap-7" aria-label="Navegação principal">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={
                l.cta
                  ? 'px-4 py-2 rounded-sm2 border border-red text-red text-sm font-medium hover:bg-red hover:text-white transition-colors'
                  : 'text-sm text-text1/85 hover:text-cyan transition-colors'
              }
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-text1"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-bg-2 border-t border-border1"
            aria-label="Menu mobile"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base text-text1/90 border-b border-border1/60 last:border-none"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
