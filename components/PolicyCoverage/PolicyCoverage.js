import { policyCoverageItems } from "../../config/pageContent";
import styles from "./PolicyCoverage.module.css";

export default function PolicyCoverage() {
  return (
    <section id="policy-coverage" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Implementation Process</p>
        <h2 className={styles.heading}>Policy Coverage</h2>
      </div>
      <div className={styles.coverageGrid}>
        {policyCoverageItems.map((item) => (
          <article key={item.title} className={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
