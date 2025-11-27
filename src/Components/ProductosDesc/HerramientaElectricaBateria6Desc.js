import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaBateria/6.-Atornillador inalambrico DF330D.jpg';
/* import imgPruebaa from "../img/productos/HerramientaElectrica/HerramientaElectricaBateria/1._Llave_angular_inalambrica_QXN.jpg" */
import {Link} from "react-router-dom"

function HerramientaElectricaBateria1Desc() {
  return (
    <div className='herramientaElectricaBateria1Desc'>

      <div className='herramientaElectricaBateria1Desc_left'>
        <img src={imgPruebaa}></img>
      </div>

      <div className='herramientaElectricaBateria1Desc_right'>
        <h2>Atornillador inalambrico DF330D</h2><br/>
        <p><strong>SKU:</strong>  DF330D</p>
        <p><strong>Categorías:</strong> Herramienta electrica de bateria, Makita</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Luz led de trabajo con función de destello, empuñadura de forma ergonómica
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Luz led de trabajo con función de destello, empuñadura de forma ergonómica.<br/><br/>

          Capacidad: Collet:3.18mm (1/8) o 6.35mm (1/4)<br/><br/>

Revoluciones por minuto 0-28mm/seg. 0-66in/min)<br/><br/>

Dimensiones (LxAxA) 296x77x118mm (11-5/8?x5-1/8?x3x4-5/8)

Peso neto 1.4kg (3.1lbs)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc