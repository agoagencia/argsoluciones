import React from 'react'
import {Link} from "react-router-dom"
import EquipoAutomatizado1 from "../img/productos/Equipos de pintura/Equipos automatizados/1.-Aplicador giratorio ProBell Graco.jpg"
import EquipoAutomatizado2 from "../img/productos/Equipos de pintura/Equipos automatizados/2.-Dosificador de desplazamiento positivo Promix PD.jpg"
import EquipoAutomatizado3 from "../img/productos/Equipos de pintura/Equipos automatizados/3.-Ransburg RMA-580-590.jpg"
import EquipoAutomatizado4 from "../img/productos/Equipos de pintura/Equipos automatizados/4.-Sistema de dosificacion Promix 2KS Automatico.jpg"


import './equiposAutomatizados.css'

function EquiposAutomatizados() {
  return (
    <div className='equipos_automatizados'>
    <div><Link to="/equipo_automatizado1"><img src={EquipoAutomatizado1}></img><br/>Aplicador giratorio<br/> ProBell Graco</Link></div>
    <div><Link to="/equipo_automatizado2"><img src={EquipoAutomatizado2}></img><br/>Dosificador<br/> de desplazamiento<br/> positivo Promix PD</Link></div>
    <div><Link to="/equipo_automatizado3"><img src={EquipoAutomatizado3}></img><br/>Ransburg<br/> RMA-580-590</Link></div>
    <div><Link to="/equipo_automatizado4"><img src={EquipoAutomatizado4}></img><br/>Sistema de dosificacion <br/>Promix 2KS Automatico</Link></div>
    </div>
  )
}

export default EquiposAutomatizados