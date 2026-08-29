# Hackathon Project Finder - Implementation TODO

This TODO list breaks the project into small, AI-friendly increments. Each task should be small enough to implement, review, and test before moving to the next one.

## Phase 1: Project Initialization and Hello World

- [x] Create the React + TypeScript + Vite project structure.
- [x] Add a minimal `Hello World` page that renders successfully in the browser.
- [x] Add a short `README.md` with the project name, purpose, tech stack, and local setup commands.
- [x] Add basic `.gitignore` rules for Node, build output, environment files, and editor files.
- [x] Verify the app starts locally with the Vite dev server.
- [x] Security check: confirm no secrets, API keys, or local environment files are committed.
- [x] Documentation check: document how to run the hello-world app locally.

## Phase 2: Early Quality and CI/CD Setup

- [x] Add linting for TypeScript and React code.
- [x] Add code formatting with a consistent project style.
- [x] Add a basic test framework suitable for React components.
- [x] Add one simple test that verifies the app renders.
- [x] Add a CI workflow that installs dependencies, runs linting, runs tests, and builds the app.
- [x] Add a production build check using Vite.
- [x] Security check: ensure dependency install and CI do not require committed secrets.
- [x] Documentation check: update `README.md` with test, lint, and build commands.

## Phase 3: Basic UI With Mocked Data

- [ ] Replace the hello-world screen with a simple app layout.
- [ ] Add a page title and short explanation of the app.
- [ ] Create a mocked project list in the frontend.
- [ ] Display available projects as cards.
- [ ] Show each card's project title, short description, creator name, and participant count.
- [ ] Add simple responsive styling for the project card grid.
- [ ] Security check: render all project text as normal React text, not injected HTML.
- [ ] Documentation check: document the mocked data approach and current UI state.

## Phase 4: Simple Name Entry

- [ ] Add a name entry form shown before the main project list.
- [ ] Store the entered name in frontend state.
- [ ] Show the current user's name after entry.
- [ ] Add a way to reset or change the current name.
- [ ] Validate that the name is not empty before continuing.
- [ ] Add a test for the name entry flow.
- [ ] Security check: trim user input and avoid treating names as trusted HTML.
- [ ] Documentation check: document the name-only identity decision.

## Phase 5: Mocked Project Details

- [ ] Add a project detail view or detail panel.
- [ ] Allow users to open a project from a project card.
- [ ] Show the project title, full description, creator name, participants, and participant count.
- [ ] Add a way to return from details to the project list.
- [ ] Add a test for opening and viewing project details.
- [ ] Security check: confirm project descriptions are displayed safely as text.
- [ ] Documentation check: document the project detail user flow.

## Phase 6: Mocked Join and Leave Functionality

- [ ] Add a `Join Project` button to each project.
- [ ] Add the current user's name to a project's participant list when joining.
- [ ] Prevent the same user from joining the same project more than once.
- [ ] Show a `Leave Project` button for projects the current user has joined.
- [ ] Remove the current user's name from the participant list when leaving.
- [ ] Allow the user to join multiple projects.
- [ ] Add tests for joining, duplicate join prevention, and leaving.
- [ ] Security check: validate the current user exists before allowing join or leave actions.
- [ ] Documentation check: document the multiple-project joining rule.

## Phase 7: Mocked New Project Proposal

- [ ] Add a form to propose a new project.
- [ ] Include fields for project title and project description.
- [ ] Use the current user's name as the creator name.
- [ ] Add the new project to the mocked project list after submission.
- [ ] Clear the form after a successful submission.
- [ ] Validate that title and description are not empty.
- [ ] Add tests for creating a project and validating the form.
- [ ] Security check: trim submitted text and display it only as escaped React text.
- [ ] Documentation check: document how project proposal works in the MVP.

## Phase 8: Backend Skeleton

- [ ] Choose and set up the backend project structure.
- [ ] Add a basic backend server health endpoint.
- [ ] Add a backend start script for local development.
- [ ] Add a shared place to document API routes.
- [ ] Add backend linting and testing commands if separate from the frontend.
- [ ] Update CI to include backend linting, tests, and build checks.
- [ ] Security check: add environment variable handling without committing real secrets.
- [ ] Documentation check: document backend setup and local run commands.

## Phase 9: Backend Project Data API

- [ ] Define the backend project data model.
- [ ] Add an endpoint to list all projects.
- [ ] Add an endpoint to get one project by ID.
- [ ] Add seed or sample project data for local development.
- [ ] Connect the frontend project list to the backend list endpoint.
- [ ] Connect the frontend detail view to backend project data.
- [ ] Add tests for project list and project detail API behavior.
- [ ] Security check: validate project IDs and return safe errors for missing projects.
- [ ] Documentation check: document project list and detail API routes.

## Phase 10: Backend Join and Leave API

- [ ] Add an endpoint to join a project.
- [ ] Add an endpoint to leave a project.
- [ ] Validate that a participant name is provided.
- [ ] Prevent duplicate participant names on the same project.
- [ ] Keep support for joining multiple different projects.
- [ ] Connect frontend join and leave buttons to the backend.
- [ ] Add loading and error states for join and leave actions.
- [ ] Add tests for join, duplicate join prevention, leave, and missing project cases.
- [ ] Security check: validate request bodies and avoid exposing stack traces in responses.
- [ ] Documentation check: document join and leave API routes.

## Phase 11: Backend Create Project API

- [ ] Add an endpoint to create a new project.
- [ ] Validate title, description, and creator name on the backend.
- [ ] Save created projects so they appear in the project list.
- [ ] Connect the frontend proposal form to the backend create endpoint.
- [ ] Add loading, success, and error states for project creation.
- [ ] Add tests for successful project creation and invalid project input.
- [ ] Security check: limit accepted fields and reject malformed request bodies.
- [ ] Documentation check: document the create project API route.

## Phase 12: Persistence

- [ ] Choose the first persistence approach for backend data.
- [ ] Store projects and participants so data survives server restarts.
- [ ] Add startup behavior for empty data storage.
- [ ] Add basic error handling for storage failures.
- [ ] Add tests for persistence behavior where practical.
- [ ] Security check: keep storage files, database URLs, and credentials out of git.
- [ ] Documentation check: document how local data persistence works.

## Phase 13: Core Feature Testing

- [ ] Add focused component tests for the name entry screen.
- [ ] Add focused component tests for project cards.
- [ ] Add focused component tests for project details.
- [ ] Add focused component tests for the proposal form.
- [ ] Add API tests for all core backend routes.
- [ ] Add at least one end-to-end test for the main user flow.
- [ ] Confirm CI runs the full core test suite.
- [ ] Security check: add tests for invalid user input and duplicate joins.
- [ ] Documentation check: document how to run the full test suite.

## Phase 14: Error Handling and UX Polish

- [ ] Add clear empty states when there are no projects.
- [ ] Add user-friendly error messages for failed API requests.
- [ ] Add disabled button states during form submission.
- [ ] Add basic loading states for project list and project details.
- [ ] Improve mobile layout for the main screens.
- [ ] Review copy for clarity and consistency.
- [ ] Security check: make sure errors shown to users do not reveal internal details.
- [ ] Documentation check: add notes about known limitations and expected MVP behavior.

## Phase 15: Final MVP Review

- [ ] Manually test the full flow from name entry to browsing projects.
- [ ] Manually test joining multiple projects.
- [ ] Manually test leaving projects.
- [ ] Manually test proposing a new project.
- [ ] Run linting, tests, and production build locally.
- [ ] Confirm CI passes.
- [ ] Review the PRD and confirm MVP requirements are covered.
- [ ] Security check: review dependencies, committed files, environment handling, and user input handling.
- [ ] Documentation check: update `README.md` and any API docs so another developer can run the app.

## Phase 16: Future Enhancements After MVP

- [ ] Add project search.
- [ ] Add project category or skill tags.
- [ ] Add maximum team size support.
- [ ] Add real-time updates when participants join or leave.
- [ ] Add voting or liking for project ideas.
- [ ] Add organizer or admin controls.
- [ ] Add exportable team lists.
- [ ] Security check: review new features for authorization and data validation needs.
- [ ] Documentation check: document future feature decisions before implementation.
