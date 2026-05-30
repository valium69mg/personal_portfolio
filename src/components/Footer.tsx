export default function Footer() {
  return (
    <footer
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '2rem',
        borderTop: '1px solid var(--color-border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
        Carlos Román · Backend Developer
      </p>
      <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
        Querétaro, Mexico · C1 English
      </p>
    </footer>
  );
}
