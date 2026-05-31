import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';

interface ProjectItem {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

const PROJECT_TAGS = [
  ['Java', 'Spring Boot', 'AWS ECS', 'RabbitMQ', 'Python', 'AI/ML', 'Docker', 'Terraform'],
  ['Java', 'Spring Boot', 'RabbitMQ', 'WebSockets', 'SQL Server', 'Prometheus', 'Grafana', 'Jenkins'],
  ['Java', 'Spring Boot', 'Python', 'FastAPI', 'SQLite', 'Raspberry Pi'],
  ['Node.js', 'React', 'REST API', 'Payment Gateway'],
];

export default function Projects() {
  const { t } = useTranslation();
  const { ref, inView } = useInView(0.06);

  const items = t('projects.items', { returnObjects: true }) as ProjectItem[];

  return (
    <section id="projects" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="section-inner">
        <p style={{
          fontSize: '0.8125rem', letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'var(--color-accent)', marginBottom: '1.5rem', fontWeight: 500,
          opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(12px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        }}>{t('projects.label')}</p>

        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 900,
          letterSpacing: '-0.04em', lineHeight: 1.05, color: 'var(--color-text)',
          marginBottom: 'clamp(2rem, 5vw, 3.5rem)',
          opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(12px)',
          transition: 'opacity 0.5s ease-out 80ms, transform 0.5s ease-out 80ms',
        }}>
          {t('projects.title1')}<br />{t('projects.title2')}
        </h2>

        <div ref={ref} style={{ display: 'flex', flexDirection: 'column' }}>
          {items.map((item, i) => (
            <div key={i} style={{
              padding: 'clamp(1.5rem, 4vw, 2.25rem) 0',
              borderBottom: '1px solid var(--color-border)',
              display: 'grid',
              gridTemplateColumns: 'clamp(2rem, 5vw, 3.5rem) 1fr',
              gap: 'clamp(1rem, 3vw, 2rem)', alignItems: 'start',
              opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.55s ease-out ${i * 80}ms, transform 0.55s ease-out ${i * 80}ms`,
            }}>
              <span style={{
                fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text-secondary)',
                paddingTop: '0.2rem', fontVariantNumeric: 'tabular-nums',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>

              <div>
                <div style={{
                  display: 'flex', flexWrap: 'wrap',
                  justifyContent: 'space-between', alignItems: 'baseline',
                  gap: '0.25rem 1rem', marginBottom: '0.625rem',
                }}>
                  <h3 style={{
                    fontSize: 'clamp(1.0625rem, 2.5vw, 1.375rem)', fontWeight: 700,
                    letterSpacing: '-0.03em', color: 'var(--color-text)',
                  }}>{item.title}</h3>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>
                    {item.company} · {item.period}
                  </span>
                </div>

                <p style={{
                  color: 'var(--color-text-secondary)', fontSize: '0.9rem',
                  lineHeight: 1.7, marginBottom: '1.125rem', maxWidth: '640px',
                }}>{item.description}</p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1.25rem' }}>
                  {item.highlights.map((h, hi) => (
                    <li key={hi} style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', paddingLeft: '1.125rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent)', fontWeight: 700 }}>—</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {PROJECT_TAGS[i]?.map((tag) => (
                    <span key={tag} style={{
                      fontSize: '0.7rem', fontWeight: 500, padding: '0.2rem 0.6rem',
                      backgroundColor: 'var(--color-surface-2)',
                      border: '1px solid var(--color-border)', borderRadius: '3px',
                      color: 'var(--color-text-secondary)', letterSpacing: '0.02em',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
