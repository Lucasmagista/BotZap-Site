import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { guideVariants } from '../animations';

/**
 * Componente de animação guiada para orientar usuários em fluxos importantes
 * 
 * Este componente cria uma overlay com dicas animadas que guiam o usuário
 * passo a passo em um fluxo específico (como onboarding ou uso de funcionalidades)
 */
export default function GuidedTour({ 
  steps = [], 
  isActive = false, 
  onComplete = () => {}, 
  onSkip = () => {} 
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Atraso para permitir que a página carregue e o scroll esteja no topo
    if (isActive) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setCurrentStep(0);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      completeGuide();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const completeGuide = () => {
    setIsVisible(false);
    onComplete();
  };

  const skipGuide = () => {
    setIsVisible(false);
    onSkip();
  };

  if (!isVisible || steps.length === 0) return null;

  const currentGuide = steps[currentStep];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  // Scroll suavemente para o elemento alvo se existir
  if (currentGuide.elementSelector) {
    const targetElement = document.querySelector(currentGuide.elementSelector);
    if (targetElement) {
      // Use scrollIntoView somente quando estiver navegando pelos passos, não no início
      if (currentStep > 0) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={skipGuide}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 max-w-md mx-auto"
          variants={guideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={e => e.stopPropagation()}
        >
          {currentGuide.image && (
            <div className="mb-4 rounded-lg overflow-hidden">
              <img 
                src={currentGuide.image} 
                alt={`Passo ${currentStep + 1}`} 
                className="w-full h-auto"
              />
            </div>
          )}

          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {currentGuide.title}
          </h3>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {currentGuide.description}
          </p>
          
          <div className="flex justify-between items-center">
            <div className="flex space-x-1">
              {steps.map((_, i) => (
                <span 
                  key={i}
                  className={`block h-2 rounded-full ${
                    i === currentStep 
                      ? 'w-6 bg-blue-500' 
                      : 'w-2 bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            <div className="flex space-x-3">
              <button
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm"
                onClick={skipGuide}
              >
                Pular
              </button>
              
              <div className="flex space-x-2">
                {!isFirstStep && (
                  <button
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded text-sm"
                    onClick={prevStep}
                  >
                    Anterior
                  </button>
                )}
                
                <button
                  className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm"
                  onClick={nextStep}
                >
                  {isLastStep ? 'Concluir' : 'Próximo'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}