import React from 'react'
import {Link} from "react-router-dom"
import BombaInterfazElectronica1 from "../img/productos/ManejoFluidos/Bombas de interfaz electrónica/1.-Bomba con interfaz electronica de 1″ Aro PE10P-FPS-PAA-A00.jpg"
import BombaInterfazElectronica2 from "../img/productos/ManejoFluidos/Bombas de interfaz electrónica/2.-Bomba con interfaz electronica de 1-2” PE05P-ARS-PAA.jpg"


import './bombasInterfazElectronica.css'

function BombasInterfazElectronica() {
  return (
    <div className='bombas_interfaz_electronica'>
    <div><Link to="/bomba_interfaz_electronica1"><img src={BombaInterfazElectronica1}></img><br/>Bomba con interfaz electronica<br/> de 1″ Aro PE10P-FPS-PAA-A00</Link></div>
    <div><Link to="/bomba_interfaz_electronica2"><img src={BombaInterfazElectronica2}></img><br/>Bomba con interfaz electronica<br/> de 1-2” PE05P-ARS-PAA.jpg</Link></div>

    </div>
  )
}

export default BombasInterfazElectronica