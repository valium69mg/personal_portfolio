import { useInView } from '../hooks/useInView';

interface Skill { name: string; logo?: string }
interface SkillGroup { category: string; skills: Skill[] }

const D = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Java',        logo: `${D}/java/java-original.svg` },
      { name: 'Spring Boot', logo: `${D}/spring/spring-original.svg` },
      { name: 'Python',      logo: `${D}/python/python-original.svg` },
      { name: 'FastAPI',     logo: `${D}/fastapi/fastapi-original.svg` },
      { name: 'Node.js',     logo: `${D}/nodejs/nodejs-original.svg` },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL',      logo: `${D}/mysql/mysql-original.svg` },
      { name: 'MongoDB',    logo: `${D}/mongodb/mongodb-original.svg` },
      { name: 'SQL Server', logo: `${D}/microsoftsqlserver/microsoftsqlserver-original.svg` },
      { name: 'SQLite',     logo: `${D}/sqlite/sqlite-original.svg` },
      { name: 'Redis',      logo: `${D}/redis/redis-original.svg` },
    ],
  },
  {
    category: 'Messaging',
    skills: [
      { name: 'RabbitMQ',     logo: `${D}/rabbitmq/rabbitmq-original.svg` },
      { name: 'Apache Kafka', logo: `${D}/apachekafka/apachekafka-original.svg` },
    ],
  },
  {
    category: 'Security',
    skills: [
      { name: 'Spring Security', logo: `${D}/spring/spring-original.svg` },
      { name: 'JWT' },
      { name: 'OAuth2' },
    ],
  },
  {
    category: 'Infrastructure',
    skills: [
      { name: 'Docker',     logo: `${D}/docker/docker-original.svg` },
      { name: 'AWS ECS',    logo: `${D}/amazonwebservices/amazonwebservices-original.svg` },
      { name: 'Kubernetes', logo: `${D}/kubernetes/kubernetes-original.svg` },
      { name: 'Terraform',  logo: `${D}/terraform/terraform-original.svg` },
    ],
  },
  {
    category: 'CI / CD',
    skills: [
      { name: 'Jenkins',    logo: `${D}/jenkins/jenkins-original.svg` },
      { name: 'SonarQube',  logo: `${D}/sonarqube/sonarqube-original.svg` },
      { name: 'BitBucket',  logo: `${D}/bitbucket/bitbucket-original.svg` },
    ],
  },
  {
    category: 'Testing',
    skills: [
      { name: 'JUnit',    logo: `${D}/junit/junit-plain.svg` },
      { name: 'Mockito' },
      { name: 'PyTest',   logo: `${D}/pytest/pytest-original.svg` },
      { name: 'Jest',     logo: `${D}/jest/jest-plain.svg` },
    ],
  },
  {
    category: 'AI / ML',
    skills: [
      { name: 'HuggingFace' },
      { name: 'Scikit-learn', logo: `${D}/scikitlearn/scikitlearn-original.svg` },
      { name: 'pandas',       logo: `${D}/pandas/pandas-original.svg` },
    ],
  },
];

export default function Skills() {
  const { ref, inView } = useInView(0.08);

  return (
    <section
      id="skills"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'var(--spacing-section) 1.5rem' }}>

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
        }}>Technical Skills</p>

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
          The stack
          <br />
          I work with.
        </h2>

        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 230px), 1fr))',
            border: '1px solid var(--color-border)',
          }}
        >
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              style={{
                padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                backgroundColor: 'var(--color-surface)',
                borderRight: '1px solid var(--color-border)',
                borderBottom: '1px solid var(--color-border)',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease-out ${gi * 60}ms, transform 0.5s ease-out ${gi * 60}ms`,
              }}
            >
              <p style={{
                fontSize: '0.7rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                marginBottom: '1.125rem',
                fontWeight: 600,
              }}>
                {group.category}
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.625rem',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      color: 'var(--color-text)',
                    }}
                  >
                    {skill.logo ? (
                      <img
                        src={skill.logo}
                        alt=""
                        width={20}
                        height={20}
                        loading="lazy"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                        style={{ width: '20px', height: '20px', objectFit: 'contain', flexShrink: 0 }}
                      />
                    ) : (
                      <span style={{ width: '20px', height: '20px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }} />
                      </span>
                    )}
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
