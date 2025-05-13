import React, { useState, useEffect, useRef } from 'react';

/**
 * Wrapper para criar um efeito de brilho (glow) em torno de cards
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Componente filho que receberá o efeito de brilho
 * @param {number} props.hue - Valor de matiz (hue) para a cor do brilho (0-360)
 * @param {number} props.size - Tamanho do brilho em pixels
 * @param {number} props.border - Espessura da borda em pixels
 * @param {number} props.radius - Raio do brilho (quanto maior, mais suave)
 * @param {boolean} props.interactive - Se o efeito deve responder ao movimento do mouse
 */
const GlowyCardWrapper = ({
  children,
  hue = 220,         // Matiz padrão: azul
  size = 100,        // Tamanho do brilho
  border = 1,        // Tamanho da borda
  radius = 16,       // Raio de borda
  interactive = true // Interativo por padrão
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef(null);
  
  // Cores de brilho com base na matiz fornecida
  const glowColor = `hsla(${hue}, 100%, 50%, 0.8)`;
  const glowColorLight = `hsla(${hue}, 100%, 80%, 0.4)`;
  
  useEffect(() => {
    // Se não for interativo, não precisamos de eventos
    if (!interactive) return;
    
    const updateMousePosition = (e) => {
      if (!ref.current) return;
      
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      setPosition({ x, y });
    };
    
    // Adicionar eventos de interação
    if (ref.current) {
      ref.current.addEventListener('mousemove', updateMousePosition);
      ref.current.addEventListener('mouseenter', () => setIsHovering(true));
      ref.current.addEventListener('mouseleave', () => setIsHovering(false));
    }
    
    // Limpeza dos eventos
    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mousemove', updateMousePosition);
        ref.current.removeEventListener('mouseenter', () => setIsHovering(true));
        ref.current.removeEventListener('mouseleave', () => setIsHovering(false));
      }
    };
  }, [interactive]);
  
  // Calcular posições de gradiente com base no mouse
  const gradientX = interactive ? position.x * 100 : 50;
  const gradientY = interactive ? position.y * 100 : 50;
  const gradientSize = isHovering ? size * 1.5 : size;
  
  return (
    <div 
      ref={ref}
      className="glow-wrapper"
      style={{
        position: 'relative',
        borderRadius: `${radius}px`,
        padding: `${border}px`,
        background: `radial-gradient(
          circle at ${gradientX}% ${gradientY}%, 
          ${glowColor} 0%, 
          ${glowColorLight} 25%, 
          transparent ${gradientSize}%
        )`,
        transition: interactive ? 'none' : 'background 0.3s ease',
        animation: !interactive ? 'pulse 2s infinite alternate' : 'none'
      }}
    >
      {children}
      
      <style jsx>{`
        @keyframes pulse {
          0% {
            background: radial-gradient(
              circle at 50% 50%, 
              ${glowColor} 0%, 
              ${glowColorLight} 25%, 
              transparent ${size}%
            );
          }
          100% {
            background: radial-gradient(
              circle at 50% 50%, 
              ${glowColor} 0%, 
              ${glowColorLight} 25%, 
              transparent ${size * 1.5}%
            );
          }
        }
      `}</style>
    </div>
  );
};

export default GlowyCardWrapper;