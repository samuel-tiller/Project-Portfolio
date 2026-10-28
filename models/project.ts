export interface ProjectData {
  title: string
  description: string
  technologies: string[]
}

export interface Project extends ProjectData {
  id: number
}
