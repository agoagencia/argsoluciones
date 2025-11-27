import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaIndustrial/40.-Taladro tipo pistola 1P38ST4 Serie 1.jpg';
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
        <h2>Taladro tipo pistola 1P38ST4 Serie 1<br/> Ingersoll Rand</h2><br/>
        <p><strong>SKU:</strong> 1P38ST4</p>
        <p><strong>Categorías:</strong> Herramienta industrial, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          La pistola Serie 1 es excelente para la perforación de producción diaria
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Actuación: Inicio del gatillo<br/><br/>

No reversible<br/><br/>

Velocidad libre: 3,800 rpm<br/><br/>

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