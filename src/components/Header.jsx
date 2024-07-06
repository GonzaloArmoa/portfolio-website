import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from 'react-icons/fa';


export const Header = () => {
  const [navbar, setNavbar] = useState(false)
  const Nabvar = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Sobre Mi",
      link: "/about",
    },
    {
      name: "Proyectos",
      link: "/projects",
    },
    {
      name: "Contactos",
      link: "/contact",
    },
  ];
  return (
    <>
      <nav className="w-full h-auto bg-gray-800 lg:px-9 md:px-8 sm:px-14 px-12 py-2 shadow-md ">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex ">
          {/* Navbar Logo, Menu Button & Login */}
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block ">
              {/* Logo section */}
              <Link className="text-3xl text-orange-500 font-semibold tracking-[0.1rem] ">
                Gonzalo Armoa
              </Link>
              {/* Menu Button section */}
              <div className="md:hidden ">
                <button className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border" onClick={() =>
                setNavbar(!navbar)}>
                  {navbar ? (
                    <FaTimes className="text-gray-400 cursor-pointer size={24}"/>
                  ) : (
                    <FaBars className="text-gray-400 cursor-pointer size={24}"/>
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* Navbar Menu Items section */}
          <div className={`flex justify-between items-center md:block 
          ${navbar ? "block" : "hidden"}
          `}>
            <ul className="list-none lg:flex md:flex sm:block block xl:gap-x-24 lg:gap-x-16 md:gap-x-8 gap-y-16 h-full items-center text-center mx-5">
              {Nabvar.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className=" text-gray-400 tex-[1.5rem] font-medium tracking-wider hover:text-gray-200 ease-out duration-700  "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
