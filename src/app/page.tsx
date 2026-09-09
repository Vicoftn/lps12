import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { PillarsList } from "@/components/PillarsList";
import { EbookForm } from "@/components/EbookForm";
import { SignatureArcs, StaticArc } from "@/components/ArcMotif";

export const metadata: Metadata = {
  title: "Ana Carolina Nogueira — Harmonização Orofacial",
  description: "Harmonização Orofacial. Ciência e arte a serviço da sua identidade.",
};

export default function PortfolioPage() {
  return (
    <>
      <Nav variant="home" />

      <main className="flex-1">
        {/* 4.1 Hero de marca */}
        <section className="relative flex h-svh min-h-[640px] w-full items-end overflow-hidden">
          <Image
            src="/images/hero-portfolio.jpg"
            alt="Retrato editorial de Ana Carolina Nogueira"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
          <SignatureArcs className="right-[-10%] top-[-8%] h-[min(70vw,620px)] w-[min(70vw,620px)] text-cream" />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 sm:px-10 sm:pb-24">
            <h1 className="font-editorial text-4xl font-light text-cream sm:text-6xl">
              Ana Carolina Nogueira
            </h1>
            <p className="mt-3 max-w-md text-cream/90">
              Harmonização Orofacial. Ciência e arte a serviço da sua identidade.
            </p>
            <a
              href="#filosofia"
              className="mt-10 inline-block text-xs uppercase tracking-[0.2em] text-cream/70 transition-colors hover:text-cream"
            >
              Conheça a filosofia ↓
            </a>
          </div>
        </section>

        {/* 4.2 Filosofia / promessa da marca */}
        <Section id="filosofia" className="text-center">
          <Reveal>
            <p className="mx-auto max-w-2xl font-editorial text-2xl font-light leading-snug sm:text-4xl">
              A beleza não precisa ser criada.
              <br />
              Ela precisa ser revelada.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-md text-ink/60">
              Cada rosto já carrega sua própria harmonia. O trabalho é reconhecê-la.
            </p>
          </Reveal>
        </Section>

        {/* 4.3 Apresentação da Dra. Ana */}
        <Section className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 sm:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/bio-apresentacao.jpg"
                alt="Ana Carolina Nogueira em retrato editorial"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-2xl font-medium sm:text-3xl">
              Uma trajetória dedicada à precisão
            </h2>
            <p className="mt-5 text-ink/70">
              Há mais de 20 anos, Ana Carolina Nogueira dedica-se à Harmonização
              Orofacial como campo de estudo e de prática. Mestre na área, professora
              e palestrante, construiu uma trajetória onde técnica e sensibilidade
              caminham juntas — formando não apenas resultados, mas outros
              profissionais.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-ink/50">
              Cirurgiã Dentista pela PUCPR em 1997 · Mestre e Especialista em
              Harmonização Orofacial · Especialista em Prótese Dentária ·
              Especialista em Endodontia · Habilitação em Ozonioterapia ·
              Habilitação em Laserterapia · Coordenadora de pós-graduação em HOF na
              Aprocim PR · Palestrante
            </p>
          </Reveal>
        </Section>

        {/* 4.4 Pilares da prática */}
        <Section>
          <Reveal>
            <h2 className="mb-10 text-2xl font-medium sm:text-3xl">
              Cinco princípios guiam cada decisão
            </h2>
          </Reveal>
          <PillarsList />
        </Section>

        {/* 4.5 Prova de autoridade */}
        <Section>
          <Reveal>
            <h2 className="text-2xl font-medium sm:text-3xl">
              Reconhecida por pares, formada pela experiência
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl text-ink/70">
              Ao longo de sua trajetória, Ana Carolina Nogueira ministrou workshops,
              palestras e aulas em diferentes instituições, tais como: Universidade
              de Leida (Espanha, 2024), Full Face Congress (São Paulo, 2025),
              Congresso do SBTI (2024 e 2026), Face Congress (São Paulo, 2022), além
              de atuar como professora convidada no Instituto Aras (Florianópolis-SC),
              na ABO (Curitiba-PR) e no IOA (Blumenau-SC), e como coordenadora de
              pós-graduação na Aprocim (Curitiba-PR) — formando profissionais que hoje
              atuam com o mesmo rigor técnico e a mesma sensibilidade estética que
              aprenderam com ela.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <blockquote className="mt-10 max-w-2xl border-l-2 border-magenta pl-6 font-editorial text-xl font-light italic text-ink/80">
              &ldquo;Ensinar, para mim, é mais do que transmitir conhecimento: é
              proporcionar uma experiência de aprendizado que realmente faça sentido
              e permaneça na trajetória de cada aluno.&rdquo;
            </blockquote>
          </Reveal>
        </Section>

        {/* 4.6 Recurso educativo (e-book) */}
        <Section className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 sm:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/ebook-side.jpg"
                alt="Ana Carolina Nogueira"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-2xl font-medium sm:text-3xl">
              Visagismo: a leitura que antecede toda harmonização
            </h2>
            <p className="mt-5 text-ink/70">
              Antes de qualquer procedimento, existe um olhar treinado para
              reconhecer proporção, simetria e identidade. Neste e-book, Ana Carolina
              Nogueira reúne os fundamentos do Visagismo aplicado à Harmonização
              Orofacial.
            </p>
            <div className="mt-8">
              <EbookForm />
            </div>
          </Reveal>
        </Section>

        {/* 4.7 Bifurcação de caminhos */}
        <Section>
          <Reveal>
            <h2 className="mb-10 text-center text-2xl font-medium sm:text-3xl">
              Dois caminhos. Uma mesma filosofia.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            <Reveal>
              <Link
                href="/paciente"
                className="group relative flex aspect-[4/5] w-full flex-col justify-end overflow-hidden rounded-sm"
              >
                <Image
                  src="/images/paciente-warm.jpg"
                  alt="Quero ser paciente"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <StaticArc className="bottom-[-58%] right-[-24%] h-[74%] w-[74%] text-magenta opacity-25 transition-transform duration-500 ease-out group-hover:scale-125 group-hover:opacity-50" />
                <div className="relative z-10 p-8 text-cream">
                  <p className="text-sm text-cream/80">
                    Para quem busca cuidado, segurança e um resultado que ainda
                    parece seu.
                  </p>
                  <span className="mt-4 inline-block border-b border-cream/60 pb-1 text-lg font-medium">
                    Quero ser paciente
                  </span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                href="/aluno"
                className="group relative flex aspect-[4/5] w-full flex-col justify-end overflow-hidden rounded-sm"
              >
                <Image
                  src="/images/aluno-editorial.jpg"
                  alt="Quero aprender com a Dra."
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <StaticArc className="bottom-[-58%] right-[-24%] h-[74%] w-[74%] text-magenta opacity-25 transition-transform duration-500 ease-out group-hover:scale-125 group-hover:opacity-50" />
                <div className="relative z-10 p-8 text-cream">
                  <p className="text-sm text-cream/80">
                    Para profissionais que buscam elevar sua prática com método e
                    autoridade.
                  </p>
                  <span className="mt-4 inline-block border-b border-cream/60 pb-1 text-lg font-medium">
                    Quero aprender com a Dra.
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
