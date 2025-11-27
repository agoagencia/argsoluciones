import React from 'react'
import {Link} from "react-router-dom"
import BombaCentrifuga1 from "../img/productos/ManejoFluidos/Bomba centrifuga/1.-Bomba centrifuga de tambor SaniForce Graco.jpg"

import './bombasCentrifugas.css'

function BombasCentrifugas() {
  return (
    <div className='bombas_centrifugas'>
    <div><Link to="/bomba_centrifuga1"><img src={BombaCentrifuga1}></img><br/>Bomba centrifuga de tambor<br/> SaniForce Graco</Link></div>

    </div>
  )
}

export default BombasCentrifugas