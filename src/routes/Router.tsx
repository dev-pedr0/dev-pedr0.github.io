import { Routes, Route, HashRouter } from "react-router-dom"
import Layout from "../layouts/Layout"
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import Certification from "../pages/Certification"
import About from "../pages/About"
import Contact from "../pages/Contact"

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/certificacoes" element={<Certification />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}