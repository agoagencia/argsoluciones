import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaBateria/16.-Llave de trinquete de 14” R1120.jpg';
/* import imgPruebaa from "../img/productos/HerramientaElectrica/HerramientaElectricaBateria/1._Llave_angular_inalambrica_QXN.jpg" */
import {Link} from "react-router-dom"

function HerramientaElectricaBateria1Desc() {
  return (
    <div className='herramientaElectricaBateria1Desc'>

      <div className='herramientaElectricaBateria1Desc_left'>
        <img src={imgPruebaa}></img>
      </div>

      <div className='herramientaElectricaBateria1Desc_right'>
        <h2>Llave de trinquete de 1/4″ R1120</h2><br/>
        <p><strong>SKU:</strong> R1120</p>
        <p><strong>Categorías:</strong> Herramienta electrica de bateria, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          La llave de trinquete de 12 V cuenta con un control de avance / retroceso de perfil bajo, que tiene un diámetro amplio para un agarre fácil y mayor control en espacios reducidos
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Voltaje: 12V<br/><br/>

Batería: BL1203<br/><br/>

Velocidad libre (rpm): 260<br/><br/>

Rango de torque recomendado (ft-lb): 5-25<br/><br/>

Rango de torque (Nm): 7-34
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc