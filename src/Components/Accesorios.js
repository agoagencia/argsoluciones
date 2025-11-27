import React from 'react'
import accesorio1 from "../img/productos/accesorios/1.-Agitador 225883.jpg"
import accesorio2 from "../img/productos/accesorios/2.-Agitador aro 651100.jpg"
import accesorio3 from "../img/productos/accesorios/3.-Agitador neumatico 651103.jpg"
import accesorio4 from "../img/productos/accesorios/4.-Brazo mecanico QTA150.jpg"
import accesorio5 from "../img/productos/accesorios/5.-Cable electrico GEA40-C0RD-3M.jpg"
import accesorio6 from "../img/productos/accesorios/6.-Cilindro Provenair ANAQK-DGXA4-030.jpg"
import accesorio7 from "../img/productos/accesorios/7.-Clilindro neumatico 0176-1019-020.jpg"
import accesorio8 from "../img/productos/accesorios/8.-Cople Aro 636077.jpg"
import accesorio9 from "../img/productos/accesorios/9.-Filtro para material Aro 651420-40.jpg"
import accesorio10 from "../img/productos/accesorios/10.-Filtro regulador lubricador C38341-600.jpg"
import accesorio11 from "../img/productos/accesorios/11.-Frie -Ball Paquete de dispensador 222069.jpg"
import accesorio12 from "../img/productos/accesorios/12.-Kits para bomba 637140-44.jpg"
import accesorio13 from "../img/productos/accesorios/13.-Manguera espiral PS14-15CB2.jpg"
import accesorio14 from "../img/productos/accesorios/14.-Pistola despachadora 636111.jpg"
import accesorio15 from "../img/productos/accesorios/15.-Regulador de presion de fluido aro 651790-A3B-B.jpg"
import accesorio16 from "../img/productos/accesorios/16.-Valvula aro stop 635040.jpg"
import accesorio17 from "../img/productos/accesorios/17.-Valvula de aguja Aro 104104-NS2.jpg"
import './accesorios.css'
import {Link} from "react-router-dom"

function Accesorios() {
  return (
    <div className='accesorios'>
        <div><Link to="/accesorio1"><img src={accesorio1}></img><br/>Agitador 225883</Link></div>
        <div><Link to="/accesorio2"><img src={accesorio2}></img><br/>Agitador aro <br/>651100</Link></div>
        <div><Link to="/accesorio3"><img src={accesorio3}></img><br/>Agitador neumatico<br/> 651103</Link></div>
        <div><Link to="/accesorio4"><img src={accesorio4}></img><br/>Brazo mecanico <br/>QTA150</Link></div>
        <div><Link to="/accesorio5"><img src={accesorio5}></img><br/>Cable electrico <br/>GEA40-C0RD-3M</Link></div>
        <div><Link to="/accesorio6"><img src={accesorio6}></img><br/>Cilindro Provenair<br/> ANAQK-DGXA4-030</Link></div>
        <div><Link to="/accesorio7"><img src={accesorio7}></img><br/>Clilindro neumatico<br/> 0176-1019-020</Link></div>
        <div><Link to="/accesorio8"><img src={accesorio8}></img><br/>Cople Aro 636077</Link></div>
        <div><Link to="/accesorio9"><img src={accesorio9}></img><br/>Filtro para material<br/> Aro 651420-40</Link></div>
        <div><Link to="/accesorio10"><img src={accesorio10}></img><br/>Filtro regulador lubricador<br/> C38341-600</Link></div>
        <div><Link to="/accesorio11"><img src={accesorio11}></img><br/>Frie -Ball Paquete de dispensador<br/> 222069</Link></div>
        <div><Link to="/accesorio12"><img src={accesorio12}></img><br/>Kits para bomba<br/> 637140-44</Link></div>
        <div><Link to="/accesorio13"><img src={accesorio13}></img><br/>Manguera espiral<br/> PS14-15CB2</Link></div>
        <div><Link to="/accesorio14"><img src={accesorio14}></img><br/>Pistola despachadora<br/> 636111</Link></div>
        <div><Link to="/accesorio15"><img src={accesorio15}></img><br/>Regulador de presion de fluido<br/> aro 651790-A3B-B</Link></div>
        <div><Link to="/accesorio16"><img src={accesorio16}></img><br/>Valvula aro stop<br/> 635040</Link></div>
        <div><Link to="/accesorio17"><img src={accesorio17}></img><br/>Valvula de aguja Aro 104104-NS2</Link></div>
    </div>
  )
}

export default Accesorios