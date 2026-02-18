import { ContactContent } from "./site"

export interface SocialLink {
  name: string
  href: string
  icon: string
}

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    href: ContactContent.linkedin,
    icon: "/imgs/linkedin.png",
  },
  {
    name: "GitHub",
    href: ContactContent.github,
    icon: "/imgs/github.png",
  },
  {
    name: "Email",
    href: `mailto:${ContactContent.email_href}`,
    icon: "/imgs/email.png",
  },
]