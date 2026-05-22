import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MENU_SECTIONS } from '../data';

const C_ORANGE = '#D94018';
const C_ANTH   = '#3A3A3A';
const C_SAND   = '#E8E8E8';
const BASE     = '/Fr-coiffure-maquette-C/';

export default function MenuOverlay({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 100000, fontFamily: "'Open Sans', sans-serif" }}
      onClick={onClose}
    >
      <style>{`
        @keyframes menuC-down  { 0% { transform: translateY(-100%); } 100% { transform: translateY(0); } }
        @keyframes menuC-fade  { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes menuC-back  { 0% { opacity: 0; } 100% { opacity: 1; } }
        @media (max-width: 767px) {
          .mc-topbar { padding: 14px 20px !important; }
          .mc-cols   { grid-template-columns: 1fr !important; }
          .mc-col    { padding: 22px 20px !important; border-right: none !important; }
          .mc-col:not(:last-child) { border-bottom: 1px solid rgba(58,58,58,0.18) !important; }
          .mc-footer { padding: 12px 20px !important; flex-wrap: wrap; gap: 10px; }
          .mc-footer-info { display: none !important; }
        }
      `}</style>

      {/* Semi-transparent backdrop — clicking it closes */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.35)',
        animation: 'menuC-back 0.4s ease both',
      }} />

      {/* Menu panel — slides from top, not full height */}
      <div
        style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          background: C_SAND, color: C_ANTH,
          animation: 'menuC-down 0.55s cubic-bezier(0.65, 0, 0.2, 1) both',
          display: 'flex', flexDirection: 'column',
          boxShadow: '0 12px 48px rgba(0,0,0,0.18)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="mc-topbar" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '18px 48px',
          borderBottom: '1px solid rgba(58,58,58,0.18)',
        }}>
          <img src={`${BASE}logo.png`} alt="FR Coiffure" style={{ height: 32, width: 'auto' }} />
          <div style={{ fontSize: 11, letterSpacing: '0.35em', textTransform: 'uppercase', color: C_ORANGE, fontWeight: 300 }}>
            Plainpalais, Genève
          </div>
          <button onClick={onClose} style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'transparent', border: `1px solid ${C_ANTH}`, color: C_ANTH,
            padding: '9px 18px', cursor: 'pointer', fontFamily: 'inherit',
            fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 400, borderRadius: 999,
          }}>
            Fermer
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/>
            </svg>
          </button>
        </div>

        {/* Columns */}
        <div className="mc-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {MENU_SECTIONS.map((col, i) => (
            <div key={col.title} className="mc-col" style={{
              padding: '36px 48px',
              borderRight: i < 2 ? '1px solid rgba(58,58,58,0.18)' : 'none',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                <span style={{ display: 'inline-block', width: 28, height: 1, background: C_ORANGE }}></span>
                <span style={{ fontWeight: 300, fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: C_ORANGE }}>
                  0{i + 1} — {col.title}
                </span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.items.map((item, idx) => (
                  <li key={item} style={{ animation: `menuC-fade 0.4s ${0.25 + idx * 0.045 + i * 0.05}s both` }}>
                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); onClose(); }}
                      style={{
                        color: C_ANTH, textDecoration: 'none',
                        fontFamily: "'Open Sans', sans-serif", fontWeight: 300,
                        fontSize: 20, lineHeight: 1.3, letterSpacing: '-0.005em',
                        transition: 'color 0.2s, padding-left 0.25s',
                        display: 'block',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = C_ORANGE; e.currentTarget.style.paddingLeft = '8px'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = C_ANTH; e.currentTarget.style.paddingLeft = '0'; }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer strip */}
        <div className="mc-footer" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '16px 48px', borderTop: '1px solid rgba(58,58,58,0.18)',
          fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(58,58,58,0.55)', fontWeight: 300,
        }}>
          <span>Lundi — Samedi · 9h — 19h</span>
          <span className="mc-footer-info">contact@frcoiffure.ch · +41 (0)22 320 00 00</span>
          <a href="#reservation" onClick={onClose} style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'transparent',
            border: '1px solid rgba(58,58,58,0.45)',
            color: C_ANTH,
            padding: '10px 22px', borderRadius: 0, fontFamily: 'inherit',
            fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', textDecoration: 'none',
            fontWeight: 300,
            transition: 'background 0.3s, border-color 0.3s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(58,58,58,0.07)'; e.currentTarget.style.borderColor = C_ANTH; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(58,58,58,0.45)'; }}
          >Réserver →</a>
        </div>
      </div>
    </div>,
    document.body
  );
}
