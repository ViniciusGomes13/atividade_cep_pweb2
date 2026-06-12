/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Diz ao Next para gerar HTML/CSS/JS puros na pasta 'out'
  images: {
    unoptimized: true, // Obrigatório se você estiver usando o componente <Image /> do Next
  },
  // Substitua 'nome-do-seu-repositorio' pelo nome exato do seu projeto no GitHub
  basePath: process.env.NODE_ENV === 'production' ? '/atividade_cep_pweb2' : '',
};

export default nextConfig;