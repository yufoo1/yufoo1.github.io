import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

type FeatureIconProps = {
  kind: 'embodied' | 'evolving' | 'systems';
};

function FeatureIcon({kind}: FeatureIconProps) {
  if (kind === 'embodied') {
    return (
      <svg viewBox="0 0 24 24" role="img" aria-label="Embodied AI">
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="3" />
        <path d="M2 14h2M20 14h2M9 13v2M15 13v2M9 19v2M15 19v2" />
      </svg>
    );
  }

  if (kind === 'evolving') {
    return (
      <svg viewBox="0 0 24 24" role="img" aria-label="Self-Evolving">
        <path d="M20 11a8.1 8.1 0 0 0-14.9-4M4 5v4h4" />
        <path d="M4 13a8.1 8.1 0 0 0 14.9 4M20 19v-4h-4" />
        <path d="m12 8 .9 2.1L15 11l-2.1.9L12 14l-.9-2.1L9 11l2.1-.9z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" role="img" aria-label="AI Systems">
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </svg>
  );
}

const features = [
  {title: 'Embodied AI', kind: 'embodied' as const},
  {title: 'Self-Evolving', kind: 'evolving' as const},
  {title: 'AI Systems', kind: 'systems' as const},
];

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Notes on computer science, math, and programming.">
      <header className={styles.heroBanner}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.eyebrow}>YUFOO1&apos;S KNOWLEDGE BASE</p>
          <h1 className={styles.heroTitle}>yufoo1&apos;s Docs</h1>
          <Link className={styles.primaryButton} to="/docs/">
            Let&apos;s Start
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </header>

      <main className={styles.features}>
        <div className="container">
          <div className={styles.featureGrid}>
            {features.map(({title, kind}, index) => (
              <article className={styles.featureCard} key={title}>
                <span className={styles.featureNumber}>0{index + 1}</span>
                <div className={styles.featureIcon}>
                  <FeatureIcon kind={kind} />
                </div>
                <h2>{title}</h2>
              </article>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
