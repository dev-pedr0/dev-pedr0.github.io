import { motion } from "framer-motion"
import type { Project } from "../content"

type Props = {
  project: Project
  onClose: () => void
}

const ProjectModal = ({ project, onClose }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        className="
          relative
          bg-bg-secondary
          rounded-2xl
          max-w-5xl w-full
          max-h-[85vh]
          overflow-y-auto
          shadow-2xl
          border border-bg-hover-dark/60
        "
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 40 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <button
          className="
            absolute top-2 right-2
            cursor-pointer
            text-text-secondary hover:text-text-primary
            bg-bg-primary/40 hover:bg-bg-hover-dark
            rounded-full p-2.5
            transition-all duration-200
            text-xl font-bold
          "
          onClick={onClose}
          aria-label="Fechar"
        >
          ✕
        </button>

        <div className="p-5 sm:p-8 flex flex-col gap-6">
          {/* Mídia */}
          <div className="w-full aspect-video rounded-xl overflow-hidden bg-bg-primary/80 border border-bg-hover-dark/40">
            {project.mediaType === "image" ? (
              <img
                src={project.media}
                alt={project.title}
                className="w-full h-full object-contain"
              />
            ) : (
              <video
                src={project.media}
                className="w-full h-full"
                controls
                autoPlay
              />
            )}
          </div>

          {/* Conteúdo */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
              {project.title}
            </h2>

            <p className="text-base text-justify sm:text-lg leading-relaxed text-text-secondary whitespace-pre-line">
              {project.description}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2.5
                mt-3 px-6 py-3.5
                btn-effect
              "
            >
              Ver projeto completo →
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectModal