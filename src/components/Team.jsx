import { TEAM } from '../data';
import { useReveal } from '../hooks/useReveal';

const C_ANTH     = '#3A3A3A';
const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(58,58,58,0.18)';
const BASE       = '/Fr-coiffure-maquette-C';

export default function Team() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      id="team"
      className="px-5 sm:px-8 lg:px-16 py-16 lg:py-32 font-sans border-t"
      style={{ borderColor: C_HAIRLINE }}
    >
      <div className="a-up flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-16">
        <div>
          <div
            className="inline-flex items-center gap-4 mb-4 lg:mb-6 font-light"
            style={{ fontSize: 9, letterSpacing: '0.55em', textTransform: 'uppercase', color: C_ORANGE }}
          >
            <span style={{ display: 'inline-block', width: 16, height: 1, background: C_ORANGE }} />
            02 — La Team
          </div>
          <h2
            className="font-sans m-0"
            style={{ color: C_ANTH, fontWeight: 300, fontSize: 'clamp(34px, 5.5vw, 68px)', lineHeight: 0.95, letterSpacing: '-0.01em' }}
          >
            Les{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: C_ORANGE }}>visages</em>
            <br />de la maison.
          </h2>
        </div>
        <a
          href="#/equipe"
          className="font-light self-start sm:self-auto"
          style={{
            color: C_ANTH, textDecoration: 'none',
            fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase',
            borderBottom: '1px solid rgba(58,58,58,0.3)', paddingBottom: 4,
            transition: 'color 0.3s, border-color 0.3s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = C_ORANGE; e.currentTarget.style.borderBottomColor = C_ORANGE; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = C_ANTH; e.currentTarget.style.borderBottomColor = 'rgba(58,58,58,0.3)'; }}
        >
          Toute l'équipe →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {TEAM.map((member, i) => (
          <div key={member.name} className={`a-scale a-d${Math.min(i + 1, 6)}`}>
            <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: '#d8d3cc' }}>
              <img
                src={`${BASE}/${encodeURIComponent(member.photo)}`}
                alt={member.name}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center top',
                  display: 'block',
                  transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            <div className="mt-4 pt-4 lg:mt-5 lg:pt-5 border-t" style={{ borderColor: C_HAIRLINE }}>
              <div className="flex items-baseline justify-between">
                <div className="font-sans font-light tracking-tight" style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', color: C_ANTH }}>
                  {member.name}
                </div>
                <span className="font-light" style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: C_ORANGE }}>
                  {member.since}
                </span>
              </div>
              <div className="mt-2 font-sans font-light" style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8d8479' }}>
                {member.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
