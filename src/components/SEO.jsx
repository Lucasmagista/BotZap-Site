import { Helmet } from 'react-helmet';

/**
 * Componente para gerenciar SEO de cada página
 * Configura títulos, descrições e meta tags dinamicamente
 */
export default function SEO({ 
  title, 
  description, 
  canonical, 
  image = '/whatsapp-bot.png', 
  type = 'website', 
  schemaData = null 
}) {
  // Título completo da página
  const fullTitle = title 
    ? `${title} | BotZap - Automação de WhatsApp com IA` 
    : 'BotZap - Automação de WhatsApp com Inteligência Artificial';
  
  // Descrição padrão se não for fornecida
  const metaDescription = description || 
    'Automatize seu atendimento no WhatsApp com nossa solução de IA. Chatbot inteligente, respostas personalizadas e integração com CRMs.';
  
  // URL canônica para evitar conteúdo duplicado
  const url = canonical || 'https://www.botzap.com.br';
  
  return (
    <Helmet>
      {/* Tags básicas */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />

      {/* Open Graph para compartilhamento em redes sociais */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image.startsWith('http') ? image : `https://www.botzap.com.br${image}`} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="BotZap" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : `https://www.botzap.com.br${image}`} />

      {/* Schema.org JSON-LD para Rich Snippets */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
}