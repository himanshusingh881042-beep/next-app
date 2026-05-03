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
  const readyNow = positions
    .flatMap((position) => position.successors)
    .filter((successor) => successor.readiness === "Ready now").length;

  const coverageGaps = positions.filter((position) => {
    return !position.successors.some((successor) => successor.readiness === "Ready now");
  }).length;

  return [
    { label: "Critical Positions", value: positions.length, caption: "Tracked for continuity" },
    { label: "Ready Now", value: readyNow, caption: "Successors available" },
    {
      label: "High Performers",
      value: employees.filter((employee) => employee.performance === "High").length,
      caption: "Meeting full targets"
    },
    { label: "Coverage Gaps", value: coverageGaps, caption: "Roles needing action", danger: true }
  ];
}

export function downloadSuccessionPlan(selectedRole, successors) {
  const lines = [
    "Succession Planning Export",
    `Role: ${selectedRole.title}`,
    `Business unit: ${selectedRole.unit}`,
    `Vacancy horizon: ${selectedRole.vacancyHorizon}`,
    "",
    "Successor candidates:"
  ];

  successors.forEach((successor, index) => {
    lines.push(`${index + 1}. ${successor.employee.name} - ${successor.employee.currentRole} - Fit ${successor.fit} - ${successor.readiness}`);
  });

  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${selectedRole.title.toLowerCase().replaceAll(" ", "-")}-succession-plan.txt`;
  link.click();
  URL.revokeObjectURL(link.href);
}
