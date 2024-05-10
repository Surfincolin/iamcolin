interface Project {
    title: string
    description: string
    client: string
    role: string
    tools: string[]
    thumbnail: string
    photos: string[]
    video: string,
    videoType: string
    projectId: string
    intro: string
}

import rawData from "./projects.json" assert { type: 'json'}
export const projects: Project[] = rawData as Project[]

export const generateRoutes = projects.map(project => `/page/work/${project.projectId}`)
export const astroRoutes = projects.map(project => ({ params: { projectId: project.projectId  }}))

export const getProjectById = (id: string) => {
    return projects.find((project) => project.projectId === id)
}