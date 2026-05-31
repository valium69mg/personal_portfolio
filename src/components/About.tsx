import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

interface Stat { num: number; suffix: string; label: string }

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
      padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
      borderRight: '1px solid var(--color-border)',
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(14px)',
      transition: `opacity 0.55s ease-out ${delay}ms, transform 0.55s ease-out ${delay}ms`,
    }}>
      <p style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 900,
        letterSpacing: '-0.04em',
        color: 'var(--color-text)',
        lineHeight: 1,
        marginBottom: '0.35rem',
        fontVariantNumeric: 'tabular-nums',
      }}>
        {value}{suffix}
      </p>
      <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>{label}</p>
    </div>
  );
}

export default function About() {
  const { ref: bioRef,   inView: bioIn   } = useInView(0.1);
  const { ref: statsRef, inView: statsIn } = useInView(0.1);

  return (
    <section id="about" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="section-inner">

        {/* Bio — 2-col grid */}
        <div
          ref={bioRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'start',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          <div>
            <p style={{
              fontSize: '0.8125rem', letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'var(--color-accent)', marginBottom: '1.25rem', fontWeight: 500,
              opacity: bioIn ? 1 : 0, transform: bioIn ? 'none' : 'translateY(14px)',
              transition: 'opacity 0.5s ease-out 0ms, transform 0.5s ease-out 0ms',
            }}>About</p>

            <h2 style={{
              fontSize: 'clamp(1.875rem, 4vw, 3rem)',
              fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05,
              color: 'var(--color-text)', marginBottom: 0,
              opacity: bioIn ? 1 : 0, transform: bioIn ? 'none' : 'translateY(14px)',
              transition: 'opacity 0.5s ease-out 80ms, transform 0.5s ease-out 80ms',
            }}>
              Backend engineer
              <br />
              by craft.
            </h2>
          </div>

          <div>
            <p style={{
              color: 'var(--color-text-secondary)', fontSize: '0.9375rem',
              lineHeight: 1.8, marginBottom: '1.125rem',
              opacity: bioIn ? 1 : 0, transform: bioIn ? 'none' : 'translateY(14px)',
              transition: 'opacity 0.5s ease-out 120ms, transform 0.5s ease-out 120ms',
            }}>
              Backend Developer with 3+ years building high-availability microservices and
              distributed systems. My work spans mission-critical infrastructure in public
              safety, industrial access control, and toll highway management.
            </p>

            <p style={{
              color: 'var(--color-text-secondary)', fontSize: '0.9375rem', lineHeight: 1.8,
              marginBottom: '1.5rem',
              opacity: bioIn ? 1 : 0, transform: bioIn ? 'none' : 'translateY(14px)',
              transition: 'opacity 0.5s ease-out 200ms, transform 0.5s ease-out 200ms',
            }}>
              Mechatronics Engineer from Tecnológico de Monterrey — I bring a hardware-meets-software
              mindset to every system I design. Focused on clean architecture, automated testing,
              CI/CD pipelines, and AI/ML integration.
            </p>

            <div style={{
              display: 'flex', gap: '0.5rem', flexWrap: 'wrap',
              opacity: bioIn ? 1 : 0, transform: bioIn ? 'none' : 'translateY(14px)',
              transition: 'opacity 0.5s ease-out 280ms, transform 0.5s ease-out 280ms',
            }}>
              {['Querétaro, MX', 'C1 English', 'Español Nativo'].map((tag) => (
                <span key={tag} style={{
                  fontSize: '0.75rem', fontWeight: 500,
                  padding: '0.3rem 0.75rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: '100px', color: 'var(--color-text-secondary)',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats — horizontal row */}
        <div
          ref={statsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
            borderTop: '1px solid var(--color-border)',
            borderLeft: '1px solid var(--color-border)',
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
