import React from 'react'
import adaptador1 from "../img/productos/adaptadores/1.-Adaptador de broca 440-tx-40x.jpg"
import adaptador2 from "../img/productos/adaptadores/2.-Adaptador Magnetico Apex M-490-2.jpg"
import adaptador3 from "../img/productos/adaptadores/3.-Adaptador Magnetico Apex m-490-2-or.jpg"
import {Link} from "react-router-dom"


import './adaptadores.css'

function Adaptadores() {
  return (
    <div className='adaptadores'>
    <div><Link to="/adaptador1"><img src={adaptador1}></img>Adaptador de broca 440-tx-40x</Link></div>
    <div><Link to="/adaptador2"><img src={adaptador2}></img>Adaptador Magnetico Apex M-490-2</Link></div>
    <div><Link to="/adaptador3"><img src={adaptador3}></img>Adaptador Magnetico Apex m-490-2-or</Link></div>

    </div>
  )
}

export default Adaptadores