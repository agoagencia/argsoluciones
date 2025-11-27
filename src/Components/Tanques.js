import React from 'react'
import Tanque1 from "../img/productos/Equipos de pintura/Tanques/1.-Olla de presion 236152.jpg"





import {Link} from "react-router-dom"

import './tanques.css'

function Tanques() {
  return (
    <div className='tanques'>
    <div><Link to="/tanque1"><img src={Tanque1}></img><br/>Olla de presion 236152</Link></div>

    

    </div>
  )
}

export default Tanques