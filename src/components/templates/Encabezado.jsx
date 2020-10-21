import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import "../styles/Encabezado.css";


export default function Encabezado() {
    let history = useHistory();
    const redirectHome = () => {
        history.push("/listado");
      }
    return(
        <div className="header" onClick={redirectHome}>
                 <img className= "imagenLogo" src="/assets/cab_pokedex.jpg"></img>
            <h5>Primer parcial Programación Avanzada 2</h5>
        </div>
    );
}