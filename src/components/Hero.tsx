import { ArrowDown, GitFork, ExternalLink, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 1.5rem',
        paddingTop: '5rem',
        maxWidth: '1280px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      {/* Available badge */}
      <div className="hero-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.75rem',
          fontWeight: 500,
          color: 'var(--color-green)',
          border: '1px solid rgba(34,197,94,0.25)',
          borderRadius: '100px',
          padding: '0.25rem 0.75rem',
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-green)',
            flexShrink: 0,
            animation: 'dotPulse 2s ease-in-out infinite',
          }} />
          Open to new roles
        </span>
        <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', letterSpacing: '0.05em' }}>
          Backend Developer · Querétaro, MX
        </span>
      </div>

      {/* Name */}
      <h1
        className="hero-name"
        style={{
          fontSize: 'var(--type-giant)',
          fontWeight: 900,
          letterSpacing: '-0.05em',
          lineHeight: 0.88,
          color: 'var(--color-text)',
          marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
        }}
      >
        Carlos
        <br />
        Román
      </h1>

      {/* Description */}
      <p
        className="hero-desc"
        style={{
          fontSize: 'var(--type-hero-sub)',
          color: 'var(--color-text-secondary)',
          maxWidth: '520px',
          lineHeight: 1.7,
          marginBottom: 'clamp(2rem, 4vw, 3rem)',
        }}
      >
        Building high-availability microservices and distributed systems. Production
        systems serving{' '}
        <span style={{ color: 'var(--color-text)', fontWeight: 600 }}>15K+ daily users</span>{' '}
        and processing{' '}
        <span style={{ color: 'var(--color-text)', fontWeight: 600 }}>100K+ records/min</span>.
      </p>

      {/* CTAs + social */}
      <div className="hero-cta" style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <a
          href="#projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'var(--color-accent)',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            borderRadius: '4px',
            fontWeight: 600,
            fontSize: '0.9375rem',
            transition: 'background-color 200ms ease, transform 150ms ease',
            cursor: 'pointer',
            minHeight: '44px',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundColor = 'var(--color-accent-hover)';
            el.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundColor = 'var(--color-accent)';
            el.style.transform = 'translateY(0)';
          }}
        >
          View Projects
        </a>

        <a
          href="#contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            border: '1px solid var(--color-border)',
            color: 'var(--color-text)',
            padding: '0.75rem 1.5rem',
            borderRadius: '4px',
            fontWeight: 500,
            fontSize: '0.9375rem',
            transition: 'border-color 200ms ease, transform 150ms ease',
            cursor: 'pointer',
            minHeight: '44px',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = 'var(--color-text-secondary)';
            el.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = 'var(--color-border)';
            el.style.transform = 'translateY(0)';
          }}
        >
          Contact Me
        </a>

        <div style={{ display: 'flex', gap: '0.625rem' }}>
          {[
            { href: 'https://linkedin.com/in/carlos-tranquilino', icon: <ExternalLink size={17} />, label: 'LinkedIn' },
            { href: 'https://github.com/valium69mg', icon: <GitFork size={17} />, label: 'GitHub' },
            { href: 'mailto:carlostranquilino.cr@gmail.com', icon: <Mail size={17} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                color: 'var(--color-text-secondary)',
                transition: 'color 200ms ease, border-color 200ms ease, transform 150ms ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'var(--color-text)';
                el.style.borderColor = 'var(--color-text-secondary)';
                el.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'var(--color-text-secondary)';
                el.style.borderColor = 'var(--color-border)';
                el.style.transform = 'translateY(0)';
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="hero-scroll"
        style={{
          marginTop: 'auto',
          paddingTop: '3rem',
          paddingBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--color-text-secondary)',
          fontSize: '0.8125rem',
        }}
      >
        <ArrowDown size={14} />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
