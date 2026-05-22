import { useState } from 'react';
import Header from './components/Header';
import MenuOverlay from './components/MenuOverlay';
import Showreel from './components/Showreel';
import Presentation from './components/Presentation';
import Prestations from './components/Prestations';
import Team from './components/Team';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import ThemeBar from './components/ThemeBar';

function AppInner() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="relative w-full font-sans"
      style={{ background: 'transparent', color: '#3A3A3A', minHeight: '100vh' }}
    >
      <Header onMenu={() => setMenuOpen(true)} />
      <Showreel />
      <ThemeBar />
      <Prestations />
      <Presentation />
      <Team />
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
