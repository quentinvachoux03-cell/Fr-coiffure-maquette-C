import { useState } from 'react';
import { SERVICES } from '../data';
import { useReveal } from '../hooks/useReveal';

const C_ANTH     = '#3A3A3A';
const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(58,58,58,0.18)';

export default function Prestations() {
  const [idx, setIdx] = useState(0);
  const cat = SERVICES[idx];
  const ref = useReveal();

  return (
    <section
      ref={ref}
      id="reservation"
      className="px-5 sm:px-8 lg:px-16 py-16 lg:py-40 font-sans border-t"
      style={{ borderColor: C_HAIRLINE }}
    >
      <div className="max-w-[820px] mx-auto text-center">

        {/* Eyebrow */}
        <div
          className="a-up inline-flex items-center gap-4 mb-8 lg:mb-10 font-light"
          style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: C_ORANGE }}
        >
          <span style={{ display: 'inline-block', width: 32, height: 1, background: C_ORANGE }}></span>
          02 — Prestations
          <span style={{ display: 'inline-block', width: 32, height: 1, background: C_ORANGE }}></span>
        </div>

        {/* Tab strip */}
        <div className="a-up a-d1 flex flex-wrap justify-center items-center mb-14 lg:mb-24" style={{ rowGap: 8 }}>
          {SERVICES.map((s, i) => {
            const active = idx === i;
            return (
              <span key={s.title} className="inline-flex items-center">
                {i > 0 && (
                  <span
                    className="mx-3 inline-block"
                    style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(58,58,58,0.4)' }}
                  />
                )}
                <button
                  type="button"
                  onClick={() => setIdx(i)}
                  className="bg-transparent border-0 cursor-pointer font-sans px-1 py-1 font-light"
                  style={{
                    fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase',
                    color: active ? C_ORANGE : C_ANTH,
                    transition: 'color 0.25s',
                  }}
                  onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = C_ORANGE; }}
                  onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = C_ANTH; }}
                >
                  {s.title}
                </button>
              </span>
            );
          })}
        </div>

        {/* Content — keyed → re-animates on switch */}
        <div key={idx}>
          <div
            className="font-light mb-5 lg:mb-7"
            style={{
              fontSize: 11, letterSpacing: '0.35em', textTransform: 'uppercase',
              color: '#9c8f7e',
              animation: 'c-fade-up 0.5s 0s both',
            }}
          >
            № {cat.n} / 06
          </div>

          <h2
            className="font-sans font-light m-0"
            style={{
              color: C_ANTH,
              fontSize: 'clamp(36px, 8vw, 76px)', lineHeight: 1.02, letterSpacing: '-0.025em',
              animation: 'c-fade-up 0.55s 0.08s both',
            }}
          >
            {cat.title.includes(' & ') ? (
              <>
                {cat.title.split(' & ')[0]}
                <em className="italic font-light" style={{ color: C_ORANGE }}> & </em>
                {cat.title.split(' & ')[1]}
              </>
            ) : cat.title}
          </h2>

          <div
            className="mx-auto mt-8 lg:mt-10 mb-10 lg:mb-14"
            style={{
              height: 1, width: 60, background: C_ORANGE,
              transformOrigin: 'left center',
              animation: 'c-line-grow 0.5s 0.2s both',
            }}
          />

          <ul className="list-none p-0 m-0 flex flex-col items-center" style={{ gap: 12 }}>
            {cat.items.map((item, i) => (
              <li
                key={item}
                className="font-sans font-light cursor-pointer"
                style={{
                  fontSize: 'clamp(17px, 3vw, 22px)', letterSpacing: '-0.005em', color: C_ANTH,
                  transition: 'color 0.2s',
                  animation: `c-fade-up 0.5s ${0.24 + i * 0.05}s both`,
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = C_ORANGE}
                onMouseLeave={(e) => e.currentTarget.style.color = C_ANTH}
              >
                {item}
              </li>
            ))}
          </ul>

          <div
            className="mt-12 lg:mt-16 flex flex-col items-center gap-5 lg:gap-7"
            style={{ animation: `c-fade-up 0.5s ${0.24 + cat.items.length * 0.05 + 0.1}s both` }}
          >
            <div
              className="font-light"
              style={{ fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#9c8f7e' }}
            >
              {cat.items.length.toString().padStart(2, '0')}{' '}
              {cat.items.length > 1 ? 'prestations' : 'prestation'} dans cette famille
            </div>
            <a
              href="#book"
              className="inline-flex items-center gap-3 text-white rounded-full font-light"
              style={{
                background: C_ORANGE, padding: '14px 28px',
                fontSize: 12, letterSpacing: '0.28em', textTransform: 'uppercase',
                textDecoration: 'none', transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = C_ANTH}
              onMouseLeave={(e) => e.currentTarget.style.background = C_ORANGE}
            >
              Réserver <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
