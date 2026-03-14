import { motion } from "framer-motion"

type Props = {
  title: string
  text: string
  image: string
  imageAlt?: string
  imagePosition?: "left" | "right"
}

const TextImage = ({
  title,
  text,
  image,
  imageAlt = "",
  imagePosition = "right",
}: Props) => {
    const isImageLeft = imagePosition === "left";

    return (
    <motion.section
        initial={{ opacity: 0, x: isImageLeft ? 80 : -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`w-full flex flex-col gap-6 sm:gap-8 md:gap-10
        lg:flex-row lg:items-center lg:gap-12
        ${isImageLeft ? "lg:flex-row-reverse" : ""}`}
        >
        <div
            className="
            w-full
            text-text-primary

            lg:flex-1
            "
        >
            {/* TÍTULO */}
            <h3
            className="
                mb-3
                text-base
                font-extrabold
                uppercase

                sm:text-lg
                md:text-xl
            "
            >
            {title}
            </h3>

            {/* TEXTO */}
            <p
            className="
                text-sm
                leading-relaxed
                text-text-secondary
                text-justify
                whitespace-pre-line

                sm:text-base
                md:text-lg
                md:leading-loose
            "
            >
            {text}
            </p>
        </div>

        {/* IMAGEM */}
        <div
            className="
            w-full
            flex
            justify-center

            lg:flex-1
        "
        >
            <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="
                w-full
                max-w-105
                h-56
                object-cover
                rounded-xl
                shadow-lg

                sm:max-w-120
                sm:h-64

                md:max-w-130
                md:h-130

                lg:max-w-none
                lg:h-80

                xl:h-88
                2xl:h-96
            "
            />
        </div>
    </motion.section>
  )
}

export default TextImage