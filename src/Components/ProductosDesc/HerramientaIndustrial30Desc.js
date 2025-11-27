import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaIndustrial/30.-Mini Matraca 105-D3 Serie 105.jpg';
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
        <h2>Mini Matraca 105-D3 Serie 105<br/> Ingersoll Rand</h2><br/>
        <p><strong>SKU:</strong> 105-D3</p>
        <p><strong>Categorías:</strong> Herramienta industrial, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Los trinquetes neumáticos de la serie 105 son pequeños, duraderos y fáciles de manejar para los técnicos de reparación de vehículos.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tamaño: 3/8"<br/><br/>

Tipo de interruptor: Accionamiento de palanca; velocidad variable<br/><br/>

Rpm: 250<br/><br/>

Rango de torsión: 5-20 ft/lb<br/><br/>

Max torque: 34 NM
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc