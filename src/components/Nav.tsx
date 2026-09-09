import Link from "next/link";
import { AcnMark } from "./Logo";

export function Nav({ variant }: { variant: "home" | "sub" }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
      <nav
        aria-label="Principal"
        className="mx-auto flex h-[74px] w-full max-w-6xl items-center justify-between px-6 sm:px-10"
      >
        <Link href="/" aria-label="Ana Carolina Nogueira — início" className="flex items-center gap-3.5">
          <AcnMark className="h-[26px] w-auto shrink-0 text-ink" />
          <span className="hidden text-left leading-tight sm:block">
            <span className="block text-[0.82rem] font-medium uppercase tracking-[0.15em]">
              Ana Carolina Nogueira
            </span>
            <span className="block text-[0.6rem] uppercase tracking-[0.2em] text-ink/45">
              Harmonização Orofacial
            </span>
          </span>
        </Link>
        {variant === "sub" && (
          <Link
            href="/"
            className="rounded-sm px-3.5 py-2 text-xs uppercase tracking-[0.13em] text-ink/70 transition-colors hover:text-magenta"
          >
            Voltar ao início
          </Link>
        )}
      </nav>
    </header>
  );
}
