import React from 'react'
/* import BalancinE1 from "../img/productos/manejoDeMateriales/BalancinesElectricos/1.-Balancin mecanico 220KA.jpg" */
import BalancinE2 from "../img/productos/manejoDeMateriales/BalancinesElectricos/2.-Balancin mecanico BHR-15.jpg"
import BalancinE3 from "../img/productos/manejoDeMateriales/BalancinesElectricos/3.-Balancin mecanico BMDL-4.jpg"
/* import BalancinE4 from "../img/productos/manejoDeMateriales/BalancinesElectricos/4.-Balancin mecanico EB35000.jpg" */
import './balancinesElectricos.css'
import {Link} from "react-router-dom"

function BalancinesElectricos() {
  return (
    <div className='balancinesElectricos'>
   {/*  <div><Link to="/balancinE1"><img src={BalancinE1}></img></Link></div> */}
    <div><Link to="/balancinE2"><img src={BalancinE2}></img><br/>Balancin mecanico<br/> BHR-15</Link></div>
    <div><Link to="/balancinE3"><img src={BalancinE3}></img><br/>Balancin mecanico<br/> BMDL-4</Link></div>
    {/* <div><Link to="/balancinE4"><img src={BalancinE4}></img></Link></div> */}


    </div>
  )
}

export default BalancinesElectricos