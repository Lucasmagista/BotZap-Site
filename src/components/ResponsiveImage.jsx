import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente de imagem responsiva que carrega o formato e tamanho
 * de imagem mais adequados para o dispositivo e navegador do usuário
 */
const ResponsiveImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  sizes = '100vw',
  loading = 'lazy',
  imgClassName = '',
  withPlaceholder = true
}) => {
  // Remover extensão e caminho da imagem original
  const basePath = src.substring(0, src.lastIndexOf('.')) || src;
  const extension = src.split('.').pop();
  
  // Definir tamanhos disponíveis
  const availableSizes = [640, 1024, 1600];
  
  // Garantir que o alt está presente por acessibilidade
  const safeAlt = alt || 'Imagem do site BotZap';
  
  // Calcular proporção para placeholder se width e height fornecidos
  const aspectRatio = width && height ? (height / width) * 100 : null;
  
  return (
    <div 
      className={`responsive-image ${className}`}
      style={aspectRatio ? { 
        position: 'relative',
        paddingBottom: withPlaceholder ? `${aspectRatio}%` : undefined,
        overflow: withPlaceholder ? 'hidden' : undefined,
        width: width ? `${width}px` : 'auto'
      } : undefined}
    >
      <picture>
        {/* Formato AVIF - melhor compressão, suporte mais limitado */}
        <source
          type="image/avif"
          srcSet={availableSizes.map(size => `${basePath}-${size}.avif ${size}w`).join(', ')}
          sizes={sizes}
        />
        
        {/* Formato WebP - boa compressão, suporte amplo */}
        <source
          type="image/webp"
          srcSet={availableSizes.map(size => `${basePath}-${size}.webp ${size}w`).join(', ')}
          sizes={sizes}
        />
        
        {/* Imagem original como fallback */}
        <img
          src={src}
          alt={safeAlt}
          width={width}
          height={height}
          loading={loading}
          className={`${imgClassName} ${withPlaceholder ? 'absolute inset-0 w-full h-full object-cover' : ''}`}
          style={withPlaceholder ? { position: 'absolute', top: 0, left: 0 } : undefined}
          onLoad={(e) => {
            // Remove classe de blur quando a imagem carregar
            if (e.target.classList.contains('blur-up')) {
              e.target.classList.remove('blur-up');
              e.target.classList.add('blur-out');
            }
          }}
        />
      </picture>
    </div>
  );
};

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  imgClassName: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sizes: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  withPlaceholder: PropTypes.bool
};

export default ResponsiveImage;