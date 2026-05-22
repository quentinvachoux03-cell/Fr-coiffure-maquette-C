import { useState } from 'react';

const C_OFF = '#b8b2aa';
const C_ON  = '#5e5e5e';

export function GooeyFilter() {
  return (
    <svg style={{ position: 'fixed', width: 0, height: 0, overflow: 'hidden' }}>
      <defs>
        <filter id="goo-theme">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feColorMatrix
            in="blur" mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
}

export function LiquidToggle({ checked = false, onCheckedChange }) {
  const [on, setOn] = useState(checked);

  const handleChange = (e) => {
    setOn(e.target.checked);
    onCheckedChange?.(e.target.checked);
  };

  return (
    <>
      <GooeyFilter />
      <label style={{
        position: 'relative', display: 'block',
        cursor: 'pointer', height: 32, width: 52,
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
      }}>
        {/* Background track */}
        <input
          type="checkbox"
          checked={on}
          onChange={handleChange}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            borderRadius: 999, cursor: 'pointer', appearance: 'none',
            WebkitAppearance: 'none',
            margin: 0, outline: 'none',
            backgroundColor: on ? C_ON : C_OFF,
            transition: 'background-color 0.5s',
            transform: 'translate3d(0,0,0)',
          }}
        />

        {/* Gooey SVG circles */}
        <svg
          viewBox="0 0 52 32"
          filter="url(#goo-theme)"
          style={{
            pointerEvents: 'none',
            position: 'absolute', inset: 0,
            fill: 'white',
            transform: 'translate3d(0,0,0)',
            overflow: 'visible',
          }}
        >
          {/* Left circle — visible when OFF */}
          <circle
            cx="16" cy="16" r="10"
            style={{
              transformOrigin: '16px 16px',
              transform: `translateX(${on ? '12px' : '0px'}) scale(${on ? '0' : '1'})`,
              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
          {/* Right circle — visible when ON */}
          <circle
            cx="36" cy="16" r="10"
            style={{
              transformOrigin: '36px 16px',
              transform: `translateX(${on ? '0px' : '-12px'}) scale(${on ? '1' : '0'})`,
              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
          {/* Drop animation when ON */}
          {on && (
            <circle
              cx="35" cy="-1" r="2.5"
              style={{ transition: 'transform 0.7s' }}
            />
          )}
        </svg>
      </label>
    </>
  );
}
