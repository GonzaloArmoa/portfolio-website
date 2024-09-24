import { Tecnos } from "../constants/tecnoList";


export const IconsBar = () => {
  return (
    <div className="flex space-x-10 overflow-hidden group w-full max-h-36">

      {/* Dibuja la Barra Iconos de Tecnologias */}
      <div className="flex animate-loop-scroll space-x-10 group-hover:paused  ">
        {Tecnos.map((item, index) => (
          <div key={index} className="hover:scale-125 hover:text-orange-400">
            <img className="m-auto py-2 max-w-none max-h-16" src={item.image} alt={item.name} />
            <p className="text-xs text-center mb-3">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="flex animate-loop-scroll space-x-10 group-hover:paused" aria-hidden="true">
        {Tecnos.map((item, index) => (
           <div key={index} className="hover:scale-125 hover:text-orange-400">
           <img className="m-auto py-2 max-w-none max-h-16" src={item.image} alt={item.name} />
           <p className="text-xs  text-center mb-3">{item.name}</p>
         </div>
        ))}
      </div>

    </div>
  );
};
