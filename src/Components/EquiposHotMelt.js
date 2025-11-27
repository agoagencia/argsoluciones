import React from 'react'
import E1 from "../img/productos/SistemaSellos/Equipos Hot Melt/1.-Sistema de fusion de volumen Therm-O-Flow 20.jpg"
import E2 from "../img/productos/SistemaSellos/Equipos Hot Melt/2.-Sistema de fusion de volumen Therm-O-Flow 200.jpg"


import './equiposHotMelt.css'
import {Link} from "react-router-dom";

function EquiposHotMelt() {
  return (
    <div className='equipos_hot_melt'>
    <div><Link to="/EquiposHotMelt1"><img src={E1}></img><br/>Sistema de fusion de volumen<br/> Therm-O-Flow 20<br/></Link></div>
    <div><Link to="/EquiposHotMelt2"><img src={E2}></img><br/>Sistema de fusion de volumen<br/> Therm-O-Flow 200</Link></div>
    
    </div>
  )
}

export default EquiposHotMelt;