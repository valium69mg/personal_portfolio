import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

const STAT_KEYS = ['years', 'users', 'records', 'systems'] as const;
const STAT_NUMS = [3, 15, 100, 3];
const STAT_SUFFIXES = ['+', 'K+', 'K+', ''];

function StatItem({ num, suffix, labelKey, inView, delay }: {
  num: number; suffix: string; labelKey: string; inView: boolean; delay: number;
}) {
  const { t } = useTranslation();
  const value = useCountUp(num, 1300, inView);
  return (
    <div style={{
      padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
      borderRight: '1px solid var(--color-border)',
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(14px)',
      transition: `opacity 0.55s ease-out ${delay}ms, transform 0.55s ease-out ${delay}ms`,
    }}>
      <p style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900,
        letterSpacing: '-0.04em', color: 'var(--color-text)',
        lineHeight: 1, marginBottom: '0.35rem', fontVariantNumeric: 'tabular-nums',
      }}>
        {value}{suffix}
      </p>
      <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
        {t(`about.stats.${labelKey}`)}
      </p>
    </div>
  );
}

export default function About() {
  const { t } = useTranslation();
  const { ref: bioRef,   inView: bioIn   } = useInView(0.1);
  const { ref: statsRef, inView: statsIn } = useInView(0.1);

  return (
    <section id="about" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="section-inner">

        <div ref={bioRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'start',
          marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
        }}>
          <div>
            <p style={{
              fontSize: '0.8125rem', letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'var(--color-accent)', marginBottom: '1.25rem', fontWeight: 500,
              opacity: bioIn ? 1 : 0, transform: bioIn ? 'none' : 'translateY(14px)',
              transition: 'opacity 0.5s ease-out 0ms, transform 0.5s ease-out 0ms',
            }}>{t('about.label')}</p>

            <h2 style={{
              fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 900,
              letterSpacing: '-0.04em', lineHeight: 1.05,
              color: 'var(--color-text)', marginBottom: 0,
              opacity: bioIn ? 1 : 0, transform: bioIn ? 'none' : 'translateY(14px)',
              transition: 'opacity 0.5s ease-out 80ms, transform 0.5s ease-out 80ms',
            }}>
              {t('about.title1')}<br />{t('about.title2')}
            </h2>
          </div>

          <div>
            <p style={{
              color: 'var(--color-text-secondary)', fontSize: '0.9375rem',
              lineHeight: 1.8, marginBottom: '1.125rem',
              opacity: bioIn ? 1 : 0, transform: bioIn ? 'none' : 'translateY(14px)',
              transition: 'opacity 0.5s ease-out 120ms, transform 0.5s ease-out 120ms',
            }}>{t('about.bio1')}</p>

            <p style={{
              color: 'var(--color-text-secondary)', fontSize: '0.9375rem',
              lineHeight: 1.8, marginBottom: '1.5rem',
              opacity: bioIn ? 1 : 0, transform: bioIn ? 'none' : 'translateY(14px)',
              transition: 'opacity 0.5s ease-out 200ms, transform 0.5s ease-out 200ms',
            }}>{t('about.bio2')}</p>

            <div style={{
              display: 'flex', gap: '0.5rem', flexWrap: 'wrap',
              opacity: bioIn ? 1 : 0, transform: bioIn ? 'none' : 'translateY(14px)',
              transition: 'opacity 0.5s ease-out 280ms, transform 0.5s ease-out 280ms',
            }}>
              {(['tagLocation', 'tagEnglish', 'tagSpanish'] as const).map((key) => (
                <span key={key} style={{
                  fontSize: '0.75rem', fontWeight: 500,
                  padding: '0.3rem 0.75rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: '100px', color: 'var(--color-text-secondary)',
                }}>{t(`about.${key}`)}</span>
              ))}
            </div>
          </div>
        </div>

        <div ref={statsRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
          borderTop: '1px solid var(--color-border)',
          borderLeft: '1px solid var(--color-border)',
        }}>
          {STAT_KEYS.map((key, i) => (
            <StatItem
              key={key}
              num={STAT_NUMS[i]}
              suffix={STAT_SUFFIXES[i]}
              labelKey={key}
              inView={statsIn}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
