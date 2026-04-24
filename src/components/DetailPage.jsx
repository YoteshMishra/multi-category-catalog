import { getMeta } from '../data/catalog';
import styles from './DetailPage.module.css';

export default function DetailPage({ item, onBack }) {
  const meta = getMeta(item.category);

  return (
    <main className={styles.page}>
      {/* ── Hero Split ── */}
      <div className={styles.hero}>
        {/* Left: Image */}
        <div className={styles.imagePanel}>
          {item.image ? (
            <img src={item.image} alt={item.itemname} />
          ) : (
            <span className={styles.heroEmoji}>{meta.emoji}</span>
          )}
          <div className={styles.imageOverlay} />
        </div>

        {/* Right: Info */}
        <div className={styles.infoPanel}>
          <span
            className={`${styles.badge} fade-up`}
            style={{ background: meta.bg, color: meta.color }}
          >
            <span
              className={styles.badgeDot}
              style={{ background: meta.color }}
            />
            {item.category}
          </span>

          <h1 className={`${styles.itemName} fade-up fade-up-d1`}>
            {item.itemname}
          </h1>

          <p className={`${styles.desc} fade-up fade-up-d2`}>
            Explore every technical specification for the{' '}
            <strong>{item.itemname}</strong>. All {item.itemprops.length}{' '}
            attributes are listed below.
          </p>

          <div className={`${styles.chips} fade-up fade-up-d3`}>
            <span
              className={styles.chip}
              style={{ background: meta.bg, color: meta.color }}
            >
              {item.itemprops.length} Specs
            </span>
            <span className={styles.chip}>{item.category}</span>
          </div>
        </div>
      </div>

      {/* ── Specs Section ── */}
      <section className={styles.specsSection}>
        <h2 className={styles.specsHeading}>Technical Specifications</h2>

        {/*
          KEY REQUIREMENT: dynamically iterate itemprops array.
          No hardcoded property names — every attribute rendered generically.
        */}
        <div className={styles.specsGrid}>
          {item.itemprops.map((prop, index) => (
            <div key={index} className={styles.specItem}>
              <span className={styles.specKey}>{prop.key}</span>
              <span
                className={styles.specVal}
                style={{ color: index % 5 === 0 ? meta.color : 'var(--text)' }}
              >
                {prop.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Back ── */}
      <div className={styles.backRow}>
        <button className={styles.backBtn} onClick={onBack}>
          ← Back to Catalog
        </button>
      </div>
    </main>
  );
}
