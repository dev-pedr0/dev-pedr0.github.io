import PageTransition from "../components/PageTransition"
import ScrollArrow from "../components/ScrollArrow"
import TextImage from "../components/TextImage"
import { AboutContent } from "../content"

const About = () => {
  return (
    <PageTransition>
      <div className="w-full mx-auto max-w-5xl bg-bg-secondary rounded-2xl p-6 sm:p-8 flex flex-col gap-12">

        {AboutContent.map((section, index) => (
          <TextImage
            key={index}
            title={section.title}
            image={section.image}
            text={section.text}
            imagePosition={index % 2 === 1 ? "left" : "right"}
          />
        ))}

        <ScrollArrow
          to="/contato"
          label="Ver Contato"
        />
      </div>
    </PageTransition>
  )
}

export default About