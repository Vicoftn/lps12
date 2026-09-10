import { Reveal } from "./Reveal";

const pillars = [
  {
    n: "01",
    nome: "Ciência",
    texto: "Cada procedimento parte de estudo, técnica e evidência — nunca de improviso.",
  },
  {
    n: "02",
    nome: "Arte",
    texto: "A leitura de um rosto é também uma leitura estética. Precisão sem sensibilidade não é suficiente.",
  },
  {
    n: "03",
    nome: "Naturalidade",
    texto: "O objetivo nunca é mudar quem você é. É revelar o que já é seu.",
  },
  {
    n: "04",
    nome: "Precisão",
    texto: "Milímetros importam. Cada decisão é medida antes de ser tomada.",
  },
  {
    n: "05",
    nome: "Exclusividade",
    texto: "Cada avaliação é única. Nenhum plano é replicado de um rosto para outro.",
  },
];

// Tratamento editorial deliberado — não um grid de cards/ícones.
// Ver knowledge/05-decision-log.md, "Decisão — Apresentação dos 5 pilares".
export function PillarsList({ dark = false }: { dark?: boolean }) {
  const divider = dark ? "divide-cream/15 border-cream/15" : "divide-ink/10 border-ink/10";
  const title = dark ? "text-cream" : "text-ink";
  const body = dark ? "text-cream/70" : "text-ink/70";

  return (
    <div className={`divide-y border-y ${divider}`}>
      {pillars.map((p, i) => (
        <Reveal key={p.n} delay={i * 0.05}>
          <div className="flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:gap-10 sm:py-10">
            <span className="font-accent text-sm text-magenta sm:w-12 sm:shrink-0">
              {p.n}
            </span>
            <h3 className={`text-xl font-medium sm:w-56 sm:shrink-0 ${title}`}>{p.nome}</h3>
            <p className={`max-w-xl ${body}`}>{p.texto}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
