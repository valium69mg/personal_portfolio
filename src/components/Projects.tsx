import { useInView } from '../hooks/useInView';

interface Project {
  number: string;
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Police Intelligence Platform',
    company: 'IBL / iEntry',
    period: '2023 – Present',
    description: 'Backend for a police intelligence system processing hundreds of thousands of phone records per minute to detect criminal patterns in real time.',
    highlights: [
      'Java/Spring Boot microservices on AWS ECS with Docker',
      'Asynchronous inter-service communication via RabbitMQ',
      'Real-time push notifications via WebSockets in Node.js',
      'AI/ML modules (HuggingFace, Scikit-learn) for criminal pattern detection',
      'Geospatial visualization of criminal activity data',
      'Infrastructure versioned with Terraform',
    ],
    tags: ['Java', 'Spring Boot', 'AWS ECS', 'RabbitMQ', 'Python', 'AI/ML', 'Docker', 'Terraform'],
  },
  {
    number: '02',
    title: 'Toll Alarm & SOS Infrastructure',
    company: 'IBL / iEntry',
    period: '2023 – Present',
    description: 'Mission-critical alarm distribution system for toll highway infrastructure serving 15,000+ daily users — routing real-time alerts from cameras, SOS poles, and panic buttons.',
    highlights: [
      'RabbitMQ message broker + WebSockets for low-latency alert delivery',
      'Clean Architecture in Java/Spring Boot + SQL Server',
      'Full CI/CD pipeline: Jenkins, SonarQube, BitBucket',
      'Observability with Prometheus + Grafana',
    ],
    tags: ['Java', 'Spring Boot', 'RabbitMQ', 'WebSockets', 'SQL Server', 'Prometheus', 'Grafana', 'Jenkins'],
  },
  {
    number: '03',
    title: 'Industrial Access Control',
    company: 'IBL / iEntry',
    period: '2023 – Present',
    description: 'High-concurrency access control system for hundreds of daily employees at an industrial plant, with real-time control of physical access devices.',
    highlights: [
      'Java/Spring Boot REST API with SQLite for high-concurrency read/write',
      'Python/FastAPI microservice controlling a Raspberry Pi',
      'Real-time operation of physical turnstiles and barriers',
    ],
    tags: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'SQLite', 'Raspberry Pi'],
  },
  {
    number: '04',
    title: 'E-Commerce Platform',
    company: 'Freelance',
    period: 'Jun – Sep 2023',
    description: 'Full e-commerce platform built end-to-end — from requirements gathering to production deployment — for a technology company.',
    highlights: [
      'Product catalog, shopping cart, and order management',
      'Payment gateway integration',
      'React frontend + Node.js REST backend',
      'Delivered independently, fully production-ready',
    ],
    tags: ['Node.js', 'React', 'REST API', 'Payment Gateway'],
  },
];

export default function Projects() {
  const { ref, inView } = useInView(0.06);

  return (
    <section
      id="projects"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <div className="section-inner">

        <p style={{
          fontSize: '0.8125rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-accent)',
          marginBottom: '1.5rem',
          fontWeight: 500,
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(12px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        }}>Projects</p>

        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3.25rem)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 1.05,
          color: 'var(--color-text)',
          marginBottom: 'clamp(2rem, 5vw, 3.5rem)',
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(12px)',
          transition: 'opacity 0.5s ease-out 80ms, transform 0.5s ease-out 80ms',
        }}>
          Systems in
          <br />
          production.
        </h2>

        <div ref={ref} style={{ display: 'flex', flexDirection: 'column' }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} inView={inView} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, inView, delay }: { project: Project; inView: boolean; delay: number }) {
  return (
    <div
      style={{
        padding: 'clamp(1.5rem, 4vw, 2.25rem) 0',
        borderBottom: '1px solid var(--color-border)',
        display: 'grid',
        gridTemplateColumns: 'clamp(2rem, 5vw, 3.5rem) 1fr',
        gap: 'clamp(1rem, 3vw, 2rem)',
        alignItems: 'start',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.55s ease-out ${delay}ms, transform 0.55s ease-out ${delay}ms`,
      }}
    >
      <span style={{
        fontSize: '0.8125rem',
        fontWeight: 600,
        color: 'var(--color-text-secondary)',
        paddingTop: '0.2rem',
        fontVariantNumeric: 'tabular-nums',
      }}>
        {project.number}
      </span>

      <div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: '0.25rem 1rem',
          marginBottom: '0.625rem',
        }}>
          <h3 style={{
            fontSize: 'clamp(1.0625rem, 2.5vw, 1.375rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--color-text)',
          }}>
            {project.title}
          </h3>
          <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>
            {project.company} · {project.period}
          </span>
        </div>

        <p style={{
          color: 'var(--color-text-secondary)',
          fontSize: '0.9rem',
          lineHeight: 1.7,
          marginBottom: '1.125rem',
          maxWidth: '640px',
        }}>
          {project.description}
        </p>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1.25rem' }}>
          {project.highlights.map((h) => (
            <li key={h} style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', paddingLeft: '1.125rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent)', fontWeight: 700 }}>—</span>
              {h}
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.7rem',
                fontWeight: 500,
                padding: '0.2rem 0.6rem',
                backgroundColor: 'var(--color-surface-2)',
                border: '1px solid var(--color-border)',
                borderRadius: '3px',
                color: 'var(--color-text-secondary)',
                letterSpacing: '0.02em',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
