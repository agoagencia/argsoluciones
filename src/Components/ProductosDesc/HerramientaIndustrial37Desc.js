import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaIndustrial/37.-Taladro en línea 1S30MF4 Serie 1.jpg';
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
        <h2>Taladro en línea 1S30MF4 Serie 1<br/> Ingersoll Rand</h2><br/>
        <p><strong>SKU:</strong>1S30MF4</p>
        <p><strong>Categorías:</strong> Herramienta industrial, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Los taladros de la serie 1 combinan calidad y rendimiento comprobados con economía para la perforación de producción diaria
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Actuación: Arranque por palanca<br/><br/>

No reversible<br/><br/>

Velocidad libre: 3,000 rpm<br/><br/>

Capacidad portapuntas: 1/4 chuck<br/><br/>

Entrada de aire: 1/4 pulg. NPT<br/><br/>

cfm: 11
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc