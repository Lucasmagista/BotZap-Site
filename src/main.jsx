import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import AppRoutes from './routes';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(() => {
    console.log('Service Worker registrado com sucesso.');
  }).catch(error => {
    console.error('Erro ao registrar Service Worker:', error);
  });

  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Permissão para notificações concedida.');
    }
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
