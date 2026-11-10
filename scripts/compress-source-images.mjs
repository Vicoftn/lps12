import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";

const SRC_DIR = path.resolve("public/images");
const OUT_DIR = process.argv[2];
if (!OUT_DIR) {
  console.error("uso: node scripts/compress-source-images.mjs <pasta-de-saida>");
  process.exit(1);
}

const MAX_WIDTH = 3840;
const QUALITY = 82;

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const files = (await readdir(SRC_DIR)).filter((f) => /\.jpe?g$/i.test(f));

  const rows = [];
  for (const file of files) {
    const srcPath = path.join(SRC_DIR, file);
    const outPath = path.join(OUT_DIR, file);
    const before = (await stat(srcPath)).size;

    await sharp(srcPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(outPath);

    const after = (await stat(outPath)).size;
    rows.push({ file, before, after, pct: Math.round((1 - after / before) * 100) });
  }

  console.log("arquivo,antes(bytes),depois(bytes),reducao");
  for (const r of rows) {
    console.log(`${r.file},${r.before},${r.after},${r.pct}%`);
  }
  const totalBefore = rows.reduce((s, r) => s + r.before, 0);
  const totalAfter = rows.reduce((s, r) => s + r.after, 0);
  console.log(`TOTAL,${totalBefore},${totalAfter},${Math.round((1 - totalAfter / totalBefore) * 100)}%`);
}

main();
