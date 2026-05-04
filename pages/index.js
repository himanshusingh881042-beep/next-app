import Head from "next/head";
import { useMemo, useState } from "react";
import MetricDetails from "../components/Dashboard/MetricDetails";
import MetricsGrid from "../components/Dashboard/MetricsGrid";
import AppShell from "../components/Layout/AppShell";
import PerformanceSection from "../components/Performance/PerformanceSection";
import RoleTransition from "../components/RoleTransition/RoleTransition";
import successionData from "../data/succession.json";
import {
  downloadSuccessionPlan,
  getBusinessUnits,
  getDashboardMetrics,
  getMetricDetails,
  getSelectedRole,
  getSuccessors,
  getVisibleEmployees,
  getVisiblePositions
} from "../utils/succession";

export default function Home() {
  const [selectedRoleId, setSelectedRoleId] = useState(successionData.positions[0].id);
  const [unitFilter, setUnitFilter] = useState("all");
  const [performanceFilter, setPerformanceFilter] = useState("all");
  const [selectedMetric, setSelectedMetric] = useState(null);

  const units = useMemo(() => getBusinessUnits(successionData.positions), []);
  const visiblePositions = useMemo(() => getVisiblePositions(successionData.positions, unitFilter), [unitFilter]);
  const selectedRole = useMemo(
    () => getSelectedRole(successionData.positions, visiblePositions, selectedRoleId),
    [selectedRoleId, visiblePositions]
  );
  const successors = useMemo(() => getSuccessors(selectedRole, successionData.employees), [selectedRole]);
  const visibleEmployees = useMemo(
    () => getVisibleEmployees(successionData.employees, performanceFilter),
    [performanceFilter]
  );
  const metrics = useMemo(
    () => getDashboardMetrics(successionData.positions, successionData.employees),
    []
  );
  const metricDetails = useMemo(
    () => selectedMetric ? getMetricDetails(selectedMetric, successionData.positions, successionData.employees) : null,
    [selectedMetric]
  );

  function handleUnitChange(event) {
    const nextUnit = event.target.value;
    const nextPositions = getVisiblePositions(successionData.positions, nextUnit);

    setUnitFilter(nextUnit);
    setSelectedRoleId(nextPositions[0]?.id || successionData.positions[0].id);
  }

  return (
    <>
      <Head>
        <title>Succession Planning Workspace</title>
        <meta
          name="description"
          content="A responsive HR succession planning prototype built with Next.js Pages Router and Tailwind CSS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AppShell onExport={() => downloadSuccessionPlan(selectedRole, successors)}>
        <MetricsGrid metrics={metrics} selectedMetric={selectedMetric} onMetricSelect={setSelectedMetric} />
        <MetricDetails details={metricDetails} onClose={() => setSelectedMetric(null)} />
        <RoleTransition
          units={units}
          unitFilter={unitFilter}
          onUnitChange={handleUnitChange}
          visiblePositions={visiblePositions}
          selectedRole={selectedRole}
          successors={successors}
          onSelectRole={setSelectedRoleId}
        />
        <PerformanceSection
          employees={visibleEmployees}
          performanceFilter={performanceFilter}
          onPerformanceChange={setPerformanceFilter}
        />
      </AppShell>
    </>
  );
}
