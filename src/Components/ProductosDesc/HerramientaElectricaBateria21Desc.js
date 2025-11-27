import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaBateria/21.-Roto martillo inalambrico GD0811C.jpg';
/* import imgPruebaa from "../img/productos/HerramientaElectrica/HerramientaElectricaBateria/1._Llave_angular_inalambrica_QXN.jpg" */
import {Link} from "react-router-dom"

function HerramientaElectricaBateria1Desc() {
  return (
    <div className='herramientaElectricaBateria1Desc'>

      <div className='herramientaElectricaBateria1Desc_left'>
        <img src={imgPruebaa}></img>
      </div>

      <div className='herramientaElectricaBateria1Desc_right'>
        <h2>Roto martillo inalambrico GD0811C</h2><br/>
        <p><strong>SKU:</strong> GD0811C</p>
        <p><strong>Categorías:</strong> Herramienta electrica de bateria, Makita</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Selector de velocidad variable, interruptor tipo paleta
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Potencia: 750W<br/><br/>

Capacidad: Collet : 8mm (1/4”)<br/><br/>

Velocidad sin carga: 1,800-7,000rpm<br/><br/>

Peso neto: 2.0kg (4.4lbs)<br/><br/>

Cable de conexión: 2.5m (8.2ft)<br/><br/>

Dimensiones (LxAxA): 390x75x88mm (15-3/8"x2-15/16"x3-1/2")
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc