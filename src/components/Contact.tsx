import { Mail, ExternalLink, Phone } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const contacts = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'carlostranquilino.cr@gmail.com',
    href: 'mailto:carlostranquilino.cr@gmail.com',
  },
  {
    icon: <ExternalLink size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/carlos-tranquilino',
    href: 'https://linkedin.com/in/carlos-tranquilino',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+52 442 273 7384',
    href: 'tel:+524422737384',
  },
];

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section
      id="contact"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <div ref={ref} className="section-inner">

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
        }}>Contact</p>

        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3.25rem)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 1.05,
          color: 'var(--color-text)',
          marginBottom: '1.25rem',
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(12px)',
          transition: 'opacity 0.5s ease-out 80ms, transform 0.5s ease-out 80ms',
        }}>
          Let's build
          <br />
          something.
        </h2>

        <p style={{
          color: 'var(--color-text-secondary)',
          fontSize: '0.9375rem',
          maxWidth: '460px',
          lineHeight: 1.75,
          marginBottom: 'clamp(2rem, 5vw, 3.5rem)',
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(12px)',
          transition: 'opacity 0.5s ease-out 160ms, transform 0.5s ease-out 160ms',
        }}>
          Available for backend engineering roles and interesting distributed systems challenges.
          C1 English — comfortable in international teams.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          {contacts.map(({ icon, label, value, href }, i) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(0.75rem, 3vw, 1.25rem)',
                padding: '1.375rem 0',
                borderBottom: '1px solid var(--color-border)',
                color: 'var(--color-text)',
                transition: `color 200ms ease, opacity 0.5s ease-out ${240 + i * 80}ms, transform 0.5s ease-out ${240 + i * 80}ms`,
                cursor: 'pointer',
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(12px)',
                minHeight: '44px',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-accent)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text)'; }}
            >
              <span style={{ color: 'var(--color-text-secondary)', flexShrink: 0 }}>{icon}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', width: '4.5rem', flexShrink: 0 }}>{label}</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 500, wordBreak: 'break-all' }}>{value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
