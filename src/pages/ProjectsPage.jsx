import { useState } from "react";

import { ProjectsList } from "../constants/projectsList";
import { ProjectsCard } from "../components/ProjectsCard";
import { Pagination } from "../components/Pagination";


export const ProjectsPage = () => {

  const [pagina, setPagina] = useState(1);
  const [porPagina] = useState(6);

  const maximo = ProjectsList.length / porPagina;

  return (
    <>
      <div className="h-full">
        <h1 className="text-center font-bold text-2xl">Projects Page</h1>

        {/* Dibuja la lista de Proyectos */}
        <div className="h-full flex flex-col justify-between px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:text-center xl:grid-cols-3 place-items-center gap-10">
            {ProjectsList.slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina
            ).map((item, index) => (
              <ProjectsCard item={item} index={index} key={index} />
            ))}
          </div>
          <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
        </div>
      </div>
    </>
  );
};
