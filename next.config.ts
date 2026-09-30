import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" }],
  },
  // O domínio acnodontologia.com.br hospedava antes um site em WordPress da
  // mesma marca (ver knowledge/05-decision-log.md, Decisão 019). Essas duas
  // URLs tinham conteúdo real e podem estar indexadas/linkadas — redireciona
  // permanentemente para o equivalente no site novo, em vez de 404.
  async redirects() {
    return [
      {
        source: "/politica-de-privacidade",
        destination: "/privacidade",
        statusCode: 301,
      },
      {
        source: "/project",
        destination: "/",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
