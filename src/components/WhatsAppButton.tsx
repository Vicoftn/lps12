import { whatsappHref, whatsapp } from "@/lib/content";
import { FlowButton } from "./FlowButton";

type Target = keyof typeof whatsapp;

// "primary" e "ghost-light" ficam sobre foto/fundo escuro (texto claro);
// "ghost" fica sobre fundo claro (texto escuro). Mantido como três nomes
// para não precisar tocar nas páginas que já chamam WhatsAppButton.
const toneByVariant = {
  primary: "light",
  "ghost-light": "light",
  ghost: "dark",
} as const;

export function WhatsAppButton({
  target,
  children,
  variant = "primary",
  className = "",
}: {
  target: Target;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "ghost-light";
  className?: string;
}) {
  return (
    <a href={whatsappHref(target)} target="_blank" rel="noopener noreferrer" className={className}>
      <FlowButton tone={toneByVariant[variant]}>{children}</FlowButton>
    </a>
  );
}
