import styles from './Navbar.module.css';

export default function Navbar({ onBack, showBack }) {
  return (
    <nav className={styles.navbar}>
      <button className={styles.logo} onClick={onBack}>
        NEX<span>US</span>
      </button>

      <div className={styles.right}>
        {showBack ? (
          <button className={styles.backBtn} onClick={onBack}>
            ← Catalog
          </button>
        ) : (
          <span className={styles.tag}>Multi-Category Catalog</span>
        )}
      </div>
    </nav>
  );
}
