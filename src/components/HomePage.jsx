import { useState, useMemo } from 'react';
import { catalogData, categoryMeta, getMeta } from '../data/catalog';
import ProductCard from './ProductCard';
import styles from './HomePage.module.css';

const FILTERS = ['All', ...Object.keys(categoryMeta)];

export default function HomePage({ onSelect }) {
  const [search, setSearch]         = useState('');
  const [activeFilter, setFilter]   = useState('All');

  const grouped = useMemo(() => {
    const q = search.toLowerCase().trim();

    const filtered = catalogData.filter((item) => {
      const matchesSearch =
        !q ||
        item.itemname.toLowerCase().includes(q) ||
        item.itemprops.some(
          (p) =>
            p.key.toLowerCase().includes(q) ||
            p.value.toLowerCase().includes(q)
        );
      const matchesCat =
        activeFilter === 'All' || item.category === activeFilter;
      return matchesSearch && matchesCat;
    });

    return filtered.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {});
  }, [search, activeFilter]);

  const totalVisible = Object.values(grouped).flat().length;

  return (
    <main>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <p className={`${styles.eyebrow} fade-up`}>Multi-Category Catalog</p>
        <h1 className={`${styles.heroTitle} fade-up fade-up-d1`}>
          Explore the <em>Finest</em>
          <br />
          Machines &amp; Tech
        </h1>
        <p className={`${styles.heroSub} fade-up fade-up-d2`}>
          Handpicked cars, bikes, phones, and computers — with every spec that matters.
        </p>

        <div className={`${styles.stats} fade-up fade-up-d3`}>
          {Object.entries(categoryMeta).map(([cat, meta]) => (
            <button
              key={cat}
              className={styles.statCard}
              onClick={() => setFilter(cat)}
              style={{ '--accent': meta.color }}
            >
              <span className={styles.statEmoji}>{meta.emoji}</span>
              <span className={styles.statNum} style={{ color: meta.color }}>
                {catalogData.filter((i) => i.category === cat).length}
              </span>
              <span className={styles.statLabel}>{cat}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ── Search ── */}
      <div className={styles.searchWrap}>
        <input
          className={styles.searchInput}
          type="search"
          placeholder="Search items or specs…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search catalog"
        />
      </div>

      {/* ── Filters ── */}
      <div className={styles.filterBar} role="group" aria-label="Category filters">
        {FILTERS.map((cat) => {
          const meta = getMeta(cat);
          const isActive = activeFilter === cat;
          return (
            <button
              key={cat}
              className={`${styles.filterBtn} ${isActive ? styles.filterActive : ''}`}
              onClick={() => setFilter(cat)}
              style={
                isActive
                  ? { background: cat === 'All' ? '#ff5733' : meta.color }
                  : {}
              }
              aria-pressed={isActive}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* ── Catalog Grid ── */}
      <div className={styles.catalog}>
        {totalVisible === 0 ? (
          <div className={styles.empty}>
            <span>🔍</span>
            <p>No items match your search.</p>
          </div>
        ) : (
          Object.entries(grouped).map(([cat, items]) => {
            const meta = getMeta(cat);
            return (
              <section key={cat} className={styles.categorySection}>
                <div className={styles.categoryHeader}>
                  <span
                    className={styles.categoryDot}
                    style={{ background: meta.color }}
                  />
                  <h2
                    className={styles.categoryName}
                    style={{ color: meta.color }}
                  >
                    {cat}
                  </h2>
                  <span className={styles.categoryCount}>
                    {items.length} item{items.length !== 1 ? 's' : ''}
                  </span>
                </div>

                <div className={styles.grid}>
                  {items.map((item) => (
                    <ProductCard key={item.id} item={item} onClick={onSelect} />
                  ))}
                </div>
              </section>
            );
          })
        )}
      </div>
    </main>
  );
}
