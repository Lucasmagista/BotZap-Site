import { useState, useEffect } from 'react';
import { PageTransition, GuidedTour, AnimationABTest, useAnimationTest } from './lib/animations';
import SEO from './components/SEO';
// Removendo a importação duplicada do Navbar
// import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
// Removendo a importação duplicada do Footer
// import Footer from './components/Footer';
import { organizationSchema, productSchema, faqSchema } from './lib/schemaData';
// Removido o Chatbot do final do App para evitar que ele apareça no final do site
// Caso necessário, ele pode ser adicionado condicionalmente ou em uma rota específica.

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showTour, setShowTour] = useState(false);
  
  // Verificar se é a primeira visita do usuário para mostrar o tour guiado
  useEffect(() => {
    const hasSeenTour = localStorage.getItem('botzap_tour_completed');
    if (!hasSeenTour) {
      // Mostrar o tour após um pequeno delay para permitir que a página carregue
      const timer = setTimeout(() => setShowTour(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Garantir que o site sempre comece no topo da página ao ser carregado
  useEffect(() => {
    // Usando um pequeno timeout para garantir que o scroll ocorra após o carregamento completo
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Comportamento instantâneo para evitar animações não desejadas
      });
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Definir os passos do tour guiado
  const tourSteps = [
    {
      title: 'Bem-vindo ao BotZap!',
      description: 'Esse é um tour rápido para mostrar as principais funcionalidades do nosso site.',
      image: '/whatsapp-bot.png'
    },
    {
      title: 'Conheça nossos recursos',
      description: 'Aqui você pode ver todas as funcionalidades que o BotZap oferece para automatizar seu atendimento.',
      image: '/whatsapp-bot.png',
      elementSelector: '#recursos'
    },
    {
      title: 'Veja nossa demonstração',
      description: 'Experimente nosso chatbot interativo e visualize o modelo 3D para entender melhor como funciona.',
      image: '/whatsapp-bot.png',
      elementSelector: '#demonstracao'
    },
    {
      title: 'Escolha um plano',
      description: 'Selecione o plano que melhor atende às necessidades do seu negócio.',
      image: '/whatsapp-bot.png',
      elementSelector: '#planos'
    }
  ];

  // Usar hook de teste A/B para animações do hero
  const { handleRender, handleInteraction } = useAnimationTest(
    'hero-animation-test',
    'Teste de animações na seção Hero',
    { enableLogging: true }
  );

  // Definir variantes de animação para o teste A/B
  const heroVariantA = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.7 } },
    exit: { opacity: 0 }
  };

  const heroVariantB = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring", damping: 12 } },
    exit: { opacity: 0, y: -30 }
  };

  // Função para finalizar o tour
  const handleCompleteTour = () => {
    localStorage.setItem('botzap_tour_completed', 'true');
    setShowTour(false);
  };

  // Combinação de dados estruturados para a página inicial
  const homeSchemaData = [
    organizationSchema,
    productSchema,
    faqSchema
  ];

  return (
    <PageTransition>
      {/* SEO com dados estruturados */}
      <SEO 
        title="Automação para WhatsApp com IA"
        description="Automatize seu atendimento no WhatsApp com nossa solução de IA. Chatbot inteligente, respostas personalizadas e integração com CRMs."
        schemaData={homeSchemaData}
      />
      
      <div className="app-container">
        <div className={`font-sans ${darkMode ? 'dark' : ''}`}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-2 rounded-full shadow-md z-50"
            aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          {/* Removendo o Navbar duplicado */}
          
          <AnimationABTest
            testId="hero-section"
            variantA={heroVariantA}
            variantB={heroVariantB}
            splitPercentage={50}
            onRender={handleRender}
            onInteraction={handleInteraction}
          >
            <Hero />
          </AnimationABTest>
          
          <section id="recursos">
            <Features />
          </section>
          
          <Screenshots />
          
          <section id="demonstracao">
            <Demo />
          </section>
          
          <Testimonials />
          
          <section id="faq">
            <FAQ />
          </section>
          
          <section id="planos">
            <Pricing />
          </section>
          
          <Newsletter />
          <Contact />
          {/* Removendo o Footer duplicado */}
          
          {/* Tour guiado para novos usuários */}
          <GuidedTour 
            steps={tourSteps}
            isActive={showTour}
            onComplete={handleCompleteTour}
            onSkip={handleCompleteTour}
          />
        </div>
      </div>
    </PageTransition>
  );
}

export default App;
