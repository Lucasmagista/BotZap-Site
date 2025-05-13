import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const buttonRef = useRef(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
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
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-black via-neutral-900 to-black"
      style={{overflow: 'hidden'}} // Garante que nada vaze da área do Hero
    >
      {/* Efeito parallax no background com gradiente azul mais evidente */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(25, 118, 210, 0.15) 0%, rgba(0, 0, 0, 0) 70%)`,
          transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`
        }}
      ></div>
      
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0"> {/* pointer-events-none impede clique nos ícones */}
        {/* Grade decorativa */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        {/* Círculos de gradiente */}
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0) 70%)',
            filter: 'blur(40px)',
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`
          }}
        ></div>
        
        <div 
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0) 70%)',
            filter: 'blur(30px)',
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
          }}
        ></div>
        
        {/* Ícones flutuantes com posicionamento mais controlado e reduzidos em quantidade */}
        {['🤖', '💬'].map((emoji, index) => (
          <motion.div
            key={index}
            className="absolute text-2xl sm:text-3xl opacity-10 select-none z-0"
            initial={{ 
              x: `${10 + index * 70}%`, // posições fixas para evitar sobreposição
              y: `${20 + index * 40}%`,
              scale: 0.7,
              opacity: 0 
            }}
            animate={{ 
              y: [`${20 + index * 40}%`, `${25 + index * 40}%`, `${20 + index * 40}%`],
              opacity: [0.08, 0.12, 0.08],
              scale: [0.7, 1, 0.7] 
            }}
            transition={{ 
              duration: 18 + index * 2, 
              ease: "linear", 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Coluna de texto */}
          <motion.div 
            className="max-w-xl lg:max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/30 to-blue-800/30 border border-blue-700/30 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-200">BotZap 2.0 disponível agora</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Automatize seu atendimento com 
              </span>
              <div className="relative inline-block">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  IA avançada
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-30 blur-xl"></div>
              </div>
            </motion.h1>
            
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-8"
              initial={{ width: 0 }}
              animate={{ width: '5rem' }}
              transition={{ duration: 1, delay: 1 }}
            ></motion.div>

            <motion.p 
              className="text-xl text-neutral-300 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Transforme seu WhatsApp Business em um assistente virtual inteligente que entende,
              responde e vende 24/7. Aumente suas conversões e reduza custos operacionais com o BotZap.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <a 
                ref={buttonRef}
                href="#demo" 
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500"></div>
                <button className="relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition duration-300">
                  <span>Testar grátis</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="absolute inset-0 rounded-xl border border-white/20"></div>
                </button>
              </a>
              
              <a 
                href="#pricing" 
                className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border border-white/10 rounded-xl hover:bg-white/5 transition duration-300"
              >
                <span>Ver planos</span>
              </a>
            </motion.div>

            {/* Clientes satisfeitos com melhor alinhamento */}
            <motion.div 
              className="mt-10 flex flex-wrap items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
            >
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[
                    'https://i.pravatar.cc/100?img=1',
                    'https://i.pravatar.cc/100?img=2',
                    'https://i.pravatar.cc/100?img=3',
                    'https://i.pravatar.cc/100?img=4',
                  ].map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt="User avatar"
                      className="w-8 h-8 rounded-full border-2 border-black"
                    />
                  ))}
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-black flex items-center justify-center text-xs font-medium">+2K</div>
                </div>
                <span className="ml-2 text-sm text-neutral-300">Clientes satisfeitos</span>
              </div>
              
              {/* Melhorando o alinhamento das estrelas de avaliação */}
              <div className="flex items-center">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium text-neutral-300">4.9/5 avaliações</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Visualização interativa do produto com posicionamento melhorado */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {/* Imagem do bot com WhatsApp integrado */}
            <div className="relative max-w-md mx-auto">
              {/* Círculo verde de fundo do WhatsApp */}
              <div className="absolute inset-0 rounded-full bg-green-500 opacity-10 blur-3xl transform scale-125"></div>
              
              {/* Imagem principal do robô com interface do WhatsApp */}
              <div className="relative">
                {/* Robô WhatsApp centralizado */}
                <img 
                  src="/whatsapp-bot.png" 
                  alt="Robô do BotZap com WhatsApp" 
                  className="w-full h-auto object-contain relative z-10"
                />
                
                {/* Bolhas de mensagem simulando chat */}
                <motion.div 
                  className="absolute top-10 right-0 p-3 bg-white/90 rounded-lg shadow-xl max-w-[200px]"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.7 }}
                >
                  <div className="text-xs font-medium text-green-600 mb-1">Atendente Virtual</div>
                  <p className="text-sm text-gray-700">Olá! Como posso ajudar você hoje?</p>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-20 left-0 p-3 bg-green-100 rounded-lg shadow-md max-w-[180px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.7 }}
                >
                  <p className="text-sm text-gray-700">Gostaria de saber mais sobre seus serviços</p>
                </motion.div>
              </div>
            </div>
            
            {/* WhatsApp logo principal com glow */}
            <motion.div 
              className="absolute -right-4 top-0 w-20 h-20"
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, type: "spring" }}
            >
              <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 blur-xl"></div>
              <img 
                src="https://cdn-icons-png.flaticon.com/512/124/124034.png" 
                alt="WhatsApp" 
                className="w-full h-full object-contain"
              />
            </motion.div>
            
            {/* Integrações reorganizadas para evitar sobreposição visual */}
            {[
              { icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968841.png', label: 'Shopify', delay: 2.0, position: "top-1/4 -right-8" },
              { icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968863.png', label: 'Salesforce', delay: 2.2, position: "top-2/4 -right-12" },
              { icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968853.png', label: 'WordPress', delay: 2.4, position: "top-3/4 -right-8" },
            ].map((platform, index) => (
              <motion.div
                key={index}
                className={`absolute w-10 h-10 shadow-lg rounded-full bg-white/90 p-1.5 flex items-center justify-center ${platform.position}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: platform.delay, type: 'spring' }}
                whileHover={{ scale: 1.2 }}
              >
                <img src={platform.icon} alt={platform.label} className="w-full h-full object-contain" />
                <div className="absolute -right-24 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 hover:opacity-100 transition-opacity">
                  {platform.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Logos de empresas clientes com melhor contraste e alinhamento */}
        <motion.div 
          className="mt-24 lg:mt-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2 }}
        >
          <p className="text-sm uppercase tracking-wider text-neutral-300 mb-8 font-medium">EMPRESAS QUE CONFIAM NO BOTZAP</p>
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
                className="h-6 sm:h-8 opacity-75 hover:opacity-100 transition-opacity filter brightness-150"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 0.8 }}
                transition={{ delay: 2 + index * 0.2 }}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
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
          <p className="text-neutral-400 text-sm mb-2">Explore mais</p>
          <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center p-1">
            <motion.div 
              className="w-1.5 h-1.5 bg-blue-500 rounded-full"
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
