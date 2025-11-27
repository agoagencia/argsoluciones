import React from 'react'
import {Link} from "react-router-dom"
import BombaAltaPresion1 from "../img/productos/ManejoFluidos/Bombas de alta presión/1.-Bomba de alta presion de 2” Aro PH20F-ASP-STT-B.jpg"



import './bombasAltaPresion.css'

function BombasAltaPresion() {
  return (
    <div className='bombas_alta_presion'>
    <div><Link to="/bomba_alta_presion1"><img src={BombaAltaPresion1}></img><br/>Bomba de alta presion de 2”<br/> Aro PH20F-ASP-STT-B</Link></div>


    </div>
  )
}

export default BombasAltaPresion