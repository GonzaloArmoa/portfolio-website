import { About } from "../components/AboutMe"
import { Experience } from "../components/Experience"
import { IconsBar } from "../components/IconsBar"
import { Projects } from "../components/Projects"


export const HomePage = () => {
  return (
    <>
    <div className="w-full px-6 pt-14">
      <About/>
      <Projects/>
      <IconsBar/>
      <Experience/>
    </div>

    </>
  )
}
