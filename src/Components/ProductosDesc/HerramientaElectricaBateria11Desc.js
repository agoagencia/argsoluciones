import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaBateria/11.-Esmeriladora inalambrica DGA458Z.jpg';
/* import imgPruebaa from "../img/productos/HerramientaElectrica/HerramientaElectricaBateria/1._Llave_angular_inalambrica_QXN.jpg" */
import {Link} from "react-router-dom"

function HerramientaElectricaBateria1Desc() {
  return (
    <div className='herramientaElectricaBateria1Desc'>

      <div className='herramientaElectricaBateria1Desc_left'>
        <img src={imgPruebaa}></img>
      </div>

      <div className='herramientaElectricaBateria1Desc_right'>
        <h2>Esmeriladora inalambrica DGA458Z</h2><br/>
        <p><strong>SKU:</strong> DGA458Z</p>
        <p><strong>Categorías:</strong> Herramienta electrica de bateria, Makita</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Equipada con control de velocidad automático, rendimiento superior en aplicaciones de trabajo continuo
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Diámetro de disco 115 mm. (1-1/2")<br/><br/>

Velocidad sin carga 8.500 rpm<br/><br/>

Dimensiones (LxAxA) 362x130x151mm (14-1/4"x5-1/8"x5-15/16")<br/><br/>

Peso neto 2.3kg (5.07lbs)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc