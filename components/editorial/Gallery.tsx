"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { GalleryImage } from "@/lib/data";

export function Gallery({
  images,
  title,
  initialIndex,
  onClose,
}: {
  images: GalleryImage[];
  title: string;
  initialIndex: number;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(initialIndex);
  const item = images[index];
  useEffect(() => {
    const node = dialog.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    node?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      node?.close();
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);
  function move(direction: number) {
    setIndex(
      (current) => (current + direction + images.length) % images.length,
    );
  }
  return (
    <dialog
      ref={dialog}
      className="gallery-dialog"
      aria-labelledby="gallery-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={(event) => {
        if ((event.target as HTMLElement).tagName === "VIDEO") return;
        if (event.key === "ArrowRight") {
          event.preventDefault();
          move(1);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          move(-1);
        }
      }}
    >
      <div className="gallery-content">
        <div className="gallery-top">
          <h2 id="gallery-title">{title}</h2>
          <button
            className="icon-button"
            onClick={onClose}
            aria-label="Fechar galeria"
          >
            <X size={24} />
          </button>
        </div>
        <div className="gallery-stage">
          {item.video ? (
            <video
              key={item.src}
              controls
              preload="metadata"
              playsInline
              aria-label={item.caption}
            >
              <source src={item.src} type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          ) : (
            <Image src={item.src} alt={item.caption} fill sizes="100vw" />
          )}
        </div>
        <div className="gallery-bottom">
          <button
            className="icon-button"
            onClick={() => move(-1)}
            aria-label="Imagem anterior"
            disabled={images.length < 2}
          >
            <ArrowLeft size={22} />
          </button>
          <p aria-live="polite">
            {item.caption}
            <span>
              {index + 1} / {images.length}
            </span>
          </p>
          <button
            className="icon-button"
            onClick={() => move(1)}
            aria-label="Próxima imagem"
            disabled={images.length < 2}
          >
            <ArrowRight size={22} />
          </button>
        </div>
      </div>
    </dialog>
  );
}
