import PageTransition from "../components/PageTransition"
import ScrollArrow from "../components/ScrollArrow"
import TextImage from "../components/TextImage"
import { AboutContent } from "../content"

const About = () => {
  return (
    <PageTransition>
        <div className="w-full mx-auto max-w-5xl bg-bg-secondary rounded-2xl p-6 sm:p-8 flex flex-col gap-12">          
          {/* Conteúdo da página */}
          <TextImage
            title={AboutContent.title_one}
            image={AboutContent.image_one}
            text={AboutContent.text_one}
          />
          <TextImage
            title={AboutContent.title_two}
            image={AboutContent.image_two}
            text={AboutContent.text_two}
            imagePosition="left"
          />
          <TextImage
            title={AboutContent.title_three}
            image={AboutContent.image_three}
            text={AboutContent.text_three}
          />

          {/* Seta */}
          <ScrollArrow
              to="/contato"
              label="Ver Contato"
          />
        </div>
    </PageTransition>
  )
}

export default About