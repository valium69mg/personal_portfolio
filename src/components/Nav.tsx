export default function Nav() {
  const links = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.25rem 2rem',
        borderBottom: '1px solid var(--color-border)',
        backgroundColor: 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <a
        href="#hero"
        style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.03em', color: 'var(--color-text)' }}
      >
        CR
      </a>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-text-secondary)',
                transition: 'color 200ms ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-text)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--color-text-secondary)')}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
