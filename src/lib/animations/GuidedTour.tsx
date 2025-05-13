import React, { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { guidedTourConfig } from './config';

export interface TourStep {
  target: string;
  title: string;
  content: ReactNode;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  disableOverlay?: boolean;
  highlightPadding?: number;
  image?: string;
  elementSelector?: string;
  description?: string;
}

interface GuidedTourProps {
  steps: TourStep[];
  isOpen: boolean;
  onClose: () => void;
  onComplete?: () => void;
  showSkip?: boolean;
  showProgress?: boolean;
  showNavigation?: boolean;
  theme?: Partial<typeof guidedTourConfig.tooltipTheme>;
  spotlightRadius?: number;
  backdropOpacity?: number;
}

/**
 * Componente para criar um tour guiado para novos usuários
 * Destaca elementos da interface e mostra tooltips com explicações
 */
const GuidedTour: React.FC<GuidedTourProps> = ({
  steps,
  isOpen,
  onClose,
  onComplete,
  showSkip = true,
  showProgress = true,
  showNavigation = true,
  theme = {},
  spotlightRadius = guidedTourConfig.spotlightRadius,
  backdropOpacity = guidedTourConfig.backdropOpacity,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [targetElement, setTargetElement] = useState<DOMRect | null>(null);
  
  const mergedTheme = {
    ...guidedTourConfig.tooltipTheme,
    ...theme,
  };
  
  // Atualiza o elemento alvo quando o passo muda
  useEffect(() => {
    if (!isOpen) return;
    
    const currentStepConfig = steps[currentStep];
    if (!currentStepConfig) return;
    
    const targetElement = document.querySelector(currentStepConfig.target) as HTMLElement;
    if (!targetElement) {
      console.error(`Elemento alvo não encontrado: ${currentStepConfig.target}`);
      return;
    }
    
    const rect = targetElement.getBoundingClientRect();
    setTargetElement(rect);
    
    // Rola até o elemento, se necessário
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }, [currentStep, isOpen, steps]);
  
  // Avança para o próximo passo
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prevStep => prevStep + 1);
    } else {
      onComplete?.();
      onClose();
    }
  };
  
  // Retorna ao passo anterior
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prevStep => prevStep - 1);
    }
  };
  
  // Calcula a posição do tooltip com base na posição do elemento
  const getTooltipPosition = () => {
    if (!targetElement) return { top: 0, left: 0 };
    
    const placement = steps[currentStep]?.placement || 'bottom';
    const padding = steps[currentStep]?.highlightPadding || 10;
    
    // Posição do centro do elemento
    const centerX = targetElement.left + targetElement.width / 2;
    const centerY = targetElement.top + targetElement.height / 2;
    
    // Offset para distanciar o tooltip do elemento
    const offset = 15;
    
    switch (placement) {
      case 'top':
        return {
          top: targetElement.top - offset - padding,
          left: centerX,
          transform: 'translate(-50%, -100%)',
        };
      
      case 'right':
        return {
          top: centerY,
          left: targetElement.right + offset + padding,
          transform: 'translateY(-50%)',
        };
      
      case 'left':
        return {
          top: centerY,
          left: targetElement.left - offset - padding,
          transform: 'translate(-100%, -50%)',
        };
      
      case 'bottom':
      default:
        return {
          top: targetElement.bottom + offset + padding,
          left: centerX,
          transform: 'translateX(-50%)',
        };
    }
  };
  
  if (!isOpen) return null;
  
  const currentStepConfig = steps[currentStep];
  const tooltipPosition = getTooltipPosition();
  
  // Calcula o caminho SVG para criar o "recorte" no overlay
  const getMaskPath = () => {
    if (!targetElement || currentStepConfig?.disableOverlay) return '';
    
    const padding = currentStepConfig?.highlightPadding || 10;
    
    // Retângulo do elemento com padding
    const x = targetElement.left - padding;
    const y = targetElement.top - padding;
    const width = targetElement.width + padding * 2;
    const height = targetElement.height + padding * 2;
    
    // Diâmetro do círculo para cantos arredondados
    const rx = Math.min(spotlightRadius, width / 2, height / 2);
    const ry = rx;
    
    // Caminho que cria um recorte retangular com cantos arredondados
    return `
      M 0 0
      H ${window.innerWidth}
      V ${window.innerHeight}
      H 0
      V 0
      Z
      M ${x + rx} ${y}
      H ${x + width - rx}
      C ${x + width} ${y} ${x + width} ${y} ${x + width} ${y + ry}
      V ${y + height - ry}
      C ${x + width} ${y + height} ${x + width} ${y + height} ${x + width - rx} ${y + height}
      H ${x + rx}
      C ${x} ${y + height} ${x} ${y + height} ${x} ${y + height - ry}
      V ${y + ry}
      C ${x} ${y} ${x} ${y} ${x + rx} ${y}
      Z
    `;
  };
  
  return (
    <AnimatePresence>
      <div className="guided-tour">
        {/* Overlay semi-transparente */}
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: backdropOpacity }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 9998,
          }}
        >
          {/* Máscara SVG para criar o efeito de "spotlight" */}
          <svg
            width="100%"
            height="100%"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          >
            <defs>
              <mask id="spotlight-mask">
                <rect
                  width="100%"
                  height="100%"
                  fill="white"
                />
                <path
                  d={getMaskPath()}
                  fill="black"
                />
              </mask>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill={guidedTourConfig.highlightColor}
              mask="url(#spotlight-mask)"
            />
          </svg>
        </motion.div>
        
        {/* Tooltip com informações do passo */}
        <motion.div
          key="tooltip"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          style={{
            position: 'fixed',
            top: tooltipPosition.top,
            left: tooltipPosition.left,
            transform: tooltipPosition.transform,
            backgroundColor: mergedTheme.backgroundColor,
            color: mergedTheme.textColor,
            borderRadius: mergedTheme.borderRadius,
            boxShadow: mergedTheme.boxShadow,
            padding: '15px',
            maxWidth: '320px',
            zIndex: 9999,
          }}
        >
          {/* Título e conteúdo */}
          <h3 style={{ margin: '0 0 8px', fontSize: '18px' }}>
            {currentStepConfig?.title}
          </h3>
          <div style={{ fontSize: '14px' }}>
            {currentStepConfig?.content}
          </div>
          
          {/* Navegação e progresso */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '15px',
          }}>
            {showProgress && (
              <div style={{ fontSize: '12px' }}>
                {currentStep + 1} de {steps.length}
              </div>
            )}
            
            <div style={{ display: 'flex', gap: '8px' }}>
              {showSkip && currentStep < steps.length - 1 && (
                <button
                  onClick={onClose}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: mergedTheme.textColor,
                    opacity: 0.7,
                    cursor: 'pointer',
                    fontSize: '14px',
                  }}
                >
                  Pular
                </button>
              )}
              
              {showNavigation && (
                <>
                  {currentStep > 0 && (
                    <button
                      onClick={prevStep}
                      style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '6px 12px',
                        color: mergedTheme.textColor,
                        cursor: 'pointer',
                        fontSize: '14px',
                      }}
                    >
                      Anterior
                    </button>
                  )}
                  
                  <button
                    onClick={nextStep}
                    style={{
                      background: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '6px 12px',
                      color: '#25D366',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      fontSize: '14px',
                    }}
                  >
                    {currentStep < steps.length - 1 ? 'Próximo' : 'Concluir'}
                  </button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default GuidedTour;