import { useState, useEffect } from 'react';

const C_ANTH     = '#3A3A3A';
const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(58,58,58,0.18)';
const BASE       = '/Fr-coiffure-maquette-C/';

function MenuButton({ onClick, transparent }) {
  const col    = transparent ? 'rgba(255,255,255,0.88)' : C_ANTH;
  const border = transparent ? 'rgba(255,255,255,0.38)' : 'rgba(58,58,58,0.35)';
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        background: 'transparent',
        border: `1px solid ${border}`,
        color: col,
        padding: '9px 16px',
        borderRadius: 999,
        cursor: 'pointer',
        fontFamily: "'Open Sans', sans-serif",
        fontSize: 11,
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        fontWeight: 400,
        transition: 'color 0.4s, border-color 0.4s',
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
        <line x1="3" y1="8"  x2="21" y2="8"/>
        <line x1="3" y1="16" x2="21" y2="16"/>
      </svg>
      <span className="hidden sm:inline">Menu</span>
    </button>
  );
}

export default function Header({ onMenu }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const tr       = !scrolled;
  const textCol  = tr ? 'rgba(255,255,255,0.88)' : C_ANTH;
  const mutedCol = tr ? 'rgba(255,255,255,0.45)'  : 'rgba(58,58,58,0.4)';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-30 border-b"
      style={{
        background:          tr ? 'rgba(0,0,0,0.04)' : 'rgba(232,232,232,0.92)',
        backdropFilter:      tr ? 'none' : 'blur(12px)',
        WebkitBackdropFilter: tr ? 'none' : 'blur(12px)',
        borderColor:         tr ? 'rgba(255,255,255,0.12)' : C_HAIRLINE,
        transition: 'background 0.5s, border-color 0.5s',
      }}
    >
      <div
        className="grid items-center px-4 sm:px-8 lg:px-16 py-4 font-sans"
        style={{ gridTemplateColumns: '1fr auto 1fr' }}
      >
        <div className="justify-self-start">
          <MenuButton onClick={onMenu} transparent={tr} />
        </div>

        <a href="#accueil" className="justify-self-center">
          <img
            src={`${BASE}logo.png`}
            alt="FR Coiffure"
            style={{
              width: 'clamp(88px, 14vw, 140px)', height: 'auto', display: 'block',
              filter: tr ? 'brightness(0) invert(1)' : 'none',
              transition: 'filter 0.4s',
            }}
          />
        </a>

        <div
          className="flex items-center justify-end gap-3 font-light"
          style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase' }}
        >
          <a href="#" className="hidden sm:inline"
            style={{ color: textCol, textDecoration: 'none', transition: 'color 0.4s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = C_ORANGE}
            onMouseLeave={(e) => e.currentTarget.style.color = textCol}>FR</a>
          <span className="hidden sm:inline" style={{ color: mutedCol, transition: 'color 0.4s' }}>·</span>
          <a href="#" className="hidden sm:inline"
            style={{ color: textCol, textDecoration: 'none', transition: 'color 0.4s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = C_ORANGE}
            onMouseLeave={(e) => e.currentTarget.style.color = textCol}>EN</a>
          <a
            href="#reservation"
            style={{
              marginLeft: 4,
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent',
              border: tr ? '1px solid rgba(255,255,255,0.5)' : '1px solid rgba(58,58,58,0.45)',
              color: textCol,
              padding: '8px 16px',
              borderRadius: 0,
              textDecoration: 'none',
              fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 300,
              transition: 'background 0.3s, border-color 0.3s, color 0.4s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = tr ? 'rgba(255,255,255,0.1)' : 'rgba(58,58,58,0.07)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            <span className="hidden sm:inline">Réserver </span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
