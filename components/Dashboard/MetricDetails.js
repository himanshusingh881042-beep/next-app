import styles from "./MetricDetails.module.css";

export default function MetricDetails({ details, onClose }) {
  if (!details) return null;

  if (!details?.records?.length) {
    return (
      <ModalShell details={details} onClose={onClose}>
        <p className={styles.empty}>No records found for this metric.</p>
      </ModalShell>
    );
  }

  return (
    <ModalShell details={details} onClose={onClose}>
      <div className={styles.detailsGrid}>
        {details.type === "positions" && details.records.map((position) => (
          <PositionCard key={position.id} position={position} />
        ))}

        {details.type === "employees" && details.records.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}

        {details.type === "successors" && details.records.map((successor) => (
          <SuccessorCard key={`${successor.positionTitle}-${successor.employeeId}`} successor={successor} />
        ))}

        {details.type === "coverageGaps" && details.records.map((position) => (
          <CoverageGapCard key={position.id} position={position} />
        ))}
      </div>
    </ModalShell>
  );
}

function ModalShell({ details, onClose, children }) {
  return (
    <div className={styles.backdrop} role="presentation" onClick={onClose}>
      <section className={styles.panel} role="dialog" aria-modal="true" aria-labelledby="metricDetailsTitle" onClick={(event) => event.stopPropagation()}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Selected Metric</p>
            <h2 id="metricDetailsTitle">{details?.title || "Metric Details"}</h2>
          </div>
          <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close metric details">
            x
          </button>
        </div>
        {children}
      </section>
    </div>
  );
}

function PositionCard({ position }) {
  return (
    <article className={styles.card}>
      <h3>{position.title}</h3>
      <p>{position.unit} | {position.level}</p>
      <p>Vacancy horizon: <strong>{position.vacancyHorizon}</strong></p>
      <p>Risk: <strong>{position.risk}</strong></p>
    </article>
  );
}

function EmployeeCard({ employee }) {
  return (
    <article className={styles.card}>
      <h3>{employee.name}</h3>
      <p>{employee.currentRole}</p>
      <p>Unit: <strong>{employee.unit}</strong></p>
      <p>Performance: <strong>{employee.performance}</strong></p>
      <p>Targets: <strong>{employee.targetAchievement}</strong> | Job match: <strong>{employee.jobMatch}</strong></p>
    </article>
  );
}

function SuccessorCard({ successor }) {
  return (
    <article className={styles.card}>
      <h3>{successor.employee.name}</h3>
      <p>{successor.employee.currentRole}</p>
      <p>Successor for: <strong>{successor.positionTitle}</strong></p>
      <p>Fit: <strong>{successor.fit}</strong> | Readiness: <strong>{successor.readiness}</strong></p>
      <p>{successor.development}</p>
    </article>
  );
}

function CoverageGapCard({ position }) {
  return (
    <article className={styles.card}>
      <h3>{position.title}</h3>
      <p>{position.unit} | {position.vacancyHorizon}</p>
      <p>No successor is <strong>Ready now</strong>.</p>
      <div className={styles.chips}>
        {position.successorEmployees.map((successor) => (
          <span key={successor.employeeId}>
            {successor.employee.name}: {successor.readiness}
          </span>
        ))}
      </div>
    </article>
  );
}
