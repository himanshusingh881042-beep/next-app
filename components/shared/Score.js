import styles from "./Score.module.css";

export default function Score({ label, value }) {
  return (
    <div className={styles.row}>
      <span className={styles.label}>{label}</span>
      <span className={styles.track}>
        <span className={styles.fill} style={{ width: `${value}%` }} />
      </span>
      <strong>{value}</strong>
    </div>
  );
}
