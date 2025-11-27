import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaCable/4.-Atornillador de cable lineal QE2SP007P11S04.jpg';
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
        <h2>Atornillador de cable lineal Ingersoll Rand QE2SP007P11S04</h2><br/>
        <p><strong>SKU:</strong> L.SP3</p>
        <p><strong>Categorías:</strong> Herramienta electrica de cable, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Atornillador lineal rango de torsión de 0,3 Nm a 400 Nm y velocidades variables de hasta 3000 rpm, la serie en línea QE2 es ideal para cualquier trabajo de sujeción
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Torque (fts-lbs): 1.0-4.8<br/><br/>

Actuación: Trigger + Push-to-Start<br/><br/>

Configuración: En línea<br/><br/>

Velocidad (rpm): 1250
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc