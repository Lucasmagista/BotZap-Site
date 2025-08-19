import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animação de flutuação para o botão principal
  useEffect(() => {
    if (buttonRef.current) {
      const button = buttonRef.current;
      
      const animation = button.animate(
        [
          { transform: 'translateY(0px)' },
          { transform: 'translateY(-8px)' },
          { transform: 'translateY(0px)' }
        ],
        {
          duration: 3000,
          iterations: Infinity,
          easing: 'ease-in-out'
        }
      );
      
      return () => animation.cancel();
    }
  }, []);

  return (
    <section 
      ref={heroRef} 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
    >
      {/* Partículas animadas */}
      <ParticleBackground />
      
      {/* Gradientes de fundo animados */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradiente radial principal */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{ 
            background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(59, 130, 246, 0.3) 0%, rgba(0, 0, 0, 0) 70%)`,
          }}
        />
        
        {/* Gradientes circulares flutuantes */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0) 70%)',
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0) 70%)',
          }}
        />
        
        <motion.div 
          className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-3xl"
          animate={{
            x: [0, 25, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle, rgba(217, 70, 239, 0.1) 0%, rgba(217, 70, 239, 0) 70%)',
          }}
        />
      </div>

      {/* Grade decorativa */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      {/* Conteúdo principal */}
      <div ref={containerRef} className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Coluna de texto */}
          <motion.div 
            className="max-w-xl lg:max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Badge de status */}
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-white/90">BotZap 3.0 - IA Avançada</span>
            </motion.div>

            {/* Título principal */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="text-white">
                Automatize seu atendimento com{' '}
              </span>
              <div className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                  IA avançada
                </span>
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-30 blur-xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.h1>
            
            {/* Linha decorativa */}
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-8 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '6rem' }}
              transition={{ duration: 1, delay: 1 }}
            />

            {/* Descrição */}
            <motion.p 
              className="text-xl text-white/80 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Transforme seu WhatsApp Business em um assistente virtual inteligente que entende,
              responde e vende 24/7. Aumente suas conversões e reduza custos operacionais com o BotZap.
            </motion.p>

            {/* Botões de ação */}
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.a 
                ref={buttonRef}
                href="#demo" 
                className="group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500"></div>
                <button className="relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition duration-300">
                  <span>Testar grátis</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="absolute inset-0 rounded-xl border border-white/20"></div>
                </button>
              </motion.a>
              
              <motion.a 
                href="#pricing" 
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl hover:bg-white/20 hover:border-white/30 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Ver planos</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Estatísticas */}
            <motion.div 
              className="flex flex-wrap items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
            >
              {/* Clientes satisfeitos */}
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[
                    'https://i.pravatar.cc/100?img=1',
                    'https://i.pravatar.cc/100?img=2',
                    'https://i.pravatar.cc/100?img=3',
                    'https://i.pravatar.cc/100?img=4',
                  ].map((avatar, index) => (
                    <motion.img
                      key={index}
                      src={avatar}
                      alt="User avatar"
                      className="w-8 h-8 rounded-full border-2 border-white/20"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.8 + index * 0.1 }}
                    />
                  ))}
                  <motion.div 
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-2 border-white/20 flex items-center justify-center text-xs font-bold text-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.2 }}
                  >
                    +2K
                  </motion.div>
                </div>
                <span className="text-sm text-white/70">Clientes satisfeitos</span>
              </div>
              
              {/* Avaliações */}
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, index) => (
                    <motion.svg 
                      key={index} 
                      className="w-5 h-5" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.4 + index * 0.1 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-white/70">4.9/5 avaliações</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Visualização 3D do produto */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.9 }}
            style={{ y, opacity }}
          >
            {/* Container principal da visualização */}
            <div className="relative max-w-md mx-auto">
              {/* Efeito de glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-3xl transform scale-125"></div>
              
              {/* Imagem principal do robô */}
              <motion.div 
                className="relative"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src="/whatsapp-bot.png" 
                  alt="Robô do BotZap com WhatsApp" 
                  className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
                />
                
                {/* Bolhas de chat animadas */}
                <motion.div 
                  className="absolute top-10 right-0 p-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl max-w-[220px]"
                  initial={{ opacity: 0, y: -20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.7 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs font-semibold text-green-600">Atendente Virtual</span>
                  </div>
                  <p className="text-sm text-gray-700">Olá! Como posso ajudar você hoje? 🤖</p>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-20 left-0 p-4 bg-green-100 rounded-2xl shadow-lg max-w-[200px]"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 2, duration: 0.7 }}
                >
                  <p className="text-sm text-gray-700">Gostaria de saber mais sobre seus serviços 💬</p>
                </motion.div>
              </motion.div>
            </div>
            
            {/* WhatsApp logo flutuante */}
            <motion.div 
              className="absolute -right-4 top-0 w-20 h-20"
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, type: "spring" }}
            >
              <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 blur-xl"></div>
              <motion.img 
                src="https://cdn-icons-png.flaticon.com/512/124/124034.png" 
                alt="WhatsApp" 
                className="w-full h-full object-contain"
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            {/* Integrações flutuantes */}
            {[
              { icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968841.png', label: 'Shopify', delay: 2.0, position: "top-1/4 -right-8" },
              { icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968863.png', label: 'Salesforce', delay: 2.2, position: "top-2/4 -right-12" },
              { icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968853.png', label: 'WordPress', delay: 2.4, position: "top-3/4 -right-8" },
            ].map((platform, index) => (
              <motion.div
                key={index}
                className={`absolute w-12 h-12 shadow-xl rounded-full bg-white/90 backdrop-blur-sm p-2 flex items-center justify-center ${platform.position}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: platform.delay, type: 'spring' }}
                whileHover={{ scale: 1.2 }}
              >
                <img src={platform.icon} alt={platform.label} className="w-full h-full object-contain" />
                <div className="absolute -right-28 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black/80 backdrop-blur-sm text-white text-xs py-1 px-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                  {platform.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Logos de empresas clientes */}
        <motion.div 
          className="mt-24 lg:mt-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2 }}
        >
          <p className="text-sm uppercase tracking-wider text-white/60 mb-8 font-medium">EMPRESAS QUE CONFIAM NO BOTZAP</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {[
              'https://cdn-icons-png.flaticon.com/512/5969/5969002.png', // Netflix 
              'https://cdn-icons-png.flaticon.com/512/5969/5969141.png', // Spotify
              'https://cdn-icons-png.flaticon.com/512/5968/5968762.png', // Amazon
              'https://cdn-icons-png.flaticon.com/512/5969/5969006.png', // Slack
              'https://cdn-icons-png.flaticon.com/512/5968/5968656.png', // Adobe
            ].map((logo, index) => (
              <motion.img
                key={index}
                src={logo}
                alt="Client logo"
                className="h-8 sm:h-10 opacity-60 hover:opacity-100 transition-opacity filter brightness-150"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 0.6 }}
                transition={{ delay: 2 + index * 0.2 }}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Indicador de scroll */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 3,
          duration: 1.5, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      >
        <div className="flex flex-col items-center">
          <p className="text-white/60 text-sm mb-2">Explore mais</p>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <motion.div 
              className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
              animate={{ y: [0, 13, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatType: "reverse"
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
