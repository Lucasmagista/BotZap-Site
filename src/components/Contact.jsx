import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlowyCardWrapper from './stunning/GlowyCardWrapper';
import GlowyCard from './stunning/GlowyCard';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    privacy: false,
    service: 'atendimento' // Opção padrão selecionada
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
    loading: false
  });

  const [activeTab, setActiveTab] = useState('form'); // 'form' ou 'map'
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);
  
  // Detectar movimento do mouse para efeitos de parallax
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const contactRef = useRef(null);

  // Corrigido: Parallax só quando mouse está sobre a seção
  const handleSectionMouseMove = (e) => {
    if (contactRef.current) {
      const { left, top, width, height } = contactRef.current.getBoundingClientRect();
      let x = (e.clientX - left) / width - 0.5;
      let y = (e.clientY - top) / height - 0.5;
      // Limitar valores para evitar bug visual
      x = Math.max(Math.min(x, 0.5), -0.5);
      y = Math.max(Math.min(y, 0.5), -0.5);
      setMousePosition({ x, y });
    }
  };
  const handleSectionMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.privacy) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Por favor, preencha todos os campos obrigatórios.',
        loading: false
      });
      return;
    }
    
    // Simulação de envio com estado de loading
    setFormStatus({
      submitted: false,
      error: false,
      message: '',
      loading: true
    });
    
    // Timeout para simular o envio (remover em produção)
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        loading: false
      });
      
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        privacy: false,
        service: 'atendimento'
      });
    }, 1500);
  };

  const serviceOptions = [
    { id: 'atendimento', label: 'Atendimento Automatizado', icon: '🤖' },
    { id: 'integracao', label: 'Integrações', icon: '🔄' },
    { id: 'consultoria', label: 'Consultoria Personalizada', icon: '📊' },
    { id: 'precos', label: 'Informações de Preços', icon: '💰' }
  ];

  return (
    <section 
      id="contato" 
      ref={contactRef}
      className="py-24 px-6 bg-gradient-to-b from-neutral-950 to-neutral-900 text-white relative overflow-hidden"
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
    >
      {/* Elementos de fundo com efeito glassmorphism */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full" 
               style={{ 
                 background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0) 70%)',
                 transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
                 transition: 'transform 0.2s ease-out'
               }}></div>
          <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full" 
               style={{ 
                 background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0) 70%)',
                 transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
                 transition: 'transform 0.2s ease-out'
               }}></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full" 
               style={{ 
                 background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(6,182,212,0) 70%)',
                 transform: `translate(${mousePosition.x * -25}px, ${mousePosition.y * -25}px)`,
                 transition: 'transform 0.2s ease-out'
               }}></div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 border border-blue-500/20 inline-block mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            Estamos aqui para ajudar
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Fale com nossa equipe
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          
          <motion.p 
            className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Estamos prontos para ajudar sua empresa a crescer. Compartilhe seu desafio e encontraremos a melhor solução.
          </motion.p>
        </motion.div>
        
        {/* Tabs para alternar entre formulário e mapa */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-neutral-800/50 backdrop-blur-sm rounded-full border border-neutral-700/50">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'form'
                  ? 'bg-blue-500 text-white shadow-md shadow-blue-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('form')}
            >
              Formulário de Contato
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'map'
                  ? 'bg-blue-500 text-white shadow-md shadow-blue-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('map')}
            >
              Localização
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'form' ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start"
            >
              {/* Lado esquerdo - Informações */}
              <div className="lg:col-span-2 space-y-10">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">Como podemos ajudar?</h3>
                  <p className="text-neutral-400">
                    Escolha uma das opções abaixo ou envie sua mensagem personalizada.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {serviceOptions.map((service) => (
                    <motion.div
                      key={service.id}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className={`cursor-pointer p-4 rounded-xl border ${
                        formData.service === service.id 
                          ? 'border-blue-500 bg-blue-900/20 shadow-lg shadow-blue-500/5' 
                          : 'border-neutral-800 bg-neutral-900/50 hover:border-neutral-700'
                      } transition-all duration-200`}
                      onClick={() => setFormData({...formData, service: service.id})}
                    >
                      <div className="flex items-start">
                        <div className="text-2xl mr-3">{service.icon}</div>
                        <div>
                          <h4 className={`font-medium ${
                            formData.service === service.id ? 'text-blue-400' : 'text-neutral-300'
                          }`}>
                            {service.label}
                          </h4>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/5 border border-blue-500/20 mr-4">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Telefone</h4>
                      <motion.p 
                        className="text-neutral-400 group relative inline-block"
                        whileHover={{ scale: 1.02, color: '#3B82F6' }}
                      >
                        <a href="tel:+551199999999">(11) 99999-9999</a>
                        <motion.span 
                          className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500"
                          whileHover={{ width: '100%' }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/5 border border-purple-500/20 mr-4">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Email</h4>
                      <motion.p 
                        className="text-neutral-400 group relative inline-block"
                        whileHover={{ scale: 1.02, color: '#8B5CF6' }}
                      >
                        <a href="mailto:contato@botzap.com">contato@botzap.com</a>
                        <motion.span 
                          className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500"
                          whileHover={{ width: '100%' }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-600/5 border border-cyan-500/20 mr-4">
                      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Horário de Atendimento</h4>
                      <p className="text-neutral-400">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-neutral-400">Sábado: 9h às 13h</p>
                    </div>
                  </div>
                </div>
                
                {/* Redes sociais */}
                <div className="pt-6 border-t border-neutral-800/50">
                  <h4 className="text-lg font-medium mb-4">Siga-nos nas redes sociais</h4>
                  <div className="flex space-x-4">
                    {[
                      { name: 'Instagram', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> }, 
                      { name: 'Twitter', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg> }, 
                      { name: 'LinkedIn', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> }, 
                      { name: 'Facebook', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg> }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        aria-label={social.name}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-800/80 text-neutral-400 hover:bg-gradient-to-br from-blue-600 to-blue-400 hover:text-white transition-colors"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Lado direito - Formulário com efeito de perspectiva 3D */}
              <div className="lg:col-span-3">
                <motion.div
                  style={{ 
                    perspective: '1000px',
                    transform: `rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`
                  }}
                  className="backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <div className="bg-neutral-900/80 px-8 py-8">
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <AnimatePresence>
                        {formStatus.submitted && (
                          <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className={`p-4 rounded-lg ${
                              formStatus.error 
                                ? 'bg-red-900/20 border border-red-700/30 text-red-400' 
                                : 'bg-green-900/20 border border-green-700/30 text-green-400'
                            } flex items-start`}
                          >
                            <div className="flex-shrink-0 mr-3">
                              {formStatus.error ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                              ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                              )}
                            </div>
                            <div>{formStatus.message}</div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2 text-neutral-300">
                            Nome Completo <span className="text-blue-400">*</span>
                          </label>
                          <motion.div 
                            className={`relative ${focusedField === 'name' ? 'z-10' : 'z-0'}`}
                            whileHover={{ scale: 1.01 }}
                            animate={{ 
                              boxShadow: focusedField === 'name' 
                                ? '0 0 0 2px rgba(59, 130, 246, 0.3)' 
                                : 'none' 
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg className={`w-5 h-5 ${focusedField === 'name' ? 'text-blue-400' : 'text-neutral-500'} transition-colors`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('name')}
                              onBlur={() => setFocusedField(null)}
                              className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                              placeholder="Seu nome completo"
                              required
                            />
                          </motion.div>
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2 text-neutral-300">
                            Email <span className="text-blue-400">*</span>
                          </label>
                          <motion.div 
                            className={`relative ${focusedField === 'email' ? 'z-10' : 'z-0'}`}
                            whileHover={{ scale: 1.01 }}
                            animate={{ 
                              boxShadow: focusedField === 'email' 
                                ? '0 0 0 2px rgba(59, 130, 246, 0.3)' 
                                : 'none' 
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg className={`w-5 h-5 ${focusedField === 'email' ? 'text-blue-400' : 'text-neutral-500'} transition-colors`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('email')}
                              onBlur={() => setFocusedField(null)}
                              className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                              placeholder="seu@email.com"
                              required
                            />
                          </motion.div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2 text-neutral-300">
                            Telefone
                          </label>
                          <motion.div 
                            className={`relative ${focusedField === 'phone' ? 'z-10' : 'z-0'}`}
                            whileHover={{ scale: 1.01 }}
                            animate={{ 
                              boxShadow: focusedField === 'phone' 
                                ? '0 0 0 2px rgba(59, 130, 246, 0.3)' 
                                : 'none' 
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg className={`w-5 h-5 ${focusedField === 'phone' ? 'text-blue-400' : 'text-neutral-500'} transition-colors`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            </div>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('phone')}
                              onBlur={() => setFocusedField(null)}
                              className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                              placeholder="(11) 99999-9999"
                            />
                          </motion.div>
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium mb-2 text-neutral-300">
                            Empresa
                          </label>
                          <motion.div 
                            className={`relative ${focusedField === 'company' ? 'z-10' : 'z-0'}`}
                            whileHover={{ scale: 1.01 }}
                            animate={{ 
                              boxShadow: focusedField === 'company' 
                                ? '0 0 0 2px rgba(59, 130, 246, 0.3)' 
                                : 'none' 
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg className={`w-5 h-5 ${focusedField === 'company' ? 'text-blue-400' : 'text-neutral-500'} transition-colors`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('company')}
                              onBlur={() => setFocusedField(null)}
                              className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                              placeholder="Nome da sua empresa"
                            />
                          </motion.div>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2 text-neutral-300">
                          Mensagem
                        </label>
                        <motion.div 
                          className={`relative ${focusedField === 'message' ? 'z-10' : 'z-0'}`}
                          whileHover={{ scale: 1.01 }}
                          animate={{ 
                            boxShadow: focusedField === 'message' 
                              ? '0 0 0 2px rgba(59, 130, 246, 0.3)' 
                              : 'none' 
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                            <svg className={`w-5 h-5 ${focusedField === 'message' ? 'text-blue-400' : 'text-neutral-500'} transition-colors`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                          </div>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                            rows="5"
                            className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder="Como podemos ajudar? Compartilhe detalhes sobre seu projeto ou desafio..."
                          ></textarea>
                        </motion.div>
                      </div>
                      
                      <div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="privacy"
                              name="privacy"
                              type="checkbox"
                              checked={formData.privacy}
                              onChange={handleChange}
                              className="h-5 w-5 rounded border border-neutral-600 bg-neutral-800 text-blue-500 focus:ring-blue-500 focus:ring-offset-neutral-800"
                              required
                            />
                          </div>
                          <div className="ml-3">
                            <label htmlFor="privacy" className="text-sm text-neutral-400">
                              Aceito a <a href="#" className="text-blue-400 hover:underline">Política de Privacidade</a> e concordo em receber comunicações do BotZap. <span className="text-blue-400">*</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <motion.button
                          type="submit"
                          disabled={formStatus.loading}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full relative overflow-hidden group py-3 px-4 rounded-lg font-medium transition-all ${
                            formStatus.loading ? 'bg-blue-700' : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600'
                          } text-white shadow-lg hover:shadow-blue-500/25`}
                        >
                          <span className="absolute -bottom-2 left-0 w-full h-1 bg-white opacity-20 group-hover:h-full group-hover:-bottom-0 transition-all duration-300 ease-in-out"></span>
                          <div className="relative flex items-center justify-center">
                            {formStatus.loading ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Enviando mensagem...</span>
                              </>
                            ) : (
                              <>
                                <span>Enviar mensagem</span>
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                              </>
                            )}
                          </div>
                        </motion.button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="map"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full rounded-xl overflow-hidden shadow-2xl border border-neutral-800"
            >
              <div className="aspect-[16/9] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098087886756!2d-46.65390506875503!3d-23.56408947879762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1651597363292!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute top-0 inset-x-0 p-5 bg-gradient-to-b from-black/60 to-transparent">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 max-w-md border border-white/20 shadow-xl">
                    <div className="flex items-center">
                      <div className="p-3 bg-blue-500/20 rounded-full mr-4">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">BotZap Headquarters</h3>
                        <p className="text-neutral-200">Av. Paulista, 1000 - São Paulo, SP</p>
                        <a href="https://goo.gl/maps/YourMapLink" className="text-blue-400 text-sm flex items-center mt-1 hover:underline">
                          Obter direções
                          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-900/80 p-8">
                <h3 className="text-2xl font-bold mb-4">Venha nos Visitar</h3>
                <p className="text-neutral-400 mb-6">
                  Nossa sede está localizada no coração de São Paulo. Estamos à disposição para recebê-lo e apresentar nossas soluções pessoalmente. Agende uma visita!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col">
                    <h4 className="text-lg font-medium mb-2">Endereço</h4>
                    <p className="text-neutral-400">Av. Paulista, 1000</p>
                    <p className="text-neutral-400">Bela Vista - São Paulo/SP</p>
                    <p className="text-neutral-400">CEP: 01310-100</p>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-lg font-medium mb-2">Transporte</h4>
                    <p className="text-neutral-400">Metrô: Estação Brigadeiro</p>
                    <p className="text-neutral-400">Linhas de ônibus: 875A, 917M</p>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-lg font-medium mb-2">Estacionamento</h4>
                    <p className="text-neutral-400">Estacionamento disponível</p>
                    <p className="text-neutral-400">Validamos seu ticket</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}