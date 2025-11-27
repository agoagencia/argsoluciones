import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Sistemas de medición/2.-Sistema de control y supervision de fluidos en linea ProControl 1KE Plus.jpg';
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
        <h2>Sistema de control y supervision de fluidos en linea ProControl 1KE Plus</h2><br/>
        <p><strong>SKU:</strong>  ProControl 1KE Plus</p>
        <p><strong>Categorías:</strong> Sistemas de medicion, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          ProControl 1KE Plus es un sistema de control de fluidos en línea que mide con precisión y regula los fluidos monocomponente y el aire de atomización de la pistola, mejorando el proceso de acabado

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Voltaje de la caja de control (V CC): 15<br/><br/>

Tipo de control de flujo: Control de flujo de fluido<br/><br/>

Presión máxima de entrada de aire (psi): 100<br/><br/>

Presión máxima de entrada de fluido (psi): 100<br/><br/>

Temperatura máxima de funcionamiento (? F): 120<br/><br/>

Presión máxima de trabajo (MPa): 0.7<br/><br/>

Presión máxima de trabajo (psi): 100<br/><br/>

Temperatura mínima de funcionamiento (? F): 32<br/><br/>

Fuente de alimentación: Ordenar por separado<br/><br/>

Tipo de sistema: Control de flujo de fluido
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc