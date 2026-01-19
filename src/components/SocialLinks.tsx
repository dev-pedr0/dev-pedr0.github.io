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
            className="hove-click block"
            aria-label={social.name}
          >
            <img
              src={social.icon}
              alt={social.name}
              className="w-8 sm:w-9 lg:w-7"
            />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks