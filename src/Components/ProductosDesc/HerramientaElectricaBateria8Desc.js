import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaBateria/8.-Calafateadora inalambrico DCG180RME.jpg';
/* import imgPruebaa from "../img/productos/HerramientaElectrica/HerramientaElectricaBateria/1._Llave_angular_inalambrica_QXN.jpg" */
import {Link} from "react-router-dom"



function HerramientaElectricaBateria1Desc() {
  return (
    <div className='herramientaElectricaBateria1Desc'>

      <div className='herramientaElectricaBateria1Desc_left'>
        <img src={imgPruebaa}></img>
      </div>

      <div className='herramientaElectricaBateria1Desc_right'>
        <h2>Calefateadora inalambrico DCG180RME</h2><br/>
        <p><strong>SKU:</strong> DCG180RME</p>
        <p><strong>Categorías:</strong> Herramienta electrica de bateria, Makita</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Control de velocidad variable para tener mayor precisión del caudal del sellador
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
       
          Capacidad Collet: 3.18mm (1/8") o 6.35mm (1/4")<br/><br/>

Revoluciones por minuto 0-28-mm/seg (0-66in/min)<br/><br/>

Dimensiones LxAxA 296x77x118mm (11-5/8x3?x4-5/8")<br/><br/>

Peso neto 1.4kg 3.1 lbs
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc