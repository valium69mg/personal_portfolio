const stats = [
  { value: '3+', label: 'Years of experience' },
  { value: '15K+', label: 'Daily active users served' },
  { value: '100K+', label: 'Records processed per minute' },
  { value: '3', label: 'Production systems running' },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ maxWidth: '1280px', margin: '0 auto', padding: 'var(--spacing-section) 2rem' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        <div>
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
            About
          </p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1,
              color: 'var(--color-text)',
              marginBottom: '2rem',
            }}
          >
            Backend engineer
            <br />
            by craft.
          </h2>
          <p
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: '1rem',
              lineHeight: 1.75,
              marginBottom: '1.25rem',
            }}
          >
            I'm a Backend Developer with 3+ years of experience building high-availability
            microservices and distributed systems. My work spans mission-critical infrastructure
            in public safety, industrial access control, and toll management.
          </p>
          <p
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: '1rem',
              lineHeight: 1.75,
            }}
          >
            Mechatronics Engineer from Tecnológico de Monterrey — I bring a hardware-meets-software
            perspective to every system I design. Passionate about clean architecture,
            automated testing, CI/CD pipelines, and integrating AI/ML into critical infrastructure.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          {stats.map(({ value, label }) => (
            <div
              key={label}
              style={{
                padding: '2rem',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              <p
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  color: 'var(--color-text)',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}
              >
                {value}
              </p>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-text-secondary)',
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
