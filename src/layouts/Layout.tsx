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

        {/* Losango decorativo */}
        <div
          className="
            hidden sm:block
            absolute top-1/2 left-1/2
            w-[85%] h-[85%]
            max-w-175
            -translate-x-1/2 -translate-y-1/2
            bg-(--color-bg-secondary)
            [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]
            z-0
          "
        />

        {/* Conteúdo das páginas */}
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