// Sobe o PDF do e-book pro Vercel Blob Storage e imprime a URL pública.
//
// Uso (na pasta site/, funciona igual no PowerShell e no Bash):
//
//   node --env-file=.env.local scripts/upload-ebook.mjs "caminho/do/ebook.pdf"
//
// O token (BLOB_READ_WRITE_TOKEN) é lido do .env.local — baixe-o com
// `vercel env pull .env.local` ou copie da aba ".env.local" do Blob store
// (Vercel → Project → Storage). Também aceita o token já definido no ambiente.
//
// A URL impressa no final é o valor da variável de ambiente EBOOK_DOWNLOAD_URL
// (Vercel → Project → Settings → Environment Variables).

import { put } from "@vercel/blob";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";

const filePath = process.argv[2];
if (!filePath) {
  console.error('Uso: node --env-file=.env.local scripts/upload-ebook.mjs "caminho/do/ebook.pdf"');
  process.exit(1);
}

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) {
  console.error(
    "BLOB_READ_WRITE_TOKEN não encontrado.\n" +
      "Confira se existe um arquivo .env.local na pasta site/ com a linha\n" +
      "BLOB_READ_WRITE_TOKEN=... e rode com --env-file=.env.local."
  );
  process.exit(1);
}

let size;
try {
  size = (await stat(filePath)).size;
} catch {
  console.error(`Arquivo não encontrado: ${filePath}`);
  process.exit(1);
}

// Nome limpo na URL pública (sem espaços duplos/acentos).
const fileName = "ebook-visagismo-hof.pdf";
console.log(`Enviando ${path.basename(filePath)} (${(size / 1024 / 1024).toFixed(1)}MB) como ${fileName}...`);

// Stores novos podem ser privados; o e-mail precisa de link público. Tenta
// público primeiro e explica se o store não permitir.
try {
  const blob = await put(fileName, createReadStream(filePath), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/pdf",
    multipart: true,
    token,
    onUploadProgress: ({ percentage }) => {
      process.stdout.write(`\r  ${percentage.toFixed(0)}%   `);
    },
  });

  console.log("\n\nPronto! URL pública:");
  console.log(blob.url);
  console.log("\nAdicione essa URL como EBOOK_DOWNLOAD_URL nas variáveis de ambiente da Vercel.");
} catch (err) {
  console.error("\n\nFalha no upload:", err?.message ?? err);
  process.exit(1);
}
