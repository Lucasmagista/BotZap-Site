import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Componente para testes A/B de animações
 * 
 * Permite comparar diferentes variantes de animação para
 * determinar qual tem melhor engajamento do usuário
 * 
 * @param {Object} props - Propriedades do componente
 * @param {string} props.testId - Identificador único do teste
 * @param {Object} props.variantA - Variante A de animação (controle)
 * @param {Object} props.variantB - Variante B de animação (teste)
 * @param {number} props.splitPercentage - Porcentagem de usuários que verão variante B (0-100)
 * @param {function} props.onInteraction - Callback quando o usuário interage com o elemento
 * @param {function} props.onRender - Callback quando a variante é renderizada
 */
export default function AnimationABTest({
  testId,
  variantA,
  variantB,
  children,
  splitPercentage = 50,
  className = '',
  onInteraction = () => {},
  onRender = () => {},
}) {
  const [variant, setVariant] = useState(null);
  const [isInteracted, setIsInteracted] = useState(false);

  // Determina qual variante mostrar com base no ID do teste e porcentagem
  useEffect(() => {
    // Gera um hash baseado no testId para consistência entre sessões
    const hash = generateHash(testId);
    const normalizedHash = hash % 100;
    
    // Determina a variante com base na porcentagem de split
    const selectedVariant = normalizedHash < splitPercentage ? 'B' : 'A';
    
    // Registra a exibição (pode ser conectado a um sistema de analytics)
    onRender({
      testId,
      variant: selectedVariant,
      timestamp: new Date().toISOString(),
    });
    
    setVariant(selectedVariant === 'A' ? variantA : variantB);
  }, [testId, splitPercentage, variantA, variantB, onRender]);

  // Função para gerar um hash simples baseado em string
  const generateHash = (str) => {
    let hash = 0;
    if (str.length === 0) return hash;
    
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Converte para inteiro de 32 bits
    }
    
    return Math.abs(hash);
  };

  // Manipulador de interações
  const handleInteraction = (event) => {
    if (!isInteracted) {
      setIsInteracted(true);
      
      // Registra a interação (pode ser conectado a um sistema de analytics)
      onInteraction({
        testId,
        variant: variant === variantA ? 'A' : 'B',
        timestamp: new Date().toISOString(),
        eventType: event.type,
      });
    }
  };

  if (!variant) return null;

  return (
    <motion.div
      className={className}
      variants={variant}
      initial="initial" 
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      exit="exit"
      onClick={handleInteraction}
      onMouseEnter={handleInteraction}
    >
      {children}
    </motion.div>
  );
}