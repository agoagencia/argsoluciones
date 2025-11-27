import React from 'react'
import EquipoCurado1 from "../img/productos/Equipos de pintura/Equipos de curado/1.-BGK Autocure Infrarrojo Curado.jpg"

import './equiposCurado.css'
import {Link} from "react-router-dom";

function EquiposCurado() {
  return (
    <div className='equipos_curado'>
 <div><Link to="/equipo_curado1"><img src={EquipoCurado1}></img><br/>BGK Autocure<br/> Infrarrojo Curado</Link></div>
    
    
    </div>
  )
}

export default EquiposCurado