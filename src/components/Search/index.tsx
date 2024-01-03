import React, { useContext, useEffect, useState } from 'react';
import { DivSearch } from './styles.ts';
import { ClimaContext } from '../../contexts/ClimaContext.tsx';
import { FaSearch } from "react-icons/fa";

const Search: React.FC = () => {
  const [ cidade, setCidade ] = useState('Rio de Janeiro');
  const { receberClima } = useContext(ClimaContext);

  function enviar(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();

    receberClima(cidade);
  }

  useEffect(() => {
    receberClima(cidade)
  }, [])

  return (
  <DivSearch>
    <div className='search-principal'>
      <form>
        <input type='text' placeholder='Buscar Localização' value={cidade} onChange={(e) => setCidade(e.target.value)}/>
        <button type='submit' onClick={(e) => enviar(e)}><FaSearch /></button>
      </form>
    </div>
  </DivSearch>
  )
}

export default Search;