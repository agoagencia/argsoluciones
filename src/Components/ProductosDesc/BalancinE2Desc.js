import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/manejoDeMateriales/BalancinesElectricos/2.-Balancin mecanico BHR-15.jpg';
/* import imgPruebaa from "../img/productos/HerramientaElectrica/HerramientaElectricaBateria/1._Llave_angular_inalambrica_QXN.jpg" */
import {Link} from "react-router-dom"

//falta descripción: 
// 1, 8, 



function HerramientaElectricaBateria1Desc() {
  return (
    <div className='herramientaElectricaBateria1Desc'>

      <div className='herramientaElectricaBateria1Desc_left'>
        <img src={imgPruebaa}></img>
      </div>

      <div className='herramientaElectricaBateria1Desc_right'>
        <h2>Balancin mecánico BHR-15</h2><br/>
        <p><strong>SKU:</strong> BHR-15</p>
        <p><strong>Categorías:</strong> Cerámica, Ingersoll Rand Cerámica, Ingersoll Rand, Balancines mecánicos</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Ingersoll Rand balancin  bhr-15 1.5 – 3.33 lbs de capacidad
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Peso: 2.64 Lbs. <br/><br/>

Levante: 4-1 / 4 pies<br/><br/>

Capacidad 1.5 - 3.33 Lbs.<br/><br/>

Tama?o de la boquilla de la manguera: 1/4 "NPT<br/><br/>

CFM cuando la manguera esta extendida: 18.4
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc