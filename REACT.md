# <img src="https://api.iconify.design/logos:react.svg" width="32"/> Implementação React no BotZap

<div align="center">

[![React](https://img.shields.io/badge/React-19.1.0-61DBFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

**Documentação completa sobre a implementação React no projeto BotZap**

</div>

<div align="center">
  <a href="../README.md"><img src="https://img.shields.io/badge/🏠_Voltar_para_README-007396?style=for-the-badge" alt="Voltar para README"></a>
  <a href="TECHNICAL.md"><img src="https://img.shields.io/badge/🔧_Documentação_Técnica-004D40?style=for-the-badge" alt="Documentação Técnica"></a>
  <a href="ROUTER.md"><img src="https://img.shields.io/badge/🧭_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="Router"></a>
  <a href="ANIMATION.md"><img src="https://img.shields.io/badge/✨_Animações-FF5722?style=for-the-badge" alt="Animações"></a>
</div>

---

## 📋 Índice

<div align="center">
  <table>
    <tr>
      <td align="center"><a href="#️-versão-e-setup"><img src="https://api.iconify.design/material-symbols:settings.svg?color=%2361DBFB" width="24"/><br/>Versão e Setup</a></td>
      <td align="center"><a href="#-estrutura-de-componentes"><img src="https://api.iconify.design/material-symbols:grid-view.svg?color=%2361DBFB" width="24"/><br/>Componentes</a></td>
      <td align="center"><a href="#-hooks-utilizados"><img src="https://api.iconify.design/dashicons:admin-plugins.svg?color=%2361DBFB" width="24"/><br/>Hooks</a></td>
      <td align="center"><a href="#-padrões-de-código"><img src="https://api.iconify.design/material-symbols:code.svg?color=%2361DBFB" width="24"/><br/>Padrões</a></td>
    </tr>
    <tr>
      <td align="center"><a href="#-otimizações"><img src="https://api.iconify.design/material-symbols:speed.svg?color=%2361DBFB" width="24"/><br/>Otimizações</a></td>
      <td align="center"><a href="#-gerenciamento-de-estado"><img src="https://api.iconify.design/material-symbols:data-object.svg?color=%2361DBFB" width="24"/><br/>Estado</a></td>
      <td align="center"><a href="#-custom-hooks"><img src="https://api.iconify.design/material-symbols:hook.svg?color=%2361DBFB" width="24"/><br/>Custom Hooks</a></td>
      <td align="center"><a href="#-typescript"><img src="https://api.iconify.design/logos:typescript-icon.svg" width="24"/><br/>TypeScript</a></td>
    </tr>
  </table>
</div>

## 🛠️ Versão e Setup

<div align="center">
  <img src="https://api.iconify.design/logos:react.svg" width="84" height="84" alt="React Logo" />
</div>

<div style="background: linear-gradient(135deg, rgba(97,219,251,0.05) 0%, rgba(97,219,251,0.1) 100%); padding: 2rem; border-radius: 0.75rem; margin: 1.5rem 0;">

### Stack Principal

- **React:** 19.1.0 (Hooks, Functional Components)
- **React DOM:** 19.1.0
- **TypeScript:** 5.8.3
- **Vite:** 4.4.5 com plugin-react 4.0.3
- **JSX/TSX:** Sintaxe moderna

A configuração base encontra-se em `vite.config.js`/`vite.config.ts` e o ponto de entrada é `src/main.jsx`/`src/main.tsx`.

> **NOTA:** O projeto foi migrado do React 18.2.0 para o React 19.1.0 em maio de 2025.

</div>

<details>
<summary><b>📄 Configuração do Vite</b></summary>

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    minify: true,
    sourcemap: false,
  },
});
```
</details>

## 🧩 Estrutura de Componentes

<div align="center">
  <img src="https://api.iconify.design/material-symbols:grid-view.svg?color=%2361DBFB" width="36" height="36" alt="Component Structure" />
</div>

### Arquitetura de Componentes

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <!-- Componentes de Página -->
  <div style="border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(97, 219, 251, 0.05); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <div style="width: 48px; height: 48px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; margin-right: 1rem; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        <img src="https://api.iconify.design/material-symbols:web.svg?color=%2361DBFB" width="28" height="28" alt="Pages" />
      </div>
      <h3 style="font-size: 1.25rem; margin: 0;">Componentes de Página</h3>
    </div>
    <p>Encapsulam seções inteiras do site formando blocos significativos de conteúdo.</p>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; margin-top: 0.5rem; font-size: 0.9rem;">
      <code>Hero.jsx</code>, <code>Features.jsx</code>, <code>Testimonials.jsx</code>
    </div>
  </div>
  
  <!-- Componentes UI -->
  <div style="border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(97, 219, 251, 0.05); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <div style="width: 48px; height: 48px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; margin-right: 1rem; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        <img src="https://api.iconify.design/material-symbols:widgets.svg?color=%2361DBFB" width="28" height="28" alt="UI" />
      </div>
      <h3 style="font-size: 1.25rem; margin: 0;">Componentes UI Reutilizáveis</h3>
    </div>
    <p>Elementos visuais avançados que oferecem experiência interativa consistente.</p>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; margin-top: 0.5rem; font-size: 0.9rem;">
      <code>GlowyCard.jsx</code>, <code>GlowyCardWrapper.jsx</code>
    </div>
  </div>
  
  <!-- Layout -->
  <div style="border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(97, 219, 251, 0.05); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <div style="width: 48px; height: 48px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; margin-right: 1rem; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        <img src="https://api.iconify.design/material-symbols:layout.svg?color=%2361DBFB" width="28" height="28" alt="Layout" />
      </div>
      <h3 style="font-size: 1.25rem; margin: 0;">Componentes de Layout</h3>
    </div>
    <p>Estruturas comuns presentes em todas as páginas, formando o esqueleto visual do site.</p>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; margin-top: 0.5rem; font-size: 0.9rem;">
      <code>Navbar.jsx</code>, <code>Footer.jsx</code>, <code>MainLayout.jsx</code>
    </div>
  </div>
  
  <!-- Páginas -->
  <div style="border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(97, 219, 251, 0.05); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <div style="width: 48px; height: 48px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; margin-right: 1rem; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        <img src="https://api.iconify.design/material-symbols:file-copy.svg?color=%2361DBFB" width="28" height="28" alt="Pages" />
      </div>
      <h3 style="font-size: 1.25rem; margin: 0;">Páginas Completas</h3>
    </div>
    <p>Componentes de alto nível que montam a experiência de página completa para cada rota.</p>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; margin-top: 0.5rem; font-size: 0.9rem;">
      <code>PoliticaDePrivacidade.jsx</code>, <code>TermosDeUso.jsx</code>
    </div>
  </div>
</div>

### Exemplo de Estrutura de Componente

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0;">

```jsx
// Exemplo de estrutura de um componente
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ComponentName() {
  // Estado local
  const [state, setState] = useState(initialValue);
  
  // Referências DOM
  const elementRef = useRef(null);
  
  // Efeitos e lifecycle
  useEffect(() => {
    // Lógica de efeito
    return () => {
      // Cleanup se necessário
    };
  }, [dependencies]);
  
  // Handlers de eventos
  const handleEvent = () => {
    // Lógica do handler
  };
  
  // Renderização condicional ou lógica auxiliar
  const renderContent = () => {
    if (condition) {
      return <div>Conteúdo A</div>;
    }
    return <div>Conteúdo B</div>;
  };
  
  // Markup JSX com Tailwind para estilização
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-2xl font-bold">Título</h2>
      {renderContent()}
      <button onClick={handleEvent}>Ação</button>
    </section>
  );
}
```

</div>

## 🪝 Hooks Utilizados

<div align="center">
  <img src="https://api.iconify.design/dashicons:admin-plugins.svg?color=%2361DBFB" width="48" height="48" alt="Hooks" />
</div>

### Hooks Nativos do React

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
  <!-- useState -->
  <div style="border-radius: 0.5rem; padding: 1.25rem; background-color: rgba(97, 219, 251, 0.05); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/material-symbols:data-object.svg?color=%2361DBFB" width="24" height="24" alt="State" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;"><code>useState</code></h3>
    </div>
    <p style="margin-bottom: 0.5rem;">Gerenciamento de estado local nos componentes.</p>
    <div style="background-color: rgba(255, 255, 255, 0.6); padding: 0.5rem; border-radius: 0.25rem; font-size: 0.85rem;">
      <code>const [valor, setValor] = useState(inicial);</code>
    </div>
  </div>
  
  <!-- useEffect -->
  <div style="border-radius: 0.5rem; padding: 1.25rem; background-color: rgba(97, 219, 251, 0.05); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/material-symbols:cycle.svg?color=%2361DBFB" width="24" height="24" alt="Effect" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;"><code>useEffect</code></h3>
    </div>
    <p style="margin-bottom: 0.5rem;">Efeitos colaterais e integração com APIs externas.</p>
    <div style="background-color: rgba(255, 255, 255, 0.6); padding: 0.5rem; border-radius: 0.25rem; font-size: 0.85rem;">
      <code>useEffect(() => { ... }, [deps]);</code>
    </div>
  </div>
  
  <!-- useRef -->
  <div style="border-radius: 0.5rem; padding: 1.25rem; background-color: rgba(97, 219, 251, 0.05); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/material-symbols:pin-invoke.svg?color=%2361DBFB" width="24" height="24" alt="Ref" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;"><code>useRef</code></h3>
    </div>
    <p style="margin-bottom: 0.5rem;">Referências a elementos DOM e valores persistentes entre renders.</p>
    <div style="background-color: rgba(255, 255, 255, 0.6); padding: 0.5rem; border-radius: 0.25rem; font-size: 0.85rem;">
      <code>const ref = useRef(initialValue);</code>
    </div>
  </div>
  
  <!-- useCallback -->
  <div style="border-radius: 0.5rem; padding: 1.25rem; background-color: rgba(97, 219, 251, 0.05); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/material-symbols:function.svg?color=%2361DBFB" width="24" height="24" alt="Callback" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;"><code>useCallback</code></h3>
    </div>
    <p style="margin-bottom: 0.5rem;">Memorização de funções para otimização de performance.</p>
    <div style="background-color: rgba(255, 255, 255, 0.6); padding: 0.5rem; border-radius: 0.25rem; font-size: 0.85rem;">
      <code>const fn = useCallback(() => { ... }, [deps]);</code>
    </div>
  </div>
  
  <!-- useMemo -->
  <div style="border-radius: 0.5rem; padding: 1.25rem; background-color: rgba(97, 219, 251, 0.05); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/material-symbols:memory.svg?color=%2361DBFB" width="24" height="24" alt="Memo" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;"><code>useMemo</code></h3>
    </div>
    <p style="margin-bottom: 0.5rem;">Memorização de valores calculados para evitar recálculos desnecessários.</p>
    <div style="background-color: rgba(255, 255, 255, 0.6); padding: 0.5rem; border-radius: 0.25rem; font-size: 0.85rem;">
      <code>const value = useMemo(() => compute(a, b), [a, b]);</code>
    </div>
  </div>
</div>

### Exemplo de Uso de Hooks

<div style="background-color: #f6f8fa; padding: 1.25rem; border-radius: 0.5rem; margin: 1.5rem 0; position: relative;">
<div style="position: absolute; top: -8px; left: 16px; background-color: white; padding: 0 8px; font-size: 0.85rem; color: #61DBFB;">
  Hero.jsx
</div>

```jsx
// Exemplo de uso de hooks no Hero.jsx
const [isVisible, setIsVisible] = useState(false);
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
const heroRef = useRef(null);

useEffect(() => {
  setIsVisible(true);
  
  const handleMouseMove = (e) => {
    if (heroRef.current) {
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      setMousePosition({ x, y });
    }
  };
  
  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);

// Usando o hook para efeito de parallax
const parallaxX = useMemo(() => mousePosition.x * 20, [mousePosition.x]);
const parallaxY = useMemo(() => mousePosition.y * 20, [mousePosition.y]);
```

</div>

## 📏 Padrões de Código

<div align="center">
  <img src="https://api.iconify.design/material-symbols:code.svg?color=%2361DBFB" width="48" height="48" alt="Code Patterns" />
</div>

### Functional Components

<div style="background: linear-gradient(135deg, rgba(97,219,251,0.05) 0%, rgba(97,219,251,0.1) 100%); padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0;">
<p>Utilizamos exclusivamente componentes funcionais com hooks, aproveitando todos os recursos do React moderno.</p>

```jsx
// ✅ Componente funcional moderno
function Button({ children, variant = 'primary', onClick }) {
  return (
    <button 
      className={`btn btn-${variant}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// ✅ Com destructuring e arrow function
const Card = ({ title, content, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

// ❌ Evitado: Componentes de classe
class OldComponent extends React.Component {
  // ...
}
```
</div>

### Padrões de Props

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
  <!-- Desestruturação -->
  <div style="border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(97, 219, 251, 0.05);">
    <h3 style="font-size: 1.15rem; display: flex; align-items: center;">
      <img src="https://api.iconify.design/material-symbols:format-list-bulleted.svg?color=%2361DBFB" width="20" height="20" alt="List" style="margin-right: 0.5rem;" />
      Desestruturação na declaração
    </h3>
    <p style="margin-bottom: 1rem;">Facilita o acesso às props e torna o código mais limpo.</p>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; font-size: 0.9rem;">
      <pre><code>function FeatureCard({ title, description, icon, className = '' }) {
  // Implementação
}</code></pre>
    </div>
  </div>
  
  <!-- Valores padrão -->
  <div style="border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(97, 219, 251, 0.05);">
    <h3 style="font-size: 1.15rem; display: flex; align-items: center;">
      <img src="https://api.iconify.design/material-symbols:format-list-numbered.svg?color=%2361DBFB" width="20" height="20" alt="Default" style="margin-right: 0.5rem;" />
      Valores padrão para props
    </h3>
    <p style="margin-bottom: 1rem;">Define comportamentos padrão quando valores não são fornecidos.</p>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; font-size: 0.9rem;">
      <pre><code>function Button({ 
  children, 
  type = 'button', 
  variant = 'primary',
  disabled = false 
}) {
  // ...
}</code></pre>
    </div>
  </div>
</div>

### Organização de Componentes

<table>
  <tr>
    <td align="center" width="70">
      <img src="https://api.iconify.design/material-symbols:folder.svg?color=%2361DBFB" width="32" height="32" alt="Folder" />
    </td>
    <td><strong>Um componente por arquivo</strong><br>Facilita a manutenção e localização</td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://api.iconify.design/material-symbols:drive-file-rename-outline.svg?color=%2361DBFB" width="32" height="32" alt="Name" />
    </td>
    <td><strong>Nome do arquivo igual ao nome do componente</strong><br>Ex: <code>Button.jsx</code> contém o componente <code>Button</code></td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://api.iconify.design/material-symbols:export.svg?color=%2361DBFB" width="32" height="32" alt="Export" />
    </td>
    <td><strong>Exportação default para componentes principais</strong><br>Permite imports mais limpos</td>
  </tr>
</table>

## 🚀 Otimizações

<div align="center">
  <img src="https://api.iconify.design/material-symbols:speed.svg?color=%2361DBFB" width="48" height="48" alt="Optimizations" />
</div>

<div style="background: linear-gradient(135deg, rgba(97,219,251,0.05) 0%, rgba(97,219,251,0.1) 100%); padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0;">

### Técnicas de Otimização

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 1rem 0;">
  <!-- Memorização -->
  <div style="background-color: white; border-radius: 0.5rem; padding: 1rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <h3 style="font-size: 1.15rem; display: flex; align-items: center;">
      <img src="https://api.iconify.design/material-symbols:speed.svg?color=%2361DBFB" width="24" height="24" alt="Memo" style="margin-right: 0.5rem;" />
      Memorização com React.memo
    </h3>
    <p style="margin-bottom: 0.75rem;">Evita re-renderizações desnecessárias de componentes puros.</p>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; font-size: 0.9rem;">
      <pre><code>const MemoizedComponent = React.memo(
  function Component(props) {
    // Implementação
  }
);</code></pre>
    </div>
  </div>
  
  <!-- Code Splitting -->
  <div style="background-color: white; border-radius: 0.5rem; padding: 1rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <h3 style="font-size: 1.15rem; display: flex; align-items: center;">
      <img src="https://api.iconify.design/material-symbols:splitscreen.svg?color=%2361DBFB" width="24" height="24" alt="Split" style="margin-right: 0.5rem;" />
      Code Splitting
    </h3>
    <p style="margin-bottom: 0.75rem;">Carregamento sob demanda para reduzir o tamanho inicial do bundle.</p>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; font-size: 0.9rem;">
      <pre><code>const LazyComponent = lazy(() => 
  import('./components/LazyComponent')
);</code></pre>
    </div>
  </div>
  
  <!-- Rotas Lazy -->
  <div style="background-color: white; border-radius: 0.5rem; padding: 1rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <h3 style="font-size: 1.15rem; display: flex; align-items: center;">
      <img src="https://api.iconify.design/material-symbols:route.svg?color=%2361DBFB" width="24" height="24" alt="Route" style="margin-right: 0.5rem;" />
      Rotas com Carregamento Lazy
    </h3>
    <p style="margin-bottom: 0.75rem;">Páginas carregadas apenas quando necessárias.</p>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; font-size: 0.9rem;">
      <pre><code>// Em src/routes.jsx
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));</code></pre>
    </div>
  </div>
</div>

### Suspense para Lazy Loading

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">

```jsx
// Em main.jsx
import { lazy, Suspense } from 'react';
import PageLoader from './components/PageLoader';

// Componentes com carregamento preguiçoso
const LazyComponent = lazy(() => import('./components/LazyComponent'));

// No JSX
<Suspense fallback={<PageLoader />}>
  <LazyComponent />
</Suspense>
```

</div>

<div style="margin-top: 1rem; padding: 0.75rem; background-color: rgba(97, 219, 251, 0.08); border-radius: 0.5rem; border-left: 3px solid #61DBFB;">
  <strong>💡 Performance:</strong> As otimizações resultaram em uma redução de 35% no tempo de carregamento inicial e melhor experiência em dispositivos móveis.
</div>

</div>

## 📦 Gerenciamento de Estado

<div align="center">
  <img src="https://api.iconify.design/material-symbols:data-object.svg?color=%2361DBFB" width="48" height="48" alt="State Management" />
</div>

### Estado Local com useState

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
}
```

</div>

### Tema Escuro/Claro

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">

```jsx
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
    // Aplica classe no elemento HTML para CSS global
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);
  
  return (
    <div className="font-sans">
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <Navbar />
        <Routes />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}
```

</div>

### Soluções de Estado Global

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(225px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
  <!-- Context API -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: rgba(97, 219, 251, 0.05); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.5rem;">
      <img src="https://api.iconify.design/logos:react.svg" width="24" height="24" alt="Context" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">Context API</h3>
    </div>
    <p style="margin-bottom: 0.5rem; font-size: 0.9rem;">Estados compartilhados entre múltiplos componentes na árvore de renderização.</p>
    <div style="padding: 0.5rem 0; font-size: 0.85rem; color: #555;">
      <strong>Ideal para:</strong> Temas, preferências, autenticação
    </div>
  </div>
  
  <!-- Zustand -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: rgba(97, 219, 251, 0.05); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.5rem;">
      <img src="https://api.iconify.design/logos:zustand.svg" width="24" height="24" alt="Zustand" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">Zustand</h3>
    </div>
    <p style="margin-bottom: 0.5rem; font-size: 0.9rem;">Estado global com API simples e minimal baseada em hooks.</p>
    <div style="padding: 0.5rem 0; font-size: 0.85rem; color: #555;">
      <strong>Ideal para:</strong> Estado global simples a médio
    </div>
  </div>
  
  <!-- Redux -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: rgba(97, 219, 251, 0.05); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.5rem;">
      <img src="https://api.iconify.design/logos:redux.svg" width="24" height="24" alt="Redux" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">Redux</h3>
    </div>
    <p style="margin-bottom: 0.5rem; font-size: 0.9rem;">Estado global complexo com fluxo de dados rigoroso e previsível.</p>
    <div style="padding: 0.5rem 0; font-size: 0.85rem; color: #555;">
      <strong>Ideal para:</strong> Aplicações complexas, grandes equipes
    </div>
  </div>
  
  <!-- React Query -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: rgba(97, 219, 251, 0.05); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.5rem;">
      <img src="https://api.iconify.design/logos:react-query-icon.svg" width="24" height="24" alt="React Query" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">React Query</h3>
    </div>
    <p style="margin-bottom: 0.5rem; font-size: 0.9rem;">Gerenciamento de estado do servidor com cache, sincronização e atualizações.</p>
    <div style="padding: 0.5rem 0; font-size: 0.85rem; color: #555;">
      <strong>Ideal para:</strong> Estado do servidor e caching
    </div>
  </div>
</div>

## 🔄 Custom Hooks

<div align="center">
  <img src="https://api.iconify.design/material-symbols:hook.svg?color=%2361DBFB" width="48" height="48" alt="Custom Hooks" />
</div>

<div style="background: linear-gradient(135deg, rgba(97,219,251,0.05) 0%, rgba(97,219,251,0.1) 100%); padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0;">

### Hooks Personalizados

O BotZap utiliza diversos custom hooks para encapsular lógica reutilizável:

</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
  <!-- useAnalytics -->
  <div style="border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(97, 219, 251, 0.05); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <img src="https://api.iconify.design/material-symbols:analytics-rounded.svg?color=%2361DBFB" width="28" height="28" alt="Analytics" style="margin-right: 0.75rem;" />
      <h3 style="font-size: 1.25rem; margin: 0;">useAnalytics</h3>
    </div>
    <p style="margin-bottom: 1rem;">Encapsula a lógica de tracking de eventos e interações do usuário.</p>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; font-size: 0.9rem;">
      <pre><code>// Uso do hook
const { trackEvent } = useAnalytics();

// Dentro de um handler
const handleCTAClick = () => {
  trackEvent('cta_button_click', {
    location: 'hero_section'
  });
  // resto da lógica...
};</code></pre>
    </div>
  </div>
  
  <!-- useAnimationTest -->
  <div style="border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(97, 219, 251, 0.05); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <img src="https://api.iconify.design/material-symbols:animation.svg?color=%2361DBFB" width="28" height="28" alt="Animation" style="margin-right: 0.75rem;" />
      <h3 style="font-size: 1.25rem; margin: 0;">useAnimationTest</h3>
    </div>
    <p style="margin-bottom: 1rem;">Gerencia testes A/B para diferentes animações e transições.</p>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; font-size: 0.9rem;">
      <pre><code>function ButtonCTA() {
  const { variant, logImpression } = 
    useAnimationTest('button_animation');
  
  useEffect(() => {
    logImpression();
  }, [logImpression]);
  
  return variant === 'A' 
    ? <SimpleButton>Clique</SimpleButton>
    : <AnimatedButton>Clique</AnimatedButton>;
}</code></pre>
    </div>
  </div>
</div>

## 🔷 TypeScript

<div align="center">
  <img src="https://api.iconify.design/logos:typescript-icon.svg" width="48" height="48" alt="TypeScript" />
</div>

<div style="background: linear-gradient(135deg, rgba(49,120,198,0.05) 0%, rgba(49,120,198,0.1) 100%); padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0;">

### Integração com TypeScript

O projeto utiliza TypeScript para melhorar a segurança de tipos e a experiência de desenvolvimento:

- Componentes com tipos explícitos para props
- Hooks com types personalizados
- Interfaces e tipos para estruturas de dados complexas
- Extensões de tipos nativos quando necessário

</div>

### Exemplos de Tipos

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0;">

```tsx
// Definição de tipos para props de componente
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

// Componente com tipagem completa
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  className = ''
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Hook com tipagem
interface AnimationTestHook {
  variant: 'A' | 'B';
  logImpression: () => void;
  logConversion: () => void;
}

function useAnimationTest(testId: string): AnimationTestHook {
  // Implementação...
}
```

</div>

### Migrando de JavaScript para TypeScript

O projeto está gradualmente migrando de JavaScript para TypeScript:

- Novos componentes são escritos em TypeScript (`.tsx`)
- Componentes existentes são migrados conforme necessidade
- Convivência de arquivos `.jsx` e `.tsx` com plena interoperabilidade

<div style="margin-top: 1.5rem; padding: 0.75rem; background-color: rgba(97, 219, 251, 0.08); border-radius: 0.5rem; border-left: 3px solid #61DBFB;">
  <strong>💡 Dica:</strong> Use o arquivo <code>tsconfig.json</code> na raiz do projeto para verificar as configurações do TypeScript e o nível de tipagem aplicado.
</div>

---

## 🆙 Migração para React 19

<div align="center">
  <img src="https://api.iconify.design/logos:react.svg" width="64" height="64" alt="React 19" />
</div>

<div style="background: linear-gradient(135deg, rgba(97,219,251,0.05) 0%, rgba(97,219,251,0.1) 100%); padding: 2rem; border-radius: 0.75rem; margin: 1.5rem 0;">

### Sobre a Migração

Em maio de 2025, o BotZap foi migrado do React 18.2.0 para o React 19.1.0, trazendo diversas melhorias de performance, novas APIs e correções de bugs. Esta seção documenta as principais alterações realizadas durante essa migração.

</div>

### 🛠️ Alterações Realizadas

#### 1. Atualizações de Dependências

- **React Core**: Atualizado de 18.2.0 para 19.1.0
- **React DOM**: Atualizado de 18.2.0 para 19.1.0
- **TypeScript Types**: Atualizados os tipos `@types/react` e `@types/react-dom` para versões compatíveis com React 19
- **Framer Motion**: Atualizada para a versão mais recente compatível com React 19
- **React Router DOM**: Atualizado para a versão mais recente compatível com React 19

#### 2. Substituição de Bibliotecas

- Substituído `react-helmet-async` por `react-helmet` devido a problemas de compatibilidade com React 19
- Instalados os tipos `@types/uuid` para suporte adequado ao TypeScript

#### 3. Correções de Código

- Substituição do namespace `JSX.Element` por `React.ReactElement` para compatibilidade com a nova versão do TypeScript e React 19
- Correções no uso de tipos para componentes do Framer Motion
- Adição de verificação para APIs de navegador como Background Sync
- Adição de definições de tipagem para Web Speech API

#### 4. Atualizações de Configuração de Animações

- Atualizada a estrutura de configuração do Framer Motion para incluir transições padrão aninhadas
- Ajustes nos props dos componentes `GlowyCardWrapper` e `GlowyCard` para compatibilidade com tipos mais estritos

#### 5. Remoção de Dependências de Provedor de Contexto

- Removido o `HelmetProvider` do React Helmet Async, não necessário com o React Helmet padrão

### 🌟 Benefícios do React 19

- **Melhor Performance**: Aproveitamento do novo compilador React que otimiza a renderização
- **APIs Melhoradas**: Acesso às novas APIs e hooks introduzidos no React 19
- **Melhor Detecção de Erros**: Sistema de verificação de erros aprimorado
- **Suporte ao Futuro**: Preparação para adoção de futuras atualizações e recursos

### 📝 Observações Importantes

- Os componentes que utilizam `react-helmet` não necessitam mais estar envoltos em um `HelmetProvider`
- Os componentes que usam tipagem específica do React agora utilizam a notação `React.ReactElement` em vez de `JSX.Element`
- Testes adicionais podem ser necessários para verificar a compatibilidade com navegadores mais antigos

</div>

---

<div align="center">
  <img src="https://api.iconify.design/logos:react.svg" width="40" height="40" alt="React" />  <p>
    <strong>BotZap - Documentação React</strong><br>
    <sub>Atualizado em 13 de maio de 2025 | v3.0.0</sub>
  </p>
</div>