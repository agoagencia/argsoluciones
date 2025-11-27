import React from 'react'
import V1 from "../img/productos/SistemaSellos/Válvulas de Dispensación/1.-Valvula de dispensacion MD2.jpg"
import V2 from "../img/productos/SistemaSellos/Válvulas de Dispensación/2.-Valvula de medicion, mezclado y dispensacion patentada PD44.jpg"


import './valvulasDispensacion.css'
import {Link} from "react-router-dom";

function ValvulasDispensacion() {
  return (
    <div className='valvulas_dispensacion'>
    <div><Link to="/ValvulaDispensacion1"><img src={V1}></img><br/>Valvula de dispensacion MD2</Link></div>
    <div><Link to="/ValvulaDispensacion2"><img src={V2}></img><br/>Valvula de medicion, mezclado<br/> y dispensacion patentada PD44</Link></div>
    
    </div>
  )
}

export default ValvulasDispensacion;