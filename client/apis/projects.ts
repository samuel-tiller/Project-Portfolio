import request from 'superagent'
import type { Project } from '../../models/project'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getProjects(): Promise<Project[]> {
    const response = await request.get(`${rootURL}/projects`)
    return response.body.projects as Project[]

}

export async function getProjectById(id: number): Promise<Project> {
    const response = await request.get(`${rootURL}/projects/${id}`)
    return response.body.project
}
