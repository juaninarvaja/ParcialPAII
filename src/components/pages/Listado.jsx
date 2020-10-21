import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/ducks/appDuck";
import { useSelector } from "react-redux";
import PokeList from '../templates/PokeList';

import { getPokeById } from '../../redux/ducks/pokeDuck';

export default function Listado() {
  const dispatch = useDispatch();
  const { app } = useSelector(state => state);
  const { pokemons, count, next, previous } = app;
  const { poke } = useSelector(state => state);
  const { pokeInfo } = poke;
  const [ rowsPerPage, setRowsPerPage ] = useState(10);
  let [ defaultUrl, setDefaultUrl] = useState('https://pokeapi.co/api/v2/pokemon/');


  useEffect(() => {

    dispatch(getPokemons(defaultUrl, rowsPerPage));
  }, [defaultUrl, dispatch, rowsPerPage])
  
  

  const handleOnClick = (url) => {
    dispatch(getPokemons(url, rowsPerPage));
    setDefaultUrl(url);
  }

  const cantidadPokemonesPorPagina = (event) => {
    setRowsPerPage(event.target.value);
    dispatch(getPokemons(defaultUrl, event.target.value));
  }

  
  // useEffect(() => {
  //   if(pokemons!= undefined){

    
  //   console.log("cambiaron los pokemons", pokemons)
  //   pokemons.map((currElement, index) => {
  //     console.log(currElement.url.split('/')[6]);
  //     dispatch(getPokeById(currElement.url.split('/')[6]));

  //   })
  // }
  // }, [pokemons])

  return (
    
    <PokeList 
      pokemons={pokemons}
      previous={previous}      
      next={next}      
      count={count}      
      handleOnClick={handleOnClick}
      rowsPerPage={rowsPerPage}
      cantidadPokemonesPorPagina={cantidadPokemonesPorPagina}
    />
  )
}
