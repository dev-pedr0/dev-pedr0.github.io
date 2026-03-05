import { Link } from "react-router-dom"
import { ChevronDown } from "lucide-react"

type Props = {
    to: string
    label?: string
    className?: string
}

const ScrollArrow = ({
  to,
  label = "Ver mais",
  className = "",
}: Props) => {
    return (
        <Link
            to={to}
            aria-label={label}
            className={`
                group
                flex flex-col
                items-center
                gap-2
                text-text-secondary
                transition-colors
                hover:text-accent-primary
                ${className}
            `}
        >
            <span
                className="
                text-xs tracking-wide uppercase
                opacity-80
                group-hover:opacity-100
                transition-opacity
                2xl:text-lg
                "
            >
                {label}
            </span>

            <ChevronDown
                size={28}
                className="
                animate-bounce
                opacity-70
                transition
                group-hover:opacity-100
                group-hover:translate-y-1
                "
            />
        </Link>
    )
}

export default ScrollArrow