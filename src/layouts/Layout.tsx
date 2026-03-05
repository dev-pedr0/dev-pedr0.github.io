import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"
import { images } from "../content"

const Layout = () => { 
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
          relative z-10
          flex flex-col
          grow
          items-center justify-center
          text-center
        "
      >
        <Outlet />
      </main>
    </div>
  )
}

export default Layout