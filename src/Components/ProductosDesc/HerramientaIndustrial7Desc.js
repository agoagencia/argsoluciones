import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaIndustrial/7.-Amoladora verticale 99V60P107.jpg';
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
        <h2>Amoladora vertical 99V60P107<br/> Ingersoll Rand</h2><br/>
        <p><strong>SKU:</strong> 99V60P107</p>
        <p><strong>Categorías:</strong> Herramienta industrial, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Las amoladoras verticales de la serie 99 son resistentes y confiables, con una gran cantidad de funciones que le ayudarán a realizar el trabajo de manera más rápida, fácil y segura
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Velocidad libre máxima: 6000<br/><br/>

Salida: 5/8 in. -11 rosca<br/><br/>

Peso: 5.1 kg<br/><br/>

Consumo de aire: 84 cfm<br/><br/>

Tamaño de entrada de aire: 1/2
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc