import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado por se inscrever, ${email}!`);
    setEmail('');
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-4">Inscreva-se na nossa Newsletter</h2>
        <p className="mb-8">Receba as últimas novidades e atualizações diretamente no seu e-mail.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-lg text-neutral-900 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <button
            type="submit"
            className="btn btn-gradient px-6 py-2 rounded-lg font-bold"
          >
            Inscrever-se
          </button>
        </form>
      </div>
    </section>
  );
}