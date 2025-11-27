import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de recubrimiento/16.-HGB Regulador DeVilbiss.jpg';
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
        <h2>HGB Regulador DeVilbiss</h2><br/>
        <p><strong>SKU:</strong> HGB</p>
        <p><strong>Categorías:</strong> Equipos de Recubrimiento, Carlisle-DeVilbiss, Mercados, Cerámica, Carlisle-Devilbiss Cerámica</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Los reguladores de fluido Binks con control manual o automático se pueden utilizar con bombas de diafragma, tanques de alimentación a presión o cualquier tamaño de sistema de circulación de pintura.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Ajustes de presión de alta precisión sin "fluencia" de presión<br/><br/>

Presión de ajuste mínima por debajo de 0,25 bar (3,75 psi) El diseño del cuerpo del regulador reduce el desperdicio de pintura durante el mantenimiento<br/><br/>

Pasos de fluido en acero inoxidable 303 de serie<br/><br/>

Compatible con pinturas y materiales a base de agua y solventes<br/><br/>

Control manual o automático
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc