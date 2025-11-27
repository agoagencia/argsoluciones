import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaIndustrial/19.-Escareador de aguja 172LNA1.jpg';
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
        <h2>Escareador de aguja 172LNA1 Serie 172 <br/>Ingersoll Rand</h2><br/>
        <p><strong>SKU:</strong> 172LNA1</p>
        <p><strong>Categorías:</strong> Herramienta industrial, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Con 5500 soplidos por minuto, este raspador de aguja operado con palanca no solo es rápido, sino que también es extremadamente duradero y eficiente
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Golpes por minuto: 5500<br/><br/>

Peso: 2.38 kg<br/><br/>

Estilo del acelerador: Palanca<br/><br/>

Entrada de aire: 1/4 NPT
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc