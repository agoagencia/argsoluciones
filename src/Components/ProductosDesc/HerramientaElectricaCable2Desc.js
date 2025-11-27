import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaCable/2.-Atornillador de cable angular QE4AT013PA2S04.jpg';
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
        <h2>Atornillador de cable angular QE4AT013PA2S04</h2><br/>
        <p><strong>SKU:</strong> QE4AT013PA2S04</p>
        <p><strong>Categorías:</strong> Herramienta electrica de cable, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Las llaves de ángulo QE4 son duraderas y de alta velocidad. Con un rango de torsión de 0,3 Nm a 400 Nm y hasta 1200 rpm, esta serie tiene la precisión y la durabilidad para cumplir con sus requisitos de ajuste.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Torque (fts-lbs): 1.9-7.7<br/><br/>

Actuación: Trigger Start<br/><br/>

Configuración: Angular<br/><br/>

Velocidad (rpm): 1200
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc