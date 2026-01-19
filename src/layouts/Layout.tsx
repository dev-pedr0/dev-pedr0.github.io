import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"

const Layout = () => { 
  return (
    <div
      className="
        min-h-screen
        bg-bg-primary
        flex justify-center
      "
    >
      <div
        className="
          container-page
          relative
          flex flex-col
          gap-6
        "
      >
        {/* Navbar */}
        <NavBar />

        {/* Conteúdo das páginas com transição */}
        <main
          className="
            relative z-10
            flex flex-col
            items-center justify-center
            text-center
            gap-6
            min-h-[70vh]
            sm:min-h-[75vh]
            md:min-h-[80vh]
            lg:min-h-[85vh]
          "
        >
          <Outlet />

        </main>
      </div>
    </div>
  )
}

export default Layout