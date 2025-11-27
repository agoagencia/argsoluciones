import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaIndustrial/28.-Martillo cincelador 2A2SA Serie A.jpg';
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
        <h2>Martillo cincelador 2A2SA <br/>Serie A Ingersoll Rand</h2><br/>
        <p><strong>SKU:</strong>  2A2SA</p>
        <p><strong>Categorías:</strong> Mercados, Automotriz, Ingersoll Rand Automotriz, Herramienta industrial, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Los martillos cinceladores de la serie A son ideales para cualquier trabajo. Con su increíble relación potencia-peso, estos martillos aumentarán la productividad y facilitarán el trabajo
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Golpes por minuto: 2300<br/><br/>

Peso: 6.9 kg<br/><br/>

Consumo de aire: 28 cfm<br/><br/>

Entrada de aire: 3/8 NPT
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc