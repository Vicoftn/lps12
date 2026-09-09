import { whatsappHref, whatsapp } from "@/lib/content";

type Target = keyof typeof whatsapp;

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
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm tracking-wide transition-colors duration-300";
  const styles = {
    primary: "bg-ink text-cream hover:bg-magenta",
    ghost: "border border-ink/30 text-ink hover:border-magenta hover:text-magenta",
    "ghost-light": "border border-cream/50 text-cream hover:border-cream hover:bg-cream/10",
  }[variant];

  return (
    <a
      href={whatsappHref(target)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
