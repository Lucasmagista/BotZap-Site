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
    badge: null
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
    badge: 'Mais Popular'
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
    badge: 'Ilimitado'
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

  // Retorna configurações de cores e estilos baseados no tipo de plano
  const getPlanStyles = (accentColor, isPopular, isHovered) => {
    const styles = {
      blue: {
        gradientBg: 'from-blue-500 to-blue-600',
        lightGradientBg: 'from-blue-500/10 to-blue-600/5',
        borderColor: isHovered ? 'border-blue-500' : 'border-blue-500/20',
        shadowColor: 'shadow-blue-500/10',
        textColor: 'text-blue-500',
        hoverShadow: 'group-hover:shadow-blue-500/20'
      },
      cyan: {
        gradientBg: 'from-cyan-500 to-cyan-600',
        lightGradientBg: 'from-cyan-500/10 to-cyan-600/5',
        borderColor: isHovered ? 'border-cyan-500' : 'border-cyan-500/20',
        shadowColor: 'shadow-cyan-500/10',
        textColor: 'text-cyan-500',
        hoverShadow: 'group-hover:shadow-cyan-500/20'
      },
      purple: {
        gradientBg: 'from-purple-500 to-purple-600',
        lightGradientBg: 'from-purple-500/10 to-purple-600/5',
        borderColor: isHovered ? 'border-purple-500' : 'border-purple-500/20',
        shadowColor: 'shadow-purple-500/10',
        textColor: 'text-purple-500',
        hoverShadow: 'group-hover:shadow-purple-500/20'
      }
    };

    return styles[accentColor] || styles.blue;
  };

  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-neutral-950 to-black relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute top-20 -left-20 w-60 h-60 bg-cyan-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
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
            className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-900/30 to-blue-800/30 border border-blue-700/30 inline-block mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
              <span>Preços transparentes</span>
            </div>
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Planos e Preços
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
            Escolha o plano perfeito para o seu negócio. Todos incluem nossa plataforma principal e 7 dias de teste grátis
          </motion.p>

          {/* Seletor de período de cobrança */}
          <div className="mt-8 mb-12 inline-flex p-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <button
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-400 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Mensal
            </button>
            <button
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center ${
                billingPeriod === 'annual'
                  ? 'bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-400 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
              onClick={() => setBillingPeriod('annual')}
            >
              <span>Anual</span>
              <span className="ml-2 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent font-bold">
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => {
            const planStyles = getPlanStyles(plan.accentColor, plan.popular, hoveredPlan === index);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`group relative rounded-xl overflow-hidden backdrop-blur-sm 
                  ${plan.popular ? 'md:-mt-8 md:mb-8 md:pt-4 md:pb-4 z-10 scale-[1.02]' : ''}
                  border ${planStyles.borderColor} transition-all duration-300 
                  hover:shadow-xl ${planStyles.hoverShadow}
                  ${hoveredPlan === index ? 'scale-[1.02] shadow-xl' : ''}
                `}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Fundo e decorações */}
                <div className={`absolute inset-0 bg-gradient-to-br ${planStyles.lightGradientBg} opacity-20`}></div>
                
                {/* Conteúdo */}
                <div className="p-8 h-full flex flex-col relative">
                  {plan.badge && (
                    <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                      <div className={`bg-gradient-to-r ${planStyles.gradientBg} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                        {plan.badge}
                      </div>
                    </div>
                  )}

                  {/* Cabeçalho */}
                  <div>
                    <h3 className={`text-2xl font-bold ${planStyles.textColor}`}>
                      {plan.name}
                    </h3>
                    <p className="text-neutral-400 mt-2 text-sm h-12">{plan.description}</p>
                  </div>
                  
                  {/* Preço */}
                  <div className="my-6 flex items-baseline">
                    <span className="text-3xl font-bold text-white">
                      {billingPeriod === 'annual' ? 'R$' + getAnnualPrice(plan.price) : 'R$' + plan.price}
                    </span>
                    <span className="text-neutral-500 ml-2 text-sm">
                      {billingPeriod === 'annual' ? '/ano' : plan.period}
                    </span>
                  </div>
                  
                  {/* Linha separadora */}
                  <div className="border-t border-white/10 pt-6 mb-6"></div>
                  
                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex items-start"
                      >
                        {feature.included ? (
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-neutral-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                              clipRule="evenodd"
                              opacity="0.5"
                            />
                          </svg>
                        )}
                        <span className={feature.included ? 'text-neutral-300' : 'text-neutral-500'}>
                          {feature.name}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={plan.ctaLink}
                    className={`w-full py-3 px-6 rounded-lg font-medium text-center transition-all 
                      ${plan.popular
                        ? `bg-gradient-to-r ${planStyles.gradientBg} text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5`
                        : 'bg-white/10 backdrop-blur-sm text-white border border-white/10 hover:bg-white/20'
                      }`}
                  >
                    {plan.ctaText}
                  </a>
                </div>
                
                {/* Decoração de cantos */}
                <div className="absolute top-0 right-0 w-24 h-px bg-gradient-to-l from-transparent via-white/20 to-transparent"></div>
                <div className="absolute top-0 right-0 h-24 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 h-24 w-px bg-gradient-to-t from-transparent via-white/20 to-transparent"></div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0wIDMwaDMwdjMwSDB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

          <div className="relative p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Precisa de um plano personalizado?
                  </h3>
                  <p className="text-neutral-300 mb-4 md:mb-0 max-w-xl">
                    Temos soluções flexíveis para grandes empresas e casos de uso específicos. 
                    Nossa equipe está pronta para desenvolver uma solução sob medida para seu negócio.
                  </p>
                </div>
              
                <div className="flex-shrink-0">
                  <a
                    href="#contato"
                    className="inline-flex items-center px-8 py-4 text-base font-medium text-black bg-white rounded-xl shadow-lg hover:bg-neutral-100 transition-all duration-300 gap-2"
                  >
                    <span>Falar com especialista</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ rápido sobre preços */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            {
              question: "Há período de teste gratuito?",
              answer: "Sim, oferecemos 7 dias de teste grátis em todos os planos sem necessidade de cartão de crédito."
            },
            {
              question: "Posso mudar de plano depois?",
              answer: "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento, com ajuste proporcional de valores."
            },
            {
              question: "Quais formas de pagamento são aceitas?",
              answer: "Aceitamos cartões de crédito, boleto bancário, PIX e transferência bancária para planos anuais."
            },
            {
              question: "Existe fidelidade contratual?",
              answer: "Não há fidelidade. Você pode cancelar sua assinatura a qualquer momento sem multa ou taxas extras."
            },
          ].map((faq, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
              <h4 className="text-lg font-bold text-white mb-2">{faq.question}</h4>
              <p className="text-neutral-400">{faq.answer}</p>
            </div>
          ))}
        </motion.div>

        {/* Selos de garantia */}
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center hover:border-white/20 transition-all duration-300">
            <div className="w-12 h-12 flex-shrink-0 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-left">
              <h5 className="text-white font-medium">Garantia de 14 dias</h5>
              <p className="text-neutral-400 text-sm">Devolução total se não estiver satisfeito</p>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center hover:border-white/20 transition-all duration-300">
            <div className="w-12 h-12 flex-shrink-0 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div className="text-left">
              <h5 className="text-white font-medium">Pagamento seguro</h5>
              <p className="text-neutral-400 text-sm">Ambiente protegido e criptografado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}