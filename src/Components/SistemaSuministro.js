import React from 'react'
import S1 from "../img/productos/SistemaSellos/Sistema de Suministro/1.-Bombas electricas y sistemas de suministro E-Flo SP.jpg"
import S2 from "../img/productos/SistemaSellos/Sistema de Suministro/2.-Sistemas de suministro de fusion en templado Warm Melt.jpg"


import './sistemaSuministro.css'
import {Link} from "react-router-dom";

function SistemaSuministro() {
  return (
    <div className='sistema_suministro'>
    <div><Link to="/SistemaSuministro1"><img src={S1}></img><br/>Bombas electricas y sistemas <br/>de suministro E-Flo SP</Link></div>
    <div><Link to="/SistemaSuministro2"><img src={S2}></img><br/>Sistemas de suministro de fusion<br/> en templado Warm Melt</Link></div>
    
    </div>
  )
}

export default SistemaSuministro;