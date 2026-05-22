import { useReveal } from '../hooks/useReveal';
import { TEAM } from '../data';

const C_ANTH     = '#3A3A3A';
const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(58,58,58,0.12)';
const BASE       = '/Fr-coiffure-maquette-C';
const E          = 'cubic-bezier(0.16, 1, 0.3, 1)';

export default function PageEquipe() {
  const ref = useReveal();

  return (
    <div ref={ref} style={{ paddingTop: 80 }}>
      {/* Header */}
      <div
        className="px-5 sm:px-8 lg:px-16 pt-16 lg:pt-24 pb-10 lg:pb-16 border-b"
        style={{ borderColor: C_HAIRLINE }}
      >
        <div className="a-up inline-flex items-center gap-3 mb-8 font-light"
          style={{ fontSize: 9, letterSpacing: '0.55em', textTransform: 'uppercase', color: C_ORANGE }}>
          <span style={{ display: 'inline-block', width: 16, height: 1, background: C_ORANGE }} />
          L'équipe · FR Coiffure
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <h1 className="a-up a-d1 font-sans m-0" style={{
            color: C_ANTH, fontWeight: 300,
            fontSize: 'clamp(36px, 6vw, 84px)',
            lineHeight: 0.9, letterSpacing: '-0.02em',
          }}>
            Les{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: C_ORANGE }}>visages</em>
            <br />de la maison.
          </h1>

          <p className="a-up a-d2 font-sans font-light m-0" style={{
            fontSize: 'clamp(12px, 1.1vw, 14px)', lineHeight: 1.9,
            color: '#9c8f7e', maxWidth: 280,
          }}>
            Une équipe de passionnés réunie autour d'une vision commune de l'excellence capillaire.
          </p>
        </div>

        <a
          href="#"
          onClick={e => { e.preventDefault(); window.location.hash = ''; }}
          className="a-up a-d3 font-sans font-light"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            marginTop: 32, fontSize: 9, letterSpacing: '0.42em', textTransform: 'uppercase',
            color: 'rgba(58,58,58,0.4)', textDecoration: 'none',
            transition: 'color 0.3s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = C_ORANGE}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(58,58,58,0.4)'}
        >
          ← Retour à l'accueil
        </a>
      </div>

      {/* Team grid */}
      <div className="px-5 sm:px-8 lg:px-16 py-14 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {TEAM.map((member, i) => (
            <div key={member.name} className={`a-scale a-d${Math.min(i + 1, 6)}`}>
              <div style={{ aspectRatio: '3/4', overflow: 'hidden', background: '#d8d3cc' }}>
                <img
                  src={`${BASE}/${encodeURIComponent(member.photo)}`}
                  alt={member.name}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center top',
                    display: 'block',
                    transition: `transform 0.7s ${E}`,
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div className="mt-5 pt-5 border-t" style={{ borderColor: C_HAIRLINE }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                  <span style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 300, color: C_ANTH }}>
                    {member.name}
                  </span>
                  <span style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: C_ORANGE, fontWeight: 300 }}>
                    {member.since}
                  </span>
                </div>
                <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8d8479', fontWeight: 300 }}>
                  {member.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        className="px-5 sm:px-8 lg:px-16 pb-20 pt-8 border-t"
        style={{ borderColor: C_HAIRLINE, textAlign: 'center' }}
      >
        <p className="a-up font-sans font-light m-0" style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: 1.9, color: '#7a6e67', marginBottom: 28 }}>
          Rejoignez une maison indépendante qui valorise le savoir-faire artisanal.
        </p>
        <a href="#reservation"
          onClick={() => { window.location.hash = ''; }}
          className="a-up a-d1 font-sans font-light"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase',
            color: C_ANTH, textDecoration: 'none',
            border: `1px solid rgba(58,58,58,0.3)`, padding: '14px 32px',
            transition: `color 0.3s ${E}, background 0.3s ${E}, border-color 0.3s`,
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = C_ANTH; e.currentTarget.style.borderColor = C_ANTH; }}
          onMouseLeave={e => { e.currentTarget.style.color = C_ANTH; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(58,58,58,0.3)'; }}
        >
          Prendre rendez-vous →
        </a>
      </div>
    </div>
  );
}
