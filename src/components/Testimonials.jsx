import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'João Silva',
    feedback: 'O BotZap transformou a forma como nos comunicamos com nossos clientes. Simplesmente incrível!',
    role: 'Empresário',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5
  },
  {
    name: 'Maria Oliveira',
    feedback: 'A automação do WhatsApp economizou muito tempo para nossa equipe. Recomendo!',
    role: 'Gerente de Marketing',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5
  },
  {
    name: 'Carlos Santos',
    feedback: 'Fácil de usar e com suporte excelente. O BotZap é essencial para nosso negócio.',
    role: 'CEO',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 4
  },
];

// Componente para exibir as estrelas de avaliação - corrigido para melhor alinhamento
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center mb-3">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-500'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
      <span className="ml-2 text-sm font-medium text-neutral-400">{rating}.0</span>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-neutral-900 to-neutral-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">O que nossos clientes dizem</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Veja como o BotZap está transformando negócios e melhorando o atendimento ao cliente em diversas empresas
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-b from-neutral-800 to-neutral-850 p-8 rounded-xl shadow-lg border border-neutral-700 hover:border-neutral-600 transition-all duration-300 h-full flex flex-col relative group">
                {/* Efeito de brilho no hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/0 to-cyan-500/0 rounded-xl blur opacity-0 group-hover:opacity-15 transition duration-500"></div>
                
                <div className="relative">
                  <StarRating rating={testimonial.rating} />
                  
                  <div className="text-xl font-medium text-blue-400 mb-2">"</div>
                  <p className="text-lg mb-6 text-neutral-300 flex-grow">{testimonial.feedback}</p>
                  <div className="text-xl font-medium text-blue-400 text-right">"</div>
                  
                  <div className="flex items-center mt-6 pt-4 border-t border-neutral-700">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                    />
                    <div className="ml-3">
                      <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                      <p className="text-blue-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="#contato" 
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            Seja o próximo caso de sucesso
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}