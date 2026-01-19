import { useEffect, useState } from "react"

type Props = {
  text: string
  speed?: number
  className?: string
}

const TypeWriter = ({
  text,
  speed = 40,
  className = "",
}: Props) => {
    const [displayedText, setDisplayedText] = useState("")
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < text.length) {
        const timeout = setTimeout(() => {
            setDisplayedText(prev => prev + text[index])
            setIndex(prev => prev + 1)
        }, speed)

        return () => clearTimeout(timeout)
        }
    }, [index, text, speed])

    return (
        <p className={className}>{displayedText}</p>
    )
}

export default TypeWriter