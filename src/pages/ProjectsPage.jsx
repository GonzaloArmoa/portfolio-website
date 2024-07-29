import { useState } from "react";

import pImg1 from "../assets/proyectsImg/no.png";
import { ProjectsCard } from "../components/ProjectsCard";
import { Pagination } from "../components/Pagination";

export const ProjectsPage = () => {
  const Projects = [
    {
      name: "Calculadora",
      language: "HTML + CSS + JS",
      image: pImg1,
      url: "/about",
    },
    {
      name: "Emilia Colle Blog",
      language: "HTML + CSS + JS",
      image: pImg1,
      url: "/about",
    },
    {
      name: "Rest Menu",
      language: "HTML + CSS + JS",
      image: pImg1,
      url: "/about",
    },
    {
      name: "Mercado Liebre CRUD",
      language: "HTML + CSS + JS",
      image: pImg1,
      url: "/about",
    },
    {
      name: "Sip n' Ship",
      language: "HTML + CSS + REACT",
      image: pImg1,
      url: "/about",
    },
    {
      name: "Pimienta y Sal - Landing Page",
      language: "HTML + CSS + JS",
      image: pImg1,
      url: "/about",
    },
    {
      name: "Craftsy",
      language: "HTML + CSS + JS",
      image: pImg1,
      url: "/about",
    },
    {
      name: "Veterinaria",
      language: "HTML + CSS + REACT + HOOKS",
      image: pImg1,
      url: "/about",
    },
    {
      name: "Clima APP",
      language: "HTML + CSS + APIS + REACT",
      image: pImg1,
      url: "/about",
    },
    {
      name: "Project Manager",
      language: "HTML + CSS + APIS + Crud JS + HOOKS + REACT",
      image: pImg1,
      url: "/about",
    },
    {
      name: "Kitchening",
      language: "HTML + CSS + BOOTSTRAP JS",
      image: pImg1,
      url: "/about",
    },
  ];

  const [pagina, setPagina] = useState(1);
  const [porPagina] = useState(4);

  const maximo = Projects.length / porPagina;

  return (
    <>
      <div>
        <h1 className="text-center font-bold text-2xl">Projects Page</h1>

        {/* Dibuja la lista de Proyectos */}
        <div className="mt-4">
          <ul className="flex flex-wrap gap-12 justify-center">
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
