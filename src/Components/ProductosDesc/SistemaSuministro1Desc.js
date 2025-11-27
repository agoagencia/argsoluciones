import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/SistemaSellos/Sistema de Suministro/1.-Bombas electricas y sistemas de suministro E-Flo SP.jpg';
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
        <h2>Bombas electricas y sistemas de<br/> suministro E-Flo SP</h2><br/>
        <p><strong>SKU:</strong> E-Flo SP</p>
        <p><strong>Categorías:</strong> Sistemas de suministro, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          La bomba de suministro eléctrico E-Flo SP está diseñada para aplicaciones de selladores y adhesivos industriales y automotrices.?Esta bomba avanzada aumentará drásticamente la eficiencia, mejorará las capacidades de control del sistema, optimizará el rendimiento del proceso y proporcionar? datos de rendimiento críticos

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Mejorar el rendimiento del proceso y del sistema<br/><br/>

Control de material avanzado<br/><br/>

Importantes ahorros de energía<br/><br/>

Elimina el uso de aire comprimido<br/><br/>

Motor extremadamente silencioso<br/><br/>

Evite el tiempo de inactividad<br/><br/>

Menores costos de mantenimiento
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc