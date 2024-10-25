import UserImage from "../assets/userPhoto.jpg";
import { FaCloudDownloadAlt, FaGithub, FaLinkedin } from "react-icons/fa"
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io"


export const Aside = () => {
  return (
    <>
      <div className="mt-20 mx-5 md:mt-36 lg:mt-52 border-double border-4 border-gray-600 rounded-lg bg-orange-50">
        <div className="-mt-24 mb-1 border-double border-4  border-gray-600 rounded-full bg-orange-50 mx-auto w-44 h-44 shadow-xl">
          <img className="w-full h-full rounded-full" src={UserImage} alt="Foto de Perfil" />
        </div>
        <div>
          <h1 className="text-center text-2xl font-bold">Gonzalo Armoa</h1>
          <h3 className="text-center mb-5">Full Stack Developer</h3>
          <div className="mx-6">
            <div className="flex items-center font-semibold mb-1"><IoLogoWhatsapp className="text-green-700 text-2xl" /><a className="ml-2 text-sm underline" href="https://api.whatsapp.com/send?phone=+543364390835&text=Escribe%20tu%20mensaje%20aqui!" target="_BLANK">+54 3364390835</a></div>
            <div className="flex items-center font-semibold mb-1"> <IoIosMail className="text-orange-600 text-2xl" /><a className="ml-2 text-sm underline" href="mailto:garmoa.dev@gmail.com" target="_BLANK">garmoa.dev@gmail.com</a></div>
            <div className="flex items-center font-semibold mb-1.5"><FaLinkedin className="text-blue-800 text-2xl" /><a className="ml-2 text-sm underline" href="https://www.linkedin.com/in/garmoa/" target="_BLANK">/garmoa</a></div>
            <div className="flex items-center font-semibold d mb-5"><FaGithub className="text-black text-2xl" /><a className="ml-2 text-sm underline" href="https://github.com/GonzaloArmoa?tab=repositories" target="_BLANK">/GonzaloArmoa</a></div>  
          </div>
          <div className="flex items-center font-bold mx-1.5 mb-4 py-0.5 justify-center bg-lime-200 border-double border-4  border-gray-600 rounded-md shadow"><FaCloudDownloadAlt className="text-2xl text-red-900 b"/><a className="ml-2 text-sm" href="https://drive.google.com/file/d/1mir58dZ_FrmFxgQ1mqleaPA6EfVD86Ah/view?usp=drive_link">Descargar CV</a></div>
        
        </div>
      </div>

    </>
  );
};
