import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de grasa/5.-Bomba de grasa y paquete Aro AF0450L53PKL1.jpg';
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
        <h2>Bomba de grasa y paquete Aro AF0450L53PKL1</h2><br/>
        <p><strong>SKU:</strong>  AF0450L53PKL1</p>
        <p><strong>Categorías:</strong> Bombas de grasa, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de grasa Relación 50:1, Entrega máx.: 2.35 kg (5,2 lbs), Presión de fluido: 0 – 7500 (0 – 517)

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Relación: 50:1<br/><br/>

Salida de material: 1/2 NPT (F)<br/><br/>

Rango de presión de entrada de aire psi (bar): 0 - 150 (0 - 10)<br/><br/>

Rango de presión de fluido psi (bar): 0 - 7500 (0 - 517)<br/><br/>

Entrega máxima / minuto a 75 ciclos: 5.2 libras (2.35 kg)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc