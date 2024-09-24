import { useState } from "react";

import { Projects } from "../constants/projectsList";
import { ProjectsCard } from "../components/ProjectsCard";
import { Pagination } from "../components/Pagination";


export const ProjectsPage = () => {

  const [pagina, setPagina] = useState(1);
  const [porPagina] = useState(4);

  const maximo = Projects.length / porPagina;

  return (
    <>
      <div className="h-full">
        <h1 className="text-center font-bold text-2xl">Projects Page</h1>

        {/* Dibuja la lista de Proyectos */}
        <div className="h-full flex flex-col justify-between px-8 py-12">
          <ul className="flex flex-wrap gap-4 justify-center">
            {Projects.slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina
            ).map((item, index) => (
              <ProjectsCard item={item} index={index} key={index} />
            ))}
          </ul>
          <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
        </div>
      </div>
    </>
  );
};
