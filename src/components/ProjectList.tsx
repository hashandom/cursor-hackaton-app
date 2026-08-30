import type { Project } from '../data/mockProjects'
import ProjectCard from './ProjectCard'

type ProjectListProps = {
  projects: Project[]
}

function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="project-list" aria-label="Available projects">
      <ul className="project-grid">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectList
