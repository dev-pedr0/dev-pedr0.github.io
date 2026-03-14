import type { Skill } from "../utils/types"

type Props = {
  skill: Skill
}

const levelConfig = {
  basico: {
    label: "Básico",
    width: "33%"
  },
  intermediario: {
    label: "Intermediário",
    width: "66%"
  },
  avancado: {
    label: "Avançado",
    width: "100%"
  }
}

const SkillCard = ({ skill }: Props) => {
    const level = levelConfig[skill.level]

    return (
    <div
      className="
      group
      bg-bg-secondary
      rounded-xl
      p-5
      flex flex-col items-center gap-4
      border border-bg-hover-dark
      transition-all duration-300
      hover:scale-105
      hover:shadow-[0_0_20px_rgba(0,188,212,0.15)]
      "
    >
      {/* Ícone */}
      <img
        src={skill.image}
        alt={skill.name}
        className="
        w-14 h-14
        object-contain
        transition-transform duration-300
        group-hover:scale-110
        "
      />

      {/* Nome */}
      <h3 className="text-sm font-semibold text-text-primary">
        {skill.name}
      </h3>

      {/* Barra de nível */}
      <div className="w-full">
        <div className="flex justify-between text-xs text-text-secondary mb-1">
          <span>Proeficiência:</span>
          <span>{level.label}</span>
        </div>

        <div className="w-full h-2 bg-bg-hover-dark rounded-full overflow-hidden">
          <div
            className="h-full bg-accent-primary transition-all duration-500"
            style={{ width: level.width }}
          />
        </div>
      </div>
    </div>
  )
}

export default SkillCard