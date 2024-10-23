import PropTypes from 'prop-types'
import { Fade } from 'react-awesome-reveal'

export const ProjectsCard = ({item, index}) => {
  return (
<a href={item.url} target='_blank'>

<div className=" text-white shadow-md rounded-lg overflow-hidden relative group ">


  <img className="backdrop:w-full max-w-[300px] max-h-44 object-cover rounded-lg " src={item.image} alt={item.name} />

  {/* Seccion Oculta */}
  <div className="top-[0] opacity-100 absolute left-0 lg:top-[-100%] lg:opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-[2px] duration-300">
    <div className="space-y-5">
      <Fade duration={1500}>
        <h2 className="font-bold text-xl">{item.name}</h2>
        <h2>{item.language}</h2>
      </Fade>
    </div>
  </div>
</div>
</a>
  )
}

ProjectsCard.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number
}