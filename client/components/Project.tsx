import type { Project } from "../../models/project"


interface Props {
  project: Project
}


function ProjectCard (props: Props) {
  return (
    <>
      <h3>{props.project.title}</h3>
      <p>{props.project.description}</p>
      <ul>
        {props.project.technologies.map((technology) => {
          return (
            <li key={technology} >
              {technology}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ProjectCard