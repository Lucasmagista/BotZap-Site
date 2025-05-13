import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Features() {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  
  const features = [
    {
      title: "Atendimento Automatizado",
      description: "Respostas automáticas para perguntas frequentes com fluxos interativos personalizados que se adaptam ao cliente.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
        </svg>
      ),
      color: "blue",
      stats: "Reduz em até 80% o tempo de resposta"
    },
    {
      title: "Dashboard Completo",
      description: "Gerencie todos seus atendimentos, visualize métricas e gere relatórios em tempo real com análises detalhadas.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
      color: "cyan",
      stats: "Insights em tempo real"
    },
    {
      title: "Multi-usuários",
      description: "Adicione múltiplos atendentes, defina funções específicas e gerencie permissões de acesso ao sistema.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      ),
      color: "purple",
      stats: "Aumente a produtividade em 60%"
    },
    {
      title: "Integrações",
      description: "Conecte facilmente com CRMs, planilhas, ERP e outras ferramentas para centralizar todas as informações.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      color: "amber",
      stats: "+30 integrações disponíveis"
    },
    {
      title: "Chatbot Inteligente",
      description: "IA avançada que entende linguagem natural, lida com atendimentos e direciona para humanos quando necessário.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      color: "green",
      stats: "97% de precisão nas respostas"
    },
    {
      title: "Segurança Avançada",
      description: "Criptografia end-to-end, backups automáticos e conformidade com LGPD para proteger todas suas conversas.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      ),
      color: "red",
      stats: "100% conforme com LGPD"
    },
  ];

  // Helper para obter gradientes baseados na cor
  const getGradients = (color) => {
    const gradients = {
      blue: {
        bg: "from-blue-500/10 to-blue-600/5",
        border: "border-blue-500/20",
        text: "text-blue-400",
        iconBg: "bg-blue-500/10",
        iconText: "text-blue-400",
        hoverBorder: "group-hover:border-blue-500/40",
        hoverShadow: "group-hover:shadow-blue-500/10"
      },
      cyan: {
        bg: "from-cyan-500/10 to-cyan-600/5",
        border: "border-cyan-500/20",
        text: "text-cyan-400",
        iconBg: "bg-cyan-500/10",
        iconText: "text-cyan-400",
        hoverBorder: "group-hover:border-cyan-500/40",
        hoverShadow: "group-hover:shadow-cyan-500/10"
      },
      purple: {
        bg: "from-purple-500/10 to-purple-600/5",
        border: "border-purple-500/20",
        text: "text-purple-400",
        iconBg: "bg-purple-500/10",
        iconText: "text-purple-400",
        hoverBorder: "group-hover:border-purple-500/40",
        hoverShadow: "group-hover:shadow-purple-500/10"
      },
      amber: {
        bg: "from-amber-500/10 to-amber-600/5",
        border: "border-amber-500/20",
        text: "text-amber-400",
        iconBg: "bg-amber-500/10",
        iconText: "text-amber-400",
        hoverBorder: "group-hover:border-amber-500/40",
        hoverShadow: "group-hover:shadow-amber-500/10"
      },
      green: {
        bg: "from-green-500/10 to-green-600/5",
        border: "border-green-500/20",
        text: "text-green-400",
        iconBg: "bg-green-500/10",
        iconText: "text-green-400",
        hoverBorder: "group-hover:border-green-500/40",
        hoverShadow: "group-hover:shadow-green-500/10"
      },
      red: {
        bg: "from-red-500/10 to-red-600/5",
        border: "border-red-500/20",
        text: "text-red-400",
        iconBg: "bg-red-500/10",
        iconText: "text-red-400",
        hoverBorder: "group-hover:border-red-500/40",
        hoverShadow: "group-hover:shadow-red-500/10"
      }
    };
    
    return gradients[color] || gradients.blue;
  };

  return (
    <section id="recursos" className="py-24 px-6 bg-gradient-to-b from-neutral-950 to-black relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        {/* Grade de fundo */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        {/* Gradientes circulares */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute top-1/3 -right-20 w-60 h-60 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 left-1/4 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="max-w-7xl mx-auto relative z-10">
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
            Tudo em uma plataforma
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Recursos Principais
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          
          <motion.p 
            className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Tudo o que você precisa para automatizar e potencializar seu atendimento em um só lugar
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const gradients = getGradients(feature.color);
            
            return (
              <motion.div
                key={index}
                className={`group relative rounded-xl overflow-hidden border ${gradients.border} bg-gradient-to-br ${gradients.bg} backdrop-blur-sm p-6 transition-all duration-300 ${gradients.hoverBorder} hover:shadow-lg ${gradients.hoverShadow}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Decoração de canto */}
                <div className="absolute top-0 right-0 w-16 h-px bg-gradient-to-l from-transparent via-white/20 to-transparent"></div>
                <div className="absolute top-0 right-0 h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                
                {/* Ícone com fundo */}
                <div className={`mb-5 rounded-xl p-3 inline-flex ${gradients.iconBg} ${gradients.iconText}`}>
                  {feature.icon}
                </div>
                
                {/* Conteúdo */}
                <h3 className={`text-xl font-bold mb-3 group-hover:text-white transition-colors ${gradients.text}`}>
                  {feature.title}
                </h3>
                
                <p className="text-neutral-400 mb-4 group-hover:text-neutral-300 transition-colors">
                  {feature.description}
                </p>
                
                {/* Badge com estatística */}
                <div className="mt-auto">
                  <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${gradients.iconBg} ${gradients.text}`}>
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                    {feature.stats}
                  </span>
                </div>
                
                {/* Indicador de hover */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent"
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: hoveredFeature === index ? "100%" : "0%",
                    backgroundColor: hoveredFeature === index ? `var(--${feature.color}-500)` : "transparent"
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ '--blue-500': '#3B82F6', '--cyan-500': '#06B6D4', '--purple-500': '#8B5CF6', 
                           '--amber-500': '#F59E0B', '--green-500': '#10B981', '--red-500': '#EF4444' }}
                />
              </motion.div>
            );
          })}
        </div>
        
        {/* CTA Banner */}
        <motion.div 
          className="mt-20 rounded-2xl overflow-hidden relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0wIDMwaDMwdjMwSDB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
          
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Pronto para automatizar seu atendimento?
              </h3>
              <p className="text-neutral-300">
                Comece hoje mesmo e veja a diferença em seu negócio.
              </p>
            </div>
            
            <a 
              href="#demo"
              className="group relative overflow-hidden px-8 py-3 rounded-xl font-medium text-lg inline-flex items-center justify-center bg-white text-neutral-900 hover:shadow-lg transition-all duration-300"
            >
              <span className="flex items-center">
                Solicitar Demonstração
                <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}