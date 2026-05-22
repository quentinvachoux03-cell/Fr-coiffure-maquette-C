import { useState } from 'react';
import { SERVICES } from '../data';
import { useReveal } from '../hooks/useReveal';

const C_ANTH     = '#3A3A3A';
const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(58,58,58,0.12)';
const E          = 'cubic-bezier(0.16, 1, 0.3, 1)';

function PackCard({ service, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`a-up a-d${Math.min(index + 1, 6)}`}
      style={{
        background: '#fff',
        borderTop: `2px solid ${open ? C_ORANGE : 'rgba(58,58,58,0.13)'}`,
        border: `1px solid ${open ? 'rgba(217,64,24,0.25)' : 'rgba(58,58,58,0.1)'}`,
        borderTopWidth: 2,
        borderTopColor: open ? C_ORANGE : 'rgba(58,58,58,0.18)',
        padding: 'clamp(22px, 3vw, 36px)',
        transition: 'border-color 0.35s, box-shadow 0.35s',
        boxShadow: open ? '0 8px 32px rgba(0,0,0,0.07)' : '0 1px 4px rgba(0,0,0,0.04)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background number */}
      <div style={{
        position: 'absolute', top: -8, right: 12,
        fontSize: 88, fontWeight: 700, lineHeight: 1,
        color: open ? 'rgba(217,64,24,0.06)' : 'rgba(58,58,58,0.04)',
        fontFamily: "'Open Sans', sans-serif",
        userSelect: 'none', pointerEvents: 'none',
        transition: 'color 0.35s',
      }}>
        {service.n}
      </div>

      {/* Pack label */}
      <div style={{
        fontFamily: "'Open Sans', sans-serif",
        fontSize: 9, letterSpacing: '0.5em', textTransform: 'uppercase',
        color: open ? C_ORANGE : 'rgba(58,58,58,0.32)',
        fontWeight: 300, marginBottom: 14,
        transition: 'color 0.3s',
      }}>
        Pack {service.n}
      </div>

      {/* Clickable header row */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
          width: '100%', textAlign: 'left',
        }}
      >
        <h3 style={{
          margin: 0,
          fontSize: 'clamp(18px, 2vw, 23px)',
          fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.1,
          color: open ? C_ORANGE : C_ANTH,
          fontFamily: "'Open Sans', sans-serif",
          transition: 'color 0.3s',
        }}>
          {service.title}
        </h3>

        {/* +/× icon in circle */}
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 30, height: 30, flexShrink: 0, borderRadius: '50%',
          border: `1px solid ${open ? C_ORANGE : 'rgba(58,58,58,0.22)'}`,
          fontSize: 16, fontWeight: 300,
          color: open ? C_ORANGE : 'rgba(58,58,58,0.4)',
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          transition: `transform 0.42s ${E}, color 0.3s, border-color 0.3s`,
        }}>+</span>
      </button>

      {/* Item count preview */}
      {!open && (
        <div style={{
          marginTop: 10,
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(58,58,58,0.3)', fontWeight: 300,
        }}>
          {service.items.length} prestation{service.items.length > 1 ? 's' : ''}
        </div>
      )}

      {/* Accordion content */}
      <div style={{
        display: 'grid',
        gridTemplateRows: open ? '1fr' : '0fr',
        transition: `grid-template-rows 0.5s ${E}`,
      }}>
        <div style={{ overflow: 'hidden' }}>
          <ul style={{
            listStyle: 'none', padding: '18px 0 4px', margin: 0,
            display: 'flex', flexDirection: 'column', gap: 9,
          }}>
            {service.items.map((item, i) => (
              <li key={item} style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: 12, fontWeight: 300, letterSpacing: '0.03em',
                color: '#7a7068',
                display: 'flex', alignItems: 'center', gap: 12,
                opacity: open ? 1 : 0,
                transform: open ? 'none' : 'translateY(5px)',
                transition: `opacity 0.36s ${E} ${0.06 + i * 0.04}s, transform 0.36s ${E} ${0.06 + i * 0.04}s`,
              }}>
                <span style={{
                  width: 18, height: 1, background: C_ORANGE,
                  display: 'inline-block', flexShrink: 0, opacity: 0.55,
                }} />
                {item}
              </li>
            ))}
          </ul>
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
      <div className="px-5 sm:px-8 lg:px-16 pt-16 lg:pt-28 pb-10 lg:pb-16">
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

      {/* Pack cards grid */}
      <div className="px-5 sm:px-8 lg:px-16 pb-14 lg:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {SERVICES.map((s, i) => (
            <PackCard key={s.n} service={s} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="a-up a-d6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 mt-8 pt-8 border-t"
          style={{ borderColor:C_HAIRLINE }}>
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
