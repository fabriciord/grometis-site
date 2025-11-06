/**
 * Cloudflare Pages Functions
 * 
 * Esta função será executada no edge do Cloudflare para otimizar
 * o carregamento e aplicar headers de segurança adicionais.
 */

export async function onRequest(context) {
  const { request, next, env } = context;
  const url = new URL(request.url);
  
  // Aplicar headers de segurança adicionais
  const response = await next();
  
  // Clone response para modificar headers
  const newResponse = new Response(response.body, response);
  
  // Headers de segurança extra
  newResponse.headers.set('X-Powered-By', 'GrOMEtiS');
  newResponse.headers.set('X-Robots-Tag', 'index, follow');
  
  // Content Security Policy para HTML
  if (url.pathname.endsWith('.html') || url.pathname === '/') {
    newResponse.headers.set(
      'Content-Security-Policy',
      "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self';"
    );
  }
  
  // Preload hints para performance
  if (url.pathname === '/') {
    newResponse.headers.set(
      'Link',
      '</assets/grometis_logo_horizontal.png>; rel=preload; as=image, </assets/Grometis_laranja.png>; rel=preload; as=image'
    );
  }
  
  return newResponse;
}

// Export específico para diferentes tipos de request
export const onRequestGet = onRequest;
export const onRequestPost = onRequest;