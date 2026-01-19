import { useState } from "react";
import logo from "../assets/imgs/monogram-dev-pedro.png"
import SocialLinks from "./SocialLinks"

const navItems = [
  { label: "Projetos", href: "#projetos" },
  { label: "Certificações", href: "#certificacoes" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
]

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 font-bold">
          <img src={logo} alt="Logo" className="w-10 sm:w-12" />
          <span className="text-accent-primary">Dev Pedro</span>
        </a>

        {/* Botão mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
          aria-label="Abrir menu"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-accent-primary transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social links (desktop) */}
        <div className="hidden lg:block">
          <SocialLinks />
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav
        className={`
          md:hidden
          mt-4
          card
          flex flex-col gap-4
          transform transition-all duration-300 ease-out
          ${open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"}
        `}
      >
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="py-2 border-b border-white/10 last:border-0"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <SocialLinks />
        </nav>
      )}
    </header>
  )
}

export default NavBar