import { useState, useEffect } from 'react';
import type { AnimationVariant } from './AnimationABTest';

/**
 * Hook para testes A/B de animações
 * 
 * @param variants - Lista de variantes de animação para testar
 * @param testId - ID único para o teste
 * @param options - Opções adicionais
 * @returns Objeto com a variante selecionada e funções para controle
 */
function useAnimationTest(
  variants: AnimationVariant[],
  testId: string,
  options: {
    onSelect?: (variantId: string) => void;
    forceVariant?: string;
    sendAnalytics?: boolean;
  } = {}
) {
  const [selectedVariant, setSelectedVariant] = useState<AnimationVariant | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Função para selecionar uma variante
    const selectVariant = () => {
      // Se uma variante específica for forçada, use-a
      if (options.forceVariant) {
        const forced = variants.find(v => v.id === options.forceVariant);
        if (forced) {
          return forced;
        }
      }

      // Verificar se há uma variante salva no localStorage para este teste
      try {
        const savedVariantId = localStorage.getItem(`animation_test_${testId}`);
        if (savedVariantId) {
          const saved = variants.find(v => v.id === savedVariantId);
          if (saved) {
            return saved;
          }
        }
      } catch (e) {
        console.warn('Erro ao acessar localStorage:', e);
      }

      // Caso contrário, selecionar aleatoriamente com base nos pesos
      const totalWeight = variants.reduce((sum, variant) => 
        sum + (variant.weight || 1), 0);
      
      let random = Math.random() * totalWeight;
      let selected = variants[0];
      
      for (const variant of variants) {
        const weight = variant.weight || 1;
        random -= weight;
        if (random <= 0) {
          selected = variant;
          break;
        }
      }
      
      // Salvar a variante selecionada
      try {
        localStorage.setItem(`animation_test_${testId}`, selected.id);
      } catch (e) {
        console.warn('Erro ao salvar no localStorage:', e);
      }
      
      return selected;
    };

    // Selecionar a variante
    const variant = selectVariant();
    setSelectedVariant(variant);
    
    // Informar qual variante foi selecionada através do callback
    if (options.onSelect) {
      options.onSelect(variant.id);
    }
    
    // Enviar dados de analytics se a opção estiver ativada
    if (options.sendAnalytics) {
      try {
        // Exemplo de coleta de analytics
        if (typeof window !== 'undefined' && 'gtag' in window) {
          // @ts-ignore
          window.gtag('event', 'animation_variant_selected', {
            event_category: 'ui_tests',
            event_label: `${testId}:${variant.id}`,
          });
        }
      } catch (e) {
        console.warn('Erro ao enviar dados de analytics:', e);
      }
    }
    
    setIsLoading(false);
  }, [variants, testId, options]);

  // Função para forçar uma variante específica
  const forceVariant = (variantId: string) => {
    const variant = variants.find(v => v.id === variantId);
    if (variant) {
      try {
        localStorage.setItem(`animation_test_${testId}`, variantId);
      } catch (e) {
        console.warn('Erro ao salvar no localStorage:', e);
      }
      setSelectedVariant(variant);
    }
  };

  // Função para resetar o teste
  const resetTest = () => {
    try {
      localStorage.removeItem(`animation_test_${testId}`);
    } catch (e) {
      console.warn('Erro ao remover do localStorage:', e);
    }
    // Re-executar a lógica de seleção
    const variant = variants[0];
    setSelectedVariant(variant);
  };

  return {
    variant: selectedVariant,
    variantId: selectedVariant?.id,
    isLoading,
    forceVariant,
    resetTest,
  };
}

export default useAnimationTest;