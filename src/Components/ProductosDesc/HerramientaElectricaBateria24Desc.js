import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaBateria/24.-Taladro atornillador inalambrico DDF459Z.jpg';
/* import imgPruebaa from "../img/productos/HerramientaElectrica/HerramientaElectricaBateria/1._Llave_angular_inalambrica_QXN.jpg" */
import {Link} from "react-router-dom"

function HerramientaElectricaBateria1Desc() {
  return (
    <div className='herramientaElectricaBateria1Desc'>

      <div className='herramientaElectricaBateria1Desc_left'>
        <img src={imgPruebaa}></img>
      </div>

      <div className='herramientaElectricaBateria1Desc_right'>
        <h2>Taladro atornillador inalambrico DDF459Z
</h2><br/>
        <p><strong>SKU:</strong> DDF459Z</p>
        <p><strong>Categorías:</strong> Herramienta electrica de bateria, Makita</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Construcción con engranes de metal que asegura una mayor
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Torque máximo: Fuerte/Suave: 45/25N.m<br/><br/>

Dimensiones: 179x78x256mm (7"x3-1/16"x10-1/8")<br/><br/>

Velocidad máxima: 1,500RPM
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc