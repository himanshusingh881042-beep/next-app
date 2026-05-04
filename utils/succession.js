export function getBusinessUnits(positions) {
  return [...new Set(positions.map((position) => position.unit))].sort();
}

export function getVisiblePositions(positions, unitFilter) {
  if (unitFilter === "all") return positions;
  return positions.filter((position) => position.unit === unitFilter);
}

export function getSelectedRole(positions, visiblePositions, selectedRoleId) {
  return visiblePositions.find((position) => position.id === selectedRoleId) || visiblePositions[0] || positions[0];
}

export function getSuccessors(role, employees) {
  return role.successors
    .map((successor) => ({
      ...successor,
      employee: employees.find((employee) => employee.id === successor.employeeId)
    }))
    .sort((a, b) => b.fit - a.fit);
}

export function getVisibleEmployees(employees, performanceFilter) {
  if (performanceFilter === "all") return employees;
  return employees.filter((employee) => employee.performance === performanceFilter);
}

export function getDashboardMetrics(positions, employees) {
  const immediateReady = positions
    .flatMap((position) => position.successors)
    .filter((successor) => successor.readiness === "Immediate").length;

  const coverageGaps = positions.filter((position) => {
    return !position.successors.some((successor) => successor.readiness === "Immediate" || successor.readiness === "Interim");
  }).length;

  return [
    { label: "Policy Positions", value: positions.length, caption: "Board and senior management roles" },
    { label: "Immediate Ready", value: immediateReady, caption: "Candidates ready now" },
    {
      label: "Board Roles",
      value: positions.filter((position) => position.category === "Board").length,
      caption: "NRC governed succession"
    },
    { label: "Coverage Gaps", value: coverageGaps, caption: "No immediate or interim candidate", danger: true }
  ];
}

export function downloadSuccessionPlan(selectedRole, successors) {
  const lines = [
    "Succession Planning Export",
    `Role: ${selectedRole.title}`,
    `Business unit: ${selectedRole.unit}`,
    `Category: ${selectedRole.category}`,
    `Governance owner: ${selectedRole.governanceOwner}`,
    `Vacancy horizon: ${selectedRole.vacancyHorizon}`,
    "",
    "Appointment flow:",
    ...selectedRole.appointmentFlow.map((step, index) => `${index + 1}. ${step}`),
    "",
    "Successor candidates:"
  ];

  successors.forEach((successor, index) => {
    lines.push(`${index + 1}. ${successor.employee.name} - ${successor.employee.currentRole} - ${successor.source} - Fit ${successor.fit} - ${successor.readiness} - ${successor.nrcReview}`);
  });

  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${selectedRole.title.toLowerCase().replaceAll(" ", "-")}-succession-plan.txt`;
  link.click();
  URL.revokeObjectURL(link.href);
}
