import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pageTransitionVariants } from './config';

interface PageTransitionProps {
  children: ReactNode;
  location?: string;
  transitionKey?: string;
  mode?: 'wait' | 'sync' | 'popLayout';
  className?: string;
  customVariants?: typeof pageTransitionVariants;
  onExitComplete?: () => void;
  direction?: 'up' | 'down' | 'left' | 'right';
}

/**
 * Componente para envolver páginas e adicionar animações de transição
 * Utiliza Framer Motion para criar transições suaves entre páginas
 */
const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  location,
  transitionKey,
  mode = 'wait',
  className = '',
  customVariants,
  onExitComplete,
  direction = 'up',
}) => {
  const variants = customVariants || pageTransitionVariants;
  const key = transitionKey || location || 'page';
  
  // Aplicar variantes específicas de direção, se disponíveis
  const directionVariants = variants[direction] || variants.up;
  
  return (
    <AnimatePresence mode={mode} onExitComplete={onExitComplete}>
      <motion.div
        key={key}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={directionVariants}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;