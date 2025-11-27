import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaIndustrial/9.-Aprietatuercas QA6.jpg';
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
        <h2>Aprietatuercas QA6<br/> Ingersoll Rand</h2><br/>
        <p><strong>SKU:</strong> QA6</p>
        <p><strong>Categorías:</strong> Herramienta industrial, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Aprietatuercas de aire ajustable Shut-Off serie QA6 proporcionan mejoras dramáticas en precisión, velocidad, tamaño, durabilidad y ergonomía
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Rango de par: 20 a 180 Nm / 14.8 a 132.8 pies-lbs.<br/><br/>

Velocidades: 125 a 540 RPM<br/><br/>

Las tablas de especificaciones incluyen ejemplos de nuestros modelos más populares
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc