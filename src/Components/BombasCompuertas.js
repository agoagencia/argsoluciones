import React from 'react'
import {Link} from "react-router-dom"
import BombaCompuerta1 from "../img/productos/ManejoFluidos/Bombas de compuertas/1.-Bomba de compuertas de 2” Aro PF20A-AAS-SAA-B.jpg"
import BombaCompuerta2 from "../img/productos/ManejoFluidos/Bombas de compuertas/2.-Bomba de compuertas de 2” Aro PF20R-ASS-SVT-B.jpg"



import './bombasCompuertas.css'

function BombasCompuertas() {
  return (
    <div className='bombas_compuertas'>
    <div><Link to="/bomba_compuerta1"><img src={BombaCompuerta1}></img><br/>Bomba de compuertas de 2” <br/>Aro PF20A-AAS-SAA-B</Link></div>
    <div><Link to="/bomba_compuerta2"><img src={BombaCompuerta2}></img><br/>Bomba de compuertas de 2”<br/> Aro PF20R-ASS-SVT-B</Link></div>


    </div>
  )
}

export default BombasCompuertas