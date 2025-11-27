import React from 'react'
import {Link} from "react-router-dom"
import BombaTP1 from "../img/productos/ManejoFluidos/Bombas transferencia de polvos/1.-Bomba para polvos Aro PP20A-AAS-AAA.jpg"
import BombaTP2 from "../img/productos/ManejoFluidos/Bombas transferencia de polvos/2.-Bombas para transferencia de polvo de 3”Aro PP30A-AAS-AAA.jpg"


import './bombasTransfPolvos.css'

function BombasTransfPolvos() {
  return (
    <div className='bombas_transf_polvos'>
    <div><Link to="/bomba_transf_polvos1"><img src={BombaTP1}></img><br/>Bomba de pistón chop check <br/> Aro AF0623S11RK47</Link></div>
    <div><Link to="/bomba_transf_polvos2"><img src={BombaTP2}></img><br/>Bomba de pistón chop check<br/> Aro NM2322E-11-P43</Link></div>


    </div>
  )
}

export default BombasTransfPolvos