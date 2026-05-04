import styles from "./MetricsGrid.module.css";

export default function MetricsGrid({ metrics, selectedMetric, onMetricSelect }) {
  return (
    <section id="dashboard" className={styles.metricsGrid}>
      {metrics.map((metric) => (
        <MetricCard
          key={metric.id}
          active={selectedMetric === metric.id}
          onClick={() => onMetricSelect(metric.id)}
          {...metric}
        />
      ))}
    </section>
  );
}

function MetricCard({ label, value, caption, danger = false, active = false, onClick }) {
  return (
    <button type="button" onClick={onClick} className={active ? styles.activeCard : styles.card}>
      <span className={styles.label}>{label}</span>
      <strong className={danger ? styles.dangerValue : styles.value}>{value}</strong>
      <small className={styles.caption}>{caption}</small>
    </button>
  );
}
