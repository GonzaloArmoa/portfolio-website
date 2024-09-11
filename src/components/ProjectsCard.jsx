import PropTypes from 'prop-types'

export const ProjectsCard = ({item, index}) => {
  return (
    <li
    className=" w-full text-gray-900 tex-[1.5rem] tracking-wider hover:font-bold duration-700 focus:font-bold focus:border-black focus:z-10"
    key={index}
  >
<a href={item.url} target='_blank'>
<img className="h-14" src={item.image} alt={item.name} />
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