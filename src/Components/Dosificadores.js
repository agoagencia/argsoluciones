import React from 'react'
import D1 from "../img/productos/Equipos de pintura/Dosificadores/1.-Dosificador de componentes plurales ProMix 2KE.jpg"
import D2 from "../img/productos/Equipos de pintura/Dosificadores/2.-Dosificador ProMix 2KS Manual.jpg"
import D3 from "../img/productos/Equipos de pintura/Dosificadores/3.-Dosificador ProMix 3KS.jpg"
import D4 from "../img/productos/Equipos de pintura/Dosificadores/4.-Dosificadores ProMix PD2K.jpg"
import D5 from "../img/productos/Equipos de pintura/Dosificadores/5.-IntelliFlow RM2 Electronic.jpg"
import D6 from "../img/productos/Equipos de pintura/Dosificadores/6.-Ransburg IntelliFlow RF2.jpg"

import './dosificadores.css'
import {Link} from "react-router-dom";

function Dosificadores() {
  return (
    <div className='dosificadores'>
    <div><Link to="/dosificador1"><img src={D1}></img><br/>Dosificador de componentes<br/>plurales ProMix 2KE</Link></div>
    <div><Link to="/dosificador2"><img src={D2}></img><br/>Dosificador ProMix<br/> 2KS Manual</Link></div>
    <div><Link to="/dosificador3"><img src={D3}></img><br/>Dosificador ProMix<br/> 3KS</Link></div>
    <div><Link to="/dosificador4"><img src={D4}></img><br/>Dosificadores ProMix<br/> PD2K</Link></div>
    <div><Link to="/dosificador5"><img src={D5}></img><br/>IntelliFlow RM2<br/> Electronic</Link></div>
    <div><Link to="/dosificador6"><img src={D6}></img><br/>Ransburg IntelliFlow<br/> RF2</Link></div>
    
    </div>
  )
}

export default Dosificadores;