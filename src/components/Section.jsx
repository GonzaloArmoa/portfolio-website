import { Link } from "react-router-dom";

import { Outlet } from "react-router-dom";

export const Section = () => {
  const Nabvar = [
    {
      name: "Sobre mi",
      link: "/about",
    },
    {
      name: "Proyectos",
      link: "/projects",
    },
    {
      name: "Contacto",
      link: "/contact",
    },
  ];

  return (
    <>
      {/* Section > TopLinks & Description*/}
      <div className="w-2/3 px-6 sm:flex-row-reverse sm:flex-nowrap   lg:flex lg:flex-wrap lg:flex-col">


        {/* TopLinks*/}
        <div className="mt-4">
          <ul className="flex gap-x-10 justify-center">
            {Nabvar.map((item, index) => (
              <li className="" key={index}>
                <Link
                  to={item.link}
                  className="pb-2.5 relative bg-orange-50 px-3 py-1 border-double  border-4 border-gray-600 rounded-md text-gray-900 tex-[1.5rem] border-b-0 rounded-b-none font-medium tracking-wider hover:font-bold duration-700 focus:font-bold focus:border-black focus:z-10"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Description */}
        <div className="relative w-full h-[800px] border-double border-4 border-gray-600 rounded-md bg-orange-50 pt-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};
