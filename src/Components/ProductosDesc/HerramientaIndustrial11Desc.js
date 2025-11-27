import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaIndustrial/11.-Desarmador neumatico 41PA.jpg';
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
        <h2>Desarmador neumatico 41PA</h2><br/>
        <p><strong>SKU:</strong> 41PA</p>
        <p><strong>Categorías:</strong> Herramienta industrial, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Desarmador Neumático, Marca Ingersoll Rand, Tipo Pistola, Rango de Torque de 10-100 In-Lbs, Velocidad Max 1600 RPM, Clutch Ajustable, Torque Controlado y Paro Automático
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Torque min. 15.0 libras<br/><br/>

Torque max. 80.0 en libras<br/><br/>

Tipo de embrague: apagado automático<br/><br/>

Las tablas de especificaciones incluyen ejemplos de nuestros mas populares
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc