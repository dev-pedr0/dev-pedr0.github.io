import { socialLinks } from "../content"

const SocialLinks = () => {
  return (
    <ul className="flex items-center justify-center gap-4">
      {socialLinks.map(social => (
        <li key={social.name}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-all
                duration-300 ease-in-out md:hover:scale-110"
            aria-label={social.name}
          >
            <img
              src={social.icon}
              alt={social.name}
              className="w-8 sm:w-9 lg:w-7 2xl:w-10"
            />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks