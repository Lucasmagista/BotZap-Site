// Service Worker para o BotZap - Permite funcionalidade offline e instalação como PWA

const CACHE_NAME = 'botzap-cache-v1';

// Arquivos a serem armazenados em cache para funcionamento offline
const urlsToCache = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.json',
  '/whatsapp-bot.png',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/maskable-icon.png',
];

// Instalação do service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
  // Força a ativação imediata do service worker
  self.skipWaiting();
});

// Ativação do service worker e limpeza de caches antigos
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Exclui caches antigos
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  // Garante que o service worker seja usado imediatamente em todas as abas
  self.clients.claim();
});

// Interceptação de requisições de rede
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retorna o recurso do cache, se disponível
        if (response) {
          return response;
        }
        
        // Se não estiver em cache, busca da rede
        return fetch(event.request)
          .then((response) => {
            // Não armazena em cache se não for uma resposta válida ou se for uma API
            if (!response || response.status !== 200 || response.type !== 'basic' || event.request.url.includes('/api/')) {
              return response;
            }
            
            // Clona a resposta porque ela só pode ser consumida uma vez
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(() => {
            // Se a rede estiver indisponível e o pedido for para uma página
            if (event.request.mode === 'navigate') {
              return caches.match('/offline.html');
            }
          });
      })
  );
});

// Lidar com notificações push
self.addEventListener('push', (event) => {
  const data = event.data.json();
  
  const options = {
    body: data.body,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-icon.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1',
      url: data.url || '/'
    },
    actions: [
      {
        action: 'explore',
        title: 'Ver detalhes',
        icon: '/icons/checkmark.png'
      },
      {
        action: 'close',
        title: 'Fechar',
        icon: '/icons/xmark.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Lidar com cliques em notificações
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'close') {
    return;
  }
  
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientList) => {
      const url = event.action === 'explore' && event.notification.data.url
        ? event.notification.data.url
        : '/';
      
      // Se já tiver uma aba aberta, foca nela
      for (const client of clientList) {
        if (client.url === url && 'focus' in client) {
          return client.focus();
        }
      }
      
      // Se não tiver uma aba aberta, abre uma nova
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});

// Sincronização em segundo plano
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-messages') {
    event.waitUntil(syncMessages());
  }
});

// Função para sincronizar mensagens pendentes
async function syncMessages() {
  try {
    // Busca mensagens pendentes do IndexedDB
    const db = await openDB();
    const pendingMessages = await db.getAll('pendingMessages');
    
    // Envia cada mensagem pendente
    const sendPromises = pendingMessages.map(async (message) => {
      try {
        const response = await fetch('/api/send-message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(message)
        });
        
        if (response.ok) {
          // Se enviou com sucesso, remove da fila
          await db.delete('pendingMessages', message.id);
          return true;
        }
        return false;
      } catch (error) {
        console.error('Falha ao sincronizar mensagem:', error);
        return false;
      }
    });
    
    // Espera todas as mensagens serem processadas
    return Promise.all(sendPromises);
  } catch (error) {
    console.error('Falha na sincronização de mensagens:', error);
    return false;
  }
}

// Função para abrir o IndexedDB
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('BotZapOfflineDB', 1);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('pendingMessages')) {
        db.createObjectStore('pendingMessages', { keyPath: 'id' });
      }
    };
    
    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });
}