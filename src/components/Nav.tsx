import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { label: 'Home',     id: 'hero' },
  { label: 'About',    id: 'about' },
  { label: 'Skills',   id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact',  id: 'contact' },
];

export default function Nav() {
  const [open, setOpen]       = useState(false);
  const [active, setActive]   = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  // Scroll-position based active detection — reliable for all section heights
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const trigger = window.scrollY + window.innerHeight * 0.35;
      let current = 'hero';
      for (const { id } of LINKS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= trigger) current = id;
      }
      setActive(current);
    };

    onScroll(); // run once on mount
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      backgroundColor: solidBg ? 'rgba(10,10,10,0.92)' : 'transparent',
      backdropFilter: solidBg ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: solidBg ? 'blur(16px)' : 'none',
      borderBottom: `1px solid ${solidBg ? 'var(--color-border)' : 'transparent'}`,
      transition: 'background-color 300ms ease, border-color 300ms ease',
    }}>
      <div style={{
        maxWidth: 'var(--content-max)', margin: '0 auto',
        padding: '1.125rem clamp(1.25rem, 3vw, 2.5rem)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <a href="#hero" style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.03em', color: 'var(--color-text)' }}>
          CR
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex" style={{ gap: '2rem', listStyle: 'none', alignItems: 'center' }}>
          {LINKS.map(({ label, id }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
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
                  {label}
                  <span style={{
                    position: 'absolute', bottom: '-2px', left: 0, right: 0,
                    height: '1px', backgroundColor: 'var(--color-accent)',
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
            background: 'none', border: 'none',
            color: 'var(--color-text)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            minWidth: '44px', minHeight: '44px',
          }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu md:hidden" style={{
          borderTop: '1px solid var(--color-border)',
          backgroundColor: 'rgba(10,10,10,0.97)',
        }}>
          {LINKS.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '1.125rem clamp(1.25rem, 3vw, 2.5rem)',
                fontSize: '1.125rem',
                fontWeight: active === id ? 600 : 400,
                color: active === id ? 'var(--color-text)' : 'var(--color-text-secondary)',
                borderBottom: '1px solid var(--color-border)',
                cursor: 'pointer',
                transition: 'color 150ms ease',
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
