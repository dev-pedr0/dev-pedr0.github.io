import NavBar from "../components/NavBar"
import { Outlet, useLocation } from "react-router-dom"
import { images, pageFlow } from "../content"
import NextSectionLink from "../components/NextSectionLink";

const Layout = () => { 
  const location = useLocation();
  const current = pageFlow.find((p) => p.path === location.pathname);

  return (
    <div
      className="
        min-h-screen
        bg-bg-primary
        flex flex-col justify-center
      "
      style={{
        backgroundImage: `url(${images.background})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
      }}
    >
      {/* Navbar */}
      <header 
        className="
        m-2
        sm:mx-4
        lg:mx-6
        2xl:mx-10
        "
      >
        <NavBar />
      </header>

      {/* Conteúdo das páginas com transição */}
      <main
        className="
          relative
          flex flex-col
          grow
          items-center
          text-center
        "
      >
        <Outlet />
      </main>

      <footer className="m-3">
        {current &&
          <NextSectionLink to={current.next} label={current.label}/>
        }
        </footer>
    </div>
  )
}

export default Layout