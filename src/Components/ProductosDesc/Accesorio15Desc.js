import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/accesorios/15.-Regulador de presion de fluido aro 651790-A3B-B.jpg';
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
        <h2>Regulador de presion de fluido aro 651790-A3B-B</h2><br/>
        <p><strong>SKU:</strong> 651790-A3B-B</p>
        <p><strong>Categorías:</strong> Accesorios</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          El regulador de fluido Ingersoll Rand / ARO I.D.L. ofrece regulación de presión constante, uniforme, con ajuste fácil de giro para bomba de pistón

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tamaño del puerto: 3/8<br/><br/>

Materiales de construcción: Acero inoxidable<br/><br/>

Asiento: Carbono de tugsteno<br/><br/>

Presión de trabajo con manómetro psi (bar): 120 (8.1)<br/>

Rango de presión manométrica psi: 0 - 60
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc