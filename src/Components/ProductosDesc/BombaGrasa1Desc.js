import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de grasa/1.-Bomba de aceite Aro AF0409A13PFL1.jpg';
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
        <h2>Bomba de aceite Aro AF0409A13PFL1</h2><br/>
        <p><strong>SKU:</strong>  AF0409A13PFL1</p>
        <p><strong>Categorías:</strong> Bombas de grasa, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de aceite, Relación 9:1, Motor de aire de 4 1/4″, Flujo máximo de 2.8 GPM (10.5 LPM), Fluido máximo: 1350 psi

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Material de la bomba inferior: acero al carbono<br/><br/>

Max. Ciclos recomendados / minuto: 75.0<br/><br/>

Tasa de flujo gpm (lpm): 3.9 (14.8)<br/><br/>

Ciclos por galón (litro): 19.2 (5.0)<br/><br/>

Tamaño de entrada de aire: 1/2"(F)<br/><br/>

Tamaño de salida de fluido: 3/4"(F)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc