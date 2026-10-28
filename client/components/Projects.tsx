import Project from "./Project"

function Projects () {
  const projects = [
  {
    title: 'Portfolio Website',
    description: 'My developer portfolio',
    technologies: ['React', 'TypeScript'],
  },
  {
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
          return (<li key={project.title}>
            <Project project={project} />
          </li>)
        })

        }
      </ul>
    </>
  )
}

export default Projects