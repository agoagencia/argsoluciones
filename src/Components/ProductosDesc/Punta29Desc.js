import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/puntas/29.-Punta Torx Apex 854-tx-50.jpg';
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
        <h2>Punta Torx 854-tx-50</h2><br/>
        <p><strong>SKU:</strong> 854-tx-50</p>
        <p><strong>Categorías:</strong> Puntas</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Punta torx 854-tx-50, 1/2 longitud
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Cuadro: 1/2<br/><br/>

Longitud: 73 mm<br/><br/>

Diámetro: 8.2 mm
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>z

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc