import { useState, useEffect } from 'react';
import { PageTransition, GuidedTour } from './lib/animations';
import type { TourStep } from './lib/animations/GuidedTour';
import { ToastProvider } from './components/Toast';
import { FullScreenLoader } from './components/LoadingSpinner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App(): React.ReactElement {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [showTour, setShowTour] = useState<boolean>(false);
  const [showChatbot, setShowChatbot] = useState<boolean>(false);
  const [showPWABanner, setShowPWABanner] = useState<boolean>(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // Simular loading inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
    window.scrollTo(0, 0);
  }, []);

  // Capturar o evento beforeinstallprompt para facilitar a instalação do PWA
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Impedir que o Chrome mostre o diálogo de instalação nativo
      e.preventDefault();
      // Armazenar o evento para que possa ser acionado mais tarde
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  // Modificado: Delay maior para exibir o chatbot, dando tempo para o usuário ver a página inicial
  useEffect(() => {
    // Aumentando o delay para 15 segundos (15000ms) para não mostrar o chatbot imediatamente
    const timer = setTimeout(() => setShowChatbot(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  // Mostrar o banner PWA após um tempo
  useEffect(() => {
    const hasDismissedPWA = localStorage.getItem('botzap_pwa_dismissed');
    if (!hasDismissedPWA) {
      const timer = setTimeout(() => setShowPWABanner(true), 20000); // 20 segundos
      return () => clearTimeout(timer);
    }
  }, []);

  // Definir os passos do tour guiado
  const tourSteps: TourStep[] = [
    {
      target: 'body',
      title: 'Bem-vindo ao BotZap!',
      content: 'Esse é um tour rápido para mostrar as principais funcionalidades do nosso site.',
      image: '/whatsapp-bot.png'
    },
    {
      target: '#recursos',
      title: 'Conheça nossos recursos',
      content: 'Aqui você pode ver todas as funcionalidades que o BotZap oferece para automatizar seu atendimento.',
      image: '/whatsapp-bot.png',
      elementSelector: '#recursos'
    },
    {
      target: '#demonstracao',
      title: 'Veja nossa demonstração',
      content: 'Experimente nosso chatbot interativo e visualize o modelo 3D para entender melhor como funciona.',
      image: '/whatsapp-bot.png',
      elementSelector: '#demonstracao'
    },
    {
      target: '#pricing',
      title: 'Escolha um plano',
      content: 'Faça um teste gratuito e veja como o BotZap pode transformar o seu negócio.',
      image: '/whatsapp-bot.png',
      elementSelector: '#pricing'
    }
  ];

  // Função para finalizar o tour
  const handleCompleteTour = (): void => {
    localStorage.setItem('botzap_tour_completed', 'true');
    setShowTour(false);
  };

  // Função para alternar o chatbot
  const toggleChatbot = (): void => {
    setShowChatbot(!showChatbot);
  };

  // Função para fechar o banner PWA
  const dismissPWABanner = (): void => {
    localStorage.setItem('botzap_pwa_dismissed', 'true');
    setShowPWABanner(false);
  };

  // Função para instalar o PWA
  const installPWA = async (): Promise<void> => {
    if (!deferredPrompt) {
      alert('Este site já está instalado ou não pode ser instalado neste navegador.');
      return;
    }
    
    // Mostrar o diálogo de instalação
    deferredPrompt.prompt();
    
    // Esperar a resposta do usuário
    const choiceResult = await deferredPrompt.userChoice;
    
    // Limpar o deferredPrompt após o uso
    setDeferredPrompt(null);
    
    // Fechar o banner após tentar instalar
    dismissPWABanner();
    
    // Registrar a escolha do usuário (para análise, se necessário)
    if (choiceResult.outcome === 'accepted') {
      console.log('Usuário aceitou a instalação do PWA');
    } else {
      console.log('Usuário recusou a instalação do PWA');
    }
  };

  // Mostrar loading inicial
  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ToastProvider>
      <PageTransition className="app-container">
        <div className={`font-sans ${darkMode ? 'dark' : ''}`}>
          {/* Botão de alternar tema */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="fixed top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-xl shadow-lg z-50 hover:bg-white/20 hover:scale-110 transition-all duration-300"
            aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* Botão de acessibilidade */}
          <button
            className="fixed top-20 right-4 bg-blue-600/80 backdrop-blur-md text-white p-3 rounded-xl shadow-lg z-50 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300"
            aria-label="Opções de acessibilidade"
            onClick={() => alert('Funcionalidades de acessibilidade serão implementadas em breve!')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 8v4l2 2"></path>
            </svg>
          </button>
          
          <Navbar />
          
          <Hero />
          <Features />
          <Screenshots />
          <Demo />
          <Testimonials />
          <FAQ />
          <Pricing />
          <Newsletter />
          <Contact />
          <Footer />
          
          {/* Tour guiado para novos usuários */}
          <GuidedTour 
            steps={tourSteps}
            isOpen={showTour}
            onClose={handleCompleteTour}
            onComplete={handleCompleteTour}
          />

          {/* Botão flutuante para chatbot */}
          <div className="fixed bottom-8 right-8 z-50">
            <button 
              onClick={toggleChatbot}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center shadow-green-400/30 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              aria-label="Abrir chat"
            >
              {showChatbot ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              )}
            </button>
          </div>

          {/* Chatbot condicional */}
          {showChatbot && <Chatbot onClose={() => setShowChatbot(false)} />}
          
          {/* Banner de notificação PWA - agora controlado pelo estado showPWABanner */}
          <div className={`fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-cyan-600 p-4 text-white z-40 flex items-center justify-between transform transition-all duration-300 ${showPWABanner ? 'translate-y-0' : 'translate-y-full'}`}>
            <p>
              <span className="font-bold">Novo!</span> Instale o BotZap como aplicativo para acesso rápido
            </p>
            <div className="flex gap-2">
              <button 
                onClick={installPWA}
                className="px-4 py-1.5 text-sm rounded-md bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors"
              >
                Instalar
              </button>
              <button 
                onClick={dismissPWABanner}
                className="p-1.5 text-white hover:bg-white/10 rounded-md transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </PageTransition>
    </ToastProvider>
  );
}

export default App;