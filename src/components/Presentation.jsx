import { PRESENTATION } from '../data';

const C_ANTH     = '#3A3A3A';
const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(58,58,58,0.18)';

export default function Presentation() {
  return (
    <section
      className="px-5 sm:px-8 lg:px-16 py-16 lg:py-32 font-sans border-t"
      style={{ borderColor: C_HAIRLINE }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] items-start gap-10 lg:gap-24">
        <div
          className="relative w-full max-w-[320px] sm:max-w-[380px] mx-auto lg:max-w-none lg:mt-10"
          style={{
            aspectRatio: '4/5',
            padding: 14,
            background: '#fff',
            boxShadow: '0 22px 60px rgba(58,58,58,0.16), 0 2px 6px rgba(58,58,58,0.08)',
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
            <img
              src="/Fr-coiffure-maquette-C/federico.jpg"
              alt="Federico Renda — FR Coiffure"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
            {/* Caption overlay */}
            <div style={{
              position: 'absolute', left: 0, right: 0, bottom: 0,
              display: 'flex', justifyContent: 'space-between',
              padding: '12px 16px',
              background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.32) 100%)',
              color: '#fff',
              fontFamily: "'Open Sans', sans-serif",
              fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase',
              fontWeight: 300,
            }}>
              <span>Pl. № 02</span>
              <em style={{ fontStyle: 'italic', letterSpacing: '0.08em', textTransform: 'none' }}>Federico Renda</em>
            </div>
          </div>
        </div>

        <div className="pt-0 lg:pt-6">
          <div
            className="inline-flex items-center gap-4 mb-5 lg:mb-6 font-light"
            style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: C_ORANGE }}
          >
            <span style={{ display: 'inline-block', width: 32, height: 1, background: C_ORANGE }}></span>
            01 — Le salon
          </div>

          <h2
            className="font-sans font-light m-0"
            style={{ color: C_ANTH, fontSize: 'clamp(28px, 6vw, 54px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Une{' '}
            <em className="italic" style={{ color: C_ORANGE }}>signature</em>
            {' '}genevoise,<br/>
            une approche personnalisée.
          </h2>

          <p
            className="font-sans font-light mt-7 lg:mt-10 max-w-[520px]"
            style={{ fontSize: 'clamp(14px, 2.5vw, 16.5px)', lineHeight: 1.85, color: '#5e564e' }}
          >
            {PRESENTATION}
          </p>

          <div
            className="grid grid-cols-3 gap-4 mt-10 lg:mt-12 pt-6 lg:pt-8 border-t max-w-[560px]"
            style={{ borderColor: C_HAIRLINE }}
          >
            {[
              ['+15 ans', 'à Plainpalais'],
              ['6', 'artisans coiffeurs'],
              ['Sur-mesure', 'chaque rendez-vous'],
            ].map(([key, val], i) => (
              <div key={key}>
                <div
                  className="font-sans font-light tracking-tight"
                  style={{ fontSize: 'clamp(15px, 3vw, 20px)', color: i === 1 ? C_ORANGE : C_ANTH }}
                >
                  {key}
                </div>
                <div
                  className="mt-1 font-sans"
                  style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8d8479' }}
                >
                  {val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
