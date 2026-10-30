import db from './connection.ts'
import { Project, ProjectData } from '../../models/project.ts'

export async function getAllProjects(): Promise<Project[]> {
  const results = await db('projects')
    .join(
      'project_technologies',
      'projects.id',
      'project_technologies.project_id',
    )
    .join(
      'technologies',
      'project_technologies.technology_id',
      'technologies.id',
    )
    .select(
      'projects.id',
      'projects.title',
      'projects.description',
      'projects.github_url',
      'technologies.name as technologyName',
    )

  const projects: Project[] = []

  for (let i = 0; i < results.length; i++) {
    const currentProject = results[i]
    const id = currentProject['id']
    const result = projects.find((project) => project.id === id)

    if (!result) {
      const project = {
        id: currentProject['id'],
        title: currentProject['title'],
        description: currentProject['description'],
        github_url: currentProject['github_url'],
        technologies: [currentProject['technologyName']]
      }

      projects.push(project)
    } else{
      const newTech = currentProject['technologyName']
      result.technologies.push(newTech)
    }
  }

  return projects as Project[]
}

export async function getProjectById(id: number | string): Promise<Project | undefined> {
  const result = await db('projects')
    .join('project_technologies', 'projects.id', 'project_technologies.project_id')
    .join('technologies', 'project_technologies.technology_id', 'technologies.id')
    .where('projects.id', id)
    .select(
      'projects.id',
      'projects.title',
      'projects.description',
      'projects.github_url',
      'technologies.name as technologyName',
    )

    if(result[0] === undefined){
      return 
    }
  
    const currentProject = result[0]
    const techList = result.map((project) => {
      return project.technologyName
    })

    const project = {
      id: currentProject.id,
      title: currentProject.title,
      description: currentProject.description,
      github_url: currentProject.github_url,
      technologies: techList
    }

  return project as Project
}

export async function addProject(data: ProjectData) {
  const [id] = await db('projects').insert(data)
  return id
}
