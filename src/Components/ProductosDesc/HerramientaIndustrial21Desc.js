import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaIndustrial/21.-Herramienta cónica 7RAQT4.jpg';
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
        <h2>Herramienta cónica 7RAQT4<br/> Serie 7 Ingersoll Rand</h2><br/>
        <p><strong>SKU:</strong> 7RAQT4</p>
        <p><strong>Categorías:</strong> Herramienta industrial, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Con altos niveles de potencia, la herramienta cónica de la serie 7 puede desempeñarse rápidamente y hacer cualquier trabajo con facilidad
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Capacidad del portabrocas: 13 mm<br/><br/>

Velocidad libre: 475 rpm<br/><br/>

Longitud: 300 mm
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc