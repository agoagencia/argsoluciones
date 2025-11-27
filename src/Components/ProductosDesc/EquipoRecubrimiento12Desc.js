import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de recubrimiento/12.-Bombas de Serie Maple 7-15 Binks.jpg';
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
        <h2>Bombas de Serie Maple 7/15 Binks</h2><br/>
        <p><strong>SKU:</strong> MAPLE 7/15</p>
        <p><strong>Categorías:</strong> Equipos de Recubrimiento, Carlisle-Binks, Automotriz, Madera, Carlisle-Binks Automotriz, Carlisle-Binks Madera</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Avanzada, Operada por aire, Pistón Horizontal, Bombas de Sistema de Pintura
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Motor de aire libre de lubricante de hielo bajo con tecnología patentada de escape rápido elimina el riesgo de formación de hielo de la válvula
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc