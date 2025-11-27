import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/20.-Bomba de diafragma Graco D55A11.jpg';
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
        <h2>Bomba de diafragma Graco D55A11</h2><br/>
        <p><strong>SKU:</strong> D55A11</p>
        <p><strong>Categorías:</strong> Bombas de diafragma, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de diafragma doble de plástico Graco Husky 515 de accionamiento neumático, Marca Graco
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Centro de 1/2" (12,7?mm) o extremos de 3/4" (19,05) Estándar: sección central de polipropileno<br/><br/>

Asientos: Acetal<br/><br/>

Bolas y diafragmas: Teflón
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc