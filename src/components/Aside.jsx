import UserImage from "../assets/defaultUserPlaceholder.jpg";
/* import UserImage from "../assets/userPhoto.jpg"; */

export const Aside = () => {
  return (
    <>
      <div className="lg:absolute mt-28 mx-5 md:mt-36 lg:mt-52 max-h-52  border-double border-4 border-gray-600 rounded-md bg-orange-50">
        <div className="user-image -mt-32 mb-5 border-double border-4  border-gray-600 rounded-full bg-orange-50 mx-auto lg:w-56 lg:h-56 ">
        <img className="hidden w-full h-full rounded-full lg:relative lg:inline lg:top-0 lg:left-0" src={UserImage} alt="Foto de Perfil" />
        <img className="w-full h-full rounded-full lg:relative lg:inline lg:top-0 lg:left-0" src={UserImage} alt="Foto de Perfil" />
        </div>
        <div>
          <h1 className="text-center text-2xl font-bold">Gonzalo Armoa</h1>
          <h3 className="text-center">Web Developer</h3>
        </div>
      </div>
      
    </>
  );
};
