import type { Project } from "../content"

type Props = {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
    return (
        <article
            className="
                bg-bg-secondary
                rounded-xl
                mx-auto
                p-4
                flex flex-col
                gap-4
                max-w-md
                h-150
                sm:p-5
            "
        >
            <div className="w-full h-40 sm:h-44 overflow-hidden rounded-lg">
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
                text-base
                font-semibold
                sm:text-lg
                "
            >
                {project.title}
            </h3>

            <div className="text-xs text-justify sm:text-sm text-text-secondary overflow-y-auto flex-1">
                {project.description}
            </div>

            <a
                href={project.link}
                target="_blank"
                className="
                mt-auto
                text-xs
                text-accent-primary
                hover:underline
                sm:text-sm
                "
            >
                Ver projeto
            </a>
        </article>
    )
}

export default ProjectCard