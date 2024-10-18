import { FaGithub, FaLinkedin } from "react-icons/fa"
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io"

export const Contact = () => {
    return (
        <>
            <div className="m-6 max-w-[1000px] text-center">
            <h3 className="text-center font-bold text-2xl mb-4">Contacto</h3>
            <div className="flex justify-center md:gap-x-10">
                <div className="text-blue-700 font-bold hover:scale-125"><a href="https://api.whatsapp.com/send?phone=+543364390835&text=Escribe%20tu%20mensaje%20aqui!"> <IoLogoWhatsapp/> WhatsApp</a></div>
                <div className="text-blue-700 font-bold hover:scale-125"><a href="mailto:garmoa.dev@gmail.com"> <IoIosMail/> e-mail</a></div>
                <div className="text-blue-700 font-bold hover:scale-125"><a href="https://www.linkedin.com/in/garmoa/"> <FaLinkedin/> LinkedIn</a></div>
                <div className="text-blue-700 font-bold hover:scale-125"><a href="https://github.com/GonzaloArmoa?tab=repositories" target="_BLANK"> <FaGithub/> GitHub</a></div>
            </div>



            </div>

        </>
    );
};
