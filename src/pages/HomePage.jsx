import { About } from "../components/AboutMe"
import { Contact } from "../components/Contact"
import { IconsBar } from "../components/IconsBar"
import { ProjectsCards } from "../components/Projects"

export const HomePage = () => {
  return (
    <>
    <div className="px-6">
      <About/>
      <Contact/>
      <ProjectsCards/>
      <IconsBar/>
    </div>

    </>
  )
}
