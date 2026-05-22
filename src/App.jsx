import { useState } from 'react';
import Header from './components/Header';
import MenuOverlay from './components/MenuOverlay';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Prestations from './components/Prestations';
import Team from './components/Team';
import Footer from './components/Footer';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="relative w-full font-sans"
      style={{ background: '#efe5d6', color: '#3A3A3A', minHeight: '100vh' }}
    >
      <Header onMenu={() => setMenuOpen(true)} />
      <Hero />
      <Presentation />
      <Prestations />
      <Team />
      <Footer />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
