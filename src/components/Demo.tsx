import { useState, useEffect, useRef, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { framerMotionConfig } from '../lib/animations/config';
import GlowyCardWrapper from './stunning/GlowyCardWrapper';
import GlowyCard from './stunning/GlowyCard';
import BotModel3D from './BotModel3D';

// Tipos para as mensagens no chat
interface ChatMessage {
  sender: 'bot' | 'user';
  content: string;
  time: string;
}

export default function Demo(): React.ReactElement {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'bot',
      content: 'Olá! Sou o assistente virtual do BotZap. Como posso ajudá-lo hoje?',
      time: '10:00'
    }
  ]);
  
  const [inputText, setInputText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'info' | '3d'>('chat'); 
  const [botColor, setBotColor] = useState<string>('#1976D2');
  const [wireframe, setWireframe] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Respostas pré-programadas para a demonstração
  const demoResponses: Record<string, string> = {
    'horário': 'Nosso horário de atendimento é de segunda a sexta, das 8h às 18h.',
    'preço': 'Temos planos a partir de R$97/mês. Você pode ver todos os detalhes em nossa página de preços.',
    'planos': 'Oferecemos planos Básico (R$97/mês), Profissional (R$197/mês) e Empresarial (R$497/mês), todos com 7 dias de teste grátis!',
    'funcionalidades': 'O BotZap oferece atendimento automático, integração com CRM, dashboard analítico, múltiplos atendentes e muito mais!',
    'contato': 'Você pode falar conosco pelo WhatsApp (11) 99999-9999 ou pelo email contato@botzap.com.br',
    'api': 'Sim, temos API de integração que permite conectar com praticamente qualquer sistema!'
  };
  
  // Exemplos de perguntas sugeridas
  const suggestedQuestions: string[] = [
    'Qual o horário de funcionamento?',
    'Quais são os planos disponíveis?',
    'Quais são as principais funcionalidades?',
    'Como posso entrar em contato?',
    'O BotZap tem API de integração?'
  ];

  // Auto-scroll para a última mensagem
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const handleSendMessage = (): void => {
    if (!inputText.trim()) return;
    
    // Adiciona a mensagem do usuário
    const newUserMessage: ChatMessage = {
      sender: 'user',
      content: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInputText('');
    setIsTyping(true);
    
    // Simula resposta do bot após 1-2 segundos
    setTimeout(() => {
      let botResponse = 'Desculpe, não entendi sua pergunta. Pode reformular ou escolher uma das opções abaixo?';
      
      // Verifica se a mensagem do usuário contém alguma palavra-chave
      Object.keys(demoResponses).forEach(keyword => {
        if (inputText.toLowerCase().includes(keyword)) {
          botResponse = demoResponses[keyword];
        }
      });
      
      const newBotMessage: ChatMessage = {
        sender: 'bot',
        content: botResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setIsTyping(false);
      setMessages(prev => [...prev, newBotMessage]);
    }, Math.random() * 1000 + 1000); // 1-2 segundos
  };

  const handleSuggestedQuestion = (question: string): void => {
    setInputText(question);
    setTimeout(() => handleSendMessage(), 300);
  };

  // Cores predefinidas para o modelo 3D
  const predefinedColors: string[] = [
    '#1976D2', // Azul padrão
    '#4CAF50', // Verde
    '#F44336', // Vermelho
    '#9C27B0', // Roxo 
    '#FF9800', // Laranja
    '#00BCD4', // Ciano
  ];

  return (
    <section 
      id="demonstracao" 
      className="py-24 px-6 bg-gradient-to-b from-black to-neutral-950 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 -left-20 w-60 h-60 bg-cyan-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-900/30 to-blue-800/30 border border-blue-700/30 inline-block mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Demonstração Interativa
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Experimente Agora
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          
          <motion.p 
            className="mt-4 text-xl text-neutral-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Veja como funciona nosso chatbot interativo e como ele pode transformar seu atendimento
          </motion.p>
          
          {/* Tabs para navegação entre visualizações */}
          <div className="flex justify-center mt-8 mb-4">
            <div className="inline-flex bg-white/5 backdrop-blur-sm rounded-full p-1 border border-white/10">
              <button
                onClick={() => setActiveTab('chat')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'chat' 
                    ? 'bg-gradient-to-r from-blue-700 to-blue-600 text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Chat Demo
              </button>
              
              <button
                onClick={() => setActiveTab('3d')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === '3d' 
                    ? 'bg-gradient-to-r from-blue-700 to-blue-600 text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Visualização 3D
              </button>
              
              <button
                onClick={() => setActiveTab('info')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'info' 
                    ? 'bg-gradient-to-r from-blue-700 to-blue-600 text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Estatísticas
              </button>
            </div>
          </div>
        </motion.div>
        
        <AnimatePresence mode="wait">
          {/* Tab do Chat Demo */}
          {activeTab === 'chat' && (
            <motion.div
              key="chat-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={framerMotionConfig.transition.default}
              className="flex flex-col lg:flex-row gap-8 items-stretch"
            >
              {/* Parte esquerda - Texto informativo e métricas */}
              <motion.div 
                className="lg:w-5/12 space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Teste nosso bot</h3>
                      <p className="text-neutral-400">Inteligente e responsivo</p>
                    </div>
                  </div>
                  
                  <p className="text-neutral-300 mb-6">
                    Esta é uma demonstração do nosso chatbot. Na versão completa, 
                    você pode personalizar respostas, criar fluxos conversacionais avançados 
                    e integrar com todos os seus sistemas existentes.
                  </p>
                  
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-white font-medium">Experimente perguntar sobre:</p>
                    <ul className="space-y-2 mt-3">
                      {suggestedQuestions.map((question, idx) => (
                        <li key={idx}>
                          <button
                            onClick={() => handleSuggestedQuestion(question)}
                            className="text-left w-full px-3 py-2 rounded-lg text-sm text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
                          >
                            {question}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-center mt-6">
                    <a 
                      href="#pricing"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-colors"
                    >
                      Ver planos e preços
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                
                {/* Depoimento rápido */}
                <motion.div 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start">
                    <svg className="w-12 h-12 text-blue-500 mr-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                    </svg>
                    <div>
                      <p className="text-neutral-300 mb-3">
                        O BotZap transformou nosso atendimento. Reduzimos custos e aumentamos a satisfação dos clientes!
                      </p>
                      <div className="flex items-center">
                        <div className="rounded-full w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                          ML
                        </div>
                        <div className="ml-3">
                          <p className="text-white font-medium text-sm">Maria Lima</p>
                          <p className="text-neutral-500 text-xs">Gerente de Marketing, TechCorp</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Parte direita - Chat demo com efeito glow */}
              <motion.div 
                className="lg:w-7/12"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  {/* Efeitos decorativos em torno do chat */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl"></div>
                  
                  <GlowyCardWrapper hue={220} size={180} border={2} radius={16} interactive={true}>
                    <GlowyCard className="w-full">
                      <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900/90 backdrop-blur-sm">
                        {/* Cabeçalho do chat */}
                        <div className="bg-gradient-to-r from-neutral-800 to-neutral-900 text-white p-4 flex items-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">BotZap Assistente</p>
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                              <p className="text-xs text-neutral-300">Online agora</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10">
                              <svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h18M9 8v8m-4-5v5m8-8v8m4-5v5" />
                              </svg>
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10">
                              <svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        
                        {/* Área de mensagens */}
                        <div className="p-4 h-[400px] overflow-y-auto bg-gradient-to-b from-neutral-900 to-neutral-950 flex flex-col space-y-3">
                          <div className="bg-neutral-800/50 text-neutral-400 text-xs text-center p-1 rounded-full w-32 mx-auto">
                            Hoje, {new Date().toLocaleDateString()}
                          </div>
                          
                          {messages.map((msg, index) => (
                            <motion.div 
                              key={index} 
                              className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              {msg.sender === 'bot' && (
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 self-end">
                                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                  </svg>
                                </div>
                              )}
                              
                              <div 
                                className={`max-w-[80%] rounded-2xl p-3 ${
                                  msg.sender === 'bot' 
                                    ? 'bg-neutral-800/70 border border-neutral-700/50 text-white' 
                                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                                }`}
                              >
                                <p className="text-white">{msg.content}</p>
                                <span className={`text-xs block text-right mt-1 ${
                                  msg.sender === 'bot' ? 'text-neutral-400' : 'text-white/70'
                                }`}>
                                  {msg.time}
                                </span>
                              </div>
                              
                              {msg.sender === 'user' && (
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center ml-2 self-end">
                                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                  </svg>
                                </div>
                              )}
                            </motion.div>
                          ))}
                          
                          {isTyping && (
                            <div className="flex justify-start">
                              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                              </div>
                              <div className="bg-neutral-800/70 border border-neutral-700/50 px-4 py-3 rounded-2xl">
                                <div className="flex space-x-1">
                                  <div className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                                  <div className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                                  <div className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          <div ref={messagesEndRef} />
                        </div>
                        
                        {/* Área de input */}
                        <div className="border-t border-neutral-800 p-4 bg-neutral-900">
                          <div className="flex">
                            <button className="p-2 rounded-full hover:bg-white/5 mr-2">
                              <svg className="w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </button>
                            <input
                              type="text"
                              value={inputText}
                              onChange={(e) => setInputText(e.target.value)}
                              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                              placeholder="Digite sua mensagem..."
                              className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
                            />
                            <button 
                              onClick={handleSendMessage}
                              className="ml-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                            >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                              </svg>
                            </button>
                          </div>
                          <div className="mt-2 text-xs text-neutral-500 text-center">
                            Alimentado por IA avançada • Responde em até 1 segundo
                          </div>
                        </div>
                      </div>
                    </GlowyCard>
                  </GlowyCardWrapper>
                </div>
              </motion.div>
            </motion.div>
          )}
          
          {/* Tab de visualização 3D */}
          {activeTab === '3d' && (
            <motion.div
              key="3d-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={framerMotionConfig.transition.default}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3">Visualização 3D Interativa</h3>
                  <p className="text-neutral-300">
                    Explore nosso assistente virtual em 3D. Arraste para rotacionar, clique para ver mais detalhes.
                  </p>
                </div>
                
                {/* Controles de personalização */}
                <div className="mb-8 flex flex-wrap gap-4 items-center justify-center">
                  <div>
                    <p className="text-sm text-neutral-400 mb-2">Escolha uma cor:</p>
                    <div className="flex flex-wrap gap-2">
                      {predefinedColors.map((color, idx) => (
                        <button
                          key={idx}
                          onClick={() => setBotColor(color)}
                          className={`w-8 h-8 rounded-full transition-transform ${botColor === color ? 'ring-2 ring-white scale-110' : ''}`}
                          style={{ backgroundColor: color }}
                          aria-label={`Cor ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-neutral-400 mb-2">Modo wireframe:</p>
                    <label className="inline-flex items-center cursor-pointer">
                      <div className="relative">
                        <input 
                          type="checkbox" 
                          className="sr-only" 
                          checked={wireframe}
                          onChange={() => setWireframe(!wireframe)}
                        />
                        <div className={`w-10 h-5 rounded-full transition ${wireframe ? 'bg-blue-500' : 'bg-neutral-700'}`}></div>
                        <div className={`dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition transform ${wireframe ? 'translate-x-5' : ''}`}></div>
                      </div>
                      <span className="ml-3 text-sm font-medium text-neutral-300">
                        {wireframe ? 'Ativado' : 'Desativado'}
                      </span>
                    </label>
                  </div>
                </div>
                
                {/* Visualização 3D */}
                <div className="h-[500px] w-full rounded-xl overflow-hidden border border-neutral-800/50 bg-black/30 backdrop-blur-sm">
                  <Suspense fallback={
                    <div className="h-full w-full flex items-center justify-center">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        <p className="mt-4 text-neutral-400">Carregando modelo 3D...</p>
                      </div>
                    </div>
                  }>
                    <BotModel3D color={botColor} wireframe={wireframe} />
                  </Suspense>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <a 
                    href="#pricing" 
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all flex items-center"
                  >
                    Quero um BotZap para minha empresa
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Tab de estatísticas */}
          {activeTab === 'info' && (
            <motion.div
              key="info-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={framerMotionConfig.transition.default}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl overflow-hidden p-6">
                <h3 className="text-2xl font-bold text-white mb-3">Desempenho e Estatísticas</h3>
                <p className="text-neutral-300 mb-6">
                  Nosso chatbot oferece desempenho superior e resultados comprovados para seu negócio.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Estatísticas principais */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Métricas de Desempenho</h4>
                    <div className="space-y-4">
                      {[
                        { label: "Precisão de resposta", value: "97%", color: "from-blue-500 to-cyan-500" },
                        { label: "Tempo médio de resposta", value: "1.2s", color: "from-green-500 to-emerald-500" },
                        { label: "Aumento na taxa de conversão", value: "35%", color: "from-purple-500 to-pink-500" },
                        { label: "Satisfação do cliente", value: "98%", color: "from-amber-500 to-orange-500" }
                      ].map((stat, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between mb-1">
                            <span className="text-neutral-300">{stat.label}</span>
                            <span className="text-white font-medium">{stat.value}</span>
                          </div>
                          <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                            <motion.div 
                              className={`h-full rounded-full bg-gradient-to-r ${stat.color}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: stat.value }}
                              transition={{ duration: 1, delay: idx * 0.2 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Gráfico simulado */}
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-lg font-semibold text-white mb-3">Crescimento de Desempenho</h4>
                    <div className="h-60 flex items-end justify-between gap-1">
                      {[25, 40, 30, 50, 60, 55, 70, 85, 75, 90].map((height, idx) => (
                        <motion.div
                          key={idx}
                          className="bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm w-full"
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          transition={{ duration: 0.7, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="h-full relative">
                            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white">
                              {height}%
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="grid grid-cols-10 mt-2">
                      {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out'].map((month, idx) => (
                        <div key={idx} className="text-center text-xs text-neutral-400">
                          {month}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Recursos e integração */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Recursos Principais</h4>
                    <ul className="space-y-2">
                      {[
                        "Respostas inteligentes baseadas em IA",
                        "Personalização de fluxos de conversa",
                        "Suporte a múltiplos idiomas (15+)",
                        "Integração com WhatsApp Business API",
                        "Análises e relatórios em tempo real",
                        "Transferência para atendente humano"
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-neutral-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Integrações</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        "WhatsApp", "Shopify", "WordPress",
                        "Salesforce", "HubSpot", "Zapier",
                        "Instagram", "Gmail", "Slack"
                      ].map((integration, idx) => (
                        <div key={idx} className="flex items-center justify-center bg-white/5 rounded-lg p-3 border border-white/5 hover:border-blue-500/30 transition-colors">
                          <span className="text-sm text-neutral-300">{integration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* CTA Banner */}
        <motion.div 
          className="mt-20 rounded-2xl overflow-hidden relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8 max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Revolucione seu atendimento ao cliente
              </h3>
              <p className="text-neutral-300">
                Junte-se a mais de 2,500+ empresas que aumentaram suas vendas com BotZap
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#pricing"
                className="px-6 py-3 rounded-xl font-medium text-lg bg-white text-neutral-900 hover:bg-neutral-100 transition-all flex items-center"
              >
                Ver planos
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
              <a 
                href="#contato"
                className="px-6 py-3 rounded-xl font-medium text-lg bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all flex items-center"
              >
                Falar com especialista
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}