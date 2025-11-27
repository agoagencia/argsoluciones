import React from 'react'
import {Link} from "react-router-dom"
import bombaSuministro1 from "../img/productos/Equipos de pintura/Bombas de suministro/1.-Bomba de 2 bolas Monark Graco.jpg"
import bombaSuministro2 from "../img/productos/Equipos de pintura/Bombas de suministro/2.-Bomba de 2 bolas President Graco.jpg"
import bombaSuministro3 from "../img/productos/Equipos de pintura/Bombas de suministro/3.-Bomba de diafragma DX70.jpg"
import bombaSuministro4 from "../img/productos/Equipos de pintura/Bombas de suministro/4.-Bomba de piston electrica E-Flo.jpg"
import bombaSuministro5 from "../img/productos/Equipos de pintura/Bombas de suministro/5.-Bomba Endura-Flo.jpg"
import bombaSuministro6 from "../img/productos/Equipos de pintura/Bombas de suministro/6.-Bombas de embolo Glutton.jpg"
import bombaSuministro7 from "../img/productos/Equipos de pintura/Bombas de suministro/7.-Bombas de pisaton Dura-Flo.jpg"
import bombaSuministro8 from "../img/productos/Equipos de pintura/Bombas de suministro/8.-Triton 11 de la Serie 150.jpg"

import './bombasSuministro.css'

function BombasSuministro() {
  return (
    <div className='bombas_suministro'>
    <div><Link to="/bomba_suministro1"><img src={bombaSuministro1}></img><br/>Bomba de 2 bolas<br/> Monark Graco</Link></div>
    <div><Link to="/bomba_suministro2"><img src={bombaSuministro2}></img><br/>Bomba de 2 bolas <br/>President Graco</Link></div>
    <div><Link to="/bomba_suministro3"><img src={bombaSuministro3}></img><br/>Bomba de diafragma<br/> DX70</Link></div>
    <div><Link to="/bomba_suministro4"><img src={bombaSuministro4}></img><br/>Bomba de piston <br/>electrica E-Flo</Link></div>
    <div><Link to="/bomba_suministro5"><img src={bombaSuministro5}></img><br/>Bomba Endura-Flo<br/><br/></Link></div>
    <div><Link to="/bomba_suministro6"><img src={bombaSuministro6}></img><br/>Bombas de embolo <br/>Glutton</Link></div>
    <div><Link to="/bomba_suministro7"><img src={bombaSuministro7}></img><br/>Bombas de pisaton <br/>Dura-Flo</Link></div>
    <div><Link to="/bomba_suministro8"><img src={bombaSuministro8}></img><br/>Triton 11 <br/>de la Serie 150</Link></div>
    </div>
  )
}

export default BombasSuministro