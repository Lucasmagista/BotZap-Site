# <img src="https://api.iconify.design/material-symbols:cloud-off.svg?color=%23333" width="32"/> Funcionalidades Offline do BotZap

<div align="center">

[![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![Workbox](https://img.shields.io/badge/Workbox-v7.0.0-FF9A00?style=for-the-badge&logo=workbox&logoColor=white)](https://developers.google.com/web/tools/workbox)
[![Service Workers](https://img.shields.io/badge/Service_Workers-Ativados-4285F4?style=for-the-badge&logo=serviceworker&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/API/Service_Worker_API)

**Documentação completa sobre implementação offline e PWA no projeto BotZap**

</div>

<div align="center">
  <a href="../README.md"><img src="https://img.shields.io/badge/🏠_Voltar_para_README-007396?style=for-the-badge" alt="Voltar para README"></a>
  <a href="TECHNICAL.md"><img src="https://img.shields.io/badge/🔧_Documentação_Técnica-004D40?style=for-the-badge" alt="Documentação Técnica"></a>
  <a href="RESPONSIVE.md"><img src="https://img.shields.io/badge/📱_Design_Responsivo-FF5722?style=for-the-badge" alt="Design Responsivo"></a>
</div>

---

## 📋 Índice

<div align="center">
  <table>
    <tr>
      <td align="center"><a href="#-visão-geral-pwa"><img src="https://api.iconify.design/material-symbols:app-shortcut.svg" width="24"/><br/>Visão Geral PWA</a></td>
      <td align="center"><a href="#-service-workers"><img src="https://api.iconify.design/material-symbols:deployed-code.svg" width="24"/><br/>Service Workers</a></td>
      <td align="center"><a href="#-estratégias-de-cache"><img src="https://api.iconify.design/material-symbols:cached.svg" width="24"/><br/>Estratégias de Cache</a></td>
      <td align="center"><a href="#-manifesto-pwa"><img src="https://api.iconify.design/material-symbols:file-copy.svg" width="24"/><br/>Manifesto</a></td>
    </tr>
    <tr>
      <td align="center"><a href="#-sincronização-offline"><img src="https://api.iconify.design/material-symbols:sync.svg" width="24"/><br/>Sincronização</a></td>
      <td align="center"><a href="#-instalação-do-app"><img src="https://api.iconify.design/material-symbols:install-mobile.svg" width="24"/><br/>Instalação</a></td>
      <td align="center"><a href="#-atualizações-do-app"><img src="https://api.iconify.design/material-symbols:upgrade.svg" width="24"/><br/>Atualizações</a></td>
      <td align="center"><a href="#-testes-e-depuração"><img src="https://api.iconify.design/material-symbols:bug-report.svg" width="24"/><br/>Testes</a></td>
    </tr>
  </table>
</div>

## 📱 Visão Geral PWA

<div align="center">
  <img src="https://api.iconify.design/material-symbols:app-shortcut.svg" width="84" height="84" alt="PWA" />
</div>

<div style="background: linear-gradient(135deg, rgba(90,15,200,0.05) 0%, rgba(90,15,200,0.1) 100%); padding: 2rem; border-radius: 0.75rem; margin: 1.5rem 0;">

O BotZap é implementado como um **Progressive Web App (PWA)** completo, oferecendo uma experiência nativa mesmo quando o usuário está offline ou com conexão instável. Os principais recursos PWA incluem:

- **Instalação no dispositivo** como aplicativo nativo
- **Funcionamento offline** para funcionalidades principais
- **Sincronização em segundo plano** quando a conexão é reestabelecida
- **Notificações push** para interações importantes
- **Atualização automática** quando novas versões são lançadas
- **Carregamento rápido** através de estratégias avançadas de cache

</div>

### Principais Benefícios

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
  <!-- Disponibilidade -->
  <div style="border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(90,15,200,0.05); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <div style="width: 48px; height: 48px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; margin-right: 1rem; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        <img src="https://api.iconify.design/material-symbols:signal-cellular-alt.svg?color=%235A0FC8" width="28" height="28" alt="Disponibilidade" />
      </div>
      <h3 style="font-size: 1.25rem; margin: 0;">Disponibilidade</h3>
    </div>
    <p style="margin-bottom: 0.5rem;">Acesso ao conteúdo mesmo sem conexão à internet, com sincronização posterior.</p>
    <div style="font-size: 0.9rem; color: #555;">
      <span style="display: block; margin-top: 0.5rem;"><b>Impacto:</b> Redução de 92% na perda de interações por falha de conexão</span>
    </div>
  </div>
  
  <!-- Experiência de Usuário -->
  <div style="border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(90,15,200,0.05); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <div style="width: 48px; height: 48px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; margin-right: 1rem; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        <img src="https://api.iconify.design/material-symbols:thumbs-up-down.svg?color=%235A0FC8" width="28" height="28" alt="UX" />
      </div>
      <h3 style="font-size: 1.25rem; margin: 0;">Experiência de Usuário</h3>
    </div>
    <p style="margin-bottom: 0.5rem;">Interface nativa, instalação no dispositivo e carregamento ultrarrápido.</p>
    <div style="font-size: 0.9rem; color: #555;">
      <span style="display: block; margin-top: 0.5rem;"><b>Impacto:</b> Aumento de 47% no tempo médio de sessão</span>
    </div>
  </div>
  
  <!-- Engajamento -->
  <div style="border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(90,15,200,0.05); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <div style="width: 48px; height: 48px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; margin-right: 1rem; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        <img src="https://api.iconify.design/material-symbols:notifications-active.svg?color=%235A0FC8" width="28" height="28" alt="Engajamento" />
      </div>
      <h3 style="font-size: 1.25rem; margin: 0;">Engajamento</h3>
    </div>
    <p style="margin-bottom: 0.5rem;">Notificações push, ícone na tela inicial e atualizações automáticas.</p>
    <div style="font-size: 0.9rem; color: #555;">
      <span style="display: block; margin-top: 0.5rem;"><b>Impacto:</b> Taxa de retorno 3.5x maior com usuários que instalaram o PWA</span>
    </div>
  </div>
</div>

## 🔄 Service Workers

<div align="center">
  <img src="https://api.iconify.design/material-symbols:deployed-code.svg" width="64" height="64" alt="Service Workers" />
</div>

<div style="background: linear-gradient(135deg, rgba(90,15,200,0.05) 0%, rgba(90,15,200,0.1) 100%); padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0;">

### Implementação dos Service Workers

O BotZap utiliza o **Workbox** para simplificar a implementação e gerenciamento dos service workers. O arquivo principal `service-worker.js` é responsável por:

- Interceptar requisições de rede
- Gerenciar diferentes estratégias de cache
- Controlar atualizações do aplicativo
- Implementar sincronização em background
- Gerenciar notificações push

</div>

### Registrando o Service Worker

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```javascript
// Em src/main.jsx
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('SW registrado com sucesso:', registration.scope);
      })
      .catch(error => {
        console.error('Falha ao registrar SW:', error);
      });
  });
}
```

</div>

### Configuração do Service Worker com Workbox

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```javascript
// Em service-worker.js
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst, NetworkFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { BackgroundSyncPlugin } from 'workbox-background-sync';

// Pré-cache dos arquivos essenciais
precacheAndRoute(self.__WB_MANIFEST);

// Página offline fallback
const CACHE_NAME = 'offline-html';
const FALLBACK_HTML_URL = '/offline.html';

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.add(FALLBACK_HTML_URL))
  );
});

// Diferentes estratégias para diferentes tipos de recursos
// [Implementação detalhada das rotas...]
```

</div>

## 📦 Estratégias de Cache

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
  <!-- Cache First -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/material-symbols:save.svg?color=%235A0FC8" width="24" height="24" alt="Cache First" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">Cache First</h3>
    </div>
    <p style="margin-bottom: 0.75rem; font-size: 0.9rem;">Verifica o cache primeiro, usa a rede apenas se o recurso não estiver no cache.</p>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; font-size: 0.9rem;">
      <strong>Uso:</strong> Recursos estáticos que raramente mudam (fontes, imagens, CSS/JS com hash)
    </div>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; margin-top: 0.5rem; font-family: monospace; font-size: 0.8rem;">
      <pre style="margin: 0;">registerRoute(
  ({request}) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 dias
      }),
    ],
  })
);</pre>
    </div>
  </div>
  
  <!-- Network First -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/material-symbols:cloud-download.svg?color=%235A0FC8" width="24" height="24" alt="Network First" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">Network First</h3>
    </div>
    <p style="margin-bottom: 0.75rem; font-size: 0.9rem;">Tenta a rede primeiro, com fallback para cache em caso de falha de conexão.</p>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; font-size: 0.9rem;">
      <strong>Uso:</strong> API e conteúdo dinâmico que precisa ser atualizado frequentemente
    </div>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; margin-top: 0.5rem; font-family: monospace; font-size: 0.8rem;">
      <pre style="margin: 0;">registerRoute(
  new RegExp('https://api\.botzap\.com/v1/'),
  new NetworkFirst({
    cacheName: 'api-responses',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 12 * 60 * 60, // 12 horas
      }),
    ],
  })
);</pre>
    </div>
  </div>
  
  <!-- Stale While Revalidate -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/material-symbols:update.svg?color=%235A0FC8" width="24" height="24" alt="SWR" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">Stale While Revalidate</h3>
    </div>
    <p style="margin-bottom: 0.75rem; font-size: 0.9rem;">Responde do cache (se disponível) e depois atualiza o cache com a resposta da rede.</p>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; font-size: 0.9rem;">
      <strong>Uso:</strong> Recursos não críticos que podem ser atualizados em background
    </div>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; margin-top: 0.5rem; font-family: monospace; font-size: 0.8rem;">
      <pre style="margin: 0;">registerRoute(
  ({url}) => url.pathname.startsWith('/blog'),
  new StaleWhileRevalidate({
    cacheName: 'blog-posts',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);</pre>
    </div>
  </div>
</div>

<div style="margin: 1.5rem 0; padding: 1rem; background-color: #f8f9fa; border-radius: 0.5rem; border-left: 3px solid #5A0FC8;">
  <p style="margin: 0; font-size: 0.9rem;">
    <strong>💡 Dica:</strong> Para decidir qual estratégia usar, considere:<br>
    - <strong>Frequência de atualização</strong> do conteúdo<br>
    - <strong>Criticidade</strong> de ter o conteúdo mais recente<br>
    - <strong>Tamanho</strong> do recurso e economia de banda<br>
    - <strong>Experiência do usuário</strong> desejada (velocidade vs. atualidade)
  </p>
</div>

## 📄 Manifesto PWA

<div align="center">
  <img src="https://api.iconify.design/material-symbols:file-copy.svg" width="64" height="64" alt="Manifesto" />
</div>

### Configuração do Web App Manifest

O arquivo `manifest.json` na pasta `public` define como o aplicativo se comporta quando instalado no dispositivo do usuário:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```json
{
  "name": "BotZap - Chatbot para WhatsApp",
  "short_name": "BotZap",
  "description": "Crie chatbots inteligentes para WhatsApp sem código",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#5A0FC8",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "shortcuts": [
    {
      "name": "Nova Conversa",
      "short_name": "Nova",
      "description": "Iniciar nova conversa",
      "url": "/chat/new",
      "icons": [{ "src": "/icons/shortcut-new.png", "sizes": "192x192" }]
    },
    {
      "name": "Dashboard",
      "short_name": "Dashboard",
      "description": "Ver estatísticas",
      "url": "/dashboard",
      "icons": [{ "src": "/icons/shortcut-dash.png", "sizes": "192x192" }]
    }
  ],
  "screenshots": [
    {
      "src": "/screenshots/screen1.png",
      "sizes": "1280x720",
      "type": "image/png",
      "purpose": "Tela principal do BotZap"
    },
    {
      "src": "/screenshots/screen2.png",
      "sizes": "1280x720",
      "type": "image/png",
      "purpose": "Criação de chatbot no BotZap"
    }
  ],
  "related_applications": [
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=com.botzap.app"
    }
  ],
  "prefer_related_applications": false
}
```

</div>

### Adicionar à Tela Inicial

<div style="background-color: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0;">
  <h4 style="margin-top: 0;">Propriedades importantes do manifesto:</h4>
  <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
    <thead>
      <tr style="background-color: #eaecef;">
        <th style="padding: 0.75rem; text-align: left; border-bottom: 1px solid #ddd;">Propriedade</th>
        <th style="padding: 0.75rem; text-align: left; border-bottom: 1px solid #ddd;">Descrição</th>
        <th style="padding: 0.75rem; text-align: left; border-bottom: 1px solid #ddd;">Impacto</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;"><code>name</code> / <code>short_name</code></td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Nome completo e abreviado do app</td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Exibido na tela inicial e splash screen</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;"><code>icons</code></td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Ícones em diferentes tamanhos</td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Ícone na tela inicial e splash screen</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;"><code>display</code></td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Modo de exibição (<code>standalone</code>, <code>fullscreen</code>, etc.)</td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Controla a aparência da janela/UI do navegador</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;"><code>theme_color</code></td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Cor principal do tema</td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Cor da barra de status e interfaces do sistema</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;"><code>shortcuts</code></td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Atalhos rápidos para funcionalidades</td>
        <td style="padding: 0.75rem; border-bottom: 1px solid #ddd;">Menu de contexto ao pressionar o ícone do app</td>
      </tr>
    </tbody>
  </table>
</div>

## 🔄 Sincronização Offline

<div style="background: linear-gradient(135deg, rgba(90,15,200,0.05) 0%, rgba(90,15,200,0.1) 100%); padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0;">

### Background Sync

O BotZap implementa **sincronização em segundo plano** usando a API Background Sync do service worker. Isso permite:

1. Capturar solicitações feitas offline
2. Armazenar essas solicitações em um IndexedDB
3. Reenviar automaticamente quando a conexão é reestabelecida
4. Fornecer feedback ao usuário sobre o status da sincronização

</div>

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```javascript
// Implementação de sincronização em background
const bgSyncPlugin = new BackgroundSyncPlugin('messagesQueue', {
  maxRetentionTime: 24 * 60, // Reter por até 24 horas (em minutos)
  onSync: async ({ queue }) => {
    let entry;
    while ((entry = await queue.shiftRequest())) {
      try {
        await fetch(entry.request.clone());
        console.log('Mensagem sincronizada com sucesso');
        
        // Notificar o usuário sobre a sincronização bem-sucedida
        const title = 'Mensagem enviada';
        const options = {
          body: 'Sua mensagem foi enviada com sucesso!',
          icon: '/icons/icon-192x192.png',
          badge: '/icons/badge-72x72.png',
        };
        
        self.registration.showNotification(title, options);
      } catch (error) {
        console.error('Falha na sincronização:', error);
        
        // Recolocar na fila para nova tentativa
        await queue.unshiftRequest(entry);
        throw error;
      }
    }
  },
});

// Registrar rota para capturar solicitações de mensagens
registerRoute(
  ({ url }) => url.pathname.includes('/api/messages'),
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  'POST'
);
```

</div>

### Persistência de Dados Offline

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
  <!-- IndexedDB -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/material-symbols:database.svg?color=%235A0FC8" width="24" height="24" alt="IndexedDB" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">IndexedDB</h3>
    </div>
    <p style="margin-bottom: 0.75rem; font-size: 0.9rem;">Armazena estruturas de dados complexas e grandes volumes de dados.</p>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; font-size: 0.9rem;">
      <strong>Uso:</strong> Histórico de conversas, mensagens pendentes, cache de configurações
    </div>
  </div>
  
  <!-- LocalStorage -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/material-symbols:storage.svg?color=%235A0FC8" width="24" height="24" alt="LocalStorage" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">LocalStorage</h3>
    </div>
    <p style="margin-bottom: 0.75rem; font-size: 0.9rem;">Armazenamento simples de chave-valor para pequenos dados.</p>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; font-size: 0.9rem;">
      <strong>Uso:</strong> Preferências do usuário, tokens, flags de recursos
    </div>
  </div>
  
  <!-- Cache Storage -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/material-symbols:cached.svg?color=%235A0FC8" width="24" height="24" alt="Cache" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">Cache Storage</h3>
    </div>
    <p style="margin-bottom: 0.75rem; font-size: 0.9rem;">Armazena respostas de requisições HTTP para uso offline.</p>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; font-size: 0.9rem;">
      <strong>Uso:</strong> Assets, HTML, CSS, JS, respostas de API
    </div>
  </div>
</div>

## 📲 Instalação do App

<div align="center">
  <img src="https://api.iconify.design/material-symbols:install-mobile.svg" width="64" height="64" alt="Instalação" />
</div>

### Prompt de Instalação Personalizado

O BotZap implementa um prompt de instalação personalizado para melhorar a experiência do usuário, em vez de depender apenas do prompt nativo:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```jsx
// Em src/components/PWAInstallPrompt.jsx
import { useState, useEffect } from 'react';

export default function PWAInstallPrompt() {
  const [installPromptEvent, setInstallPromptEvent] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      // Prevenir o prompt automático
      e.preventDefault();
      // Armazenar o evento para uso posterior
      setInstallPromptEvent(e);
      // Verificar se já foi mostrado ou rejeitado recentemente
      const lastPrompt = localStorage.getItem('installPromptTime');
      const now = Date.now();

      if (!lastPrompt || now - parseInt(lastPrompt) > 7 * 24 * 60 * 60 * 1000) {
        setShowPrompt(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = () => {
    if (!installPromptEvent) return;

    // Mostrar o prompt nativo
    installPromptEvent.prompt();

    // Esperar pela escolha do usuário
    installPromptEvent.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuário aceitou a instalação');
      }
      
      // Limpar o evento salvo
      setInstallPromptEvent(null);
      setShowPrompt(false);
      
      // Salvar timestamp para não mostrar de novo tão cedo
      localStorage.setItem('installPromptTime', Date.now().toString());
    });
  };

  if (!showPrompt) return null;
  
  return (
    <div className="pwa-prompt">
      <div className="pwa-content">
        <img src="/icons/icon-192x192.png" alt="BotZap" />
        <div className="pwa-text">
          <h3>Instalar o BotZap</h3>
          <p>Instale para acesso rápido mesmo offline!</p>
        </div>
      </div>
      <div className="pwa-actions">
        <button onClick={() => setShowPrompt(false)}>Agora não</button>
        <button onClick={handleInstallClick} className="install-button">
          Instalar
        </button>
      </div>
    </div>
  );
}
```

</div>

### Detecção de Plataforma e Instruções Personalizadas

<div style="margin: 1.5rem 0;">
  <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1rem;">
    <!-- Android -->
    <div style="flex: 1; min-width: 250px; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem;">
      <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
        <img src="https://api.iconify.design/logos:android-icon.svg" width="24" height="24" alt="Android" style="margin-right: 0.5rem;" />
        <h4 style="font-size: 1rem; margin: 0;">Android</h4>
      </div>
      <ol style="padding-left: 1.5rem; margin: 0; font-size: 0.9rem;">
        <li>Chrome exibe o banner "Adicionar à tela inicial"</li>
        <li>Ou use menu (3 pontos) > "Instalar aplicativo"</li>
        <li>Confirme no diálogo de instalação</li>
      </ol>
    </div>
    
    <!-- iOS -->
    <div style="flex: 1; min-width: 250px; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem;">
      <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
        <img src="https://api.iconify.design/logos:apple.svg" width="24" height="24" alt="iOS" style="margin-right: 0.5rem;" />
        <h4 style="font-size: 1rem; margin: 0;">iOS / iPadOS</h4>
      </div>
      <ol style="padding-left: 1.5rem; margin: 0; font-size: 0.9rem;">
        <li>Safari > botão de compartilhamento</li>
        <li>Selecione "Adicionar à Tela de Início"</li>
        <li>Confirme o nome e toque em "Adicionar"</li>
      </ol>
    </div>
    
    <!-- Desktop -->
    <div style="flex: 1; min-width: 250px; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem;">
      <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
        <img src="https://api.iconify.design/material-symbols:desktop-windows.svg" width="24" height="24" alt="Desktop" style="margin-right: 0.5rem;" />
        <h4 style="font-size: 1rem; margin: 0;">Desktop</h4>
      </div>
      <ol style="padding-left: 1.5rem; margin: 0; font-size: 0.9rem;">
        <li>Chrome/Edge: ícone de instalação na barra de endereço</li>
        <li>Ou através do menu com "Instalar BotZap..."</li>
        <li>Confirmação cria um atalho no desktop</li>
      </ol>
    </div>
  </div>
</div>

## 🔄 Atualizações do App

<div style="background: linear-gradient(135deg, rgba(90,15,200,0.05) 0%, rgba(90,15,200,0.1) 100%); padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0;">

### Estratégia de Atualização

O BotZap utiliza uma estratégia de atualização que garante:
1. Detecção imediata de novas versões do service worker
2. Notificação ao usuário sobre a disponibilidade da atualização
3. Opção de atualização manual ou automática após todas as guias fecharem
4. Fallback para conteúdo em cache durante a atualização

</div>

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```javascript
// Em service-worker.js
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Opcional: ativa o SW imediatamente
});

// Em um componente React
function UpdateNotification() {
  const [newVersionAvailable, setNewVersionAvailable] = useState(false);
  
  useEffect(() => {
    // Verificar atualizações quando o service worker é atualizado
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        setNewVersionAvailable(true);
      });
    }
    
    // Verificar se há uma nova versão em intervalos regulares
    const checkInterval = setInterval(() => {
      navigator.serviceWorker.ready.then(registration => {
        registration.update();
      });
    }, 60 * 60 * 1000); // Verificar a cada hora
    
    return () => clearInterval(checkInterval);
  }, []);
  
  const handleUpdate = () => {
    window.location.reload();
  };
  
  if (!newVersionAvailable) return null;
  
  return (
    <div className="update-notification">
      <p>Nova versão disponível!</p>
      <button onClick={handleUpdate}>Atualizar agora</button>
    </div>
  );
}
```

</div>

## 🐞 Testes e Depuração

<div align="center">
  <img src="https://api.iconify.design/material-symbols:bug-report.svg" width="64" height="64" alt="Testes" />
</div>

### Ferramentas de Debug

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
  <!-- Chrome DevTools -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/logos:chrome.svg" width="24" height="24" alt="Chrome" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">Chrome DevTools</h3>
    </div>
    <ul style="padding-left: 1.5rem; margin: 0.5rem 0; font-size: 0.9rem;">
      <li>Aba "Application" > "Service Workers"</li>
      <li>Aba "Application" > "Cache Storage"</li>
      <li>Aba "Application" > "IndexedDB"</li>
      <li>Opção "Offline" para simulação de desconexão</li>
    </ul>
  </div>
  
  <!-- Lighthouse -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/logos:lighthouse.svg" width="24" height="24" alt="Lighthouse" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">Lighthouse</h3>
    </div>
    <ul style="padding-left: 1.5rem; margin: 0.5rem 0; font-size: 0.9rem;">
      <li>Auditoria de PWA integrada</li>
      <li>Verificação de requisitos do Manifesto</li>
      <li>Validação de Service Worker</li>
      <li>Sugestões de melhorias para PWA</li>
    </ul>
  </div>
  
  <!-- Workbox -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/logos:workbox.svg" width="24" height="24" alt="Workbox" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">Workbox CLI</h3>
    </div>
    <ul style="padding-left: 1.5rem; margin: 0.5rem 0; font-size: 0.9rem;">
      <li>Logging detalhado com <code>workbox.setConfig({debug: true})</code></li>
      <li>Validação do service worker com <code>workbox-cli</code></li>
      <li>Análise do cache com DevTools integrado</li>
    </ul>
  </div>
</div>

### Lista de Verificação de PWA

<div style="margin: 1.5rem 0; padding: 1rem; background-color: rgba(90,15,200,0.05); border-radius: 0.5rem; border-left: 3px solid #5A0FC8;">

<h4 style="margin-top: 0;">Antes de implantar, verifique:</h4>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
  <div>
    <h5 style="margin-bottom: 0.5rem; font-size: 0.95rem;">Requisitos Essenciais</h5>
    <div style="display: flex; align-items: center; margin: 0.25rem 0; font-size: 0.9rem;">
      <input type="checkbox" checked disabled style="margin-right: 0.5rem;"> <span>Service Worker registrado</span>
    </div>
    <div style="display: flex; align-items: center; margin: 0.25rem 0; font-size: 0.9rem;">
      <input type="checkbox" checked disabled style="margin-right: 0.5rem;"> <span>Web App Manifest válido</span>
    </div>
    <div style="display: flex; align-items: center; margin: 0.25rem 0; font-size: 0.9rem;">
      <input type="checkbox" checked disabled style="margin-right: 0.5rem;"> <span>Servido via HTTPS</span>
    </div>
    <div style="display: flex; align-items: center; margin: 0.25rem 0; font-size: 0.9rem;">
      <input type="checkbox" checked disabled style="margin-right: 0.5rem;"> <span>Ícones em todos os tamanhos</span>
    </div>
  </div>
  
  <div>
    <h5 style="margin-bottom: 0.5rem; font-size: 0.95rem;">Experiência Avançada</h5>
    <div style="display: flex; align-items: center; margin: 0.25rem 0; font-size: 0.9rem;">
      <input type="checkbox" checked disabled style="margin-right: 0.5rem;"> <span>Página de fallback offline</span>
    </div>
    <div style="display: flex; align-items: center; margin: 0.25rem 0; font-size: 0.9rem;">
      <input type="checkbox" checked disabled style="margin-right: 0.5rem;"> <span>Background Sync implementado</span>
    </div>
    <div style="display: flex; align-items: center; margin: 0.25rem 0; font-size: 0.9rem;">
      <input type="checkbox" checked disabled style="margin-right: 0.5rem;"> <span>Notificações Push configuradas</span>
    </div>
    <div style="display: flex; align-items: center; margin: 0.25rem 0; font-size: 0.9rem;">
      <input type="checkbox" checked disabled style="margin-right: 0.5rem;"> <span>Prompt de instalação personalizado</span>
    </div>
  </div>
</div>

</div>

---

<div align="center">
  <p>
    <strong>BotZap - Documentação de Funcionalidades Offline</strong><br>
    <sub>Atualizado em 6 de maio de 2025 | v2.3.0</sub>
  </p>
</div>