import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de piston/3.-Bomba de pistón de 2 esferas Aro NM2202A-41-731.jpg';
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
        <h2>Bomba de pistón de 2 esferas Aro NM2202A-41-731</h2><br/>
        <p><strong>SKU:</strong>  NM2202A-41-731</p>
        <p><strong>Categorías:</strong>Bombas de piston, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de pistón Serie NM2202X-X1-X31, Proporción 2:1, Motor de aire de 2″, Flujo máximo de 2.15 GPM (8.14 LPM), Fluido máximo: 351 psi

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Material de la bomba inferior: Acero al carbono<br/><br/>

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