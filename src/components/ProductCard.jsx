import { getMeta } from '../data/catalog';
import styles from './ProductCard.module.css';

export default function ProductCard({ item, onClick }) {
  const meta = getMeta(item.category);
  const previewProps = item.itemprops.slice(0, 3);

  return (
    <article className={styles.card} onClick={() => onClick(item)}>
      {/* Image */}
      <div className={styles.imageWrap}>
        {item.image ? (
          <img src={item.image} alt={item.itemname} loading="lazy" />
        ) : (
          <span className={styles.emoji}>{meta.emoji}</span>
        )}
        <span
          className={styles.badge}
          style={{ background: meta.bg, color: meta.color }}
        >
          {item.category}
        </span>
      </div>

      {/* Body */}
      <div className={styles.body}>
        <h3 className={styles.title}>{item.itemname}</h3>
        <ul className={styles.propList}>
          {previewProps.map((p, i) => (
            <li key={i} className={styles.propRow}>
              <span className={styles.propKey}>{p.key}</span>
              <span className={styles.propVal}>{p.value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <span className={styles.viewLabel}>View all specs</span>
        <span
          className={styles.arrow}
          style={{ background: meta.bg, color: meta.color }}
        >
          →
        </span>
      </div>
    </article>
  );
}
