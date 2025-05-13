import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useAnalytics from '../lib/useAnalytics';

/**
 * Componente avançado de chatbot com IA para demonstrar o produto BotZap
 */
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [offlineMode, setOfflineMode] = useState(false);
  const messagesEndRef = useRef(null);
  const { trackEvent } = useAnalytics();
  
  // Inicializar o chat com uma mensagem de boas vindas após um pequeno delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([
        { 
          id: Date.now(),
          sender: 'bot', 
          text: 'Olá! Sou o assistente virtual do BotZap. Como posso ajudar você hoje?',
          options: ['Quero conhecer o produto', 'Quanto custa?', 'Como funciona?']
        }
      ]);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  
  // Monitorar estado de conexão
  useEffect(() => {
    const handleOnline = () => setOfflineMode(false);
    const handleOffline = () => setOfflineMode(true);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    // Verificar estado inicial
    setOfflineMode(!navigator.onLine);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  // Rolar para a última mensagem sempre que novas mensagens forem adicionadas
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Processar a entrada do usuário e gerar uma resposta baseada em IA
  const processUserMessage = (text) => {
    // Simulação de respostas baseadas em palavras-chave
    const lowerText = text.toLowerCase();
    let response;
    let options = [];
    
    // Verificar se está offline e armazenar mensagem para sincronização posterior
    if (offlineMode) {
      saveMessageForSync(text);
      return {
        text: 'Parece que você está offline. Sua mensagem será enviada assim que a conexão for restaurada.',
        options: []
      };
    }
    
    // Simular processamento com IA (em produção, seria uma chamada API real)
    if (lowerText.includes('preço') || lowerText.includes('custo') || lowerText.includes('valor')) {
      response = 'Temos planos a partir de R$ 97/mês com todos os recursos essenciais. Você pode ver detalhes completos na nossa página de preços.';
      options = ['Ver planos', 'Agendar demonstração', 'Outras dúvidas'];
    } 
    else if (lowerText.includes('função') || lowerText.includes('como funciona') || lowerText.includes('recursos')) {
      response = 'O BotZap automatiza seu atendimento no WhatsApp com IA. Você pode criar fluxos de atendimento, integrar com seu CRM, e oferecer respostas personalizadas 24/7.';
      options = ['Ver demonstração', 'Recursos específicos', 'Integrações disponíveis'];
    }
    else if (lowerText.includes('demo') || lowerText.includes('demonstração') || lowerText.includes('testar')) {
      response = 'Ótimo! Você pode agendar uma demonstração do produto com nossa equipe ou explorar nosso ambiente de testes.';
      options = ['Agendar demonstração', 'Explorar plataforma', 'Falar com consultor'];
    }
    else {
      response = 'Entendi! Posso ajudar com informações sobre nossos planos, funcionalidades ou agendar uma demonstração personalizada. O que você prefere?';
      options = ['Conhecer planos', 'Ver funcionalidades', 'Agendar demonstração'];
    }
    
    return { text: response, options };
  };
  
  // Salvar mensagens offline para sincronização posterior
  const saveMessageForSync = async (text) => {
    try {
      // Se IndexedDB estiver disponível
      if ('indexedDB' in window) {
        const request = indexedDB.open('BotZapOfflineDB', 1);
        
        request.onupgradeneeded = (event) => {
          const db = event.target.result;
          if (!db.objectStoreNames.contains('pendingMessages')) {
            db.createObjectStore('pendingMessages', { keyPath: 'id' });
          }
        };
        
        request.onsuccess = (event) => {
          const db = event.target.result;
          const transaction = db.transaction(['pendingMessages'], 'readwrite');
          const store = transaction.objectStore('pendingMessages');
          
          store.add({
            id: Date.now(),
            text,
            timestamp: new Date().toISOString()
          });
          
          // Registrar para sincronização quando online
          if ('serviceWorker' in navigator && 'SyncManager' in window) {
            navigator.serviceWorker.ready.then((registration) => {
              registration.sync.register('sync-messages');
            });
          }
        };
      } else {
        // Fallback para localStorage
        const pendingMessages = JSON.parse(localStorage.getItem('pendingMessages') || '[]');
        pendingMessages.push({
          id: Date.now(),
          text,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('pendingMessages', JSON.stringify(pendingMessages));
      }
    } catch (error) {
      console.error('Erro ao salvar mensagem offline:', error);
    }
  };

  // Enviar mensagem do usuário e obter resposta
  const handleSend = () => {
    if (input.trim()) {
      // Adicionar mensagem do usuário
      const userMessage = { id: Date.now(), sender: 'user', text: input };
      setMessages(prev => [...prev, userMessage]);
      setInput('');
      
      // Registrar evento de analytics
      trackEvent('chat_message_sent', { type: 'user_message' });
      
      // Mostrar indicador de digitação
      setIsTyping(true);
      
      // Simular tempo de resposta da IA (300-1500ms)
      const responseTime = Math.random() * 1200 + 300;
      setTimeout(() => {
        const response = processUserMessage(userMessage.text);
        setMessages(prev => [
          ...prev, 
          { 
            id: Date.now(), 
            sender: 'bot', 
            text: response.text,
            options: response.options
          }
        ]);
        setIsTyping(false);
        
        // Registrar evento de analytics
        trackEvent('chat_message_received', { type: 'bot_response' });
      }, responseTime);
    }
  };
  
  // Lidar com opções de resposta rápida
  const handleOptionClick = (option) => {
    // Adicionar a opção selecionada como mensagem do usuário
    const userMessage = { id: Date.now(), sender: 'user', text: option };
    setMessages(prev => [...prev, userMessage]);
    
    // Registrar evento de analytics
    trackEvent('chat_option_selected', { option });
    
    // Mostrar indicador de digitação
    setIsTyping(true);
    
    // Simular resposta
    setTimeout(() => {
      const response = processUserMessage(option);
      setMessages(prev => [
        ...prev, 
        { 
          id: Date.now(), 
          sender: 'bot', 
          text: response.text,
          options: response.options
        }
      ]);
      setIsTyping(false);
    }, 800);
  };
  
  // Lidar com tecla Enter para envio
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  // Alternar visibilidade do chat
  const toggleChat = () => {
    setIsOpen(prev => !prev);
    if (!isOpen) {
      trackEvent('chat_opened');
    } else {
      trackEvent('chat_closed');
    }
  };

  return (
    <>
      {/* Botão do chat flutuante */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg z-40 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </motion.button>

      {/* Janela do chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-6 w-full sm:w-96 bg-white shadow-2xl rounded-lg overflow-hidden z-40"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Cabeçalho */}
            <div className="bg-indigo-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                <h3 className="font-bold text-lg">BotZap Assistant</h3>
              </div>
              {offlineMode && (
                <span className="px-2 py-1 bg-yellow-500 text-xs rounded-full text-white">Offline</span>
              )}
            </div>
            
            {/* Área de mensagens */}
            <div className="p-4 h-80 overflow-y-auto bg-gray-50">
              {messages.length === 0 ? (
                <div className="h-full flex items-center justify-center text-gray-400">
                  <p>Iniciando conversa...</p>
                </div>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`mb-4 ${msg.sender === 'bot' ? 'text-left' : 'text-right'}`}
                  >
                    <div
                      className={`inline-block px-4 py-2 rounded-lg max-w-[85%] ${
                        msg.sender === 'bot'
                          ? 'bg-white text-gray-800 border border-gray-200 shadow-sm'
                          : 'bg-indigo-600 text-white'
                      }`}
                    >
                      <p className="whitespace-pre-wrap break-words">{msg.text}</p>
                    </div>
                    
                    {/* Opções de resposta rápida */}
                    {msg.sender === 'bot' && msg.options && msg.options.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {msg.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm hover:bg-indigo-200 transition-colors text-left"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              )}
              
              {/* Indicador de "digitando..." */}
              {isTyping && (
                <div className="flex items-center space-x-1 mt-2">
                  <div className="bg-gray-300 w-2 h-2 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="bg-gray-300 w-2 h-2 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="bg-gray-300 w-2 h-2 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Área de entrada */}
            <div className="p-4 border-t border-gray-200">
              <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder={offlineMode ? "Modo offline ativado..." : "Digite sua mensagem..."}
                  disabled={offlineMode}
                  className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || offlineMode}
                  className={`px-4 py-2 rounded-r-lg ${
                    !input.trim() || offlineMode
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </form>
              <div className="mt-2 text-xs text-gray-500 text-center">
                <span>Demonstração do BotZap - {offlineMode ? '📵 Modo Offline' : '🟢 Online'}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}