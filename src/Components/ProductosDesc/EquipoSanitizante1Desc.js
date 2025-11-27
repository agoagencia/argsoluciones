import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos sanitizantes/1.-Sanispray HP 130 25R793.jpg';
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
        <h2>Sanispray HP 130 25R793</h2><br/>
        <p><strong>SKU:</strong> 25R793</p>
        <p><strong>Categorías:</strong>  Equipos sanitizantes, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Rociador sin aire de carro con 2 pistolas

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Flujo Máximo (Fl Oz/Min): 130<br/><br/>

Tamaño Máximo de Punta: 0.031 in<br/><br/>

Rango de Presión (psi): Adjustable 0-1000<br/><br/>

Tamaño de Partícula*: Tamaño de partícula ajustable: rocío de niebla fina a gruesa<br/><br/>

Capacidad: Use CUALQUIER contenedor<br/><br/>

Fuente de Alimentación: Con cable, 120V<br/><br/>

Uso Semanal: 100 Galones o menos<br/><br/>

Reparación modular
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc