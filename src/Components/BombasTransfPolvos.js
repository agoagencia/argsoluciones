import React from 'react'
import {Link} from "react-router-dom"
import BombaTP1 from "../img/productos/ManejoFluidos/Bombas transferencia de polvos/1.-Bomba para polvos Aro PP20A-AAS-AAA.jpg"
import BombaTP2 from "../img/productos/ManejoFluidos/Bombas transferencia de polvos/2.-Bombas para transferencia de polvo de 3”Aro PP30A-AAS-AAA.jpg"


import './bombasTransfPolvos.css'

function BombasTransfPolvos() {
  return (
    <div className='bombas_transf_polvos'>
    <div><Link to="/bomba_transf_polvos1"><img src={BombaTP1}></img><br/>Bomba para polvos Aro<br/> PP20A-AAS-AAA</Link></div>
    <div><Link to="/bomba_transf_polvos2"><img src={BombaTP2}></img><br/>Bomba para transferencia de polvo<br/> de 3”Aro PP30A-AAS-AAA</Link></div>


    </div>
  )
}

export default BombasTransfPolvos