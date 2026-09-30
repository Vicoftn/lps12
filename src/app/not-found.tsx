import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { StaticArc } from "@/components/ArcMotif";
import { FlowButton } from "@/components/FlowButton";

// 404 personalizada — ver knowledge/05-decision-log.md, Decisão 019: o
// domínio já teve outro site (WordPress), então links antigos podem cair
// aqui. Mantém a pessoa dentro da identidade da marca, com caminho de volta.
export const metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <>
      <Nav variant="sub" />

      <main className="flex-1">
        <section className="relative flex min-h-[70svh] w-full items-center overflow-hidden bg-ink">
          <StaticArc className="bottom-[-70%] left-[-12%] h-[min(620px,70vw)] w-[min(620px,70vw)] text-magenta opacity-30" />
          <div className="relative z-10 mx-auto w-full max-w-2xl px-6 py-24 text-center text-cream sm:px-10">
            <span className="font-accent text-sm text-magenta">404</span>
            <h1 className="mt-4 font-editorial text-3xl font-light sm:text-5xl">
              Este endereço não existe mais por aqui
            </h1>
            <p className="mx-auto mt-5 max-w-md text-cream/80">
              A página que você procura foi movida ou não está mais disponível.
              Escolha um caminho para continuar.
            </p>
            <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-10">
              <Link href="/">
                <FlowButton tone="light">Voltar ao início</FlowButton>
              </Link>
              <Link href="/paciente">
                <FlowButton tone="light">Quero ser paciente</FlowButton>
              </Link>
              <Link href="/aluno">
                <FlowButton tone="light">Quero aprender com a Dra.</FlowButton>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
