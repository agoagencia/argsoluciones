import React from 'react'
import PolipastoElectrico1 from "../img/productos/manejoDeMateriales/PolipastosElectricos/1.-Polipasto Electrico de Cadena de 2 t. ELK100-2ND200.jpg"
import PolipastoElectrico2 from "../img/productos/manejoDeMateriales/PolipastosElectricos/2.-Polipasto Electrico de Cadena de 1-2 tonelada ELK50-1ND50.jpg"
import PolipastoElectrico3 from "../img/productos/manejoDeMateriales/PolipastosElectricos/3.-Polipasto Electrico de Cadena de 1-4 t. ELK25-1ND25.jpg"
import PolipastoElectrico4 from "../img/productos/manejoDeMateriales/PolipastosElectricos/4.-Polipasto eléctricos de Cadena Serie F.jpg"
import PolipastoElectrico5 from "../img/productos/manejoDeMateriales/PolipastosElectricos/5.-Polipasto eléctricos de Cadena Serie FS.jpg"
import PolipastoElectrico6 from "../img/productos/manejoDeMateriales/PolipastosElectricos/6.-Polipasto eléctricos de Cadena Serie S.jpg"
import PolipastoElectrico7 from "../img/productos/manejoDeMateriales/PolipastosElectricos/7.-Polipasto eléctricos de Cadena Serie L Hitachi.jpg"
import PolipastoElectrico8 from "../img/productos/manejoDeMateriales/PolipastosElectricos/8.-Trolley-(chain-driven).jpg"
import PolipastoElectrico9 from "../img/productos/manejoDeMateriales/PolipastosElectricos/9.-Trolley-(motorized).jpg"
import {Link} from "react-router-dom"

import './polipastosElectricos.css'

function PolipastosElectricos() {
  return (
    <div className='polipastosElectricos'>
    <div><Link to="/polipastoE1"><img src={PolipastoElectrico1}></img><br/>Polipasto Electrico de Cadena<br/> de 2 t. ELK100-2ND200</Link></div>
    <div><Link to="/polipastoE3"><img src={PolipastoElectrico2}></img><br/>Polipasto Electrico de Cadena<br/> de 1-2 tonelada ELK50-1ND50</Link></div>
    <div><Link to="/polipastoE4"><img src={PolipastoElectrico3}></img><br/>Polipasto Electrico de Cadena <br/>de 1-4 t. ELK25-1ND25</Link></div>
    <div><Link to="/polipastoE5"><img src={PolipastoElectrico4}></img><br/>Polipasto eléctricos de Cadena<br/> Serie F</Link></div>
    <div><Link to="/polipastoE6"><img src={PolipastoElectrico5}></img><br/>Polipasto eléctricos de Cadena<br/> Serie FS</Link></div>
    <div><Link to="/polipastoE7"><img src={PolipastoElectrico6}></img><br/>Polipasto eléctricos<br/> de Cadena Serie S</Link></div>
    <div><Link to="/polipastoE8"><img src={PolipastoElectrico7}></img><br/>Polipasto eléctricos<br/> de Cadena Serie L Hitachi</Link></div>
    <div><Link to="/polipastoE9"><img src={PolipastoElectrico8}></img><br/>Trolley-(chain-driven)</Link></div>
    <div><Link to="/polipastoE9"><img src={PolipastoElectrico9}></img><br/>Trolley-(motorized)</Link></div>


    </div>
  )
}

export default PolipastosElectricos