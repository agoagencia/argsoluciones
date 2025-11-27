import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/manejoDeMateriales/PolipastosElectricos/3.-Polipasto Electrico de Cadena de 1-4 t. ELK25-1ND25.jpg';
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
        <h2>Polipasto Electrico de Cadena de 1/4 t. ELK25-1ND25</h2><br/>
        <p><strong>SKU:</strong> ELK25-1ND25</p>
        <p><strong>Categorías:</strong>  Polipastos electricos, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          El polipasto ELK está elaborado para cumplir con una clasificación de ciclo de trabajo H4 y diseñado para usarse en aplicaciones de grado industrial

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Capacidad: 1/4 t<br/><br/>

Velocidad: 32/8 ft/min<br/><br/>

Caídas: 1<br/><br/>

Peso del equipo: 37.5 kg<br/><br/>

Peso de cadena: 0.34 kg/m<br/><br/>

Trifásico: 230/460/575/380 V
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc