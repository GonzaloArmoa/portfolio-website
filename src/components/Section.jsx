import { NavLink } from "react-router-dom";

import { Outlet } from "react-router-dom";


export const Section = () => {

  return (
    <>
      {/* Section > TopLinks & Description*/}
      <div className="sm:flex-row-reverse sm:flex-nowrap my-6 lg:flex lg:flex-wrap lg:flex-col">


        {/* Description */}
        <div className=" w-full border-double border-4 border-gray-600 rounded-md bg-orange-50 pt-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};
