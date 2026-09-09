import { NextResponse } from "next/server";

// NOTA DE PRODUÇÃO: este handler valida e recebe o lead, mas ainda não envia
// o e-book por e-mail de verdade — falta conectar um provedor (Resend,
// SendGrid, SMTP institucional) com as credenciais da clínica antes do
// lançamento. Por ora, registra o lead nos logs do servidor.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const nome = typeof body?.nome === "string" ? body.nome.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!nome || !emailValido) {
    return NextResponse.json(
      { error: "Informe nome e e-mail válidos." },
      { status: 400 }
    );
  }

  console.log("[ebook] novo lead:", { nome, email });

  return NextResponse.json({ ok: true });
}
