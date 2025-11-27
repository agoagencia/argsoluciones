import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de piston/7.-Bomba de pistón de aceite 2 esferas Aro 612401-3.jpg';
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
        <h2>Bomba de pistón de aceite 2 esferas Aro 612401-3</h2><br/>
        <p><strong>SKU:</strong> 612401-3</p>
        <p><strong>Categorías:</strong> Bombas de piston, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Proporción 1:1, Motor de aire de 2″, Flujo máximo de 18 GPM (68.1 LPM), Fluido máximo: 150 psi

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Material de la bomba inferior: Acero al carbono niquelado<br/><br/>

Capacidad el contenedor: 55 galones (208.2 L)<br/><br/>

Tipo: Montaje en pared o tambor<br/><br/>

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