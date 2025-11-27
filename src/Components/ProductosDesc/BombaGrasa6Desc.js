import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de grasa/6.-Bomba de grasa y paquete Aro AF0475L43PBL1.jpg';
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
        <h2>Bomba de grasa y paquete Aro AF0475L43PBL1</h2><br/>
        <p><strong>SKU:</strong>  AF0475L43PBL1</p>
        <p><strong>Categorías:</strong> Bombas de grasa, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de grasa, Relación 75:1, Entrega máx.: 5.5 lbs/min, Presión de fluido: 0-7500 (0-517)

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Relación: 75:1<br/><br/>

Salida de material: 1/2 NPT (F)<br/><br/>

Rango de presión de entrada de aire psi (bar): 0-100 (0-6.9)<br/><br/>

Rango de presión de fluido psi (bar): 0 - 7500 (0 - 517)<br/><br/>

Entrega máxima / minuto a 75 ciclos: 5.5 libras (2.5 kg)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc