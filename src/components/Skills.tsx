const skillGroups = [
  {
    category: 'Languages',
    skills: ['Java / Spring Boot', 'Python / FastAPI', 'Node.js'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'MongoDB', 'SQL Server', 'SQLite', 'Redis'],
  },
  {
    category: 'Messaging',
    skills: ['RabbitMQ', 'Apache Kafka'],
  },
  {
    category: 'Security',
    skills: ['Spring Security', 'JWT', 'OAuth2'],
  },
  {
    category: 'Infrastructure',
    skills: ['Docker', 'AWS ECS', 'Kubernetes', 'Terraform'],
  },
  {
    category: 'CI/CD',
    skills: ['Jenkins', 'SonarQube', 'BitBucket'],
  },
  {
    category: 'Testing',
    skills: ['JUnit', 'Mockito', 'PyTest', 'Jest'],
  },
  {
    category: 'AI / ML',
    skills: ['HuggingFace', 'Scikit-learn', 'pandas'],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: 'var(--spacing-section) 2rem',
        borderTop: '1px solid var(--color-border)',
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
        Technical Skills
      </p>

      <h2
        style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 1,
          color: 'var(--color-text)',
          marginBottom: '4rem',
        }}
      >
        The stack
        <br />
        I work with.
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1px',
          border: '1px solid var(--color-border)',
        }}
      >
        {skillGroups.map(({ category, skills }) => (
          <div
            key={category}
            style={{
              padding: '2rem',
              backgroundColor: 'var(--color-surface)',
              borderRight: '1px solid var(--color-border)',
              borderBottom: '1px solid var(--color-border)',
            }}
          >
            <p
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                marginBottom: '1.25rem',
                fontWeight: 600,
              }}
            >
              {category}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {skills.map((s) => (
                <li
                  key={s}
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color: 'var(--color-text)',
                  }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
