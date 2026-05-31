import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

interface Stat {
  num: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { num: 3,   suffix: '+',  label: 'Years of experience' },
  { num: 15,  suffix: 'K+', label: 'Daily active users' },
  { num: 100, suffix: 'K+', label: 'Records per minute' },
  { num: 3,   suffix: '',   label: 'Production systems' },
];

function StatItem({ num, suffix, label, inView, delay }: Stat & { inView: boolean; delay: number }) {
  const value = useCountUp(num, 1300, inView);
  return (
    <div style={{
      padding: '1.5rem clamp(1rem, 3vw, 1.75rem)',
      borderBottom: '1px solid var(--color-border)',
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(16px)',
      transition: `opacity 0.55s ease-out ${delay}ms, transform 0.55s ease-out ${delay}ms`,
    }}>
      <p style={{
        fontSize: 'clamp(2rem, 5vw, 3.25rem)',
        fontWeight: 900,
        letterSpacing: '-0.04em',
        color: 'var(--color-text)',
        lineHeight: 1,
        marginBottom: '0.35rem',
        fontVariantNumeric: 'tabular-nums',
      }}>
        {value}{suffix}
      </p>
      <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
        {label}
      </p>
    </div>
  );
}

export default function About() {
  const { ref: photoRef, inView: photoIn }   = useInView(0.1);
  const { ref: bioRef,   inView: bioIn }     = useInView(0.1);
  const { ref: statsRef, inView: statsIn }   = useInView(0.1);

  return (
    <section id="about" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: 'var(--spacing-section) 1.5rem',
      }}>

        {/* Top row: photo + bio */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(2rem, 5vw, 4.5rem)',
          alignItems: 'start',
          marginBottom: 'clamp(3rem, 6vw, 5rem)',
        }}>

          {/* Photo */}
          <div
            ref={photoRef}
            style={{
              opacity: photoIn ? 1 : 0,
              transform: photoIn ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.65s ease-out, transform 0.65s ease-out',
            }}
          >
            <div style={{
              position: 'relative',
              display: 'inline-block',
              width: '100%',
              maxWidth: '340px',
            }}>
              <img
                src="/carlos.webp"
                alt="Carlos Román — Backend Developer"
                width={340}
                height={380}
                loading="lazy"
                style={{
                  width: '100%',
                  aspectRatio: '9 / 10',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  display: 'block',
                  border: '1px solid var(--color-border)',
                  filter: 'brightness(0.97)',
                }}
              />
              {/* Accent corner */}
              <div style={{
                position: 'absolute',
                bottom: '-8px',
                right: '-8px',
                width: '48px',
                height: '48px',
                border: '2px solid var(--color-accent)',
                zIndex: -1,
              }} />
            </div>
          </div>

          {/* Bio */}
          <div ref={bioRef}>
            <p style={{
              fontSize: '0.8125rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: '1.25rem',
              fontWeight: 500,
              opacity: bioIn ? 1 : 0,
              transform: bioIn ? 'none' : 'translateY(14px)',
              transition: 'opacity 0.5s ease-out 0ms, transform 0.5s ease-out 0ms',
            }}>About</p>

            <h2 style={{
              fontSize: 'clamp(1.875rem, 4.5vw, 3rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: 'var(--color-text)',
              marginBottom: '1.5rem',
              opacity: bioIn ? 1 : 0,
              transform: bioIn ? 'none' : 'translateY(14px)',
              transition: 'opacity 0.5s ease-out 80ms, transform 0.5s ease-out 80ms',
            }}>
              Backend engineer
              <br />
              by craft.
            </h2>

            <p style={{
              color: 'var(--color-text-secondary)',
              fontSize: '0.9375rem',
              lineHeight: 1.8,
              marginBottom: '1.125rem',
              opacity: bioIn ? 1 : 0,
              transform: bioIn ? 'none' : 'translateY(14px)',
              transition: 'opacity 0.5s ease-out 160ms, transform 0.5s ease-out 160ms',
            }}>
              Backend Developer with 3+ years building high-availability microservices and
              distributed systems. My work spans mission-critical infrastructure in public
              safety, industrial access control, and toll highway management.
            </p>

            <p style={{
              color: 'var(--color-text-secondary)',
              fontSize: '0.9375rem',
              lineHeight: 1.8,
              marginBottom: '1.5rem',
              opacity: bioIn ? 1 : 0,
              transform: bioIn ? 'none' : 'translateY(14px)',
              transition: 'opacity 0.5s ease-out 240ms, transform 0.5s ease-out 240ms',
            }}>
              Mechatronics Engineer from Tecnológico de Monterrey — I bring a hardware-meets-software
              mindset to every system I design. Focused on clean architecture, automated testing,
              CI/CD pipelines, and AI/ML integration.
            </p>

            {/* Tags */}
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap',
              opacity: bioIn ? 1 : 0,
              transform: bioIn ? 'none' : 'translateY(14px)',
              transition: 'opacity 0.5s ease-out 320ms, transform 0.5s ease-out 320ms',
            }}>
              {['Querétaro, MX', 'C1 English', 'Español Nativo'].map((tag) => (
                <span key={tag} style={{
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  padding: '0.3rem 0.75rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: '100px',
                  color: 'var(--color-text-secondary)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          ref={statsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} inView={statsIn} delay={i * 80} />
          ))}
        </div>

      </div>
    </section>
  );
}
