import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como tratamos os dados pessoais informados neste site.",
};

const topicos = [
  {
    titulo: "Quem é o responsável",
    corpo: (
      <p>
        {contact.linhaInstitucional} ({contact.cro}) é a responsável pelo tratamento dos dados
        pessoais informados neste site, nos termos da Lei Geral de Proteção de Dados (Lei nº
        13.709/2018 — LGPD).
      </p>
    ),
  },
  {
    titulo: "Quais dados coletamos",
    corpo: (
      <p>
        Apenas o nome e o e-mail que você informa no formulário de download do e-book. O site não
        pede nenhuma outra informação pessoal.
      </p>
    ),
  },
  {
    titulo: "Para que usamos",
    corpo: (
      <p>
        Exclusivamente para enviar a você o e-book solicitado. O tratamento se baseia no seu
        consentimento, dado ao enviar o formulário.
      </p>
    ),
  },
  {
    titulo: "Com quem compartilhamos",
    corpo: (
      <p>
        Não vendemos nem repassamos seus dados a terceiros. Utilizamos fornecedores de tecnologia
        que operam o site e o envio de e-mails em nosso nome (hospedagem e serviço de e-mail
        transacional), que só tratam os dados para essa finalidade e podem estar localizados fora do
        Brasil.
      </p>
    ),
  },
  {
    titulo: "Por quanto tempo guardamos",
    corpo: (
      <p>
        Pelo tempo necessário para cumprir a finalidade descrita acima, ou até que você peça a
        exclusão.
      </p>
    ),
  },
  {
    titulo: "Seus direitos",
    corpo: (
      <p>
        Você pode, a qualquer momento, solicitar confirmação do tratamento, acesso, correção ou
        exclusão dos seus dados, além de revogar o consentimento dado. Basta escrever para{" "}
        <a
          href={`mailto:${contact.email}`}
          className="underline decoration-ink/30 underline-offset-4 transition-colors hover:text-magenta"
        >
          {contact.email}
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacidadePage() {
  return (
    <>
      <Nav variant="sub" />

      <main className="flex-1">
        <Section className="max-w-3xl pt-36 sm:pt-44">
          <h1 className="font-editorial text-3xl font-light sm:text-5xl">Política de Privacidade</h1>
          <p className="mt-4 text-sm text-ink/50">Última atualização: setembro de 2026</p>

          <div className="mt-12 space-y-10">
            {topicos.map((topico) => (
              <div key={topico.titulo}>
                <h2 className="text-lg font-medium">{topico.titulo}</h2>
                <div className="mt-3 text-ink/70">{topico.corpo}</div>
              </div>
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
