import { projectFilters } from "../content"

type Props = {
  active: string
  onChange: (value: string) => void
}

const FilterButtons = ({ active, onChange }: Props) => {
  return (
    <div
      className="
        flex flex-wrap
        gap-2
        justify-center
        sm:gap-3
      "
    >
      {projectFilters.map(filter => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`
            px-3 py-2
            text-xs
            rounded-full
            transition
            sm:px-4 sm:text-sm
            ${
              active === filter
                ? "bg-accent-primary text-bg-primary"
                : "bg-bg-secondary text-text-secondary hover:text-text-primary"
            }
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons