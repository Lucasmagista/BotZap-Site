import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2025 BotZap. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Siga-nos nas redes sociais para ficar por dentro das novidades.</p>
        <div className="mt-4">
          <Link to="/politica-de-privacidade" className="text-blue-400 hover:underline mx-2">Política de Privacidade</Link>
          <Link to="/termos-de-uso" className="text-blue-400 hover:underline mx-2">Termos de Uso</Link>
          <Link to="/cookies" className="text-blue-400 hover:underline mx-2">Cookies</Link>
          <Link to="/lgpd" className="text-blue-400 hover:underline mx-2">LGPD</Link>
        </div>
      </div>
    </footer>
  );
}