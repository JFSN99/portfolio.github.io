import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode:false,
  output: 'export', // Diz ao Next para gerar HTML/CSS estáticos
  basePath: '/nome-do-seu-repositorio', // OBRIGATÓRIO: barra '/' seguida pelo nome exato do repositório
  images: {
    unoptimized: true, // O GitHub Pages não suporta a otimização de imagens padrão do Next.js
  },
};

export default nextConfig;
