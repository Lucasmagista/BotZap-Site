# <img src="https://api.iconify.design/logos:react-router.svg" width="32"/> React Router no BotZap

<div align="center">

[![React Router](https://img.shields.io/badge/React_Router-7.5.3-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![SPA](https://img.shields.io/badge/Arquitetura-SPA-CA4245?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/docs/glossary.html#single-page-application)
[![Routes](https://img.shields.io/badge/Rotas-Dinâmicas-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/docs/en/v6/getting-started/concepts#defining-routes)

**Documentação do sistema de roteamento do BotZap**

</div>

<div align="center">
  <a href="../README.md"><img src="https://img.shields.io/badge/🏠_Voltar_para_README-007396?style=for-the-badge" alt="Voltar para README"></a>
  <a href="TECHNICAL.md"><img src="https://img.shields.io/badge/🔧_Documentação_Técnica-004D40?style=for-the-badge" alt="Documentação Técnica"></a>
  <a href="REACT.md"><img src="https://img.shields.io/badge/⚛️_React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"></a>
  <a href="ANIMATION.md"><img src="https://img.shields.io/badge/✨_Animações-FF5722?style=for-the-badge" alt="Animações"></a>
</div>

---

## 📋 Índice

<div align="center">
  <table>
    <tr>
      <td align="center"><a href="#️-versão-e-setup"><img src="https://api.iconify.design/material-symbols:settings.svg?color=%23CA4245" width="24"/><br/>Versão e Setup</a></td>
      <td align="center"><a href="#️-estrutura-de-rotas"><img src="https://api.iconify.design/material-symbols:route.svg?color=%23CA4245" width="24"/><br/>Estrutura</a></td>
      <td align="center"><a href="#-navegação"><img src="https://api.iconify.design/material-symbols:navigation.svg?color=%23CA4245" width="24"/><br/>Navegação</a></td>
      <td align="center"><a href="#-parâmetros-e-queries"><img src="https://api.iconify.design/material-symbols:search.svg?color=%23CA4245" width="24"/><br/>Parâmetros</a></td>
    </tr>
    <tr>
      <td align="center"><a href="#-redirecionamentos"><img src="https://api.iconify.design/material-symbols:forward.svg?color=%23CA4245" width="24"/><br/>Redirecionamentos</a></td>
      <td align="center"><a href="#️-rotas-protegidas"><img src="https://api.iconify.design/material-symbols:shield.svg?color=%23CA4245" width="24"/><br/>Proteção</a></td>
      <td align="center"><a href="#-integração-com-servidor"><img src="https://api.iconify.design/material-symbols:cloud.svg?color=%23CA4245" width="24"/><br/>Servidor</a></td>
      <td align="center"><a href="#-boas-práticas"><img src="https://api.iconify.design/material-symbols:check-circle.svg?color=%23CA4245" width="24"/><br/>Práticas</a></td>
    </tr>
  </table>
</div>

## 🛠️ Versão e Setup

<div align="center">
  <img src="https://api.iconify.design/logos:react-router.svg" width="64" height="64" alt="React Router Logo" />
</div>

<div style="background-color: rgba(202, 66, 69, 0.08); border-left: 4px solid #CA4245; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
  <b>🚀 Stack:</b> React Router v7.5.3<br>
  <b>🌟 Compatibilidade:</b> Otimizado para React 19.1.0<br>
  <b>📄 Configuração:</b> <code>main.jsx</code><br>
  <b>🔄 Arquitetura:</b> SPA (Single Page Application)
</div>

<details>
<summary><b>📄 Instalação e Configuração</b></summary>

```bash
# Instalação via NPM
npm install react-router-dom@7.5.3 --legacy-peer-deps
```

> **NOTA**: A flag `--legacy-peer-deps` é necessária para resolver possíveis conflitos de dependências ao usar React 19.

Configuração básica em `main.jsx`:

```jsx
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```
</details>

## ⚛️ React Router 7 com React 19

<div align="center">
  <img src="https://api.iconify.design/logos:react.svg" width="48" height="48" alt="React 19" style="margin-right: 20px;" />
  <img src="https://api.iconify.design/logos:react-router.svg" width="48" height="48" alt="React Router" />
</div>

<div style="background: linear-gradient(135deg, rgba(202, 66, 69, 0.05) 0%, rgba(202, 66, 69, 0.1) 100%); padding: 2rem; border-radius: 0.75rem; margin: 1.5rem 0;">

O BotZap utiliza o React Router 7 em conjunto com o React 19, garantindo o melhor desempenho e funcionalidades atualizadas. Esta seção detalha as integrações e otimizações específicas entre as duas bibliotecas.

</div>

### Benefícios da Integração

A combinação do React Router 7 com o React 19 traz diversos benefícios:

- **Performance Aprimorada**: Aproveitando o React Compiler para otimizar renderizações de rotas
- **Estabilidade**: Correções de bugs que afetavam versões anteriores do React Router com o React
- **TypeScript Melhorado**: Tipagem mais rigorosa e definições de tipos atualizadas
- **APIs Modernas**: Suporte a todas as novas APIs do React 19

### Ajustes Realizados Durante a Migração

Durante a atualização do React 18 para o React 19, fizemos os seguintes ajustes no sistema de rotas:

1. **Atualização de Dependências**:
   ```bash
   npm install react-router-dom@latest --legacy-peer-deps
   ```

2. **Remoção do HelmetProvider**:
   ```jsx
   // Antes
   <StrictMode>
     <HelmetProvider>
       <BrowserRouter>
         <AppRoutes />
       </BrowserRouter>
     </HelmetProvider>
   </StrictMode>

   // Depois
   <StrictMode>
     <BrowserRouter>
       <AppRoutes />
     </BrowserRouter>
   </StrictMode>
   ```

3. **Tipagem Atualizada**:
   ```tsx
   // Antes
   const Route: React.FC<RouteProps> = ({ children, ...rest }) => {}

   // Depois
   const Route: React.FC<RouteProps & { children: React.ReactNode }> = ({ children, ...rest }) => {}
   ```

### Melhores Práticas com React Router 7 e React 19

- Utilize o hook `useNavigate` em vez da função `history.push`
- Aproveite as novas APIs de carregamento de dados introduzidas no React Router 7
- Utilize `<Outlet />` para composição de layouts aninhados
- Implemente lazy loading para otimizar o carregamento de rotas:

```jsx
import { lazy, Suspense } from 'react';
const LazyComponent = lazy(() => import('./LazyComponent'));

// Na definição de rotas
<Route path="/lazy" element={
  <Suspense fallback={<div>Carregando...</div>}>
    <LazyComponent />
  </Suspense>
} />
```

## 🗺️ Estrutura de Rotas

<div align="center">
  <img src="https://api.iconify.design/material-symbols:route.svg?color=%23CA4245" width="36" height="36" alt="Routes" />
</div>

### 📝 Definição de Rotas

```jsx
// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PoliticaDePrivacidade from './components/PoliticaDePrivacidade';
import TermosDeUso from './components/TermosDeUso';
import Cookies from './components/Cookies';
import LGPD from './components/LGPD';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
        <Route path="/termos-de-uso" element={<TermosDeUso />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/lgpd" element={<LGPD />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
```

### 🧭 Mapa de Rotas

<div align="center">

```mermaid
graph TD
    A[/] --> B[Home.jsx]
    C[/politica-de-privacidade] --> D[PoliticaDePrivacidade.jsx]
    E[/termos-de-uso] --> F[TermosDeUso.jsx]
    G[/cookies] --> H[Cookies.jsx]
    I[/lgpd] --> J[LGPD.jsx]
    K[/*] --> L[NotFound]
    
    style A fill:#CA4245,color:#fff
    style C fill:#CA4245,color:#fff
    style E fill:#CA4245,color:#fff
    style G fill:#CA4245,color:#fff
    style I fill:#CA4245,color:#fff
    style K fill:#CA4245,color:#fff
    
    style B fill:#3273dc,color:#fff
    style D fill:#3273dc,color:#fff
    style F fill:#3273dc,color:#fff
    style H fill:#3273dc,color:#fff
    style J fill:#3273dc,color:#fff
    style L fill:#3273dc,color:#fff
```

</div>

## 🧭 Navegação

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <!-- Componente Link -->
  <div style="border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(202, 66, 69, 0.05); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <img src="https://api.iconify.design/material-symbols:link.svg?color=%23CA4245" width="28" height="28" alt="Link" style="margin-right: 0.75rem;" />
      <h3 style="font-size: 1.25rem; margin: 0;">Componente <code>Link</code></h3>
    </div>
    <p style="margin-bottom: 1rem;">Navegação básica sem refresh da página</p>
    
```jsx
<Link to="/politica-de-privacidade" className="btn btn-primary">
  Política de Privacidade
</Link>
```
  </div>
  
  <!-- Componente NavLink -->
  <div style="border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(202, 66, 69, 0.05); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <img src="https://api.iconify.design/material-symbols:navigation.svg?color=%23CA4245" width="28" height="28" alt="NavLink" style="margin-right: 0.75rem;" />
      <h3 style="font-size: 1.25rem; margin: 0;">Componente <code>NavLink</code></h3>
    </div>
    <p style="margin-bottom: 1rem;">Link com estado ativo para menus de navegação</p>
    
```jsx
<NavLink 
  to="/termos-de-uso"
  className={({ isActive }) => 
    isActive ? "nav-link active" : "nav-link"
  }
>
  Termos de Uso
</NavLink>
```
  </div>
  
  <!-- Hook de Navegação -->
  <div style="border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(202, 66, 69, 0.05); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <img src="https://api.iconify.design/material-symbols:code.svg?color=%23CA4245" width="28" height="28" alt="Navigate" style="margin-right: 0.75rem;" />
      <h3 style="font-size: 1.25rem; margin: 0;">Hook <code>useNavigate</code></h3>
    </div>
    <p style="margin-bottom: 1rem;">Navegação programática baseada em eventos</p>
    
```jsx
const navigate = useNavigate();

function handleSubmit() {
  // Processar dados
  navigate('/sucesso', { 
    state: { id: resultado.id } 
  });
}
```
  </div>
</div>

## 🔍 Parâmetros e Queries

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <!-- Parâmetros de Rota -->
  <div style="border-radius: 0.75rem; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="background-color: #CA4245; color: white; padding: 0.75rem 1.5rem; display: flex; align-items: center;">
      <img src="https://api.iconify.design/material-symbols:route-rounded.svg?color=white" width="24" height="24" alt="Params" style="margin-right: 0.75rem;" />
      <h3 style="font-size: 1.25rem; margin: 0;">Parâmetros de Rota</h3>
    </div>
    <div style="background-color: #f8f9fb; padding: 1.5rem;">

```jsx
// Definição da rota
<Route path="/recursos/:recursoId" element={<RecursoDetalhe />} />

// No componente RecursoDetalhe.jsx
import { useParams } from 'react-router-dom';

function RecursoDetalhe() {
  const { recursoId } = useParams();
  
  return (
    <div>
      <h1>Detalhes do Recurso {recursoId}</h1>
      {/* Conteúdo do componente... */}
    </div>
  );
}
```

<div style="margin-top: 1rem; padding: 0.75rem; background-color: rgba(202, 66, 69, 0.1); border-radius: 0.5rem;">
  <strong>🔑 Uso:</strong> Ideal para identificadores de recursos (IDs) e slugs de conteúdo
</div>

   </div>
  </div>
  
  <!-- Query Strings -->
  <div style="border-radius: 0.75rem; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="background-color: #3273dc; color: white; padding: 0.75rem 1.5rem; display: flex; align-items: center;">
      <img src="https://api.iconify.design/material-symbols:search.svg?color=white" width="24" height="24" alt="Search" style="margin-right: 0.75rem;" />
      <h3 style="font-size: 1.25rem; margin: 0;">Query Strings</h3>
    </div>
    <div style="background-color: #f8f9fb; padding: 1.5rem;">

```jsx
// Link com query params
<Link to="/recursos?categoria=chatbot&ordenar=recentes">
  Filtrar Chatbots Recentes
</Link>

// No componente destino
import { useSearchParams } from 'react-router-dom';

function Recursos() {
  const [searchParams] = useSearchParams();
  const categoria = searchParams.get('categoria');
  const ordenar = searchParams.get('ordenar');
  
  return (
    <div>
      <h1>Recursos de {categoria}</h1>
      <p>Ordenados por: {ordenar}</p>
    </div>
  );
}
```

<div style="margin-top: 1rem; padding: 0.75rem; background-color: rgba(50, 115, 220, 0.1); border-radius: 0.5rem;">
  <strong>🔍 Uso:</strong> Perfeito para filtros, ordenação e parâmetros opcionais
</div>

   </div>
  </div>
</div>

## 🔄 Redirecionamentos

<div style="background: linear-gradient(135deg, rgba(202,66,69,0.05) 0%, rgba(50,115,220,0.05) 100%); padding: 2rem; border-radius: 0.75rem; margin: 1.5rem 0; position: relative; overflow: hidden;">

### Redirecionamentos Declarativos

<div style="display: flex; align-items: center; margin-bottom: 1rem;">
  <img src="https://api.iconify.design/material-symbols:arrow-forward.svg?color=%23CA4245" width="28" height="28" alt="Redirect" style="margin-right: 0.75rem;" />
  <h4 style="font-size: 1.15rem; margin: 0;">Componente <code>Navigate</code></h4>
</div>

```jsx
// Redirecionamento simples
<Route path="/antigo" element={<Navigate to="/novo" replace />} />

// Redirecionamento condicional
function PerfilPrivado() {
  const { usuarioLogado } = useAuth();
  
  if (!usuarioLogado) {
    return <Navigate to="/login" state={{ from: '/perfil' }} />;
  }
  
  return <Perfil />;
}
```

### Histórico de Navegação

<div style="display: flex; align-items: center; margin: 1.5rem 0 1rem;">
  <img src="https://api.iconify.design/material-symbols:history.svg?color=%233273dc" width="28" height="28" alt="History" style="margin-right: 0.75rem;" />
  <h4 style="font-size: 1.15rem; margin: 0;">Voltar à origem com <code>useLocation</code></h4>
</div>

```jsx
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
  
  const handleLogin = () => {
    // Lógica de login...
    navigate(from, { replace: true });
  };
  
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
```

<div style="margin-top: 1rem; padding: 0.75rem; background-color: rgba(255, 255, 255, 0.5); border-radius: 0.5rem; border-left: 4px solid #CA4245;">
  <strong>💡 Dica:</strong> Use <code>replace: true</code> para substituir a entrada na pilha de histórico, evitando que o usuário volte a uma página intermediária como login.
</div>

</div>

## 🛡️ Rotas Protegidas

<div align="center">
  <img src="https://api.iconify.design/material-symbols:shield.svg?color=%23CA4245" width="64" height="64" alt="Shield" />
</div>

<div style="position: relative; padding: 2rem; background-color: rgba(202, 66, 69, 0.05); border-radius: 0.75rem; margin: 1.5rem 0; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">

### Componente de Proteção de Rota

```jsx
function RotaProtegida({ children }) {
  const { usuarioLogado } = useAuth();
  const location = useLocation();
  
  if (!usuarioLogado) {
    return (
      <Navigate 
        to="/login" 
        state={{ from: location.pathname }} 
        replace 
      />
    );
  }
  
  return children;
}
{
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

   </div>
  </div>
  
  <!-- Netlify -->
  <div style="border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 0; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="background-color: #2d3b41; color: white; padding: 1rem 1.5rem; display: flex; align-items: center;">
      <img src="https://api.iconify.design/logos:netlify.svg" width="24" height="24" alt="Netlify" style="margin-right: 0.75rem;" />
      <h3 style="font-size: 1.25rem; margin: 0;">Netlify</h3>
    </div>
    <div style="padding: 1.5rem;">

```toml
# netlify.toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  
[build]
  publish = "dist"
  command = "npm run build"
```

   </div>
  </div>
</div>

## 🎯 Boas Práticas

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <!-- Prática 1 -->
  <div style="border-radius: 0.75rem; padding: 1.5rem; background: linear-gradient(135deg, rgba(202,66,69,0.1) 0%, rgba(202,66,69,0.05) 100%); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <div style="width: 50px; height: 50px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; margin-right: 1rem; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        <img src="https://api.iconify.design/material-symbols:folder.svg?color=%23CA4245" width="30" height="30" alt="Folder" />
      </div>
      <h3 style="font-size: 1.25rem; margin: 0;">Roteamento centralizado</h3>
    </div>
    <p>Defina todas as rotas em um arquivo dedicado (<code>routes.jsx</code>) para melhor manutenção e visibilidade.</p>
    <div style="margin-top: 1rem; padding: 0.75rem; background-color: rgba(255, 255, 255, 0.5); border-radius: 0.5rem; border-left: 3px solid #CA4245;">
      <strong>📘 Benefício:</strong> Facilita a manutenção e a compreensão do fluxo de navegação da aplicação.
    </div>
  </div>
  
  <!-- Prática 2 -->
  <div style="border-radius: 0.75rem; padding: 1.5rem; background: linear-gradient(135deg, rgba(50,115,220,0.1) 0%, rgba(50,115,220,0.05) 100%); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <div style="width: 50px; height: 50px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; margin-right: 1rem; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        <img src="https://api.iconify.design/material-symbols:group-work.svg?color=%233273dc" width="30" height="30" alt="Group" />
      </div>
      <h3 style="font-size: 1.25rem; margin: 0;">Rotas aninhadas</h3>
    </div>
    <p>Use rotas aninhadas para seções que compartilham layout, componentes de cabeçalho ou menu lateral.</p>
    <div style="margin-top: 1rem; padding: 0.75rem; background-color: rgba(255, 255, 255, 0.5); border-radius: 0.5rem; border-left: 3px solid #3273dc;">
      <strong>📘 Benefício:</strong> Reduz duplicação de código e mantém uma hierarquia clara de interfaces.
    </div>
  </div>
  
  <!-- Prática 3 -->
  <div style="border-radius: 0.75rem; padding: 1.5rem; background: linear-gradient(135deg, rgba(72,199,116,0.1) 0%, rgba(72,199,116,0.05) 100%); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <div style="width: 50px; height: 50px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; margin-right: 1rem; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        <img src="https://api.iconify.design/material-symbols:lazy-load.svg?color=%2348c774" width="30" height="30" alt="Lazy" />
      </div>
      <h3 style="font-size: 1.25rem; margin: 0;">Carregamento preguiçoso</h3>
    </div>
    <p>Implemente code splitting com lazy loading para carregar componentes sob demanda, acelerando o tempo de carregamento inicial.</p>
    <div style="margin-top: 1rem; padding: 0.75rem; background-color: rgba(255, 255, 255, 0.5); border-radius: 0.5rem; border-left: 3px solid #48c774;">
      <strong>📘 Benefício:</strong> Reduz o tamanho do pacote JavaScript inicial e melhora a performance da aplicação.
    </div>
  </div>
</div>

### Implementação de Code Splitting

```jsx
// Lazy loading para rotas secundárias
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLoader from './components/PageLoader';

// Importação com carregamento preguiçoso
const Home = lazy(() => import('./components/Home'));
const PoliticaDePrivacidade = lazy(() => import('./components/PoliticaDePrivacidade'));
const TermosDeUso = lazy(() => import('./components/TermosDeUso'));
// ... outros imports

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
        <Route path="/termos-de-uso" element={<TermosDeUso />} />
        {/* ... outras rotas */}
      </Routes>
    </Suspense>
  );
}
```

## 🔍 Lista de Verificação de Rotas

<div style="background-color: #f8f9fb; border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">

<h3 style="margin-top: 0; display: flex; align-items: center;">
  <img src="https://api.iconify.design/material-symbols:checklist.svg?color=%23CA4245" width="28" height="28" alt="Checklist" style="margin-right: 0.75rem;" />
  Antes de implantar em produção
</h3>

<div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
  <div style="display: flex; align-items: flex-start; padding: 1rem; background-color: rgba(72, 199, 116, 0.08); border-radius: 0.5rem;">
    <div style="min-width: 24px; height: 24px; border-radius: 50%; background-color: #48c774; display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
      <img src="https://api.iconify.design/material-symbols:check.svg?color=white" width="16" height="16" alt="Check" />
    </div>
    <div>
      <strong>Todas as rotas retornam um componente válido</strong>
      <p style="margin: 0.5rem 0 0; opacity: 0.8;">Verificar que não há caminhos quebrados ou componentes não implementados</p>
    </div>
  </div>
  
  <div style="display: flex; align-items: flex-start; padding: 1rem; background-color: rgba(72, 199, 116, 0.08); border-radius: 0.5rem;">
    <div style="min-width: 24px; height: 24px; border-radius: 50%; background-color: #48c774; display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
      <img src="https://api.iconify.design/material-symbols:check.svg?color=white" width="16" height="16" alt="Check" />
    </div>
    <div>
      <strong>Rota 404 implementada e funcional</strong>
      <p style="margin: 0.5rem 0 0; opacity: 0.8;">Garantir feedback adequado para URLs inválidas</p>
    </div>
  </div>
  
  <div style="display: flex; align-items: flex-start; padding: 1rem; background-color: rgba(72, 199, 116, 0.08); border-radius: 0.5rem;">
    <div style="min-width: 24px; height: 24px; border-radius: 50%; background-color: #48c774; display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
      <img src="https://api.iconify.design/material-symbols:check.svg?color=white" width="16" height="16" alt="Check" />
    </div>
    <div>
      <strong>URLs são amigáveis e consistentes</strong>
      <p style="margin: 0.5rem 0 0; opacity: 0.8;">Usar kebab-case para URLs e manter padrão em toda aplicação</p>
    </div>
  </div>
  
  <div style="display: flex; align-items: flex-start; padding: 1rem; background-color: rgba(72, 199, 116, 0.08); border-radius: 0.5rem;">
    <div style="min-width: 24px; height: 24px; border-radius: 50%; background-color: #48c774; display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
      <img src="https://api.iconify.design/material-symbols:check.svg?color=white" width="16" height="16" alt="Check" />
    </div>
    <div>
      <strong>Navegação funciona com histórico do navegador</strong>
      <p style="margin: 0.5rem 0 0; opacity: 0.8;">Verificar que os botões de voltar/avançar funcionam corretamente</p>
    </div>
  </div>
  
  <div style="display: flex; align-items: flex-start; padding: 1rem; background-color: rgba(72, 199, 116, 0.08); border-radius: 0.5rem;">
    <div style="min-width: 24px; height: 24px; border-radius: 50%; background-color: #48c774; display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
      <img src="https://api.iconify.design/material-symbols:check.svg?color=white" width="16" height="16" alt="Check" />
    </div>
    <div>
      <strong>Configuração de servidor possui fallback para SPA</strong>
      <p style="margin: 0.5rem 0 0; opacity: 0.8;">Implementar regra para redirecionar todas as rotas para index.html</p>
    </div>
  </div>
</div>

</div>

---

<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 3rem; padding-top: 1rem; border-top: 1px solid #e2e8f0;">
  <div>
    <a href="../README.md" style="display: inline-flex; align-items: center; text-decoration: none; color: #CA4245;">
      <img src="https://api.iconify.design/material-symbols:arrow-back.svg?color=%23CA4245" width="20" height="20" alt="Back" style="margin-right: 0.5rem;" />
      Voltar para README
    </a>
  </div>
  <div>
    <p style="margin: 0; color: #718096; font-size: 0.875rem;">Data da última atualização: 13 de maio de 2025</p>
  </div>
  <div>
    <a href="ANIMATION.md" style="display: inline-flex; align-items: center; text-decoration: none; color: #CA4245;">
      Próximo: Animações
      <img src="https://api.iconify.design/material-symbols:arrow-forward.svg?color=%23CA4245" width="20" height="20" alt="Forward" style="margin-left: 0.5rem;" />
    </a>
  </div>
</div>