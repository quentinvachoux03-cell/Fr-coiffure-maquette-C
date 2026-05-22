import { useState } from 'react';
import { SERVICES } from '../data';
import { useReveal } from '../hooks/useReveal';

const C_ANTH     = '#3A3A3A';
const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(58,58,58,0.10)';
const E          = 'cubic-bezier(0.16, 1, 0.3, 1)';

function ServiceRow({ service, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`a-up a-d${Math.min(index + 1, 6)}`}
      style={{ borderBottom: `1px solid ${C_HAIRLINE}` }}
    >
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', background: 'none', border: 'none', cursor: 'pointer',
          padding: 'clamp(18px, 2.5vw, 28px) 0',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20,
        }}
      >
        {/* Number */}
        <span style={{
          fontFamily: "'Open Sans',sans-serif",
          fontSize: 9, letterSpacing: '0.5em', textTransform: 'uppercase',
          color: open ? C_ORANGE : 'rgba(58,58,58,0.25)',
          fontWeight: 300,
          transition: 'color 0.3s',
          minWidth: 24,
        }}>
          {service.n}
        </span>

        {/* Title */}
        <span style={{
          fontFamily: "'Open Sans',sans-serif",
          fontSize: 'clamp(22px, 3.5vw, 44px)',
          fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1,
          color: open ? C_ORANGE : C_ANTH,
          transition: `color 0.3s ${E}`,
          flex: 1, textAlign: 'center',
        }}>
          {service.title}
        </span>

        {/* Arrow */}
        <span style={{
          fontFamily: "'Open Sans',sans-serif",
          fontSize: 18, fontWeight: 300,
          color: open ? C_ORANGE : 'rgba(58,58,58,0.22)',
          transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
          transition: `transform 0.4s ${E}, color 0.3s`,
          display: 'inline-block',
          minWidth: 24, textAlign: 'right',
        }}>
          →
        </span>
      </button>

      {/* Expanded items */}
      <div style={{
        display: 'grid',
        gridTemplateRows: open ? '1fr' : '0fr',
        transition: `grid-template-rows 0.48s ${E}`,
      }}>
        <div style={{ overflow: 'hidden' }}>
          <div style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
            gap: '8px 24px',
            padding: '0 0 clamp(18px, 2.5vw, 28px)',
          }}>
            {service.items.map((item, i) => (
              <span key={item} style={{
                fontFamily: "'Open Sans',sans-serif",
                fontSize: 12, fontWeight: 300, letterSpacing: '0.12em',
                color: '#8a7e75',
                opacity: open ? 1 : 0,
                transform: open ? 'none' : 'translateY(4px)',
                transition: `opacity 0.35s ${E} ${0.05 + i * 0.04}s, transform 0.35s ${E} ${0.05 + i * 0.04}s`,
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{ width: 6, height: 1, background: C_ORANGE, display: 'inline-block', flexShrink: 0, opacity: 0.5 }} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Prestations() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      id="prestations"
      className="font-sans border-t"
      style={{ borderColor: C_HAIRLINE }}
    >
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 clamp(20px, 4vw, 60px)' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', padding: 'clamp(48px, 7vw, 96px) 0 clamp(32px, 5vw, 64px)', borderBottom: `1px solid ${C_HAIRLINE}` }}>
          <div className="a-up inline-flex items-center gap-3 mb-8 font-light"
            style={{ fontSize: 9, letterSpacing: '0.55em', textTransform: 'uppercase', color: C_ORANGE }}>
            <span style={{ display: 'inline-block', width: 16, height: 1, background: C_ORANGE }} />
            01 — Prestations
          </div>

          <h2 className="a-up a-d1 font-sans m-0" style={{
            color: C_ANTH, fontWeight: 300,
            fontSize: 'clamp(34px, 5.5vw, 72px)',
            lineHeight: 0.93, letterSpacing: '-0.01em',
          }}>
            L'art du{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: C_ORANGE }}>soin</em>,<br />
            six expertises.
          </h2>

          <p className="a-up a-d2 font-sans font-light m-0" style={{
            fontSize: 'clamp(12px, 1.2vw, 14px)', lineHeight: 1.9,
            color: '#9c8f7e', maxWidth: 240, margin: '20px auto 0',
          }}>
            Chaque prestation est adaptée<br />à votre style et vos envies.
          </p>
        </div>

        {/* Service rows */}
        <div>
          {SERVICES.map((s, i) => (
            <ServiceRow key={s.n} service={s} index={i} />
          ))}
        </div>

        {/* Footer strip */}
        <div className="a-up a-d6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 py-8">
          <span className="font-sans font-light" style={{
            fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase',
            color: 'rgba(58,58,58,0.35)',
          }}>
            Lun — Sam · 9h00 — 19h00 · Plainpalais
          </span>
          <div className="flex gap-6 items-center">
            <a href="#/tarifs"
              className="font-sans font-light"
              style={{
                fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase',
                color: 'rgba(58,58,58,0.5)', textDecoration: 'none',
                borderBottom: '1px solid rgba(58,58,58,0.2)', paddingBottom: 2,
                transition: 'color 0.3s, border-color 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = C_ORANGE; e.currentTarget.style.borderBottomColor = C_ORANGE; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(58,58,58,0.5)'; e.currentTarget.style.borderBottomColor = 'rgba(58,58,58,0.2)'; }}
            >
              Voir les tarifs →
            </a>
            <a href="#reservation"
              className="self-start sm:self-auto inline-flex items-center gap-3 font-sans font-light"
              style={{
                fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase',
                color: C_ANTH, textDecoration: 'none',
                border: `1px solid rgba(58,58,58,0.3)`, padding: '12px 24px',
                transition: `color 0.3s ${E}, background 0.3s ${E}, border-color 0.3s`,
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = C_ANTH; e.currentTarget.style.borderColor = C_ANTH; }}
              onMouseLeave={e => { e.currentTarget.style.color = C_ANTH; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(58,58,58,0.3)'; }}>
              Prendre rendez-vous →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
