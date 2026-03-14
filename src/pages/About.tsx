import PageTransition from "../components/PageTransition"
import SkillCard from "../components/SkillCard"
import TextImage from "../components/TextImage"
import { AboutContent } from "../content"
import { skills } from "../content/skills"

const About = () => {
  return (
    <PageTransition>
      <div className="w-full mx-auto max-w-5xl p-6 sm:p-8 flex flex-col gap-12">
        <TextImage
          title={AboutContent.title}
          text={AboutContent.text}
          image={AboutContent.image}
        />
        <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
        "
        >
          {skills.map(item => (
            <SkillCard key={item.name} skill={item}/>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}

export default About