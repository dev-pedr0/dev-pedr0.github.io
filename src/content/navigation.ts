export interface NavItem {
  label: string
  href: string
}

export const navItems = [
  { label: "Home", path: "/" },
  { label: "Sobre", path: "/sobre" },
  { label: "Certificações", path: "/certificacoes" },
  { label: "Projetos", path: "/projetos" },
  { label: "Contato", path: "/contato" },
]

export const pageFlow = [
  { path: "/", label: "Sobre Mim", next: "/sobre" },
  { path: "/sobre", label: "Ver Certificações", next: "/certificacoes" },
  { path: "/certificacoes", label: "Ver Projetos", next: "/projetos" },
  { path: "/projetos", label: "Ver Contato", next: "/contato" },
  { path: "/contato", label: "Voltar ao Início", next: "/" },
];