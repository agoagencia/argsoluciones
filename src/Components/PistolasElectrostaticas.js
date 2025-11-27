import React from 'react'
import PistolaElectrostatica1 from "../img/productos/Equipos de pintura/Pistolas electrostáticas/1.-Pistola de pulverizacion electrostatica Pro Xp.jpg"
import PistolaElectrostatica2 from "../img/productos/Equipos de pintura/Pistolas electrostáticas/2.-Pistola electrostatica Pro Xp Automatica.jpg"


import {Link} from "react-router-dom"

import './pistolasElectrostaticas.css'

function PistolasElectrostaticas() {
  return (
    <div className='pistolas_electrostaticas'>
    <div><Link to="/pistola_electrostatica1"><img src={PistolaElectrostatica1}></img><br/>Pistola de pulverizacion <br/>electrostatica Pro Xp</Link></div>
    <div><Link to="/pistola_electrostatica2"><img src={PistolaElectrostatica2}></img><br/>Pistola electrostatica <br/>Pro Xp Automatica</Link></div>



    </div>
  )
}

export default PistolasElectrostaticas