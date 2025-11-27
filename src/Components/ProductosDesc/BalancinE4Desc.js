import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/manejoDeMateriales/BalancinesElectricos/4.-Balancin mecanico EB35000.jpg';
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
        <h2>Balancin mecánico EB35000</h2><br/>
        <p><strong>SKU:</strong>  EB35000</p>
        <p><strong>Categorías:</strong>Balancines mecánicos, Aeromotive</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Balancín mecánico con capacidad de 11.4 -15.9 kg (25-35 lb), recorrido de cable 2 mts. (6.61 pie)
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          El bloqueo automático del tambor asegura la carga incluso si la tensión cae repentinamente<br/><br/>

Bloqueo manual del tambor para reemplazar fácilmente la herramienta<br/><br/>

Rango de movimiento completo con percha giratoria de 360<br/><br/>

Fácil ajuste externo sin herramientas especiales<br/><br/>

Conjunto de cable de acero estampado
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc