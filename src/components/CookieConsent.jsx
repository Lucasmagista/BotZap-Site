import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  
  // Verificar se o usuário já deu consentimento anteriormente
  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      // Pequeno atraso para não mostrar imediatamente ao carregar a página
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);
  
  // Função para aceitar os cookies
  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    localStorage.setItem('cookie-consent-timestamp', new Date().toISOString());
    setShowConsent(false);
  };
  
  // Função para aceitar apenas cookies essenciais
  const handleEssentialOnly = () => {
    localStorage.setItem('cookie-consent', 'essential');
    localStorage.setItem('cookie-consent-timestamp', new Date().toISOString());
    setShowConsent(false);
  };
  
  // Animação para o banner
  const bannerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.3 } }
  };
  
  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div 
          className="fixed bottom-0 left-0 right-0 bg-neutral-800 text-white z-50 px-4 py-4 shadow-lg"
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 md:mr-6 max-w-3xl">
              <p className="text-sm mb-1">
                Utilizamos cookies e tecnologias semelhantes para melhorar a sua experiência, personalizar conteúdo e oferecer funcionalidades de redes sociais. 
                <Link to="/politica-de-privacidade" className="text-indigo-400 ml-1 hover:underline">
                  Saiba mais sobre nossa política de privacidade
                </Link>.
              </p>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={handleEssentialOnly} 
                className="px-4 py-2 bg-neutral-700 hover:bg-neutral-600 rounded text-sm transition duration-300"
              >
                Apenas Essenciais
              </button>
              <button 
                onClick={handleAccept} 
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded text-sm transition duration-300"
              >
                Aceitar Todos
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}