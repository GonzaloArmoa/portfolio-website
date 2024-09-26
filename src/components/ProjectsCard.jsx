import PropTypes from 'prop-types'
import { Projects } from "../constants/projectsList";

export const ProjectsCard = ({item, index}) => {
  return (
    <li
    className="mx-4 w-full bg-white text-gray-900 tex-[1.5rem] tracking-wider hover:font-bold hover:scale-125 duration-500"
    key={index}
  >
<a className='block border-2 border-black rounded-lg p-1' href={item.url} target='_blank'>
<img className="h-14 w-full" src={item.image} alt={item.name} />
<div className="px-10 flex flex-row justify-between">
<p>{item.name}</p>
<p> {item.language}</p>
</div>
</a>
  </li>
  )
}

ProjectsCard.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number
}