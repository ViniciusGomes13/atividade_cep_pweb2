/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Diz ao Next para gerar HTML/CSS/JS puros
  images: {
    unoptimized: true, // Obrigatório para o GitHub Pages aceitar as imagens
  },
  // ATENÇÃO: Se o seu repositório no GitHub se chamar "atividade-cep", coloque abaixo:
  basePath: '/atividade_cep_pweb2', 
};

export default nextConfig;