import PropTypes from 'prop-types'
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti"

export const Pagination = ({pagina, setPagina, maximo}) => {


const nextPage = () => {
setPagina(pagina + 1);
}


const prevPage = () => {
    setPagina(pagina - 1);
}


  return (
    <div className='m-10 flex justify-between'>
        <button disabled={pagina === 1} onClick={prevPage} className='disabled:text-transparent flex items-center gap-1 text-black font-semibold underline mr-1'><TiArrowLeftThick/> Anterior</button>
        <button disabled={pagina === maximo || pagina > maximo} onClick={nextPage} className='disabled:text-transparent flex items-center gap-1 text-black font-semibold underline mr-1'>Siguiente <TiArrowRightThick/></button>
    </div>
  )
  


}

Pagination.propTypes = {
    pagina: PropTypes.number,
    setPagina: PropTypes.func,
    maximo: PropTypes.number,
  }