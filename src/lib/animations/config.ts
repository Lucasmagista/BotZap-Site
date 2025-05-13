/**
 * Configuração de animações para o BotZap
 * Este arquivo centraliza todas as configurações de animações usadas no projeto
 */

import { Variants } from 'framer-motion';

// Tipos para as configurações
export interface AnimationConfig {
  duration: number;
  ease: string;
  delay?: number;
}

export interface AnimationVariantsConfig {
  container: Variants;
  item: Variants;
}

// Configurações padrão
export const defaultConfig: AnimationConfig = {
  duration: 0.5,
  ease: 'easeInOut',
  delay: 0,
};

// Configurações para o Framer Motion
export const framerMotionConfig = {
  transition: { 
    default: {
      type: 'spring', 
      stiffness: 300, 
      damping: 20, 
      duration: 0.3 
    },
    slow: {
      type: 'spring',
      stiffness: 200,
      damping: 25,
      duration: 0.5
    }
  },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// Variações de animação para diferentes componentes
export const fadeInUpVariants: AnimationVariantsConfig = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  },
};

export const scaleInVariants: AnimationVariantsConfig = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },
};

export const slideInRightVariants: AnimationVariantsConfig = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  },
};

export const bubbleUpVariants: AnimationVariantsConfig = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: 'spring',
        bounce: 0.4,
      },
    },
  },
};

// Configurações de transição de página
export const pageTransitionVariants = {
  // Variante padrão (para compatibilidade)
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: 'easeIn',
    },
  },

  // Direção para cima (up)
  up: {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.4,
        ease: 'easeIn',
      },
    },
  },

  // Direção para baixo (down)
  down: {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.4,
        ease: 'easeIn',
      },
    },
  },

  // Direção para a esquerda (left)
  left: {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.4,
        ease: 'easeIn',
      },
    },
  },

  // Direção para a direita (right)
  right: {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.4,
        ease: 'easeIn',
      },
    },
  }
};

// Configurações para cards 3D hover
export const card3DHoverConfig = {
  perspective: 1000,
  rotateIntensity: 10, // graus
  glareIntensity: 0.3,
  shadow: true,
  shadowIntensity: 0.5,
};

// Configurações para o tour guiado
export const guidedTourConfig = {
  // Raio do spotlight em pixels
  spotlightRadius: 8,
  
  // Opacidade do overlay
  backdropOpacity: 0.75,
  
  // Cor de destaque do elemento em foco
  highlightColor: 'rgba(37, 211, 102, 0.2)', // Verde do WhatsApp com baixa opacidade
  
  // Tema do tooltip
  tooltipTheme: {
    backgroundColor: '#128C7E', // Verde escuro do WhatsApp
    textColor: '#FFFFFF',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    padding: '16px',
    maxWidth: '320px',
  },
  
  // Configurações de transição
  transition: {
    duration: 0.3,
    ease: 'easeInOut'
  }
};

// Presets para testes A/B
export const animationTestPresets = {
  subtle: {
    scale: { start: 0.95, end: 1 },
    opacity: { start: 0, end: 1 },
    duration: 0.4,
    ease: 'easeOut',
  },
  bouncy: {
    scale: { start: 0.6, end: 1 },
    opacity: { start: 0, end: 1 },
    duration: 0.6,
    ease: 'backOut',
    bounce: 0.5,
  },
  slide: {
    x: { start: 50, end: 0 },
    opacity: { start: 0, end: 1 },
    duration: 0.5,
    ease: 'easeOut',
  },
  fade: {
    opacity: { start: 0, end: 1 },
    duration: 0.7,
    ease: 'linear',
  },
};

// Mapeamento de animação por componente
export const componentAnimationMap = {
  'Hero': fadeInUpVariants,
  'Features': bubbleUpVariants,
  'Pricing': scaleInVariants,
  'Testimonials': slideInRightVariants,
  'FAQ': bubbleUpVariants,
  'Contact': fadeInUpVariants,
  'Footer': fadeInUpVariants,
  'Chatbot': bubbleUpVariants,
};

/**
 * Configurações globais para animações do BotZap
 * Este arquivo centraliza as configurações de animações utilizadas em todo o site
 */

export const pageTransitionConfig = {
  // Duração padrão das transições em segundos
  duration: 0.5,
  
  // Easing functions para entrada e saída
  ease: [0.43, 0.13, 0.23, 0.96],
  
  // Variantes para diferentes tipos de transição
  variants: {
    fadeIn: {
      initial: { opacity: 0 },
      enter: { opacity: 1, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } },
      exit: { opacity: 0, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }
    },
    slideUp: {
      initial: { opacity: 0, y: 30 },
      enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } },
      exit: { opacity: 0, y: 30, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }
    },
    slideLeft: {
      initial: { opacity: 0, x: 30 },
      enter: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } },
      exit: { opacity: 0, x: -30, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }
    },
    scale: {
      initial: { opacity: 0, scale: 0.9 },
      enter: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } },
      exit: { opacity: 0, scale: 0.9, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }
    }
  },
  
  // Configurações para staggering de elementos
  stagger: {
    default: 0.1,
    fast: 0.05,
    slow: 0.2
  }
};

export const animationTestConfig = {
  // Lista de variantes para testes A/B
  variants: {
    buttonAnimation: ['pulse', 'scale', 'none'],
    heroAnimation: ['fadeIn', 'slideUp', 'stagger'],
    cardAnimation: ['hover', 'click', 'none']
  },
  
  // Percentagem de usuários a receber cada variante (deve somar 100)
  distribution: {
    buttonAnimation: [40, 40, 20], // 40% pulse, 40% scale, 20% none
    heroAnimation: [33, 33, 34],   // 33% fadeIn, 33% slideUp, 34% stagger
    cardAnimation: [50, 30, 20]    // 50% hover, 30% click, 20% none
  },
  
  // Parâmetros para coleta de métricas
  metrics: {
    clickRate: true,
    viewTime: true,
    conversionRate: true,
    abandonRate: true
  },
  
  // Tempo para expiração do teste (em dias)
  expiration: 14
};

/**
 * Função para escolher variante de animação baseada em pesos
 * @param weights Array com pesos para cada variante
 * @returns Índice da variante escolhida
 */
export function selectVariantByWeight(weights: number[]): number {
  const sum = weights.reduce((acc, val) => acc + val, 0);
  const normalized = weights.map(w => w / sum);
  
  const random = Math.random();
  let cumulative = 0;
  
  for (let i = 0; i < normalized.length; i++) {
    cumulative += normalized[i];
    if (random <= cumulative) {
      return i;
    }
  }
  
  return 0; // Fallback para primeira variante
}

export default {
  page: pageTransitionConfig,
  guidedTour: guidedTourConfig,
  abTest: animationTestConfig,
  selectVariantByWeight
};