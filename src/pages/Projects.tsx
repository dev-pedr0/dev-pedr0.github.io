import { useEffect, useState } from "react"
import PageTransition from "../components/PageTransition"

import FilterButtons from "../components/FilterButtons";
import ProjectCard from "../components/ProjectCard";
import ScrollArrow from "../components/ScrollArrow";
import type { Project } from "../content"
import { getProjects, type StrapiProject } from "../utils/strapi";
import { isValidCategory } from "../utils/validateCatogory";

type ProjectItem = Project;

const Projects = () => {
  const [strapiProjects, setStrapiProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("todos");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  // Buscador de projetos
  useEffect(() => {
    async function fetchProjects() {
      try {
        const strapiData = await getProjects();

        const formatted: Project[] = strapiData.map((p: StrapiProject) => {
          const mediaUrl = p.media?.url
          ? p.media.url
            : '/fallback.jpg';

          const mediaTypeVerified = p.mediaType === "video" ? "video" : "image";
          const validCategory = isValidCategory(p.category)
            ? p.category
            : "fullstack"
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
        setStrapiProjects(formatted)
      } catch (err) {
        setError('Não foi possível carregar os projetos.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  // Filtro para apresentar projetos
  const filteredProjects =
    activeFilter === "todos"
      ? strapiProjects
      : strapiProjects.filter(p => p.category === activeFilter);
  
  if (loading) return <div className="text-center py-10">Carregando projetos...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  
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
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="
                  relative
                  bg-bg-secondary
                  rounded-2xl
                  max-w-5xl w-full
                  max-h-[90vh]
                  overflow-y-auto
                  shadow-2xl
                  border border-bg-hover-dark/60
                "
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="
                absolute top-2 right-2
                cursor-pointer
                text-text-secondary hover:text-text-primary
                bg-bg-primary/40 hover:bg-bg-hover-dark
                rounded-full p-2.5
                transition-all duration-200
                z-10
                text-xl font-bold
                "
                onClick={() => setSelectedProject(null)}
                aria-label="Fechar"
              >
                ✕
              </button>

              <div className="p-5 sm:p-8 flex flex-col gap-6">
                {/* Mídia grande */}
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-bg-primary/80 border border-bg-hover-dark/40">
                  {selectedProject.mediaType === "image" ? (
                    <img
                      src={selectedProject.media}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <video
                      src={selectedProject.media}
                      className="w-full h-full"
                      controls
                      autoPlay
                    />
                  )}
                </div>

                {/* Conteúdo */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
                    {selectedProject.title}
                  </h2>

                  <p className="text-base text-justify sm:text-lg leading-relaxed text-text-secondary whitespace-pre-line">
                    {selectedProject.description}
                  </p>

                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2.5
                      mt-3 px-6 py-3.5
                      bg-accent-primary/15 hover:bg-accent-primary/25
                      text-accent-primary font-medium
                      rounded-lg
                      border border-accent-primary/30
                      transition-all duration-300
                      hover:border-accent-primary/50
                      hover:shadow-[0_0_15px_rgba(0,188,212,0.2)]
                      active:scale-98
                    "
                  >
                    Ver projeto completo →
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </PageTransition>
  )
}

export default Projects