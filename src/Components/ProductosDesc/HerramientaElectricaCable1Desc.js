import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaCable/1.-Atornillador de cable angular QE2AL007PA3S06.jpg';
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
        <h2>Atornillador de cable angular<br/>Ingersoll Rand QE2AL007PA3S06</h2><br/>
        <p><strong>SKU:</strong> QE2AL007PA3S06</p>
        <p><strong>Categorías:</strong> Herramienta electrica de cable, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Atornillador QE2 proporciona una precisión superior, ergonomía y durabilidad para cumplir con sus requisitos de ajuste críticos y maximiza su productividad. Presenta un rango de torsión de 0,3 Nm a 400 Nm.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Torque (fts-lbs): 1.0-5.2<br/><br/>

Actuación: Lever start<br/><br/>

Configuración: Angulo<br/><br/>

Velocidad (rpm): 1100
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc