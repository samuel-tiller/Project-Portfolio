import ProjectCard from './Project'
import { useProjects } from '../hooks/useProjects'

function Projects() {
  const { data: projects, isLoading, error} = useProjects()

  if(isLoading){
    return <p>Loading...</p>
  }

  if(error){
    return <p>{error.message}</p>
  }

  if(!projects || projects.length === 0){
    return <p>No projects found!</p>
  }

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
