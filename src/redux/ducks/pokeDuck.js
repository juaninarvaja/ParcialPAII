import { getPokes, getAbility,getDetailAbility } from "../../utils/http";
import { loadingApp, loadedApp } from "./appDuck";

// action types
const FETCH_POKE_INFO = 'FETCH_POKE_INFO';
const FETCH_HABILITY_INFO = 'FETCH_HABILITY_INFO';
const FETCH_MOVES = 'FETCH_MOVES';


// initial state
const defaultStore = {
  pokeInfo: {},
  habilidadInfo : {},
  moves : {}
};

// reducer
export default function reducer(state = defaultStore, action) {
  const { type, payload } = action;
  
  switch(type) {
    case FETCH_POKE_INFO:

      const { pokeInfo } = payload;
      return {
        ...state,
        pokeInfo
      }
      case FETCH_HABILITY_INFO:
        const pokemon = payload;

        return {
            ...state,
            habilidadInfo : pokemon
        };
        case FETCH_MOVES:
          const {moves} = payload;
  
          return {
              ...state,
              moves : moves
          };
    default:
      return {}
  }
}

// actions
function fetchPokeInfo({ id, name, abilities, sprites, base_experience }) {
  return {

    type: FETCH_POKE_INFO,
    payload: {
      pokeInfo: {
        id,
        name,
        abilities,
        imgUrl: [
          sprites.front_default,
          sprites.back_shiny,
          sprites.back_default,
          sprites.front_shiny
        ],
        range: base_experience
      }
    }
  }
}

function fetchDetallesHabilidad({effect}){
  return {
    type: FETCH_HABILITY_INFO,
    payload: {
      effect
    }
  }
}
function fetchMoves({moves}){
  // console.log(moves);
  return {
    type: FETCH_MOVES,
    payload: {
      moves
    }
  }
}

export function getMovesbyId(id){

  return async (dispatch, state) => {

    dispatch(loadingApp());
    try {
      const response = await getPokes("https://pokeapi.co/api/v2/pokemon/" + id);
      // console.log('response', response)
      // console.log(response.moves);
      const moves = response.moves.map(async response => {
        // console.log(response);
        // const abilityInfo = await getAbility(response.ability.url);
         return response;
      });
      // console.log("abilities", abilities)

      dispatch(loadedApp(false, false, null));
      console.log(response);
      dispatch(fetchMoves(response));
    } catch (error) {
      console.log("error: ", error);
      dispatch(loadedApp(false, true, "No se pudo cargar la info del pokemon"));
    }
  }
  }  

export function getPokeById(id) {

  return async (dispatch, state) => {

    dispatch(loadingApp());
    try {
      const response = await getPokes("https://pokeapi.co/api/v2/pokemon/" + id);
      // console.log('response', response)
      
      const abilities = response.abilities.map(async response => {
        const abilityInfo = await getAbility(response.ability.url);
        return abilityInfo;
      });
      // console.log("abilities", abilities)

      dispatch(loadedApp(false, false, null));
      console.log(response);
      dispatch(fetchPokeInfo(response));
    } catch (error) {
      console.log("error: ", error);
      dispatch(loadedApp(false, true, "No se pudo cargar la info del pokemon"));
    }
  }
}
export function getDetailAbilityById(id){

  return  async dispatch => {
     const consulta = await fetch("https://pokeapi.co/api/v2/ability/" + id)
      .then(response => response.json())
      .then(json => {
        if(json.effect_entries[0].language.name  == "en"){
          console.log(json.effect_entries[0]);
        dispatch(fetchDetallesHabilidad(json.effect_entries[0]))}
        else {
          dispatch(fetchDetallesHabilidad(json.effect_entries[1]));
         }
              //  dispatch(loadedApp(false, false, null));
      })
      .catch(error => {
        console.log("error: ", error);
        dispatch(loadedApp(false, true, "No se pudo cargar el detalle de la habilidad"));
       })
  }  

}
