import React from 'react'
import SMEP1 from "../img/productos/Equipos de pintura/Sistemas de medición/1.-Sistema de control de flujo electronico monocomponente ProControl 1KS.jpg"
import SMEP2 from "../img/productos/Equipos de pintura/Sistemas de medición/2.-Sistema de control y supervision de fluidos en linea ProControl 1KE Plus.jpg"
import SMEP3 from "../img/productos/Equipos de pintura/Sistemas de medición/3.-Sistema de dispensacion electronico preestablecido ProDispense.jpg"


import './sistemaMedicionEqPintura.css'
import {Link} from "react-router-dom";

function SistemaMedicionEqPintura() {
  return (
    <div className='sistemaMedicionEqPintura'>
    <div><Link to="/SistemaMedicionEq1"><img src={SMEP1}></img><br/>Sistema de control de flujo electronico<br/>monocomponente ProControl 1KS</Link></div>
    <div><Link to="/SistemaMedicionEq2"><img src={SMEP2}></img><br/>Sistema de control y supervision <br/>de fluidos en linea ProControl 1KE Plus</Link></div>
    <div><Link to="/SistemaMedicionEq3"><img src={SMEP3}></img><br/>Sistema de dispensacion electronico<br/> preestablecido ProDispense</Link></div>
    
    </div>
  )
}

export default SistemaMedicionEqPintura;