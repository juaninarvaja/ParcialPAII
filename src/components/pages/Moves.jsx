import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailAbilityById } from '../../redux/ducks/pokeDuck';
import { useHistory, useParams } from 'react-router-dom';
import PokeRow from '../templates/PokeRow';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import HabilidadRow from '../templates/HablidadRow';
import MovesRow from '../templates/MovesRow';
import { getMovesbyId } from '../../redux/ducks/pokeDuck';

export default function Moves() {
    const dispatch = useDispatch();
    let { id } = useParams();
    const { poke } = useSelector(state => state);
    console.log(poke);
     const { moves} = poke;
    let history = useHistory();
  
    useEffect(() => {
      dispatch(getMovesbyId(id));    
    }, [dispatch, id])
  
    const back = () => {
      history.push("/listado");
    }
    // console.log(pokeInfo)
    return (
      <> 
         <MovesRow
        movimientos={moves}
        handleGoBack={back} />
      
      </>

    )
}
