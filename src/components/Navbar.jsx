import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Recursos', href: '/recursos' },
    { name: 'Screenshots', href: '/screenshots' },
    { name: 'Demo', href: '/demo' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-md border-b border-white/20 shadow-glass' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-white font-bold text-lg">B</span>
            </motion.div>
            <span className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
              BotZap
            </span>
          </Link>

          {/* Menu para desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) => 
                  `relative px-4 py-2 rounded-lg text-white/80 hover:text-white transition-all duration-300 ${
                    isActive 
                      ? 'text-white bg-white/10 backdrop-blur-sm' 
                      : 'hover:bg-white/5'
                  }`
                }
                onClick={closeMenu}
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                        layoutId="activeTab"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            
            {/* Botão CTA */}
            <motion.div className="ml-4">
              <Link
                to="/demo"
                className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Testar Grátis</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Menu para dispositivos móveis */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-center items-center"
            >
              <motion.span
                className="w-5 h-0.5 bg-white rounded-full"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 }
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-5 h-0.5 bg-white rounded-full mt-1"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-5 h-0.5 bg-white rounded-full mt-1"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 }
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Menu móvel expandido */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={item.href}
                      className={({ isActive }) => 
                        `block py-3 px-4 rounded-xl text-white/80 hover:text-white transition-all duration-300 ${
                          isActive 
                            ? 'text-white bg-white/10 backdrop-blur-sm border border-white/20' 
                            : 'hover:bg-white/5'
                        }`
                      }
                      onClick={closeMenu}
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}
                
                {/* Botão CTA móvel */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-2"
                >
                  <Link
                    to="/demo"
                    className="block w-full text-center py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={closeMenu}
                  >
                    Testar Grátis
                  </Link>
                </motion.div>
                
                {/* Links secundários */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navItems.length + 1) * 0.1 }}
                  className="border-t border-white/20 pt-4 mt-4"
                >
                  <div className="grid grid-cols-2 gap-2">
                    <NavLink
                      to="/politica-de-privacidade"
                      className="block py-2 px-3 text-sm text-white/60 hover:text-white/80 hover:bg-white/5 rounded-lg transition-all duration-300"
                      onClick={closeMenu}
                    >
                      Privacidade
                    </NavLink>
                    <NavLink
                      to="/termos-de-uso"
                      className="block py-2 px-3 text-sm text-white/60 hover:text-white/80 hover:bg-white/5 rounded-lg transition-all duration-300"
                      onClick={closeMenu}
                    >
                      Termos de Uso
                    </NavLink>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}