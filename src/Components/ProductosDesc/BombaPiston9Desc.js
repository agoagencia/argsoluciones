import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de piston/9.-Bomba de pistón paquete de 2 esferas Aro AF0409C11SS22.jpg';
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
        <h2>Bomba de pistón paquete de 2 esferas Aro AF0409C11SS22</h2><br/>
        <p><strong>SKU:</strong>   AF0409C11SS22</p>
        <p><strong>Categorías:</strong> Bombas de piston, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de pistón Serie AF0409A, Proporción 9:1, Motor de aire de 4 1/4″, Flujo máximo de 2.8 GPM (10.5 LPM), Fluido máximo: 1350 psi

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Material de la bomba inferior: Acero inoxidable<br/><br/>

Capacidad el contenedor: 5 galones<br/><br/>

Material del émbolo: Acero inoxidable, tubo revestido de cerámica<br/><br/>

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