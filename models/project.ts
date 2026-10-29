export interface ProjectData {
  title: string
  description: string
  github_url?: string | null
  technologies: string[]
}

export interface Project extends ProjectData {
  id: number
}
