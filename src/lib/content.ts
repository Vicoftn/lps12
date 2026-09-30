// Fonte única de verdade para dados que aparecem em mais de um lugar
// (links de contato, WhatsApp, e-book). Copy de cada seção vive nos
// componentes de página, espelhando 1:1 os arquivos em /copy.

export const whatsapp = {
  paciente: {
    number: "5541985066632",
    message: "Olá, vim pelo site e gostaria de agendar uma avaliação.",
  },
  aluno: {
    number: "5541999621255",
    message:
      "Olá, vim pelo site e gostaria de saber mais sobre a próxima mentoria VIP Full Face.",
  },
} as const;

export function whatsappHref(target: keyof typeof whatsapp) {
  const { number, message } = whatsapp[target];
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const contact = {
  linhaInstitucional: "Ana Carolina Nogueira — Harmonização Orofacial",
  cro: "CRO-PR 12088",
  endereco: "Av. Mal. Floriano Peixoto, 306 – Conj. 61 – Centro, Curitiba – PR, 80010-130",
  telefoneExibicao: "(41) 3223-1147",
  email: "ananogueira_98@yahoo.com",
  instagramPessoal: "@dra.carolnogueira_",
  instagramEnsino: "@acnodontoligafacial",
} as const;

export const siteUrl = "https://www.acnodontologia.com.br";
