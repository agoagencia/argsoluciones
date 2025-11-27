import React from 'react'
import BalancinNeumatico1 from "../img/productos/manejoDeMateriales/BalancinesNeumaticos/1.-Balancin neumatico BW015080.jpg"
import BalancinNeumatico2 from "../img/productos/manejoDeMateriales/BalancinesNeumaticos/2.-Balancin neumatico BW035080.jpg"
import BalancinNeumatico3 from "../img/productos/manejoDeMateriales/BalancinesNeumaticos/3.-Balancin neumatico ZAW035080.jpg"
import {Link} from "react-router-dom"

import './balancinesNeumaticos.css'

function BalancinesNeumaticos() {
  return (
    <div className='balancinesNeumaticos'>
    <div><Link to="/balancinN1"><img src={BalancinNeumatico1}></img><br/>Balancin neumatico<br/> BW015080</Link></div>
    <div><Link to="/balancinN2"><img src={BalancinNeumatico2}></img><br/>Balancin neumatico<br/> BW035080</Link></div>
    <div><Link to="/balancinN3"><img src={BalancinNeumatico3}></img><br/>Balancin neumatico<br/> ZAW035080</Link></div>



    </div>
  )
}

export default BalancinesNeumaticos