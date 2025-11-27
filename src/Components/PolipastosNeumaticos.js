import React from 'react'
import PolipastoNeumatico1 from "../img/productos/manejoDeMateriales/PolipastosNeumaticos/1.-Polipasto de cadena neumatico 7756E-2C10-C6S.jpg"
import PolipastoNeumatico2 from "../img/productos/manejoDeMateriales/PolipastosNeumaticos/2.-Polipasto neumatico 7776E-2C10-C6S.jpg"
import PolipastoNeumatico3 from "../img/productos/manejoDeMateriales/PolipastosNeumaticos/3.-Polipasto neumatico CL250K-2C10-C6U.jpg"
import PolipastoNeumatico4 from "../img/productos/manejoDeMateriales/PolipastosNeumaticos/4.-Polipasto neumatico CL500K-2C10-C6U.jpg"
import PolipastoNeumatico5 from "../img/productos/manejoDeMateriales/PolipastosNeumaticos/5.-Polipasto neumatico ML1000K-2C10-C6U.jpg"
import PolipastoNeumatico6 from "../img/productos/manejoDeMateriales/PolipastosNeumaticos/6.-Polipasto neumatico ML250K-2C10-B6U.jpg"
import {Link} from "react-router-dom"


import './polipastosNeumaticos.css'

function PolipastosNeumaticos() {
  return (
    <div className='polipastosNeumaticos'>
    <div><Link to="/polipastoN1"><img src={PolipastoNeumatico1}></img><br/>Polipasto de cadena<br/> neumatico<br/> 7756E-2C10-C6S</Link></div>
    <div><Link to="/polipastoN2"><img src={PolipastoNeumatico2}></img><br/>Polipasto neumatico<br/> 7776E-2C10-C6S</Link></div>
    <div><Link to="/polipastoN3"><img src={PolipastoNeumatico3}></img><br/>Polipasto neumatico<br/> CL250K-2C10-C6U</Link></div>
    <div><Link to="/polipastoN4"><img src={PolipastoNeumatico4}></img><br/>Polipasto neumatico<br/> CL500K-2C10-C6U</Link></div>
    <div><Link to="/polipastoN5"><img src={PolipastoNeumatico5}></img><br/>Polipasto neumatico<br/> ML1000K-2C10-C6U</Link></div>
    <div><Link to="/polipastoN6"><img src={PolipastoNeumatico6}></img><br/>Polipasto neumatico<br/> ML250K-2C10-B6U</Link></div>


    </div>
  )
}

export default PolipastosNeumaticos