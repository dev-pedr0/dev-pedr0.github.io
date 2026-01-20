import { useState } from "react"
import PageTransition from "../components/PageTransition"
import { projects } from "../content";
import FilterButtons from "../components/FilterButtons";
import ProjectCard from "../components/ProjectCard";
import ScrollArrow from "../components/ScrollArrow";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  // Filtro para apresentar projetos
  const filteredProjects =
    activeFilter === "todos"
      ? projects
      : projects.filter(p => p.category === activeFilter);
  
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
      </section>
    </PageTransition>
  )
}

export default Projects