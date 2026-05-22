import { useState } from 'react';
import { SERVICES } from '../data';
import { useReveal } from '../hooks/useReveal';

const C_ANTH     = '#3A3A3A';
const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(58,58,58,0.14)';
const E          = 'cubic-bezier(0.16, 1, 0.3, 1)';

function ServiceBand({ service, isOpen, onToggle }) {
  const [hovered, setHovered] = useState(false);
  const dark = hovered || isOpen;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: dark ? C_ANTH : 'transparent',
        borderBottom: `1px solid ${dark ? 'rgba(255,255,255,0.07)' : C_HAIRLINE}`,
        transition: `background 0.5s ${E}`,
      }}
    >
      {/* ── Trigger row ── */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left font-sans font-light"
        style={{
          display:'flex', alignItems:'center', justifyContent:'space-between',
          gap:16, background:'transparent', border:'none', cursor:'pointer',
          padding:'clamp(18px, 2.5vw, 28px) 0',
        }}
      >
        {/* Number + title */}
        <div style={{ display:'flex', alignItems:'baseline', gap:'clamp(14px, 3vw, 48px)', flex:1, minWidth:0 }}>
          <span style={{
            fontFamily:"'Open Sans',sans-serif", fontSize:9,
            letterSpacing:'0.5em', textTransform:'uppercase', flexShrink:0,
            color: dark ? C_ORANGE : 'rgba(58,58,58,0.22)',
            transition:`color 0.4s`,
          }}>
            {service.n}
          </span>
          <span style={{
            fontSize:'clamp(22px, 3.5vw, 44px)',
            letterSpacing:'-0.02em', lineHeight:1.05,
            color: dark ? '#fff' : C_ANTH,
            transition:`color 0.4s`,
          }}>
            {service.title}
          </span>
        </div>

        {/* Right: count + icon */}
        <div style={{ display:'flex', alignItems:'center', gap:'clamp(10px, 2vw, 28px)', flexShrink:0 }}>
          <span className="hidden sm:block" style={{
            fontSize:9, letterSpacing:'0.35em', textTransform:'uppercase', fontWeight:300,
            color: dark ? 'rgba(255,255,255,0.35)' : 'rgba(58,58,58,0.28)',
            transition:`color 0.4s`,
          }}>
            {String(service.items.length).padStart(2,'0')} soins
          </span>

          {/* Plus → × rotation */}
          <span style={{
            display:'inline-flex', alignItems:'center', justifyContent:'center',
            width:28, height:28,
            border: `1px solid ${dark ? 'rgba(255,255,255,0.2)' : 'rgba(58,58,58,0.2)'}`,
            borderRadius:'50%',
            color: dark ? C_ORANGE : 'rgba(58,58,58,0.4)',
            fontSize:14, fontWeight:300, lineHeight:1,
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            transition:`transform 0.5s ${E}, color 0.4s, border-color 0.4s`,
          }}>+</span>
        </div>
      </button>

      {/* ── Expand panel ── */}
      <div style={{
        display:'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition:`grid-template-rows 0.6s ${E}`,
      }}>
        <div style={{ overflow:'hidden' }}>
          <div style={{
            paddingLeft:'clamp(36px, 7vw, 92px)',
            paddingBottom:32, paddingTop:4,
            display:'flex', flexWrap:'wrap', rowGap:10,
          }}>
            {service.items.map((item, i) => (
              <div key={item}
                className="w-full sm:w-1/2 lg:w-1/3"
                style={{
                  fontFamily:"'Open Sans',sans-serif",
                  fontSize:'clamp(12px, 1.2vw, 14px)', fontWeight:300,
                  color:'rgba(255,255,255,0.55)',
                  display:'flex', alignItems:'center', gap:10,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'none' : 'translateY(8px)',
                  transition:`opacity 0.45s ${E} ${0.06 + i * 0.038}s, transform 0.45s ${E} ${0.06 + i * 0.038}s`,
                }}>
                <span style={{ width:10, height:1, background:C_ORANGE, display:'inline-block', flexShrink:0 }} />
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
      className="font-sans relative overflow-hidden border-t"
      style={{ borderColor: C_HAIRLINE }}
    >
      {/* Ghost watermark */}
      <div aria-hidden style={{
        position:'absolute', top:'-0.05em', right:'-0.04em', zIndex:0,
        fontFamily:"'Open Sans',sans-serif", fontWeight:300, lineHeight:1,
        fontSize:'clamp(200px, 28vw, 400px)',
        color:'rgba(58,58,58,0.038)', letterSpacing:'-0.06em',
        pointerEvents:'none', userSelect:'none',
      }}>02</div>

      {/* ── Header ── */}
      <div className="relative px-5 sm:px-8 lg:px-16 pt-16 lg:pt-28 pb-10 lg:pb-16" style={{ zIndex:1 }}>

        <div className="a-up inline-flex items-center gap-3 mb-10 font-light"
          style={{ fontSize:9, letterSpacing:'0.55em', textTransform:'uppercase', color:C_ORANGE }}>
          <span style={{ display:'inline-block', width:18, height:1, background:C_ORANGE }} />
          02 — Prestations
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16">
          <h2 className="a-up a-d1 font-sans font-light m-0"
            style={{ color:C_ANTH, fontSize:'clamp(38px, 6.5vw, 82px)', lineHeight:0.93, letterSpacing:'-0.03em' }}>
            L'art du{' '}
            <em style={{ fontStyle:'italic', color:C_ORANGE }}>soin</em>,<br />
            six expertises.
          </h2>

          <p className="a-up a-d2 font-sans font-light m-0"
            style={{ fontSize:'clamp(12px, 1.2vw, 14px)', lineHeight:1.9, color:'#9c8f7e', maxWidth:260 }}>
            Chaque prestation est adaptée<br />à votre morphologie,<br />votre style et vos envies.
          </p>
        </div>
      </div>

      {/* ── Accordion ── */}
      <div className="relative px-5 sm:px-8 lg:px-16 pb-12 lg:pb-24" style={{ zIndex:1 }}>
        <div style={{ borderTop:`1px solid ${C_HAIRLINE}` }}>
          {SERVICES.map((s, i) => (
            <div key={s.n} className={`a-up a-d${Math.min(i + 1, 6)}`}>
              <ServiceBand
                service={s}
                isOpen={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="a-up a-d6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-10 lg:mt-14 pt-8 border-t"
          style={{ borderColor:C_HAIRLINE }}>
          <span className="font-sans font-light"
            style={{ fontSize:10, letterSpacing:'0.3em', textTransform:'uppercase', color:'rgba(58,58,58,0.4)' }}>
            Lun — Sam · 9h00 — 19h00 · Plainpalais
          </span>
          <a href="#reservation"
            className="self-start sm:self-auto inline-flex items-center gap-3 font-sans font-light"
            style={{
              fontSize:10, letterSpacing:'0.35em', textTransform:'uppercase',
              color:C_ANTH, textDecoration:'none',
              border:`1px solid rgba(58,58,58,0.35)`, padding:'13px 26px',
              transition:`color 0.35s ${E}, background 0.35s ${E}, border-color 0.35s`,
            }}
            onMouseEnter={e => { e.currentTarget.style.color='#fff'; e.currentTarget.style.background=C_ANTH; e.currentTarget.style.borderColor=C_ANTH; }}
            onMouseLeave={e => { e.currentTarget.style.color=C_ANTH; e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='rgba(58,58,58,0.35)'; }}>
            Prendre rendez-vous →
          </a>
        </div>
      </div>
    </section>
  );
}
