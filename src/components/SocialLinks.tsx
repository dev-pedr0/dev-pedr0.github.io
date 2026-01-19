import linkedin from "../assets/imgs/linkedin.png"
import github from "../assets/imgs/github.png"
import email from "../assets/imgs/email.png"

const socials = [
  {
    href: "https://www.linkedin.com/in/pedro-conceicao1/",
    img: linkedin,
    alt: "LinkedIn",
  },
  {
    href: "https://github.com/dev-pedr0",
    img: github,
    alt: "GitHub",
  },
  {
    href: "mailto:pedro4costa@outlook.com",
    img: email,
    alt: "Email",
  },
]

const SocialLinks = () => {
  return (
    <ul className="flex items-center justify-center gap-4">
      {socials.map(social => (
        <li key={social.alt}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hove-click block"
          >
            <img
              src={social.img}
              alt={social.alt}
              className="w-8 sm:w-9 lg:w-7"
            />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks