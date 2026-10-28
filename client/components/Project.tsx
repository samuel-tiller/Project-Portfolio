import { ProjectData } from "../../models/project"


interface Props {
  project: ProjectData
}


function Project (props: Props) {
  return (
    <>
      <h3>{props.project.title}</h3>
      <p>{props.project.description}</p>
      <p>{props.project.technologies}</p>
    </>
  )
}

export default Project