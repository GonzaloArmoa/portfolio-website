import { ProjectsList } from "../constants/projectsList";
import { TiArrowRightThick } from "react-icons/ti"
import { ProjectsCard } from "./ProjectsCard";


export const Projects = () => {


  return (
    <>
      <div className="grid place-content-center my-8">
        <div className="container mx-auto">
          <h1 className="text-center font-bold text-2xl mb-4">Mis Proyectos</h1>

          {/* Dibuja la lista de Proyectos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:text-center xl:grid-cols-3 place-items-center gap-10 ">
            {ProjectsList.slice(0, 3).map((item, index) => (

              <ProjectsCard item={item} index={index} key={index} />
            ))}
          </div>
        </div>
        <div className="flex justify-end mt-2 items-center lg:-mt-6 xl:m-3 ">
        <a href='projects' className=" text-sm text-black font-semibold underline mr-1 "> TODOS MIS PROYECTOS </a><TiArrowRightThick/>
        </div>
      </div>
    </>
  );
};