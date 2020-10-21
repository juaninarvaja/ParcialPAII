import React from 'react';
import '../styles/PokeStyles.css';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../atoms/Title';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import "../styles/Listado.css";
import { getPokeById } from '../../redux/ducks/pokeDuck';
import { useDispatch, useSelector } from 'react-redux';


export default function PokeList({ pokemons, previous, next, count, handleOnClick, rowsPerPage, cantidadPokemonesPorPagina }) {
  const dispatch = useDispatch();
  // useEffect(() => {
  
  // }, [dispatch, id])
  console.log(pokemons);
  return (
    <div>
      <div className={"cantidad"}>
        <label >Cantidad por pagina:</label>
        <Select
          value={rowsPerPage}
          onChange={cantidadPokemonesPorPagina}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </div>
      {
        (Array.isArray(pokemons) && pokemons.length > 0)
        && <>
          {/* <Title title={"Cantidad:" + count} /> */}
          <Title title={"Pokemones:"} />
          <div className={"poke-table"}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className={"titles"}>Indice</TableCell>
                    <TableCell className={"titles"}>Pokemon</TableCell>
                    <TableCell className={"titles"}>Imagen</TableCell>
                    <TableCell className={"titles"}>Peso</TableCell>
                    <TableCell className={"titles"}>Altura</TableCell>
                    <TableCell className={"titles"} >Detalle</TableCell>
                    <TableCell className={"titles"} >Movimientos</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    pokemons.map((currElement, index) => {
                      
                      return (
                        <TableRow key={currElement.name}>
                          <TableCell scope="row" className={"poke-table-body"}>
                            {1 + index}
                          </TableCell>
                          <TableCell scope="row" className={"poke-table-body"}>
                            {currElement.name}
                          </TableCell>
                          <TableCell scope="row" className={"poke-table-body"}>
                           
                          </TableCell>
                          <TableCell scope="row" className={"poke-table-body"}>
                           
                          </TableCell>
                          <TableCell scope="row" className={"poke-table-body"}>
                           
                          </TableCell>
                          <TableCell  className={"poke-table-body"}>
                            <Button
                              variant="contained"
                              color="primary"
                              href={"/detalle/" + currElement.url.split('/')[6]}
                              size="small"
                            >
                              Detalle
                            </Button>
                          </TableCell>
                          <TableCell  className={"poke-table-body"}>
                            <Button
                              variant="contained"
                              color="primary"
                              href={"/movimientos/" + currElement.url.split('/')[6]}
                              size="small"
                            >
                              Movimientos
                            </Button>
                          </TableCell>
                        </TableRow>
                      )
                    })
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          <div>
            {
              previous !== null
              && <Button
                variant="contained"
                color="primary"
                onClick={() => handleOnClick(previous)}
                className={"boton"}
              >
                { "< Anterior"}
              </Button>
            }
            {
              next !== null
              && <Button
                variant="contained"
                color="primary"
                onClick={() => handleOnClick(next)}
                className={"boton"}
              >
               { "Siguiente >"}
              </Button>
            }
          </div>
        </>
      }
    </div>
  )
}

