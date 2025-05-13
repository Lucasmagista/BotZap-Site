import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import CookieConsent from '../components/CookieConsent';
import PWAInstallPrompt from '../components/PWAInstallPrompt';
import useAnalytics from '../lib/useAnalytics';

/**
 * Layout principal que encapsula as páginas com elementos comuns
 * como Navbar e Footer para manter a consistência entre as rotas
 */
export default function MainLayout() {
  // Inicializar o analytics
  useAnalytics();
  const location = useLocation();

  // Garantir scroll para o topo quando trocar de página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
      <PWAInstallPrompt />
      <Chatbot />
    </div>
  );
}