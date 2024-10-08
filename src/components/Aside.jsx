import UserImage from "../assets/defaultUser.png";

export const Aside = () => {
  return (
    <>
      <div className=" h-64 mt-48 border-double border-4 border-gray-600 rounded-md bg-orange-50">
        <div className="user-image -mt-32 mb-5 border-double border-4  border-gray-600 rounded-full bg-orange-50 mx-auto lg:w-56 lg:h-56">
        <img className="w-full h-full" src={UserImage} alt="Foto de Perfil" />
        </div>
        <div>
          <h1 className="text-center text-2xl font-bold">Gonzalo Armoa</h1>
          <h3 className="text-center">Web Developer</h3>
        </div>
      </div>
    </>
  );
};
