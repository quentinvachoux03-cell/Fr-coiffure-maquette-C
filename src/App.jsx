import { useState } from 'react';
import Header from './components/Header';
import MenuOverlay from './components/MenuOverlay';
import Showreel from './components/Showreel';
import Presentation from './components/Presentation';
import Prestations from './components/Prestations';
import Team from './components/Team';
import Footer from './components/Footer';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="relative w-full font-sans"
      style={{ background: '#E8E8E8', color: '#3A3A3A', minHeight: '100vh' }}
    >
      <Header onMenu={() => setMenuOpen(true)} />
      <Showreel />
      <Presentation />
      <Prestations />
      <Team />
      <Footer />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
