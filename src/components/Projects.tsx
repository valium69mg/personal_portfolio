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
    description:
      'Backend for a police intelligence system that processes hundreds of thousands of phone records per minute to detect criminal patterns.',
    highlights: [
      'Java/Spring Boot microservices on AWS ECS with Docker',
      'Asynchronous inter-service communication via RabbitMQ',
      'Real-time notifications with WebSockets in Node.js',
      'AI/ML modules in Python (HuggingFace, Scikit-learn) for criminal pattern detection',
      'Geospatial visualization of criminal activity',
      'Infrastructure versioned with Terraform',
    ],
    tags: ['Java', 'Spring Boot', 'AWS ECS', 'RabbitMQ', 'Python', 'AI/ML', 'Docker', 'Terraform'],
  },
  {
    number: '02',
    title: 'Toll Alarm & SOS Infrastructure',
    company: 'IBL / iEntry',
    period: '2023 – Present',
    description:
      'Mission-critical alarm distribution system for toll highway infrastructure serving 15,000+ daily users.',
    highlights: [
      'Real-time alert routing from cameras, SOS poles, and panic buttons',
      'RabbitMQ message broker + WebSockets for low-latency delivery',
      'Clean Architecture in Java/Spring Boot + SQL Server',
      'Full CI/CD pipeline: Jenkins, SonarQube, BitBucket',
      'Observability with Prometheus + Grafana',
    ],
    tags: ['Java', 'Spring Boot', 'RabbitMQ', 'WebSockets', 'Prometheus', 'Grafana', 'Jenkins'],
  },
  {
    number: '03',
    title: 'Industrial Access Control',
    company: 'IBL / iEntry',
    period: '2023 – Present',
    description:
      'High-concurrency access control system for hundreds of daily employees at an industrial plant with real-time physical device control.',
    highlights: [
      'REST APIs with Java/Spring Boot + SQLite for high-concurrency scenarios',
      'Python/FastAPI service controlling a Raspberry Pi',
      'Real-time operation of physical access devices',
    ],
    tags: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'SQLite', 'Raspberry Pi'],
  },
  {
    number: '04',
    title: 'E-Commerce Platform',
    company: 'Freelance',
    period: 'Jun – Sep 2023',
    description:
      'Full e-commerce platform built end-to-end — from requirements gathering to production deployment — for a technology company.',
    highlights: [
      'Product catalog, shopping cart, and order management',
      'Payment gateway integration',
      'React frontend + Node.js backend',
      'Responsive, production-ready, delivered independently',
    ],
    tags: ['Node.js', 'React', 'REST API', 'Payment Gateway'],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
        Projects
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
        Systems in
        <br />
        production.
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      style={{
        padding: '2.5rem 0',
        borderBottom: '1px solid var(--color-border)',
        display: 'grid',
        gridTemplateColumns: 'clamp(2rem, 5vw, 4rem) 1fr',
        gap: '2rem',
        alignItems: 'start',
      }}
    >
      <span
        style={{
          fontSize: '0.8125rem',
          fontWeight: 600,
          color: 'var(--color-text-secondary)',
          paddingTop: '0.25rem',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {project.number}
      </span>

      <div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            gap: '0.5rem',
            marginBottom: '0.5rem',
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: 'var(--color-text)',
            }}
          >
            {project.title}
          </h3>
          <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
            {project.company} · {project.period}
          </span>
        </div>

        <p
          style={{
            color: 'var(--color-text-secondary)',
            fontSize: '0.9375rem',
            lineHeight: 1.65,
            marginBottom: '1.25rem',
            maxWidth: '680px',
          }}
        >
          {project.description}
        </p>

        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
            marginBottom: '1.5rem',
          }}
        >
          {project.highlights.map((h) => (
            <li
              key={h}
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-text-secondary)',
                paddingLeft: '1rem',
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  color: 'var(--color-accent)',
                }}
              >
                —
              </span>
              {h}
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                padding: '0.25rem 0.625rem',
                backgroundColor: 'var(--color-surface-2)',
                border: '1px solid var(--color-border)',
                borderRadius: '3px',
                color: 'var(--color-text-secondary)',
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
