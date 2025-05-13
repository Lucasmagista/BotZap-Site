import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Componente que exibe um prompt personalizado para instalar a aplicação como PWA
 */
export default function PWAInstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [installEvent, setInstallEvent] = useState(null);
  const [platform, setPlatform] = useState('');

  // Detectar plataforma para personalizar a mensagem
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
      setPlatform('android');
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setPlatform('ios');
    } else {
      setPlatform('desktop');
    }

    // Verificar se já foi apresentado ou instalado
    const hasPrompted = localStorage.getItem('pwa-install-prompt');
    if (!hasPrompted) {
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 10000); // Mostrar após 10 segundos
      return () => clearTimeout(timer);
    }
  }, []);

  // Capturar o evento beforeinstallprompt
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setInstallEvent(e);
      setShowPrompt(true);
    };
    
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  // Fechar o prompt e salvar para não mostrar novamente
  const closePrompt = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-install-prompt', 'dismissed');
  };

  // Iniciar o processo de instalação
  const handleInstall = async () => {
    if (installEvent) {
      installEvent.prompt();
      
      const { outcome } = await installEvent.userChoice;
      console.log(`Resultado da instalação: ${outcome}`);
      
      if (outcome === 'accepted') {
        localStorage.setItem('pwa-install-prompt', 'installed');
      } else {
        localStorage.setItem('pwa-install-prompt', 'dismissed');
      }
      
      setShowPrompt(false);
    }
  };

  // Mensagens específicas por plataforma
  const getMessage = () => {
    switch (platform) {
      case 'ios':
        return 'Para instalar o BotZap, toque em Compartilhar e selecione "Adicionar à Tela Inicial"';
      case 'android':
        return 'Adicione o BotZap à sua tela inicial para acesso rápido';
      default:
        return 'Instale o BotZap para acesso rápido mesmo offline';
    }
  };

  // Mostrar instruções de instalação para iOS (que não suporta instalação direta via prompt)
  const showIOSInstructions = platform === 'ios' && showPrompt;

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:w-96 bg-neutral-800 text-white z-40 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-start p-4">
            <img 
              src="/icons/icon-192x192.png" 
              alt="BotZap Logo" 
              className="w-16 h-16 mr-4 rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-1">BotZap</h3>
              <p className="text-sm text-neutral-300 mb-3">
                {getMessage()}
              </p>
              
              {/* Mostrar instruções específicas para iOS */}
              {showIOSInstructions && (
                <div className="my-2 bg-neutral-700 p-2 rounded text-xs">
                  <ol className="list-decimal pl-4 space-y-1">
                    <li>Toque no ícone de compartilhamento</li>
                    <li>Role para baixo e selecione "Adicionar à Tela de Início"</li>
                    <li>Toque em "Adicionar" no canto superior direito</li>
                  </ol>
                </div>
              )}
              
              <div className="flex justify-end space-x-2 mt-2">
                <button
                  onClick={closePrompt}
                  className="px-3 py-1.5 text-sm text-neutral-300 hover:text-white"
                >
                  Agora não
                </button>
                
                {/* O botão de instalação não funciona no iOS, então não mostramos */}
                {platform !== 'ios' && installEvent && (
                  <button
                    onClick={handleInstall}
                    className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-sm font-medium"
                  >
                    Instalar
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}