import { ArrowDown, GitFork, ExternalLink, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" style={{
      minHeight: '100svh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', paddingTop: '5rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Glow blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div className="glow-blob-1" style={{
          position: 'absolute', borderRadius: '50%',
          width: 'clamp(320px, 45vw, 650px)', height: 'clamp(320px, 45vw, 650px)',
          background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)',
          opacity: 0.13, top: '-15%', left: '-8%',
        }} />
        <div className="glow-blob-2" style={{
          position: 'absolute', borderRadius: '50%',
          width: 'clamp(220px, 32vw, 480px)', height: 'clamp(220px, 32vw, 480px)',
          background: 'radial-gradient(circle, #1d4ed8 0%, transparent 70%)',
          opacity: 0.09, bottom: '5%', right: '-5%',
        }} />
      </div>

      <div className="section-inner" style={{
        display: 'flex', flexDirection: 'column', flex: 1,
        justifyContent: 'center', position: 'relative', zIndex: 1,
      }}>
        <div className="hero-grid">
          {/* Left: text */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>

            {/* Badge */}
            <div className="hero-label" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', fontWeight: 500, color: 'var(--color-green)',
                border: '1px solid rgba(34,197,94,0.25)', borderRadius: '100px', padding: '0.25rem 0.75rem',
              }}>
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  backgroundColor: 'var(--color-green)', flexShrink: 0,
                  animation: 'dotPulse 2s ease-in-out infinite',
                }} />
                {t('hero.badge')}
              </span>
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', letterSpacing: '0.04em' }}>
                {t('hero.role')}
              </span>
            </div>

            {/* Name + mobile photo */}
            <div className="hero-name" style={{
              display: 'flex', alignItems: 'flex-start',
              justifyContent: 'space-between', gap: '1rem',
              marginBottom: 'clamp(1.25rem, 3vw, 2rem)',
            }}>
              <h1 style={{
                fontSize: 'var(--type-giant)', fontWeight: 900,
                letterSpacing: '-0.05em', lineHeight: 0.88, color: 'var(--color-text)',
              }}>
                Carlos<br />Román
              </h1>
              {/* Small photo — mobile only */}
              <div className="md:hidden" style={{ flexShrink: 0, position: 'relative' }}>
                <img
                  src="/carlos.webp" alt="Carlos Román" width={80} height={90}
                  style={{
                    width: '72px', height: '80px', objectFit: 'cover',
                    objectPosition: 'center 12%', display: 'block',
                    border: '1px solid var(--color-border)',
                  }}
                />
                <div style={{
                  position: 'absolute', bottom: '-5px', right: '-5px',
                  width: '18px', height: '18px',
                  border: '1.5px solid var(--color-accent)', zIndex: -1,
                }} />
              </div>
            </div>

            {/* Description */}
            <p className="hero-desc" style={{
              fontSize: 'var(--type-hero-sub)', color: 'var(--color-text-secondary)',
              maxWidth: '480px', lineHeight: 1.75,
              marginBottom: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            }}>
              {t('hero.desc1')}{' '}
              <span style={{ color: 'var(--color-text)', fontWeight: 600 }}>{t('hero.users')}</span>{' '}
              {t('hero.desc2')}{' '}
              <span style={{ color: 'var(--color-text)', fontWeight: 600 }}>{t('hero.records')}</span>.
            </p>

            {/* CTAs */}
            <div className="hero-cta" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#projects" style={{
                display: 'inline-flex', alignItems: 'center',
                backgroundColor: 'var(--color-accent)', color: '#fff',
                padding: '0.75rem 1.5rem', borderRadius: '4px',
                fontWeight: 600, fontSize: '0.9375rem',
                transition: 'background-color 200ms ease, transform 150ms ease',
                cursor: 'pointer', minHeight: '44px',
              }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'var(--color-accent-hover)'; el.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'var(--color-accent)'; el.style.transform = 'none'; }}
              >
                {t('hero.viewProjects')}
              </a>

              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center',
                border: '1px solid var(--color-border)', color: 'var(--color-text)',
                padding: '0.75rem 1.5rem', borderRadius: '4px',
                fontWeight: 500, fontSize: '0.9375rem',
                transition: 'border-color 200ms ease, transform 150ms ease',
                cursor: 'pointer', minHeight: '44px',
              }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--color-text-secondary)'; el.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--color-border)'; el.style.transform = 'none'; }}
              >
                {t('hero.contact')}
              </a>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {[
                  { href: 'https://linkedin.com/in/carlos-tranquilino', icon: <ExternalLink size={17} />, label: 'LinkedIn' },
                  { href: 'https://github.com/valium69mg',              icon: <GitFork size={17} />,     label: 'GitHub' },
                  { href: 'mailto:carlostranquilino.cr@gmail.com',       icon: <Mail size={17} />,        label: 'Email' },
                ].map(({ href, icon, label }) => (
                  <a key={label} href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: '44px', height: '44px',
                      border: '1px solid var(--color-border)', borderRadius: '4px',
                      color: 'var(--color-text-secondary)',
                      transition: 'color 200ms ease, border-color 200ms ease, transform 150ms ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--color-text)'; el.style.borderColor = 'var(--color-text-secondary)'; el.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--color-text-secondary)'; el.style.borderColor = 'var(--color-border)'; el.style.transform = 'none'; }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Scroll hint */}
            <div className="hero-scroll" style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              color: 'var(--color-text-secondary)', fontSize: '0.8125rem',
              marginTop: 'clamp(2.5rem, 5vw, 4rem)',
            }}>
              <ArrowDown size={14} />
              <span>{t('hero.scroll')}</span>
            </div>
          </div>

          {/* Right: photo — desktop only */}
          <div className="hero-photo hidden md:flex" style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: 'clamp(200px, 22vw, 360px)' }}>
              <img src="/carlos.webp" alt="Carlos Román" width={360} height={400}
                style={{
                  width: '100%', aspectRatio: '9 / 10', objectFit: 'cover',
                  objectPosition: 'center 12%', display: 'block',
                  border: '1px solid var(--color-border)',
                }}
              />
              <div style={{
                position: 'absolute', bottom: '-10px', right: '-10px',
                width: '52px', height: '52px',
                border: '2px solid var(--color-accent)', zIndex: -1,
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
