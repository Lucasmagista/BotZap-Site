import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook personalizado para gerenciar analytics do site
 * Usa Plausible Analytics para respeitar a privacidade dos usuários
 */
export default function useAnalytics() {
  const location = useLocation();
  
  // Monitorar mudanças de página para analytics
  useEffect(() => {
    // Registrar visualização de página
    if (window.plausible) {
      window.plausible('pageview');
    }
    
    // Rolar para o topo em mudanças de página
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Funções para rastrear eventos personalizados
  const trackEvent = (eventName, props = {}) => {
    if (window.plausible) {
      window.plausible(eventName, { props });
    }
  };
  
  // Rastrear conversões específicas
  const trackConversion = (type, value = null) => {
    trackEvent('conversion', { type, value });
  };
  
  return { trackEvent, trackConversion };
}