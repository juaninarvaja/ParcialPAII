import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import "../styles/Botones.css";

import Title from '../atoms/Title';
import PokeAvatar from '../atoms/PokeAvatar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Habilidad from '../pages/Habilidad';


export default function PokeRow({ pokeInfo, handleGoBack }) {

  return (
    <div>
      {
        pokeInfo !== undefined && (
          <div>
            <Card className={"card-poke-container"} style={{backgroundColor: "#ff9292"}}>
              <CardContent>
                <Title className={"titulo"} title={pokeInfo.name[0].toUpperCase() + pokeInfo.name.slice(1)} />
                <GridList cellHeight={160}cols={2}>
                  {pokeInfo.imgUrl.map((img) => (
                    <GridListTile key={img}>
                      <PokeAvatar alt={pokeInfo.name} src={img} />
                    </GridListTile>
                  ))}
                </GridList>
                <h3>Rango:</h3>
                <div>
                { pokeInfo.range}
                  <img className="imagen-rango" src= "/assets/rango.png"></img>
                 
                </div>
           
                <Title title={pokeInfo.abilities.length > 0 ? "Habilidades:" : "No tiene habiliad especial"} />
                {
                  pokeInfo.abilities.length > 0
                  && pokeInfo.abilities.map(poke => {
                    return <> 
                    <Button
                    variant="contained"
                    color="primary"
                    href={"/habilidad/" + poke.ability.url.split('/')[6]}
                    size="small"
                  >
                    habilidad {poke.ability.name[0].toUpperCase() + poke.ability.name.slice(1)}
                  </Button>
                  <br/><br/>
                            </>
                  })
                }
              </CardContent>
              <CardActions className={"card-back-button"}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleGoBack}
                  size="small"
                >
                 {" < Back"} 
                </Button>
              </CardActions>
            </Card>
          </div>
        )
      }
    </div>
  )
}
