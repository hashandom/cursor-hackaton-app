import type { Project } from '../data/mockProjects'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const participantCount = project.participants.length
  const shortDescription =
    project.description.length > 120
      ? `${project.description.slice(0, 117)}...`
      : project.description

  return (
    <article className="project-card">
      <h2 className="project-card__title">{project.title}</h2>
      <p className="project-card__description">{shortDescription}</p>
      <dl className="project-card__meta">
        <div>
          <dt>Creator</dt>
          <dd>{project.creatorName}</dd>
        </div>
        <div>
          <dt>Participants</dt>
          <dd>
            {participantCount} {participantCount === 1 ? 'person' : 'people'}
          </dd>
        </div>
      </dl>
    </article>
  )
}

export default ProjectCard
