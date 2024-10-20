import { Projects } from "../constants/projectsList";
import { Fade  } from "react-awesome-reveal";
import { TiArrowRightThick } from "react-icons/ti"


export const ProjectsCards = () => {


  return (
    <>
      <div className="grid place-content-center my-8">
        <div className="container mx-auto">
          <h1 className="text-center font-bold text-2xl mb-4">Mis Proyectos</h1>

          {/* Dibuja la lista de Proyectos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:text-center lg:grid-cols-3 place-items-center gap-8 ">
            {Projects.slice(0, 3).map((item, index) => (

              <a href={item.url} target='_blank'>

                <div key={index} className="text-white shadow-md rounded-lg overflow-hidden relative group">


                  <img className="w-full max-w-[300px] max-h-42 rounded-lg" src={item.image} alt={item.name} />

                  {/* Seccion Oculta */}
                  <div className="top-[0] opacity-100 absolute left-0 lg:top-[-100%] lg:opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-[2px] duration-300">
                    <div className="space-y-5">
                      <Fade duration={1500}>
                        <h2 className="font-bold text-xl">{item.name}</h2>
                        <h2>{item.language}</h2>
                      </Fade>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-end mt-2 items-center md:-mt-6 lg:m-3">
        <a href='/projects' className=" text-sm text-black font-semibold underline mr-1 "> TODOS MIS PROYECTOS </a><TiArrowRightThick/>
        </div>
      </div>
    </>
  );
};