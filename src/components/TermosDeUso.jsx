import GlowyCard from './stunning/GlowyCard';

export default function TermosDeUso() {
  return (
    <main className="flex-grow relative bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 py-24 px-8 flex items-center justify-center">
      <div className="absolute inset-0 bg-opacity-30 bg-black backdrop-filter backdrop-blur-sm"></div>
      <div className="relative container mx-auto max-w-4xl">
        <div className="mx-auto w-full bg-white/95 rounded-3xl shadow-lg p-10 transition-all duration-300 hover:shadow-xl">
          <GlowyCard>
            <div className="bg-white/95 rounded-2xl p-12 transition-all duration-300">
              <div className="text-center mb-12">
                <img
                  src="/assets/terms-icon.svg"
                  alt="Termos de Uso"
                  className="mx-auto w-24 h-24 mb-8 animate-pulse"
                />
                <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">Termos de Uso</h1>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Conheça as regras e condições para utilizar nossa plataforma.
                Estes termos estabelecem os direitos e responsabilidades dos usuários ao utilizar o BotZap.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mt-8 max-w-2xl mx-auto">
                Para mais detalhes, consulte nossos termos completos ou entre em contato conosco para esclarecer dúvidas.
              </p>
              <div className="mt-12 text-center">
                <button className="relative overflow-hidden px-10 py-5 text-xl font-bold text-white rounded-xl transition-all duration-300 
                  bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 
                  shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
                  <span className="relative z-10">Saiba Mais</span>
                  <span className="absolute inset-0 bg-white opacity-20 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
              </div>
            </div>
          </GlowyCard>
        </div>
      </div>
    </main>
  );
}