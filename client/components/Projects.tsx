import type { Project } from '../../models/project'
import ProjectCard from './Project'

function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'My developer portfolio',
      technologies: ['React', 'TypeScript'],
    },
    {
      id: 2,
      title: 'Book Tracker',
      description: 'An app for tracking books',
      technologies: ['Express', 'SQLite'],
    },
  ]

  return (
    <>
      <h2>My Projects</h2>

      <ul>
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Projects
