import PropTypes from 'prop-types'

export const Pagination = ({pagina, setPagina, maximo}) => {


const nextPage = () => {
setPagina(pagina + 1);
}


const prevPage = () => {
    setPagina(pagina - 1);
}


  return (
    <div className='m-10 flex justify-between'>
        <button disabled={pagina === 1} onClick={prevPage} className='disabled:text-transparent'>Anterior</button>
        <button disabled={pagina === maximo || pagina > maximo} onClick={nextPage} className='disabled:text-transparent'>Siguiente</button>
    </div>
  )
  


}

Pagination.propTypes = {
    pagina: PropTypes.number,
    setPagina: PropTypes.func,
    maximo: PropTypes.number,
  }