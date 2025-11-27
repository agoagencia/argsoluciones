import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaBateria/22.-Roto martillo inalambrico PH03.jpg';
/* import imgPruebaa from "../img/productos/HerramientaElectrica/HerramientaElectricaBateria/1._Llave_angular_inalambrica_QXN.jpg" */
import {Link} from "react-router-dom"

function HerramientaElectricaBateria1Desc() {
  return (
    <div className='herramientaElectricaBateria1Desc'>

      <div className='herramientaElectricaBateria1Desc_left'>
        <img src={imgPruebaa}></img>
      </div>

      <div className='herramientaElectricaBateria1Desc_right'>
        <h2>Roto martillo inalambrico PH03</h2><br/>
        <p><strong>SKU:</strong> PH03</p>
        <p><strong>Categorías:</strong> Herramienta electrica de bateria, Makita</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Luz led de trabajo con función de destello posterior, operación de alta eficiencia con batería de 10.8 v
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tipo de Mango: Recto Vertical<br/><br/>

Batería de Repuesto: BL1014<br/><br/>

Voltaje: 12.0<br/><br/>

Potencia Máxima: 12V<br/><br/>

Tamaño de Mandril: 3/8"
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc