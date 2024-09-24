import { Tecnos } from "../constants/tecnoList";


export const IconsBar = () => {
  return (
    <div className="flex">

      {/* Dibuja la Barra Iconos de Tecnologias */}
      {Tecnos.map((item, index) => (
        <div key={index} className="m-10">
          <img className="h-20"  src={item.image} alt={item.name} />
          <p className="text-center">{item.name}</p>
        </div>
      ))}

    </div>
  );
};
