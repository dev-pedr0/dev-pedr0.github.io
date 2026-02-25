// Filtros para botões
export const projectFilters = [
  "todos",
  "frontend",
  "backend",
  "fullstack",
  "mobile",
  "software",
] as const

export type ProjectCategory = typeof projectFilters[number]

//Lista de projetos
export type Project = {
  id: string
  title: string
  description: string
  media: string
  mediaType: "image" | "video"
  link: string
  category: ProjectCategory
}