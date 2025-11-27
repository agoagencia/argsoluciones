import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaVehicleService/1.-Amoladora angular 301B32MK Ingersoll Rand.jpg';
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
        <h2>Amoladora angular 301B32MK Ingersoll Rand</h2><br/>
        <p><strong>SKU:</strong> 301B32MK</p>
        <p><strong>Categorías:</strong> Herramientas vehicle service, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          301b32mk Amoladora angular Ingersoll rand
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tamaño de la manguera: 3/8"<br/><br/>

Boquillas de 1/4 y 6 mm<br/><br/>

Consumo de aire: 6CFM(170)<br/><br/>

Motor handlePowerful
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc