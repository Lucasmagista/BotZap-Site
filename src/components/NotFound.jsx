import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-bold text-indigo-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
          Página não encontrada
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          A página que você está procurando pode ter sido removida, seu nome foi alterado ou está temporariamente indisponível.
        </p>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            to="/"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg inline-block transition-colors"
          >
            Voltar para a página inicial
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}