import { useEffect, useRef } from 'react';

export function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('vis'); io.disconnect(); } },
      { threshold, rootMargin: '0px 0px -48px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return ref;
}
