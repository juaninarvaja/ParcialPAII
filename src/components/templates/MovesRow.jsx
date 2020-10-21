import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import "../styles/Botones.css";
import { useHistory, useParams } from 'react-router-dom';
import Title from '../atoms/Title';
import PokeAvatar from '../atoms/PokeAvatar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function MovesRow({ movimientos, handleGoBack }) {
  let history = useHistory();
  let { id } = useParams();
  const back = () => {
    history.push("/listado");
  }
  console.log(movimientos?.length);
  return ( <>

    <div>
        Cantidad de habilidades: {movimientos?.length}
      {
        movimientos?.map((currElement, index) => {
          console.log(currElement.version_group_details);
          return (<>
           <Card className={"card-poke-container"} style={{backgroundColor: "#ff9292"}}>
              <CardContent>
            <Title key={index} title={currElement.move.name[0].toUpperCase() + currElement.move.name.slice(1)}></Title>
            <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell className={"titles"}>Nivel aprendido</TableCell>
                          <TableCell className={"titles"}>Move learn method:</TableCell>
                          <TableCell className={"titles"}>Move learn method:</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
            
            {
              currElement.version_group_details?.map((currElement, index) => {

                return (<>

                        <tr>
                          <td>{currElement.level_learned_at}</td>
                         
                          <td> {currElement.move_learn_method?.name}</td>
                        
                          <td>  {currElement.version_group.name}</td>

                        </tr>
                               
                            </>)
                          })
                        }
                          </TableBody>
                        </Table>
                        </TableContainer>
                        </CardContent>
                        </Card>
                      </>)
                    })
                  }

{/*          
        <Card className={"card-poke-container"} style={{backgroundColor: "#ff9292"}}>
              <CardContent>
                <Title className={"titulo"} title={"Detalle Habilidad"} />

                
                <h6> {habilidadInfo?.effect} </h6>
                <div>

                  <img className="imagen-pokeball" src= "/assets/pokeball.png"></img>
                 
                </div>
              </CardContent>
        <CardActions className={"card-back-button"}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={back}
                  size="small"
                >
                 {" < Back"} 
                </Button>
              </CardActions>
              </Card>  */}
      </div>
                </>)
              }
