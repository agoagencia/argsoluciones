import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de grasa/4.-Bomba de grasa Aro LP2002-W.jpg';
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
        <h2>Bomba de grasa Aro LP2002-W</h2><br/>
        <p><strong>SKU:</strong>  LP2002-W</p>
        <p><strong>Categorías:</strong> Mercados, Automotriz, Aro Automotriz, Bombas de grasa, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Equipo de grasa neumático para cubetas de 19 litros, con bomba relación 50:1 con motor de 2″ de diámetro. Incluye pistola con manguera de alta presión de 6 pie, (1.8 mts.) girador «Z», cubeta con tapa y carrito con maneral

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Relación: 50:1<br/><br/>

Diámetro del motor: 2? (5.08 cm)<br/><br/>

Carrera: (Acción sencilla): 3? (7.62 cm)<br/><br/>

Toma de aire: 1/4 - 18 N.P.T.F.<br/><br/>

Salida del material: 3/8 - 18 N.P.T.F.<br/><br/>

Margen de presión de la toma de aire: 0 - 150 p.s.i. (0 - 10.3 bar)<br/><br/>

Margen de presión del fluido: 0 - 7500 p.s.i.
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc