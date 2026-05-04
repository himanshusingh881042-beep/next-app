# Case Study: Succession Planning Application

## Executive Summary

This project delivers a responsive HR succession planning application for identifying and developing high-potential employees and candidates for critical leadership roles. The prototype supports both the original assignment requirements and the policy scenarios for Board and Senior Management succession.

The solution uses Next.js Pages Router, JavaScript, Tailwind CSS, CSS Modules, and static JSON data. No backend is required.

## Business Context

Succession planning is a strategic HR process used to ensure that key leadership and critical roles can be filled when existing employees leave, retire, are promoted, or are otherwise unavailable. In regulated environments, succession planning must also account for governance, Board approval, regulatory checks, and documented due diligence.

## Problem Statement

The HR team needs a cross-platform tool to:

- Identify which current positions can transition into successor positions.
- Evaluate employee performance as Low, Moderate, or High.
- Track readiness for critical positions.
- Cover Board-level and Senior Management succession scenarios.
- Simulate backend behavior using static JSON data.
- Present the project lifecycle and conclusion as a comprehensive case study.

## Objectives

- Provide a responsive dashboard for succession planning.
- Map successor positions to possible transition roles.
- Show successor candidates with fit, readiness, source, and development needs.
- Evaluate performance using the required Low, Moderate, and High definitions.
- Cover NRC, Board, CPO, CEO, IRDAI, due diligence, interim, internal, and external candidate scenarios.
- Keep the implementation frontend-only and easy to run locally.

## Scope

### In Scope

- Board-level succession.
- MD & CEO vacancy scenario.
- Independent Director succession.
- Senior Management succession.
- Internal and external candidates.
- Interim succession candidates.
- Immediate, Mid-term, and Long-term readiness.
- Low, Moderate, and High performance evaluation.
- Static JSON dummy data.
- Responsive web/mobile UI.

### Out of Scope

- Real authentication.
- Real HRIS/database integration.
- Actual approval workflow submission.
- Real regulatory validation APIs.
- Payroll or compensation integration.

## Functional Design

The application includes:

- Dashboard metrics for policy positions, immediate-ready candidates, Board roles, and coverage gaps.
- Role transition module showing which positions can transition into successor positions.
- Successor detail cards showing readiness, source, interim status, NRC/Board review, development focus, and qualifications.
- Appointment flow, required attributes, and compliance checks for every critical position.
- Performance section with Low, Moderate, and High categories.
- Policy coverage section mapping the app to the succession policy.

## Technical Design

The application is built with:

- Next.js Pages Router.
- JavaScript only.
- Tailwind CSS.
- CSS Modules for component-level styling.
- Static JSON data in `data/succession.json`.

The application imports JSON directly and renders all interactions on the frontend.

## Project Lifecycle

### Discovery

The assignment and succession policy were reviewed to identify the mandatory scenarios: transition planning, performance evaluation, Board succession, Senior Management succession, readiness categories, internal/external candidate options, interim succession, and governance review.

### Planning

The project was planned as a frontend-only prototype because backend development was not required. Data was modeled in JSON to simulate roles, candidates, performance, governance owners, appointment flows, and compliance checks.

### Design

The UI was designed as a professional HR operations workspace using a Canara HSBC Life inspired theme. The design emphasizes clear comparison, compact cards, dashboard summaries, and policy traceability.

### Development

The first version implemented the core succession planning workflow. Later iterations added Indian dummy names, a Canara HSBC Life inspired theme, component-based structure, CSS Modules, Board-level policy scenarios, Senior Management policy scenarios, and comprehensive policy coverage.

### Testing

Testing included:

- JSON validation.
- Next.js production build validation.
- Responsive layout review.
- Role filter behavior.
- Performance filter behavior.
- Successor candidate mapping.
- Export plan behavior.

### Deployment

The application can be run locally with `npm run dev` and deployed to any Next.js-compatible hosting platform such as Vercel, Netlify, or internal hosting.

## Risks and Mitigation

- Sensitive HR data risk: production should add authentication, role-based access, and audit logging.
- Regulatory interpretation risk: production should involve legal/compliance review before operational use.
- Data quality risk: production should integrate with HRIS and governance systems.
- Subjective assessment risk: production should include calibration workflows and documented review notes.

## Future Enhancements

- Role-based access control.
- Formal approval workflow for NRC and Board recommendations.
- HRIS integration.
- Search firm candidate intake.
- Candidate history and audit trail.
- Diversity analytics.
- Automated development plan tracking.

## Detailed Conclusion

The succession planning application meets the original HR assignment by identifying transition paths, evaluating performance, working across web and mobile layouts, using a modern framework, and relying on static JSON instead of a backend.

It also extends the solution to cover the provided succession policy by including Board-level succession, MD & CEO succession, Independent Director replacement, NRC responsibility, IRDAI and Articles checks, due diligence, fit and proper criteria, Board diversity considerations, Senior Management review by CPO and CEO, internal and external candidate sourcing, interim succession candidates, and Immediate, Mid-term, and Long-term readiness categories.

The result is a practical frontend prototype that demonstrates how HR, CPO, CEO, NRC, and Board stakeholders could review succession readiness in a structured and policy-aligned way.
