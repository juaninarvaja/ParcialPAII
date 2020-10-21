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

export default function HabilidadRow({ habilidadInfo}) {
  let history = useHistory();
  let { id } = useParams();
  const back = () => {
    history.push("/listado");
  }
    return (
      <div>

        
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
              </Card>
      </div>
    )
  }
  