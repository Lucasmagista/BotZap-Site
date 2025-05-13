import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useAccessibleAnimations } from '../animations';

/**
 * Componente de transição entre páginas
 * 
 * Fornece animações de transição suaves entre diferentes rotas
 * com suporte para preferências de movimento reduzido
 */
export default function PageTransition({ children }) {
  const location = useLocation();
  const { shouldReduceMotion, getDuration } = useAccessibleAnimations();
  
  const variants = {
    initial: { 
      opacity: 0,
      y: shouldReduceMotion ? 0 : 10,
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: getDuration(0.3),
        ease: 'easeOut',
      }
    },
    exit: { 
      opacity: 0,
      y: shouldReduceMotion ? 0 : -10,
      transition: {
        duration: getDuration(0.2),
        ease: 'easeIn',
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}