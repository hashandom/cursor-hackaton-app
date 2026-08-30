import ProjectList from './components/ProjectList'
import { mockProjects } from './data/mockProjects'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Hackathon Project Finder</h1>
        <p>
          Browse available coding projects, see who is working on them, and find
          a team to join.
        </p>
      </header>
      <main>
        <ProjectList projects={mockProjects} />
      </main>
    </div>
  )
}

export default App
