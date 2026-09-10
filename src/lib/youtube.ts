// Aceita o ID puro ou qualquer formato de link que o botão "Compartilhar"
// do YouTube gera (shorts, youtu.be, watch?v=, embed) e devolve só o ID.
export function extractYouTubeId(input: string): string {
  const trimmed = input.trim();

  const patterns = [
    /youtube\.com\/shorts\/([\w-]{11})/,
    /youtu\.be\/([\w-]{11})/,
    /youtube\.com\/embed\/([\w-]{11})/,
    /[?&]v=([\w-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = trimmed.match(pattern);
    if (match) return match[1];
  }

  return trimmed;
}
