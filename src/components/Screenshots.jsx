import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Screenshots() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);
  
  const screenshots = [
    {
      title: "Dashboard Principal",
      description: "Visualize todas as métricas importantes em um só lugar, com gráficos interativos e atualizações em tempo real.",
      image: "/dashboard-preview.png",
      color: "blue",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Configuração de Fluxos",
      description: "Crie fluxos de conversação personalizados com nossa interface drag-and-drop intuitiva.",
      image: "/dashboard-preview.png",
      color: "emerald",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      title: "Gerenciador de Contatos",
      description: "Organize seus contatos com tags personalizadas e histórico completo de interações.",
      image: "/dashboard-preview.png",
      color: "purple",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Análise de Desempenho",
      description: "Acompanhe o desempenho dos seus atendimentos, taxa de resposta e satisfação dos clientes.",
      image: "/dashboard-preview.png",
      color: "amber",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
  ];

  // Gerenciar o carrossel automático com useEffect
  useEffect(() => {
    if (isAutoPlaying && !isHovering) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((current) => (current + 1) % screenshots.length);
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, isHovering, screenshots.length]);

  // Controlar a navegação manual
  const handleManualNavigation = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    clearInterval(intervalRef.current);
    
    // Reiniciar auto-play após 10 segundos de inatividade
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Gradiente dinâmico baseado na cor do screenshot ativo
  const getGradient = (color) => {
    switch (color) {
      case 'blue': return 'from-blue-600 to-cyan-500';
      case 'emerald': return 'from-emerald-500 to-green-600';
      case 'purple': return 'from-purple-600 to-indigo-500';
      case 'amber': return 'from-amber-500 to-orange-600';
      default: return 'from-blue-600 to-cyan-400';
    }
  };

  return (
    <section 
      id="screenshots" 
      className="py-24 px-6 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Elementos de fundo com efeito glassmorphism */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full" 
               style={{ background: `radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0) 70%)` }}></div>
          <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full" 
               style={{ background: `radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(139,92,246,0) 70%)` }}></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full" 
               style={{ background: `radial-gradient(circle, rgba(6,182,212,0.3) 0%, rgba(6,182,212,0) 70%)` }}></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-neutral-950 opacity-60"></div>
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-neutral-950 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-neutral-950 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${getGradient(screenshots[activeIndex].color)} text-white inline-block mb-4`}>
            Interface Intuitiva
          </span>
          <h2 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Conheça nossa plataforma
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${getGradient(screenshots[activeIndex].color)} mx-auto mb-6`}></div>
          <p className="mt-4 text-xl text-neutral-300 max-w-3xl mx-auto">
            Explore nossa interface moderna e intuitiva, projetada para revolucionar 
            sua gestão de atendimentos no WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Menu lateral com detalhes das funcionalidades */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {screenshots.map((screenshot, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => handleManualNavigation(index)}
                  className={`w-full text-left p-5 rounded-xl transition-all duration-300
                    ${activeIndex === index 
                      ? `bg-gradient-to-r ${getGradient(screenshot.color)} bg-opacity-10 border-l-4 border-${screenshot.color}-500` 
                      : 'bg-neutral-800/20 hover:bg-neutral-800/40 border-l-4 border-transparent'
                    } backdrop-blur-sm`}
                >
                  <div className="flex items-start">
                    <div className={`p-3 rounded-lg ${activeIndex === index ? `bg-${screenshot.color}-500 bg-opacity-20 text-${screenshot.color}-400` : 'bg-neutral-800 text-neutral-400'} mr-4`}>
                      {screenshot.icon}
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${
                        activeIndex === index ? 'text-white' : 'text-neutral-300'
                      }`}>
                        {screenshot.title}
                      </h3>
                      {activeIndex === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="text-neutral-400 text-sm mt-2"
                        >
                          {screenshot.description}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 pl-4"
            >
              <a 
                href="#demo" 
                className={`inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r ${getGradient(screenshots[activeIndex].color)} rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1`}
              >
                Ver demonstração completa
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </div>
          
          {/* Área da exibição de screenshots */}
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
              {/* Barra de navegador */}
              <div className="bg-neutral-900 p-3 border-b border-neutral-800 flex items-center">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-grow">
                  <div className="bg-neutral-800 rounded-full py-1 px-4 max-w-xs mx-auto flex items-center justify-center">
                    <div className="w-3 h-3 mr-2">
                      <svg fill="none" stroke="currentColor" className="w-3 h-3 text-neutral-400" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-xs text-neutral-400 truncate">app.botzap.com</span>
                  </div>
                </div>
                <div className="ml-4 hidden md:block">
                  <div className="flex space-x-2 text-neutral-400">
                    <button className="p-1 hover:text-neutral-200">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                      </svg>
                    </button>
                    <button className="p-1 hover:text-neutral-200">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Imagem da screenshot com transição animada */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative bg-white">
                    <img
                      src={screenshots[activeIndex].image}
                      alt={screenshots[activeIndex].title}
                      className="w-full h-auto"
                    />
                    
                    {/* Overlay para destacar áreas da interface */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Barra de progresso animada */}
              <div className="h-1 w-full bg-neutral-800">
                <motion.div 
                  className={`h-1 bg-gradient-to-r ${getGradient(screenshots[activeIndex].color)}`}
                  initial={{ width: "0%" }}
                  animate={{ width: isAutoPlaying ? "100%" : "0%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  key={`progress-${activeIndex}-${isAutoPlaying}`}
                />
              </div>
              
              {/* Controles de navegação e indicadores */}
              <div className="flex items-center justify-between p-4 bg-neutral-900 border-t border-neutral-800">
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => handleManualNavigation((activeIndex - 1 + screenshots.length) % screenshots.length)}
                    className="p-2 rounded-full hover:bg-neutral-800 transition-colors"
                    aria-label="Anterior"
                  >
                    <svg className="h-4 w-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => handleManualNavigation((activeIndex + 1) % screenshots.length)}
                    className="p-2 rounded-full hover:bg-neutral-800 transition-colors"
                    aria-label="Próximo"
                  >
                    <svg className="h-4 w-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex items-center">
                  <div className="space-x-2 flex">
                    {screenshots.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleManualNavigation(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          activeIndex === index
                            ? `bg-${screenshots[index].color}-500` 
                            : 'bg-neutral-600 hover:bg-neutral-500'
                        }`}
                        aria-label={`Ver screenshot ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className={`ml-4 p-2 rounded-full ${isAutoPlaying ? 'text-blue-400' : 'text-neutral-400'} hover:bg-neutral-800 transition-colors`}
                    aria-label={isAutoPlaying ? "Pausar" : "Reproduzir"}
                  >
                    {isAutoPlaying ? (
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}