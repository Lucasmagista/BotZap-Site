import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import PageLoader from './components/PageLoader';

// ScrollToTop component para garantir que as páginas iniciem no topo
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Carregamento preguiçoso de componentes
const App = lazy(() => import('./App'));
const PoliticaDePrivacidade = lazy(() => import('./components/PoliticaDePrivacidade'));
const TermosDeUso = lazy(() => import('./components/TermosDeUso'));
const Cookies = lazy(() => import('./components/Cookies'));
const LGPD = lazy(() => import('./components/LGPD'));
const Recursos = lazy(() => import('./components/Recursos'));
const Demo = lazy(() => import('./components/Demo'));
const Contato = lazy(() => import('./components/Contato'));
const NotFound = lazy(() => import('./components/NotFound'));

// Layout principal que contém elementos comuns como Navbar e Footer
const MainLayout = lazy(() => import('./layouts/MainLayout'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <ScrollToTop />
      <Routes>
        {/* Rotas com layout principal */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/contato" element={<Contato />} />
        </Route>

        {/* Rotas de páginas legais/políticas */}
        <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
        <Route path="/termos-de-uso" element={<TermosDeUso />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/lgpd" element={<LGPD />} />
        
        {/* Rota 404 para capturar todas as URLs não definidas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;