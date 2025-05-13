import { useCallback, useEffect } from 'react';

/**
 * Hook para gerenciar testes de animação e registrá-los em analytics
 * 
 * @param {string} testId - Identificador único do teste
 * @param {string} description - Descrição do teste para fácil identificação em relatórios
 * @param {Object} options - Opções adicionais de configuração
 * @param {boolean} options.enableLogging - Se deve logar eventos no console (desenvolvimento)
 * @param {Object} options.analytics - Objeto de analytics personalizado para enviar eventos
 */
export default function useAnimationTest(
  testId,
  description,
  { enableLogging = false, analytics = null } = {}
) {
  // Registrar início do teste
  useEffect(() => {
    if (enableLogging) {
      console.log(`[Teste A/B] Iniciando teste "${description}" (ID: ${testId})`);
    }
    
    // Se houver um objeto de analytics, registrar início do teste
    if (analytics && typeof analytics.trackEvent === 'function') {
      analytics.trackEvent('animation_test_started', {
        test_id: testId,
        description
      });
    }
    
    return () => {
      if (enableLogging) {
        console.log(`[Teste A/B] Finalizando teste "${description}" (ID: ${testId})`);
      }
    };
  }, [testId, description, enableLogging, analytics]);
  
  // Callback para registro de renderização
  const handleRender = useCallback(
    ({ variant, timestamp }) => {
      if (enableLogging) {
        console.log(`[Teste A/B] Variante ${variant} renderizada para "${testId}" em ${timestamp}`);
      }
      
      if (analytics && typeof analytics.trackEvent === 'function') {
        analytics.trackEvent('animation_variant_rendered', {
          test_id: testId,
          variant,
          timestamp
        });
      }
    },
    [testId, enableLogging, analytics]
  );
  
  // Callback para registro de interações
  const handleInteraction = useCallback(
    ({ variant, timestamp, eventType }) => {
      if (enableLogging) {
        console.log(`[Teste A/B] Interação ${eventType} com variante ${variant} para "${testId}" em ${timestamp}`);
      }
      
      if (analytics && typeof analytics.trackEvent === 'function') {
        analytics.trackEvent('animation_interaction', {
          test_id: testId,
          variant,
          timestamp,
          event_type: eventType
        });
      }
    },
    [testId, enableLogging, analytics]
  );
  
  // Analisador de resultados - pode ser expandido para análise em tempo real
  const analyzeResults = useCallback(() => {
    // Esta função seria implementada para buscar e analisar resultados
    // de um backend ou serviço de analytics
    console.log(`[Teste A/B] Análise de resultados para "${testId}" não está disponível em tempo real`);
    
    // Em uma implementação real, retornaria dados de performance
    return {
      status: 'pending',
      message: 'A análise de resultados está disponível apenas no dashboard de analytics'
    };
  }, [testId]);
  
  return {
    handleRender,
    handleInteraction,
    analyzeResults,
    testId
  };
}