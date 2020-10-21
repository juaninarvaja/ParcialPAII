import React from 'react';
import Title from '../atoms/Title';

export default function NotFound() {

  return (<>
    <Title title={"404 pagina no encontrada"} className="pagina-no-encontrada"/>
    <h2>Asegurese de estar en la ruta valida "/listado"</h2>
    </>
  )
}