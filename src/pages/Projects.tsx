import { useState } from "react"
import PageTransition from "../components/PageTransition"
import FilterButtons from "../components/FilterButtons";
import ProjectCard from "../components/ProjectCard";
import ScrollArrow from "../components/ScrollArrow";
import type { Project } from "../content"
import { getProjects, type StrapiProject } from "../utils/strapi";
import { isValidCategory } from "../utils/validateCatogory";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import ProjectModal from "../components/ProjectModal";

type ProjectItem = Project;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  const { data: strapiProjects = [], isLoading, isError } = useQuery<
    StrapiProject[],
    Error,
    Project[]
  >({
    queryKey: ["projects"],
    queryFn: getProjects,
    select: (strapiData) => {
      return strapiData.map((p) => {
        const mediaUrl = p.media?.url ?? "/fallback.jpg";
        const mediaTypeVerified = p.mediaType === "video" ? "video" : "image";
        const validCategory = isValidCategory(p.category)
          ? p.category
          : "fullstack";

        return {
          id: p.documentId,
          title: p.title,
          description: p.description,
          media: mediaUrl,
          mediaType: mediaTypeVerified,
          link: p.link,
          category: validCategory,
        };
      });
    },
  });

  // Filtro para apresentar projetos
  const filteredProjects =
    activeFilter === "todos"
      ? strapiProjects
      : strapiProjects.filter(p => p.category === activeFilter);
  
  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro ao carregar projetos.</p>;
  
  return (
    <PageTransition>
      <section
        className="
          mx-auto
          w-full
          max-w-6xl
          flex flex-col
          gap-6
          sm:gap-8
        "
      >
        {/* Botões de filtro de projetos */}
        <FilterButtons
          active={activeFilter}
          onChange={setActiveFilter}
        />

        <div
          className="
            flex flex-wrap
            justify-center
            gap-4
            sm:gap-6
          "
        >
          {/* Projetos Filtrados */}
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="
                w-full
                sm:w-[calc(50%-0.75rem)]
                lg:w-[calc(33.333%-1rem)]
              "
              onClick={() => setSelectedProject(project)}
            >
              <ProjectCard
                key={project.id}
                project={project}
              />
            </div>
          ))}
        </div>

        {/* Seta */}
        <ScrollArrow
            to="/certificacoes"
            label="Ver Certificações"
        />

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>        
      </section>
    </PageTransition>
  )
}

export default Projects