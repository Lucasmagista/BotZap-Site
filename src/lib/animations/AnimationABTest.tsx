import React, { ReactNode, useEffect, useState } from 'react';
import { motion, MotionProps, Variant } from 'framer-motion';

// Definindo tipos para as variantes de animação
export interface AnimationVariant {
  id: string;
  initial?: Variant;
  animate?: Variant;
  exit?: Variant;
  transition?: MotionProps['transition'];
  weight?: number; // Peso para distribuição ponderada (padrão: 1)
}

interface AnimationABTestProps {
  variants: AnimationVariant[];
  testId: string;
  children: ReactNode;
  className?: string;
  onVariantSelected?: (variantId: string) => void;
  forceVariant?: string; // Opcional: forçar uma variante específica (para depuração)
}

/**
 * Componente para testes A/B de animações
 * Permite testar diferentes variantes de animação para identificar as mais eficazes
 */
const AnimationABTest: React.FC<AnimationABTestProps> = ({
  variants,
  testId,
  children,
  className = '',
  onVariantSelected,
  forceVariant,
}) => {
  const [selectedVariant, setSelectedVariant] = useState<AnimationVariant | null>(null);
  
  // Selecionar uma variante baseada em pesos quando o componente é montado
  useEffect(() => {
    // Se uma variante específica for forçada, use-a
    if (forceVariant) {
      const forced = variants.find(v => v.id === forceVariant);
      if (forced) {
        setSelectedVariant(forced);
        if (onVariantSelected) onVariantSelected(forced.id);
        return;
      }
    }
    
    // Verificar se há uma variante salva no localStorage para este usuário/teste
    const savedVariantId = localStorage.getItem(`animation_test_${testId}`);
    if (savedVariantId) {
      const saved = variants.find(v => v.id === savedVariantId);
      if (saved) {
        setSelectedVariant(saved);
        if (onVariantSelected) onVariantSelected(saved.id);
        return;
      }
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
    
    // Salvar a variante selecionada para este usuário/teste
    localStorage.setItem(`animation_test_${testId}`, selected.id);
    setSelectedVariant(selected);
    if (onVariantSelected) onVariantSelected(selected.id);
  }, [variants, testId, onVariantSelected, forceVariant]);
  
  // Aguardar até que uma variante seja selecionada
  if (!selectedVariant) {
    return null;
  }
  
  return (
    <motion.div
      data-testid={`animation-test-${testId}-${selectedVariant.id}`}
      initial={selectedVariant.initial ? { ...selectedVariant.initial } : false}
      animate={selectedVariant.animate ? { ...selectedVariant.animate } : undefined}
      exit={selectedVariant.exit ? { ...selectedVariant.exit } : undefined}
      transition={selectedVariant.transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationABTest;