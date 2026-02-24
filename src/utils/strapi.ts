const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
export interface StrapiProject {
  id: number;
  documentId: string;
  title: string;
  description: string;
  link: string;
  category: string;
  media?: {
      url: string;
    };
  mediaType: string;
};

export async function getProjects(): Promise<StrapiProject[]> {
  const res = await fetch(
    `${STRAPI_URL}/api/projects?populate=media&sort=createdAt:desc`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Erro ao buscar projetos do Strapi');
  }

  const { data } = await res.json();
  return data;
}