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
import { BlurReveal } from "@/components/spells/BlurReveal";
import { RandomizedText } from "@/components/spells/RandomizedText";

export const metadata: Metadata = {
  title: "Alunos",
  description: "Formação em Harmonização Orofacial com Ana Carolina Nogueira.",
};

const faq = [
  {
    pergunta: "Em que esta formação se diferencia de outros cursos de HOF?",
    resposta:
      "Não é um pacote de conteúdo replicado. É um método construído e testado ao longo de mais de 20 anos de prática clínica e docência, com acompanhamento próximo durante a formação.",
  },
  {
    pergunta: "Terei suporte depois da formação?",
    resposta: "Durante 3 meses o aluno terá suporte técnico no planejamento e na execução de seus casos clínicos.",
  },
  {
    pergunta: "A formação é indicada para quem está começando?",
    resposta:
      "O curso pode ser realizado por qualquer profissional da área da estética, por exemplo: biomédicos, fisioterapeutas, cirurgiões-dentistas, farmacêuticos, estetas, fonoaudiólogos, como também para graduandos que estejam finalizando estas mesmas áreas profissionais.",
  },
  {
    pergunta: "Como funciona a matrícula?",
    resposta:
      "Após seu contato, você recebe todas as informações sobre a próxima turma disponível, incluindo formato e investimento.",
  },
];

const depoimentos = [
  { youtubeId: "https://youtube.com/shorts/jJQjp210JAA?feature=share", nome: "Cintia Viviani", atribuicao: "Ex-aluna" },
  { youtubeId: "https://youtube.com/shorts/sfLtGaOAPPI?feature=share", nome: "Gabriela Zborowski", atribuicao: "Ex-aluna" },
  { youtubeId: "https://youtube.com/shorts/-BgsgoqwFeA?feature=share", nome: "Pablo Alejandro", atribuicao: "Ex-aluno internacional" },
];

export default function AlunoPage() {
  return (
    <>
      <Nav variant="sub" />

      <main className="flex-1">
        {/* 4.1 Hero de continuidade */}
        <section className="relative flex h-[85svh] min-h-[560px] w-full items-end overflow-hidden">
          <Image
            src="/images/aluno-editorial.jpg"
            alt="Ana Carolina Nogueira"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
          <SignatureArcs className="right-[-10%] top-[-8%] h-[min(70vw,620px)] w-[min(70vw,620px)] text-cream" />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 sm:px-10 sm:pb-24">
            <BlurReveal as="h1" className="max-w-lg font-editorial text-3xl font-light text-cream sm:text-5xl">
              Aprender a ver um rosto antes de tocá-lo
            </BlurReveal>
            <RandomizedText className="mt-3 block max-w-md text-cream/90" delay={0.3}>
              Formação em Harmonização Orofacial com Ana Carolina Nogueira.
            </RandomizedText>
            <WhatsAppButton target="aluno" variant="ghost-light" className="mt-8">
              Entrar para a próxima turma
            </WhatsAppButton>
          </div>
        </section>

        {/* 4.2 Autoridade docente */}
        <Section className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 sm:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/ebook-side.jpg"
                alt="Ana Carolina Nogueira em contexto docente"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <BlurReveal as="h2" className="text-2xl font-medium sm:text-3xl" inView>
              Ensino que desperta, transforma e inspira
            </BlurReveal>
            <p className="mt-5 text-ink/70">
              Especialista em Prótese Dentária, Endodontia e Harmonização Orofacial.
              Mestre em Harmonização Orofacial, CEO da marca de ensino BeYounger
              HOF, coordenadora de pós-graduação em HOF e palestrante. Ana Carolina
              Nogueira construiu, ao longo de mais de 20 anos, um método próprio —
              testado em consultório, refinado em sala de aula. Ensina o que pratica
              e pratica o que ensina.
            </p>
            <blockquote className="mt-6 border-l-2 border-magenta pl-6 font-editorial italic text-ink/80">
              &ldquo;Acredito que ensinar é deixar marcas. Por isso, em cada aula, meu
              propósito é compartilhar conhecimento de forma leve, inspiradora e
              verdadeira, para que cada aluno não apenas aprenda, mas também
              acredite no seu próprio potencial.&rdquo;
            </blockquote>
          </Reveal>
        </Section>

        {/* 4.3 O método de ensino */}
        <Section>
          <BlurReveal as="h2" className="text-2xl font-medium sm:text-3xl" inView>
            Um método, não uma coleção de técnicas
          </BlurReveal>
          <RandomizedText className="mt-4 block max-w-xl text-ink/70" inView>
            A formação não se resume a procedimentos isolados. Ela une três pilares:
          </RandomizedText>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { n: "01", t: "Fundamento científico", d: "Anatomia, técnica e segurança como base inegociável." },
              { n: "02", t: "Leitura estética", d: "Formar o olhar artístico para identificar harmonia — não apenas repetir padrões." },
              { n: "03", t: "Prática orientada", d: "Acompanhamento próximo, com correção de rota real, não apenas conteúdo gravado." },
            ].map((pilar, i) => (
              <Reveal key={pilar.n} delay={i * 0.08}>
                <span className="font-accent text-sm text-magenta">{pilar.n}</span>
                <h3 className="mt-2 text-lg font-medium">{pilar.t}</h3>
                <p className="mt-2 text-ink/70">{pilar.d}</p>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 4.4 Estrutura da formação */}
        <Section className="text-center">
          <BlurReveal as="h2" className="text-2xl font-medium sm:text-3xl" inView>
            Uma formação, não um curso avulso
          </BlurReveal>
          <Reveal delay={0.1}>
            <div className="mx-auto mt-6 max-w-2xl space-y-4 text-left text-ink/70">
              <p>
                A Mentoria VIP Full Face é realizada de forma presencial, combinando
                conteúdo teórico com uma experiência prática voltada à aplicação das
                técnicas de Botox e preenchimento Full Face.
              </p>
              <p>
                As datas são flexíveis e combinadas de acordo com a disponibilidade
                do aluno, permitindo maior adaptação à sua rotina.
              </p>
              <p>
                A formação inclui momentos de hands-on e atendimento clínico em
                pacientes, proporcionando contato direto com a aplicação das
                técnicas abordadas durante o curso.
              </p>
              <p>
                Após a formação, o aluno conta ainda com suporte técnico pós-curso
                durante 3 meses, para esclarecimento de dúvidas relacionadas à
                teoria e à prática dos procedimentos.
              </p>
              <p className="text-sm text-ink/50">
                Carga horária definida de acordo com a programação da turma e a
                modalidade da formação.
              </p>
            </div>
          </Reveal>
        </Section>

        {/* 4.5 Prova de resultado em outros profissionais */}
        <Section>
          <BlurReveal as="h2" className="mb-10 text-2xl font-medium sm:text-3xl" inView>
            Profissionais formados pelo método BeYounger HOF
          </BlurReveal>
          <Reveal delay={0.1}>
            <VideoTestimonials items={depoimentos} />
          </Reveal>
        </Section>

        {/* 4.6 FAQ de objeções profissionais */}
        <Section>
          <BlurReveal as="h2" className="mb-10 text-2xl font-medium sm:text-3xl" inView>
            Perguntas frequentes
          </BlurReveal>
          <FaqAccordion items={faq} />
        </Section>

        {/* 4.7 Convocação final */}
        <section className="relative flex min-h-[70svh] w-full items-center overflow-hidden">
          <Image
            src="/images/autoridade-standing.jpg"
            alt="Ana Carolina Nogueira"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/70" />
          <StaticArc className="bottom-[-70%] left-[-12%] h-[min(620px,70vw)] w-[min(620px,70vw)] text-magenta opacity-30" />
          <div className="relative z-10 mx-auto w-full max-w-2xl px-6 py-24 text-center text-cream sm:px-10">
            <Reveal>
              <BlurReveal as="h2" className="text-2xl font-medium sm:text-3xl" inView>
                A próxima turma está próxima
              </BlurReveal>
              <RandomizedText className="mt-5 block text-cream/85" inView>
                Converse com nossa equipe e conheça os detalhes da próxima formação.
              </RandomizedText>
              <WhatsAppButton target="aluno" className="mt-8">
                Entrar para a próxima turma
              </WhatsAppButton>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
