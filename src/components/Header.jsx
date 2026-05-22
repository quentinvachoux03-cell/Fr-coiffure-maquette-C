const C_ANTH     = '#3A3A3A';
const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(58,58,58,0.18)';

function MenuButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        background: 'transparent',
        border: `1px solid rgba(58,58,58,0.35)`,
        color: C_ANTH,
        padding: '9px 16px',
        borderRadius: 999,
        cursor: 'pointer',
        fontFamily: "'Open Sans', sans-serif",
        fontSize: 11,
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        fontWeight: 400,
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
        <line x1="3" y1="8"  x2="21" y2="8"/>
        <line x1="3" y1="16" x2="21" y2="16"/>
      </svg>
      <span className="hidden sm:inline">Menu</span>
    </button>
  );
}

export default function Header({ onMenu }) {
  return (
    <header
      className="sticky top-0 z-30 backdrop-blur-md border-b"
      style={{ background: 'rgba(239,229,214,0.85)', borderColor: C_HAIRLINE }}
    >
      <div
        className="grid items-center px-4 sm:px-8 lg:px-16 py-4 font-sans"
        style={{ gridTemplateColumns: '1fr auto 1fr' }}
      >
        <div className="justify-self-start">
          <MenuButton onClick={onMenu} />
        </div>
        <a href="#" className="justify-self-center">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQAAABkCAYAAAAv1k00AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0M0MzUyNjg0OEFBMTFFNDlBNjA4NzNCNjQ2NUE1NjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0M0MzUyNjc0OEFBMTFFNDlBNjA4NzNCNjQ2NUE1NjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjExNUQ5RUU4NDg5NTExRTQ4RTdDQ0RENEZGOUNFOEI2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjExNUQ5RUU5NDg5NTExRTQ4RTdDQ0RENEZGOUNFOEI2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+BuCqfQAAD+1JREFUeNrsnQtwVNUZ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" alt="FR Coiffure" style={{ width: 'clamp(88px, 14vw, 140px)', height: 'auto', display: 'block' }} />
        </a>
        <div
          className="flex items-center justify-end gap-3 font-light"
          style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: C_ANTH }}
        >
          <a href="#" className="hidden sm:inline" style={{ color: C_ANTH, textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = C_ORANGE}
            onMouseLeave={(e) => e.currentTarget.style.color = C_ANTH}>FR</a>
          <span className="hidden sm:inline" style={{ color: 'rgba(58,58,58,0.4)' }}>·</span>
          <a href="#" className="hidden sm:inline" style={{ color: C_ANTH, textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = C_ORANGE}
            onMouseLeave={(e) => e.currentTarget.style.color = C_ANTH}>EN</a>
          <a href="#reservation"
            style={{
              marginLeft: 4,
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: C_ORANGE, color: '#fff',
              padding: '9px 16px',
              borderRadius: 999,
              textDecoration: 'none',
              fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 400,
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = C_ANTH}
            onMouseLeave={(e) => e.currentTarget.style.background = C_ORANGE}
          >
            <span className="hidden sm:inline">Réserver </span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
