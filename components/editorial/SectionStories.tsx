"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Check, Copy, Crop, ArrowUpRight } from "lucide-react";

const paths = {
  curate: "M8 16V3H30 M70 3H92V16 M92 28V39H70 M30 39H8V28",
  flow: "M2 27H24L32 13H56L65 27H98",
  motion: "M2 25C20 3 30 39 48 19S78 2 98 23",
  signature: "M3 29C21 6 30 43 49 17S71 13 82 20L97 13",
  assemble: "M1 21H99",
  invite: "M3 31H65Q80 31 80 17V6 M68 16L80 4L92 16",
};

type HeadingTheme = keyof typeof paths;

export function SectionHeading({
  lead,
  accent,
  theme,
  inline = false,
}: {
  lead: string;
  accent: string;
  theme: HeadingTheme;
  inline?: boolean;
}) {
  const reduced = useReducedMotion();
  const [playing, setPlaying] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);
  function replay() {
    if (reduced) return;
    clearTimeout(timer.current);
    setPlaying(true);
    timer.current = setTimeout(() => setPlaying(false), 1300);
  }
  return (
    <motion.h2
      className={`story-heading heading-${theme} ${playing && !reduced ? "heading-playing" : ""}`}
      initial={false}
      onViewportEnter={replay}
      viewport={{ once: true, amount: 0.7 }}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse" && !playing) replay();
      }}
    >
      <span>{lead}</span>
      {inline ? " " : <br />}
      <em className="heading-accent">
        {accent}
        {theme === "curate" ? (
          <span className="heading-frame" aria-hidden="true">
            <i />
            <i />
          </span>
        ) : theme === "assemble" ? (
          <span className="heading-rule" aria-hidden="true" />
        ) : (
          <svg
            className="heading-trace"
            viewBox="0 0 100 42"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d={paths[theme]} pathLength="1" />
          </svg>
        )}
      </em>
    </motion.h2>
  );
}

export function ProcessSketch({ step }: { step: number }) {
  const titles = [
    "Definir a ação principal",
    "Organizar a hierarquia",
    "Conectar os caminhos",
    "Conferir estados e respostas",
  ];
  return (
    <div className="process-sketch" data-step={step}>
      <div className="sketch-caption">
        <span>UM FLUXO GANHA FORMA</span>
        <span>{step < 0 ? "—" : `0${step + 1}`}</span>
      </div>
      <svg viewBox="0 0 330 110" aria-hidden="true" key={step}>
        <g className="sketch-frame">
          <rect x="2" y="2" width="95" height="106" rx="5" />
          <path d="M15 22H64M15 34H80M15 79H44M54 79H80" />
          <rect
            className="sketch-action"
            x="15"
            y="47"
            width="68"
            height="18"
            rx="3"
          />
        </g>
        <path className="sketch-route" d="M97 56H151V23H192M151 56V88H192" />
        <g className="sketch-state">
          <rect x="192" y="3" width="135" height="40" rx="5" />
          <path d="M206 23H243M260 23L266 29L281 14" />
          <rect x="192" y="68" width="135" height="40" rx="5" />
          <path d="M206 88H244M267 81L280 95M280 81L267 95" />
        </g>
      </svg>
      <p>
        {step < 0
          ? "Escolha uma etapa para acompanhar a decisão"
          : titles[step]}
        .
      </p>
    </div>
  );
}

export function PortraitComposition() {
  const [guides, setGuides] = useState(false);
  return (
    <div className={`about-portrait ${guides ? "portrait-composing" : ""}`}>
      <Image
        src="/ASSETS/Profile/eu.jpeg"
        alt="Victor Monteiro"
        fill
        sizes="(max-width: 700px) 80vw, 400px"
      />
      <div className="portrait-guides" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <span>ENQUADRAMENTO / FOCO / RESPIRO</span>
      </div>
      <span className="portrait-label">
        VICTOR MONTEIRO
        <br />
        <small>RECIFE, PERNAMBUCO</small>
      </span>
      <button
        className="portrait-toggle"
        aria-pressed={guides}
        onClick={() => setGuides(!guides)}
      >
        <Crop size={14} aria-hidden="true" />
        {guides ? "Ocultar composição" : "Ver composição"}
      </button>
    </div>
  );
}

export function ComponentLab() {
  const [radius, setRadius] = useState(8);
  const [palette, setPalette] = useState(0);
  const colors = [
    { name: "Terracota", value: "#bd3826" },
    { name: "Floresta", value: "#23554b" },
    { name: "Grafite", value: "#20211f" },
  ];
  return (
    <div className="component-lab">
      <div className="lab-caption">
        <span>UMA ESCOLHA VIRA COMPORTAMENTO</span>
        <span>01 / COMPONENTE</span>
      </div>
      <div
        className="lab-preview"
        style={
          {
            "--lab-accent": colors[palette].value,
            "--lab-radius": `${radius}px`,
          } as React.CSSProperties
        }
      >
        <a href="#projetos" className="lab-button">
          Explorar meu trabalho <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="lab-controls">
        <fieldset>
          <legend>Cor de destaque</legend>
          <div className="lab-swatches">
            {colors.map((color, index) => (
              <button
                key={color.name}
                style={{ background: color.value }}
                aria-label={color.name}
                aria-pressed={index === palette}
                onClick={() => setPalette(index)}
              />
            ))}
          </div>
        </fieldset>
        <label>
          Forma <output>{radius}px</output>
          <input
            aria-label="Raio dos cantos do componente"
            type="range"
            min="0"
            max="24"
            value={radius}
            onChange={(event) => setRadius(Number(event.target.value))}
          />
        </label>
      </div>
      <p className="lab-note">Cor e forma mudam. A ação continua clara.</p>
    </div>
  );
}

export function CopyContact() {
  const [status, setStatus] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copy() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText("victor@atlasaqui.dev");
      setStatus("E-mail copiado. Vamos conversar.");
    } catch {
      setStatus("Use o endereço abaixo para entrar em contato.");
    }
    timer.current = setTimeout(() => setStatus(""), 4000);
  }
  return (
    <div className="contact-copy">
      <button onClick={copy}>
        {status.startsWith("E-mail copiado") ? (
          <Check size={15} />
        ) : (
          <Copy size={15} />
        )}
        Copiar e-mail
      </button>
      <span role="status">{status}</span>
    </div>
  );
}
