import HairPortrait from './HairPortrait';
import { TEAM } from '../data';
import { useReveal } from '../hooks/useReveal';

const C_ANTH     = '#3A3A3A';
const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(58,58,58,0.18)';

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
            style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: C_ORANGE }}
          >
            <span style={{ display: 'inline-block', width: 32, height: 1, background: C_ORANGE }}></span>
            03 — La Team
          </div>
          <h2
            className="font-sans font-light m-0"
            style={{ color: C_ANTH, fontSize: 'clamp(28px, 6vw, 54px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Les{' '}
            <em className="italic" style={{ color: C_ORANGE }}>visages</em>
            {' '}de la maison.
          </h2>
        </div>
        <a
          href="#"
          className="font-light self-start sm:self-auto"
          style={{
            color: C_ANTH, textDecoration: 'none',
            fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase',
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
          <div key={member.name} className={`a-scale a-d${i + 1}`}>
            <div className="relative" style={{ aspectRatio: '4/5' }}>
              <HairPortrait variant={member.variant} frame="thin" idSeed={310 + i} />
            </div>
            <div className="mt-4 pt-4 lg:mt-5 lg:pt-5 border-t" style={{ borderColor: C_HAIRLINE }}>
              <div className="flex items-baseline justify-between">
                <div
                  className="font-sans font-light tracking-tight"
                  style={{ fontSize: 'clamp(18px, 3vw, 22px)', color: C_ANTH }}
                >
                  {member.name}
                </div>
                <span
                  className="font-light"
                  style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: C_ORANGE }}
                >
                  depuis {member.since}
                </span>
              </div>
              <div
                className="mt-2 font-sans font-light"
                style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8d8479' }}
              >
                {member.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
