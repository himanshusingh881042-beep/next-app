import Badge from "../shared/Badge";
import Score from "../shared/Score";
import styles from "./RoleTransition.module.css";

export default function RoleTransition({
  units,
  unitFilter,
  onUnitChange,
  visiblePositions,
  selectedRole,
  successors,
  onSelectRole
}) {
  return (
    <section id="role-transition" className={styles.roleGrid}>
      <section className={styles.panel}>
        <div className={styles.panelHeader}>
          <div>
            <p className={styles.eyebrow}>Key Task 1</p>
            <h2 className={styles.heading}>Position Transition Fit</h2>
          </div>
          <select value={unitFilter} onChange={onUnitChange} className={styles.select} aria-label="Filter by business unit">
            <option value="all">All units</option>
            {units.map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </div>

        <div className={styles.roleList}>
          {visiblePositions.map((position) => (
            <RoleCard
              key={position.id}
              position={position}
              active={selectedRole.id === position.id}
              onClick={() => onSelectRole(position.id)}
            />
          ))}
        </div>
      </section>

      <section className={styles.panel}>
        <div className={styles.panelHeader}>
          <div>
            <p className={styles.eyebrow}>Successor Position</p>
            <h2 className={styles.heading}>{selectedRole.title}</h2>
          </div>
          <Badge tone={riskTone(selectedRole.risk)} size="md">{selectedRole.risk} risk</Badge>
        </div>

        <div className={styles.factGrid}>
          <Fact label="Business Unit" value={selectedRole.unit} />
          <Fact label="Vacancy Horizon" value={selectedRole.vacancyHorizon} />
          <Fact label="Required Level" value={selectedRole.level} />
        </div>

        <h3 className={styles.subheading}>Best Successor Matches</h3>
        <div className={styles.successorList}>
          {successors.map((successor) => (
            <Candidate key={successor.employeeId} successor={successor} />
          ))}
        </div>
      </section>
    </section>
  );
}

function RoleCard({ position, active, onClick }) {
  const bestFit = Math.max(...position.successors.map((successor) => successor.fit));

  return (
    <button onClick={onClick} className={active ? styles.activeRoleCard : styles.roleCard}>
      <span className={styles.roleCardTop}>
        <strong>{position.title}</strong>
        <Badge tone={riskTone(position.risk)}>{position.risk}</Badge>
      </span>
      <span className={styles.roleMeta}>{position.unit} | {position.transitionFrom.join(", ")}</span>
      <span className={styles.fitTrack}>
        <span className={styles.fitFill} style={{ width: `${bestFit}%` }} />
      </span>
    </button>
  );
}

function Fact({ label, value }) {
  return (
    <div className={styles.fact}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Candidate({ successor }) {
  return (
    <article className={styles.candidate}>
      <header className={styles.cardHeader}>
        <div>
          <strong>{successor.employee.name}</strong>
          <span>{successor.employee.currentRole}</span>
        </div>
        <Badge tone={successor.employee.performance}>{successor.employee.performance}</Badge>
      </header>
      <div className={styles.scoreList}>
        <Score label="Transition fit" value={successor.fit} />
        <Score label="Targets" value={successor.employee.targetAchievement} />
        <Score label="Job match" value={successor.employee.jobMatch} />
      </div>
      <p className={styles.cardText}>
        Readiness: <strong>{successor.readiness}</strong>
      </p>
      <p className={styles.cardText}>Development focus: {successor.development}</p>
    </article>
  );
}

function riskTone(risk) {
  if (risk === "medium") return "mediumRisk";
  return risk;
}
