import { useState } from 'react';
import { SERVICES } from '../data';
import { useReveal } from '../hooks/useReveal';

const C_ANTH     = '#3A3A3A';
const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(58,58,58,0.1)';
const E          = 'cubic-bezier(0.16, 1, 0.3, 1)';

function ServiceRow({ service, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`a-up a-d${Math.min(index + 1, 6)}`}
      style={{
        position: 'relative',
        borderTop: `1px solid ${C_HAIRLINE}`,
        cursor: 'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Orange left accent */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 2,
        background: C_ORANGE,
        transform: `scaleY(${hovered ? 1 : 0})`,
        transformOrigin: 'top',
        transition: `transform 0.38s ${E}`,
      }} />

      <div
        className="flex flex-col sm:flex-row sm:items-start"
        style={{ gap: 'clamp(8px, 1.5vw, 16px)', padding: 'clamp(18px, 2.5vw, 28px) clamp(12px, 2vw, 24px) clamp(18px, 2.5vw, 28px) clamp(16px, 2vw, 28px)' }}
      >
        {/* Number */}
        <div style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 9, letterSpacing: '0.45em', textTransform: 'uppercase',
          fontWeight: 300, flexShrink: 0,
          color: hovered ? C_ORANGE : 'rgba(58,58,58,0.3)',
          transition: 'color 0.3s',
          paddingTop: 4,
          minWidth: 32,
        }}>
          {service.n}
        </div>

        {/* Title */}
        <div style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 'clamp(15px, 1.8vw, 20px)',
          fontWeight: 300, letterSpacing: '-0.005em', lineHeight: 1.2,
          color: hovered ? C_ORANGE : C_ANTH,
          transition: 'color 0.3s',
          flexShrink: 0,
          minWidth: 'clamp(130px, 16vw, 200px)',
        }}>
          {service.title}
        </div>

        {/* Dash separator — desktop only */}
        <div className="hidden sm:block" style={{
          width: 'clamp(16px, 3vw, 48px)',
          height: 1, background: 'rgba(58,58,58,0.15)',
          flexShrink: 0, marginTop: 12,
          transition: 'background 0.3s',
        }} />

        {/* Items */}
        <div style={{ flex: 1, lineHeight: 1.8 }}>
          {service.items.map((item, i) => (
            <span key={item}>
              <span style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: 12, fontWeight: 300, letterSpacing: '0.02em',
                color: hovered ? '#6a5e52' : '#9a8e82',
                transition: 'color 0.3s',
              }}>
                {item}
              </span>
              {i < service.items.length - 1 && (
                <span style={{
                  color: C_ORANGE, margin: '0 8px', opacity: hovered ? 0.6 : 0.35,
                  fontSize: 10, transition: 'opacity 0.3s',
                }}>·</span>
              )}
            </span>
          ))}
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
      {/* Header */}
      <div className="px-5 sm:px-8 lg:px-16 pt-16 lg:pt-28 pb-10 lg:pb-14">
        <div className="a-up inline-flex items-center gap-3 mb-10 font-light"
          style={{ fontSize:9, letterSpacing:'0.55em', textTransform:'uppercase', color:C_ORANGE }}>
          <span style={{ display:'inline-block', width:16, height:1, background:C_ORANGE }} />
          02 — Prestations
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <h2 className="a-up a-d1 font-sans m-0"
            style={{ color:C_ANTH, fontWeight:300, fontSize:'clamp(34px, 5.5vw, 72px)', lineHeight:0.93, letterSpacing:'-0.01em' }}>
            L'art du{' '}
            <em style={{ fontStyle:'italic', fontWeight:300, color:C_ORANGE }}>soin</em>,<br />
            six expertises.
          </h2>
          <p className="a-up a-d2 font-sans font-light m-0"
            style={{ fontSize:'clamp(12px, 1.2vw, 14px)', lineHeight:1.9, color:'#9c8f7e', maxWidth:240 }}>
            Chaque prestation est adaptée<br />à votre style et vos envies.
          </p>
        </div>
      </div>

      {/* Editorial service list */}
      <div className="px-5 sm:px-8 lg:px-16 pb-8">
        {SERVICES.map((s, i) => (
          <ServiceRow key={s.n} service={s} index={i} />
        ))}
        {/* Last border */}
        <div style={{ borderTop: `1px solid ${C_HAIRLINE}` }} />
      </div>

      {/* CTA */}
      <div className="px-5 sm:px-8 lg:px-16 pb-14 lg:pb-24">
        <div className="a-up a-d6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 mt-6 pt-8 border-t"
          style={{ borderColor: C_HAIRLINE }}>
          <span className="font-sans font-light"
            style={{ fontSize:9, letterSpacing:'0.35em', textTransform:'uppercase', color:'rgba(58,58,58,0.35)' }}>
            Lun — Sam · 9h00 — 19h00 · Plainpalais, Genève
          </span>
          <a href="#reservation"
            className="self-start sm:self-auto inline-flex items-center gap-3 font-sans font-light"
            style={{
              fontSize:10, letterSpacing:'0.35em', textTransform:'uppercase',
              color:C_ANTH, textDecoration:'none',
              border:`1px solid rgba(58,58,58,0.3)`, padding:'12px 24px',
              transition:`color 0.3s ${E}, background 0.3s ${E}, border-color 0.3s`,
            }}
            onMouseEnter={e => { e.currentTarget.style.color='#fff'; e.currentTarget.style.background=C_ANTH; e.currentTarget.style.borderColor=C_ANTH; }}
            onMouseLeave={e => { e.currentTarget.style.color=C_ANTH; e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='rgba(58,58,58,0.3)'; }}>
            Prendre rendez-vous →
          </a>
        </div>
      </div>
    </section>
  );
}
