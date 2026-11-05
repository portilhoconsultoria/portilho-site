// Dados centrais do site — edite aqui
export const SITE = {
  nome: 'Portilho Inteligência Comercial',
  whatsapp: '5548988677262',
  whatsappTexto: 'Olá, vim do site da Portilho.',
  email: 'jhonatan.portilho@gmail.com',
  cidade: 'Florianópolis',
  uf: 'SC',
  regiao: 'Santa Catarina e Paraná',
  wviUrl: 'https://comercialinteligente.com.br',
  ga4: import.meta.env.PUBLIC_GA4_ID || '',
  pixel: import.meta.env.PUBLIC_META_PIXEL_ID || '191904599160662',
};
export const waLink = (t = SITE.whatsappTexto) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t)}`;
export const DESAFIOS = [
  'Preciso contratar mais vendedores',
  'Investi e o faturamento ficou igual',
  'Vivo apagando incêndio no comercial',
  'Quero que a IA gere venda na minha empresa',
];
export const TIMES = ['1 a 2 vendedores', '3 a 5 vendedores', '6 a 10 vendedores', 'Mais de 10 vendedores'];
