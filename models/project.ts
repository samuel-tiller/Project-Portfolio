export interface ProjectData {
  title: string
  description: string
  githubUrl?: string | null
  technologies: string[]
}

export interface Project extends ProjectData {
  id: number
}
