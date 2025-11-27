import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaIndustrial/31.-Pistola de impacto 3-4” 1720P1.jpg';
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
        <h2>Pistola de impacto 3/4″ 1720P1<br/> Ingersoll Rand</h2><br/>
        <p><strong>SKU:</strong> 1720P1</p>
        <p><strong>Categorías:</strong> Herramienta industrial, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Pistola de impacto con cuadro de 3/4″, 5,500 rpm.,1,000 golpes x min., Torque Max. 1,000 lb-pie (1,360 Nm.)
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Pistola de impacto 3/4"<br/><br/>

Velocidad: 5,500 rpm<br/><br/>

Impacto por minuto: 1,000 IPM<br/><br/>

Torque Max.: 1,000 lb-pie<br/><br/>

Peso: 11.88 lbs (5.38 kg)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc