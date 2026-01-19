export interface NavItem {
  label: string
  href: string
}

export const navItems = [
  { label: "Home", path: "/" },
  { label: "Projetos", path: "/projetos" },
  { label: "Certificações", path: "/certificacoes" },
  { label: "Sobre", path: "/sobre" },
  { label: "Contato", path: "/contato" },
]