# <img src="https://api.iconify.design/material-symbols:code.svg?color=%23333" width="32"/> Documentação Técnica BotZap

<div align="center">

[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.1.0-61DBFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**Documentação técnica completa do projeto BotZap**

</div>

<div align="center">
  <a href="../README.md"><img src="https://img.shields.io/badge/🏠_Voltar_para_README-007396?style=for-the-badge" alt="Voltar para README"></a>
  <a href="REACT.md"><img src="https://img.shields.io/badge/⚛️_Documentação_React-61DBFB?style=for-the-badge&logo=react&logoColor=white" alt="Documentação React"></a>
  <a href="DEPLOY.md"><img src="https://img.shields.io/badge/🚀_Guia_de_Deploy-DC382D?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Guia de Deploy"></a>
</div>

---

## 📋 Índice

<div align="center">
  <table>
    <tr>
      <td align="center"><a href="#-visão-geral-da-arquitetura"><img src="https://api.iconify.design/material-symbols:architecture.svg" width="24"/><br/>Arquitetura</a></td>
      <td align="center"><a href="#-stack-tecnológica"><img src="https://api.iconify.design/material-symbols:stack.svg" width="24"/><br/>Stack</a></td>
      <td align="center"><a href="#-convenções-e-padrões"><img src="https://api.iconify.design/material-symbols:format-list-numbered.svg" width="24"/><br/>Convenções</a></td>
      <td align="center"><a href="#-estrutura-do-projeto"><img src="https://api.iconify.design/material-symbols:folder-structure.svg" width="24"/><br/>Estrutura</a></td>
    </tr>
    <tr>
      <td align="center"><a href="#-configurações"><img src="https://api.iconify.design/material-symbols:settings.svg" width="24"/><br/>Configurações</a></td>
      <td align="center"><a href="#-fluxo-de-dados"><img src="https://api.iconify.design/material-symbols:data-flow.svg" width="24"/><br/>Fluxo de Dados</a></td>
      <td align="center"><a href="#-performance"><img src="https://api.iconify.design/material-symbols:speed.svg" width="24"/><br/>Performance</a></td>
      <td align="center"><a href="#-segurança"><img src="https://api.iconify.design/material-symbols:security.svg" width="24"/><br/>Segurança</a></td>
    </tr>
  </table>
</div>

## 🏗️ Visão Geral da Arquitetura

<div align="center">
  <img src="https://api.iconify.design/material-symbols:architecture.svg" width="84" height="84" alt="Architecture" />
</div>

<div style="background: linear-gradient(135deg, rgba(51,51,51,0.05) 0%, rgba(51,51,51,0.1) 100%); padding: 2rem; border-radius: 0.75rem; margin: 1.5rem 0;">

O BotZap utiliza uma arquitetura de componentes moderna baseada em React, com foco em reusabilidade, manutenibilidade e performance. A aplicação segue os princípios de Single Page Application (SPA) com:

- **Renderização Client-side** - Aproveitando a velocidade e interatividade do React
- **Componentização** - Dividindo a UI em elementos modulares e reutilizáveis
- **Gerenciamento de Estado** - Utilizando Context API e hooks personalizados
- **Roteamento** - React Router para navegação fluida entre páginas
- **Progressive Web App (PWA)** - Suporte a funcionamento offline e instalação
- **Responsividade** - Design adaptado para todos os dispositivos

</div>

### Diagrama da Arquitetura

<div style="background-color: #f6f8fa; padding: 1.5rem; border-radius: 0.5rem; margin: 1.5rem 0; text-align: center;">
```
┌───────────────┐     ┌───────────────┐     ┌───────────────┐
│    Cliente    │     │   Servidor    │     │   Serviços    │
│  (Navegador)  │     │   Express     │     │   Externos    │
└───────┬───────┘     └───────┬───────┘     └───────┬───────┘
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐     ┌───────────────┐     ┌───────────────┐
│     React     │     │   API REST    │     │   Integração  │
│  Components   │◄────┤   Endpoints   │◄────┤    WhatsApp   │
└───────┬───────┘     └───────────────┘     └───────────────┘
        │
        ▼
┌───────────────┐
│  Service      │
│  Workers      │
└───────────────┘
```
</div>

## 🔧 Stack Tecnológica

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
  <!-- Frontend -->
  <div style="border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(51,51,51,0.05); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <div style="width: 48px; height: 48px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; margin-right: 1rem; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        <img src="https://api.iconify.design/material-symbols:web.svg" width="28" height="28" alt="Frontend" />
      </div>
      <h3 style="font-size: 1.25rem; margin: 0;">Frontend</h3>
    </div>    <ul style="padding-left: 1.5rem;">
      <li><strong>React 19.1.0</strong> - Biblioteca para construção de interfaces</li>
      <li><strong>TypeScript 5.8.3</strong> - Superset tipado de JavaScript</li>
      <li><strong>Vite 4.4.5</strong> - Bundler e dev server</li>
      <li><strong>React Router 7</strong> - Roteamento client-side</li>
      <li><strong>Tailwind CSS</strong> - Framework CSS utilitário</li>
      <li><strong>Framer Motion 12.9.4</strong> - Biblioteca de animações</li>
      <li><strong>Three.js</strong> - Renderização 3D para modelos</li>
    </ul>
  </div>
  
  <!-- Backend -->
  <div style="border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(51,51,51,0.05); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <div style="width: 48px; height: 48px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; margin-right: 1rem; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        <img src="https://api.iconify.design/material-symbols:server.svg" width="28" height="28" alt="Backend" />
      </div>
      <h3 style="font-size: 1.25rem; margin: 0;">Backend</h3>
    </div>
    <ul style="padding-left: 1.5rem;">
      <li><strong>Node.js</strong> - Ambiente de execução JavaScript</li>
      <li><strong>Express</strong> - Framework web minimalista</li>
      <li><strong>Axios</strong> - Cliente HTTP baseado em promises</li>
      <li><strong>Workbox</strong> - Biblioteca para PWA e Service Workers</li>
      <li><strong>Compression</strong> - Middleware para compressão de respostas</li>
    </ul>
  </div>
  
  <!-- DevOps & Ferramentas -->
  <div style="border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(51,51,51,0.05); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <div style="width: 48px; height: 48px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; margin-right: 1rem; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        <img src="https://api.iconify.design/material-symbols:tools.svg" width="28" height="28" alt="Tools" />
      </div>
      <h3 style="font-size: 1.25rem; margin: 0;">DevOps & Ferramentas</h3>
    </div>
    <ul style="padding-left: 1.5rem;">
      <li><strong>ESLint</strong> - Linting de JavaScript/TypeScript</li>
      <li><strong>PostCSS</strong> - Transformação de CSS com plugins</li>
      <li><strong>Sharp</strong> - Processamento e otimização de imagens</li>
      <li><strong>Git/GitHub</strong> - Controle de versão e colaboração</li>
      <li><strong>Vercel/Netlify</strong> - Plataformas de deploy</li>
    </ul>
  </div>
</div>

## 📐 Convenções e Padrões

<div style="background: linear-gradient(135deg, rgba(51,51,51,0.05) 0%, rgba(51,51,51,0.1) 100%); padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0;">

### Convenções de Nomenclatura

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1rem 0;">
  <div style="background-color: white; border-radius: 0.5rem; padding: 1rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <h4 style="font-size: 1.1rem; display: flex; align-items: center;">
      <img src="https://api.iconify.design/material-symbols:browse-gallery.svg" width="20" height="20" alt="Components" style="margin-right: 0.5rem;" />
      Componentes
    </h4>
    <ul style="padding-left: 1.5rem; margin: 0.5rem 0; font-size: 0.9rem;">
      <li><strong>PascalCase</strong> para nomes de componentes</li>
      <li>Um componente por arquivo</li>
      <li>Nome do arquivo igual ao nome do componente</li>
      <li>Extensões: <code>.jsx</code> ou <code>.tsx</code></li>
    </ul>
  </div>
  
  <div style="background-color: white; border-radius: 0.5rem; padding: 1rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <h4 style="font-size: 1.1rem; display: flex; align-items: center;">
      <img src="https://api.iconify.design/material-symbols:hook.svg" width="20" height="20" alt="Hooks" style="margin-right: 0.5rem;" />
      Hooks & Utilities
    </h4>
    <ul style="padding-left: 1.5rem; margin: 0.5rem 0; font-size: 0.9rem;">
      <li><strong>camelCase</strong> para hooks e funções</li>
      <li>Prefixo <code>use</code> para hooks personalizados</li>
      <li>Extensões: <code>.js</code>, <code>.ts</code></li>
      <li>Agrupados na pasta <code>lib/</code> ou subpastas específicas</li>
    </ul>
  </div>
  
  <div style="background-color: white; border-radius: 0.5rem; padding: 1rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <h4 style="font-size: 1.1rem; display: flex; align-items: center;">
      <img src="https://api.iconify.design/material-symbols:style.svg" width="20" height="20" alt="Styles" style="margin-right: 0.5rem;" />
      Estilos
    </h4>
    <ul style="padding-left: 1.5rem; margin: 0.5rem 0; font-size: 0.9rem;">
      <li>Classes Tailwind diretamente nos componentes</li>
      <li>CSS modular quando necessário (<code>.module.css</code>)</li>
      <li>Variáveis CSS globais definidas em <code>index.css</code></li>
      <li>Animações em arquivos separados na pasta <code>lib/animations/</code></li>
    </ul>
  </div>
</div>

### Padrões de Código

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0; font-family: monospace; font-size: 0.9rem;">

```tsx
// Exemplo de padrão de componente
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { ComponentProps } from './types';
import { useAnalytics } from '../lib/useAnalytics';

export default function ExampleComponent({ 
  title, 
  children,
  variant = 'default' 
}: ComponentProps): JSX.Element {
  // Hooks no topo
  const [isVisible, setIsVisible] = useState(false);
  const { trackEvent } = useAnalytics();
  
  // Efeitos
  useEffect(() => {
    // Lógica de efeito
    return () => {
      // Cleanup
    };
  }, []);
  
  // Handlers
  const handleClick = () => {
    trackEvent('component_click');
    setIsVisible(prev => !prev);
  };
  
  // Renderização
  return (
    <motion.div
      className="p-4 rounded-lg shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="content">{children}</div>
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle
      </button>
    </motion.div>
  );
}
```

</div>

</div>

## 📁 Estrutura do Projeto

<div style="background-color: #f6f8fa; padding: 1.5rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```
botzap-site/
├── docs/                    # Documentação técnica
├── public/                  # Assets estáticos servidos como estão
│   ├── icons/               # Ícones da aplicação e PWA
│   ├── models/              # Modelos 3D para Three.js
│   ├── manifest.json        # Manifesto PWA
│   └── offline.html         # Página de fallback offline
├── scripts/                 # Scripts de automação e build
├── src/
│   ├── assets/              # Assets processados pelo bundler
│   ├── components/          # Componentes React reutilizáveis
│   │   └── stunning/        # Componentes visuais destacados
│   ├── layouts/             # Estruturas de página e layouts
│   ├── lib/                 # Utilitários e hooks
│   │   └── animations/      # Configurações de animação
│   ├── App.jsx              # Componente raiz da aplicação
│   ├── App.css              # Estilos globais da aplicação
│   ├── index.css            # CSS de reset e variáveis
│   ├── main.jsx             # Ponto de entrada da aplicação
│   ├── routes.jsx           # Configuração de rotas
│   └── service-worker.js    # Configuração de service worker
├── eslint.config.js         # Configuração do ESLint
├── postcss.config.js        # Configuração do PostCSS
├── tailwind.config.js       # Configuração do Tailwind
├── tsconfig.json            # Configuração do TypeScript
├── vite.config.js           # Configuração do Vite
├── package.json             # Dependências e scripts
└── README.md                # Documentação principal
```

</div>

### Organização dos Componentes

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
  <!-- Componentes -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: rgba(51,51,51,0.05); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <h4 style="font-size: 1.1rem; margin: 0 0 0.75rem 0;">Componentes</h4>
    <ul style="list-style-type: none; padding: 0; margin: 0;">
      <li style="margin-bottom: 0.5rem; display: flex; align-items: center;">
        <span style="color: #4a5568; margin-right: 0.5rem;">📄</span>
        <div>
          <code style="font-weight: bold;">Navbar.jsx</code>
          <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: #4a5568;">Navegação principal do site</p>
        </div>
      </li>
      <li style="margin-bottom: 0.5rem; display: flex; align-items: center;">
        <span style="color: #4a5568; margin-right: 0.5rem;">📄</span>
        <div>
          <code style="font-weight: bold;">Hero.jsx</code>
          <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: #4a5568;">Seção principal da página inicial</p>
        </div>
      </li>
      <li style="margin-bottom: 0.5rem; display: flex; align-items: center;">
        <span style="color: #4a5568; margin-right: 0.5rem;">📄</span>
        <div>
          <code style="font-weight: bold;">Features.jsx</code>
          <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: #4a5568;">Exibição das funcionalidades do produto</p>
        </div>
      </li>
      <li style="margin-bottom: 0.5rem; display: flex; align-items: center;">
        <span style="color: #4a5568; margin-right: 0.5rem;">📄</span>
        <div>
          <code style="font-weight: bold;">Footer.jsx</code>
          <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: #4a5568;">Rodapé com links e informações legais</p>
        </div>
      </li>
    </ul>
  </div>
  
  <!-- Layouts -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: rgba(51,51,51,0.05); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <h4 style="font-size: 1.1rem; margin: 0 0 0.75rem 0;">Layouts</h4>
    <ul style="list-style-type: none; padding: 0; margin: 0;">
      <li style="margin-bottom: 0.5rem; display: flex; align-items: center;">
        <span style="color: #4a5568; margin-right: 0.5rem;">📄</span>
        <div>
          <code style="font-weight: bold;">MainLayout.jsx</code>
          <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: #4a5568;">Layout principal com navbar e footer</p>
        </div>
      </li>
    </ul>
  </div>
  
  <!-- Páginas -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: rgba(51,51,51,0.05); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <h4 style="font-size: 1.1rem; margin: 0 0 0.75rem 0;">Páginas</h4>
    <ul style="list-style-type: none; padding: 0; margin: 0;">
      <li style="margin-bottom: 0.5rem; display: flex; align-items: center;">
        <span style="color: #4a5568; margin-right: 0.5rem;">📄</span>
        <div>
          <code style="font-weight: bold;">Home.jsx</code>
          <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: #4a5568;">Página inicial</p>
        </div>
      </li>
      <li style="margin-bottom: 0.5rem; display: flex; align-items: center;">
        <span style="color: #4a5568; margin-right: 0.5rem;">📄</span>
        <div>
          <code style="font-weight: bold;">TermosDeUso.jsx</code>
          <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: #4a5568;">Página de termos legais</p>
        </div>
      </li>
      <li style="margin-bottom: 0.5rem; display: flex; align-items: center;">
        <span style="color: #4a5568; margin-right: 0.5rem;">📄</span>
        <div>
          <code style="font-weight: bold;">PoliticaDePrivacidade.jsx</code>
          <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: #4a5568;">Política de privacidade</p>
        </div>
      </li>
      <li style="margin-bottom: 0.5rem; display: flex; align-items: center;">
        <span style="color: #4a5568; margin-right: 0.5rem;">📄</span>
        <div>
          <code style="font-weight: bold;">NotFound.jsx</code>
          <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: #4a5568;">Página 404</p>
        </div>
      </li>
    </ul>
  </div>
</div>

## ⚙️ Configurações

<div style="background: linear-gradient(135deg, rgba(51,51,51,0.05) 0%, rgba(51,51,51,0.1) 100%); padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0;">

### Principais Arquivos de Configuração

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin: 1rem 0;">
  <!-- Vite -->
  <div style="background-color: white; border-radius: 0.5rem; padding: 1rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <h4 style="font-size: 1.1rem; display: flex; align-items: center;">
      <img src="https://api.iconify.design/logos:vitejs.svg" width="20" height="20" alt="Vite" style="margin-right: 0.5rem;" />
      vite.config.js
    </h4>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; margin: 0.5rem 0; font-family: monospace; font-size: 0.85rem;">
      <pre style="margin: 0;">import { defineConfig } from 'vite';
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
});</pre>
    </div>
  </div>
  
  <!-- Tailwind -->
  <div style="background-color: white; border-radius: 0.5rem; padding: 1rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <h4 style="font-size: 1.1rem; display: flex; align-items: center;">
      <img src="https://api.iconify.design/logos:tailwindcss-icon.svg" width="20" height="20" alt="Tailwind" style="margin-right: 0.5rem;" />
      tailwind.config.js
    </h4>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; margin: 0.5rem 0; font-family: monospace; font-size: 0.85rem;">
      <pre style="margin: 0;">/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#10B981",
      }
    },
  },
  plugins: [],
};</pre>
    </div>
  </div>
  
  <!-- TypeScript -->
  <div style="background-color: white; border-radius: 0.5rem; padding: 1rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <h4 style="font-size: 1.1rem; display: flex; align-items: center;">
      <img src="https://api.iconify.design/logos:typescript-icon.svg" width="20" height="20" alt="TypeScript" style="margin-right: 0.5rem;" />
      tsconfig.json
    </h4>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; margin: 0.5rem 0; font-family: monospace; font-size: 0.85rem;">
      <pre style="margin: 0;">{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "allowSyntheticDefaultImports": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}</pre>
    </div>
  </div>
</div>

### Variáveis de Ambiente

O projeto utiliza arquivos <code>.env</code> para configuração de variáveis de ambiente:

<div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; margin: 0.5rem 0; font-family: monospace; font-size: 0.85rem;">
<pre style="margin: 0;"># .env.example
VITE_API_URL=https://api.exemplo.com
VITE_ANALYTICS_ID=UA-XXXXX-Y
VITE_ENABLE_PWA=true
VITE_WHATSAPP_NUMBER=5511999999999</pre>
</div>

<div style="margin-top: 1rem; padding: 0.75rem; background-color: #fff3cd; border-radius: 0.5rem; border-left: 3px solid #ffc107; font-size: 0.9rem;">
  <span style="font-weight: bold;">⚠️ Nota:</span> Variáveis de ambiente com o prefixo <code>VITE_</code> são expostas no cliente. Não armazene segredos como chaves privadas nessas variáveis.
</div>

</div>

## 🔄 Fluxo de Dados

<div style="background-color: #f8f9fa; padding: 1.5rem; border-radius: 0.5rem; margin: 1.5rem 0; text-align: center;">
```
┌───────────────┐        ┌───────────────┐        ┌───────────────┐
│               │        │               │        │               │
│   Componente  │◄──────►│   Context     │◄──────►│    Estado     │
│               │ Props  │   API         │        │    Global     │
└───────┬───────┘        └───────────────┘        └───────┬───────┘
        │                                                 │
        │                                                 │
        ▼                                                 ▼
┌───────────────┐        ┌───────────────┐        ┌───────────────┐
│               │        │               │        │               │
│   Estado      │        │   Hooks       │        │    Service    │
│   Local       │◄──────►│   Custom      │◄──────►│    Workers    │
│               │        │               │        │               │
└───────────────┘        └───────────────┘        └───────────────┘
```
</div>

### Gerenciamento de Estado

<div style="margin: 1rem 0; padding: 1rem; background-color: rgba(51,51,51,0.05); border-radius: 0.5rem;">
  <h4 style="margin-top: 0;">Estados Gerenciados no Projeto</h4>
  <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
    <thead>
      <tr style="background-color: #eaecef;">
        <th style="padding: 0.75rem; text-align: left; border-bottom: 1px solid #ddd;">Tipo de Estado</th>
        <th style="padding: 0.75rem; text-align: left; border-bottom: 1px solid #ddd;">Implementação</th>
        <th style="padding: 0.75rem; text-align: left; border-bottom: 1px solid #ddd;">Uso</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">UI Local</td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;"><code>useState</code>, <code>useReducer</code></td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Estados de componentes isolados, como menus dropdowns, formulários</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Temas</td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Context API + <code>localStorage</code></td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Preferências de tema (claro/escuro), persistência entre sessões</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Preferências de Usuário</td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Context API + <code>localStorage</code></td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Configurações, consentimento de cookies, idioma</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Estado do Chatbot</td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;"><code>useReducer</code> + Context API</td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Mensagens, histórico de conversas, status de conexão</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Cache de API</td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Custom hooks + <code>sessionStorage</code></td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Respostas de API em cache para reduzir chamadas repetidas</td>
      </tr>
    </tbody>
  </table>
</div>

## 🚀 Performance

<div align="center">
  <img src="https://api.iconify.design/material-symbols:speed.svg" width="64" height="64" alt="Performance" />
</div>

<div style="background: linear-gradient(135deg, rgba(51,51,51,0.05) 0%, rgba(51,51,51,0.1) 100%); padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0;">

### Otimizações Implementadas

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
  <!-- Bundle Size -->
  <div style="background-color: white; border-radius: 0.5rem; padding: 1rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <h4 style="font-size: 1.1rem; display: flex; align-items: center;">
      <img src="https://api.iconify.design/material-symbols:compress.svg" width="20" height="20" alt="Bundle" style="margin-right: 0.5rem;" />
      Otimização de Bundle
    </h4>
    <ul style="padding-left: 1.5rem; margin: 0.5rem 0; font-size: 0.9rem;">
      <li>Code splitting com <code>React.lazy</code> e <code>Suspense</code></li>
      <li>Tree-shaking eficiente pelo Vite</li>
      <li>Importação dinâmica de bibliotecas pesadas</li>
      <li>Análise de bundle com <code>rollup-plugin-visualizer</code></li>
    </ul>
  </div>
  
  <!-- Assets -->
  <div style="background-color: white; border-radius: 0.5rem; padding: 1rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <h4 style="font-size: 1.1rem; display: flex; align-items: center;">
      <img src="https://api.iconify.design/material-symbols:image.svg" width="20" height="20" alt="Assets" style="margin-right: 0.5rem;" />
      Otimização de Assets
    </h4>
    <ul style="padding-left: 1.5rem; margin: 0.5rem 0; font-size: 0.9rem;">
      <li>Imagens webp e avif otimizadas</li>
      <li>Compressão de SVGs com SVGO</li>
      <li>Carregamento preguiçoso de imagens</li>
      <li>Imagens responsivas com <code>srcset</code></li>
    </ul>
  </div>
  
  <!-- Rendering -->
  <div style="background-color: white; border-radius: 0.5rem; padding: 1rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <h4 style="font-size: 1.1rem; display: flex; align-items: center;">
      <img src="https://api.iconify.design/material-symbols:deployed-code.svg" width="20" height="20" alt="Rendering" style="margin-right: 0.5rem;" />
      Renderização Otimizada
    </h4>
    <ul style="padding-left: 1.5rem; margin: 0.5rem 0; font-size: 0.9rem;">
      <li>Memorização com <code>useMemo</code> e <code>useCallback</code></li>
      <li>Componentes puros com <code>React.memo</code></li>
      <li>Virtualização para listas longas</li>
      <li>Priorização de conteúdo crítico</li>
    </ul>
  </div>
  
  <!-- Métricas Web Vitals -->
  <div style="background-color: white; border-radius: 0.5rem; padding: 1rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    <h4 style="font-size: 1.1rem; display: flex; align-items: center;">
      <img src="https://api.iconify.design/material-symbols:monitoring.svg" width="20" height="20" alt="Metrics" style="margin-right: 0.5rem;" />
      Core Web Vitals
    </h4>
    <ul style="padding-left: 1.5rem; margin: 0.5rem 0; font-size: 0.9rem;">
      <li>LCP < 2.5s (Largest Contentful Paint)</li>
      <li>FID < 100ms (First Input Delay)</li>
      <li>CLS < 0.1 (Cumulative Layout Shift)</li>
      <li>Monitoramento com web-vitals.js</li>
    </ul>
  </div>
</div>

### Resultados em Lighthouse

<div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin: 1rem 0;">
  <div style="text-align: center; margin: 0.5rem;">
    <div style="width: 100px; height: 100px; border-radius: 50%; background: conic-gradient(#0cce6b 94%, #e1e1e1 0); display: flex; align-items: center; justify-content: center; margin: 0 auto;">
      <div style="width: 80px; height: 80px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">94</div>
    </div>
    <p style="margin-top: 0.5rem; font-size: 0.9rem;">Performance</p>
  </div>
  
  <div style="text-align: center; margin: 0.5rem;">
    <div style="width: 100px; height: 100px; border-radius: 50%; background: conic-gradient(#0cce6b 100%, #e1e1e1 0); display: flex; align-items: center; justify-content: center; margin: 0 auto;">
      <div style="width: 80px; height: 80px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">100</div>
    </div>
    <p style="margin-top: 0.5rem; font-size: 0.9rem;">Acessibilidade</p>
  </div>
  
  <div style="text-align: center; margin: 0.5rem;">
    <div style="width: 100px; height: 100px; border-radius: 50%; background: conic-gradient(#0cce6b 100%, #e1e1e1 0); display: flex; align-items: center; justify-content: center; margin: 0 auto;">
      <div style="width: 80px; height: 80px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">100</div>
    </div>
    <p style="margin-top: 0.5rem; font-size: 0.9rem;">Melhores Práticas</p>
  </div>
  
  <div style="text-align: center; margin: 0.5rem;">
    <div style="width: 100px; height: 100px; border-radius: 50%; background: conic-gradient(#0cce6b 98%, #e1e1e1 0); display: flex; align-items: center; justify-content: center; margin: 0 auto;">
      <div style="width: 80px; height: 80px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">98</div>
    </div>
    <p style="margin-top: 0.5rem; font-size: 0.9rem;">SEO</p>
  </div>
</div>

</div>

## 🔒 Segurança

<div align="center">
  <img src="https://api.iconify.design/material-symbols:security.svg" width="64" height="64" alt="Security" />
</div>

### Medidas de Segurança

<div style="margin: 1rem 0; padding: 1rem; background-color: rgba(51,51,51,0.05); border-radius: 0.5rem;">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
    <thead>
      <tr style="background-color: #eaecef;">
        <th style="padding: 0.75rem; text-align: left; border-bottom: 1px solid #ddd;">Área</th>
        <th style="padding: 0.75rem; text-align: left; border-bottom: 1px solid #ddd;">Implementação</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;"><strong>HTTPS</strong></td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Forçado em todas as conexões. Certificados obtidos via Let's Encrypt.</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;"><strong>Headers de Segurança</strong></td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">
          <ul style="padding-left: 1.5rem; margin: 0;">
            <li>Content-Security-Policy (CSP)</li>
            <li>X-Content-Type-Options: nosniff</li>
            <li>X-Frame-Options: DENY</li>
            <li>Strict-Transport-Security (HSTS)</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;"><strong>Vulnerabilidades XSS</strong></td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Sanitização de dados de entrada, React escapa HTML por padrão.</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;"><strong>Verificação de Dependências</strong></td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Análise automática com ferramentas como npm audit e Dependabot.</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;"><strong>LGPD/GDPR</strong></td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Banner de cookies, configurações de privacidade, política de privacidade clara.</td>
      </tr>
    </tbody>
  </table>
</div>

<div style="margin-top: 1rem; padding: 0.75rem; background-color: #d4edda; border-radius: 0.5rem; border-left: 3px solid #28a745; font-size: 0.9rem;">
  <span style="font-weight: bold;">✅ Nota de segurança:</span> O projeto passou por auditoria manual e automatizada de vulnerabilidades e segue as melhores práticas da OWASP para aplicações web front-end.
</div>

---

## 🔼 Migração para React 19

<div align="center">
  <img src="https://api.iconify.design/logos:react.svg" width="64" height="64" alt="React 19" />
</div>

<div style="background: linear-gradient(135deg, rgba(97,219,251,0.05) 0%, rgba(97,219,251,0.1) 100%); padding: 2rem; border-radius: 0.75rem; margin: 1.5rem 0;">

Em maio de 2025, o BotZap foi atualizado do React 18.2.0 para o React 19.1.0. Esta seção documenta os aspectos técnicos dessa migração, as mudanças arquiteturais e os benefícios técnicos obtidos.

</div>

### Alterações Técnicas

#### 1. Mudanças Arquiteturais

O React 19 introduziu o React Compiler, uma nova tecnologia que analisa o código React e automaticamente aplica otimizações. Para adotar esta tecnologia, realizamos:

- Ajustes na configuração do Vite para suporte ao React Compiler
- Atualização de dependências para versões compatíveis com React 19
- Adaptação dos padrões de código para aproveitar as otimizações automáticas

#### 2. Tipagem e TypeScript

React 19 trouxe mudanças significativas no sistema de tipos:

- Uso de `React.ReactElement` em vez de `JSX.Element`
- Tipagem mais estrita para propriedades de componentes
- Definições de tipos personalizadas para APIs do navegador (como Web Speech API)

```typescript
// Antes
function Component(): JSX.Element {
  // código
}

// Depois
function Component(): React.ReactElement {
  // código
}
```

#### 3. Alterações em Bibliotecas

A migração exigiu adaptações em várias bibliotecas dependentes:

| Biblioteca | Ação | Motivo |
|------------|------|--------|
| react-helmet-async | Substituído por react-helmet | Incompatibilidade com React 19 |
| framer-motion | Atualizado para v12.9.4 | Suporte ao React 19 |
| react-router-dom | Atualizado para v7.x | Melhor compatibilidade |
| @types/react | Atualizado para v19.x | Definições de tipo para React 19 |

#### 4. Melhor Detecção de APIs do Navegador

Implementamos verificações mais robustas para APIs do navegador:

```typescript
// Antes
if (navigator.share) {
  // usar API
}

// Depois
if ('share' in navigator) {
  // usar API
}
```

### Benefícios Técnicos da Migração

- **Performance**: Aproveitamento do React Compiler para renderização mais eficiente
- **Detecção de Erros**: Sistema de tipos mais rigoroso para prevenção de bugs
- **Bundle Size Otimizado**: Melhor tree-shaking e eliminação de código morto
- **Estabilidade**: Correção de bugs e melhorias de estabilidade na versão mais recente

### Desafios da Migração

- **Compatibilidade de Dependências**: Muitas bibliotecas ainda não são oficialmente compatíveis com React 19
- **Mudanças de API**: Adaptações necessárias para TypeScript e mudanças no React
- **Comportamento de Renderização**: Ajustes devido a diferenças sutis no comportamento de renderização

Para uma análise detalhada da implementação do React 19, consulte o [arquivo REACT.md](./REACT.md).

<div align="center">
  <p>
    <strong>BotZap - Documentação Técnica</strong><br>
    <sub>Atualizado em 6 de maio de 2025 | v2.3.0</sub>
  </p>
</div>