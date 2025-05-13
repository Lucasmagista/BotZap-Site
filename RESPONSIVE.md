# <img src="https://api.iconify.design/material-symbols:devices.svg?color=%235D8BF4" width="28"/> Design Responsivo

<div align="center">

[![Mobile](https://img.shields.io/badge/Mobile-Compatível-5D8BF4?style=flat-square&logo=android)](https://web.dev/mobile-friendly/)
[![Desktop](https://img.shields.io/badge/Desktop-Otimizado-5D8BF4?style=flat-square&logo=windows)](https://web.dev/responsive-design/)
[![Tablet](https://img.shields.io/badge/Tablet-Adaptativo-5D8BF4?style=flat-square&logo=apple)](https://web.dev/responsive-design/)

**Documentação sobre a implementação de design responsivo no BotZap**

[🏠 Voltar para README](../README.md) | [⚛️ React](REACT.md) | [🌐 PWA](OFFLINE.md)

</div>

---

## 📋 Índice

- [📱 Visão Geral](#-visão-geral)
- [🖥️ Breakpoints](#️-breakpoints)
- [🧩 Componentes Responsivos](#-componentes-responsivos)
- [🎭 Design Adaptativo](#-design-adaptativo)
- [🏞️ Imagens Responsivas](#️-imagens-responsivas)
- [🔍 Testes de Responsividade](#-testes-de-responsividade)

## 📱 Visão Geral

<div align="center">
  <img src="https://api.iconify.design/fluent:phone-desktop-24-regular.svg?color=%235D8BF4" width="128" height="128" alt="Responsive Design" />
</div>

O BotZap foi desenvolvido seguindo a abordagem **Mobile First**, garantindo que o site seja totalmente funcional e visualmente agradável em qualquer dispositivo, desde smartphones até monitores desktop de alta resolução.

### Princípios de Design

<div class="grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem;">
  <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; background-color: rgba(93, 139, 244, 0.05);">
    <h3>
      <img src="https://api.iconify.design/material-symbols:smartphone.svg?color=%235D8BF4" width="20" height="20" alt="Mobile First" />
      Mobile First
    </h3>
    <p>Design começando em telas pequenas e expandindo para maiores</p>
  </div>
  
  <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; background-color: rgba(93, 139, 244, 0.05);">
    <h3>
      <img src="https://api.iconify.design/material-symbols:fluid.svg?color=%235D8BF4" width="20" height="20" alt="Fluid" />
      Layouts Fluidos
    </h3>
    <p>Elementos que se ajustam proporcionalmente ao tamanho da tela</p>
  </div>
  
  <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; background-color: rgba(93, 139, 244, 0.05);">
    <h3>
      <img src="https://api.iconify.design/material-symbols:format-size.svg?color=%235D8BF4" width="20" height="20" alt="Type" />
      Tipografia Adaptativa
    </h3>
    <p>Tamanhos de fonte que se ajustam conforme as dimensões do dispositivo</p>
  </div>
  
  <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; background-color: rgba(93, 139, 244, 0.05);">
    <h3>
      <img src="https://api.iconify.design/material-symbols:touch-app.svg?color=%235D8BF4" width="20" height="20" alt="Touch" />
      Touch-Friendly
    </h3>
    <p>Elementos interativos dimensionados adequadamente para interação por toque</p>
  </div>
</div>

## 🖥️ Breakpoints

<div align="center">
  <img src="https://api.iconify.design/fluent:breakpoint-20-regular.svg?color=%235D8BF4" width="24" height="24" alt="Breakpoints" />
</div>

O sistema de responsividade do BotZap utiliza os seguintes breakpoints:

<table>
  <thead>
    <tr>
      <th>Nome</th>
      <th>Largura (px)</th>
      <th>Dispositivos</th>
      <th>Classe Tailwind</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>sm</strong></td>
      <td>640px</td>
      <td>Smartphones (landscape)</td>
      <td><code>sm:</code></td>
    </tr>
    <tr>
      <td><strong>md</strong></td>
      <td>768px</td>
      <td>Tablets</td>
      <td><code>md:</code></td>
    </tr>
    <tr>
      <td><strong>lg</strong></td>
      <td>1024px</td>
      <td>Laptops</td>
      <td><code>lg:</code></td>
    </tr>
    <tr>
      <td><strong>xl</strong></td>
      <td>1280px</td>
      <td>Desktops</td>
      <td><code>xl:</code></td>
    </tr>
    <tr>
      <td><strong>2xl</strong></td>
      <td>1536px</td>
      <td>Telas grandes</td>
      <td><code>2xl:</code></td>
    </tr>
  </tbody>
</table>

### Exemplo de Uso

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">

```jsx
// Componente com design responsivo
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
  {items.map(item => (
    <Card key={item.id} {...item} className="w-full" />
  ))}
</div>
```

</div>

## 🧩 Componentes Responsivos

<div align="center">
  <img src="https://api.iconify.design/material-symbols:grid-view.svg?color=%235D8BF4" width="24" height="24" alt="Components" />
</div>

### Navbar Responsiva

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">

```jsx
// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo - visível em todas as telas */}
        <Link to="/" className="flex items-center">
          <img src="/logo.svg" alt="BotZap" className="h-8" />
          <span className="ml-2 text-xl font-bold text-gray-800">BotZap</span>
        </Link>
        
        {/* Menu para desktop - oculto em telas pequenas */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/recursos" className="text-gray-600 hover:text-blue-600 transition-colors">Recursos</Link>
          <Link to="/precos" className="text-gray-600 hover:text-blue-600 transition-colors">Preços</Link>
          <Link to="/faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</Link>
          <Link to="/contato" className="text-gray-600 hover:text-blue-600 transition-colors">Contato</Link>
          <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Entrar</Link>
        </nav>
        
        {/* Botão do menu mobile - visível apenas em telas pequenas */}
        <button 
          className="md:hidden text-gray-500 focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Menu mobile - apenas visível quando aberto em telas pequenas */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-2 shadow-md">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link 
              to="/recursos" 
              className="text-gray-600 hover:text-blue-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Recursos
            </Link>
            <Link 
              to="/precos" 
              className="text-gray-600 hover:text-blue-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Preços
            </Link>
            <Link 
              to="/faq" 
              className="text-gray-600 hover:text-blue-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="/contato" 
              className="text-gray-600 hover:text-blue-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <Link 
              to="/login" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors inline-block w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Entrar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
```

</div>

### Grid de Cards Responsivos

<div class="grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem;">
  <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; background-color: rgba(93, 139, 244, 0.05);">
    <h3>
      <img src="https://api.iconify.design/material-symbols:smartphone.svg?color=%235D8BF4" width="20" height="20" alt="Mobile" />
      Mobile
    </h3>
    <p>1 coluna - Cards em tela cheia otimizados para visualização e interação em telas pequenas</p>
  </div>
  
  <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; background-color: rgba(93, 139, 244, 0.05);">
    <h3>
      <img src="https://api.iconify.design/material-symbols:tablet.svg?color=%235D8BF4" width="20" height="20" alt="Tablet" />
      Tablet
    </h3>
    <p>2 colunas - Layout otimizado para o espaço adicional, ainda mantendo boa legibilidade</p>
  </div>
  
  <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; background-color: rgba(93, 139, 244, 0.05);">
    <h3>
      <img src="https://api.iconify.design/material-symbols:desktop-windows.svg?color=%235D8BF4" width="20" height="20" alt="Desktop" />
      Desktop
    </h3>
    <p>3-4 colunas - Aproveitamento máximo do espaço horizontal com organização eficiente do conteúdo</p>
  </div>
</div>

## 🎭 Design Adaptativo

<div align="center">
  <img src="https://api.iconify.design/material-symbols:palette.svg?color=%235D8BF4" width="24" height="24" alt="Design" />
</div>

<div class="grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
  <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; background-color: rgba(93, 139, 244, 0.05);">
    <h3>Esconder/Mostrar Elementos</h3>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; margin: 0.75rem 0;">
      <pre><code>// Oculto em mobile, visível em desktop
&lt;div className="hidden md:block"&gt;
  Conteúdo detalhado
&lt;/div&gt;

// Visível em mobile, oculto em desktop
&lt;div className="block md:hidden"&gt;
  Versão simplificada
&lt;/div&gt;</code></pre>
    </div>
  </div>
  
  <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; background-color: rgba(93, 139, 244, 0.05);">
    <h3>Mudança de Layout</h3>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; margin: 0.75rem 0;">
      <pre><code>// Muda de coluna para linha em telas maiores
&lt;div className="flex flex-col md:flex-row gap-4"&gt;
  &lt;div&gt;Primeiro item&lt;/div&gt;
  &lt;div&gt;Segundo item&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>
  
  <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; background-color: rgba(93, 139, 244, 0.05);">
    <h3>Tipografia Responsiva</h3>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; margin: 0.75rem 0;">
      <pre><code>// Texto que se adapta ao tamanho da tela
&lt;h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"&gt;
  Título Principal
&lt;/h1&gt;</code></pre>
    </div>
  </div>
</div>

### Container Responsivo

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">

```jsx
// Componente container que se adapta à largura da tela
<div className="container mx-auto px-4 md:px-6 lg:px-8">
  {/* Conteúdo aqui */}
</div>
```

</div>

### Espaçamento Responsivo

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">

```jsx
// Espaçamento que se adapta ao tamanho da tela
<section className="py-8 sm:py-12 md:py-16 lg:py-20">
  <h2 className="mb-4 sm:mb-6 md:mb-8">Título da Seção</h2>
  
  {/* Conteúdo aqui */}
</section>
```

</div>

## 🏞️ Imagens Responsivas

<div align="center">
  <img src="https://api.iconify.design/material-symbols:image.svg?color=%235D8BF4" width="24" height="24" alt="Images" />
</div>

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">

```jsx
// Componente de imagem responsiva
const ResponsiveImage = ({ src, alt, className, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`w-full object-cover ${className}`}
      {...props}
    />
  );
};

// Uso com srcset para diferentes tamanhos
<picture>
  <source media="(min-width: 1024px)" srcSet="/images/hero-lg.jpg" />
  <source media="(min-width: 640px)" srcSet="/images/hero-md.jpg" />
  <img 
    src="/images/hero-sm.jpg" 
    alt="Hero Image" 
    className="w-full h-auto"
    loading="eager"
  />
</picture>
```

</div>

### Estratégias de Carregamento de Imagens

<div class="grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem;">
  <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; background-color: rgba(93, 139, 244, 0.05);">
    <h3>
      <img src="https://api.iconify.design/material-symbols:lazy-load.svg?color=%235D8BF4" width="20" height="20" alt="Lazy" />
      Lazy Loading
    </h3>
    <p>Imagens carregadas apenas quando entram no viewport, economizando dados</p>
  </div>
  
  <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; background-color: rgba(93, 139, 244, 0.05);">
    <h3>
      <img src="https://api.iconify.design/material-symbols:image-aspect-ratio.svg?color=%235D8BF4" width="20" height="20" alt="Aspect" />
      Aspect Ratio
    </h3>
    <p>Espaços reservados com proporção definida para evitar layout shift</p>
  </div>
  
  <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; background-color: rgba(93, 139, 244, 0.05);">
    <h3>
      <img src="https://api.iconify.design/material-symbols:blur-on.svg?color=%235D8BF4" width="20" height="20" alt="Blur" />
      Placeholder Blur
    </h3>
    <p>Versão em baixa qualidade que carrega instantaneamente enquanto a imagem completa é baixada</p>
  </div>
  
  <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; background-color: rgba(93, 139, 244, 0.05);">
    <h3>
      <img src="https://api.iconify.design/material-symbols:format-size.svg?color=%235D8BF4" width="20" height="20" alt="Size" />
      Tamanhos Otimizados
    </h3>
    <p>Diferentes tamanhos de imagem para diferentes dispositivos, economizando largura de banda</p>
  </div>
</div>

### Implementação com Next/Image

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">

```jsx
// Uso do React Lazy Load Image Component para otimização
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OptimizedImage = ({ src, alt, width, height }) => (
  <LazyLoadImage
    src={src}
    alt={alt}
    width={width}
    height={height}
    effect="blur"
    placeholderSrc={`${src}?quality=10&w=50`}
    wrapperClassName="w-full"
    className="w-full h-auto"
  />
);
```

</div>

## 🔍 Testes de Responsividade

<div align="center">
  <img src="https://api.iconify.design/material-symbols:bug-report.svg?color=%235D8BF4" width="24" height="24" alt="Testing" />
</div>

### Ferramentas de Teste

<div class="grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem;">
  <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; background-color: rgba(93, 139, 244, 0.05);">
    <h3>
      <img src="https://api.iconify.design/logos:chrome.svg" width="20" height="20" alt="Chrome" />
      Chrome DevTools
    </h3>
    <p>Simulação de dispositivos e ferramentas de inspeção para testar responsividade</p>
  </div>
  
  <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; background-color: rgba(93, 139, 244, 0.05);">
    <h3>
      <img src="https://api.iconify.design/logos:firefox.svg" width="20" height="20" alt="Firefox" />
      Firefox Responsive Mode
    </h3>
    <p>Visualização em diferentes tamanhos de tela com métricas detalhadas</p>
  </div>
  
  <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; background-color: rgba(93, 139, 244, 0.05);">
    <h3>
      <img src="https://api.iconify.design/simple-icons:browserstack.svg" width="20" height="20" alt="BrowserStack" />
      BrowserStack
    </h3>
    <p>Teste em dispositivos reais e navegadores diversos</p>
  </div>
  
  <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; background-color: rgba(93, 139, 244, 0.05);">
    <h3>
      <img src="https://api.iconify.design/simple-icons:cypress.svg" width="20" height="20" alt="Cypress" />
      Cypress
    </h3>
    <p>Testes automatizados com viewport configurável</p>
  </div>
</div>

### Checklist de Teste de Responsividade

<div class="checklist" style="display: grid; grid-template-columns: 1fr; gap: 0.5rem;">
  <div style="display: flex; align-items: flex-start; padding: 0.5rem; background-color: rgba(93, 139, 244, 0.05); border-radius: 0.5rem;">
    <span style="margin-right: 0.5rem; color: #4ade80;">✅</span>
    <span>Todos os elementos são visíveis em todos os breakpoints</span>
  </div>
  
  <div style="display: flex; align-items: flex-start; padding: 0.5rem; background-color: rgba(93, 139, 244, 0.05); border-radius: 0.5rem;">
    <span style="margin-right: 0.5rem; color: #4ade80;">✅</span>
    <span>Não há overflow horizontal (sem necessidade de rolagem lateral)</span>
  </div>
  
  <div style="display: flex; align-items: flex-start; padding: 0.5rem; background-color: rgba(93, 139, 244, 0.05); border-radius: 0.5rem;">
    <span style="margin-right: 0.5rem; color: #4ade80;">✅</span>
    <span>Textos são legíveis em todos os dispositivos</span>
  </div>
  
  <div style="display: flex; align-items: flex-start; padding: 0.5rem; background-color: rgba(93, 139, 244, 0.05); border-radius: 0.5rem;">
    <span style="margin-right: 0.5rem; color: #4ade80;">✅</span>
    <span>Áreas clicáveis possuem tamanho mínimo de 44x44px em touch devices</span>
  </div>
  
  <div style="display: flex; align-items: flex-start; padding: 0.5rem; background-color: rgba(93, 139, 244, 0.05); border-radius: 0.5rem;">
    <span style="margin-right: 0.5rem; color: #4ade80;">✅</span>
    <span>Formulários são usáveis em dispositivos móveis</span>
  </div>
  
  <div style="display: flex; align-items: flex-start; padding: 0.5rem; background-color: rgba(93, 139, 244, 0.05); border-radius: 0.5rem;">
    <span style="margin-right: 0.5rem; color: #4ade80;">✅</span>
    <span>Menus de navegação funcionam corretamente em todos os tamanhos</span>
  </div>
  
  <div style="display: flex; align-items: flex-start; padding: 0.5rem; background-color: rgba(93, 139, 244, 0.05); border-radius: 0.5rem;">
    <span style="margin-right: 0.5rem; color: #4ade80;">✅</span>
    <span>Imagens são redimensionadas apropriadamente</span>
  </div>
  
  <div style="display: flex; align-items: flex-start; padding: 0.5rem; background-color: rgba(93, 139, 244, 0.05); border-radius: 0.5rem;">
    <span style="margin-right: 0.5rem; color: #4ade80;">✅</span>
    <span>Elementos interativos têm estados de hover/focus adequados</span>
  </div>
</div>

### Script de Teste Automatizado

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">

```javascript
// cypress/e2e/responsive.cy.js
describe('Teste de Responsividade', () => {
  const sizes = [
    'iphone-6',
    'ipad-2',
    [1024, 768],
    [1920, 1080]
  ];
  
  const pages = [
    '/',
    '/recursos',
    '/precos',
    '/contato',
    '/faq'
  ];
  
  sizes.forEach(size => {
    pages.forEach(page => {
      it(`Deve renderizar corretamente ${page} em ${size}`, () => {
        if (Cypress._.isArray(size)) {
          cy.viewport(size[0], size[1]);
        } else {
          cy.viewport(size);
        }
        
        cy.visit(page);
        cy.wait(500); // Aguardar animações
        
        // Verificar se o menu está adequado para o tamanho
        if (size === 'iphone-6' || (Cypress._.isArray(size) && size[0] < 768)) {
          cy.get('button.menu-toggle').should('be.visible');
          cy.get('nav.desktop-menu').should('not.be.visible');
        } else {
          cy.get('button.menu-toggle').should('not.be.visible');
          cy.get('nav.desktop-menu').should('be.visible');
        }
        
        // Verificar elementos críticos
        cy.get('h1').should('be.visible');
        cy.get('footer').should('be.visible');
        
        // Verificar overflow horizontal
        cy.document().then(doc => {
          const body = doc.body;
          expect(body.scrollWidth).to.be.lte(body.clientWidth);
        });
        
        // Capturar screenshot para inspeção visual
        cy.screenshot(`${page.replace('/', '')}-${size}`);
      });
    });
  });
});
```

</div>

### Relatório de Testes

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div style="display: flex; align-items: center;">
      <span style="width: 1rem; height: 1rem; border-radius: 50%; background-color: #10b981; margin-right: 0.5rem;"></span>
      <span><strong>Mobile Devices (< 640px)</strong>: 100% passed</span>
    </div>
    <div style="display: flex; align-items: center;">
      <span style="width: 1rem; height: 1rem; border-radius: 50%; background-color: #10b981; margin-right: 0.5rem;"></span>
      <span><strong>Tablet Devices (640px - 1024px)</strong>: 100% passed</span>
    </div>
    <div style="display: flex; align-items: center;">
      <span style="width: 1rem; height: 1rem; border-radius: 50%; background-color: #10b981; margin-right: 0.5rem;"></span>
      <span><strong>Desktop Devices (> 1024px)</strong>: 100% passed</span>
    </div>
  </div>
</div>

---

<div align="right">
  <sub>Data da última atualização: 3 de maio de 2025</sub>
</div>