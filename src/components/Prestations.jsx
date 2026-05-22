import { useState } from 'react';
import { SERVICES } from '../data';
import { useReveal } from '../hooks/useReveal';

const C_ANTH     = '#3A3A3A';
const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(58,58,58,0.12)';
const E          = 'cubic-bezier(0.16, 1, 0.3, 1)';

function ServiceCard({ service, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`a-up a-d${Math.min(index + 1, 6)}`}
      style={{ padding: 'clamp(24px, 3.5vw, 44px) clamp(16px, 2vw, 28px)' }}>

      {/* Number */}
      <div style={{
        fontFamily:"'Open Sans',sans-serif", fontSize:9,
        letterSpacing:'0.55em', textTransform:'uppercase',
        color: open ? C_ORANGE : 'rgba(58,58,58,0.3)',
        fontWeight:300, marginBottom:14,
        transition:'color 0.3s',
      }}>
        {service.n}
      </div>

      {/* Clickable title */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full text-left font-sans font-light"
        style={{
          background:'none', border:'none', cursor:'pointer', padding:0,
          display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:12,
        }}
      >
        <h3 style={{
          margin:0, fontSize:'clamp(20px, 2.5vw, 30px)',
          fontWeight:300, letterSpacing:'-0.02em', lineHeight:1.05,
          color: open ? C_ORANGE : C_ANTH,
          transition:'color 0.3s',
        }}>
          {service.title}
        </h3>
        <span style={{
          display:'inline-block', fontSize:16, fontWeight:300, flexShrink:0, marginTop:4,
          color: open ? C_ORANGE : 'rgba(58,58,58,0.28)',
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          transition:`transform 0.45s ${E}, color 0.3s`,
        }}>+</span>
      </button>

      {/* Items — expand / collapse */}
      <div style={{
        display:'grid',
        gridTemplateRows: open ? '1fr' : '0fr',
        transition:`grid-template-rows 0.52s ${E}`,
      }}>
        <div style={{ overflow:'hidden' }}>
          <ul style={{ listStyle:'none', padding:'14px 0 4px', margin:0, display:'flex', flexDirection:'column', gap:8 }}>
            {service.items.map((item, i) => (
              <li key={item} style={{
                fontFamily:"'Open Sans',sans-serif",
                fontSize:12, fontWeight:300, letterSpacing:'0.02em',
                color:'#7a7068',
                display:'flex', alignItems:'center', gap:9,
                opacity: open ? 1 : 0,
                transform: open ? 'none' : 'translateY(5px)',
                transition:`opacity 0.38s ${E} ${0.04 + i * 0.035}s, transform 0.38s ${E} ${0.04 + i * 0.035}s`,
              }}>
                <span style={{ width:8, height:1, background:C_ORANGE, display:'inline-block', flexShrink:0, opacity:0.7 }} />
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
      {/* ── Header ── */}
      <div className="px-5 sm:px-8 lg:px-16 pt-16 lg:pt-28 pb-10 lg:pb-16">
        <div className="a-up inline-flex items-center gap-3 mb-10 font-light"
          style={{ fontSize:9, letterSpacing:'0.55em', textTransform:'uppercase', color:C_ORANGE }}>
          <span style={{ display:'inline-block', width:16, height:1, background:C_ORANGE }} />
          02 — Prestations
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <h2 className="a-up a-d1 font-sans font-light m-0"
            style={{ color:C_ANTH, fontSize:'clamp(36px, 6vw, 78px)', lineHeight:0.93, letterSpacing:'-0.03em' }}>
            L'art du{' '}
            <em style={{ fontStyle:'italic', color:C_ORANGE }}>soin</em>,<br />
            six expertises.
          </h2>
          <p className="a-up a-d2 font-sans font-light m-0"
            style={{ fontSize:'clamp(12px, 1.2vw, 14px)', lineHeight:1.9, color:'#9c8f7e', maxWidth:240 }}>
            Chaque prestation est adaptée<br />à votre style et vos envies.
          </p>
        </div>
      </div>

      {/* ── Grid sans bordures ── */}
      <div className="px-5 sm:px-8 lg:px-16 pb-14 lg:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.n} service={s} index={i} />
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
