import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaCable/15.-Pistola Serie QE4 QE4PP010P11Q04.jpg';
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
        <h2>Pistola Serie QE4 QE4PP010P11Q04</h2><br/>
        <p><strong>SKU:</strong> QE4PP010P11Q04</p>
        <p><strong>Categorías:</strong> Cabezales, Lubbering</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          La pistola QE4 es una herramienta portátil, duradera y de alta velocidad que cumplir con todos sus requisitos de ajuste. Con un agarre ergonómico y construido para una mejor experiencia del usuario, podrá realizar fácilmente cualquier proyecto
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Torque (fts-lbs): 1.5-5.9<br/><br/>

Actuación: Trigger + Push-to-Start<br/><br/>

Configuración: Pistola<br/><br/>

Velocidad (rpm): 1820
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc