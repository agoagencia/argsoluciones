import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/dados/3.-Dado corto Apex 13MM13.jpg';
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
        <h2>Dado corto 13MM13</h2><br/>
        <p><strong>SKU:</strong> 13MM13 </p>
        <p><strong>Categorías:</strong> Dados</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Dado de impacto de 13 mm. x 3/8 corto Apex
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Hexágono: 13 mm<br/><br/>

Longitud: 38.1<br/><br/>

Diámetro de ancho de entrada: 20.6<br/><br/>

Diámetro de de ancho de salida: 20.6<br/><br/>

Profundidad de entrada: 8.7
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc