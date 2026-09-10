// Feixe fino de luz magenta que roda continuamente pela borda de um
// elemento — usado no botão do e-book. O elemento pai precisa de
// `position: relative` (ou `relative` do Tailwind) e um border-radius
// definido; este componente herda o raio via `rounded-[inherit]`.
//
// Técnica: conic-gradient girando + mask-composite recorta só o anel
// da borda (a "padding" abaixo define a espessura do anel). Respeita
// prefers-reduced-motion automaticamente (ver globals.css).
export function BorderBeam({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 rounded-[inherit] ${className}`}
      style={{
        padding: 2,
        background:
          "conic-gradient(from var(--border-beam-angle, 0deg), transparent 0%, transparent 78%, var(--color-magenta) 90%, transparent 100%)",
        WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        animation: "border-beam-spin 3.2s linear infinite",
        filter: "drop-shadow(0 0 3px var(--color-magenta))",
      }}
    />
  );
}
