import { caseStudyPhases } from "../../config/pageContent";
import styles from "./CaseStudy.module.css";

export default function CaseStudy() {
  return (
    <section id="case-study" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Project Lifecycle</p>
        <h2 className={styles.heading}>Comprehensive Case Study</h2>
        <p className={styles.summary}>
          This case study documents how the succession planning prototype was scoped, designed, built, and validated against the HR assignment and succession policy requirements.
        </p>
      </div>

      <div className={styles.phaseGrid}>
        {caseStudyPhases.map((phase) => (
          <article key={phase.title} className={styles.phaseCard}>
            <h3>{phase.title}</h3>
            <p>{phase.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
