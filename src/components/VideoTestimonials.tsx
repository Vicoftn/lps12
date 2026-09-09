"use client";

import { useState } from "react";
import Image from "next/image";

export type VideoTestimonial = {
  youtubeId: string;
  nome: string;
  atribuicao: string;
};

// Depoimentos em vídeo, hospedados no YouTube (não listado) — ver
// knowledge/05-decision-log.md, "Decisão — Depoimentos em vídeo". Os vídeos
// já têm legenda embutida pela produção, o que resolve o requisito de
// acessibilidade sem trabalho adicional aqui.
//
// O iframe do YouTube só é montado após o clique no play ("fachada"): isso
// evita carregar o player pesado do YouTube em toda visita à página, o que
// destruiria a meta de Lighthouse >95. Nenhum vídeo dá autoplay ao carregar
// a seção — só depois que a pessoa clica.
export function VideoTestimonials({ items }: { items: VideoTestimonial[] }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const current = items[index];

  function selecionar(i: number) {
    setIndex(i);
    setPlaying(false);
  }

  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-ink">
        {playing ? (
          <iframe
            key={current.youtubeId}
            src={`https://www.youtube-nocookie.com/embed/${current.youtubeId}?autoplay=1&rel=0`}
            title={`Depoimento de ${current.nome}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group relative h-full w-full"
            aria-label={`Assistir depoimento de ${current.nome}`}
          >
            <Image
              src={`https://i.ytimg.com/vi/${current.youtubeId}/maxresdefault.jpg`}
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-ink/30 transition-colors group-hover:bg-ink/40">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/90 text-ink transition-transform group-hover:scale-105">
                <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-ink/70">
          <span className="font-medium text-ink">{current.nome}</span>
          {" — "}
          {current.atribuicao}
        </p>

        {items.length > 1 && (
          <div className="flex items-center gap-3" role="group" aria-label="Navegar entre depoimentos">
            {items.map((item, i) => (
              <button
                key={item.youtubeId}
                type="button"
                onClick={() => selecionar(i)}
                aria-label={`Depoimento de ${item.nome}`}
                aria-current={i === index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? "bg-magenta" : "bg-ink/20 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
