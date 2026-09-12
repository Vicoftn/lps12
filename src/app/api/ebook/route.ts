import { NextResponse } from "next/server";
import { Resend } from "resend";

// Envia o e-book por e-mail via Resend. O PDF (112MB) não vai como anexo —
// nenhum provedor de e-mail aceita anexos desse tamanho — vai como link de
// download hospedado (Vercel Blob). Variáveis de ambiente necessárias:
//
// RESEND_API_KEY      — chave da conta Resend (resend.com/api-keys)
// EMAIL_FROM          — remetente verificado, ex: "Ana Carolina Nogueira <contato@seudominio.com.br>"
//                        (sem domínio verificado no Resend, só é possível
//                        enviar para o próprio e-mail cadastrado na conta —
//                        ok pra testar, não serve pra produção)
// EBOOK_DOWNLOAD_URL  — URL pública do PDF (gerada ao subir o arquivo pro
//                        Vercel Blob — ver scripts/upload-ebook.mjs)
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

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const ebookUrl = process.env.EBOOK_DOWNLOAD_URL;

  if (!apiKey || !from || !ebookUrl) {
    console.error("[ebook] variáveis de ambiente ausentes — e-mail não enviado", {
      temApiKey: !!apiKey,
      temFrom: !!from,
      temEbookUrl: !!ebookUrl,
    });
    return NextResponse.json(
      { error: "Serviço de e-mail não configurado. Tente novamente mais tarde." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const primeiroNome = nome.split(" ")[0];

  const { error } = await resend.emails.send({
    from,
    to: email,
    subject: "Seu e-book de Visagismo na HOF",
    html: `
      <div style="font-family: Georgia, serif; color: #212121; max-width: 480px; margin: 0 auto;">
        <p>Olá, ${primeiroNome}.</p>
        <p>
          Obrigada pelo seu interesse. Segue o link para baixar o e-book
          <em>Visagismo aplicado à Harmonização Orofacial</em>, de Ana Carolina
          Nogueira:
        </p>
        <p style="margin: 32px 0;">
          <a href="${ebookUrl}" style="background:#212121;color:#ede8e2;padding:14px 28px;border-radius:999px;text-decoration:none;">
            Baixar o e-book
          </a>
        </p>
        <p style="color:#777;font-size:13px;">
          Ana Carolina Nogueira — Harmonização Orofacial
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("[ebook] falha ao enviar via Resend:", error);
    return NextResponse.json(
      { error: "Não foi possível enviar o e-mail agora." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
