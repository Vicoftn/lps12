import Link from "next/link";
import { Logo } from "./Logo";
import { contact, whatsappHref } from "@/lib/content";

// `showAlunoCrossLink` existe apenas para a página Paciente — ver
// strategy/sitemap.md (seção 4) e knowledge/05-decision-log.md: link
// discreto que reutiliza o mesmo destino do CTA final da página Aluno.
export function Footer({ showAlunoCrossLink = false }: { showAlunoCrossLink?: boolean }) {
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-6 py-12 text-center sm:px-10">
        <Logo className="h-4 w-auto text-ink/60" />
        <p className="text-sm text-ink/70">{contact.linhaInstitucional}</p>
        <p className="text-xs leading-relaxed text-ink/50">
          {contact.endereco} · {contact.telefoneExibicao} · {contact.email}
          <br />
          {contact.instagramPessoal} · {contact.instagramEnsino}
        </p>
        {showAlunoCrossLink && (
          <a
            href={whatsappHref("aluno")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-wide text-ink/50 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-magenta"
          >
            É profissional da área? Conheça a formação
          </a>
        )}
        <Link
          href="/"
          className="mt-2 text-xs tracking-wide text-ink/50 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-magenta"
        >
          Voltar ao início
        </Link>
      </div>
    </footer>
  );
}
