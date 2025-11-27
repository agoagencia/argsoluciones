import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de piston/8.-Bomba de pistón de aceite 2 esferas Aro 650110-1C.jpg';
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
        <h2>Bomba de pistón de aceite 2 esferas Aro 650110-1C</h2><br/>
        <p><strong>SKU:</strong>  650110-1C</p>
        <p><strong>Categorías:</strong>Bombas de piston, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Proporción 2:1, Motor de aire de 4 1/4″, Flujo máximo de 2.0 GPM (7.5 LPM), 0-300 PSI (0-20.7 bar)

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Material de la bomba inferior: Acero al carbono niquelado<br/><br/>

Material del émbolo: Acero al carbono<br/><br/>

Empaquetaduras superiores: PTFE<br/><br/>

Empaquetaduras inferiores: PTFE
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc