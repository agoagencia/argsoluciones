import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de alta presión/1.-Bomba de alta presion de 2” Aro PH20F-ASP-STT-B.jpg';
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
        <h2>Bomba de alta presion de 2″ Aro PH20F-ASP-STT-B</h2><br/>
        <p><strong>SKU:</strong> PH20F-ASP-STT-B</p>
        <p><strong>Categorías:</strong> Bombas de alta presion, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Genera casi 300 psi con presión de aire normal de 100 psi de presión de entrada. Sin bloqueos. Excelente compatibilidad de materiales. Mantenimiento sencillo. Transferencia ideal de recirculación de pintura y revestimientos con alto contenido de sólidos.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Materiales de la carcasa de la bomba: Acero inoxidable<br/><br/>

Materiales del diafragma: Teflón
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc