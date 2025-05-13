import GlowyCard from './stunning/GlowyCard';

export default function Contato() {
  return (
    <main className="flex-grow relative bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 py-24 px-8 flex items-center justify-center">
      <div className="absolute inset-0 bg-opacity-30 bg-black backdrop-filter backdrop-blur-sm"></div>
      <div className="relative container mx-auto max-w-4xl">
        <div className="mx-auto w-full bg-white/95 rounded-3xl shadow-lg p-10 transition-all duration-300 hover:shadow-xl">
          <GlowyCard>
            <div className="bg-white/95 rounded-2xl p-12 transition-all duration-300">
              <div className="text-center mb-12">
                <img
                  src="/assets/contact-icon.svg"
                  alt="Contato"
                  className="mx-auto w-24 h-24 mb-8 animate-pulse"
                />
                <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">Fale Conosco</h1>
              </div>
              
              <form className="space-y-8 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Nome</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-5 py-4 text-gray-700 bg-white rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-5 py-4 text-gray-700 bg-white rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-lg font-medium text-gray-700 mb-2">Assunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-5 py-4 text-gray-700 bg-white rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Assunto da sua mensagem"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-5 py-4 text-gray-700 bg-white rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Digite sua mensagem aqui..."
                  ></textarea>
                </div>
                
                <div className="mt-12 text-center">
                  <button 
                    type="submit"
                    className="group relative overflow-hidden px-10 py-5 text-xl font-bold text-white rounded-xl transition-all duration-300 
                    bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 
                    shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
                  >
                    <span className="relative z-10">Enviar Mensagem</span>
                    <span className="absolute inset-0 bg-white opacity-20 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  </button>
                </div>
              </form>
            </div>
          </GlowyCard>
        </div>
      </div>
    </main>
  );
}