import type { ReactNode } from "react"
import NavBar from "../components/NavBar"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-bg-primary flex justify-center">
      <div className="container-page relative flex flex-col gap-6">
        <NavBar/>

        {/* Background decorativo */}
        <div
          className="
            hidden md:block
            absolute top-1/2 left-1/2
            w-[80%] h-[80%] max-w-[700px]
            -translate-x-1/2 -translate-y-1/2
            bg-(--color-bg-secondary)
            [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]
            z-0
          "
        />

        {/* Conteúdo dinâmico */}
        <main className="
            relative z-10
            flex flex-col items-center justify-center
            gap-6
            min-h-[70vh]
            md:min-h-[80vh]
          ">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout