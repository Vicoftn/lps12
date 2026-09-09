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
  endereco: "Av. Mal. Floriano Peixoto, 306 – cj. 61",
  telefoneExibicao: "(41) 98506-6632",
  email: "ananogueira_98@yahoo.com",
  instagramPessoal: "@dra.carolnogueira_",
  instagramEnsino: "@acnodontoligafacial",
} as const;

export const siteUrl = "https://www.draanacarolinanogueira.com.br";
