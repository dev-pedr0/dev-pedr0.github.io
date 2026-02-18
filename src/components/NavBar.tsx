import { useState } from "react";
import { images, navItems, NavContent } from "../content"
import SocialLinks from "./SocialLinks"
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 font-bold">
          <img src={images.logo} alt="Logo" className="w-10 sm:w-12 2xl:w-16" />
          <span className="text-accent-primary">{NavContent.brand}</span>
        </NavLink>

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
            <NavLink
              key={item.label}
              to={item.path}
              className={({isActive}) =>
              `
                ${isActive
                ? "text-accent-primary"
                : "text-text-primary hover:text-accent-primary"}
                hover:text-accent-primary transition
                text-xl
              `
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Social links (desktop) */}
        <div className="hidden lg:block">
          <SocialLinks />
        </div>
      </div>

      {/* Menu mobile */}
      <nav
        className={`
          md:hidden
          mt-4
          card
          flex flex-col gap-4
          overflow-hidden
          transform transition-all duration-300 ease-out
          ${
            open
              ? "opacity-100 translate-y-0 max-h-125"
              : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
          }
        `}
      >
        {navItems.map(item => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({isActive}) =>
              `
                ${isActive
                ? "text-accent-primary"
                : "text-text-primary hover:text-accent-primary"}
                hover:text-accent-primary transition
              `
            }
            onClick={() => setOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}

        <SocialLinks />
      </nav>
    </header>
  )
}

export default NavBar