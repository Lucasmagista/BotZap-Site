import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

// Tipos para as mensagens e configurações
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  status: 'sending' | 'sent' | 'delivered' | 'read' | 'error';
  attachments?: Attachment[];
}

interface Attachment {
  id: string;
  type: 'image' | 'audio' | 'video' | 'document';
  url: string;
  name?: string;
  size?: number;
  thumbnail?: string;
}

interface BotConfig {
  name: string;
  avatar: string;
  welcomeMessage: string;
  typingSpeed: number; // ms per character
  responseDelay: number; // ms before starting to respond
  intelligence: 'basic' | 'nlp' | 'llm';
  language: string;
  voiceEnabled: boolean;
  personality: 'friendly' | 'professional' | 'humorous' | 'technical';
}

interface ChatbotProps {
  apiUrl?: string;
  initialMessages?: Message[];
  config?: Partial<BotConfig>;
  onSend?: (message: Message) => void;
  onBotResponse?: (message: Message) => void;
  onClose?: () => void;
  className?: string;
  fullScreen?: boolean;
  theme?: 'light' | 'dark' | 'auto';
}

// Configuração padrão do bot
const defaultConfig: BotConfig = {
  name: 'BotZap Assistente',
  avatar: '/whatsapp-bot.png',
  welcomeMessage: 'Olá! Sou o assistente BotZap. Como posso ajudar você hoje?',
  typingSpeed: 50,
  responseDelay: 800,
  intelligence: 'llm',
  language: 'pt-BR',
  voiceEnabled: false,
  personality: 'friendly',
};

const Chatbot: React.FC<ChatbotProps> = ({
  apiUrl = '/api/chat',
  initialMessages = [],
  config = {},
  onSend,
  onBotResponse,
  // onClose, // Removemos o parâmetro não utilizado
  className = '',
  fullScreen = false,
  theme = 'auto',
}) => {
  // Mesclando configurações padrão com as fornecidas
  const botConfig: BotConfig = { ...defaultConfig, ...config };
  
  // Estados do componente
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMicActive, setIsMicActive] = useState(false);
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [darkMode, setDarkMode] = useState(theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches));
  
  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  // Speech recognition API (se disponível no navegador)
  const SpeechRecognitionAPI = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  const recognition = SpeechRecognitionAPI ? new SpeechRecognitionAPI() : null;
  
  if (recognition) {
    recognition.lang = botConfig.language;
    recognition.continuous = false;
    recognition.interimResults = false;
  }
  
  // Efeito para adicionar mensagem de boas-vindas
  useEffect(() => {
    if (messages.length === 0 && botConfig.welcomeMessage) {
      addBotMessage(botConfig.welcomeMessage);
    }
    
    // Listener para modo escuro
    if (theme === 'auto') {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleDarkModeChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);
      darkModeMediaQuery.addEventListener('change', handleDarkModeChange);
      return () => darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
    }
  }, []);
  
  // Efeito para scrollar para o final quando novas mensagens chegarem
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Funções auxiliares
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const addUserMessage = (text: string, attachs: Attachment[] = []) => {
    const newMessage: Message = {
      id: uuidv4(),
      text,
      sender: 'user',
      timestamp: new Date(),
      status: 'sending',
      attachments: [...attachs],
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    // Callback para componente pai
    if (onSend) onSend(newMessage);
    
    // Simular envio concluído após 1 segundo
    setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === newMessage.id ? { ...msg, status: 'delivered' } : msg
        )
      );
    }, 1000);
    
    return newMessage;
  };
  
  const addBotMessage = async (text: string, delayResponse = true) => {
    // Opcional: Simular bot digitando
    if (delayResponse) {
      setIsTyping(true);
      
      // Delay baseado na complexidade da resposta para parecer mais humano
      const delay = botConfig.responseDelay + (text.length * botConfig.typingSpeed / 10);
      await new Promise(resolve => setTimeout(resolve, Math.min(delay, 3000)));
      
      setIsTyping(false);
    }
    
    const newMessage: Message = {
      id: uuidv4(),
      text,
      sender: 'bot',
      timestamp: new Date(),
      status: 'sent',
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    // Callback para componente pai
    if (onBotResponse) onBotResponse(newMessage);
    
    return newMessage;
  };
  
  // Lógica para envio de mensagem
  const handleSendMessage = async () => {
    if (!inputText.trim() && attachments.length === 0) return;
    
    // Adiciona mensagem do usuário
    const userMessage = addUserMessage(inputText, attachments);
    
    // Limpa input e anexos
    setInputText('');
    setAttachments([]);
    
    try {
      // Chama API para obter resposta do bot
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: inputText,
          attachments: attachments,
          sessionId: localStorage.getItem('chatSessionId') || uuidv4(),
          config: {
            intelligence: botConfig.intelligence,
            personality: botConfig.personality
          }
        }),
      });
      
      if (!response.ok) {
        throw new Error('Falha na comunicação com o servidor');
      }
      
      const data = await response.json();
      
      // Verifica se estamos offline
      if (navigator.onLine) {
        // Adiciona resposta do bot
        addBotMessage(data.response);
      } else {
        // Armazena mensagem para envio posterior quando online
        const dbPromise = indexedDB.open('botzap-offline-db', 1);
        dbPromise.onsuccess = function() {
          const db = dbPromise.result;
          const tx = db.transaction('pendingMessages', 'readwrite');
          const store = tx.objectStore('pendingMessages');
          
          store.add({
            id: uuidv4(),
            userMessage: userMessage,
            timestamp: new Date(),
            sent: false
          });
          
          // Adiciona mensagem local informando sobre o estado offline
          addBotMessage('Você está offline no momento. Sua mensagem será enviada quando a conexão for restabelecida.', false);
        };
      }
    } catch (error) {
      console.error('Erro ao processar mensagem:', error);
      
      // Mensagem de erro para o usuário
      addBotMessage('Desculpe, tive um problema ao processar sua mensagem. Pode tentar novamente?');
      
      // Atualiza status da mensagem do usuário
      setMessages(prev => 
        prev.map(msg => 
          msg.id === userMessage.id ? { ...msg, status: 'error' } : msg
        )
      );
    }
  };
  
  // Manipulação de entrada por voz
  const toggleVoiceInput = () => {
    if (!recognition) {
      addBotMessage('Desculpe, seu navegador não suporta entrada por voz.');
      return;
    }
    
    if (isMicActive) {
      recognition.stop();
      setIsMicActive(false);
    } else {
      recognition.start();
      setIsMicActive(true);
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText(prev => prev + transcript);
        setIsMicActive(false);
      };
      
      recognition.onerror = () => {
        setIsMicActive(false);
        addBotMessage('Erro ao capturar áudio, tente novamente.');
      };
      
      recognition.onend = () => {
        setIsMicActive(false);
      };
    }
  };
  
  // Manipulação de anexos
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newAttachments: Attachment[] = [];
      
      Array.from(e.target.files).forEach(file => {
        const fileType = file.type.split('/')[0];
        let type: 'image' | 'audio' | 'video' | 'document' = 'document';
        
        if (fileType === 'image') type = 'image';
        else if (fileType === 'audio') type = 'audio';
        else if (fileType === 'video') type = 'video';
        
        // Criar URL temporário para o arquivo
        const url = URL.createObjectURL(file);
        
        newAttachments.push({
          id: uuidv4(),
          type,
          url,
          name: file.name,
          size: file.size,
        });
      });
      
      setAttachments(prev => [...prev, ...newAttachments]);
    }
  };
  
  const removeAttachment = (id: string) => {
    setAttachments(prev => prev.filter(attachment => attachment.id !== id));
  };
  
  // Templates e renderização
  const renderMessage = (message: Message) => {
    const isUser = message.sender === 'user';
    
    return (
      <motion.div
        key={message.id}
        className={`message ${isUser ? 'user' : 'bot'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {!isUser && (
          <div className="avatar">
            <img src={botConfig.avatar} alt={botConfig.name} />
          </div>
        )}
        
        <div className="message-content">
          {message.attachments && message.attachments.length > 0 && (
            <div className="attachments">
              {message.attachments.map(attachment => (
                <div key={attachment.id} className={`attachment ${attachment.type}`}>
                  {attachment.type === 'image' && (
                    <img src={attachment.url} alt={attachment.name || 'Imagem'} />
                  )}
                  {attachment.type === 'video' && (
                    <video controls src={attachment.url}></video>
                  )}
                  {attachment.type === 'audio' && (
                    <audio controls src={attachment.url}></audio>
                  )}
                  {attachment.type === 'document' && (
                    <div className="document">
                      <span className="document-icon">📄</span>
                      <span className="document-name">{attachment.name}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          
          {message.text && <div className="text">{message.text}</div>}
          
          <div className="metadata">
            <span className="time">
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
            
            {isUser && (
              <span className="status">
                {message.status === 'sending' && '⏳'}
                {message.status === 'sent' && '✓'}
                {message.status === 'delivered' && '✓✓'}
                {message.status === 'read' && <span className="read">✓✓</span>}
                {message.status === 'error' && '⚠️'}
              </span>
            )}
          </div>
        </div>
        
        {isUser && (
          <div className="avatar user">
            <div className="user-initial">
              {localStorage.getItem('userName')?.charAt(0) || 'U'}
            </div>
          </div>
        )}
      </motion.div>
    );
  };
  
  const renderAttachmentPreviews = () => {
    return attachments.map(attachment => (
      <div key={attachment.id} className="attachment-preview">
        {attachment.type === 'image' && (
          <img src={attachment.url} alt="Preview" />
        )}
        {attachment.type !== 'image' && (
          <div className="file-preview">
            <span>{attachment.name}</span>
          </div>
        )}
        <button 
          className="remove-attachment" 
          onClick={() => removeAttachment(attachment.id)}
        >
          &times;
        </button>
      </div>
    ));
  };
  
  // Renderização do componente
  return (
    <div 
      className={`chatbot-container ${className} ${fullScreen ? 'fullscreen' : ''} ${darkMode ? 'dark-mode' : 'light-mode'}`}
      ref={chatContainerRef}
    >
      <div className="chatbot-header">
        <div className="bot-info">
          <img src={botConfig.avatar} alt={botConfig.name} className="bot-avatar" />
          <div className="bot-details">
            <h3>{botConfig.name}</h3>
            <span className="status online">Online</span>
          </div>
        </div>
        
        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️' : '🌙'}
          </button>
          {!fullScreen && (
            <button className="minimize" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? '▼' : '▲'}
            </button>
          )}
        </div>
      </div>
      
      <AnimatePresence>
        {(isOpen || fullScreen) && (
          <motion.div 
            className="chatbot-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="messages">
              {messages.map(renderMessage)}
              
              {isTyping && (
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {attachments.length > 0 && (
              <div className="attachment-previews">
                {renderAttachmentPreviews()}
              </div>
            )}
            
            <div className="input-area">
              <button 
                className="attach-button"
                onClick={() => fileInputRef.current?.click()}
              >
                📎
              </button>
              
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileSelect}
                multiple
              />
              
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Digite sua mensagem..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              
              {botConfig.voiceEnabled && recognition && (
                <button 
                  className={`voice-button ${isMicActive ? 'active' : ''}`}
                  onClick={toggleVoiceInput}
                >
                  {isMicActive ? '🔴' : '🎤'}
                </button>
              )}
              
              <button 
                className="send-button"
                onClick={handleSendMessage}
                disabled={!inputText.trim() && attachments.length === 0}
              >
                📤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;