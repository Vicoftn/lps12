import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SignatureArcs, StaticArc } from "@/components/ArcMotif";

export const metadata: Metadata = {
  title: "Pacientes",
  description: "Uma avaliação cuidadosa, antes de qualquer decisão.",
};

const faq = [
  {
    pergunta: "O resultado vai parecer natural?",
    resposta:
      "Esse é o ponto de partida de qualquer avaliação. O objetivo nunca é alterar sua identidade — é valorizar o que já existe, com técnica e discrição.",
  },
  {
    pergunta: "Como funciona a primeira consulta?",
    resposta:
      "A avaliação começa com uma conversa sobre o que você busca, seguida de uma análise técnica do seu rosto. Ao final, você recebe um plano individual — sem compromisso imediato.",
  },
  {
    pergunta: "É seguro?",
    resposta:
      "Toda avaliação e todo procedimento seguem critérios técnicos rigorosos, construídos ao longo de mais de 20 anos de prática em Harmonização Orofacial.",
  },
  {
    pergunta: "Como funciona o investimento?",
    resposta:
      "O investimento é definido após a avaliação, de acordo com o plano individual traçado para o seu caso.",
  },
];

// TODO: substituir pelos IDs reais dos vídeos no YouTube (não listado) assim
// que o upload for feito — ver knowledge/05-decision-log.md.
const depoimentos = [
  { youtubeId: "SUBSTITUIR_LINA", nome: "Lina Carvalho", atribuicao: "Paciente" },
  { youtubeId: "SUBSTITUIR_MITSUY", nome: "Mitsuy Kuriyama", atribuicao: "Paciente" },
];

export default function PacientePage() {
  return (
    <>
      <Nav variant="sub" />

      <main className="flex-1">
        {/* 4.1 Hero de continuidade */}
        <section className="relative flex h-[85svh] min-h-[560px] w-full items-end overflow-hidden">
          <Image
            src="/images/paciente-warm.jpg"
            alt="Retrato editorial de Ana Carolina Nogueira"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
          <SignatureArcs className="right-[-10%] top-[-8%] h-[min(70vw,620px)] w-[min(70vw,620px)] text-cream" />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 sm:px-10 sm:pb-24">
            <h1 className="max-w-lg font-editorial text-3xl font-light text-cream sm:text-5xl">
              O seu rosto já tem uma história. Nosso trabalho é entendê-la.
            </h1>
            <p className="mt-3 max-w-md text-cream/90">
              Uma avaliação cuidadosa, antes de qualquer decisão.
            </p>
            <WhatsAppButton target="paciente" variant="ghost-light" className="mt-8">
              Agendar avaliação
            </WhatsAppButton>
          </div>
        </section>

        {/* 4.2 Promessa aplicada */}
        <Section className="text-center">
          <Reveal>
            <h2 className="text-2xl font-medium sm:text-3xl">Harmonia, não transformação</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-ink/70">
              Você não precisa de um rosto novo. Precisa de alguém que entenda o
              seu — suas proporções, sua expressão, sua identidade — e trabalhe a
              favor delas. É esse o ponto de partida de cada avaliação.
            </p>
          </Reveal>
        </Section>

        {/* 4.3 Método / abordagem clínica */}
        <Section>
          <Reveal>
            <h2 className="text-2xl font-medium sm:text-3xl">
              Um processo pensado em etapas, não em pressa
            </h2>
            <p className="mt-4 max-w-xl text-ink/70">
              Cada avaliação segue um raciocínio técnico, construído ao longo de
              mais de 20 anos de prática.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { n: "01", t: "Escuta", d: "Entender o que você busca — e o que o seu rosto já tem para oferecer." },
              { n: "02", t: "Análise técnica", d: "Estudo de proporções, simetria e anatomia individual, com precisão científica." },
              { n: "03", t: "Plano individual", d: "Um plano desenhado para o seu rosto — nunca replicado de outro caso." },
            ].map((etapa, i) => (
              <Reveal key={etapa.n} delay={i * 0.08}>
                <span className="font-accent text-sm text-magenta">{etapa.n}</span>
                <h3 className="mt-2 text-lg font-medium">{etapa.t}</h3>
                <p className="mt-2 text-ink/70">{etapa.d}</p>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 4.4 A experiência de ser paciente */}
        <Section className="text-center">
          <Reveal>
            <h2 className="text-2xl font-medium sm:text-3xl">Cuidado do início ao fim</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-ink/70">
              A avaliação é o primeiro passo de um acompanhamento próximo. Cada
              decisão é explicada, cada dúvida é bem-vinda. Você não é conduzida
              por um protocolo padrão — é acompanhada por uma especialista que
              conhece o seu caso.
            </p>
          </Reveal>
        </Section>

        {/* 4.5 Prova social qualificada */}
        <Section>
          <Reveal>
            <h2 className="mb-10 text-2xl font-medium sm:text-3xl">O que dizem as pacientes</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <VideoTestimonials items={depoimentos} />
          </Reveal>
        </Section>

        {/* 4.6 FAQ de objeções */}
        <Section>
          <Reveal>
            <h2 className="mb-10 text-2xl font-medium sm:text-3xl">Perguntas frequentes</h2>
          </Reveal>
          <FaqAccordion items={faq} />
        </Section>

        {/* 4.7 Convocação final */}
        <section className="relative flex min-h-[70svh] w-full items-center overflow-hidden">
          <Image
            src="/images/bio-apresentacao.jpg"
            alt="Ana Carolina Nogueira"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/70" />
          <StaticArc className="bottom-[-70%] left-[-12%] h-[min(620px,70vw)] w-[min(620px,70vw)] text-magenta opacity-30" />
          <div className="relative z-10 mx-auto w-full max-w-2xl px-6 py-24 text-center text-cream sm:px-10">
            <Reveal>
              <h2 className="text-2xl font-medium sm:text-3xl">O primeiro passo é uma conversa</h2>
              <p className="mt-5 text-cream/85">
                Agende sua avaliação e conheça, com clareza e sem pressa, o que é
                possível para o seu rosto.
              </p>
              <WhatsAppButton target="paciente" className="mt-8">
                Agendar avaliação
              </WhatsAppButton>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer showAlunoCrossLink />
    </>
  );
}
