import React from 'react'
import SM1 from "../img/productos/Equipos de pintura/Sistemas de medición/1.-Sistema de control de flujo electronico monocomponente ProControl 1KS.jpg"
import SM2 from "../img/productos/Equipos de pintura/Sistemas de medición/2.-Sistema de control y supervision de fluidos en linea ProControl 1KE Plus.jpg"
import SM3 from "../img/productos/Equipos de pintura/Sistemas de medición/3.-Sistema de dispensacion electronico preestablecido ProDispense.jpg"


import './sistemaMedicion.css'
import {Link} from "react-router-dom";

function SistemaMedicion() {
  return (
    <div className='sistema_medicion'>
    <div><Link to="/sistemaMedicion1"><img src={SM1}></img><br/>Dosificador de componentes<br/>plurales ProMix 2KE</Link></div>
    <div><Link to="/sistemaMedicion2"><img src={SM2}></img><br/>Dosificador ProMix<br/> 2KS Manual</Link></div>
    <div><Link to="/sistemaMedicion3"><img src={SM3}></img><br/>Dosificador ProMix<br/> 3KS</Link></div>
   </div>
  )
}

export default SistemaMedicion;