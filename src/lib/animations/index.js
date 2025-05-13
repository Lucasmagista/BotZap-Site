/**
 * Biblioteca de Animações do BotZap
 * 
 * Esta biblioteca contém variantes de animações reutilizáveis para o projeto BotZap.
 * Todas as animações são otimizadas para performance e respeitam as preferências
 * de movimento reduzido do usuário.
 */

import { useReducedMotion } from 'framer-motion';

// Componentes de animação
export { default as PageTransition } from './PageTransition';
export { default as GuidedTour } from './GuidedTour';
export { default as AnimationABTest } from './AnimationABTest';
export { default as useAnimationTest } from './useAnimationTest';

/**
 * Hook para obter variantes adaptadas às preferências de movimento do usuário
 */
export function useAccessibleAnimations() {
  const shouldReduceMotion = useReducedMotion();
  return {
    shouldReduceMotion,
    getDuration: (standard) => shouldReduceMotion ? Math.min(0.1, standard / 3) : standard
  };
}

/**
 * Animações para entrada de elementos na tela
 */
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
};

/**
 * Animações para entrada com movimento de baixo para cima
 */
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      delay: i * 0.1,
      type: "spring",
      damping: 15
    }
  })
};

/**
 * Animações para entrada com movimento da esquerda para direita
 */
export const fadeRightVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i = 0) => ({
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5,
      delay: i * 0.1,
      type: "spring",
      damping: 15
    }
  })
};

/**
 * Animações para entrada com movimento da direita para esquerda
 */
export const fadeLeftVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i = 0) => ({
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5,
      delay: i * 0.1,
      type: "spring",
      damping: 15
    }
  })
};

/**
 * Animações para cards e elementos com hover
 */
export const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      delay: i * 0.1
    }
  }),
  hover: { 
    scale: 1.03, 
    boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 10 
    }
  }
};

/**
 * Animações para listas com efeito staggered
 */
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

/**
 * Animações para efeito de pulsação
 */
export const pulseVariants = {
  initial: { scale: 1 },
  pulse: {
    scale: [1, 1.05, 1],
    transition: { 
      duration: 1.5, 
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut" 
    }
  }
};

/**
 * Animações para elementos flutuantes
 */
export const floatVariants = {
  initial: { y: 0 },
  float: {
    y: [0, -10, 0],
    transition: { 
      duration: 3, 
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut" 
    }
  }
};

/**
 * Animações para botões
 */
export const buttonVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 10 
    }
  },
  tap: { 
    scale: 0.95,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 10 
    }
  }
};

/**
 * Animações para guias de usuário
 */
export const guideVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.4, 
      ease: "easeOut" 
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9,
    transition: { 
      duration: 0.2, 
      ease: "easeIn" 
    }
  }
};

/**
 * Animações para alternância de conteúdo
 */
export const contentSwitchVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    }
  },
  exit: { 
    opacity: 0, 
    x: -20,
    transition: { 
      duration: 0.2, 
      ease: "easeIn" 
    }
  }
};