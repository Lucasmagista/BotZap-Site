import { motion } from 'framer-motion';
import { useState } from 'react';

const plans = [
  {
    name: 'Básico',
    price: 97,
    period: '/mês',
    description: 'Perfeito para pequenos negócios iniciando com automação de atendimento',
    features: [
      { name: '1 Número WhatsApp', included: true },
      { name: 'Até 1.000 mensagens/mês', included: true },
      { name: 'Respostas automáticas', included: true },
      { name: 'Suporte básico por email', included: true },
      { name: 'Dashboard simples', included: true },
      { name: 'Integração com CRM', included: false },
      { name: 'API personalizada', included: false },
      { name: 'Análise avançada', included: false },
      { name: 'Suporte prioritário', included: false },
    ],
    popular: false,
    ctaText: 'Começar Agora',
    ctaLink: '#contato',
    accentColor: 'blue',
    badge: null,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/5'
  },
  {
    name: 'Profissional',
    price: 197,
    period: '/mês',
    description: 'Ideal para empresas em crescimento com necessidades avançadas de automação',
    features: [
      { name: '3 Números WhatsApp', included: true },
      { name: 'Até 5.000 mensagens/mês', included: true },
      { name: 'Respostas com IA', included: true },
      { name: 'Suporte prioritário', included: true },
      { name: 'Dashboard avançado', included: true },
      { name: 'Integração com CRM', included: true },
      { name: 'API básica', included: true },
      { name: 'Análise avançada', included: true },
      { name: 'Chatflow personalizado', included: false },
    ],
    popular: true,
    ctaText: 'Escolher Profissional',
    ctaLink: '#contato',
    accentColor: 'cyan',
    badge: 'Mais Popular',
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-500/10 to-blue-500/5'
  },
  {
    name: 'Empresarial',
    price: 497,
    period: '/mês',
    description: 'Solução completa para grandes empresas com alto volume de atendimento',
    features: [
      { name: 'Números WhatsApp Ilimitados', included: true },
      { name: 'Mensagens Ilimitadas', included: true },
      { name: 'IA Avançada + GPT-4', included: true },
      { name: 'Suporte VIP 24/7', included: true },
      { name: 'Dashboard Completo', included: true },
      { name: 'Integrações Personalizadas', included: true },
      { name: 'API completa', included: true },
      { name: 'Analytics empresarial', included: true },
      { name: 'Consultoria estratégica', included: true },
    ],
    popular: false,
    ctaText: 'Contato Empresarial',
    ctaLink: '#contato',
    accentColor: 'purple',
    badge: 'Ilimitado',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/5'
  },
];

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [hoveredPlan, setHoveredPlan] = useState(null);

  // Calculando descontos para planos anuais
  const getAnnualPrice = (monthlyPrice) => {
    const annualDiscount = 0.2; // 20% de desconto
    return Math.round(monthlyPrice * (1 - annualDiscount) * 12);
  };

  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        {/* Grade de fundo */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        {/* Gradientes circulares animados */}
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-10"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 -left-20 w-60 h-60 bg-blue-500 rounded-full blur-3xl opacity-10"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
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
            className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-md border border-white/20 inline-block mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Planos e Preços
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Escolha seu Plano
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          
          <motion.p 
            className="mt-4 text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comece gratuitamente e escale conforme seu negócio cresce
          </motion.p>

          {/* Toggle de período de cobrança */}
          <motion.div 
            className="mt-8 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-1 flex items-center">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  billingPeriod === 'monthly'
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  billingPeriod === 'annual'
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Anual
                <span className="ml-1 px-2 py-0.5 text-xs bg-green-500 text-white rounded-full">
                  -20%
                </span>
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Cards de preços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Card principal */}
              <motion.div
                className={`relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br ${plan.bgGradient} backdrop-blur-sm p-8 transition-all duration-500 ${
                  plan.popular ? 'ring-2 ring-cyan-500/50' : ''
                }`}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                style={{
                  boxShadow: hoveredPlan === index 
                    ? `0 25px 50px rgba(0, 0, 0, 0.3), 0 0 25px ${plan.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.3)' : 
                       plan.gradient.includes('cyan') ? 'rgba(6, 182, 212, 0.3)' :
                       'rgba(139, 92, 246, 0.3)'}`
                    : '0 15px 35px rgba(0, 0, 0, 0.2)'
                }}
              >
                {/* Badge popular */}
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                      {plan.badge}
                    </span>
                  </motion.div>
                )}

                {/* Efeito de brilho no hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: hoveredPlan === index ? '100%' : '-100%' }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Decoração de canto */}
                <div className="absolute top-0 right-0 w-20 h-px bg-gradient-to-l from-transparent via-white/20 to-transparent"></div>
                <div className="absolute top-0 right-0 h-20 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                
                {/* Cabeçalho do plano */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/70 mb-6">{plan.description}</p>
                  
                  {/* Preço */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">
                        R$ {billingPeriod === 'annual' ? getAnnualPrice(plan.price) : plan.price}
                      </span>
                      <span className="text-white/60 ml-2">
                        {billingPeriod === 'annual' ? '/ano' : plan.period}
                      </span>
                    </div>
                    {billingPeriod === 'annual' && (
                      <p className="text-sm text-green-400 mt-1">Economia de R$ {Math.round(plan.price * 12 * 0.2)}/ano</p>
                    )}
                  </div>
                </div>
                
                {/* Lista de recursos */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + featureIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                        feature.included 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                          : 'bg-gray-600'
                      }`}>
                        {feature.included ? (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        ) : (
                          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        )}
                      </div>
                      <span className={`text-sm ${feature.included ? 'text-white' : 'text-white/50'}`}>
                        {feature.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Botão CTA */}
                <motion.button
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-xl'
                      : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.ctaText}
                </motion.button>
                
                {/* Indicador de hover */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent"
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: hoveredPlan === index ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: `linear-gradient(to right, transparent, ${plan.gradient.includes('blue') ? '#3B82F6' : 
                      plan.gradient.includes('cyan') ? '#06B6D4' :
                      '#8B5CF6'})`
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Informações adicionais */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Todos os planos incluem
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-white">7 dias grátis</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-white">Suporte 24/7</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-white">Cancelamento grátis</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}