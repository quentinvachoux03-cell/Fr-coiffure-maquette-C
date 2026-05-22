import { useState } from 'react';
import { TEAM } from '../data';
import { useReveal } from '../hooks/useReveal';

const C_ANTH     = '#3A3A3A';
const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(58,58,58,0.18)';
const BASE       = '/Fr-coiffure-maquette-C';
const E          = 'cubic-bezier(0.16, 1, 0.3, 1)';

// 3 columns, 2 members each — staggered offsets
const COL_OFFSETS = [0, 56, 28];

export default function Team() {
  const ref = useReveal();
  const [hovered, setHovered] = useState(null); // member name or null

  const columns = [
    TEAM.filter((_, i) => i % 3 === 0),
    TEAM.filter((_, i) => i % 3 === 1),
    TEAM.filter((_, i) => i % 3 === 2),
  ];

  const getImgStyle = (name) => {
    const isHovered = hovered === name;
    const anyHovered = hovered !== null;
    return {
      width: '100%', height: '100%',
      objectFit: 'cover', objectPosition: 'center top',
      display: 'block',
      filter: anyHovered && !isHovered ? 'grayscale(100%)' : 'grayscale(0%)',
      opacity: anyHovered && !isHovered ? 0.55 : 1,
      transform: isHovered ? 'scale(1.04)' : 'scale(1)',
      transition: `filter 0.5s ${E}, opacity 0.5s ${E}, transform 0.65s ${E}`,
    };
  };

  const getNameStyle = (name) => ({
    fontFamily: "'Open Sans',sans-serif",
    fontSize: 'clamp(15px, 1.6vw, 19px)',
    fontWeight: 300,
    letterSpacing: '-0.01em',
    color: hovered === name ? C_ORANGE : C_ANTH,
    transition: `color 0.3s ${E}`,
    margin: 0,
    lineHeight: 1.1,
  });

  return (
    <section
      ref={ref}
      id="team"
      className="px-5 sm:px-8 lg:px-16 py-16 lg:py-32 font-sans border-t"
      style={{ borderColor: C_HAIRLINE }}
    >
      {/* Header */}
      <div className="a-up flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 lg:mb-20">
        <div>
          <div
            className="inline-flex items-center gap-4 mb-4 lg:mb-6 font-light"
            style={{ fontSize: 9, letterSpacing: '0.55em', textTransform: 'uppercase', color: C_ORANGE }}
          >
            <span style={{ display: 'inline-block', width: 16, height: 1, background: C_ORANGE }} />
            03 — La Team
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
      </div>

      {/* Main content: photo grid left, names right */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

        {/* LEFT — Staggered 3-column photo grid */}
        <div className="lg:w-7/12 hidden lg:flex gap-4 items-start">
          {columns.map((col, colIdx) => (
            <div
              key={colIdx}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                paddingTop: COL_OFFSETS[colIdx],
              }}
            >
              {col.map((member, cardIdx) => (
                <div
                  key={member.name}
                  className={`a-scale a-d${colIdx + cardIdx * 3 + 1}`}
                  style={{ overflow: 'hidden', cursor: 'default' }}
                  onMouseEnter={() => setHovered(member.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div style={{ aspectRatio: '3/4', overflow: 'hidden', background: '#d8d3cc' }}>
                    <img
                      src={`${BASE}/${encodeURIComponent(member.photo)}`}
                      alt={member.name}
                      style={getImgStyle(member.name)}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile grid (simple 2-col) */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4">
          {TEAM.map((member, i) => (
            <div key={member.name} className={`a-scale a-d${Math.min(i + 1, 6)}`}
              style={{ overflow: 'hidden' }}
              onMouseEnter={() => setHovered(member.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{ aspectRatio: '3/4', overflow: 'hidden', background: '#d8d3cc' }}>
                <img
                  src={`${BASE}/${encodeURIComponent(member.photo)}`}
                  alt={member.name}
                  style={getImgStyle(member.name)}
                />
              </div>
              <div style={{ marginTop: 10 }}>
                <p style={getNameStyle(member.name)}>{member.name}</p>
                <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#9c8f7e', fontWeight: 300, margin: '5px 0 0' }}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — Name & role list */}
        <div className="hidden lg:flex lg:w-5/12 flex-col justify-center">
          <div className="flex flex-col">
            {TEAM.map((member, i) => (
              <div
                key={member.name}
                className={`a-up a-d${Math.min(i + 1, 6)}`}
                style={{
                  padding: '20px 0',
                  borderBottom: `1px solid ${C_HAIRLINE}`,
                  cursor: 'default',
                  opacity: hovered !== null && hovered !== member.name ? 0.4 : 1,
                  transition: `opacity 0.4s ${E}`,
                }}
                onMouseEnter={() => setHovered(member.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16 }}>
                  <p style={getNameStyle(member.name)}>{member.name}</p>
                  <span style={{
                    fontFamily: "'Open Sans',sans-serif",
                    fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase',
                    color: C_ORANGE, fontWeight: 300, flexShrink: 0,
                    opacity: hovered === member.name ? 1 : 0,
                    transition: `opacity 0.3s ${E}`,
                  }}>
                    {member.since}
                  </span>
                </div>
                <p style={{
                  fontFamily: "'Open Sans',sans-serif",
                  fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase',
                  color: '#9c8f7e', fontWeight: 300, margin: '6px 0 0',
                }}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
