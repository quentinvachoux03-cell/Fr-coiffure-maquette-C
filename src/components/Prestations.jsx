import { useRef } from 'react';
import { SERVICES } from '../data';
import { useReveal } from '../hooks/useReveal';

const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(255,255,255,0.07)';
const E          = 'cubic-bezier(0.16, 1, 0.3, 1)';

export default function Prestations() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      id="prestations"
      className="font-sans"
      style={{ background: '#222020' }}
    >
      {/* ── Header ── */}
      <div className="px-5 sm:px-8 lg:px-16 pt-16 lg:pt-28 pb-12 lg:pb-20">
        <div className="a-up flex items-center gap-3 mb-10 lg:mb-16 font-light"
          style={{ fontSize: 9, letterSpacing: '0.55em', textTransform: 'uppercase', color: C_ORANGE }}>
          <span style={{ display: 'inline-block', width: 18, height: 1, background: C_ORANGE }} />
          02 — Prestations
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <h2 className="a-up a-d1 font-sans font-light m-0"
            style={{ color: '#fff', fontSize: 'clamp(38px, 6vw, 82px)', lineHeight: 0.92, letterSpacing: '-0.03em' }}>
            L'art du <em style={{ fontStyle: 'italic', color: C_ORANGE }}>soin</em>,<br />
            six expertises.
          </h2>
          <p className="a-up a-d2 font-sans font-light m-0"
            style={{ fontSize: 'clamp(12px, 1.2vw, 14px)', lineHeight: 1.9, color: 'rgba(255,255,255,0.35)', maxWidth: 240 }}>
            Chaque prestation est<br />adaptée à votre style<br />et vos envies.
          </p>
        </div>
      </div>

      {/* ── Lookbook grid ── */}
      <div className="px-5 sm:px-8 lg:px-16 pb-16 lg:pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ borderTop: `1px solid ${C_HAIRLINE}` }}>
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.n} service={s} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="a-up a-d6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-12 pt-8"
          style={{ borderTop: `1px solid ${C_HAIRLINE}` }}>
          <span className="font-sans font-light"
            style={{ fontSize: 9, letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>
            Lun — Sam · 9h00 — 19h00 · Plainpalais, Genève
          </span>
          <a href="#reservation"
            className="self-start sm:self-auto inline-flex items-center gap-3 font-sans font-light"
            style={{
              fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase',
              color: '#fff', textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.2)', padding: '13px 26px',
              transition: `color 0.35s ${E}, background 0.35s ${E}, border-color 0.35s`,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = C_ORANGE; e.currentTarget.style.borderColor = C_ORANGE; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}>
            Prendre rendez-vous →
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);

  const onEnter = () => {
    if (!cardRef.current) return;
    cardRef.current.style.background = 'rgba(255,255,255,0.04)';
  };
  const onLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.background = 'transparent';
  };

  const col = index % 3;
  const borderRight = col < 2 ? `1px solid rgba(255,255,255,0.07)` : 'none';

  return (
    <div
      ref={cardRef}
      className={`a-up a-d${Math.min(index + 1, 6)}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        padding: 'clamp(28px, 4vw, 52px) clamp(20px, 3vw, 40px)',
        borderBottom: `1px solid rgba(255,255,255,0.07)`,
        borderRight,
        transition: `background 0.4s ${E}`,
        cursor: 'default',
      }}
    >
      {/* Number */}
      <div style={{
        fontFamily: "'Open Sans', sans-serif",
        fontSize: 9, letterSpacing: '0.55em', textTransform: 'uppercase',
        color: C_ORANGE, fontWeight: 300, marginBottom: 20,
      }}>
        {service.n}
      </div>

      {/* Title — large, fashion editorial */}
      <h3 className="font-sans font-light m-0"
        style={{
          fontSize: 'clamp(22px, 2.8vw, 36px)',
          letterSpacing: '-0.02em', lineHeight: 1.05,
          color: '#fff', marginBottom: 24,
        }}>
        {service.title.includes(' & ')
          ? <>
              {service.title.split(' & ')[0]}
              <em style={{ fontStyle: 'italic', color: C_ORANGE }}> &amp; </em>
              {service.title.split(' & ')[1]}
            </>
          : service.title}
      </h3>

      {/* Hairline */}
      <div style={{ width: 24, height: 1, background: C_ORANGE, marginBottom: 20, opacity: 0.7 }} />

      {/* Items — tight, small, aéré */}
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
        {service.items.map(item => (
          <li key={item}
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: 11, fontWeight: 300,
              letterSpacing: '0.04em',
              color: 'rgba(255,255,255,0.42)',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
            <span style={{ width: 8, height: 1, background: C_ORANGE, display: 'inline-block', flexShrink: 0, opacity: 0.6 }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
