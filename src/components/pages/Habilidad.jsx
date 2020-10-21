import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailAbilityById } from '../../redux/ducks/pokeDuck';
import { useHistory, useParams } from 'react-router-dom';
import PokeRow from '../templates/PokeRow';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import HabilidadRow from '../templates/HablidadRow';

export default function Habilidad() {
  const dispatch = useDispatch();
  let { id } = useParams();

  
  const { poke } = useSelector(state => state);
 const { habilidadInfo } = poke;
//  console.log(habilidadInfo);
  let history = useHistory();

  useEffect(() => {
    dispatch(getDetailAbilityById(id));
  }, [dispatch, id])
  
  return (
    <HabilidadRow
     habilidadInfo={habilidadInfo}


  />    
  )
}
