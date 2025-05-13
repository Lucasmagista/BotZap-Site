/**
 * Dados estruturados Schema.org para melhorar os resultados nos motores de busca
 * Formata as informações do site para resultados enriquecidos no Google
 */

// Dados da organização/empresa
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BotZap",
  "url": "https://www.botzap.com.br",
  "logo": "https://www.botzap.com.br/icons/icon-512x512.png",
  "sameAs": [
    "https://www.facebook.com/botzap",
    "https://www.instagram.com/botzap",
    "https://twitter.com/botzap",
    "https://www.youtube.com/channel/botzap",
    "https://www.linkedin.com/company/botzap"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-11-xxxx-xxxx",
    "contactType": "customer service",
    "availableLanguage": ["Portuguese", "English"]
  }
};

// Dados do produto (BotZap)
export const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BotZap",
  "operatingSystem": "Web, Android, iOS",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "97.00",
    "priceCurrency": "BRL",
    "priceValidUntil": "2025-12-31"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "857"
  }
};

// Dados de FAQ para a página de perguntas frequentes
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é o BotZap?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O BotZap é uma plataforma de automação de atendimento para WhatsApp que utiliza inteligência artificial para responder mensagens de forma personalizada, criar fluxos de atendimento e integrar com sistemas de CRM."
      }
    },
    {
      "@type": "Question",
      "name": "Preciso instalar algum software para usar o BotZap?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não, o BotZap é uma solução baseada em nuvem (cloud) e pode ser acessada de qualquer navegador. Você só precisa criar uma conta e conectar seu número de WhatsApp para começar a usar."
      }
    },
    {
      "@type": "Question",
      "name": "Quais são os planos disponíveis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oferecemos planos a partir de R$97/mês com todos os recursos essenciais. Também temos planos profissionais e empresariais para equipes maiores e necessidades avançadas. Todos os planos incluem atendimento ao cliente e atualizações gratuitas."
      }
    },
    {
      "@type": "Question",
      "name": "O BotZap funciona com WhatsApp Business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, o BotZap é totalmente compatível com o WhatsApp Business e também com a API oficial do WhatsApp Business. Você pode escolher a opção que melhor atende às necessidades do seu negócio."
      }
    },
    {
      "@type": "Question",
      "name": "É possível integrar o BotZap com outros sistemas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, o BotZap oferece integrações com os principais CRMs do mercado, plataformas de e-commerce, sistemas ERP e outras ferramentas de gestão através de nossa API. Também oferecemos webhooks para criar integrações personalizadas."
      }
    }
  ]
};

// Dados para página de contato
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Entre em Contato - BotZap",
  "description": "Entre em contato com a equipe do BotZap para saber mais sobre nossa solução de automação para WhatsApp.",
  "url": "https://www.botzap.com.br/contato",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-11-xxxx-xxxx",
    "contactType": "customer service",
    "email": "contato@botzap.com.br",
    "availableLanguage": ["Portuguese", "English"]
  }
};

// Dados para rich snippets de reviews/avaliações
export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "SoftwareApplication",
    "name": "BotZap"
  },
  "author": {
    "@type": "Person",
    "name": "Empresa XYZ"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "reviewBody": "O BotZap revolucionou nosso atendimento ao cliente. Reduzimos o tempo de resposta em 80% e aumentamos a satisfação do cliente."
};