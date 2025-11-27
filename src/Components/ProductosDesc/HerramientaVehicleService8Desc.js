import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaVehicleService/8.-Pistola de impacto 1-2 231HA.jpg';
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
        <h2>Pistola de impacto 1/2″ 231HA</h2><br/>
        <p><strong>SKU:</strong> 231HA</p>
        <p><strong>Categorías:</strong> Herramientas vehicle service, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Es la herramienta más popular de su clase. Introducido hace más de 25 años y continuamente refinado, ofrece las características de potencia y rendimiento para hacer frente a los trabajos más difíciles con facilidad, así como probada durabilidad y economía.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Rango de torque de trabajo 25-350 lb-pie<br/><br/>

Max. Torque:590 lb-pie (813 Nm.)<br/><br/>

Velocidad Max. 8,000 rpm<br/><br/>

Peso: 2.63<br/><br/>

Consumo de Aire: 22 CFM<br/><br/>

Long. 7.3"
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc