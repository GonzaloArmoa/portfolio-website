import { Tecnos } from "../constants/tecnoList";


export const IconsBar = () => {
  return (

    <div className="mx-auto">
      <h1 className="text-center font-bold text-2xl mb-4">Mis Habilidades</h1>

      {/* Dibuja la Barra Iconos de Tecnologias */}
    <div className="flex justify-around flex-wrap">

        {Tecnos.map((item, index) => (
          <div key={index} className="hover:scale-125 hover:font-bold">
            <img className="m-auto py-2 max-w-none max-h-16" src={item.image} alt={item.name} />
            <p className="text-xs text-center mb-3">{item.name}</p>
          </div>
        ))}
      </div>



    </div>

  );
};
