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

You should see a **Hello World** page confirming the app is running.

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
