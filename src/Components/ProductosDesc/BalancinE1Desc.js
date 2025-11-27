import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/manejoDeMateriales/BalancinesElectricos/1.-Balancin mecanico 220KA.jpg';
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
        <h2>Balancin mecánico 220KA</h2><br/>
        <p><strong>SKU:</strong> 220KA</p>
        <p><strong>Categorías:</strong> Balancines mecánicos, Aeromotive</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Balancín mecánico con capacidad de 91-100 kg. (200 – 221 lb), recorrido de cable 1.8 mts. (6 pie)
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Cambios rápidos y fáciles de herramientas con bloqueo manual del tambor<br/><br/>

El bloqueo automático del tambor asegura la carga incluso si la tensión cae<br/><br/>

El manejo seguro y fácil de los resortes está asegurado con un resorte principal en contenedores de servicio pesado<br/><br/>

Fácil ajuste externo sin herramientas especiales
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc