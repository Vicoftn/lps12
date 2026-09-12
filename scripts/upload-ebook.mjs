// Sobe o PDF do e-book pro Vercel Blob Storage e imprime a URL pública.
// Rodar uma vez (ou de novo, se o PDF mudar):
//
//   BLOB_READ_WRITE_TOKEN=seu_token node scripts/upload-ebook.mjs "/caminho/para/o.pdf"
//
// O token vem do painel da Vercel: Project → Storage → (seu Blob store) →
// ".env.local" tab, ou rodando `vercel env pull` no projeto já linkado.
//
// A URL impressa no final é o valor que vai na variável de ambiente
// EBOOK_DOWNLOAD_URL (Vercel → Project → Settings → Environment Variables).

import { put } from "@vercel/blob";
import { readFile } from "node:fs/promises";
import path from "node:path";

const filePath = process.argv[2];
if (!filePath) {
  console.error("Uso: node scripts/upload-ebook.mjs /caminho/para/ebook.pdf");
  process.exit(1);
}
if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error("Faltou BLOB_READ_WRITE_TOKEN no ambiente.");
  process.exit(1);
}

const fileBuffer = await readFile(filePath);
const fileName = path.basename(filePath);

console.log(`Enviando ${fileName} (${(fileBuffer.length / 1024 / 1024).toFixed(1)}MB)...`);

const blob = await put(fileName, fileBuffer, {
  access: "public",
  addRandomSuffix: false,
});

console.log("\nPronto! URL pública:");
console.log(blob.url);
console.log("\nAdicione essa URL como EBOOK_DOWNLOAD_URL nas variáveis de ambiente da Vercel.");
