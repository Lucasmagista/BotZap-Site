import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Context para gerenciar toasts
import { createContext, useContext } from 'react';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    const id = Date.now() + Math.random();
    const newToast = { id, ...toast };
    setToasts(prev => [...prev, newToast]);

    // Auto-remove após o tempo especificado
    setTimeout(() => {
      removeToast(id);
    }, toast.duration || 5000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

// Container de toasts
function ToastContainer({ toasts, removeToast }) {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} onRemove={removeToast} />
        ))}
      </AnimatePresence>
    </div>
  );
}

// Componente individual do toast
function Toast({ toast, onRemove }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const duration = toast.duration || 5000;
    const interval = 50; // Atualiza a cada 50ms
    const steps = duration / interval;
    const decrement = 100 / steps;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          onRemove(toast.id);
          return 0;
        }
        return prev - decrement;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [toast.id, toast.duration, onRemove]);

  const getToastStyles = (type) => {
    const styles = {
      success: {
        bg: 'bg-green-500/10',
        border: 'border-green-500/20',
        icon: 'text-green-500',
        progress: 'bg-green-500'
      },
      error: {
        bg: 'bg-red-500/10',
        border: 'border-red-500/20',
        icon: 'text-red-500',
        progress: 'bg-red-500'
      },
      warning: {
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/20',
        icon: 'text-yellow-500',
        progress: 'bg-yellow-500'
      },
      info: {
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
        icon: 'text-blue-500',
        progress: 'bg-blue-500'
      }
    };
    return styles[type] || styles.info;
  };

  const getIcon = (type) => {
    const icons = {
      success: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      ),
      error: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      ),
      warning: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
        </svg>
      ),
      info: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    };
    return icons[type] || icons.info;
  };

  const styles = getToastStyles(toast.type);

  return (
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`relative max-w-sm w-full ${styles.bg} backdrop-blur-md border ${styles.border} rounded-2xl p-4 shadow-xl`}
    >
      {/* Barra de progresso */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 rounded-b-2xl overflow-hidden">
        <motion.div
          className={`h-full ${styles.progress}`}
          initial={{ width: '100%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.05 }}
        />
      </div>

      <div className="flex items-start space-x-3">
        {/* Ícone */}
        <div className={`flex-shrink-0 ${styles.icon}`}>
          {getIcon(toast.type)}
        </div>

        {/* Conteúdo */}
        <div className="flex-1 min-w-0">
          {toast.title && (
            <h4 className="text-sm font-semibold text-white mb-1">
              {toast.title}
            </h4>
          )}
          <p className="text-sm text-white/80">
            {toast.message}
          </p>
        </div>

        {/* Botão fechar */}
        <button
          onClick={() => onRemove(toast.id)}
          className="flex-shrink-0 text-white/60 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

// Hook para usar toasts
export function useToastNotifications() {
  const { addToast } = useToast();

  return {
    success: (message, title = 'Sucesso!', duration = 5000) => 
      addToast({ type: 'success', message, title, duration }),
    error: (message, title = 'Erro!', duration = 5000) => 
      addToast({ type: 'error', message, title, duration }),
    warning: (message, title = 'Atenção!', duration = 5000) => 
      addToast({ type: 'warning', message, title, duration }),
    info: (message, title = 'Informação', duration = 5000) => 
      addToast({ type: 'info', message, title, duration }),
  };
}