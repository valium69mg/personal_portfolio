import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const LINKS = ['About', 'Skills', 'Projects', 'Contact'];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.toLowerCase())).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.4, rootMargin: '-10% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const solidBg = scrolled || open;

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        backgroundColor: solidBg ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: solidBg ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: solidBg ? 'blur(16px)' : 'none',
        borderBottom: `1px solid ${solidBg ? 'var(--color-border)' : 'transparent'}`,
        transition: 'background-color 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1.125rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#hero" style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.03em', color: 'var(--color-text)' }}>
          CR
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex" style={{ gap: '2rem', listStyle: 'none', alignItems: 'center' }}>
          {LINKS.map((l) => {
            const isActive = active === l.toLowerCase();
            return (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? 'var(--color-text)' : 'var(--color-text-secondary)',
                    transition: 'color 200ms ease',
                    cursor: 'pointer',
                    position: 'relative',
                    paddingBottom: '2px',
                  }}
                  onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--color-text)'; }}
                  onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--color-text-secondary)'; }}
                >
                  {l}
                  <span style={{
                    position: 'absolute',
                    bottom: '-2px', left: 0, right: 0,
                    height: '1px',
                    backgroundColor: 'var(--color-accent)',
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    transition: 'transform 250ms ease',
                    transformOrigin: 'left',
                  }} />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-text)',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '44px',
            minHeight: '44px',
          }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="mobile-menu md:hidden"
          style={{
            borderTop: '1px solid var(--color-border)',
            backgroundColor: 'rgba(10,10,10,0.97)',
          }}
        >
          {LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '1.125rem 1.5rem',
                fontSize: '1.125rem',
                fontWeight: active === l.toLowerCase() ? 600 : 400,
                color: active === l.toLowerCase() ? 'var(--color-text)' : 'var(--color-text-secondary)',
                borderBottom: '1px solid var(--color-border)',
                cursor: 'pointer',
                transition: 'color 150ms ease',
              }}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
