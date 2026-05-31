import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="section-inner" style={{
        paddingTop: '1.75rem', paddingBottom: '1.75rem',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem',
      }}>
        <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
          Carlos Román · Backend Developer
        </p>
        <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
          {t('contact.footer')}
        </p>
      </div>
    </footer>
  );
}
