import type { Project } from "../content"

type Props = {
  project: Project,
  onOpen: (project: Project) => void
}

const ProjectCard = ({ project, onOpen }: Props) => {
    return (
        <article
            className="
                bg-bg-secondary
                rounded-xl
                mx-2
                lg:mx-auto
                p-4
                flex flex-col
                gap-4
                max-w-md
                lg:max-w-full
                sm:p-5
                hover:scale-105
                transition-transform
                duration-300
            "
        >
            <div className="w-full h-40 sm:h-44 lg:h-60 2xl:h-75 overflow-hidden rounded-lg">
                {project.mediaType === "image" ? (
                    <img
                        src={project.media}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <video
                        src={project.media}
                        className="w-full h-full object-cover"
                        controls
                    />
                )}
            </div>

            <h3
                className="
                text-xl
                font-semibold
                lg:text-2xl
                xl:text-3xl
                2xl:text-4xl
                "
            >
                {project.title}
            </h3>

            {/* <div className="text-xs text-justify sm:text-sm text-text-secondary 
                overflow-y-auto flex-1 line-clamp-4">
                {project.description}
            </div> */}

            <button
                className="
                mt-auto
                text-lg
                lg:text-xl
                xl:text-2xl
                2xl:text-3xl
                text-accent-primary
                hover:underline
                hover:cursor-pointer
                "
                onClick={() => onOpen(project)}
            >
                Abrir projeto
            </button>
        </article>
    )
}

export default ProjectCard