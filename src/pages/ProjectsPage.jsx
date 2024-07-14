import pImg1 from "../assets/proyectsImg/no.png";

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
  return (
    <>
      <div>
        <h1 className="text-center font-bold text-2xl">Projects Page</h1>

        {/* Dibuja la lista de Proyectos */}
        <div className="mt-4">
          <ul className="flex flex-wrap gap-12 justify-center">
            {Projects.map((item, index) => (
              <li
                className=" w-48 border-double  border-4 border-gray-600 rounded-md text-gray-900 tex-[1.5rem] tracking-wider hover:font-bold duration-700 focus:font-bold focus:border-black focus:z-10"
                key={index}
              >
                <img className="h-46" src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p> {item.language}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
