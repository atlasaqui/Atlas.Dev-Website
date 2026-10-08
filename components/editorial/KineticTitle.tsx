"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowRight, RotateCcw } from "lucide-react";

const steps = ["Explorar", "Compor", "Construir"];
const descriptions = [
  "Da ideia à interface.",
  "Exploro possibilidades visuais.",
  "Dou forma e hierarquia à ideia.",
  "Construo uma interface que funciona.",
];

/** A short art-to-code sequence: explore composition, align it, then build. */
export function KineticTitle() {
  const root = useRef<HTMLHeadingElement>(null);
  const animations = useRef<Animation[]>([]);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const armed = useRef(true);
  const [stage, setStage] = useState(0);
  const reduced = useReducedMotion();

  function cancel() {
    animations.current.forEach((animation) => animation.cancel());
    timers.current.forEach(clearTimeout);
    animations.current = [];
    timers.current = [];
  }

  useEffect(() => {
    if (reduced) {
      cancel();
      setStage(0);
    }
    return cancel;
  }, [reduced]);

  function tellStory() {
    if (!root.current || reduced) return;
    cancel();
    armed.current = false;
    setStage(1);
    const design = root.current.querySelectorAll<HTMLElement>(
      ".title-design .letter-glyph",
    );
    const code = root.current.querySelectorAll<HTMLElement>(
      ".code-word .letter-glyph",
    );
    design.forEach((glyph, index) => {
      // A deliberate fan of letters, like studies on a designer's worktable.
      const rotation = [-8, -5, -2, 2, 5, 7, 4, -3, 0][index];
      const rise = [-5, -10, -14, -17, -14, -10, -5, -2, 0][index];
      animations.current.push(
        glyph.animate(
          [
            { transform: "translateY(0) rotate(0deg)" },
            {
              transform: `translateY(${rise}px) rotate(${rotation}deg)`,
              offset: 0.3,
            },
            {
              transform: `translateY(${rise}px) rotate(${rotation}deg)`,
              offset: 0.55,
            },
            { transform: "translateY(0) rotate(0deg)" },
          ],
          {
            duration: 1500,
            delay: index * 25,
            easing: "cubic-bezier(.22,1,.36,1)",
          },
        ),
      );
    });
    timers.current.push(setTimeout(() => setStage(2), 850));
    timers.current.push(
      setTimeout(() => {
        setStage(3);
        code.forEach((glyph, index) => {
          animations.current.push(
            glyph.animate(
              [
                { opacity: 0.22, transform: "translateY(.055em)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              {
                duration: 420,
                delay: index * 90,
                easing: "cubic-bezier(.22,1,.36,1)",
                fill: "backwards",
              },
            ),
          );
        });
      }, 1750),
    );
    timers.current.push(
      setTimeout(() => {
        animations.current.forEach((animation) => animation.cancel());
        animations.current = [];
      }, 2900),
    );
  }

  function word(text: string, className = "") {
    return (
      <span className={`kinetic-word ${className}`}>
        {Array.from(text).map((letter, index) => (
          <span className="letter-cell" key={index}>
            <span className="letter-measure">{letter}</span>
            <span className="letter-glyph">{letter}</span>
          </span>
        ))}
      </span>
    );
  }

  return (
    <div className="title-story" data-stage={reduced ? 0 : stage}>
      <h1
        ref={root}
        id="hero-title"
        className="kinetic-title"
        aria-label="Olhar de designer. Mão no código."
        onPointerOver={(event) => {
          if (event.pointerType !== "mouse" || !armed.current) return;
          if (
            (event.target as HTMLElement).closest(".title-design, .code-word")
          )
            tellStory();
        }}
        onPointerLeave={() => {
          armed.current = true;
        }}
        onPointerUp={(event) => {
          if (event.pointerType === "touch") tellStory();
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
      <div className="title-story-note">
        <ol className="title-story-steps" aria-label="Da ideia à interface">
          {steps.map((step, index) => (
            <li key={step} data-active={stage === index + 1 && !reduced}>
              <span>{step}</span>
              {index < 2 && <ArrowRight size={11} aria-hidden="true" />}
            </li>
          ))}
        </ol>
        <p className="title-story-caption">
          {descriptions[reduced ? 0 : stage]}
        </p>
        {!reduced && (
          <button
            type="button"
            className="type-play"
            onClick={tellStory}
            aria-label="Ver o percurso da ideia à interface"
          >
            <RotateCcw size={12} aria-hidden="true" /> Ver a ideia ganhar forma
          </button>
        )}
      </div>
    </div>
  );
}
