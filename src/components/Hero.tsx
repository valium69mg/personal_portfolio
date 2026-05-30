import { ArrowDown, GitFork, ExternalLink, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 2rem',
        paddingTop: '5rem',
        maxWidth: '1280px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      <p
        style={{
          fontSize: '0.8125rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-accent)',
          marginBottom: '1.5rem',
          fontWeight: 500,
        }}
      >
        Backend Developer · Querétaro, Mexico
      </p>

      <h1
        style={{
          fontSize: 'var(--type-giant)',
          fontWeight: 900,
          letterSpacing: '-0.05em',
          lineHeight: 0.9,
          color: 'var(--color-text)',
          marginBottom: '2.5rem',
        }}
      >
        Carlos
        <br />
        Román
      </h1>

      <p
        style={{
          fontSize: 'var(--type-hero-sub)',
          color: 'var(--color-text-secondary)',
          maxWidth: '560px',
          lineHeight: 1.6,
          marginBottom: '3rem',
        }}
      >
        Building high-availability microservices and distributed systems.
        Production systems serving{' '}
        <span style={{ color: 'var(--color-text)', fontWeight: 600 }}>15,000+ daily users</span>{' '}
        and processing{' '}
        <span style={{ color: 'var(--color-text)', fontWeight: 600 }}>
          hundreds of thousands of records per minute
        </span>
        .
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <a
          href="#projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'var(--color-accent)',
            color: '#fff',
            padding: '0.75rem 1.75rem',
            borderRadius: '4px',
            fontWeight: 600,
            fontSize: '0.9375rem',
            transition: 'background-color 200ms ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-accent-hover)')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-accent)')
          }
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
            padding: '0.75rem 1.75rem',
            borderRadius: '4px',
            fontWeight: 500,
            fontSize: '0.9375rem',
            transition: 'border-color 200ms ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-text-secondary)')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)')
          }
        >
          Contact Me
        </a>

        <div style={{ display: 'flex', gap: '0.75rem', marginLeft: '0.5rem' }}>
          {[
            { href: 'https://linkedin.com/in/carlos-tranquilino', icon: <ExternalLink size={18} />, label: 'LinkedIn' },
            { href: 'https://github.com/valium69mg', icon: <GitFork size={18} />, label: 'GitHub' },
            { href: 'mailto:carlostranquilino.cr@gmail.com', icon: <Mail size={18} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
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
                transition: 'color 200ms ease, border-color 200ms ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'var(--color-text)';
                el.style.borderColor = 'var(--color-text-secondary)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'var(--color-text-secondary)';
                el.style.borderColor = 'var(--color-border)';
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: 'auto',
          paddingTop: '4rem',
          paddingBottom: '2rem',
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
