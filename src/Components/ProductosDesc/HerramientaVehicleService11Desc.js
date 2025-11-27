import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaVehicleService/11.-Turbina recta 14″ 308B Ingersoll Rand.jpg';
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
        <h2>Turbina recta 1/4″ 308B Ingersoll Rand</h2><br/>
        <p><strong>SKU:</strong> 308B</p>
        <p><strong>Categorías:</strong> Herramientas vehicle service, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Con una configuración de ángulo recto y una opción compacta y recta, podrá llegar fácilmente a los lugares de trabajo reducidos
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Velocidad libre máxima: 25000<br/><br/>

Longitud: 174 mm<br/><br/>

Peso: 0.46 kg<br/><br/>

Consumo de aire: 28 cfm
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc