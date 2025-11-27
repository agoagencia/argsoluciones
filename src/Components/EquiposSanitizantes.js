import React from 'react'
import EquipoSanitizante1 from "../img/productos/Equipos de pintura/Equipos sanitizantes/1.-Sanispray HP 130 25R793.jpg"
import EquipoSanitizante2 from "../img/productos/Equipos de pintura/Equipos sanitizantes/2.-SaniSpray HP 20 25R791.jpg"
import EquipoSanitizante3 from "../img/productos/Equipos de pintura/Equipos sanitizantes/3.-SaniSpray HP 65 25R792.jpg"



import {Link} from "react-router-dom"

import './equiposSanitizantes.css'

function EquiposSanitizantes() {
  return (
    <div className='equipos_sanitizantes'>
    <div><Link to="/equipo_sanitizante1"><img src={EquipoSanitizante1}></img><br/>Sanispray HP 130 25R793</Link></div>
    <div><Link to="/equipo_sanitizante2"><img src={EquipoSanitizante2}></img><br/>SaniSpray HP 20 25R791</Link></div>
    <div><Link to="/equipo_sanitizante3"><img src={EquipoSanitizante3}></img><br/>SaniSpray HP 65 25R792</Link></div>

    </div>
  )
}

export default EquiposSanitizantes