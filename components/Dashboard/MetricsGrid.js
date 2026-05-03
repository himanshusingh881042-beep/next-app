import styles from "./MetricsGrid.module.css";

export default function MetricsGrid({ metrics }) {
  return (
    <section id="dashboard" className={styles.metricsGrid}>
      {metrics.map((metric) => (
        <MetricCard key={metric.label} {...metric} />
      ))}
    </section>
  );
}

function MetricCard({ label, value, caption, danger = false }) {
  return (
    <article className={styles.card}>
      <span className={styles.label}>{label}</span>
      <strong className={danger ? styles.dangerValue : styles.value}>{value}</strong>
      <small className={styles.caption}>{caption}</small>
    </article>
  );
}
