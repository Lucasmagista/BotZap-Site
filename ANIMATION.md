# <img src="https://api.iconify.design/material-symbols:animation.svg" width="32"/> Animações no BotZap

<div align="center">

[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![React Spring](https://img.shields.io/badge/React_Spring-6DB33F?style=for-the-badge)](https://react-spring.io/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://greensock.com/gsap/)

**Guia completo de animações para o site do BotZap**

</div>

<div align="center">
  <a href="../README.md"><img src="https://img.shields.io/badge/🏠_Voltar_para_README-007396?style=for-the-badge" alt="Voltar para README"></a>
  <a href="ROUTER.md"><img src="https://img.shields.io/badge/🧭_Roteamento-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="Roteamento"></a>
  <a href="TECHNICAL.md"><img src="https://img.shields.io/badge/🔧_Documentação_Técnica-004D40?style=for-the-badge" alt="Documentação Técnica"></a>
</div>

---

## 📋 Índice

<div align="center">
  <table>
    <tr>
      <td align="center"><a href="#-bibliotecas-utilizadas"><img src="https://api.iconify.design/material-symbols:library-books.svg?color=%230055FF" width="24"/><br/>Bibliotecas</a></td>
      <td align="center"><a href="#-transições-de-página"><img src="https://api.iconify.design/material-symbols:transition.svg?color=%230055FF" width="24"/><br/>Transições</a></td>
      <td align="center"><a href="#-animações-de-carregamento"><img src="https://api.iconify.design/material-symbols:progress-activity.svg?color=%230055FF" width="24"/><br/>Loading</a></td>
      <td align="center"><a href="#-animações-de-ui"><img src="https://api.iconify.design/material-symbols:widgets.svg?color=%230055FF" width="24"/><br/>UI</a></td>
    </tr>
    <tr>
      <td align="center"><a href="#-modelo-3d"><img src="https://api.iconify.design/material-symbols:3d-rotation.svg?color=%230055FF" width="24"/><br/>3D</a></td>
      <td align="center"><a href="#-testes-de-animação"><img src="https://api.iconify.design/material-symbols:ab-testing.svg?color=%230055FF" width="24"/><br/>A/B Testing</a></td>
      <td align="center"><a href="#-otimização-de-performance"><img src="https://api.iconify.design/material-symbols:speed.svg?color=%230055FF" width="24"/><br/>Performance</a></td>
      <td align="center"><a href="#-boas-práticas"><img src="https://api.iconify.design/material-symbols:check-circle.svg?color=%230055FF" width="24"/><br/>Práticas</a></td>
    </tr>
  </table>
</div>

## 🛠 Bibliotecas Utilizadas

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <!-- Framer Motion -->
  <div style="border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 0; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="background-color: #0055FF; color: white; padding: 1rem 1.5rem; display: flex; align-items: center;">
      <img src="https://api.iconify.design/logos:framer.svg" width="24" height="24" alt="Framer Motion" style="margin-right: 0.75rem;" />
      <h3 style="font-size: 1.25rem; margin: 0;">Framer Motion</h3>
    </div>    <div style="padding: 1.5rem;">
      <p><strong>Versão:</strong> 12.9.4</p>
      <p><strong>Uso principal:</strong> Animações de UI, transições de página e gestos</p>
      <p><strong>Pontos fortes:</strong> API declarativa, suporte a acessibilidade, animações baseadas em física</p>
      <p><strong>Compatibilidade:</strong> Otimizado para React 19</p>
      
```bash
npm install framer-motion
```

```jsx
import { motion } from "framer-motion";

const MyComponent = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    Conteúdo animado
  </motion.div>
);
```

   </div>
  </div>
  
  <!-- React Spring -->
  <div style="border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 0; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="background-color: #6DB33F; color: white; padding: 1rem 1.5rem; display: flex; align-items: center;">
      <img src="https://api.iconify.design/logos:spring-icon.svg" width="24" height="24" alt="React Spring" style="margin-right: 0.75rem;" />
      <h3 style="font-size: 1.25rem; margin: 0;">React Spring</h3>
    </div>
    <div style="padding: 1.5rem;">
      <p><strong>Versão:</strong> 9.7.1</p>
      <p><strong>Uso principal:</strong> Animações baseadas em física para interações complexas</p>
      <p><strong>Pontos fortes:</strong> Excelente para animações realistas e interruptíveis</p>
      
```bash
npm install react-spring
```

```jsx
import { useSpring, animated } from 'react-spring';

function MyComponent() {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
    config: { tension: 300, friction: 10 }
  });
  
  return (
    <animated.div
      style={{
        transform: springs.x
          .to(x => `translateX(${x}px)`)
      }}
    >
      Animação física
    </animated.div>
  );
}
```

   </div>
  </div>
  
  <!-- GSAP -->
  <div style="border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 0; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="background-color: #88CE02; color: black; padding: 1rem 1.5rem; display: flex; align-items: center;">
      <img src="https://api.iconify.design/logos:greensock.svg" width="24" height="24" alt="GSAP" style="margin-right: 0.75rem;" />
      <h3 style="font-size: 1.25rem; margin: 0;">GSAP (GreenSock)</h3>
    </div>
    <div style="padding: 1.5rem;">
      <p><strong>Versão:</strong> 3.11.5</p>
      <p><strong>Uso principal:</strong> Animações complexas na página inicial e seções destacadas</p>
      <p><strong>Pontos fortes:</strong> Extremamente poderosa, timeline, elevada performance</p>
      
```bash
npm install gsap
```

```jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function MyComponent() {
  const elementRef = useRef(null);
  
  useEffect(() => {
    gsap.to(elementRef.current, {
      x: 100,
      duration: 1,
      ease: "power2.out"
    });
  }, []);
  
  return <div ref={elementRef}>Animado com GSAP</div>;
}
```

   </div>
  </div>
</div>

## 🔄 Transições de Página

<div style="background-color: #f8f9fb; border-radius: 0.75rem; padding: 1.5rem 2rem; margin: 2rem 0; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">

<h3 style="margin-top: 0; display: flex; align-items: center;">
  <img src="https://api.iconify.design/material-symbols:transition.svg?color=%230055FF" width="28" height="28" alt="Transition" style="margin-right: 0.75rem;" />
  Implementação de Transições de Página
</h3>

As transições de página são implementadas usando o componente `PageTransition.tsx`. Este componente envolve as páginas renderizadas pelo React Router para fornecer efeitos de entrada e saída, criando uma experiência de navegação mais suave.

### Componente Principal

```jsx
// src/lib/animations/PageTransition.tsx
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
};

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page-transition"
    >
      {children}
    </motion.div>
  );
}
```

### Uso com React Router

```jsx
// src/main.tsx
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        {/* Outras rotas com PageTransition */}
      </Routes>
    </AnimatePresence>
  );
}
```

<div style="margin-top: 1rem; padding: 0.75rem; background-color: rgba(0, 85, 255, 0.08); border-radius: 0.5rem; border-left: 3px solid #0055FF;">
  <strong>💡 Dica:</strong> Use <code>mode="wait"</code> no AnimatePresence para garantir que a animação de saída termine antes que a animação de entrada comece.
</div>

</div>

## ⏳ Animações de Carregamento

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <!-- Pulse Loader -->
  <div style="border-radius: 0.75rem; padding: 1.5rem; background-color: #f8f9fb; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
      <div class="pulse" style="width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(145deg, #0055FF, #00A3FF); display: flex; align-items: center; justify-content: center;">
        <div style="width: 32px; height: 32px; border-radius: 50%; background-color: white;"></div>
      </div>
    </div>
    <h3 style="font-size: 1.25rem; text-align: center; margin-bottom: 1rem;">Loader Pulsante</h3>
    
```jsx
// src/components/PageLoader.jsx
import { motion } from 'framer-motion';
import './PageLoader.css';

function PageLoader() {
  return (
    <div className="loader-container">
      <motion.div 
        className="loader"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

export default PageLoader;
```

  </div>
  
  <!-- Skeleton Screen -->
  <div style="border-radius: 0.75rem; padding: 1.5rem; background-color: #f8f9fb; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem;">
      <div style="height: 24px; width: 60%; background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size: 200% 100%; animation: shimmer 2s infinite; border-radius: 4px;"></div>
      <div style="height: 100px; background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size: 200% 100%; animation: shimmer 2s infinite; border-radius: 4px;"></div>
      <div style="height: 16px; width: 80%; background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size: 200% 100%; animation: shimmer 2s infinite; border-radius: 4px;"></div>
      <div style="height: 16px; width: 60%; background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size: 200% 100%; animation: shimmer 2s infinite; border-radius: 4px;"></div>
    </div>
    <h3 style="font-size: 1.25rem; text-align: center; margin-bottom: 1rem;">Skeleton Screen</h3>
    
```jsx
import './SkeletonLoader.css';

function CardSkeleton() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-title"></div>
      <div className="skeleton-image"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text short"></div>
    </div>
  );
}

export default CardSkeleton;
```

  </div>
  
  <!-- Fallback Suspense -->
  <div style="border-radius: 0.75rem; padding: 1.5rem; background-color: #f8f9fb; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
      <div style="width: 48px; height: 48px; border: 3px solid #f3f3f3; border-top: 3px solid #0055FF; border-radius: 50%; animation: spin 1s linear infinite;"></div>
    </div>
    <h3 style="font-size: 1.25rem; text-align: center; margin-bottom: 1rem;">React Suspense</h3>
    
```jsx
import { lazy, Suspense } from 'react';
import PageLoader from './components/PageLoader';

// Lazy loaded component
const HeavyComponent = lazy(() => 
  import('./components/HeavyComponent')
);

function MyComponent() {
  return (
    <Suspense fallback={<PageLoader />}>
      <HeavyComponent />
    </Suspense>
  );
}

export default MyComponent;
```

  </div>
</div>

<style>
@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

## 📱 Animações de UI

<div style="margin: 2rem 0;">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
    <!-- Botões Interativos -->
    <div style="border-radius: 0.75rem; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
      <div style="background-color: #0055FF; color: white; padding: 1rem 1.5rem;">
        <h3 style="font-size: 1.25rem; margin: 0; display: flex; align-items: center;">
          <img src="https://api.iconify.design/material-symbols:touch-app.svg?color=white" width="24" height="24" alt="Touch" style="margin-right: 0.75rem;" />
          Botões e Interações
        </h3>
      </div>
      <div style="padding: 1.5rem;">
        <p>Botões e elementos interativos usam Framer Motion para feedback visual e efeitos hover.</p>
      
```jsx
import { motion } from 'framer-motion';

function AnimatedButton({ children, ...props }) {
  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
```
      </div>
    </div>
    
    <!-- Cards com Efeitos -->
    <div style="border-radius: 0.75rem; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
      <div style="background-color: #6DB33F; color: white; padding: 1rem 1.5rem;">
        <h3 style="font-size: 1.25rem; margin: 0; display: flex; align-items: center;">
          <img src="https://api.iconify.design/material-symbols:layers.svg?color=white" width="24" height="24" alt="Layers" style="margin-right: 0.75rem;" />
          Cards com Efeitos
        </h3>
      </div>
      <div style="padding: 1.5rem;">
        <p>Cards com efeitos de profundidade e flutuação para destacar soluções do BotZap.</p>
      
```jsx
// src/components/stunning/GlowyCard.jsx
import { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './GlowyCard.css';

function GlowyCard({ title, icon, children }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };
  
  return (
    <motion.div
      ref={cardRef}
      className="glowy-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ z: 10 }}
    >
      <div className="card-content">
        <div className="card-icon">{icon}</div>
        <h3>{title}</h3>
        <div>{children}</div>
      </div>
    </motion.div>
  );
}
```
      </div>
    </div>
    
    <!-- Lista com Stagger Effect -->
    <div style="border-radius: 0.75rem; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
      <div style="background-color: #88CE02; color: black; padding: 1rem 1.5rem;">
        <h3 style="font-size: 1.25rem; margin: 0; display: flex; align-items: center;">
          <img src="https://api.iconify.design/material-symbols:format-list-bulleted.svg?color=black" width="24" height="24" alt="List" style="margin-right: 0.75rem;" />
          Lista com Stagger
        </h3>
      </div>
      <div style="padding: 1.5rem;">
        <p>Efeito de entrada sequencial para listas, como depoimentos e recursos.</p>
      
```jsx
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

function FeaturesList({ features }) {
  return (
    <motion.ul
      className="features-list"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {features.map((feature, index) => (
        <motion.li 
          key={index} 
          variants={itemVariants}
        >
          {feature}
        </motion.li>
      ))}
    </motion.ul>
  );
}
```
      </div>
    </div>
  </div>
</div>

## 🎮 Modelo 3D

<div style="background: linear-gradient(135deg, rgba(0,85,255,0.05) 0%, rgba(0,163,255,0.05) 100%); padding: 2rem; border-radius: 0.75rem; margin: 2rem 0;">

<h3 style="margin-top: 0; display: flex; align-items: center;">
  <img src="https://api.iconify.design/material-symbols:3d-rotation.svg?color=%230055FF" width="28" height="28" alt="3D" style="margin-right: 0.75rem;" />
  Modelo 3D Interativo do ChatBot
</h3>

O site inclui um modelo 3D interativo do bot que pode ser rotacionado e animado usando Three.js e React Three Fiber. Este componente está implementado em `src/components/BotModel3D.tsx`.

### Implementação

```jsx
// src/components/BotModel3D.tsx
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

function BotModel(props) {
  const { scene } = useGLTF('/models/whatsapp-bot.glb');
  const modelRef = useRef();
  
  // Animação suave de rotação automática
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = 
        Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });
  
  return (
    <motion.primitive
      ref={modelRef}
      object={scene}
      scale={0.5}
      position={[0, -1, 0]}
      animate={{
        y: [0, 0.2, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut"
      }}
      {...props}
    />
  );
}

export default function BotModel3D() {
  return (
    <div className="bot-model-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ height: '400px' }}
      >
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1} 
        />
        <Suspense fallback={null}>
          <BotModel />
          <OrbitControls 
            enablePan={false} 
            enableZoom={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
```

### Uso no Site

```jsx
// src/components/Hero.jsx
import BotModel3D from './BotModel3D';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>BotZap: Automatize seu WhatsApp</h1>
        <p>Solução completa para atendimento e marketing no WhatsApp</p>
        <button className="cta-button">Comece Agora</button>
      </div>
      <div className="hero-image">
        <BotModel3D />
      </div>
    </section>
  );
}
```

<div style="margin-top: 1rem; padding: 0.75rem; background-color: rgba(0, 85, 255, 0.08); border-radius: 0.5rem; border-left: 3px solid #0055FF;">
  <strong>⚠️ Otimização:</strong> O modelo 3D só é carregado em dispositivos com capacidade adequada de renderização, com fallback para uma imagem PNG em dispositivos de menor capacidade.
</div>

</div>

## 🧪 Testes de Animação

<div style="margin: 2rem 0;">
  <div style="background-color: #f8f9fb; border-radius: 0.75rem; padding: 2rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <h3 style="margin-top: 0; display: flex; align-items: center;">
      <img src="https://api.iconify.design/material-symbols:ab-testing.svg?color=%230055FF" width="28" height="28" alt="A/B Testing" style="margin-right: 0.75rem;" />
      A/B Testing de Animações
    </h3>
    
    <p>O site implementa um sistema de testes A/B para avaliar o impacto das animações na experiência do usuário e nas métricas de conversão.</p>
    
```jsx
// src/lib/animations/AnimationABTest.tsx
import { ReactNode, useEffect } from 'react';
import { useAnimationTest } from './useAnimationTest';

interface AnimationABTestProps {
  testId: string;
  variantA: ReactNode;
  variantB: ReactNode;
}

export function AnimationABTest({ 
  testId, 
  variantA, 
  variantB 
}: AnimationABTestProps) {
  const { variant, logImpression } = useAnimationTest(testId);
  
  useEffect(() => {
    // Registrar impressão para análise
    logImpression(testId, variant);
  }, [testId, variant, logImpression]);
  
  return variant === 'A' ? variantA : variantB;
}
```

```jsx
// src/lib/animations/useAnimationTest.ts
import { useState, useEffect } from 'react';
import useAnalytics from '../useAnalytics';

export function useAnimationTest(testId: string) {
  const [variant, setVariant] = useState<'A' | 'B'>('A');
  const { logEvent } = useAnalytics();
  
  useEffect(() => {
    // Atribuição determinística ou aleatória
    const storedVariant = localStorage.getItem(`animation_test_${testId}`);
    
    if (storedVariant === 'A' || storedVariant === 'B') {
      setVariant(storedVariant);
    } else {
      // Divisão 50/50 para novos usuários
      const newVariant = Math.random() < 0.5 ? 'A' : 'B';
      localStorage.setItem(`animation_test_${testId}`, newVariant);
      setVariant(newVariant);
    }
  }, [testId]);
  
  const logImpression = (testId: string, variant: 'A' | 'B') => {
    logEvent('animation_test_impression', {
      test_id: testId,
      variant,
    });
  };
  
  const logConversion = (testId: string, variant: 'A' | 'B') => {
    logEvent('animation_test_conversion', {
      test_id: testId,
      variant,
    });
  };
  
  return { variant, logImpression, logConversion };
}
```

### Exemplo de Uso

```jsx
import { AnimationABTest } from '../lib/animations/AnimationABTest';

function CallToAction() {
  return (
    <div className="cta-section">
      <h2>Pronto para automatizar seu atendimento?</h2>
      <AnimationABTest
        testId="cta_button_animation"
        variantA={
          // Versão com animação sutil
          <AnimatedButton className="primary">
            Comece agora
          </AnimatedButton>
        }
        variantB={
          // Versão com animação mais chamativa
          <PulsatingButton className="primary">
            Comece agora
          </PulsatingButton>
        }
      />
    </div>
  );
}
```

<div style="margin-top: 1.5rem; display: flex; gap: 1rem;">
  <div style="flex: 1; background-color: white; padding: 1rem; border-radius: 0.5rem; border: 1px solid #e2e8f0;">
    <h4 style="margin-top: 0;">Métricas monitoradas</h4>
    <ul style="padding-left: 1.5rem; margin-bottom: 0;">
      <li>Taxa de conversão (CTA clicks)</li>
      <li>Tempo de interação</li>
      <li>Taxa de rejeição</li>
      <li>Tempo de carregamento</li>
    </ul>
  </div>
  <div style="flex: 1; background-color: white; padding: 1rem; border-radius: 0.5rem; border: 1px solid #e2e8f0;">
    <h4 style="margin-top: 0;">Testes ativos</h4>
    <ul style="padding-left: 1.5rem; margin-bottom: 0;">
      <li>Hero animation (scroll vs. auto)</li>
      <li>CTA button style</li>
      <li>Página inicial com/sem parallax</li>
      <li>Transições de página</li>
    </ul>
  </div>
</div>

  </div>
</div>

## 🚀 Otimização de Performance

<div style="margin: 2rem 0;">
  <div style="border-radius: 0.75rem; padding: 2rem; background: linear-gradient(135deg, rgba(0,85,255,0.05) 0%, rgba(100,100,255,0.05) 100%); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    
<h3 style="margin-top: 0;">Estratégias para Otimização</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
  <!-- Redução de Layout Shifts -->
  <div style="background-color: white; border-radius: 0.5rem; padding: 1.5rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <div style="width: 40px; height: 40px; border-radius: 50%; background-color: rgba(0, 85, 255, 0.1); display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
        <img src="https://api.iconify.design/material-symbols:view-compact.svg?color=%230055FF" width="24" height="24" alt="Layout" />
      </div>
      <h4 style="margin: 0;">Redução de Layout Shifts</h4>
    </div>
    <p>Reservar espaço para elementos animados antes que sejam carregados.</p>
    <div style="background-color: #f8f9fb; padding: 0.75rem; border-radius: 0.5rem; margin-top: 0.5rem; font-size: 0.9rem;">
      <code>height: auto; min-height: 300px;</code>
    </div>
  </div>
  
  <!-- Redução do Work Thread -->
  <div style="background-color: white; border-radius: 0.5rem; padding: 1.5rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <div style="width: 40px; height: 40px; border-radius: 50%; background-color: rgba(0, 85, 255, 0.1); display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
        <img src="https://api.iconify.design/material-symbols:sprint.svg?color=%230055FF" width="24" height="24" alt="Performance" />
      </div>
      <h4 style="margin: 0;">Redução do Work Thread</h4>
    </div>
    <p>Usar a GPU para animações sempre que possível.</p>
    <div style="background-color: #f8f9fb; padding: 0.75rem; border-radius: 0.5rem; margin-top: 0.5rem; font-size: 0.9rem;">
      <code>transform, opacity, filter</code> em vez de <code>width, height, top, left</code>
    </div>
  </div>
  
  <!-- Priorização Condicional -->
  <div style="background-color: white; border-radius: 0.5rem; padding: 1.5rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <div style="width: 40px; height: 40px; border-radius: 50%; background-color: rgba(0, 85, 255, 0.1); display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
        <img src="https://api.iconify.design/material-symbols:phone-iphone.svg?color=%230055FF" width="24" height="24" alt="Mobile" />
      </div>
      <h4 style="margin: 0;">Priorização Condicional</h4>
    </div>
    <p>Desativar animações complexas em dispositivos de baixo desempenho.</p>
    <div style="background-color: #f8f9fb; padding: 0.75rem; border-radius: 0.5rem; margin-top: 0.5rem; font-size: 0.9rem;">
      <code>const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')</code>
    </div>
  </div>
</div>

<h4>Estratégias de Carregamento</h4>

```jsx
// Componente que carregar o modelo 3D somente quando visível
import { lazy, Suspense, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Lazy load do componente pesado
const HeavyAnimation = lazy(() => import('./HeavyAnimation'));

function OptimizedSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '100px 0px',
  });
  
  return (
    <div ref={ref} style={{ minHeight: '300px' }}>
      {inView && (
        <Suspense fallback={<SimpleLoadingAnimation />}>
          <HeavyAnimation />
        </Suspense>
      )}
    </div>
  );
}
```

<div style="margin-top: 1.5rem; padding: 1rem; background-color: rgba(255, 255, 255, 0.6); border-radius: 0.5rem; border-left: 4px solid #0055FF;">
  <div style="display: flex; align-items: flex-start;">
    <img src="https://api.iconify.design/material-symbols:lightbulb.svg?color=%230055FF" width="24" height="24" alt="Tip" style="margin-right: 0.75rem; margin-top: 0.125rem;" />
    <div>
      <strong>Dica de Performance:</strong> Use o hook <code>useInView</code> do react-intersection-observer para carregar e ativar animações somente quando elas estiverem visíveis na viewport, reduzindo significativamente o impacto no desempenho durante a rolagem.
    </div>
  </div>
</div>

  </div>
</div>

## ✅ Boas Práticas

<div style="margin: 2rem 0 3rem;">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
    <!-- Prática 1 -->
    <div style="border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(0, 85, 255, 0.05); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
      <div style="display: flex; align-items: center; margin-bottom: 1rem;">
        <div style="width: 50px; height: 50px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; margin-right: 1rem; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
          <img src="https://api.iconify.design/material-symbols:accessible.svg?color=%230055FF" width="30" height="30" alt="Accessibility" />
        </div>
        <h3 style="font-size: 1.25rem; margin: 0;">Acessibilidade</h3>
      </div>
      <ul style="padding-left: 1.25rem; margin-bottom: 0;">
        <li>Respeitar <code>prefers-reduced-motion</code></li>
        <li>Evitar animações com flash (epilepsia)</li>
        <li>Manter contraste e legibilidade</li>
        <li>Não depender apenas de animação para feedback</li>
      </ul>
      <div style="margin-top: 1rem; padding: 0.75rem; background-color: rgba(255, 255, 255, 0.5); border-radius: 0.5rem; border-left: 3px solid #0055FF;">
        <strong>📑 Referência:</strong> <a href="https://web.dev/articles/prefers-reduced-motion" style="color: #0055FF;">web.dev/prefers-reduced-motion</a>
      </div>
    </div>
    
    <!-- Prática 2 -->
    <div style="border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(109, 179, 63, 0.05); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
      <div style="display: flex; align-items: center; margin-bottom: 1rem;">
        <div style="width: 50px; height: 50px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; margin-right: 1rem; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
          <img src="https://api.iconify.design/material-symbols:balance.svg?color=%236DB33F" width="30" height="30" alt="Balance" />
        </div>
        <h3 style="font-size: 1.25rem; margin: 0;">Moderação</h3>
      </div>
      <ul style="padding-left: 1.25rem; margin-bottom: 0;">
        <li>Animações sutis têm mais impacto</li>
        <li>Evitar múltiplas animações concorrentes</li>
        <li>Priorizar animações com valor funcional</li>
        <li>Manter consistência entre animações</li>
      </ul>
      <div style="margin-top: 1rem; padding: 0.75rem; background-color: rgba(255, 255, 255, 0.5); border-radius: 0.5rem; border-left: 3px solid #6DB33F;">
        <strong>⚡ Regra:</strong> Se uma animação não melhora a UX, ela não deve existir.
      </div>
    </div>
    
    <!-- Prática 3 -->
    <div style="border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(136, 206, 2, 0.05); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
      <div style="display: flex; align-items: center; margin-bottom: 1rem;">
        <div style="width: 50px; height: 50px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; margin-right: 1rem; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
          <img src="https://api.iconify.design/material-symbols:semantic-segmentation.svg?color=%2388CE02" width="30" height="30" alt="Semantic" />
        </div>
        <h3 style="font-size: 1.25rem; margin: 0;">Propósito</h3>
      </div>
      <ul style="padding-left: 1.25rem; margin-bottom: 0;">
        <li>Usar animações para guiar o fluxo de atenção</li>
        <li>Oferecer feedback visual de ações</li>
        <li>Reduzir a sensação de espera em processos</li>
        <li>Conectar elementos relacionados</li>
        <li>Reforçar hierarquia de informação</li>
      </ul>
      <div style="margin-top: 1rem; padding: 0.75rem; background-color: rgba(255, 255, 255, 0.5); border-radius: 0.5rem; border-left: 3px solid #88CE02;">
        <strong>🎯 Objetivo:</strong> Animações devem contar uma história e guiar o usuário.
      </div>
    </div>
  </div>
</div>

## 🔄 Compatibilidade com React 19

<div align="center">
  <img src="https://api.iconify.design/logos:react.svg" width="48" height="48" alt="React 19" />
</div>

<div style="background: linear-gradient(135deg, rgba(0,85,255,0.05) 0%, rgba(0,85,255,0.1) 100%); padding: 2rem; border-radius: 0.75rem; margin: 1.5rem 0;">

O sistema de animações do BotZap foi atualizado para funcionar perfeitamente com o React 19. Esta seção descreve as alterações realizadas para garantir a compatibilidade e aproveitar as vantagens do novo runtime do React.

</div>

### Atualizações para React 19

#### Melhorias na Configuração do Framer Motion

A estrutura de configuração do Framer Motion foi atualizada para ser mais tipada e compatível com o React 19:

```typescript
// Configuração atualizada
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
```

#### Correções nas Propriedades de Componentes

Os componentes de animação agora utilizam tipagem estrita para garantir compatibilidade com o React 19:

```tsx
// Antes
<motion.div
  initial={selectedVariant.initial}
  animate={selectedVariant.animate}
  exit={selectedVariant.exit}
/>

// Depois
<motion.div
  initial={selectedVariant.initial ? { ...selectedVariant.initial } : false}
  animate={selectedVariant.animate ? { ...selectedVariant.animate } : undefined}
  exit={selectedVariant.exit ? { ...selectedVariant.exit } : undefined}
/>
```

#### Ajustes em Componentes Animados

Os componentes `GlowyCardWrapper` e `GlowyCard` receberam ajustes em suas props para compatibilidade com o novo sistema de tipos:

- Adicionada prop `interactive` obrigatória para `GlowyCardWrapper`
- Adicionada prop `className` obrigatória para `GlowyCard`

#### Benefícios da Migração

- **Melhor Performance**: O React 19 oferece renderização mais eficiente para animações
- **Melhor Tipagem**: Detecção de erros mais precisa durante o desenvolvimento
- **Prevenção de Vazamentos de Memória**: Melhor gerenciamento de recursos para animações

</div>

---

<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 3rem; padding-top: 1rem; border-top: 1px solid #e2e8f0;">
  <div>
    <a href="../README.md" style="display: inline-flex; align-items: center; text-decoration: none; color: #0055FF;">
      <img src="https://api.iconify.design/material-symbols:arrow-back.svg?color=%230055FF" width="20" height="20" alt="Back" style="margin-right: 0.5rem;" />
      Voltar para README
    </a>
  </div>
  <div>
    <p style="margin: 0; color: #718096; font-size: 0.875rem;">Data da última atualização: 6 de maio de 2025</p>
  </div>
  <div>
    <a href="TECHNICAL.md" style="display: inline-flex; align-items: center; text-decoration: none; color: #0055FF;">
      Próximo: Documentação Técnica
      <img src="https://api.iconify.design/material-symbols:arrow-forward.svg?color=%230055FF" width="20" height="20" alt="Forward" style="margin-left: 0.5rem;" />
    </a>
  </div>
</div>