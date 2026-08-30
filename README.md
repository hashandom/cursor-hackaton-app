# Hackathon Project Finder

A simple web app that helps hackathon participants browse coding projects, join teams, and propose new project ideas.

## Tech stack

- React
- TypeScript
- Vite
- Vitest + React Testing Library
- Oxlint
- Prettier
- GitHub Actions CI

## Local setup

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

You should see the **Hackathon Project Finder** browsing screen with a grid of mocked project cards.

## Current UI state (Phase 3)

The app shows a simple layout with a page title, short explanation, and a responsive grid of project cards.

Each card displays:

- Project title
- Short description
- Creator name
- Participant count

Project data currently comes from a frontend mock list in `src/data/mockProjects.ts`. There is no backend yet — join/leave, name entry, and project details will be added in later phases. All project text is rendered as normal React text (not HTML injection).

## Quality checks

```bash
npm run lint
npm run format:check
npm run test
npm run build
```

CI runs the same checks on every push and pull request to `main`. No secrets or environment files are required for install, lint, test, or build.

## Available scripts

| Command                | Description                      |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start the Vite dev server        |
| `npm run build`        | Create a production build        |
| `npm run preview`      | Preview the production build     |
| `npm run lint`         | Lint TypeScript and React code   |
| `npm run format`       | Format files with Prettier       |
| `npm run format:check` | Check formatting without writing |
| `npm run test`         | Run the test suite once          |
| `npm run test:watch`   | Run tests in watch mode          |

## Project docs

- `requirements.md` — product specification
- `TODO.md` — phased implementation checklist
