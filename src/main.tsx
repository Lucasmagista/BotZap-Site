import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Registrar o service worker para funcionalidades PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registrado com sucesso:', registration);
        
        // Armazena a página atual para redirecionamento quando voltar online
        window.addEventListener('beforeunload', () => {
          localStorage.setItem('lastPage', window.location.pathname + window.location.search);
        });

        // Configurar notificações push, se houver permissão
        if ('PushManager' in window) {
          Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
              console.log('Notificações permitidas');
              
              // Aqui poderíamos inscrever o usuário em notificações
              // registration.pushManager.subscribe({...})
            }
          });
        }
        
        // Detecta quando o service worker é atualizado
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // Novo conteúdo disponível, mostrar notificação de atualização
                if (confirm('Nova versão disponível! Deseja atualizar agora?')) {
                  window.location.reload();
                }
              }
            });
          }
        });
      })
      .catch((error) => {
        console.error('Falha ao registrar o Service Worker:', error);
      });
      
    // Verificar atualizações a cada hora
    setInterval(() => {
      navigator.serviceWorker.getRegistration().then((registration) => {
        if (registration) {
          registration.update();
        }
      });
    }, 3600000); // 1 hora em milissegundos
  });

  // Sincronizar dados quando ficar online
  window.addEventListener('online', () => {
    navigator.serviceWorker.ready.then((registration) => {
      // Verificar se a API Background Sync está disponível
      if ('sync' in registration) {
        (registration as any).sync.register('sync-messages')
          .then(() => console.log('Background sync registrado'))
          .catch((err: Error) => console.error('Erro ao registrar background sync:', err));
      } else {
        console.log('Background Sync não suportado neste navegador');
      }
    });
  });

  // Interceptar eventos de compartilhamento se suportado
  if ('share' in navigator) {
    console.log('Web Share API disponível');
  }
}