import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaIndustrial/18.-Destornillador neumatico 35RSA-5Q.jpg';
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
        <h2>Destornillador neumatico<br/> 35RSA-5Q Cleco</h2><br/>
        <p><strong>SKU:</strong> 35RSA-5Q</p>
        <p><strong>Categorías:</strong> Herramienta industrial, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Destornillador neumático CLECO 35RSA-5Q
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Activación: en línea - pulsar para iniciar - botón de retroceso<br/><br/>

Portabrocas: portabrocas de cambio rápido de 1/4 "<br/><br/>

Rango de torsión: 15 a 180 pulgadas lbs. (1.7 a 20 Newton metros)<br/><br/>

Velocidad libre: 300RPM<br/><br/>

Entrada de aire: 1/4 "
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc