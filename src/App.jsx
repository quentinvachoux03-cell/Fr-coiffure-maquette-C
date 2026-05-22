import { useState, useEffect } from 'react';
import Header from './components/Header';
import MenuOverlay from './components/MenuOverlay';
import Showreel from './components/Showreel';
import IntroSection from './components/IntroSection';
import Prestations from './components/Prestations';
import Team from './components/Team';
import Footer from './components/Footer';
import PageEquipe from './pages/PageEquipe';
import PageTarifs from './pages/PageTarifs';
import PageSalon from './pages/PageSalon';
import { ThemeProvider } from './context/ThemeContext';
import ThemeBar from './components/ThemeBar';

function useHashRouter() {
  const getPage = () => window.location.hash.replace(/^#\/?/, '').split('?')[0];
  const [page, setPage] = useState(getPage);
  useEffect(() => {
    const handler = () => setPage(getPage());
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);
  return page;
}

function AppInner() {
  const [menuOpen, setMenuOpen] = useState(false);
  const page = useHashRouter();

  return (
    <div
      className="relative w-full font-sans"
      style={{ background: 'transparent', color: '#3A3A3A', minHeight: '100vh' }}
    >
      <Header onMenu={() => setMenuOpen(true)} />

      {page === 'equipe' ? (
        <PageEquipe />
      ) : page === 'tarifs' ? (
        <PageTarifs />
      ) : page === 'salon' ? (
        <PageSalon />
      ) : (
        <>
          <Showreel />
          <ThemeBar />
          <IntroSection />
          <Prestations />
          <Team />
        </>
      )}

      <Footer />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
