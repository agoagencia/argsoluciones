import React from 'react'
import accesorio1 from "../img/productos/resistenciasConLogo/1.-Resistencias tipo tubular.jpg"
import accesorio2 from "../img/productos/resistenciasConLogo/2.-Resistencia eléctrica tipo banda.jpg"
import accesorio3 from "../img/productos/resistenciasConLogo/3.-Resistencia tipo cartucho.jpg"
import accesorio4 from "../img/productos/resistenciasConLogo/4.-Resistencia tipo Mica.jpg"
import accesorio5 from "../img/productos/resistenciasConLogo/5.-Frenado Dinámico.jpg"
import accesorio6 from "../img/productos/resistenciasConLogo/6.-Resistencias de fabricación especial.jpg"
import accesorio7 from "../img/productos/resistenciasConLogo/7.-Bandas de núcleo cerámico.jpg"
import {Link} from "react-router-dom";

import './resistenciasLogo.css'

function ResistenciasLogo() {
  return (
    <div className='resistenciasLogo'>

      
    <div><Link to="/resistencia1"><img src={accesorio1}></img><br/>Resistencias <br/>tipo tubular</Link></div>
    <div><Link to="/resistencia2"><img src={accesorio2}></img><br/>Resistencia eléctrica<br/> tipo banda</Link></div>
    <div><Link to="/resistencia3"><img src={accesorio3}></img><br/>Resistencia<br/> tipo cartucho.jpg</Link></div>
    <div><Link to="/resistencia4"><img src={accesorio4}></img><br/>Resistencia<br/> tipo Mica</Link></div>
    <div><Link to="/resistencia5"><img src={accesorio5}></img><br/>Frenado Dinámico</Link></div>
    <div><Link to="/resistencia6"><img src={accesorio6}></img><br/>Resistencias<br/> de fabricación especial</Link></div>
    <div><Link to="/resistencia7"><img src={accesorio7}></img><br/>Bandas de núcleo<br/> cerámico</Link></div>

    </div>
  )
}

export default ResistenciasLogo