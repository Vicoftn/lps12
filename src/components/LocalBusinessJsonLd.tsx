import { contact, enderecoEstruturado, siteUrl } from "@/lib/content";

// Dados estruturados (schema.org) da clínica, pro Google entender a marca
// como entidade local — nome, endereço, telefone, redes sociais. Tipo
// "Dentist" é um subtipo reconhecido de MedicalBusiness/LocalBusiness.
// Único, no layout raiz, presente em todas as páginas (prática recomendada).
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Ana Carolina Nogueira — Harmonização Orofacial",
    description:
      "Harmonização Orofacial com Ana Carolina Nogueira, cirurgiã-dentista (CRO-PR 12088), em Curitiba.",
    url: siteUrl,
    image: `${siteUrl}/og/portfolio.jpg`,
    telephone: contact.telefoneExibicao,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      ...enderecoEstruturado,
    },
    sameAs: [
      `https://www.instagram.com/${contact.instagramPessoal.replace("@", "")}`,
      `https://www.instagram.com/${contact.instagramEnsino.replace("@", "")}`,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
