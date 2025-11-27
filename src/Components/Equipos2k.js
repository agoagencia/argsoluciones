import React from 'react'
import E1 from "../img/productos/SistemaSellos/Equipos 2k/1.-Dosificador PR70.jpg"
import E2 from "../img/productos/SistemaSellos/Equipos 2k/2.-Sistema medidor, mezclador y dosificador EFR.jpg"
import E3 from "../img/productos/SistemaSellos/Equipos 2k/3.-Sistema para sellos HFR.jpg"

import './equipos2k.css'
import {Link} from "react-router-dom";

function Equipos2k() {
  return (
    <div className='equipos2k'>
    <div><Link to="/Equipo2k1"><img src={E1}></img><br/>Dosificador PR70</Link></div>
    <div><Link to="/Equipo2k2"><img src={E2}></img><br/>Sistema medidor, mezclador<br/> y dosificador EFR</Link></div>
    <div><Link to="/Equipo2k3"><img src={E3}></img><br/>Sistema para sellos HFR</Link></div>
    </div>
  )
}

export default Equipos2k;