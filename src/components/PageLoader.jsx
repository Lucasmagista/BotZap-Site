import { motion } from 'framer-motion';

/**
 * Componente de loader animado para exibição durante carregamento de páginas
 * Utiliza Framer Motion para animações fluidas
 */
export default function PageLoader() {
  // Variantes para a animação do container
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Variantes para os círculos individuais
  const circleVariants = {
    initial: { y: 0 },
    animate: { 
      y: [0, -15, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  // Array de cores para os círculos
  const colors = ['#25D366', '#34B7F1', '#128C7E'];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-900">
      <div className="text-center mb-8">
        <img 
          src="/whatsapp-bot.png" 
          alt="BotZap Logo" 
          className="w-20 h-20 mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
          BotZap
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Carregando recursos...
        </p>
      </div>
      
      <motion.div
        className="flex space-x-3"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {colors.map((color, index) => (
          <motion.div
            key={index}
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: color }}
            variants={circleVariants}
            transition={{ delay: index * 0.15 }}
          />
        ))}
      </motion.div>
    </div>
  );
}