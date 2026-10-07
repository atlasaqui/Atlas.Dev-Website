"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { RotateCcw } from "lucide-react";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ{}<>/*+";

/** Fixed letter cells keep the heading in place while the glyphs move. */
export function KineticTitle() {
  const root = useRef<HTMLHeadingElement>(null);
  const active = useRef(new Map<HTMLElement, () => void>());
  const reduced = useReducedMotion();

  function reset() {
    active.current.forEach((stop) => stop());
    active.current.clear();
  }

  useEffect(() => {
    if (reduced) reset();
    return reset;
  }, [reduced]);

  function play(cell: HTMLElement, delay = 0) {
    if (reduced || active.current.has(cell)) return;
    const glyph = cell.querySelector<HTMLElement>(".letter-glyph");
    if (!glyph) return;
    const original = cell.dataset.letter || "";
    let animation: Animation | undefined;
    let interval: ReturnType<typeof setInterval> | undefined;
    let end: ReturnType<typeof setTimeout> | undefined;
    let done: ReturnType<typeof setTimeout> | undefined;
    const start = setTimeout(() => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      animation = glyph.animate(
        [
          { transform: "translateY(0) rotate(0deg)", color: "var(--ink)" },
          {
            transform: `translateY(-.16em) rotate(${direction * 9}deg)`,
            color: "var(--accent)",
            offset: 0.25,
          },
          {
            transform: `translateY(.035em) rotate(${-direction * 2}deg)`,
            offset: 0.7,
          },
          { transform: "translateY(0) rotate(0deg)", color: "var(--ink)" },
        ],
        { duration: 620, easing: "cubic-bezier(.22,1,.36,1)" },
      );
      interval = setInterval(() => {
        glyph.textContent =
          alphabet[Math.floor(Math.random() * alphabet.length)];
      }, 65);
      end = setTimeout(() => {
        clearInterval(interval);
        glyph.textContent = original;
      }, 235);
      done = setTimeout(() => active.current.delete(cell), 640);
    }, delay);
    active.current.set(cell, () => {
      clearTimeout(start);
      clearInterval(interval);
      clearTimeout(end);
      clearTimeout(done);
      animation?.cancel();
      glyph.textContent = original;
    });
  }

  function ripple() {
    if (!root.current || reduced) return;
    reset();
    root.current
      .querySelectorAll<HTMLElement>(".letter-cell")
      .forEach((cell, index) => play(cell, index * 24));
  }

  function word(text: string, className = "") {
    return (
      <span className={`kinetic-word ${className}`}>
        {Array.from(text).map((letter, index) => (
          <span className="letter-cell" data-letter={letter} key={index}>
            <span className="letter-measure">{letter}</span>
            <span className="letter-glyph">{letter}</span>
          </span>
        ))}
      </span>
    );
  }

  return (
    <>
      <h1
        ref={root}
        id="hero-title"
        className="kinetic-title"
        aria-label="Olhar de designer. Mão no código."
        onPointerOver={(event) => {
          if (event.pointerType !== "mouse") return;
          const cell = (event.target as HTMLElement).closest<HTMLElement>(
            ".letter-cell",
          );
          if (!cell) return;
          play(cell);
          const previous = cell.previousElementSibling as HTMLElement | null;
          const next = cell.nextElementSibling as HTMLElement | null;
          if (previous) play(previous, 40);
          if (next) play(next, 65);
        }}
        onPointerUp={(event) => {
          if (event.pointerType === "touch") ripple();
        }}
      >
        <span aria-hidden="true">
          <span className="title-line">
            {word("Olhar")} {word("de")}
          </span>
          <span className="title-line title-design">{word("designer.")}</span>
          <span className="title-line title-code">
            {word("Mão")} {word("no")} {word("código", "code-word")}
            <span className="accent-text">.</span>
          </span>
        </span>
      </h1>
      {!reduced && (
        <button
          type="button"
          className="type-play"
          onClick={ripple}
          aria-label="Brincar com as letras do título"
        >
          <RotateCcw size={12} aria-hidden="true" />
          <span className="type-hint-mouse">
            Passe pelas letras. Experimente.
          </span>
          <span className="type-hint-touch">
            Toque para brincar com as letras.
          </span>
        </button>
      )}
    </>
  );
}
