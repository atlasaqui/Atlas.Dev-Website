'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { stiffness: 260, damping: 22, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 260, damping: 22, mass: 0.4 });

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!canHover) return;
    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
        'a, button, [role="tab"], [role="button"], input, textarea, select, [data-cursor-hover]'
      );
      setHovering(!!interactive);
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => {
      x.set(-100);
      y.set(-100);
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    window.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('mouseleave', leave);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* núcleo — segue o mouse instantaneamente */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-red"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          width: 7,
          height: 7,
          boxShadow: '0 0 10px rgba(224,16,32,.9), 0 0 22px rgba(224,16,32,.5)'
        }}
        animate={{ scale: pressed ? 0.6 : hovering ? 0 : 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />

      {/* anel — segue com leve atraso elástico, "tecnológico e fluido" */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: 'rgba(224,16,32,.55)',
          background:
            'radial-gradient(circle, rgba(224,16,32,.10) 0%, rgba(224,16,32,0) 70%)'
        }}
        animate={{
          width: hovering ? 56 : pressed ? 26 : 34,
          height: hovering ? 56 : pressed ? 26 : 34,
          borderWidth: hovering ? 1.5 : 1,
          opacity: hovering ? 1 : 0.85
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      />

      {/* mira central que aparece só no hover — reforça o tema "técnico" */}
      <motion.div
        className="fixed top-0 left-0"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: hovering ? 0.9 : 0, rotate: hovering ? 90 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" aria-hidden="true">
          <path d="M4 20V6h14" stroke="#e01020" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M66 20V6H52" stroke="#e01020" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M4 50v14h14" stroke="#e01020" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M66 50v14H52" stroke="#e01020" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </motion.div>
    </div>
  );
}
