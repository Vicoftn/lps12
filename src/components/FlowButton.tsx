import type { ReactNode } from "react";

// Botão-texto com seta e sublinhado rosa que "flui" da esquerda pra
// direita no hover — usado como conteúdo interno de CTAs (WhatsAppButton,
// links de navegação) no lugar do pill sólido anterior.
export function FlowButton({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const textColor = tone === "light" ? "text-cream" : "text-ink";

  return (
    <span className={`group inline-flex items-center gap-2 ${textColor} ${className}`}>
      <span className="relative">
        {children}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-magenta transition-transform duration-300 ease-out group-hover:scale-x-100"
        />
      </span>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-4 w-4 shrink-0 text-magenta transition-transform duration-300 ease-out group-hover:translate-x-1"
      >
        <path d="M4 12h15M13 6l6 6-6 6" />
      </svg>
    </span>
  );
}
