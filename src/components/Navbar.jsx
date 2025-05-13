import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-900 text-white py-4 px-6 shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          BotZap
        </Link>

        {/* Menu para dispositivos móveis */}
        <button
          className="md:hidden focus:outline-none text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu para desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "text-indigo-400" : "hover:text-indigo-400"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/recursos" 
              className={({ isActive }) => 
                isActive ? "text-indigo-400" : "hover:text-indigo-400"
              }
            >
              Recursos
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/screenshots" 
              className={({ isActive }) => 
                isActive ? "text-indigo-400" : "hover:text-indigo-400"
              }
            >
              Screenshots
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/demo" 
              className={({ isActive }) => 
                isActive ? "text-indigo-400" : "hover:text-indigo-400"
              }
            >
              Demo
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contato" 
              className={({ isActive }) => 
                isActive ? "text-indigo-400" : "hover:text-indigo-400"
              }
            >
              Contato
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Menu móvel expandido */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-2 py-3 px-2 bg-neutral-800 rounded-lg"
        >
          <NavLink
            to="/recursos"
            className={({ isActive }) => 
              `block py-2 px-4 ${isActive ? 'text-indigo-400' : 'text-neutral-300 hover:bg-neutral-700'} rounded transition duration-300`
            }
            onClick={closeMenu}
          >
            Recursos
          </NavLink>
          <NavLink
            to="/screenshots"
            className={({ isActive }) => 
              `block py-2 px-4 ${isActive ? 'text-indigo-400' : 'text-neutral-300 hover:bg-neutral-700'} rounded transition duration-300`
            }
            onClick={closeMenu}
          >
            Screenshots
          </NavLink>
          <NavLink
            to="/demo"
            className={({ isActive }) => 
              `block py-2 px-4 ${isActive ? 'text-indigo-400' : 'text-neutral-300 hover:bg-neutral-700'} rounded transition duration-300`
            }
            onClick={closeMenu}
          >
            Demo
          </NavLink>
          <NavLink
            to="/contato"
            className={({ isActive }) => 
              `block py-2 px-4 ${isActive ? 'text-indigo-400 font-medium' : 'text-white font-medium hover:bg-neutral-700'} rounded transition duration-300`
            }
            onClick={closeMenu}
          >
            Contato
          </NavLink>
          <div className="border-t border-neutral-700 my-2 pt-2">
            <NavLink
              to="/politica-de-privacidade"
              className="block py-1 px-4 text-sm text-neutral-400 hover:text-neutral-200"
              onClick={closeMenu}
            >
              Política de Privacidade
            </NavLink>
            <NavLink
              to="/termos-de-uso"
              className="block py-1 px-4 text-sm text-neutral-400 hover:text-neutral-200"
              onClick={closeMenu}
            >
              Termos de Uso
            </NavLink>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}