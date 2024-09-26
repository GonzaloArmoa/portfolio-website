import { IconsBar } from "../components/IconsBar"
import { ProjectsCards } from "../components/Projects"

export const HomePage = () => {
  return (
    <>
    <div className="px-6">
      <div className="about">DESCRIPCION SOBRE MI</div>
      <div className="contact">MEDIOS DE CONTACTO</div>
      <ProjectsCards/>
      <IconsBar/>
    </div>

    </>
  )
}
