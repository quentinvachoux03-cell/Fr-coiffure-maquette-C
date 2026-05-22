import { useState } from 'react';
import { SERVICES } from '../data';
import { useReveal } from '../hooks/useReveal';

const C_ANTH     = '#3A3A3A';
const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(58,58,58,0.18)';
const E          = 'cubic-bezier(0.16, 1, 0.3, 1)';

function AccordionRow({ service, isOpen, onToggle }) {
  const [hovered, setHovered] = useState(false);
  const active = isOpen || hovered;

  return (
    <div style={{ borderBottom: `1px solid ${C_HAIRLINE}` }}>

      {/* Row trigger */}
      <button
        type="button"
        onClick={onToggle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-full text-left font-sans font-light"
        style={{
          display:'flex', alignItems:'center', justifyContent:'space-between',
          background:'transparent', border:'none', cursor:'pointer',
          padding:'22px 0',
          transition:`color 0.3s`,
          color: isOpen ? C_ORANGE : C_ANTH,
        }}
      >
        <div style={{ display:'flex', alignItems:'baseline', gap:'clamp(16px, 3vw, 40px)' }}>
          <span style={{
            fontFamily:"'Open Sans',sans-serif",
            fontSize:10, letterSpacing:'0.4em',
            color: active ? C_ORANGE : 'rgba(58,58,58,0.3)',
            fontWeight:300, flexShrink:0,
            transition:'color 0.3s',
          }}>
            {service.n}
          </span>
          <span style={{
            fontSize:'clamp(18px, 3vw, 30px)',
            letterSpacing:'-0.015em', lineHeight:1.1,
            color: active ? C_ORANGE : C_ANTH,
            transition:'color 0.3s',
          }}>
            {service.title}
          </span>
        </div>

        <div style={{ display:'flex', alignItems:'center', gap:'clamp(12px, 2vw, 28px)', flexShrink:0 }}>
          <span style={{
            fontSize:10, letterSpacing:'0.25em', textTransform:'uppercase',
            color:'rgba(58,58,58,0.35)', fontWeight:300,
            transition:'color 0.3s',
          }} className="hidden sm:inline">
            {String(service.items.length).padStart(2,'0')} soins
          </span>
          <span style={{
            display:'inline-block',
            fontSize:20, fontWeight:300,
            color: active ? C_ORANGE : 'rgba(58,58,58,0.35)',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            transition:`transform 0.45s ${E}, color 0.3s`,
            lineHeight:1,
          }}>+</span>
        </div>
      </button>

      {/* Expand panel — CSS grid-template-rows trick (no JS height) */}
      <div style={{
        display:'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition:`grid-template-rows 0.55s ${E}`,
      }}>
        <div style={{ overflow:'hidden' }}>
          <div style={{
            display:'flex', flexWrap:'wrap', gap:'10px 0',
            paddingBottom: 28, paddingTop: 6,
            paddingLeft:'clamp(30px, 6vw, 72px)',
          }}>
            {service.items.map((item, i) => (
              <div key={item}
                className="w-full sm:w-1/2 lg:w-1/3"
                style={{
                  fontFamily:"'Open Sans',sans-serif",
                  fontSize:'clamp(12px, 1.3vw, 14px)',
                  color:'#6b6358', fontWeight:300,
                  display:'flex', alignItems:'center', gap:10,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'none' : 'translateY(6px)',
                  transition:`opacity 0.4s ${0.06 + i * 0.04}s, transform 0.4s ${E} ${0.06 + i * 0.04}s`,
                }}>
                <span style={{ display:'inline-block', width:12, height:1, background:C_ORANGE, flexShrink:0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Prestations() {
  const [openIdx, setOpenIdx] = useState(null);
  const ref = useReveal();

  return (
    <section
      ref={ref}
      id="prestations"
      className="font-sans border-t"
      style={{ borderColor:C_HAIRLINE }}
    >
      {/* ── Header ── */}
      <div className="px-5 sm:px-8 lg:px-16 pt-16 lg:pt-28 pb-10 lg:pb-16">
        <div className="a-up inline-flex items-center gap-3 mb-8 lg:mb-12 font-light"
          style={{ fontSize:10, letterSpacing:'0.48em', textTransform:'uppercase', color:C_ORANGE }}>
          <span style={{ display:'inline-block', width:20, height:1, background:C_ORANGE }} />
          02 — Prestations
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <h2 className="a-up a-d1 font-sans font-light m-0"
            style={{ color:C_ANTH, fontSize:'clamp(36px, 6.5vw, 80px)', lineHeight:0.95, letterSpacing:'-0.03em' }}>
            L'art du{' '}
            <em className="italic" style={{ color:C_ORANGE }}>soin</em>,<br />
            six expertises.
          </h2>

          <p className="a-up a-d2 font-sans font-light"
            style={{
              fontSize:'clamp(13px, 1.3vw, 15px)', lineHeight:1.85,
              color:'#9c8f7e', maxWidth:280,
            }}>
            Chaque prestation est adaptée à votre morphologie, votre style de vie et vos envies.
          </p>
        </div>
      </div>

      {/* ── Accordion ── */}
      <div className="px-5 sm:px-8 lg:px-16 pb-14 lg:pb-28">
        <div style={{ borderTop:`1px solid ${C_HAIRLINE}` }}>
          {SERVICES.map((s, i) => (
            <div key={s.n} className={`a-up a-d${Math.min(i + 1, 6)}`}>
              <AccordionRow
                service={s}
                isOpen={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            </div>
          ))}
        </div>

        {/* ── CTA strip ── */}
        <div className="a-up a-d6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-12 lg:mt-16 pt-8"
          style={{ borderTop:`1px solid ${C_HAIRLINE}` }}>
          <p className="font-sans font-light m-0"
            style={{ fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(58,58,58,0.45)' }}>
            Salon ouvert Lun — Sam · 9h — 19h
          </p>
          <a
            href="#reservation"
            className="self-start sm:self-auto inline-flex items-center gap-3 font-sans font-light"
            style={{
              fontSize:11, letterSpacing:'0.3em', textTransform:'uppercase',
              color:C_ANTH, textDecoration:'none',
              border:`1px solid rgba(58,58,58,0.38)`, padding:'13px 28px',
              transition:`color 0.35s, background 0.35s, border-color 0.35s`,
            }}
            onMouseEnter={e => { e.currentTarget.style.color='#fff'; e.currentTarget.style.background=C_ANTH; e.currentTarget.style.borderColor=C_ANTH; }}
            onMouseLeave={e => { e.currentTarget.style.color=C_ANTH; e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='rgba(58,58,58,0.38)'; }}
          >
            Prendre rendez-vous →
          </a>
        </div>
      </div>
    </section>
  );
}
