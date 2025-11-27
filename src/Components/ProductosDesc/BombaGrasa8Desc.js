import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de grasa/8.-Bomba de lubricación Aro LM2250E-41-B.jpg';
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
        <h2>Bomba de lubricación Aro LM2250E-41-B</h2><br/>
        <p><strong>SKU:</strong>  LM2250E-41-B</p>
        <p><strong>Categorías:</strong> Bombas de grasa, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba Aro lm2250e-41-b relación 50:1 bomba de grasa » thunder » con motor de aire de 2″ para tambor de 400 libras
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Margen de presión de la toma de aire . 0 - 150 p.s.i. (0 - 10.3 bar)<br/><br/>

Margen de presión del fluido: 0 - 7500 p.s.i. (0 - 517.2 bar)<br/><br/>

Ciclos máximos registrados por minuto: 80<br/><br/>

Desplazamiento por ciclo: 0.300 in.#
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc