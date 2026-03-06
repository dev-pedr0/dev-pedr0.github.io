import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

type Props = {
  to: string
  label: string
}

const NextSectionLink = ({ to, label }: Props) => {
  return (
    <div className="flex justify-center mt-12">
      <Link
        to={to}
        className="
        group
        relative
        inline-flex
        items-center
        gap-3
        px-4 py-2
        text-lg font-semibold
        rounded-xl
        text-accent-primary
        transition-all duration-300
        hover:scale-105
        hover:shadow-[0_0_20px_rgba(0,188,212,0.4)]
        "
      >
        {label}

        <span
          className="
          transition-transform
          duration-300
          group-hover:translate-x-2
          "
        >
          <ArrowRight/>
        </span>

        {/* glow animado */}
        <span
          className="
          absolute
          inset-0
          rounded-xl
          border border-accent-primary/40
          animate-pulse
          opacity-40
          pointer-events-none
          "
        />
      </Link>
    </div>
  )
}

export default NextSectionLink