import { About } from "../components/AboutMe"
import { IconsBar } from "../components/IconsBar"
import { ProjectsCards } from "../components/Projects"


export const HomePage = () => {
  return (
    <>
    <div className="px-6">
      <About/>
      <ProjectsCards/>
      <IconsBar/>
      <h1 className="text-center font-bold text-2xl my-10">Cursos y Estudios</h1>
    </div>

    </>
  )
}
