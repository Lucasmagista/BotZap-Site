import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import GlowyCard from './stunning/GlowyCard';

// FAQ estendido com mais perguntas comuns
const faqs = [
  {
    question: 'Como o BotZap funciona com meu WhatsApp?',
    answer: 'O BotZap conecta-se com a API oficial do WhatsApp Business, permitindo automação completa sem necessidade de aparelhos físicos. Nossa tecnologia de IA processa mensagens recebidas, identifica a intenção do cliente e fornece respostas personalizadas em tempo real, tudo isso mantendo a segurança e autenticidade da sua conta.',
    category: 'uso',
    icon: '🤖',
  },
  {
    question: 'É preciso conhecimento técnico para configurar?',
    answer: 'Não! O BotZap foi projetado para ser extremamente intuitivo. Nossa interface drag-and-drop permite criar fluxos de atendimento complexos sem escrever uma linha de código. Disponibilizamos também modelos pré-configurados para diversos segmentos de negócio, que você pode personalizar facilmente conforme suas necessidades.',
    category: 'uso', 
    icon: '⚙️',
  },
  {
    question: 'Como a IA do BotZap é treinada para meu negócio?',
    answer: 'Nossa IA já vem pré-treinada para entender linguagem natural em diversos contextos de atendimento. Para personalização, você pode carregar seus materiais (FAQs, manuais, catálogos) e o sistema absorve esse conhecimento. Além disso, a IA aprende e se aprimora continuamente com cada interação, refinando suas respostas com base no histórico de conversas da sua empresa.',
    category: 'tecnologia',
    icon: '🧠',
  },
  {
    question: 'O BotZap se integra com meu sistema atual?',
    answer: 'Sim, oferecemos integrações nativas com os principais sistemas CRM, e-commerce e ERP do mercado, incluindo Salesforce, HubSpot, Shopify, SAP e muitos outros. Para sistemas personalizados, nossa API RESTful bem documentada permite integrações fáceis e a equipe de suporte está disponível para auxiliar nesse processo.',
    category: 'integração',
    icon: '🔄',
  },
  {
    question: 'Quanto tempo leva para implementar completamente?',
    answer: 'A configuração básica leva apenas algumas horas. A maioria dos clientes consegue ter o BotZap funcionando com automações simples em menos de 1 dia. Para cenários mais complexos com integrações múltiplas, o processo completo pode levar até uma semana, mas você já começa a ver resultados desde o primeiro dia de uso.',
    category: 'implementação',
    icon: '⏱️',
  },
  {
    question: 'Como é feita a cobrança e existe algum limite de mensagens?',
    answer: 'Nossos planos são baseados em quantidade de conversas mensais e recursos disponíveis. Cada plano tem um limite específico de mensagens, e você receberá alertas quando estiver se aproximando do limite. Caso exceda, cobramos apenas pelo excedente utilizado, sem suspender o serviço. Oferecemos também planos ilimitados para grandes volumes.',
    category: 'preços',
    icon: '💰',
  },
  {
    question: 'O BotZap atende às normas de proteção de dados?',
    answer: 'Absolutamente. Nosso sistema foi desenvolvido com privacidade by design, em total conformidade com LGPD (Brasil) e GDPR (Europa). Os dados são encriptados end-to-end, armazenados em servidores seguros e você tem total controle sobre a política de retenção de dados, podendo exportá-los ou excluí-los quando necessário.',
    category: 'segurança',
    icon: '🔒',
  },
  {
    question: 'Posso transferir o atendimento para um humano quando necessário?',
    answer: 'Sim, o BotZap detecta quando uma interação precisa de atenção humana e transfere automaticamente para sua equipe de suporte. Você pode definir gatilhos específicos para transferência (frases, sentimento do cliente, complexidade da solicitação) e as conversas são distribuídas de forma inteligente entre seus atendentes conforme disponibilidade e especialidade.',
    category: 'atendimento',
    icon: '👨‍💼',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('todos');
  const [filteredFAQs, setFilteredFAQs] = useState(faqs);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [hasSearchResults, setHasSearchResults] = useState(true);
  
  const searchRef = useRef(null);
  const isInView = useInView(searchRef, { once: true, amount: 0.2 });

  // Categorias únicas extraídas da lista de FAQs
  const categories = ['todos', ...new Set(faqs.map(faq => faq.category))];

  // Filtra FAQs por categoria e termo de busca
  useEffect(() => {
    let result = faqs;
    
    // Filtro por categoria
    if (activeCategory !== 'todos') {
      result = result.filter(faq => faq.category === activeCategory);
    }
    
    // Filtro por termo de busca
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        faq => 
          faq.question.toLowerCase().includes(term) || 
          faq.answer.toLowerCase().includes(term)
      );
    }
    
    setFilteredFAQs(result);
    setHasSearchResults(result.length > 0);
    if (searchTerm && result.length > 0) {
      setOpenIndex(0); // Abre o primeiro resultado ao pesquisar
    } else {
      setOpenIndex(null); // Fecha todos os FAQs ao filtrar sem resultados
    }
  }, [activeCategory, searchTerm]);

  // Função para destacar termos de pesquisa no texto
  const highlightText = (text) => {
    if (!searchTerm) return text;
    
    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === searchTerm.toLowerCase() 
        ? <mark key={index} className="bg-blue-500/30 text-white px-1 rounded">{part}</mark>
        : part
    );
  };

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Limpar busca
  const clearSearch = () => {
    setSearchTerm('');
    searchRef.current.focus();
  };

  return (
    <section id="faq" className="py-24 px-6 bg-gradient-to-b from-black to-neutral-900 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-[100px]"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-500 rounded-full blur-[100px] opacity-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
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
            <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Suporte rápido
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-300">
              Perguntas Frequentes
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
            Encontre respostas rápidas para as dúvidas mais comuns sobre nossa plataforma
          </motion.p>
        </motion.div>

        {/* Barra de busca aprimorada */}
        <motion.div 
          ref={searchRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-lg mx-auto"
        >
          <div 
            className={`relative transition-all duration-300 ${
              isSearchFocused ? 'transform scale-105 shadow-xl shadow-blue-500/10' : ''
            }`}
          >
            <input
              type="text"
              placeholder="Buscar uma pergunta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              ref={searchRef}
              aria-label="Buscar em FAQs"
              className={`w-full bg-white/5 backdrop-blur-sm border rounded-full py-4 pl-12 pr-12 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                isSearchFocused 
                  ? 'border-blue-500/50 bg-white/10' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            />
            <svg
              className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${
                isSearchFocused ? 'text-blue-400' : 'text-neutral-400'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-4 text-neutral-400 hover:text-white transition-colors"
                aria-label="Limpar busca"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          
          {/* Badge de contagem de resultados */}
          <AnimatePresence>
            {searchTerm && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center mt-2 text-sm text-neutral-400"
              >
                {filteredFAQs.length > 0 ? (
                  <span>
                    {filteredFAQs.length} {filteredFAQs.length === 1 ? 'resultado' : 'resultados'} encontrado{filteredFAQs.length === 1 ? '' : 's'}
                  </span>
                ) : null}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Filtros por categoria */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {hasSearchResults ? (
          <motion.div 
            layout
            className="space-y-4"
          >
            {filteredFAQs.map((faq, index) => {
              // Calcula se este FAQ deve estar aberto baseado na pesquisa
              const shouldHighlight = searchTerm && 
                (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                faq.answer.toLowerCase().includes(searchTerm.toLowerCase()));
              
              return (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`rounded-xl overflow-hidden transition-all ${
                    openIndex === index 
                      ? 'shadow-lg shadow-blue-500/10 bg-gradient-to-br from-blue-900/20 to-black/80 backdrop-blur-md border border-blue-500/30' 
                      : shouldHighlight 
                        ? 'bg-gradient-to-br from-blue-900/10 to-black/60 border border-blue-500/20 backdrop-blur-sm'
                        : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    className="w-full py-5 px-6 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500/40 group text-left"
                    onClick={() => handleToggle(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center mr-4 transition-all ${
                        openIndex === index 
                          ? 'bg-blue-500 text-white' 
                          : shouldHighlight 
                            ? 'bg-blue-500/30 text-blue-300' 
                            : 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30'
                      }`}>
                        <span className="text-xl">{faq.icon}</span>
                      </div>
                      <h3 className={`text-lg font-semibold transition-colors ${
                        openIndex === index 
                          ? 'text-white' 
                          : shouldHighlight 
                            ? 'text-blue-300' 
                            : 'text-white group-hover:text-blue-400'
                      }`}>
                        {searchTerm ? highlightText(faq.question) : faq.question}
                      </h3>
                    </div>
                    <div className={`flex-shrink-0 ml-4 p-1 rounded-full border transition-colors duration-200 ${
                      openIndex === index 
                        ? 'bg-blue-500 border-blue-500' 
                        : shouldHighlight 
                          ? 'border-blue-500/50 bg-transparent' 
                          : 'border-blue-500/30 bg-transparent'
                    }`}>
                      <motion.svg
                        className={`w-5 h-5 ${openIndex === index ? 'text-white' : 'text-blue-500'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <motion.div 
                          className="pb-6 px-6 pl-20 text-neutral-300 leading-relaxed border-t border-white/10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                        >
                          <div className="pt-4 prose prose-sm prose-invert max-w-none">
                            {searchTerm ? highlightText(faq.answer) : faq.answer}
                          </div>
                          
                          {/* Botões de feedback */}
                          <div className="mt-4 pt-4 border-t border-white/10 flex items-center text-sm text-neutral-500">
                            <span className="mr-4">Esta resposta foi útil?</span>
                            <button className="p-1.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-green-400 transition-colors" aria-label="Resposta útil">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                              </svg>
                            </button>
                            <button className="p-1.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-red-400 transition-colors ml-2" aria-label="Resposta não útil">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2" />
                              </svg>
                            </button>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16 px-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10"
          >
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-blue-900/30 mb-6 text-3xl animate-pulse">
              🔍
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Nenhum resultado encontrado</h3>
            <p className="text-neutral-400 max-w-md mx-auto mb-8">
              Não encontramos nenhuma pergunta que corresponda a "<span className="text-blue-400">{searchTerm}</span>".
              Tente uma busca diferente ou remova os filtros.
            </p>
            <button 
              onClick={clearSearch}
              className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Limpar busca
            </button>
          </motion.div>
        )}
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <GlowyCard className="p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-neutral-300 mb-6 max-w-xl mx-auto">
              Nossa equipe está pronta para ajudar com qualquer questão específica sobre o BotZap
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a 
                href="#contato" 
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Fale com nossa equipe
              </motion.a>
              <motion.a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-6 py-3 text-base font-medium text-blue-400 bg-blue-600/10 hover:bg-blue-600/20 rounded-xl border border-blue-500/30 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat no WhatsApp
              </motion.a>
            </div>
          </GlowyCard>
        </motion.div>
      </div>

      {/* Estatísticas com contador animado */}
      <div className="mt-24 max-w-6xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {[
            { value: '97%', label: 'Taxa de resolução automatizada', icon: '📈' },
            { value: '5min', label: 'Tempo médio de implementação', icon: '⚡' },
            { value: '24/7', label: 'Suporte técnico disponível', icon: '🛠️' },
            { value: '10x', label: 'Aumento na eficiência do atendimento', icon: '🚀' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all shadow-lg shadow-black/5 hover:shadow-blue-500/10"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/10 mx-auto mb-4 flex items-center justify-center text-2xl">
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 10, 
                    delay: 0.2 + index * 0.1
                  }}
                  viewport={{ once: true }}
                >
                  {stat.icon}
                </motion.span>
              </div>
              <h4 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 mb-2">{stat.value}</h4>
              <p className="text-neutral-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}