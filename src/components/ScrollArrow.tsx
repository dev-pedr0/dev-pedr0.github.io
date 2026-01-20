import { Link } from "react-router-dom"
import { ChevronDown } from "lucide-react"

type Props = {
    to: string
    label?: string
    className?: string
    absolute?: boolean
}

const ScrollArrow = ({
  to,
  label = "Ver mais",
  className = "",
  absolute = false,
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
                ${absolute ? "absolute bottom-8 left-1/2 -translate-x-1/2" : "mt-8"}
                ${className}
            `}
        >
            <span
                className="
                text-xs tracking-wide uppercase
                opacity-80
                group-hover:opacity-100
                transition-opacity
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