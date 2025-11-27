import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de grasa/7.-Bomba de grasa y paquete Aro LM2350E-21-B.jpg';
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
        <h2>Bomba de grasa y paquete Aro LM2350E-21-B</h2><br/>
        <p><strong>SKU:</strong>  LM2350E-21-B</p>
        <p><strong>Categorías:</strong> Bombas de grasa, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de grasa, Relación 50:1, Flujo máx.: 4 gpm (2 lpm), Presión de fluido: 0-7500 psi (0-517,2 bar)

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Material de la bomba: Acero al carbón<br/><br/>

Diámetro de motor: 3"<br/><br/>

Rango de presión de entrada de aire psi (bar): 0-150 (0-10.3)<br/><br/>

Rango de presión de fluido psi (bar): 0-7500 (0-517.2)<br/><br/>

Max. Ciclos recomendados / minuto: 135
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc