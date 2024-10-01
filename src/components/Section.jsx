import { NavLink } from "react-router-dom";

import { Outlet } from "react-router-dom";

import { Sections } from "../constants/sections";

export const Section = () => {

  return (
    <>
      {/* Section > TopLinks & Description*/}
      <div className="px-6 sm:flex-row-reverse sm:flex-nowrap   lg:flex lg:flex-wrap lg:flex-col">


        {/* TopLinks*/}
       {/*  <div className="mt-4 mb-1">
          <div className="flex gap-x-10 justify-center">
            {Sections.map((item, index) => (
              <div className="" key={index}>
                <NavLink
                  className={({ isActive }) =>
                    `relative px-3 py-1.5 pb-2.5 bg-orange-50 border-double border-4 border-gray-600 rounded-md text-gray-900 border-b-0 tracking-wider
           ${isActive ? 'rounded-b-none font-bold z-10' : ''
                    }
            `
                  }
                  to={item.link}
                >
                  {item.name}
                </NavLink>
              </div>
            ))}
          </div>
        </div> */}

        {/* Description */}
        <div className="relative w-full max-h-[800px] border-double border-4 border-gray-600 rounded-md bg-orange-50 pt-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};
