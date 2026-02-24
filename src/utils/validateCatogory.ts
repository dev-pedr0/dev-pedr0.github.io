import type { ProjectCategory } from "../content";

const validCategories = [
    "todos",
    "frontend",
    "backend",
    "fullstack",
    "mobile",
    "software",
] as const;

export function isValidCategory(value: string): value is ProjectCategory {
  return validCategories.includes(value as ProjectCategory);
}