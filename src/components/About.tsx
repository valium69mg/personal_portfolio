import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

interface Stat {
  num: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { num: 3,   suffix: '+',   label: 'Years of experience' },
  { num: 15,  suffix: 'K+',  label: 'Daily active users' },
  { num: 100, suffix: 'K+',  label: 'Records per minute' },
  { num: 3,   suffix: '',    label: 'Production systems' },
];

function StatItem({ num, suffix, label, inView, delay }: Stat & { inView: boolean; delay: number }) {
  const value = useCountUp(num, 1300, inView);
  return (
    <div
      style={{
        padding: '1.75rem clamp(1rem, 3vw, 2rem)',
        borderBottom: '1px solid var(--color-border)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.55s ease-out ${delay}ms, transform 0.55s ease-out ${delay}ms`,
      }}
    >
      <p style={{
        fontSize: 'clamp(2.25rem, 6vw, 3.75rem)',
        fontWeight: 900,
        letterSpacing: '-0.04em',
        color: 'var(--color-text)',
        lineHeight: 1,
        marginBottom: '0.4rem',
        fontVariantNumeric: 'tabular-nums',
      }}>
        {value}{suffix}
      </p>
      <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
        {label}
      </p>
    </div>
  );
}

export default function About() {
  const { ref: leftRef, inView: leftIn } = useInView();
  const { ref: rightRef, inView: rightIn } = useInView();

  return (
    <section
      id="about"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: 'var(--spacing-section) 1.5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
        gap: 'clamp(2.5rem, 6vw, 5rem)',
        alignItems: 'start',
      }}>

        {/* Bio */}
        <div ref={leftRef}>
          <p style={{
            fontSize: '0.8125rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: '1.5rem',
            fontWeight: 500,
            opacity: leftIn ? 1 : 0,
            transform: leftIn ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.55s ease-out 0ms, transform 0.55s ease-out 0ms',
          }}>About</p>

          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            color: 'var(--color-text)',
            marginBottom: '1.75rem',
            opacity: leftIn ? 1 : 0,
            transform: leftIn ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.55s ease-out 80ms, transform 0.55s ease-out 80ms',
          }}>
            Backend engineer
            <br />
            by craft.
          </h2>

          <p style={{
            color: 'var(--color-text-secondary)',
            fontSize: '0.9375rem',
            lineHeight: 1.75,
            marginBottom: '1.25rem',
            opacity: leftIn ? 1 : 0,
            transform: leftIn ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.55s ease-out 160ms, transform 0.55s ease-out 160ms',
          }}>
            Backend Developer with 3+ years building high-availability microservices and distributed
            systems. My work spans mission-critical infrastructure in public safety, industrial
            access control, and toll highway management.
          </p>

          <p style={{
            color: 'var(--color-text-secondary)',
            fontSize: '0.9375rem',
            lineHeight: 1.75,
            opacity: leftIn ? 1 : 0,
            transform: leftIn ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.55s ease-out 240ms, transform 0.55s ease-out 240ms',
          }}>
            Mechatronics Engineer from Tecnológico de Monterrey — I bring a hardware-meets-software
            mindset to every system I design. Focused on clean architecture, automated testing,
            CI/CD, and AI/ML integration. C1 English.
          </p>
        </div>

        {/* Stats */}
        <div ref={rightRef} style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} inView={rightIn} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
