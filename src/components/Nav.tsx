import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LINKS = [
  { key: 'home',     id: 'hero' },
  { key: 'about',    id: 'about' },
  { key: 'skills',   id: 'skills' },
  { key: 'projects', id: 'projects' },
  { key: 'contact',  id: 'contact' },
];

export default function Nav() {
  const { t, i18n } = useTranslation();
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const currentLang = i18n.language === 'en' ? 'en' : 'es';

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
    onScroll();
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

        {/* Desktop links + lang toggle */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '0' }}>
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}>
            {LINKS.map(({ key, id }) => {
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
                    {t(`nav.${key}`)}
                    <span style={{
                      position: 'absolute', bottom: '-2px', left: 0, right: 0,
                      height: '1px', backgroundColor: 'var(--color-accent)',
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      transition: 'transform 250ms ease', transformOrigin: 'left',
                    }} />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Lang toggle */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.125rem',
            marginLeft: '1.5rem', paddingLeft: '1.5rem',
            borderLeft: '1px solid var(--color-border)',
          }}>
            {(['es', 'en'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => i18n.changeLanguage(lang)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '0.8rem', fontWeight: currentLang === lang ? 700 : 400,
                  color: currentLang === lang ? 'var(--color-text)' : 'var(--color-text-secondary)',
                  padding: '0.25rem 0.4rem', letterSpacing: '0.06em',
                  transition: 'color 200ms ease',
                  minHeight: '44px',
                }}
                aria-label={`Switch to ${lang === 'es' ? 'Spanish' : 'English'}`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          style={{
            background: 'none', border: 'none',
            color: 'var(--color-text)', cursor: 'pointer',
            alignItems: 'center', justifyContent: 'center',
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
          {LINKS.map(({ key, id }) => (
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
              {t(`nav.${key}`)}
            </a>
          ))}

          {/* Lang toggle — mobile */}
          <div style={{
            display: 'flex', gap: '0', padding: '1rem clamp(1.25rem, 3vw, 2.5rem)',
          }}>
            {(['es', 'en'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => { i18n.changeLanguage(lang); setOpen(false); }}
                style={{
                  background: currentLang === lang ? 'var(--color-surface-2)' : 'none',
                  border: '1px solid var(--color-border)',
                  cursor: 'pointer', color: 'var(--color-text)',
                  fontSize: '0.875rem', fontWeight: currentLang === lang ? 700 : 400,
                  padding: '0.5rem 1rem', transition: 'background 200ms ease',
                  marginRight: '-1px',
                }}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
