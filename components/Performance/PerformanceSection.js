import { performanceDetails, performanceFilters } from "../../config/pageContent";
import Badge from "../shared/Badge";
import Score from "../shared/Score";
import styles from "./PerformanceSection.module.css";

export default function PerformanceSection({ employees, performanceFilter, onPerformanceChange }) {
  return (
    <section id="performance" className={styles.section}>
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Key Task 2</p>
          <h2 className={styles.heading}>Performance Evaluation</h2>
        </div>
        <div className={styles.filterGroup}>
          {performanceFilters.map((level) => (
            <button
              key={level}
              onClick={() => onPerformanceChange(level)}
              className={performanceFilter === level ? styles.activeFilter : styles.filterButton}
            >
              {level === "all" ? "All" : level}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.definitionGrid}>
        {Object.entries(performanceDetails).map(([level, text]) => (
          <div key={level} className={styles.definition}>
            <strong>{level}</strong>
            <p>{text}</p>
          </div>
        ))}
      </div>

      <div className={styles.employeeGrid}>
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </section>
  );
}

function EmployeeCard({ employee }) {
  return (
    <article className={styles.employeeCard}>
      <header className={styles.cardHeader}>
        <div>
          <strong>{employee.name}</strong>
          <span>{employee.currentRole}</span>
        </div>
        <Badge tone={employee.performance}>{employee.performance}</Badge>
      </header>
      <p className={styles.cardText}>{performanceDetails[employee.performance]}</p>
      <div className={styles.scoreList}>
        <Score label="Targets" value={employee.targetAchievement} />
        <Score label="Job match" value={employee.jobMatch} />
      </div>
      <div className={styles.competencies}>
        {employee.competencies.map((competency) => (
          <span key={competency}>{competency}</span>
        ))}
      </div>
    </article>
  );
}
